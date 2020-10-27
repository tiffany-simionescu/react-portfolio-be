const PythonProject = require('../actions/python-project-actions');

module.exports = {
  validatePythonProjectId,
  validatePythonProjectPost
}

function validatePythonProjectId() {
  return (req, res, next) => {
    PythonProject.findById(req.params.id)
      .then(python_project => {
        if (python_project) {
          req.python_project = python_project;
          next();
        } else {
          res.status(400).json({
            message: "Invalid Python Project Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find the Python project. Please try again later."
        })
      })
  }
}

function validatePythonProjectPost() {
  return (req, res, next) => {
    if (!req.body.python_project_image) {
      return res.status(400).json({
        message: "Please provide an image url for your project."
      })
    } else if (!req.body.python_project_title) {
      return res.status(400).json({
        message: "Please provide a title for your project."
      })
    } else if (!req.body.python_project_description) {
      return res.status(400).json({
        message: "Please provide your project description."
      })
    } else if (!req.body.python_project_github_link) {
      return res.status(400).json({
        message: "Please provide a Github link for your project."
      })
    } else {
      next();
    }
  }
}