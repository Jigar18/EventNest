const fs = require("fs");
const path = require("path");

const landing_page = fs.readFileSync(`${__dirname}/../public/Landing_Page/index.html`, "utf-8");
const userT = fs.readFileSync("./public/page-2/index.html", "utf-8");
const signUpStu = fs.readFileSync("./public/Forms/SignUpStu/indexStu.html", "utf-8");
const signUpOrg = fs.readFileSync("./public/Forms/SignUpOrg/indexOrg.html", "utf-8");
const signIn = fs.readFileSync("./public/Forms/SignIn/index.html", "utf-8");

exports.eventNest = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(landing_page);
}

exports.userType = (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.status(200).send(userT);
}

exports.signupS = (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.status(200).send(signUpStu);
}

exports.signupO = (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.status(200).send(signUpOrg);
}

exports.signin = (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.status(200).send(signIn);
}