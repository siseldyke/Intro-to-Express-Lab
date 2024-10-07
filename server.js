
const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

app.listen(PORT, () =>{
    console.log(`Express server running on port ${PORT}`)
})

const guitars = [
    { title: 'Gibson Les Paul', price: 1200 },
    { title: 'Fender Stratocaster, American Made', price: 950 },
    { title: 'Martin D-15 Acoustic', price: 600 },
    { title: 'Fender Telecaster', price: 1000 }
  ];

  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];
// console.log(shoes)
app.get('/', (req, res) => {
    res.send(`Greetings`)
})


app.get('/greetings', (req, res) =>{
    res.send({
        msg: `It is good to see you, ${req.query.name}`
    })
    
})

app.get('/roll', (req, res) =>{
    let number = req.query.number
    let num = Number(number)
    if(isNaN(num)){
        return res.send('Please specify a number')
    }
    
    let randomNumber = Math.floor(Math.random() * (num + 1))
    res.send({
        msg: `You rolled a ${randomNumber}`
        
     })
    
})

app.get('/guitars/:index', (req, res) =>{
    let index = req.params.index
    console.log(guitars[index])
    if(index > 3) {
        return res.send({
           msg:`We do not have that in stock, please choose another option`
       })
   }
   console.log(req.params)
    res.send({
        msg: `Would you like the ${guitars[index].title} it is ${guitars[index].price}`
        
     })
    
})

app.get('/shoes/' , (req, res) =>{
let minPrice = 15
let maxPrice = 1000
let types = ['sandal' , 'sneaker', 'boot', 'heel']
})








// app.get('/greetings/:id', (req, res) =>{
//     console.log(`message id of${req.params.id}`)
//     res.send({
//         msg: `id of ${req.params.id}`
//     })
// })