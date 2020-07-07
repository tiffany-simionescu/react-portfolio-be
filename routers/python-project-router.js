const pythonProjectRouter = require('express').Router();
const pythonProjects = require('../actions/python-project-actions');

const {
  validatePythonProjectId,
  validatePythonProjectPost
} = require('../middleware/verify-python-projects');


// GET - /api/pythonprojects
pythonProjectRouter.get('/', (req, res) => {
  pythonProjects.find()
    .then(pys => {
      res.status(200).json(pys);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem retrieving the Python projects. Please try again later."
      })
    });
});

// GET - /api/pythonprojects/:id
pythonProjectRouter.get('/:id', validatePythonProjectId(), (req, res) => {
  pythonProjects.find(req.params.id)
    .then(py => {
      res.status(200).json(py);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem retrieving the Python project. Please try again later."
      })
    });
});

// POST - /api/pythonprojects
pythonProjectRouter.post('/', validatePythonProjectPost(), (req, res) => {
  pythonProjects.add(req.body)
    .then(py => {
      res.status(201).json(py);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem creating the Python project. Please try again later."
      })
    });
});

// PUT - /api/pythonprojects/:python_project_id
pythonProjectRouter.put('/:id', validatePythonProjectId(), validatePythonProjectPost(), (req, res) => {
  const changes = req.body;

  pythonProjects.update(req.params.id, changes)
    .then(py => {
      res.status(200).json(py);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem updating the Python project. Please try again later."
      })
    });
});

// DELETE - /api/pythonprojects/:python_project_id
pythonProjectRouter.delete('/:id', validatePythonProjectId(), (req, res) => {
  pythonProjects.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "The Python project has been successfully removed."
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem with removing the Pythn project. Please try again later."
      })
    });
});

module.exports = pythonProjectRouter;