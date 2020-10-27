
exports.seed = function(knex) {
  return knex('python_projects').del()
    .then(function () {
      return knex('python_projects').insert([
        {
          python_project_id: 1,
          python_project_image: "https://images.pexels.com/photos/39018/cards-jass-cards-card-game-strategy-39018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          python_project_title: "Python Tarot Game",
          python_project_description: "",
          python_project_github_link: "https://github.com/tiffany-simionescu/python-tarot"
        },
        {
          python_project_id: 2,
          python_project_image: "https://images.pexels.com/photos/4614107/pexels-photo-4614107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          python_project_title: "Sorting Algorithms",
          python_project_description: "",
          python_project_github_link: "https://github.com/tiffany-simionescu/Sorting/tree/tiffany-simionescu"
        },
        {
          python_project_id: 3,
          python_project_image: "https://images.pexels.com/photos/9198/nature-sky-twilight-grass-9198.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          python_project_title: "Graphs",
          python_project_description: "",
          python_project_github_link: "https://github.com/tiffany-simionescu/Graphs"
        }
      ]);
    });
};
