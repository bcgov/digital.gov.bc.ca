module.exports = ({ env }) => ({
  // ...
  cron: {
    enabled: true,
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});