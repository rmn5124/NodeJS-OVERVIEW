//we will install package and use it here

const lodash=require('lodash') // it will be stored in dependencies in package.json folder

const mat=[1,[2,3],[3,[4,5]]]

console.log(lodash.flattenDeep(mat)) // output: [1,2,3,4,5]