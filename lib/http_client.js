var http = require('http');
var querystring = require('querystring');

/**
 * http 请求
 * @param method 请求类型  GET || POST
 * @param url 请求地址
 * @param request_data 参数
 * @param http_options_param
 * @param callback
 */
exports.http_request = function(method, url, request_data, http_options_param, callback){
    var data = request_data;

    if (http_method === 'GET') {
        if (typeof request_data === 'object') {
            request_data = querystring.stringify(request_data);
        }
        if (request_data) {
            url = url + "?" + request_data;
        }
    } else {
        //TODO 非GET
        return;
    }

    var http_options = {};
    if (http_options_param) {

        http_options = JSON.parse(JSON.stringify(http_options_param));

        if (!http_options.headers) {
            http_options.headers = {};
        }
        http_options.path = path;
        http_options.method = http_method;
        if (request_data) {
            http_options.headers['Content-Length'] = Buffer.byteLength(request_data, 'utf-8');
        }

        if (!http_options.headers.Accept) {
            http_options.headers.Accept = 'application/json';
        }

        if (!http_options.headers['Content-Type']) {
            http_options.headers['Content-Type'] = 'application/json';
        }

        // TODO 其他
        //http_options.headers['User-Agent'] = user_agent;
    }

    var req = http.request(http_options);

    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
        cb(e, null);
    });

    req.on('response', function (res) {
        var response = '';
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            response += chunk;
        });

        res.on('end', function () {
            var err = null;

            response.httpStatusCode = res.statusCode;

            try {

                if (res.headers['content-type'] === "application/json") {
                    response = JSON.parse(response);
                }

            } catch (e) {
                err = new Error('Invalid JSON Response Received');
                err.error = {
                    name: 'Invalid JSON Response Received, JSON Parse Error'
                };
                err.response = response;
                err.httpStatusCode = res.statusCode;
                response = null;
            }

            if (!err && (res.statusCode < 200 || res.statusCode >= 300)) {
                err = new Error('Response Status : ' + res.statusCode);
                err.response = response;
                err.httpStatusCode = res.statusCode;
                response = null;
            }
            cb(err, response);
        });
    });

    if (request_data) {
        req.write(request_data);
    }
    req.end();
};