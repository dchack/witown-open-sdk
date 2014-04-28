var http_client = require('./http_client');
var sign_util = require('./sign_util');

exports.open_api = function(data, secret){

    var path = '/router';
    var port = 8989;
    var host = 'localhost'
    var app_key = '10058';
    var version = '1.0';
    var locale = 'zh_CN';
    var request_option = {
        port : port,
        path : path,
        host : host,
        method : 'POST'
    };

    var data = merge({
        'messageFormat':'json',
        'v': version
    }, data);


    return {

        merchant :{
            get:function(callback){
                data.method = 'merchant.get';
                for(value in data){
                    console.log(value + "   " + data[value]);
                }
                // 签名参数产生
                var sign = sign_util.sign(data, secret);
                console.log('sign: ' + sign);
                data.sign = sign;
                http_client.http_request('POST', path, data, request_option, callback);
                //console.log('test');
            },
            list : {}
        }
    }

    /**
     *  合并两个对象
     * @param obj1
     * @param obj2
     * @returns {*}
     */
    function merge(obj1, obj2) {
        for (var p in obj2) {
            try {
                // Property in destination object set; update its value.
                if (obj2[p].constructor === Object) {
                    obj1[p] = merge(obj1[p], obj2[p]);

                } else {
                    obj1[p] = obj2[p];
                }
            } catch (e) {
                // Property in destination object not set; create it and set its value.
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    }
};
