// const { default: City } = require("../models/City")
// const User = require("../models/User")
// const bcryptjs = require("bcryptjs")

// const authControllers ={
//     postUser:(req,res)=>{
//         const {name,lastname, photo, email, password,country} = req.body
//         body
//         const passwordHashed = bcryptjs.hashSync(password,10)
//         const newUser= new User({
//             name,
//             lastname,
//             photo,
//             email,
//             password: passwordHashed,
//             country,
//         })
//         .save()
//         .then((response)=> res.json({response:{newUser}}))
//     },
//     readUsers:(req,res) =>{
//         User.find().then((response)=>{
//             res.json({response})
//         })
        
//     },
//     readUser:(req, res)=>{
//         City.findOne({
//             $or:[{email: req.body.email},{phone:req.body.phone}],

//         })
//     }
// }