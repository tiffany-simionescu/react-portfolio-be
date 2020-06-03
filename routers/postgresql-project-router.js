const postgresqlProjectRouter = require('express').Router();
const postgresqlProjects = require('../actions/postgresql-project-actions');

const {
  validatePostgresqlProjectId,
  validatePostgresqlProjectPost
} = require('../middleware/verify-postgresql-projects');


// GET - /api/postgresqlprojects
postgresqlProjectRouter.get('/', (req, res) => {
  postgresqlProjects.find()
    .then(pgps => {
      res.status(200).json(pgps);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem retrieving the PostgreSQL projects. Please try again later."
      })
    });
});

// GET - /api/postgresqlprojects/:postgresql_project_id
postgresqlProjectRouter.get('/:id', validatePostgresqlProjectId(), (req, res) => {
  postgresqlProjects.find(req.params.id)
    .then(pgp => {
      res.status(200).json(pgp);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem retrieving the PostgreSQL project. Please try again later."
      })
    });
});

// POST - /api/postgresqlprojects
postgresqlProjectRouter.post('/', validatePostgresqlProjectPost(), (req, res) => {
  postgresqlProjects.add(req.body)
    .then(pgp => {
      res.status(201).json(pgp);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem creating the PostgreSQL project. Please try again later."
      })
    });
});

// PUT - /api/postgresqlprojects/:postgresql_project_id
postgresqlProjectRouter.put('/:id', validatePostgresqlProjectId(), validatePostgresqlProjectPost(), (req, res) => {
  const changes = req.body;

  postgresqlProjects.update(req.params.id, changes)
    .then(pgp => {
      res.status(200).json(pgp);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem updating the PostgreSQL project. Please try again later."
      })
    });
});

// DELETE - /api/postgresqlprojects/:postgresql_project_id
postgresqlProjectRouter.delete('/:id', validatePostgresqlProjectId(), (req, res) => {
  postgresqlProjects.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "The PostgreSQL project has been successfully removed."
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "There was a problem with removing the PostgreSQL project. Please try again later."
      })
    });
});

export default postgresqlProjectRouter;