var http = require('http');
var fs = require('fs')
var message = "Hello world! :D"
var server = http.createServer(handler);
server.listen(5000, function() {
    console.log("it's working!");
})

function handler(req, res) {
    var endpoint = req.url;
    if (endpoint == '/') {
        res.writeHead(200, { 'Conten-Type': 'text/html' });
        fs.readFile(__dirname + '/../public/index.html', function(err, content) {
            if (err) {
                res.end("<h1> Server down </h1>")
                return;
            }
            res.end(content);
        })
    }
    if (endpoint == '/girl') {
        res.end("I'm a Girl :D")
    }
}