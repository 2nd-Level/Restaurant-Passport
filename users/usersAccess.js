const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getById,
};

function get() {
  return db('users');
}

function getById(id) {
  return db('users')
    .where({ 'users.id': id })
    .first();
}
