/*
API endpoint returns images in a collection by their collectionName i.e. "Mythologies"
Arguments:
  collectionName (required) This is the Gallery name assigned by the developer.
  example:
  http://localhost:3000/collection/[collectionName]
Returns:
  Array of JSON objects containing parks for the specified collectionName.
  Upon init reads list of directories (images) from public/gallery/[collectionName]
  This functionality is designed to work with the filesystem since the basic filesystem API
  provides the simplest solution to storing the data i.e. image file/.jpg and the metadata
  i.e. collectionName and imageName.
*/
const nodemailer = require('nodemailer')
// const sgMail = require('@sendgrid/mail')

// sgMail.setApiKey(process.env.SENDGRID_API)

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})



export default (req, res) => {
  const result = {}
  const {
    query: { destinationEmail }
  } = req
  console.log(req.body)

  const mailOptions = {
    from: process.env.SMTP_SENDER, // sender address
    to: process.env.SMTP_RECIPIENT, // list of receivers
    subject: req.body.data.senderName, // Subject line
    html: `${req.body.data.senderName}<br />${req.body.data.senderEmail}<br />${req.body.data.senderPhone}<br />${req.body.data.senderMessage}`// plain text body
  }
  
  

  // const msg = {
  //   to: 'mail@jsnkng.com',
  //   from: 'website@jsnkng.com',
  //   subject: req.body.data.senderName,
  //   text: `${req.body.data.senderName} ${req.body.data.senderEmail} ${req.body.data.senderPhone} ${req.body.data.senderMessage}`,
  //   html: `${req.body.data.senderName}<br />${req.body.data.senderEmail}<br />${req.body.data.senderPhone}<br />${req.body.data.senderMessage}`,
  // }

  const sendMail = async (callback) => {
    // sgMail.send(msg)

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        result.error = { error: true, message: err, niceMessage: 'We’re sorry, your message failed to send. Please try back later.'}
        console.log('err', err)
        callback(result)
      } else {
        result.error = { error: false, message: info, niceMessage: 'Thanks for contacting us. Someone will get back to you within 24 hours.'}
        console.log('info', info)
        console.log('result', result)
        callback(result)
      }
    })

  }

  if (req.method === 'POST') {
    // Process a POST request
    sendMail(result => {
      console.log('send', result.error.message.response)
      if (result.error.error) {
        res.statusCode = 503
      } else {
        res.statusCode = 200
      }
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(result))
    })
  } else {
    // Handle any other HTTP method
  }
  
  
}
