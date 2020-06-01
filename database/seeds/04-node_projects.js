
exports.seed = function(knex) {
  return knex('node_projects').del()
    .then(function () {
      return knex('node_projects').insert([
        {
          node_project_id: 1,
          node_project_image: "https://chriscourses.com/img/blog/redux/redux.jpg",
          node_project_title: "Node Project 1",
          node_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          node_project_github_link: "https://github.com/tiffany-simionescu",
          node_project_live_link: "http://tiffanysimionescu.com/"
        },
        {
          node_project_id: 2,
          node_project_image: "https://chriscourses.com/img/blog/redux/redux.jpg",
          node_project_title: "Node Project 2",
          node_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          node_project_github_link: "https://github.com/tiffany-simionescu",
          node_project_live_link: "http://tiffanysimionescu.com/"
        },
        {
          node_project_id: 3,
          node_project_image: "https://chriscourses.com/img/blog/redux/redux.jpg",
          node_project_title: "Node Project 3",
          node_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          node_project_github_link: "https://github.com/tiffany-simionescu",
          node_project_live_link: "http://tiffanysimionescu.com/"
        }
      ]);
    });
};
