const nodeProjectRouter = require('express').Router();
const nodeProjects = require('../actions/node-project-actions');

const {
  validateNodeProjectId,
  validateNodeProjectPost
} = require('../middleware/verify-node-projects');


// GET - /api/nodeprojects
nodeProjectRouter.get('/', (req, res) => {
  nodeProjects.find()
    .then(nps => {
      res.status(200).json(nps);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem retrieving the Node projects. Please try again later."
      })
    });
});

// GET - /api/nodeprojects/:node_project_id
nodeProjectRouter.get('/:id', validateNodeProjectId(), (req, res) => {
  nodeProjects.find(req.params.id)
    .then(np => {
      res.status(200).json(np);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem retrieving the Node project. Please try again later."
      })
    });
});

// POST - /api/nodeprojects
nodeProjectRouter.post('/', validateNodeProjectPost(), (req, res) => {
  nodeProjects.add(req.body)
    .then(np => {
      res.status(201).json(np);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem creating the Node project. Please try again later."
      })
    });
});

// PUT - /api/nodeprojects/:node_project_id
nodeProjectRouter.put('/:id', validateNodeProjectId(), validateNodeProjectPost(), (req, res) => {
  const changes = req.body;

  nodeProjects.update(req.params.id, changes)
    .then(np => {
      res.status(200).json(np);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem updating the Node project. Please try again later."
      })
    });
});

// DELETE - /api/nodeprojects/:node_project_id
nodeProjectRouter.delete('/:id', validateNodeProjectId(), (req, res) => {
  nodeProjects.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "The Node project has been successfully removed."
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem with removing the Node project. Please try again later."
      })
    });
});

module.exports = nodeProjectRouter;