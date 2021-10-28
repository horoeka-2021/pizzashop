exports.up = function(knex) {
    return knex.schema.table('orders', function(table) {
        table.integer('quantity')
    })
};

exports.down = function(knex) {
    return knex.schema.table('orders', function(table) {
        table.dropColumn('quantity')
    })
};