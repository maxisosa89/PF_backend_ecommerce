const router = require("express").Router();
const sgMail = require("@sendgrid/mail");

//sgMail.setApiKey('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');

const sendMail = async (req, res) => {
  const { to, subject, text, from } = req.body;
  /* console.log(req.body) */

  const msg = {
    to,
    from,
    subject,
    text,
  };

  try {
    console.log(msg);
    await sgMail
      .setApiKey(
        "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"
      )
      .send(msg);
    res.status(201).send({ success: true });
  } catch (err) {
    return res.status(err.code).send(err.message);
  }
};

module.exports = { sendMail };
