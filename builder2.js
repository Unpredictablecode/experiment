const chalk=require('chalk')
const { demandOption } = require('yargs')
const yargs=require('yargs')
const notes = require('./notes1.js')
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
        },
        body:
        {
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function (argv){
        notes.addNote(argv.title,argv.body)
    }
})
//remove
yargs.command({
    command:'remove',
    describe:'Remove a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'

        }
    },
    handler:function(argv){

        notes.removeNote(argv.title)
    }
})
//list
//read
yargs.parse()

//console.log(yargs.argv)