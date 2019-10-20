
const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getById,
  add,
  update, 
  remove
};

function get() {
  return db('cities');
}

function getById(id) {
  return db('cities')
    .where({ 'cities.id': id })
    .first();
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
