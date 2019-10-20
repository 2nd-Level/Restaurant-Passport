const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getBy,
  getById,
  add,
  update, 
  remove
};

function get() {
  return db('users');
}

function getBy(filter) {
  return db('users')
        .where(filter)
        .first();
};

function getById(id) {
  return db('users')
    .where({ 'users.id': id })
    .first();
}

function add(user) {
  return db('users')
         .insert(user)
         .then(ids => {
  return db('users')
         .where({ id: ids[0] })
         .first();
  });
}

function update(id, user) {
  return db('users')
         .where('id', Number(id))
         .update(user);
}

function remove(id) {
  return db('users')
    .where('id', Number(id))
    .del();
}

