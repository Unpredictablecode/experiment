const chalk = require('chalk')
const { Console } = require('console')
const fs=require('fs')
const getNotes= function() {
    return 'Your notes .......'
}
const addNote= (title,body)=>
{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note)=>note.title===title)
    if(duplicateNotes.length===0) {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log("New note is added")

    }
    else{
        console.log("title already added!")
    }
    
    
}
 const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes=()=>
{
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const data=dataBuffer.toString()
        return JSON.parse(data)
    }catch(e){
        return []
    }
   

}
const removeNote=(title)=> {

    const notes= loadNotes()
    const copy=notes.filter((note)=>note.title!==title)
    if(copy.length < notes.length)
    {
        saveNotes(copy)
       console.log(chalk.green.inverse('Note is removed'))
    }
    else
    {
       console.log(chalk.red.inverse('Not found'))
 
    }
}
const listNote=()=>{
    const notes=loadNotes()
    console.log('Your')
    notes.forEach((note) => {
        console.log(note.title)
    })
}
module.exports={
    getNotes: getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNote:listNote
}