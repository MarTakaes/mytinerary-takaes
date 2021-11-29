const citiesArray =[{
    city:"Amsterdam",
    country:"Netherlands",
    image:"./assets/cities/amsterdam.jpg",
    id:1
},
{
    city:"Berlin",
    country:"Germany",
    image:"./assets/cities/berlin.jpeg",
    id:2
},
{
    city:"Yakarta",
    country:"Indonesia",
    image:"./assets/cities/jakarta.jpg",
    id:3
},
{
    city:"Kyoto",
    country:"Japan",
    image:"./assets/cities/kyoto.jpg",
    id:4
},
{
    city:"London",
    country:"United Kingdom",
    image:"./assets/cities/london.jpg",
    id:5
},
{
    city:"Moscu",
    country:"Russia",
    image:"./assets/cities/moscu.jpg",
    id:6
},
{
    city:"New York",
    country:"United States",
    image:"./assets/cities/newyork.jpg",
    id:7
},
{
    city:"New Delhi",
    country:"India",
    image:"./assets/cities/nueva dheli.jpg",
    id:8
},
{
    city:"Okinawa",
    country:"Japan",
    image:"./assets/cities/okinawa.jpg",
    id:9
},
{
    city:"Paris",
    country:"France",
    image:"./assets/cities/paris.jpg",
    id:10
},
{
    city:"Punaauia",
    country:"French Polinesya",
    image:"./assets/cities/punaauia.jpg",
    id:11
},
{
    city:"Rome",
    country:"Italy",
    image:"./assets/cities/roma.jpg",
    id:12
},
{
    city:"San Andres",
    country:"Colombia",
    image:"./assets/cities/san andres.jpg",
    id:13
},
{
    city:"Shangai",
    country:"China",
    image:"./assets/cities/shangai.jpg",
    id:14
},
{
    city:"Venezia",
    country:"Italy",
    image:"./assets/cities/venezia.jpg",
    id:15
}
]


const citiesController = {returnCities:(req,res)=>{
    res.json({Response:{citiesArray}})
},
    returnCity:(req,res)=>{
        const city = citiesArray.find(city=>{
            cities.id.toString() === req.params.id;
        })
        res.json({response:{city}})
    } 
       
} 

module.exports = citiesController