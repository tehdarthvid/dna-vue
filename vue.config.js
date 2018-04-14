const { DefinePlugin } = require('./node_modules/webpack');
const { execSync } = require('child_process');
const { version } = require('./package.json');

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    plugins: [
      new DefinePlugin({
        'process.env': {
          PKG_VERSION: JSON.stringify(version),
          GIT_COMMIT_NUMBER: execSync('git rev-list HEAD --count').toString()
        }
      })
    ]
  }
};
