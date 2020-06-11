const reduxProjectRouter = require('express').Router();
const reduxProjects = require('../actions/redux-project-actions');

const {
  validateReduxProjectId,
  validateReduxProjectPost
} = require('../middleware/verify-redux-projects');


// GET - /api/reduxprojects
reduxProjectRouter.get('/', (req, res) => {
  reduxProjects.find()
    .then(rps => {
      res.status(200).json(rps);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem retrieving the Redux projects. Please try again later."
      })
    });
});

// GET - /api/reduxprojects/:redux_project_id
reduxProjectRouter.get('/:id', validateReduxProjectId(), (req, res) => {
  reduxProjects.find(req.params.id)
    .then(redux => {
      res.status(200).json(redux);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem retrieving the Redux project. Please try again later."
      })
    });
});

// POST - /api/reduxprojects
reduxProjectRouter.post('/', validateReduxProjectPost(), (req, res) => {
  reduxProjects.add(req.body)
    .then(redux => {
      res.status(201).json(redux);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem creating the Redux project. Please try again later."
      })
    });
});

// PUT - /api/reduxprojects/:redux_project_id
reduxProjectRouter.put('/:id', validateReduxProjectId(), validateReduxProjectPost(), (req, res) => {
  const changes = req.body;

  reduxProjects.update(req.params.id, changes)
    .then(redux => {
      res.status(200).json(redux);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem updating the Redux project. Please try again later."
      })
    });
});

// DELETE - /api/reduxprojects/:redux_project_id
reduxProjectRouter.delete('/:id', validateReduxProjectId(), (req, res) => {
  reduxProjects.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "The Redux project has been successfully removed."
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem with removing the Redux project. Please try again later."
      })
    });
});

module.exports = reduxProjectRouter;