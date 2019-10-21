
exports.up = function(knex) {
    return knex.schema.createTable('users', function(tbl) {

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
        
};
        
exports.down = function(knex) {
        return knex.schema.dropTableIfExists('users')
};
