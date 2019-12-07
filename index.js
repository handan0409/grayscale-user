/**
 * 2019-06-12
 * handan
 * 做用户灰度策略
 */
let Cookie = require("hd-cookie");

let newCookie = new Cookie() ;

function grayscaleUser(scale, uid, userIds) {
  let userId = uid ;
  if(!userId){
    userId = newCookie.getCookieName('PPU', 'UID');
    if (!userId) {
      userId = newCookie.getCookieName('dk_cookie', "uid");
    }
  }
  if(!userId) return false ;
  if(userIds && userIds.indexOf && (userIds.indexOf(userId) * 1 > -1)){
    // 在白名单内，不需要灰度
    return true ;
  }
  // console.log(userId);
  // 20 2  26    12312345 
  scale = parseInt(scale);
  userId = parseInt(userId);
  if (!scale || !userId) return false;

  let useridTen = userId * 1 % 100;
  let scaleTen = ( scale * 1 % 100 ) || 100;

  if (useridTen < scaleTen) {
    return true;
  }
  return false;
}

module.exports = grayscaleUser;