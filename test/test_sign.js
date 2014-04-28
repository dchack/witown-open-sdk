var sign_util = require('../lib/sign_util');
var crypto = require('crypto');

var app_key = '10000';
var version = '1.0';
var locale = 'zh_CN';
var secret = 'bcb8b1dab8d94e51a1f2061d5268d46b';
var data = {
    'messageFormat':'json',
    'appKey': app_key,
    'v': version,
//    'locale' : locale,
    'method' : 'merchant.get',
    'merchantId' : '003214a2bc7111e2801200163e122bbb'
};

sign_util.sign(data, secret);

//var shasum = crypto.createHash('sha1');
//shasum.update('bcb8b1dab8d94e51a1f2061d5268d46bappKey10000merchantId003214a2bc7111e2801200163e122bbbmessageFormatjsonmethodmerchant');
//var sign = shasum.digest('hex').toUpperCase();
//console.log('sign: '+ sign);
//var shasum = crypto.createHash('sha1');
//shasum.update('bcb8b1dab8d94e51a1f2061d5268d46bappKey10000merchantId003214a2bc7111e2801200163e122bbbmessageFormatjsonmethodmerchant.getv1.0bcb8b1dab8d94e51a1f2061d5268d46b')
//var d = shasum.digest('hex').toUpperCase();
//console.log('xyz ' + d);