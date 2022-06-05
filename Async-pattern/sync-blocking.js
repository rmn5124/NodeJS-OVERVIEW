const http=require('http')
console.log('1st clint');
const server=http.createServer((req,res)=>{ 
if(req.url==='/') // home page
res.end('home pag');
else  if(req.url==='/about'){
for(let i=0;i<1000;i++){ //since it's synchronous code it will block untill its not done. only when it complete its execution then second client would get printed
    for(let j=0;j<1000;j++){
        console.log('Blocking it');
    }
}
res.end('about page')
}
})
console.log('second client');
server.listen(5000)