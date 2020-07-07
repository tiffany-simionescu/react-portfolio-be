
exports.seed = function(knex) {
  return knex('python_projects').del()
    .then(function () {
      return knex('python_projects').insert([
        {
          python_project_id: 1,
          python_project_image: "https://miro.medium.com/max/1200/0*JWL-dYH8mOxe9EGb.png",
          python_project_title: "Python Project 1",
          python_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          python_project_github_link: "https://github.com/tiffany-simionescu",
          python_project_live_link: "http://tiffanysimionescu.com/"
        },
        {
          python_project_id: 2,
          python_project_image: "https://miro.medium.com/max/1200/0*JWL-dYH8mOxe9EGb.png",
          python_project_title: "Python Project 2",
          python_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          python_project_github_link: "https://github.com/tiffany-simionescu",
          python_project_live_link: "http://tiffanysimionescu.com/"
        },
        {
          python_project_id: 3,
          python_project_image: "https://miro.medium.com/max/1200/0*JWL-dYH8mOxe9EGb.png",
          python_project_title: "Python Project 3",
          python_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          python_project_github_link: "https://github.com/tiffany-simionescu",
          python_project_live_link: "http://tiffanysimionescu.com/"
        }
      ]);
    });
};
