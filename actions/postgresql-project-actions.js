const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("postgresql_projects");
};

function findById(postgresql_project_id) {
  return db("postgresql_projects")
    .where({ postgresql_project_id });
};

async function add(postgresql_project) {
  const [postgresql_project_id] = await db("postgresql_projects").insert(postgresql_project);

  return findById(postgresql_project_id);
};

function update(postgresql_project_id, changes) {
  return db("postgresql_projects")
    .where({ postgresql_project_id })
    .update(changes, '*');
};

function remove(postgresql_project_id) {
  return db("postgresql_projects")
    .where({ postgresql_project_id })
    .del();
};