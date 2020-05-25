const userRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const Users = require('../actions/user-actions');

const {
  validateUserId,
  validateUserPost
} = require('../middleware/verify-users');

// Token Generator
function generateToken(user) {
  return jwt.sign({
    userId: user.user_id,
  }, secrets.jwtSecret, {
    expiresIn: '1h',
  })
}

// POST -/api/users/register
userRouter.post('/register', (req, res) => {
  let user = req.body;
  let hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json({
        message: `Welcome ${saved.first_name}!`
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while trying to register the new user. Please try again later."
      })
    })
})

// POST - /api/users/login
userRouter.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findByFilter({ username })
    .then(user => {
      if (user.username === 'tiffany87' && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.first_name}!`,
          authToken: token,
        })
      } else {
        res.status(400).json({
          message: "You are not authorized. Please try again later."
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error during login. Please try again later."
      })
    })
})

// GET - /api/users
userRouter.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while trying to retrieve the users. Please try again later."
      })
    })
})

// GET - /api/users/:id
userRouter.get('/:id', validateUserId(), (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      res.status(200).json(user);
    }) 
    .catch(err => {
      res.status(500).json({
        message: "There was an error while trying to retrieve the user. Please try again later."
      })
    })
})

// PUT - /api/users/:id
userRouter.put('/:id', validateUserId(), validateUserPost(), (req, res) => {
  const changes = req.body;

  Users.update(req.params.id, changes)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was error while trying to update the user. Please try again later."
      })
    })
})

export default userRouter;