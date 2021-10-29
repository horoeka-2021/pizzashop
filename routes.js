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
            res.render('order', result) // get the correct hbs page
            return null
        })
        .catch(err => {
            res.send('pizza id invalid')
        })
})

router.post('/:id/order', (req, res) => {
    const id = Number(req.params.id)
    const customerName = db.capitalise(req.body.name)
    const customerAddress = db.capitalise(req.body.address)
    const quantity = Number(req.body.quantity)

    //create new object
    const newOrder = {
        pizza_id: id,
        customer_name: customerName,
        customer_address: customerAddress,
        quantity: quantity,
        status: "in progress"
    }

    db.addOrder(newOrder)
        .then(result => {
            // console.log(result)
            res.redirect('/list')
            return null
        })
        .catch(err => {
            res.send('Order unsuccessful')
        })
})

router.get('/list', (req, res) => {

    db.getOrderList()
        .then(result => {
            const orderObj = {
                result: result
            }
            console.log(orderObj);
            res.render('list', orderObj)
            return null
        })
        .catch(err => {
            res.send('unable to load the order list')
        })
})

router.get('/:id/details', (req, res) => {
    const id = Number(req.params.id)

    db.getOrderDetails(id) // ??
        .then(result => {
            const orderDetails = {
                result: result
            }
            // console.log(orderDetails);
            res.render('details', orderDetails)
            return null
        })
        .catch(err => {
            res.send('unable to load the order details')
        })
})

router.post('/:id/details', (req, res) => {
    const id = Number(req.params.id)
    const status = db.capitalise(req.body.status)
    const updateObj = {
        status: status
    }
    db.updateOrder(id, updateObj)
        .then(res => {
            console.log(res);
            res.redirect('/list')
            return null
        })
        .catch(err => {
            res.send('unable to update order')
        })

})

router.post('/delete', (req, res) => {
    const id = Number(req.body.id)
    db.deleteOrder(id)
        .then(result => {
            console.log(result);
            res.redirect('/list')
            return null
        })
        .catch(err => {
            res.send('unable to delete order')
        })
})






module.exports = router