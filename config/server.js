module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  admin: {
    url: '/dashboard',
    serveAdminPanel: true,  // Asegura que esto está presente
  },
  transfer: {
    remote: {
      enabled: true,
    },
  },
});
