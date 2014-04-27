/**
 *  使用<code>secret</code>对paramValues按以下算法进行签名： <br/>
 *  uppercase(hex(sha1(secretkey1value1key2value2...secret))
 */


var sha1 = require('sha1');

exports.sign = function(data){
    var sign = toHex(sha1(data)).toLowerCase();

    console.log(sha1("message"));

    function toHex(str){
        var hex, i;
        //var str = "\u6f22\u5b57"; // "\u6f22\u5b57" === "漢字"
        var result = "";
        for (i=0; i<str.length; i++) {
            hex = str.charCodeAt(i).toString(16);
            result += ("000"+hex).slice(-4);
        }
        return result;
    }

}

