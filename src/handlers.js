var fs = require('fs')
var querystring = require('querystring');
var types = {
    css: 'text/css',
    jpg: 'image/jpeg',
    js: 'application/javascript',
    ico: 'image/x-icon',
    png: 'image/png'
}

function handleHome(req, res) {
    res.writeHead(200, { 'Conten-Type': 'text/html' });
    fs.readFile(__dirname + '/../public/index.html', function(err, content) {
        if (err) {
            res.end("<h1> Server down </h1>")
            return;
        }
        res.end(content);
    })
}

function handlePost(req, res) {
    var allTheData = "";
    req.on('data', function(chunkOfData) {
        allTheData += chunkOfData;
    })
    req.on('end', function() {
        var convertedData = querystring.parse(allTheData);
        console.log(convertedData.blogbost);
        res.writeHead(301, { 'Location': '/' })
        res.end();

    })

}

function handlePublic(req, res) {
    var endpoint = req.url;
    var path = endpoint.split('.');
    var fileType = types[path[path.length - 1]]


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
module.exports = {
    handleHome: handleHome,
    handlePost,
    handlePublic
};