import dotenv from 'dotenv'
dotenv.config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// export const development = {
//   client: 'sqlite3',
//   connection: {
//     filename: './dev.sqlite3'
//   }
// };

export const development = {
  client: 'mysql2',
  connection: {
    database: process.env.DB_NAME || "test",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: "./migrations"
  }
};
// export const production = {
//   client: 'postgresql',
//   connection: {
//     database: 'my_db',
//     user: 'username',
//     password: 'password'
//   },
//   pool: {
//     min: 2,
//     max: 10
//   },
//   migrations: {
//     tableName: 'knex_migrations'
//   }
// };
