### 做用户灰度方案
---
根据userid做用户灰度

#### 安装
```
npm install grayscale-user 或
yarn add grayscale-user
```

#### 使用方法
需要3个参数，
参数一：【必填】灰度的比例，0-99的正整数或字符串，如： 26，表示灰度26%；  
参数二：【选填】获取cookie中userId的name值，默认www58com 或 dk_cookie  
*若获取出来的value是一个query的话*  
参数三：【选填】获取query的name值 默认 UserID 或 uid  
*若获取出来的value是一个字符串的话*  
参数三：【选填】需要填写空“”，或者null，不能空着或者传undefined   

返回值： boolean值，true：在灰度范围内，false：表示不再灰度范围内
```
import grayscaleUser from "../index.js";

console.log("是否灰度：",grayscaleUser("灰度比例","cookie的name值",'query的那么值'));
```
