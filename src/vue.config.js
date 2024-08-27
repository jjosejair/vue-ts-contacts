module.exports = {
    devServer: {
      proxy: {
        '/contacts': {
          target: 'https://66bfa33c42533c403146b83b.mockapi.io',
          changeOrigin: true,
          pathRewrite: { '^/contacts': '/contacts/v1' },
        },
      },
    },
  };