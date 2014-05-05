/**
 * just for test
 */
var open = require('../lib/wopen');
var client = require('../lib/http_client');
var secret = '3431355427c1451787b3398836349226';
var app_key = '21103';
//var data = {
//    merchantId : '003214a2bc7111e2801200163e122bbb',
//    appKey : app_key
//};
////merchant.get接口例子
//open.open_api(data, secret, function(err, response){
//    console.log(response);
//}).merchant.get();
//
//
//
//data = {
//    userId : 'bf74dc267c8b11e2a6d000163e122bbb',
//    appKey : app_key
//};
//
//open.open_api(data, secret, function(err, response){
//    console.log(response);
//}).user.get();

var data = {
    userId : '2e6b49747bc611e2a6d000163e122bbb',
    appKey : app_key
};
open.open_api(data, secret, function(err, response){
    console.log(response);
}).pug.list.get();