
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_city').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_city').insert([
        {user_id: 1, city_id: 1, city: "San Diego", state: 'California'},
        {user_id: 1, city_id: 2, city: "Birmingham", state: 'Alabama'},
        {user_id: 1, city_id: 3, city: "Las Vegas", state: 'Neveda'},
        {user_id: 1, city_id: 4, city: "Lake Charles", state: 'Louisiana'},
        {user_id: 2, city_id: 1, city: "San Diego", state: 'California'},
        {user_id: 2, city_id: 2, city: "Birmingham", state: 'Alabama'},
        {user_id: 2, city_id: 3, city: "Las Vegas", state: 'Neveda'},
        {user_id: 2, city_id: 5, city: "Toledo", state: 'Oregon'},
        {user_id: 3, city_id: 1, city: "San Diego", state: 'California'},
        {user_id: 3, city_id: 2, city: "Birmingham", state: 'Alabama'},
        {user_id: 3, city_id: 3, city: "Las Vegas", state: 'Neveda'},
        {user_id: 3, city_id: 6, city: "Jacksonville", state: 'Florida'}
        

      ]);
    });
};