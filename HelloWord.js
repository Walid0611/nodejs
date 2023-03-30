console.log("HELLO WORLD");

const http = require('http');

const server = http.createServer(function (req, res) {
  res.write('<h1>Introducion to Node Js</h1>');
  res.end();
});

server.listen(4000, (err) => {
  err ? console.log(err) : console.log('The Server is Running on port 4000');
});

 const fs = require('fs');
 
 fs.writeFile('welcome.txt', 'Hello Node', err=>{
        if(err){console.log(err)}  else{
             console.log("great job")}
           })

 fs.readFile('welcome.txt', (err, data)=> {
     if (err) {
       console.log('Something went wrong', err);
     } else {
       console.log('welcome ',data.toString());
     }
  });










