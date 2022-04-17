module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e2ff76cd2902c355e59f2a91b4f1d576'),
  },
});
