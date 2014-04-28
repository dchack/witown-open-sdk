/**
 * User: dc
 * Date: 14-4-24
 * Time: 下午3:34
 * just for test
 */

var open = require('../lib/wopen');

var secret = '4b6f5598be6545b3b2756f923d6d8a49';
var app_key = '10058';
var data = {
    merchantId : '003214a2bc7111e2801200163e122bbb',
    appKey : app_key
};
open.open_api(data, secret).merchant.get(function(err, response){
//    console.log(err)
    console.log(response);
});

