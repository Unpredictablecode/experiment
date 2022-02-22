const fs = require('fs')
const book={
    title:'Crack SBI',
    author:'SASWATA'
}

//const bookJSON=JSON.stringify(book)//stringify is used to convert the object to string
//const obj= JSON.parse(bookJSON)//parse is used to covert the string into object
//console.log(obj.author)

//fs.writeFileSync('1-json.json',bookJSON)//this will write a json file (can be used for overwriting too)
const dataBuffer=fs.readFileSync('1-json.json') //it will heldsome bufferData like bits and bytes
console.log(dataBuffer.toString())
