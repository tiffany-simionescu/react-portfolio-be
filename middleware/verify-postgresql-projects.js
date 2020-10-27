const PostgresqlProject = require('../actions/postgresql-project-actions');

module.exports = {
  validatePostgresqlProjectId,
  validatePostgresqlProjectPost
}

function validatePostgresqlProjectId() {
  return (req, res, next) => {
    PostgresqlProject.findById(req.params.id)
      .then(postgresql_project => {
        if (postgresql_project) {
          req.postgresql_project = postgresql_project;
          next();
        } else {
          res.status(400).json({
            message: "Invalid PostgreSQL Project Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find the PostgreSQL project. Please try again later."
        })
      })
  }
}

function validatePostgresqlProjectPost() {
  return (req, res, next) => {
    if (!req.body.postgresql_project_image) {
      return res.status(400).json({
        message: "Please provide an image url for your project."
      })
    } else if (!req.body.postgresql_project_title) {
      return res.status(400).json({
        message: "Please provide a title for your project."
      })
    } else if (!req.body.postgresql_project_description) {
      return res.status(400).json({
        message: "Please provide your project description."
      })
    } else if (!req.body.postgresql_project_github_link) {
      return res.status(400).json({
        message: "Please provide a Github link for your project."
      })
    } else {
      next();
    }
  }
}