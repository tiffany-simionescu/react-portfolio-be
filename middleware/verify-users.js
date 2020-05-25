const Users = require('../actions/user-actions');

module.exports = {
  validateUserId,
  validateUserPost
}

function validateUserId() {
  return (req, res, next) => {
    Users.findById(req.params.id)
      .then(user => {
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(400).json({
            message: "Invalid User Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find the user. Please try again later."
        })
      })
  }
}

function validateUserPost() {
  return (req, res, next) => {
    if (!req.body.username) {
      return res.status(400).json({
        message: "Please provide a username."
      })
    } else if (!req.body.password) {
      return res.status(400).json({
        message: "Please provide a password."
      })
    } else if (!req.body.first_name) {
      return res.status(400).json({
        message: "Please provide your first name."
      })
    } else if (!req.body.last_name) {
      return res.status(400).json({
        message: "Please provide your last name."
      })
    } else if (!req.body.email) {
      return res.status(400).json({
        message: "Please provide your email."
      })
    } else if (!req.body.phone_number) {
      return res.status(400).json({
        message: "Please provide your phone number."
      })
    } else {
      next();
    }
  }
}