/**
 * 2019-06-12
 * handan
 * 做用户灰度策略
 */
let cookie = require("hd-cookie")  ;

function grayscaleUser(scale, cookie_name, name) {
  // console.log(cookie.getCookieName("dk_cookie"));
  let userId = cookie.getCookieName(cookie_name || 'www58com', name !== undefined ? name : 'UserID');
  if (!userId) {
    userId = cookie.getCookieName( cookie_name || 'dk_cookie', name !== undefined ? name : "uid");
  }
  // console.log(userId);
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