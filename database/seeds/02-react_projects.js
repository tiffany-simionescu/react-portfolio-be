
exports.seed = function(knex) {
  return knex('react_projects').del()
    .then(function () {
      return knex('react_projects').insert([
        {
          react_project_id: 1,
          react_project_image: "https://miro.medium.com/max/1200/0*JWL-dYH8mOxe9EGb.png",
          react_project_title: "React Project 1",
          react_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          react_project_github_link: "https://github.com/tiffany-simionescu",
          react_project_live_link: "http://tiffanysimionescu.com/"
        },
        {
          react_project_id: 2,
          react_project_image: "https://miro.medium.com/max/1200/0*JWL-dYH8mOxe9EGb.png",
          react_project_title: "React Project 2",
          react_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          react_project_github_link: "https://github.com/tiffany-simionescu",
          react_project_live_link: "http://tiffanysimionescu.com/"
        },
        {
          react_project_id: 3,
          react_project_image: "https://miro.medium.com/max/1200/0*JWL-dYH8mOxe9EGb.png",
          react_project_title: "React Project 3",
          react_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          react_project_github_link: "https://github.com/tiffany-simionescu",
          react_project_live_link: "http://tiffanysimionescu.com/"
        }
      ]);
    });
};
