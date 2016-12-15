'use strict';

const PepipostSDK = require('pepipost-sdk-nodejs');
const packageData = require('package.json');

let Email = PepipostSDK.EmailController;

function PepiPostTransport(options) {
    options = options || {};
    
    this.options = options;
    this.auth = options.auth;
    this.name = 'pepipost';
    this.version = packageData.version;

}

PepiPostTransport.prototype.send = function (mail, callback) {
    
	var data = {
	    "api_key": this.auth.api_key,
	    "email_details": {
	        "fromname": mail.from[1],
	        "subject": mail.subject,
	        "from": mail.from[0],
	        "content": mail.html || mail.text
	    },
	    "recipients": mail.to
	};

	Email.send(data,(err,parsed,context)=>{
		if(parsed.errorcode==0){
			callback(null,"Mail send successfully");
		}else{
			callback(err,parsed.errormessage);
		}
	});

};

// expose to the world
module.exports = function (options) {
    return new PepiPostTransport(options);
};


