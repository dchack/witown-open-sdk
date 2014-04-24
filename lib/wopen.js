var http_client = require('./http_client');

exports.open_api = function(data, callback){

    var url = 'http://localhost:8989/router';
    var app_key = '10036';
    var secret = '3d4f41b8b7d24b819d7b0e5b954e9502';
    var request_option = {};
    data = merge({
        'app_key':app_key,
        'secret': secret
    }, data);
    return {

        merchant :{
            get:function(data, callback){
                data.method = 'merchant.get';
                http_client.http_request('POST', url, data, request_option, callback);
                console.log('test');
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
