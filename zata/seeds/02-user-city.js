
exports.seed = function(knex, Promise) {
  return knex('user_city').insert([
      {user_id: 1, city_id: 1},
      {user_id: 2, city_id: 1},
      {user_id: 3, city_id: 1},
      {user_id: 1, city_id: 2},
      {user_id: 2, city_id: 2},
      {user_id: 3, city_id: 2},
      {user_id: 1, city_id: 3},
      {user_id: 2, city_id: 3},
      {user_id: 3, city_id: 3}
  ]);
};