#witown(树熊)开放平台sdk

###官方网站：http://www.witown.cn/

##介绍
witown 开放平台的官方地址：

本sdk基于node，版本为0.10.26,建议使用npm构建项目方式进行开发。

##使用
在自己项目的 package.json 中的配置：
```bash
"dependencies": {
     "witown-open-sdk":"*"
}
```

执行命令：

```bash
$ npm install
```

具体调用接口代码如下例：

```js
var open = require('witown-open-sdk');
var path = '/router';
var port = 80;
var host = 'open.witown.com';
var app_key = '21205';
var secret = '3eca5f79070948afb23de1a245b7be32';

function showResponse(err, response){
    if(!err){
        console.log(response);
    }
}
var data = {
    merchantId : '003214a2bc7111e2801200163e122bbb',
    appKey : app_key
};

var request_option = {
    port : port,
    path : path,
    host : host
};

// merchant.get接口例子
open.open_api(data, secret, request_option, showResponse).merchant.get();

```

更加详细使用代码示例可以参考代码源码中的test文件夹中的test.js文件。

##测试代码
直接在本项目的test文件夹下，执行
```bash
node test.js
```
自动调用所有接口进行测试，也可以自己编写测试代码。

##其他
接口调用需要成为witown 开放平台的开发者，部分接口有权限的限制，详细请阅读官方API。
注意：所有接口以官方资料为准。

[![witown](http://t1.qpic.cn/mblogpic/b0ca4980c5d10cf867a8/2000.jpg)]
(https://github.com/dchack/witown-open-sdk)
