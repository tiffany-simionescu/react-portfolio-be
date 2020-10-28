
exports.seed = function(knex) {
  return knex('postgresql_projects').del()
    .then(function () {
      return knex('postgresql_projects').insert([
        {
          postgresql_project_id: 1,
          postgresql_project_image: "https://images.pexels.com/photos/209956/pexels-photo-209956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          postgresql_project_title: "Tackle My Trade",
          postgresql_project_description: "An NFL Fantasy Football Trade Analyzer is to help a fan to build their ultimate fantasy league, by making the optimal trades to win their fantasy competitions. The back end was built using Express, NodeJS, PostgreSQL, SQLite3 and Knex.",
          postgresql_project_github_link: "https://github.com/tiffany-simionescu/nfl-fantasy-be",
          postgresql_project_live_link: "https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb"
        },
        {
          postgresql_project_id: 2,
          postgresql_project_image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          postgresql_project_title: "Portfolio API",
          postgresql_project_description: "This API is the current back end for this portfolio site. The back end was built using Express, NodeJS, PostgreSQL, SQLite3 and Knex.",
          postgresql_project_github_link: "https://github.com/tiffany-simionescu/react-portfolio-be",
          postgresql_project_live_link: "https://tiffany-simionescu-portfolio.herokuapp.com/"
        }
      ]);
    });
};
