module.exports = config => input => function mochista() {
  const mochista = require('mochista').default;
  const getMochaOptions = require('mochista/dist/config/mocha-options').default;
  const merge = require('mochista/dist/config/merge').default;
  const fix = require('mochista/dist/config/fix').default;
  const mochaOptions = getMochaOptions();
  config = fix(merge(mochaOptions, config));
  return mochista(config)
    .then(({ run }) => run());
}
