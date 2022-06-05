// on and emit are methods
//on-> listen for specific events
//emit-> emit specific events

const EventEmitter=require('events');// it's a class hence we use standard convention

const customerEmitter=new EventEmitter();//create an instance of class i.e. object

// customerEmitter.on('response',()=>{
//     console.log(`data received`);
// })
// customerEmitter.on('response',()=>{
//     console.log(`data received again`);
// })


// customerEmitter.emit('response');// string should match with the function parameter
// // order matters , you have to first listen the event and then emit it later

// you can add parameter too


customerEmitter.on('response',(user,id)=>{
    console.log(`data received user ${user} with id ${id}`);
})
customerEmitter.emit('response','john',34)