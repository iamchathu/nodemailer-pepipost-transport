# Pepipost transport module for Nodemailer

[![npm](https://img.shields.io/npm/v/nodemailer-pepipost-transport.svg)](https://www.npmjs.com/package/nodemailer-pepipost-transport)
[![Twitter](https://img.shields.io/twitter/url/https/www.npmjs.com/package/nodemailer-pepipost-transport.svg?style=social)](https://twitter.com/intent/tweet?text=Pepipost:&url=https://www.npmjs.com/package/nodemailer-pepipost-transport)

Applies for [Nodemailer](http://www.nodemailer.com/) v1+ and not for v0.x where transports are built-in.

## Usage

Install with npm

    npm install nodemailer-pepipost-transport

Require to your script

```javascript
var nodemailer = require('nodemailer');
var pepipostTransport = require('nodemailer-pepipost-transport');
```

Create a Nodemailer transport object

```javascript
var transporter = nodemailer.createTransport(pepipostTransport(options))
```

Where

  * **options** defines authentication
    * **api_key** - `yoursecretkey` of Pepipost.
   
### Examples

**Example 1.** Use Pepipost API key to set up the sender

```javascript
const transporter = nodemailer.createTransport(pepipostTransport ({
    auth: {
        api_key: 'secretkey'
    }
}));
```

Send mail example

```javascript
const mail = {
    from: 'Name <from@your.domain>',
    to: ['to@client.domain'],
    subject: 'Test Emailer',
    html: '<p> hi, this is a test email sent via Pepipost JSON API.</p>',
};
transporter.sendMail(mail, function(err, info) {
    if (err) {
        console.log(err);
    }
        console.log(info);
});
```

## License

**MIT**
