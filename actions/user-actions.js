const db = require('../database/dbConfig');

module.exports = {
  find, 
  findById,
  findByFilter,
  add,
  update,
  remove
}

function find() {
  return db("users")
    .select("*");
}

function findById(user_id) {
  return db("users")
    .where({ user_id })
    .first();
}

function findByFilter(filter) {
  return db("users")  
    .where(filter)
    .first();
}

async function add(user) {
  const [user_id] = await db("users").insert(user, "user_id");

  return findById(user_id);
}

function update(user_id, changes) {
  return db("users")
    .where({ user_id })
    .update(changes, '*');
}

function remove(user_id) {
  return db("users")
    .where({ user_id })
    .del();
}