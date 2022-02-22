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
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler: function (argv){
        console.log('adding a new note!',argv)
    }
})
//remove
yargs.command({
    command:'remove',
    describe:'Remove a new note',
    handler:function(argv){
        console.log('removing an existing note!')
    }
})
//list
//read
yargs.parse()

//console.log(yargs.argv)