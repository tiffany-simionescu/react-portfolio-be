
exports.up = async function(knex) {
  await knex.schema.createTable("react_projects", react => {

    react.increments("react_project_id")

    react.string("react_project_image")
      .notNullable()

    react.string("react_project_title")
      .notNullable()

    react.string("react_project_description")
      .notNullable()

    react.string("react_project_github_link")
      .notNullable()

    react.string("react_project_live_link")
      .notNullable()
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("react_projects");
};
