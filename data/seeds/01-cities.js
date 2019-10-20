
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cities').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cities').insert([
        {name: "San Diego", state: 'California'},
        {name: "Birmingham", state: 'Alabama'},
        {name: "Las Vegas", state: 'Neveda'},
        {name: "Lake Charles", state: 'Louisiana'}
      ]);
    });
};
