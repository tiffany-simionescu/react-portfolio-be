
exports.seed = function(knex) {
  return knex('redux_projects').del()
    .then(function () {
      return knex('redux_projects').insert([
        {
          redux_project_id: 1,
          redux_project_image: "https://chriscourses.com/img/blog/redux/redux.jpg",
          redux_project_title: "Redux Project 1",
          redux_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          redux_project_github_link: "https://github.com/tiffany-simionescu",
          redux_project_live_link: "http://tiffanysimionescu.com/"
        },
        {
          redux_project_id: 2,
          redux_project_image: "https://chriscourses.com/img/blog/redux/redux.jpg",
          redux_project_title: "Redux Project 2",
          redux_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          redux_project_github_link: "https://github.com/tiffany-simionescu",
          redux_project_live_link: "http://tiffanysimionescu.com/"
        },
        {
          redux_project_id: 3,
          redux_project_image: "https://chriscourses.com/img/blog/redux/redux.jpg",
          redux_project_title: "Redux Project 3",
          redux_project_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque consectetur libero feugiat consequat. Quisque tempus, nunc vitae scelerisque aliquet, orci est interdum arcu, vitae.",
          redux_project_github_link: "https://github.com/tiffany-simionescu",
          redux_project_live_link: "http://tiffanysimionescu.com/"
        }
      ]);
    });
};
