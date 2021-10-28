exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('orders').del()
        .then(function() {
            // Inserts seed entries
            return knex('orders').insert([
                { id: 1, pizza_id: '1', customer_name: 'Ying', customer_address: 'Auckland', status: "in progress" },
                { id: 2, pizza_id: '2', customer_name: 'Crystal', customer_address: 'Auckland', status: "in progress" },
                { id: 3, pizza_id: '3', customer_name: 'Rav', customer_address: 'Auckland', status: "in progress" },
                { id: 4, pizza_id: '4', customer_name: 'Vimal', customer_address: 'Auckland', status: "in progress" },
                { id: 5, pizza_id: '5', customer_name: 'Tommy', customer_address: 'Auckland', status: "in progress" },
            ]);
        });
};