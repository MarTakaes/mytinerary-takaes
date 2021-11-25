const info =[{
    city:"Amsterdam",
    country:"Netherlands",
    image:"/frontend/public/assets/cities/amsterdam.jpg"
},
{
    city:"Berlin",
    country:"Germany",
    image:"/frontend/public/assets/cities/berlin.jpeg"
},
{
    city:"Yakarta",
    country:"Indonesia",
    image:"/frontend/public/assets/cities/jakarta.jpg"
},
{
    city:"Kyoto",
    country:"Japan",
    image:"/frontend/public/assets/cities/kyoto.jpg"
},
{
    city:"London",
    country:"United Kingdom",
    image:"/frontend/public/assets/cities/london.jpg"
},
{
    city:"Moscu",
    country:"Russia",
    image:"/frontend/public/assets/cities/moscu.jpg"
},
{
    city:"New York",
    country:"United States",
    image:"/frontend/public/assets/cities/newyork.jpg"
},
{
    city:"New Delhi",
    country:"India",
    image:"/frontend/public/assets/cities/nueva dheli.jpg"
},
{
    city:"Okinawa",
    country:"Japan",
    image:"/frontend/public/assets/cities/okinawa.jpg"
},
{
    city:"Paris",
    country:"France",
    image:"/frontend/public/assets/cities/paris.jpg"
},
{
    city:"Punaauia",
    country:"French Polinesya",
    image:"/frontend/public/assets/cities/punaauia.jpg"
},
{
    city:"Rome",
    country:"Italy",
    image:"/frontend/public/assets/cities/roma.jpg"
},
{
    city:"San Andres",
    country:"Colombia",
    image:"/frontend/public/assets/cities/san andres.jpg"
},
{
    city:"Shangai",
    country:"China",
    image:"/frontend/public/assets/cities/shangai.jpg"
},
{
    city:"Venezia",
    country:"Italy",
    image:"/frontend/public/assets/cities/venezia.jpg"
}
]
const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())


app.get("/api/info",(req,res)=>{
    console.log("llego el get")
    res.json({response:{info:info}})
})
app.listen(4000, ()=> {console.log("Server is listening on port 4000")})
