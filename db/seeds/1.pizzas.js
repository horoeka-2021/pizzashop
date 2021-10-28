exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('pizzas').del()
        .then(function() {
            // Inserts seed entries
            return knex('pizzas').insert([
                { id: 1, type: 'Hawaian', img: '/images/Pizza1.jpg', description: 'pizz type1' },
                { id: 2, type: 'BBQ', img: '/images/Pizza2.png', description: 'pizz type2' },
                { id: 3, type: 'Combination', img: '/images/Pizza3.jpg', description: 'pizz type3' },
            ]);
        });
};