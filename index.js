const axios = require("axios");
var nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "test1bharath@gmail.com",
    pass: "oyixgdbblfwepzea"
  }
});

const mailOptions = {
  from: "test1bharath@gmail.com",
  to: "samuvelbharathraj@gmail.com",
  subject: "Sending Email using Node.js",
  text: "Tesing mail"
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

console.log("started");

function makeRequest() {
  axios
    .get("https://www.irctc.co.in/")
    .then((res) => {
      console.log("res");
      console.log(res);

      const mailOptions = {
        from: "test1bharath@gmail.com",
        to: "samuvelbharathraj@gmail.com",
        subject: "Sending Email using Node.js",
        text: "Website now accesible"
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    })
    .catch((err) => {
      console.log(err.status, "err");

      setTimeout(() => {
        makeRequest();
      }, 60000);
    });
}

function init() {
  makeRequest();
}

init();
