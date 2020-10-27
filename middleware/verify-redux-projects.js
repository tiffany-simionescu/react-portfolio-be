const ReduxProject = require('../actions/redux-project-actions');

module.exports = {
  validateReduxProjectId,
  validateReduxProjectPost
}

function validateReduxProjectId() {
  return (req, res, next) => {
    ReduxProject.findById(req.params.id)
      .then(redux_project => {
        if (redux_project) {
          req.redux_project = redux_project;
          next();
        } else {
          res.status(400).json({
            message: "Invalid Redux Project Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find the Redux project. Please try again later."
        })
      })
  }
}

function validateReduxProjectPost() {
  return (req, res, next) => {
    if (!req.body.redux_project_image) {
      return res.status(400).json({
        message: "Please provide an image url for your project."
      })
    } else if (!req.body.redux_project_title) {
      return res.status(400).json({
        message: "Please provide a title for your project."
      })
    } else if (!req.body.redux_project_description) {
      return res.status(400).json({
        message: "Please provide your project description."
      })
    } else if (!req.body.redux_project_github_link) {
      return res.status(400).json({
        message: "Please provide a Github link for your project."
      })
    } else {
      next();
    }
  }
}