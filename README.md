# API Documentation

#### 1️⃣ Backend delpoyed at [Heroku](https://tiffany-simionescu-portfolio.herokuapp.com/) <br>
 

## 1️⃣ Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm run server** to start the local server
- **npm run test** to start server using testing environment

### Backend framework

-    PostgreSQL is much larger in size compared to Sqlite
-    PostgreSQL supports almost every data type
-    PostgreSQL has a larger storage capacity compared to Sqlite
-    PostgreSQL can handle multiple users at once
-    PostgreSQL was used for production and development
-    Sqlite3 was used for testing

## 2️⃣ Endpoints

#### User Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/users` | all users      | Returns all the users and their information. |
| GET    | `/api/users/:id` | all users         | Returns the information for a single user            |
| POST   | `/api/users/register` | all users  | Register a new user          |
| POST   | `/api/users/login` | owner | Login an already existing user     |
| PUT    | `/api/users/:id`   | owner | Update existing user information    |
| DELETE | `/api/users/:id`   | owner | Remove an existing user      |

#### React Project Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/reactprojects` | all users      | Returns all react projects. |
| GET    | `/api/reactprojects/:id` | all users      | Returns a single react project           |
| POST   | `/api/reactprojects` | owner        | Add a new react project                    |
| PUT    | `/api/reactprojects/:react_project_id` | owner        | Updates a specific react project  |
| DELETE | `/api/reactprojects/:react_project_id` | owner        | Removes a specific react project  |

#### Redux Project Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/reduxprojects` | all users      | Returns all redux projects. |
| GET    | `/api/reduxprojects/:id` | all users      | Returns a single redux project           |
| POST   | `/api/reduxprojects` | owner        | Add a new redux project                    |
| PUT    | `/api/reduxprojects/:redux_project_id` | owner        | Updates a specific redux project  |
| DELETE | `/api/reduxprojects/:redux_project_id` | owner        | Removes a specific redux project  |

#### Node Project Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/nodeprojects` | all users      | Returns all node projects. |
| GET    | `/api/nodeprojects/:id` | all users      | Returns a single node project           |
| POST   | `/api/nodeprojects` | owner        | Add a new node project                    |
| PUT    | `/api/nodeprojects/:node_project_id` | owner        | Updates a specific node project  |
| DELETE | `/api/nodeprojects/:node_project_id` | owner        | Removes a specific node project  |

#### SQLite Project Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/sqliteprojects` | all users      | Returns all sqlite projects. |
| GET    | `/api/sqliteprojects/:id` | all users      | Returns a single sqlite project           |
| POST   | `/api/sqliteprojects` | owner        | Add a new sqlite project                    |
| PUT    | `/api/sqliteprojects/:sqlite_project_id` | owner        | Updates a specific sqlite project  |
| DELETE | `/api/sqliteprojects/:sqlite_project_id` | owner        | Removes a specific sqlite project  |

#### PostgreSQL Project Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/postgresqlprojects` | all users      | Returns all postgresql projects. |
| GET    | `/api/postgresqlprojects/:id` | all users      | Returns a single postgresql project           |
| POST   | `/api/postgresqlprojects` | owner        | Add a new postgresql project                    |
| PUT    | `/api/postgresqlprojects/:postgresql_project_id` | owner        | Updates a specific postgresql project  |
| DELETE | `/api/postgresqlprojects/:postgresql_project_id` | owner        | Removes a specific postgresql project  |

#### Python Project Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/pythonprojects` | all users      | Returns all python projects. |
| GET    | `/api/pythonprojects/:id` | all users      | Returns a single python project           |
| POST   | `/api/pythonprojects` | owner        | Add a new python project                    |
| PUT    | `/api/pythonprojects/:python_project_id` | owner        | Updates a specific python project  |
| DELETE | `/api/pythonprojects/:python_project_id` | owner        | Removes a specific python project  |

## Data Model

#### Users

---

```
{
  user_id: UUID
  username: STRING
  password: STRING
  first_name: STRING
  last_name: STRING
  email: STRING
  phone_number: BIGINTEGER
}
```

#### React Projects

---

