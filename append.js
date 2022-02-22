const chalk=require('chalk')
const getNotes = require('./notes.js')
//const msg=getNotes()

console.log(getNotes())

//console.log(chalk.yellow.bold.inverse(msg))

const command=process.argv[2]
console.log(command)