
exports.seed = function(knex) {
  return knex('sqlite_projects').del()
    .then(function () {
      return knex('sqlite_projects').insert([
        {
          sqlite_project_id: 1,
          sqlite_project_image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          sqlite_project_title: "Authentication API",
          sqlite_project_description: "",
          sqlite_project_github_link: "https://github.com/tiffany-simionescu/node-auth3-project/tree/tiffany-simionescu",
          // Create a Heroku Link
          // sqlite_project_live_link: "http://tiffanysimionescu.com/"
        }
      ]);
    });
};
