
exports.seed = function(knex) {
  return knex('redux_projects').del()
    .then(function () {
      return knex('redux_projects').insert([
        {
          redux_project_id: 1,
          redux_project_image: "https://images.pexels.com/photos/247399/pexels-photo-247399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          redux_project_title: "Random Animals App",
          redux_project_description: "This is an application that provides random pictures for foxes, dogs and cats. The front end was built using React, Redux and React Router DOM.",
          redux_project_github_link: "https://github.com/tiffany-simionescu/React-Redux-App",
          redux_project_live_link: "https://tiffany-simionescu.github.io/dog-image"
        },
        {
          redux_project_id: 2,
          redux_project_image: "https://images.pexels.com/photos/209956/pexels-photo-209956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          redux_project_title: "Tackle My Trade",
          redux_project_description: "An NFL Fantasy Football Trade Analyzer is to help a fan to build their ultimate fantasy league, by making the optimal trades to win their fantasy competitions. The front end was built using React, Material-UI, LESS, Styled-Components, Redux, and Heroku.",
          redux_project_github_link: "https://github.com/tiffany-simionescu/nfl-fantasy-fe/tree/master",
          redux_project_live_link: "http://www.tacklemytrade.com/"
        }
      ]);
    });
};
