module.exports = config => input => log =>
  require('mochista').default(config)
  .then(({ run }) => run());
