const development = require('./knexfile').development
const database = require('knex')(development)

// showing SQL
database.on('query', (data) => {
    console.log('SQL', data.sql)
    console.log('Bindings', data.bindings)
})

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
        .join('pizzas', 'pizzas.id', 'orders.pizza_id')
        .select('orders.id as id',
            'orders.customer_name as customerName',
            'orders.customer_address as customerAddress',
            'orders.quantity as quantity',
            'pizzas.description as description',
            'orders.status as status'
        )
}

function getOrderDetails(id, db = database) {
    return db('orders')
        .join('pizzas', 'pizzas.id', 'orders.pizza_id')
        .where('orders.id', id)
        .select('orders.id as id',
            'orders.customer_name as customerName',
            'orders.customer_address as customerAddress',
            'orders.quantity as quantity',
            'pizzas.description as description',
            'orders.status as status'
        )
        .first()
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