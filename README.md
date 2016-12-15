# Pepipost transport module for Nodemailer

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

**Example 1.** Use AWS credentials to set up the sender

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