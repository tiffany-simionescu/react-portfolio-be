
exports.seed = function(knex) {
  return knex('postgresql_projects').del()
    .then(function () {
      return knex('postgresql_projects').insert([
        {
          postgresql_project_id: 1,
          postgresql_project_image: "https://miro.medium.com/max/3840/1*wsG43wOOFexWg_xa0CEhuQ.jpeg",
          postgresql_project_title: "PostgreSQL Project 1",
          postgresql_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          postgresql_project_github_link: "https://github.com/tiffany-simionescu",
          postgresql_project_live_link: "http://tiffanysimionescu.com/"
        },
        {
          postgresql_project_id: 2,
          postgresql_project_image: "https://miro.medium.com/max/3840/1*wsG43wOOFexWg_xa0CEhuQ.jpeg",
          postgresql_project_title: "PostgreSQL Project 2",
          postgresql_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          postgresql_project_github_link: "https://github.com/tiffany-simionescu",
          postgresql_project_live_link: "http://tiffanysimionescu.com/"
        },
        {
          postgresql_project_id: 3,
          postgresql_project_image: "https://miro.medium.com/max/3840/1*wsG43wOOFexWg_xa0CEhuQ.jpeg",
          postgresql_project_title: "PostgreSQL Project 3",
          postgresql_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          postgresql_project_github_link: "https://github.com/tiffany-simionescu",
          postgresql_project_live_link: "http://tiffanysimionescu.com/"
        }
      ]);
    });
};
