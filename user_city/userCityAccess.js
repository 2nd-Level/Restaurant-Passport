const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getById,
  add,
  update, 
  remove,
  
};



function get() {
  return db('user_city');
}

function getById(id) {
  return db('user_city')
    .where({ 'user_city.user_id': id })
   
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

function update(id, city) {
  return db('cities')
         .where('id', Number(id))
         .update(city);
}

function remove(id) {
  return db('cities')
    .where('id', Number(id))
    .del();
}



