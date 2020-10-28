
exports.seed = function(knex) {
  return knex('python_projects').del()
    .then(function () {
      return knex('python_projects').insert([
        {
          python_project_id: 1,
          python_project_image: "https://images.pexels.com/photos/39018/cards-jass-cards-card-game-strategy-39018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          python_project_title: "Python Tarot Game",
          python_project_description: "This text-based Tarot game is a Python object oriented program that is very simple to use. You can play this game in your CLI. Just answer a few questions and you'll receive your answer.",
          python_project_github_link: "https://github.com/tiffany-simionescu/python-tarot",
          python_project_live_link: "https://github.com/tiffany-simionescu/python-tarot"
        },
        {
          python_project_id: 2,
          python_project_image: "https://images.pexels.com/photos/4614107/pexels-photo-4614107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          python_project_title: "Sorting Algorithms",
          python_project_description: "This project demonstrates different ways to sort data. There are four sorting / searching algorithms covered: iterative sorting, recursive sorting, binary search and linear search.",
          python_project_github_link: "https://github.com/tiffany-simionescu/Sorting/tree/tiffany-simionescu",
          python_project_live_link: "https://github.com/tiffany-simionescu/Sorting/tree/tiffany-simionescu"
        },
        {
          python_project_id: 3,
          python_project_image: "https://images.pexels.com/photos/9198/nature-sky-twilight-grass-9198.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          python_project_title: "Graphs",
          python_project_description: "This project demonstrates the use of graphs. The objectives achieved were graph representation, breadth first search, depth first search, randomness and connected components.",
          python_project_github_link: "https://github.com/tiffany-simionescu/Graphs",
          python_project_live_link: "https://github.com/tiffany-simionescu/Graphs"
        }
      ]);
    });
};
