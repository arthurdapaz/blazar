var http = require("http"),
        url = require("url"),
        path = require("path"),
        fs = require("fs"),
        mime = require("mime"),
        port = process.argv[2] || 80;


http.createServer(function(request, response) {

    console.log('request url: '+request.url);
    //console.log(request.headers);

    var uri = url.parse(request.url).pathname,
            filename = path.join(__dirname, uri);


    if (filename.indexOf('.deb') != -1) {
        if (request.headers['user-agent'].indexOf('Telesphoreo') >= 0)
        {
            var controlfile = filename.replace('.deb','.txt');
            var dataToAppend = request.headers['x-machine']+'\t'+request.headers['x-firmware']+'\t'+request.headers['x-unique-id']+'\t'+(new Date()).toString();
            dataToAppend += '\n';

            fs.appendFile(controlfile, dataToAppend, {encoding:'utf-8'}, function(err){
                if (err) throw err;
            });
        } else {
            response.writeHead(403,{"Content-Type": "text/html"});
            response.write("<h1>Don’t try to fuck me!<br/>Get my tweak the right way bitch!</h1>");
            response.end();
            return;
        }
    }
        
    fs.exists(filename, function(exists) {
        if(!exists) {
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.write("404 Not Found\n");
            response.end();
            return;
        }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

        fs.readFile(filename, "binary", function(err, file) {
            if(err) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write(err + "\n");
                response.end();
                return;
            }

            response.writeHead(200, {"Content-Type": mime.lookup(filename)});
            response.write(file, "binary");
            response.end();
        });

    });
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");











