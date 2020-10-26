const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("react_projects");
};

function findById(react_project_id) {
  return db("react_projects")
    .where({ react_project_id });
};

async function add(react_project) {
  const [react_project_id] = await db("react_projects").insert(react_project, "react_project_id");

  return findById(react_project_id);
};

function update(react_project_id, changes) {
  return db("react_projects")
    .where({ react_project_id })
    .update(changes, '*');
};

function remove(react_project_id) {
  return db("react_projects")
    .where({ react_project_id })
    .del();
};