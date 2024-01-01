
const l= require('lodash')

const item=[1,2,[3,[4,5]]]

const newItem= l.flattenDeep(item)

console.log(newItem)