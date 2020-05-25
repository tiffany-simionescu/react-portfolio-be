require("dotenv").config();

module.exports = { 
 
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/development.db3'
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
  },
},

  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/testing.db3'
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
  },
},

  production: {
    client: "pg",
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL + `?ssl=true`,
  migrations: {
    directory: "./database/migrations",
  },
  seeds: {
    directory: "./database/seeds"
  },
  pool: {
    min: 2,
    max: 10,
  },
  }
}