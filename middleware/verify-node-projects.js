const NodeProject = require('../actions/node-project-actions');

module.exports = {
  validateNodeProjectId,
  validateNodeProjectPost
}

function validateNodeProjectId() {
  return (req, res, next) => {
    NodeProject.findById(req.params.id)
      .then(node_project => {
        if (node_project) {
          req.node_project = node_project;
          next();
        } else {
          res.status(400).json({
            message: "Invalid Node Project Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find the Node project. Please try again later."
        })
      })
  }
}

function validateNodeProjectPost() {
  return (req, res, next) => {
    if (!req.body.node_project_image) {
      return res.status(400).json({
        message: "Please provide an image url for your project."
      })
    } else if (!req.body.node_project_title) {
      return res.status(400).json({
        message: "Please provide a title for your project."
      })
    } else if (!req.body.node_project_description) {
      return res.status(400).json({
        message: "Please provide your project description."
      })
    } else if (!req.body.node_project_github_link) {
      return res.status(400).json({
        message: "Please provide a Github link for your project."
      })
    } else if (!req.body.node_project_live_link) {
      return res.status(400).json({
        message: "Please provide a live link for your project."
      })
    } else {
      next();
    }
  }
}