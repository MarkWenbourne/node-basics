var http = require("http")

var app = http.createServer(function (req, res) {
    console.log("Request received")
    console.log("method:", req.method)
    console.log("uri:", req.url)
    console.log("headers:", req.headers)

    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")

    var body = "<html><body><h1>Hello world!</h1></body></html>"
    res.end(body)
})

app.listen(8000, function () {  //Anything below "1024" requires extra "permission"
    console.log("Server is running on port 8000")
})