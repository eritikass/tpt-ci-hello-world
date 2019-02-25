// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tpt-ci-hello-world/'
    : '/'
}
