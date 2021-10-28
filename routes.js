const express = require('express')
const db = require('./db/db')
const router = express.Router()

router.get('/home', (req, res) => {
  
  db.getAllPizza()
    .then(result => {
      const pizzaObj = {
        result: result
      }
      console.log(pizzaObj);
      res.render('home', pizzaObj)
      return null
    })
    .catch(err => {
      res.send('No Pizza available')
    })
})

router.get('/:id/order', (req, res) => {
  const id = Number(req.params.id)
  db.getPizza(id)
    .then(result => {
      const pizzaObj = {
        result
      }
      // console.log(pizzaObj);
      res.render('order', pizzaObj) // get the correct hbs page
      return null
    })
    .catch(err => {
      res.send('pizza id invalid')
    })
})

router.post('/:id/order', (req, res) => {
  const id = Number(req.params.id)
  const customerName = req.body.name
  const customerAddress = req.body.address
  const quantity = req.body.quantity
 
  //create new object
  const newOrder = {
    pizza_id: id,
    customer_name: customerName,
    customer_address: customerAddress,
    quantity: quantity,
    status: "in progress"
  }
 
  db.addOrder(newOrder)
  .then(result=> {
    // console.log(result)
    res.redirect('list')
    return null
  })
  .catch(err=> {
    res.send('Order unsuccessful')
  })
})

router.get('/list', (req, res) => {
 
  db.getOrderList()
    .then(result => {
      const orderObj = {
        result:result
      }
      console.log(orderObj);
      res.render('list', orderObj)
      return null
    })
    .catch(err => {
      res.send('unable to load the order list')
    })
})






module.exports = router

