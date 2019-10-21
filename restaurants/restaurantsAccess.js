const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getById,
  add,
  update, 
  remove,
  
};



function get() {
  return db('restaurants');
}

function getById(id) {
  return db('restaurants')
    .where({ 'restaurants.city_id': id })
   
}

function add(city) {
  return db('cities')
         .insert(city)
         .then(ids => {
  return db('cities')
         .where({ id: ids[0] })
         .first();
  });
}

function update(id, restaurant) {
  return db('restaurants')
         .where('id', Number(id))
         .update(restaurant);
}

function remove(id) {
  return db('cities')
    .where('id', Number(id))
    .del();
}



