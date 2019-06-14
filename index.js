/**
 * 2019-06-12
 * handan
 * 做用户灰度策略
 */
let cookie = require("hd-cookie")  ;

function grayscaleUser(scale) {
  let userId = cookie.getCookieName('www58com', 'UserID');
  if (!userId) {
    userId = cookie.getCookieName('dk_cookie', "uid");
  }
  console.log(userId);
  // 20 0.2 2  26    12312345 
  scale = parseInt(scale);
  userId = parseInt(userId);
  if (!scale || !userId) return false;

  let useridTen = userId * 1 % 100;
  let scaleTen = scale * 1 % 100;

  if (useridTen < scaleTen) {
    return true;
  }
  return false;
}



module.exports = grayscaleUser;