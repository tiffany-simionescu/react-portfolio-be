const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("sqlite_projects");
};

function findById(sqlite_project_id) {
  return db("sqlite_projects")
    .where({ sqlite_project_id });
};

async function add(sqlite_project) {
  const [sqlite_project_id] = await db("sqlite_projects").insert(sqlite_project);

  return findById(sqlite_project_id);
};

function update(sqlite_project_id, changes) {
  return db("sqlite_projects")
    .where({ sqlite_project_id })
    .update(changes, '*');
};

function remove(sqlite_project_id) {
  return db("sqlite_projects")
    .where({ sqlite_project_id })
    .del();
};