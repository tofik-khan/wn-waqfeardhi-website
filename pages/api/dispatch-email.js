var nodemailer = require("nodemailer");

export default async function handler(req, res) {
  // Authenticate request
  if (!req.body.auth || req.body.auth !== process.env.API_AUTH_TOKEN) {
    res
      .status(401)
      .json({ success: false, error: { message: "Failed to Authenticate" } });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  transporter.verify().then(console.log).catch(console.error);

  var mailOptions = {
    from: process.env.GMAIL_USERNAME,
    to: process.env.GMAIL_RECEIVER,
    subject: "WaqfeArdhi | New Submission Received",
    text: "AA. A new submission has been added to the Waqf-e-Ardhi listing spreadsheet",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.status(200).json({ success: true });
}
