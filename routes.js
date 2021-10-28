const express = require('express')
const db = require('./db/db')
const router = express.Router()

router.get('/home', (req, res) => {
  // console.log('vimal-crystal');
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
  db.makeOrder(id)
    .then(result => {
      const pizzaObj = {
        result
      }
      console.log(pizzaObj);
      res.render('order', pizzaObj) // get the correct hbs page
      return null
    })
    .catch(err => {
      res.send('pizza id invalid')
    })
})

module.exports = router

