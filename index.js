/**
 * 2019-06-12
 * handan
 * 做用户灰度策略
 */
let cookie = require("hd-cookie")  ;

let newCookie = new cookie() ;

function grayscaleUser(scale, cookie_name, name, userIds) {
  let userId = "" ;
  if(name){
    userId = newCookie.getCookieName(cookie_name || 'PPU', name || 'UID');
    if (!userId) {
      userId = newCookie.getCookieName( cookie_name || 'dk_cookie', name || "uid");
    }
  }else{
    userId = newCookie.getCookie(cookie_name || 'PPU');
    if (!userId) {
      userId = newCookie.getCookie( cookie_name || 'dk_cookie');
    }
  }
  if(userIds && userIds.indexOf &&userIds.indexOf(userId) * 1 > -1){
    // 在白名单内，不需要灰度
    return true ;
  }
  // console.log(userId);
  // 20 2  26    12312345 
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