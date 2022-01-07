module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e08b09468b97e26fa273fa3f8abcf765'),
  },
});
