const chalk=require('chalk')
const yargs=require('yargs')
const getNotes = require('./notes.js')
//customize yargs version
yargs.version('1.1.0')

//console.log(msg)

//console.log(chalk.yellow.bold.inverse(msg))
//add command
yargs.command({
    command: 'add',
    describe:'Add a new note',
    handler: function(){
        console.log('adding a new note!')
    }
})
//remove
yargs.command({
    command:'remove',
    describe:'Remove a new note',
    handler:function(){
        console.log('removing an existing note!')
    }
})
//list
//read


console.log(yargs.argv)