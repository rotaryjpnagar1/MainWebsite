import { Context } from 'koa';
import { Strapi } from '@strapi/strapi';

export default {
  async find(ctx: Context) {
    try {
      // Fetch all projects
      const projects = await strapi.services.project.find();
      ctx.send(projects);
    } catch (err) {
      ctx.send({ message: 'Error fetching projects', error: err });
    }
  },
};
