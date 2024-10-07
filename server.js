
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
    // console.log(num)
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
app.get('/shoes' , (req, res) => {
    res.send(shoes)
})




app.get('/shoes/minPrice/:price' , (req, res) =>{
    let price = req.params.price
    let minPrice = shoes.filter((shoe) => shoe.price > price )
//    if (price)
    console.log(minPrice)
    res.send(minPrice)
})

app.get('/shoes/maxPrice/:price' , (req, res) =>{
    let price = req.params.price
    let maxPrice = shoes.filter((shoe) => shoe.price < price)
    res.send(maxPrice)
})

app.get('/shoes/:type' , (req, res) =>{
    let type = req.params.type
    let allTypes = shoes.filter((shoe) => shoe.type === type)
    console.log(type)
    res.send(allTypes)
})

//notes!
// used Mdn webdocs for things like the filter, with guidance from tom
// had some help from googling the math for random numbers via mdn
//as well as asking chat gpt for functions to do with that
//the string to call the name i had references from class with jeremy showing how that works

    // console.log(shoePrice)
    // let minPrice = `${req.query[index].price}`
    // let maxPrice = `${req.query[index].price}`
    // let types = `${req.query[index].type}`
    // let shoePrice = req.query[index].price


    
    // res.send(minPrice)
   
    // console.log(types)

        // if(minPrice = shoes[index].price < )
        // console.log(shoes[index].price)
    








