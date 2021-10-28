const development = require('./knexfile').development
const database = require('knex')(development) // ????

module.exports = {
  getAllPizza,
  makeOrder
}


function getAllPizza(db = database) {
  return db('pizzas')
    .select()
}

function makeOrder(id, db = database) {
  return db('pizzas')
    .where('id', id)
    .select()
}