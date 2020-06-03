
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          first_name: "Tiffany",
          last_name: "Lynn",
          username: "tiffany25",
          password: "123456",
          email: "tiffanyfeldkamp@gmail.com",
          phone_number: 9549909424
        }
      ]);
    });
};
