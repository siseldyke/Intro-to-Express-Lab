
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
console.log(guitars)

app.get('/', (req, res) => {
    res.send(`Greetings`)
})


app.get('/greetings', (req, res) =>{
    res.send({
        msg: `It is good to see you, ${req.query.name}`
    })
    
})

app.get('/roll', (req, res) =>{
    res.send({
        msg: `You rolled a ${req.query.number}`
     })
    
})

app.get('/guitars', (req, res) =>{
    res.send({
        msg: `Would you like the ${guitars.title} it is ${guitars.price}`
     })
    
})










// app.get('/greetings/:id', (req, res) =>{
//     console.log(`message id of${req.params.id}`)
//     res.send({
//         msg: `id of ${req.params.id}`
//     })
// })