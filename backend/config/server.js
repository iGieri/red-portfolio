module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 8000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'aaab5a8e17dad032aa682d3c16860b97'),
    },
  },
});
