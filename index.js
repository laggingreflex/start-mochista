module.exports = config => input => function mochista() {
  return require('mochista').default(config)
    .then(({ run }) => run());
}
