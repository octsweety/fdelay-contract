const web3utilsIO = require('./web3utils');
const logger = require('./logger');


module.exports = (web3, artifacts) => {
  const web3utils = web3utilsIO(web3, artifacts);

  return {
    web3utils,
    logger,
  };
};
