const request=require('request')
//const url='http://api.weatherstack.com/current?access_key=a018bd9132783b75c2ed4c0d085c8c19&query=22.5958,88.2636'
//request({url:url,json:true},(error,response)=>{ //json formatter chrome extension
 //   console.log("It is currently "+ response.body.current.weather_descriptions[0]+" degrees out.There is a "+response.body.current.precip+"% chance of rain")
    
//})

//Geocoding
const url='https://api.mapbox.com/geocoding/v5/mapbox.places/Howrah.json?access_token=pk.eyJ1Ijoic2Fzd2F0YTE5OTkiLCJhIjoiY2t2eTdscmZvNzRxNzJuczFuMTRucXA5NiJ9.kmoBSmBz59aR76wTVE-DWQ&limit=1'
request({url:url,json:true},(error,response)=>{
    console.log()
}
)
