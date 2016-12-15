'use strict';

const PepipostSDK = require('pepipost-sdk-nodejs');
const packageData = require('./package.json');
const addressparser = require('addressparser');

let Email = PepipostSDK.EmailController;

function PepiPostTransport(options) {
    options = options || {};
    
    this.options = options;
    this.auth = options.auth;
    this.name = 'pepipost';
    this.version = packageData.version;

}

PepiPostTransport.prototype.send = function (mail, callback) {
    
	let data = {
	    "api_key": this.auth.api_key,
	    "email_details": {
	        "fromname": addressparser(mail.data.from)[0].name,
	        "subject": mail.data.subject,
	        "from": addressparser(mail.data.from)[0].address,
	        "content": mail.message.content
	    },
	    "recipients": mail.data.to || []
	};

	console.log(data.recipients);

	Email.send(data,(err,parsed,context)=>{
		console.log(parsed);
		// console.log(context);
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


