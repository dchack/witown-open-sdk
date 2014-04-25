/**
 *  使用<code>secret</code>对paramValues按以下算法进行签名： <br/>
 *  uppercase(hex(sha1(secretkey1value1key2value2...secret))
 */


var sha1 = require('sha1');

exports.sign = function(){
    console.log(sha1("message"));

}