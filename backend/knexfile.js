// Update with your config settings.

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
    database: 'odoo_hackthon',
    user: 'root',
    password: '',
    host: "localhost",
    port: 3306
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
