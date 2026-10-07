const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    console.log("Request:", req.url);

    if (req.url === "/") {
        res.end("Welcome to Smart Utility Toolkit");
    }
    else if (req.url === "/about") {
        res.end("About Page");
    }
    else if (req.url === "/contact") {
        res.end("Contact Page");
    }
    else {
        res.statusCode = 404;
        res.end("404 Page Not Found");
    }
});

server.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});