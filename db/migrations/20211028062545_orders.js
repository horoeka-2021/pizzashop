exports.up = function(knex) {
    return knex.schema.createTable('orders', (t) => {
        t.increments('id').primary()
        t.integer('pizza_id').references('pizzas.id')
        t.string('customer_name')
        t.string('customer_address')
        t.string('status')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('orders')
};