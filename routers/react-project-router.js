const reactProjectRouter = require('express').Router();
const reactProjects = require('../actions/react-project-actions');

const {
  validateReactProjectId,
  validateReactProjectPost
} = require('../middleware/verify-react-projects');


// GET - /api/reactprojects
reactProjectRouter.get('/', (req, res) => {
  reactProjects.find()
    .then(rps => {
      res.status(200).json(rps);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem retrieving the React projects. Please try again later."
      })
    });
});

// GET - /api/reactprojects/:id
reactProjectRouter.get('/:id', validateReactProjectId(), (req, res) => {
  reactProjects.find(req.params.id)
    .then(rp => {
      res.status(200).json(rp);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem retrieving the React project. Please try again later."
      })
    });
});

// POST - /api/reactprojects
reactProjectRouter.post('/', validateReactProjectPost(), (req, res) => {
  reactProjects.add(req.body)
    .then(rp => {
      res.status(201).json(rp);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem creating the React project. Please try again later."
      })
    });
});

// PUT - /api/reactprojects/:react_project_id
reactProjectRouter.put('/:id', validateReactProjectId(), validateReactProjectPost(), (req, res) => {
  const changes = req.body;

  reactProjects.update(req.params.id, changes)
    .then(rp => {
      res.status(200).json(rp);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem updating the React project. Please try again later."
      })
    });
});

// DELETE - /api/reactprojects/:react_project_id
reactProjectRouter.delete('/:id', validateReactProjectId(), (req, res) => {
  reactProjects.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "The React project has been successfully removed."
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem with removing the React project. Please try again later."
      })
    });
});

export default reactProjectRouter;