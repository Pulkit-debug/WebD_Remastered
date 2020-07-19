const express = require("express");
const path = require("path");

//creating an app
const app = express();
const localhost = "127.0.0.1";
const port = 80;

// serving static files
app.use("/static", express.static("static"));

// setting up the template engine for pug
app.set("view engine", "pug");

// setting the views directory for pug
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("This is my Home Page");
});

// first pub file
app.get("/firstPug", (req, res) => {
    res.status(200).render('firstPug', { title: 'Wassup!!', message: 'This is first time using Pug!!'});
});

// app.get("/about", (req, res) => {
//     res.send("This is about page!");
// });

// app.post("/about", (req, res) => {
//     res.send("Your requrest has been submitted!");
// })

// app.listen(port, ()=> {
//     console.log(`Server has started on port ${port}`);
// })