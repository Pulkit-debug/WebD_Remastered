// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



// ************************** Creating and writing in a file **************************

// const fs = require("fs");

// let text = fs.readFileSync(__dirname + "/testingFile.txt", "utf-8");
// console.log(text);

// text = text.replace("purposes", "things");

// fs.writeFileSync(__dirname + "/testingFile.txt", text);


// *********************** Serving HTML Fils using NOdejs*************************

const http = require("http");
const fs = require("fs");
const file = fs.readFileSync(__dirname + "/../tailwind.html", "utf-8");


const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/html"});
    res.end(file);  // writing the file content
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Server is Started at port 80");
});


