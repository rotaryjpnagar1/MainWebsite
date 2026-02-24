import { Strapi } from '@strapi/strapi';

export default {
  async find(params = {}, populate = []) {
    return strapi.query('project').find(params, populate);
  },
};
