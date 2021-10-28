exports.up = function(knex) {
    return knex.schema.createTable('pizzas', (t) => {
        t.increments('id').primary()
        t.string('type')
        t.string('img')
        t.string('description')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pizzas')
};