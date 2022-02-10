const router = require("express").Router();
const sgMail = require("@sendgrid/mail");

//sgMail.setApiKey('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');

const sendMail = async (req, res) => {
  const { to, subject, text } = req.body;

  const msg = {
    to,
    from: "jonascript.cpu@gmail.com",
    subject,
    text  
  };

  try {
    await sgMail
      .setApiKey(
        "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"
      )
      .send(msg);
  } catch (err) {
    return res.status(err.code).send(err.message);
  }
  res.status(201).send({ success: true });
};

module.exports = { sendMail };
