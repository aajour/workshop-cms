var http = require('http');
var server = http.createServer();
server.listen(5000, function() {
    console.log("it's working!");
})