```
{
  react_project_id: UUID
  react_project_image: STRING
  react_project_title: STRING
  react_project_description: STRING
  react_project_github_link: STRING
  react_project_live_link: STRING
}
```

#### Redux Projects

---

```
{
  redux_project_id: UUID
  redux_project_image: STRING
  redux_project_title: STRING
  redux_project_description: STRING
  redux_project_github_link: STRING
  redux_project_live_link: STRING
}
```

#### Node Projects

---

```
{
  node_project_id: UUID
  node_project_image: STRING
  node_project_title: STRING
  node_project_description: STRING
  node_project_github_link: STRING
  node_project_live_link: STRING
}
```

#### SQLite Projects

---

```
{
  sqlite_project_id: UUID
  sqlite_project_image: STRING
  sqlite_project_title: STRING
  sqlite_project_description: STRING
  sqlite_project_github_link: STRING
  sqlite_project_live_link: STRING
}
```

#### PostgreSQL Projects

---

```
{
  postgresql_project_id: UUID
  postgresql_project_image: STRING
  postgresql_project_title: STRING
  postgresql_project_description: STRING
  postgresql_project_github_link: STRING
  postgresql_project_live_link: STRING
}
```

#### Python Projects

---

```
{
  python_project_id: UUID
  python_project_image: STRING
  python_project_title: STRING
  python_project_description: STRING
  python_project_github_link: STRING
  python_project_live_link: STRING
}
```

## Actions

#### Users

`find()` -> Returns all users

`findById(user_id)` -> Returns a single user by ID

`findByFilter(filter)` -> Returns a single user by filter

`add(user)` -> Registers a new user

`update(user_id, changes)` -> Updates a specific user's data

`remove(user_id)` -> Removes a specific user from the database



#### React Projects

`find()` -> Returns all React projects

`findById(react_project_id)` -> Returns a single React project by ID

`add(react_project)` -> Adds a new React project

`update(react_project_id, changes)` -> Updates a specific React project

`remove(react_project_id)` -> Removes a specific React project from the database



#### Redux Projects

`find()` -> Returns all Redux projects

`findById(redux_project_id)` -> Returns a single Redux project by ID

`add(redux_project)` -> Adds a new Redux project

`update(redux_project_id, changes)` -> Updates a specific Redux project

`remove(redux_project_id)` -> Removes a specific Redux project from the database



#### Node Projects

`find()` -> Returns all Node projects

`findById(node_project_id)` -> Returns a single Node project by ID

`add(node_project)` -> Adds a new Node project

`update(node_project_id, changes)` -> Updates a specific Node project

`remove(node_project_id)` -> Removes a specific Node project from the database



#### SQLite Projects

`find()` -> Returns all SQLite projects

`findById(sqlite_project_id)` -> Returns a single SQLite project by ID

`add(sqlite_project)` -> Adds a new SQLite project

`update(sqlite_project_id, changes)` -> Updates a specific SQLite project

`remove(sqlite_project_id)` -> Removes a specific SQLite project from the database



#### PostgreSQL Projects

`find()` -> Returns all PostgreSQL projects

`findById(postgresql_project_id)` -> Returns a single PostgreSQL project by ID

`add(postgresql_project)` -> Adds a new PostgreSQL project

`update(postgresql_project_id, changes)` -> Updates a specific PostgreSQL project

`remove(postgresql_project_id)` -> Removes a specific PostgreSQL project from the database



#### Python Projects

`find()` -> Returns all Python projects

`findById(python_project_id)` -> Returns a single Python project by ID

`add(python_project)` -> Adds a new Python project

`update(python_project_id, changes)` -> Updates a specific Python project

`remove(python_project_id)` -> Removes a specific Python project from the database



## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:
    
    *  JWT_SECRET=you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-*=+)') for i in range(50)])
    *  DATABASE_URL=This is generated by Heroku PostgreSQL. In the CLI, type the following: heroku addons:create heroku-postgresql:hobby-dev. Copy the database name you receive and then enter the following: heroku pg:credentials:url <database_name>.
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](https://github.com/Lambda-School-Labs/nfl-fantasy-fe/blob/master/README.md) for details on the fronend of our project.


## Future Plans
- Add Angular projects
- Add MongoDB projects
