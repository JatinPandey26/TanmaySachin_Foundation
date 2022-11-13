

const mail = require("@sendgrid/mail");
// mail.setApiKey(process.env.NEXT_PUBLIC_MAIL_API_KEY);
export default function handler(req, res) {
  const data = JSON.parse(req.body);
  console.log(data);
  const userName = data.name;
  const userEmail = data.email;

  const message =
    "You are the special type of person that changes lives, lifts people up, and makes the world a better place. Thank you for your donation and your association with our cause.";

  // const details = {
  //   from: "jatin26pandey@gmail.com", // sender address
  //   to: userEmail, // list of receivers
  //   subject: `Thankyou for your suppport ${userName}`,
  //   text: message,
  // };
  // mail.send(details).then(() => {
  //   console.log("Success");
  // });
  console.log("HELLO");
  res.status(200).json({ message: "Success" });
}
