const { readFile } = require("fs");

console.log('first');
readFile('./eventLoop.txt','utf8',
(err,result)=>{ //callback function
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    readFile('./eventLoop.txt','utf8',
(err,result)=>{ //callback function
    if(err){
        console.log(err);
        return;
    }
 const second=result;
 console.log('completed first');
})
})
console.log('start second');

// output will be
// $ node 1st
// first
// start second
// completed first