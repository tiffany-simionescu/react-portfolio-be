const ReactProject = require('../actions/react-project-actions');

module.exports = {
  validateReactProjectId,
  validateReactProjectPost
}

function validateReactProjectId() {
  return (req, res, next) => {
    ReactProject.findById(req.params.id)
      .then(react_project => {
        if (react_project) {
          req.react_project = react_project;
          next();
        } else {
          res.status(400).json({
            message: "Invalid React Project Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find the React project. Please try again later."
        })
      })
  }
}

function validateReactProjectPost() {
  return (req, res, next) => {
    if (!req.body.react_project_image) {
      return res.status(400).json({
        message: "Please provide an image url for your project."
      })
    } else if (!req.body.react_project_title) {
      return res.status(400).json({
        message: "Please provide a title for your project."
      })
    } else if (!req.body.react_project_description) {
      return res.status(400).json({
        message: "Please provide your project description."
      })
    } else if (!req.body.react_project_github_link) {
      return res.status(400).json({
        message: "Please provide a Github link for your project."
      })
    } else {
      next();
    }
  }
}