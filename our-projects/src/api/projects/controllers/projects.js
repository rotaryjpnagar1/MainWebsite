'use strict';

module.exports = {
  async find(ctx) {
    try {
      const projects = await strapi.services.project.find();
      ctx.send(projects);
    } catch (err) {
      ctx.send({ message: 'Error fetching projects', error: err });
    }
  },
};
