
exports.up = async function(knex) {
  await knex.schema.createTable("users", users => {

    users.increments("user_id")

    users.string("username")
      .notNullable()
      .unique()

    users.string("password")
      .notNullable()

    users.string("first_name")
      .notNullable()

    users.string("last_name")
      .notNullable()

    users.string("email")
      .notNullable()

    users.bigInteger("phone_number") 
      .notNullable()
      .unique()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("users")
};
