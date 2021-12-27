module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '715d4c10097563cc08f8d15f445c5298'),
  },
});
