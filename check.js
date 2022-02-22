var express = require('express');
var app = express();
obj=[
    {
        id:1,
        Name:'Saswata'
    },
    {
        id:2,
        Name:'Gopesh'
    }
];
app.get('api/objects',(req,res)=>{
    res.send(obj);
})
app.listen(3000,console.log('Listening on 3000'));