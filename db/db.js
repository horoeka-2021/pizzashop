const development = require('./knexfile').development
const database = require('knex')(development) // ????

module.exports = {
    getAllPizza,
    getPizza,
    addOrder,
    getOrderList,
    getOrderDetails,
    updateOrder,
    capitalise,
    deleteOrder
}


function getAllPizza(db = database) {
    return db('pizzas')
        .select()
}

function getPizza(id, db = database) {
    return db('pizzas')
        .where('id', id)
        .select()
        .first()
}

function addOrder(newObj, db = database) {
    return db('orders')
        .insert(newObj)
}

function getOrderList(db = database) {
    return db("orders")
        .select()
}

function getOrderDetails(id, db = database) {
    return db('orders')
        .where('id', id)
        .select()
}

function updateOrder(id, obj, db = database) {
    return db('orders')
        .where('id', id)
        .update(obj)
}


function capitalise(name) {
    return name[0].toUpperCase() + name.substring(1)
}

function deleteOrder(id, db = database) {
    return db('orders')
        .where('id', id)
        .delete()
}