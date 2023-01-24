// creating a server

// const http = require('http');
// const fs = require('fs');

// const filecontent = fs.readFileSync("index.html")

// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {'conten-type':'text/html'});
//     res.end(filecontent)
// })

// server.listen(80, '127.0.0.1', ()=>{
//     console.log("server is start on port 80");
// })

// function for button

order = ()=> {
    let btn = document.getElementsByClassName("btn")
    alert("your order is granted")
    
};