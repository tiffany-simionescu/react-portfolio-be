
exports.seed = function(knex) {
  return knex('sqlite_projects').del()
    .then(function () {
      return knex('sqlite_projects').insert([
        {
          sqlite_project_id: 1,
          sqlite_project_image: "https://miro.medium.com/max/623/1*X0KStHfY__eO1IN6jaW53Q.jpeg",
          sqlite_project_title: "Sqlite Project 1",
          sqlite_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          sqlite_project_github_link: "https://github.com/tiffany-simionescu",
          sqlite_project_live_link: "http://tiffanysimionescu.com/"
        },
        {
          sqlite_project_id: 2,
          sqlite_project_image: "https://miro.medium.com/max/623/1*X0KStHfY__eO1IN6jaW53Q.jpeg",
          sqlite_project_title: "Sqlite Project 2",
          sqlite_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          sqlite_project_github_link: "https://github.com/tiffany-simionescu",
          sqlite_project_live_link: "http://tiffanysimionescu.com/"
        },
        {
          sqlite_project_id: 3,
          sqlite_project_image: "https://miro.medium.com/max/623/1*X0KStHfY__eO1IN6jaW53Q.jpeg",
          sqlite_project_title: "Sqlite Project 3",
          sqlite_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          sqlite_project_github_link: "https://github.com/tiffany-simionescu",
          sqlite_project_live_link: "http://tiffanysimionescu.com/"
        }
      ]);
    });
};
