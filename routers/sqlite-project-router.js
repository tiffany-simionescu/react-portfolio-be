const sqliteProjectRouter = require('express').Router();
const sqliteProjects = require('../actions/sqlite-project-actions');

const {
  validateSqliteProjectId,
  validateSqliteProjectPost
} = require('../middleware/verify-sqlite-projects');


// GET - /api/sqliteprojects
sqliteProjectRouter.get('/', (req, res) => {
  sqliteProjects.find()
    .then(sps => {
      res.status(200).json(sps);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem retrieving the SQLite projects. Please try again later."
      })
    });
});

// GET - /api/sqliteprojects/:sqlite_project_id
sqliteProjectRouter.get('/:id', validateSqliteProjectId(), (req, res) => {
  sqliteProjects.find(req.params.id)
    .then(sp => {
      res.status(200).json(sp);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem retrieving the SQLite project. Please try again later."
      })
    });
});

// POST - /api/sqliteprojects
sqliteProjectRouter.post('/', validateSqliteProjectPost(), (req, res) => {
  sqliteProjects.add(req.body)
    .then(sp => {
      res.status(201).json(sp);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem creating the SQLite project. Please try again later."
      })
    });
});

// PUT - /api/sqliteprojects/:sqlite_project_id
sqliteProjectRouter.put('/:id', validateSqliteProjectId(), validateSqliteProjectPost(), (req, res) => {
  const changes = req.body;

  sqliteProjects.update(req.params.id, changes)
    .then(sp => {
      res.status(200).json(sp);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem updating the SQLite project. Please try again later."
      })
    });
});

// DELETE - /api/sqliteprojects/:sqlite_project_id
sqliteProjectRouter.delete('/:id', validateSqliteProjectId(), (req, res) => {
  sqliteProjects.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "The SQLite project has been successfully removed."
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem with removing the SQLite project. Please try again later."
      })
    });
});

export default sqliteProjectRouter;