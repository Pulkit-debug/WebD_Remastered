const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;
const home = fs.readFileSync(__dirname + "/home.html");
const about = fs.readFileSync(__dirname + "/about.html");
const services = fs.readFileSync(__dirname + "/services.html");
const contact = fs.readFileSync(__dirname + "/contact.html");

const server = http.createServer((req, res)=> {
    // console.log(req.url);
    const url = req.url;
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    if(url == "/home" || url == "/")
    res.end(home);
    else if(url == "/services")
    res.end(services);
    else if(url == "/about")
    res.end(about);
    else if(url == "/contact")
    res.end(contact);
    else
    res.end("<h1> The Page you requested Doesn't exist!! <strong>#404</strong> </h1>");
    
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});