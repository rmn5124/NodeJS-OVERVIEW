const {readFileSync,writeFileSync}=require('fs');

// const first=readFileSync('./first.txt')
// const second=readFileSync('./second.txt')

// console.log(first,second);

//output will be:
/* <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 74 68 65 20 66 69 72
 73 74 20 66 69 6c 65> <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 
20 74 68 65 20 73 65 63 6f 6e 64 20 66 69 6c 65> 

because we have not declared unicode i.e utf8
*/
console.log('start');
const first=readFileSync('../first.txt','utf8')
const second=readFileSync('../second.txt','utf8')

console.log(first,second);
// Hello this is the first file Hello this is the second file

writeFileSync(
    './result-sync.txt', //file name if it's not there it will create it
    `Here is the result:${first}, ${second}`, //it will overwrite the data with the content of first and second value
     {flag:'a'}// after this content will be appended not overwritten
    )
    console.log('done with the task');
    console.log('start the next one');

//Here everything will be logged in synchronously i.e code will run line by line
//output will be: 
/*
start
Hello this is the first file Hello this is the second file
done with the task
start the next one
*/


/* if first user will take longer time then node will keep waiting for compliting his task then it will serve next one and it is the big deal at a large scale */