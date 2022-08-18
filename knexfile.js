
module.exports = {
  development: {
      client: 'pg',
      connection: {
          database: process.env.DATABASE_NAME,
          user: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD
      },
      pool: {
          min: 0,
          max: 10
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: 'migrations',
      }
  },
};
