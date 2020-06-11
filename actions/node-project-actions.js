const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("node_projects");
};

function findById(node_project_id) {
  return db("node_projects")
    .where({ node_project_id });
};

async function add(node_project) {
  const [node_project_id] = await db("node_projects").insert(node_project, "node_project_id");

  return findById(node_project_id);
};

function update(node_project_id, changes) {
  return db("node_projects")
    .where({ node_project_id })
    .update(changes, '*');
};

function remove(node_project_id) {
  return db("node_projects")
    .where({ node_project_id })
    .del();
};