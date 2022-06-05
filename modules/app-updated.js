//every file is a module by default in node
const seyHi=require('./func')
const util=require('./utils')
const {raman,suman}=require('./utils')

seyHi('rohit')
seyHi(util.raman) // since it is an object we need to call it by . or we can distructure it also
seyHi(raman)
seyHi(suman) 
seyHi('pk')
