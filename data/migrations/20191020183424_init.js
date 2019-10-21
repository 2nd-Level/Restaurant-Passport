
exports.up = function(knex) {
    return knex.schema
    .createTable('users', function(tbl) {

        tbl.increments();
        
        tbl.string('username', 128)
           .unique()
           .notNullable();
        
        tbl.string('password', 128)
           .notNullable();

        tbl.string('email', 128)
        .unique()
        .notNullable()
    })

    .createTable('user_city', function(tbl) {
        tbl.increments('id');

        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users');

        tbl.integer('city_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('cities')
            .onDelete('CASCADE');  

        tbl.string('city')
        .notNullable()
        .references('name')
        .inTable('cities')
        .onDelete('CASCADE'); 

        tbl.string('state')
        .notNullable()
        .references('state')
        .inTable('cities')
        .onDelete('CASCADE'); 
        
    })


    .createTable('cities', tbl => {

        tbl.increments();

        tbl.string('name', 100)
           .notNullable();
        
        tbl.string('state', 100)
           .notNullable();
        
    })


    .createTable('restaurants', tbl => {
        tbl.increments();

        tbl.string('name', 128)
           .notNullable()

        tbl.string('address', 500)
           .notNullable()

        tbl.integer('phone_number', 10)
           .unsigned()
           .notNullable()
           
        
        tbl.integer('city_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('cities')
            .onDelete('CASCADE');

    })
}
        


exports.down = function(knex) {
    return knex.schema
            .dropTableIfExists('users')
            .dropTableIfExists('cities')
          .dropTableIfExists('user_city')
          .dropTableIfExists('restaurants');
};
            