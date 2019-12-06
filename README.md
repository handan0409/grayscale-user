# 做用户灰度方案
---
根据userid做用户灰度， 前提uid是int类型

#### 安装
```js
npm install grayscale-user 或
yarn add grayscale-user
```

#### 使用方法
需要3个参数，<br>
参数一：【必填】灰度的比例，0-99的正整数或字符串，如： 26，表示灰度26%；  <br>
参数二：【选填】传入的userId的值，根据这个数字做灰度，<br>
参数三：【选填】uid白名单，支持array 或 string  <br>

返回值： boolean值，true：在灰度范围内，false：表示不再灰度范围内
```js
import grayscaleUser from "grayscale-user";

console.log("是否灰度：",grayscaleUser("灰度比例","userid",'白名单'));
```
