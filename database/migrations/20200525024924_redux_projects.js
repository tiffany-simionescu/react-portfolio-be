
exports.up = async function(knex) {
  await knex.schema.createTable("redux_projects", redux => {

    redux.increments("redux_project_id")

    redux.string("redux_project_image")
      .notNullable()

    redux.string("redux_project_title")
      .notNullable()

    redux.string("redux_project_description")
      .notNullable()

    redux.string("redux_project_github_link")
      .notNullable()

    redux.string("redux_project_live_link")
      .notNullable()
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("redux_projects");
};
