/**
 * event controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::event.event', ({ strapi }) => ({
  // Custom find method to get events with specific ordering and limit
  async find(ctx) {
    // Limit events to 15 as specified in requirements
    // Pagination will be implemented in a different story/task
    const { data, meta } = await strapi.service('api::event.event').find({
      ...ctx.query,
      sort: { publishedAt: 'desc' }, // Newest first by publish date
      pagination: {
        page: 1,
        pageSize: 15, // Hard limit of 15 events as per requirements
      },
      populate: {
        performers: {
          fields: ['name', 'jobTitle']
        },
        guests: {
          fields: ['name', 'jobTitle']
        },
        recording: {
          fields: ['url', 'thumbnail', 'isPublished']
        }
      }
    });

    return { data, meta };
  },

  // Keep the default findOne method
  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.service('api::event.event').findOne(id, {
      ...query,
      populate: {
        performers: {
          fields: ['name', 'jobTitle']
        },
        guests: {
          fields: ['name', 'jobTitle']
        },
        recording: {
          fields: ['url', 'thumbnail', 'isPublished']
        }
      }
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));
