const http=require('http')
//create server

// const server=http.createServer((req,res)=>{ //callback
// //req- used to store the data received by the client
// //res- used to send the respomse back to the server
// res.write('sending the content');
// res.end();
// })

// server.listen(5000)
// till now if you change the address after localhost/ then also it will also display sending the content, because we simply writting it to server 5000

// Lets create diff route wrt diff requsets

const server=http.createServer((req,res)=>{ //callback
//req- used to store the data received by the client
//res- used to send the respomse back to the server
if(req.url==='/') // home page
res.end('sending the content');
else  if(req.url==='/about') 
res.end('sending the content to about');
else{
    res.end(`<h1>No page found yet</h1>`);
}

})

server.listen(5000)
