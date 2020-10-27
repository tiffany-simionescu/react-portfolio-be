
exports.up = async function(knex) {
  await knex.schema.createTable("sqlite_projects", sqlite => {

    sqlite.increments("sqlite_project_id")

    sqlite.string("sqlite_project_image")
      .notNullable()

    sqlite.string("sqlite_project_title")
      .notNullable()

    sqlite.string("sqlite_project_description")
      .notNullable()

    sqlite.string("sqlite_project_github_link")
      .notNullable()

    sqlite.string("sqlite_project_live_link")
      // .notNullable()
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("sqlite_projects");
};
