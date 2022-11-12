const mail = require("@sendgrid/mail");
mail.setApiKey(
  "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"
);
export default  function handler(req, res) {
  const data = JSON.parse(req.body);
  console.log(data);
  const userEmail = data.email;

  const message =
    "You are the special type of person that changes lives, lifts people up, and makes the world a better place. Thank you for your donation and your association with our cause.";

  const details = {
    from: "jatin26pandey@gmail.com", // sender address
    to: userEmail, // list of receivers
    subject: `Thankyou for your suppport ${userName}`,
    text : message
  };
  mail.send(details).then(() => {console.log("Success");});
  res.status(200).json({ name: "John Doe" });
}
