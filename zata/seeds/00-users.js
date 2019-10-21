
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Will', password: 'william', email: 'will@gmail.com'},
        {username: 'Jill', password: 'jilliam', email: 'jill@gmail.com'},
        {username: 'Bill', password: 'billiam', email: 'bill@gmail.com'}
      ]);
    });
};
