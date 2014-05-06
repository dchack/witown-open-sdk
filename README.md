#witown-open-sdk
===============

witown(树熊)开放平台sdk

##介绍
witown 开放平台的官方地址：

本sdk基于node，版本为0.10.26

##使用
在 package.json 中的配置：
```bash
"dependencies": {
     "witown-open-sdk":"*"
}
```

执行命令：

```bash
$ npm install
```

在自己项目的代码中这样使用：
var open = require('witown-open-sdk');

具体使用代码示例在源代码中的test文件夹中可以查看。
如：
```js
var open = require('witown-open-sdk');
var secret = '3431355427c1451787b3398836349226';
var app_key = '21103';
function showResponse(err, response){
    console.log(response);
}
var data = {
    merchantId : '003214a2bc7111e2801200163e122bbb',
    appKey : app_key
};

// merchant.get接口例子
open.open_api(data, secret, showResponse).merchant.get();
```
##测试
可以直接在本项目的test文件夹下，执行
```bash
node test.js
```
就可以自动调用所有接口进行测试了

##其他
接口调用需要成为witown 开放平台的开发者，部分接口有权限的限制，详细请阅读官方API。
