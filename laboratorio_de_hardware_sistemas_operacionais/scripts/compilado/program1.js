#!/bin/node
const addTwoValueJs =  require('./addTwoValues')
const promptsync = require('prompt-sync')

let prompt = promptsync()
const value1 = parseInt(prompt('Insert With first name: '))
const value2 = parseInt(prompt('Insert With second name: '))

const response = addTwoValueJs.sum(value1,value2)

console.log('a soma dos dois valores é:')
console.log(response)
