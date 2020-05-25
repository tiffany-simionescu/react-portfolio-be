
exports.up = async function(knex) {
  await knex.schema.createTable("users", users => {

    users.increments("user_id")

    users.string("username", 128)
      .notNullable()
      .unique()

    users.string("password", 128)
      .notNullable()

    users.string("first_name", 128)
      .notNullable()

    users.string("last_name", 128)
      .notNullable()

    users.string("email", 128)
      .notNullable()

    users.integer("phone_number", 10)
      .notNullable()
      .unique()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("users")
};
