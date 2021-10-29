exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('pizzas').del()
        .then(function() {
            // Inserts seed entries
            return knex('pizzas').insert([
                { id: 1, type: 'Hawaian', img: '/images/Pizza1.jpg', description: 'pizz type1' },
                { id: 2, type: 'BBQ', img: '/images/Pizza2.jpg', description: 'pizz type2' },
                { id: 3, type: 'Combination', img: '/images/Pizza3.jpg', description: 'pizz type3' },
                { id: 4, type: 'Hawaian', img: '/images/Pizza4.jpg', description: 'pizz type4' },
                { id: 5, type: 'BBQ', img: '/images/Pizza5.jpg', description: 'pizz type5' },
                { id: 6, type: 'Combination', img: '/images/Pizza6.jpg', description: 'pizz type6' },
                { id: 7, type: 'Hawaian', img: '/images/Pizza7.jpg', description: 'pizz type7' },
                { id: 8, type: 'BBQ', img: '/images/Pizza8.jpg', description: 'pizz type8' },
                { id: 9, type: 'Combination', img: '/images/Pizza9.jpg', description: 'pizz type9' },
                
            ]);
        });
};