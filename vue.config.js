module.exports = {
  // proxy all webpack dev-server requests starting with /api
  // to our Spring Boot backend (localhost:8088) using http-proxy-middleware
  // see https://cli.vuejs.org/config/#devserver-proxy
  /* devServer: {
    proxy: {
      proxy: {
        "/local": {
          target: "http://localhost:8081",
          ws: true,
          changeOrigin: true
        }
      }
    }
  } */
};
