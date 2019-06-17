
// let grayscaleUser = require("../index.js") ;
import grayscaleUser from "../index.js";
document.cookie = `www58com='UserID=123123&asd=123123123'`
// document.cookie = `www58com="UserID=123212&asd=123123123"`
// document.cookie = `www58com='abc=123&UserID=123321&asd=123123123'`
// document.cookie = `dk_cookie='uid=898989&asd=123123123'`
// document.cookie = `dk_cookie="uid=34567876543&asd=123123123`
// document.cookie = `dk_cookie='asd=123&uid=345678765041&aasdf=123123123'`

console.log("是否灰度：",grayscaleUser(36));