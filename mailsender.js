const sgMail = require('@sendgrid/mail');

sgMail.setApiKey("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");

const msg = {
  to: 'wambutujoseph@gmail.com',
  from: 'info.apiyolinetgmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);