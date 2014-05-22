var http_client = require('./http_client');
var sign_util = require('./sign_util');

exports.open_api = function(data, secret, request_option, callback){

    var version = '1.0';
    var locale = 'zh_CN';

    request_option.method = 'POST';

    var data = merge({
        'messageFormat':'json',
        'v': version
    }, data);


    return {
        merchant :{
            get:function(){
                execute('merchant.get', data, secret, callback);
            }
        },
        pug : {
            list : {
                get: function(){
                    execute('pug.list.get', data, secret, callback);
                }
            }

        },
        user : {
            get :function(){
                execute('user.get', data, secret, callback);
            },

            request:{
                get : function(){
                    execute('user.request.allow', data, secret, callback);
                },
                allow : function(){
                    execute('user.request.allow', data, secret, callback);
                }
            }

        },
        shop : {
            pass : {
                get : function(){execute('shop.pass.get', data, secret, callback);}
            }
        },
        router : {
            get : function(){
                execute('router.get', data, secret, callback);
            },
            list : {
                bymerchantid : {
                    get : function(){
                        execute('router.list.bymerchantid.get', data, secret, callback);
                    }
                }

            }
        },
        security:{
            userinfo:{
                get:function(){
                    execute('security.get.userinfo', data, secret, callback);
                }
            }
        }

    };

    /**
     * 核心执行方法
     * @param methodName
     * @param data
     * @param secret
     * @param callback
     */
    function execute(methodName, data, secret, callback){
        data.method = methodName;
        // 签名参数产生
        data.sign = sign_util.sign(data, secret);
        http_client.http_request('POST', data, request_option, callback);
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
                if (obj2[p].constructor === Object) {
                    obj1[p] = merge(obj1[p], obj2[p]);

                } else {
                    obj1[p] = obj2[p];
                }
            } catch (e) {
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    }
};