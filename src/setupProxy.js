const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/github/login",
    createProxyMiddleware({
      target: "https://github.com",
      changeOrigin: true,
      pathRewrite: (path, req) => {
        return path.replace("/github", "/");
      },
    })
  );
};
