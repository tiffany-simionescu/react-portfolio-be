
exports.up = async function(knex) {
  await knex.schema.createTable("postgresql_projects", postgresql => {

    postgresql.increments("postgresql_project_id")

    postgresql.string("postgresql_project_image")
      .notNullable()

    postgresql.string("postgresql_project_title")
      .notNullable()

    postgresql.string("postgresql_project_description")
      .notNullable()

    postgresql.string("postgresql_project_github_link")
      .notNullable()

    postgresql.string("postgresql_project_live_link")
      // .notNullable()
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("postgresql_projects");
};
