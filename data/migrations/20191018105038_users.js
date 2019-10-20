
exports.up = function(knex) {
    return knex.schema
      .createTable('cities', tbl => {

          tbl.increments();

          tbl.string('name', 100)
             .notNullable();
          
          tbl.string('state', 100)
             .notNullable();
          
      })

      .createTable('user_city', tbl => {

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
    return knex.schema
          .dropTableIfExists('cities')
          .dropTableIfExists('user_city')
          .dropTableIfExists('restaurants');
  };