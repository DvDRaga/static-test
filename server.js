/*const http = require("http")
const fs = require("fs")
const port = 3000

const server = http.createServer((req, res) => {
    fs.readFile("public/index.html", (err, data) => {
        if (err) {
            res.write("File not found")
        } else {
            res.write(data)
        }
    })
    res.end()
})

server.listen(port,(err) => {
    if (err) {
        console.log("Something went wrong")
    } else {
        console.log("Server is listening on port " + port)
    }
})*/

//var fs = require("fs");
var port = 3000;
var express = require("express");

var app = express();
app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder

app.get("/", function(request, response){
    response.send("Hello!!");
});

app.listen(port);