var http = require('http');
var querystring = require('querystring');
var options = {
    host: 'www.baidu.com',
    path: '/',
    method: 'GET',
    headers: {
        'Accept': 'text/html'
    }
};
var req = http.request(options, function(res) {
	

    res.setEncoding('utf8');
    res.on('data', function(data) {
        console.log(data);
    });
});
req.end()

var str = {'test':1};
console.log(typeof str);
var data = querystring.stringify(str);
console.log(data);