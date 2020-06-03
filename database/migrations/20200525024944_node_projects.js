
exports.up = async function(knex) {
  await knex.schema.createTable("node_projects", node => {

    node.increments("node_project_id")

    node.string("node_project_image")
      .notNullable()

    node.string("node_project_title")
      .notNullable()

    node.string("node_project_description")
      .notNullable()

    node.string("node_project_github_link")
      .notNullable()

    node.string("node_project_live_link")
      .notNullable()
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("node_projects");
};
