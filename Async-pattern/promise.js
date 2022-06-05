const {readFile}=require('fs');

const getText=(path)=>{
    return new Promise((resolve,reject)=>{
readFile(path,'utf8',
(err,result)=>{ //callback function
    if(err){
       reject(err)
    }
    else{
    resolve(result)
    }
}
)
})
}
//now we will call the promise here

getText('../modules/fsModule/first.txt').then((result)=>
    console.log(result)).catch((err)=>console.log(err));

// output : Hello this is the first file
// but if i will put wrong directory then error will coour
//e.g. './modules .... 
// it means multiple requests has been handled



// ISn't it tooo long 
// solution is async await

