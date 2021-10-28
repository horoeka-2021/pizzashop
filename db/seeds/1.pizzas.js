exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('pizzas').del()
        .then(function() {
            // Inserts seed entries
            return knex('pizzas').insert([
                { id: 1, type: 'Hawaian', img: '/images/pizza1.jpg', description: 'pizz type1' },
                { id: 2, type: 'BBQ', img: '/images/pizza1.jpg', description: 'pizz type2' },
                { id: 3, type: 'Combination', img: '/images/pizza1.jpg', description: 'pizz type3' },
            ]);
        });
};