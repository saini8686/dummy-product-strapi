module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'your-admin-secret'),
    },
    url: '/admin', // keep it like this
  },
  // Add this line to allow custom host
  settings: {
    cors: {
      enabled: true,
      origin: ['*'], // or use specific origin like 'https://king-zh2z.onrender.com'
    },
  },
});
