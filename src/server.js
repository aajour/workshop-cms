var http = require('http');
var router = require('./router.js')
var server = http.createServer(router);
server.listen(5000, function() {
    console.log("it's working again !");
})