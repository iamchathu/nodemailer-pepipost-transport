'use strict';

// This example creates a transport object that pipes the raw message to console

var transport = {
    name: 'pepipost transport',
    version: '0.0.1',
    send: function (mail, callback) {
        var input = mail.message.createReadStream();
        input.pipe(process.stdout);
        input.on('end', function () {
            callback(null, true);
        });
    }
};
