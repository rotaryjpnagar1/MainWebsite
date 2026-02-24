'use strict';

module.exports = {
  async find(params, populate) {
    return strapi.query('project').find(params, populate);
  },
};
