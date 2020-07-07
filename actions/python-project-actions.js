const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("python_projects");
};

function findById(python_project_id) {
  return db("python_projects")
    .where({ python_project_id });
};

async function add(python_project) {
  const [python_project_id] = await db("python_projects").insert(python_project, "python_project_id");

  return findById(python_project_id);
};

function update(python_project_id, changes) {
  return db("python_projects")
    .where({ python_project_id })
    .update(changes, '*');
};

function remove(python_project_id) {
  return db("python_projects")
    .where({ python_project_id })
    .del();
};