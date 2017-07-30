var http = require('http');
var fs = require('fs')
var message = "Hello world! :D"
var types = {
    css: 'text/css',
    jpg: 'image/jpeg',
    js: 'application/javascript',
    ico: 'image/x-icon'
}
var server = http.createServer(handler);
server.listen(5000, function() {
    console.log("it's working!");
})

function handler(req, res) {
    var endpoint = req.url;
    var path = endpoint.split('.');
    var fileType = types[path[path.length - 1]]

    if (endpoint == '/') {
        res.writeHead(200, { 'Conten-Type': 'text/html' });
        fs.readFile(__dirname + '/../public/index.html', function(err, content) {
            if (err) {
                res.end("<h1> Server down </h1>")
                return;
            }
            res.end(content);
        })
    } else {
        fs.readFile(__dirname + '/../public' + endpoint, function(err, content) {
            console.log(fileType, endpoint)
            if (err) {
                res.writeHead(200, { 'Conten-Type': 'text/html' });
                res.end("<h1>Sever down</h1>")
                console.log("this is also happining")
                return;
            }
            res.writeHead(200, { 'Content-Type': fileType })
            res.end(content);
        })

    }
}