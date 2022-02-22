const fs=require('fs')
const buffer=fs.readFileSync('1-json.json')

const data=buffer.toString()
//console.log(data)
const obj=JSON.parse(data)
//console.log(obj.name)

obj.name='SAMRUDDHI'
obj.age= 22
obj.name2='SASWATA'
const dataJSON= JSON.stringify(obj)
fs.writeFileSync('1-json.json',dataJSON)
