
// // const nodeMailer = require("nodemailer"); 
 
// function sendMail(userEmail, userName) {
//   nodeMailer 
//     .createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: "playerhun191@gmail.com",
//         pass: "jukbybbdcknmmssf",
//       },
//       port: 465,
//       host: "smtp.gmail.com",
//     })
//     .sendMail(  
//       {
//         from: "playerhun191@gmail.com", // sender address
//         to: userEmail, // list of receivers
//         subject: `Thankyou for your suppport ${userName}`, // Subject line
//         text: "You are the special type of person that changes lives, lifts people up, and makes the world a better place. Thank you for your donation and your association with our cause.", // plain text body
//       },
//       (err) => {
//         if (err) {
//           return console.log("Error occured", err);
//         } else {
//           return console.log("Email sent");
//         }
//       }
//     );
// }

// export default sendMail;
