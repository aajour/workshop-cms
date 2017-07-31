    var handlers = require('./handlers.js')
    var types = {
        css: 'text/css',
        jpg: 'image/jpeg',
        js: 'application/javascript',
        ico: 'image/x-icon'
    }

    function router(req, res) {
        var endpoint = req.url;

        var path = endpoint.split('.');
        var fileType = types[path[path.length - 1]]

        if (endpoint == '/') {
            handlers.handleHome(req, res);
        } else if (endpoint == "/create/post") {
            handlers.handlePost(req, res);
        } else {
            handlers.handlePublic(req, res);
        }
    }
    module.exports = router;