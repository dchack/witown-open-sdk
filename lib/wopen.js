var http_client = require('./http_client');

exports.open_api = function(data, callback){

    var path = '/router';
    var port = 8989;
    var host = 'localhost'
    var app_key = '10058';
    var secret = '4b6f5598be6545b3b2756f923d6d8a49';
    var mid = '003214a2bc7111e2801200163e122bbb';
    var request_option = {
        port : port,
        path : path,
        host : host,
        method : 'POST'
    };

    var data = merge({
        'messageFormat':'json',
        // TODO sign
        //'sign':
        'appKey':app_key,
        'secret': secret,
        'mid' : mid
    }, data);
    return {

        merchant :{
            get:function(data, callback){
                data.method = 'merchant.get';
                http_client.http_request('POST', path, data, request_option, callback);
                //console.log('test');
            },
            list : {}
        }
    }

    /* 合并两个对象 */
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
