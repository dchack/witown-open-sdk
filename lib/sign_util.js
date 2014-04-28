/**
 *  签名工具方法：
 *  使用<code>secret</code>对paramValues按以下算法进行签名： <br/>
 *  uppercase(hex(sha1(secretkey1value1key2value2...secret))
 */

var crypto = require('crypto');
exports.sign = function(data, secret){

    var paramNames = [];
    var paramValues = '';

    for(name in data){
        paramNames.push(name)

    }

    paramNames.sort();
    paramValues += secret;
    for(var i = 0; i < paramNames.length; i++){
        // 键值一起拼接
        paramValues = paramValues + paramNames[i] + data[paramNames[i]];
    }
    paramValues += secret;

    console.log('paramValues:' + paramValues);

    //sha1
    var shasum = crypto.createHash('sha1');
    shasum.update(paramValues);
    //hex
    var sign = shasum.digest('hex').toUpperCase();
    return sign;

}