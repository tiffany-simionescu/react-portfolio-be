
exports.up = async function(knex) {
  await knex.schema.createTable("python_projects", python => {

    python.increments("python_project_id")

    python.string("python_project_image")
      .notNullable()

    python.string("python_project_title")
    .notNullable()

    python.string("python_project_description")
    .notNullable()

    python.string("python_project_github_link")
    .notNullable()

    python.string("python_project_live_link")
    // .notNullable()
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("python_projects");
};
