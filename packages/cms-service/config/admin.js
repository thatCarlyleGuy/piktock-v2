module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '217f9a661dbe8b90d7edbcabfa367d5b'),
  },
});
