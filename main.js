var http = require("http");


var oursServer = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("hello, welcome to my home page");
    }
    if (req.url == "/about") {
        res.end("thank you for trying to know about our");
    }
    return res.status(400);
});
oursServer.listen(5000)