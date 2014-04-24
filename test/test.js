/**
 * User: dc
 * Date: 14-4-24
 * Time: 下午3:34
 * just for test
 */

var open = require('../lib/wopen');

var data = {};
open.open_api().merchant.get(data, function(err, response){
    console.log(err)
    console.log(response);
});
