
exports.seed = function(knex) {
  return knex('react_projects').del()
    .then(function () {
      return knex('react_projects').insert([
        {
          react_project_id: 1,
          react_project_image: "https://images.pexels.com/photos/2756406/pexels-photo-2756406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 ",
          react_project_title: "Conway's Game of Life",
          react_project_description: "The Game of Life is a cellular automaton originally created by John Horton Conway in 1970. This game is played on a 2D grid of cells. Each cell can either be alive or dead. The front end was built using React and Material UI.",
          react_project_github_link: "https://github.com/tiffany-simionescu/conway-game-of-life",
          react_project_live_link: "https://tiffany-simionescu.github.io/conway-game-of-life/"
        },
        {
          react_project_id: 2,
          react_project_image: "https://images.pexels.com/photos/209956/pexels-photo-209956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          react_project_title: "Tackle My Trade",
          react_project_description: "An NFL Fantasy Football Trade Anaylzer is to help a fan to build their ultimate fantasy league, by making the optinmal trades trades to win their fantasy competitions. The front end was built using React, Material-UI, LESS, CSS, Styled-Components, Redux, Heroku and  React-Router-Dom.",
          react_project_github_link: "https://github.com/tiffany-simionescu/nfl-fantasy-fe/tree/master",
          react_project_live_link: "http://www.tacklemytrade.com/"
        }
      ]);
    });
};
