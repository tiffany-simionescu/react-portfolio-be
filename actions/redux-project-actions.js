const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("redux_projects");
};

function findById(redux_project_id) {
  return db("redux_projects")
    .where({ redux_project_id });
};

async function add(redux_project) {
  const [redux_project_id] = await db("redux_projects").insert(redux_project);

  return findById(redux_project_id);
};

function update(redux_project_id, changes) {
  return db("redux_projects")
    .where({ redux_project_id })
    .update(changes, '*');
};

function remove(redux_project_id) {
  return db("redux_projects")
    .where({ redux_project_id })
    .del();
};