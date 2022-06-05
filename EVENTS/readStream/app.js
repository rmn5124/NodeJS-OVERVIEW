// it's mainly used for big file reading

const {createReadStream}=require('fs')

// const stream=createReadStream('../content/big.txt')

// stream.on('data',(result)=>{
//     console.log(result);
// }) 
// you can change the size of buffer, encoding etc. too
//by default its 64kb buffer size

const stream=createReadStream('../content/big.txt',{
    highWaterMark:90000,
    encoding:'utf8',
})

stream.on('data',(result)=>{
    console.log(result);
}) 

//error event

stream.on('error',(err)=>{
    console.log(err);
})

// with ths readstream we send data in chunks that will send data fastly and in less size.
