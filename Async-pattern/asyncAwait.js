const {readFile,writeFile}=require('fs');
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
})
})
}
const start=async()=>{
    try{
const first=await getText('../modules/fsModule/first.txt')
console.log(first);
    }
    catch(error){
console.log(error);
    }
}
start()