/**
 * test for core API
 */
var open = require('../lib/wopen');
var secret = '3431355427c1451787b3398836349226';
var app_key = '21103';
var token = '72f7b0aee48b11e2841d00163e122bbb';
function showResponse(err, response){
    console.log(response);
}
var data = {
    merchantId : '003214a2bc7111e2801200163e122bbb',
    appKey : app_key
};

//1, merchant.get接口例子
open.open_api(data, secret, showResponse).merchant.get();

data = {
    userId : 'bf74dc267c8b11e2a6d000163e122bbb',
    appKey : app_key
};
//2, user.get 接口
open.open_api(data, secret, showResponse).user.get();

data = {
    userId : '2e6b49747bc611e2a6d000163e122bbb',
    appKey : app_key
};
//3, pug.list.get接口
open.open_api(data, secret, showResponse).pug.list.get();


data = {
    userId : '2e6b49747bc611e2a6d000163e122bbb',
    token : token,
    appKey : app_key
};
//4, user.request.get接口
open.open_api(data, secret, showResponse).user.request.get();

data = {
    userId : '2e6b49747bc611e2a6d000163e122bbb',
    token : token,
    appKey : app_key
};

//5, user.request.allow接口
open.open_api(data, secret,showResponse).user.request.allow();

data = {
    routerSeq : '2e6b49747bc611e2a6d000163e122bbb',
    appKey : app_key
};
//6, router.get接口
open.open_api(data, secret, showResponse).router.get();

data = {
    routerSeq : '2e6b49747bc611e2a6d000163e122bbb',
    appKey : app_key
};
//7, router.list.bymerchantid.get接口
open.open_api(data, secret, showResponse).router.list.bymerchantid.get();

data ={
    merchantId : '003214a2bc7111e2801200163e122bbb',
    openUserId : false,
    appKey : app_key
};
open.open_api(data, secret, showResponse).shop.pass.get();