const path = require('path');

const getDbConnection = (env) => {
  const envName = env('DB_ENV', 'development').toLowerCase()

  switch(envName) {
    case 'production': return {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        schema: env('DATABASE_SCHEMA', 'public'),
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          ca: env('DATABASE_CA_CERT', ''),
        },
      },
      debug: false,
    }

    default: return {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    }
  }
};

module.exports = ({ env }) => ({ connection: getDbConnection(env) });
