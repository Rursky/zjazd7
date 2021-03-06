/// plik backendowy (np console logi z niego nie pojawia sie na stronie na localhoscie, tylko w konsoli)
const functions = require("./functions")
const express = require("express");
const path = require("path");
const server = express();
const port = process.env.PORT || 3000; // skorzystaj z wolnego portu ale nie lokalnie (np na github) || jezeli nei zadziala skorzystaj z 3000

server.set("view engine", "hbs");
server.use("/assets", express.static(path.join(__dirname, "./assets")));
server.use("/js", express.static(path.join(__dirname, "./js")));

server.get("/", function(req, res) {
    res.render("index", { pageTitle: "Lekcja Node", title: functions.someText }) // pageTitle tobi hbs
})

server.get("/about", function(req, res) {
    res.render("about")
})

server.get("/section/technology", function(req, res) {
    res.send("strona technologiczna")
})

server.listen(port)


// server.listen(port, (err) => { // jezlei wystpai err zatrzymaj funkcje za pomoca return
//     if (err) {
//         return console.log(`błąd ${err}`);
//     } else {
//         console.log(`Aplikacja działa na porcie ${port}`)
//     }
// })

/// import export funkcji

// const functions = require("./functions"); // import funkcji zmienna nie musi miec tej samej nazwy co plik js

// console.log("Hello World");

// functions.helloWorld()
// functions.add(1, 2)