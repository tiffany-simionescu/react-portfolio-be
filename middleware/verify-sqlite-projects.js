const SqliteProject = require('../actions/sqlite-project-actions');

module.exports = {
  validateSqliteProjectId,
  validateSqliteProjectPost
}

function validateSqliteProjectId() {
  return (req, res, next) => {
    SqliteProject.findById(req.params.id)
      .then(sqlite_project => {
        if (sqlite_project) {
          req.sqlite_project = sqlite_project;
          next();
        } else {
          res.status(400).json({
            message: "Invalid Sqlite Project Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find the Sqlite project. Please try again later."
        })
      })
  }
}

function validateSqliteProjectPost() {
  return (req, res, next) => {
    if (!req.body.sqlite_project_image) {
      return res.status(400).json({
        message: "Please provide an image url for your project."
      })
    } else if (!req.body.sqlite_project_title) {
      return res.status(400).json({
        message: "Please provide a title for your project."
      })
    } else if (!req.body.sqlite_project_description) {
      return res.status(400).json({
        message: "Please provide your project description."
      })
    } else if (!req.body.sqlite_project_github_link) {
      return res.status(400).json({
        message: "Please provide a Github link for your project."
      })
    } else if (!req.body.sqlite_project_live_link) {
      return res.status(400).json({
        message: "Please provide a live link for your project."
      })
    } else {
      next();
    }
  }
}