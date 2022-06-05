const os=require('os')

//info about username

console.log(os.userInfo());
// to know about system uptime

console.log(`the system is running ${os.uptime()} seconds`);

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs);