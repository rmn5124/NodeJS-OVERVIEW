const {readFile,writeFile}=require('fs');
// asynchronus works on the callback i.e. we run the callback when we are done

// readFile('./first.txt','utf8',
// (err,result)=>{ //callback function
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(result);
// }
// )
// Now how we will read second file since we are calling callback everytime we want to execute the function and callback should be called withi
//for that eventually after reading first file we will read second file.
console.log('start');
readFile('../first.txt','utf8',
(err,result)=>{ //callback function
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    readFile('../second.txt','utf8',
(err,result)=>{ //callback function
    if(err){
        console.log(err);
        return;
    }
 const second=result;
 
writeFile(
    './result-async.txt', //file name if it's not there it will create it
    `Here is the result:${first}, ${second}`, //it will overwrite the data with the content of first and second value
     {flag:'a'},// after this content will be appended not overwritten
    (err,result)=>{ // again we have to give callback for execution
        if(err){
            console.log(err);
            return;
        }
        console.log('done with the task');
    }
     )
})
})
console.log('start next one');
/* output:
start
start next one
done with the task

It wont wait for task of completion, it will execute the faster task first i.e it will serve next one during execution of first user.
*/