/**
 * event service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::event.event', ({ strapi }) => ({
  // Custom method to get events with specific ordering and population
  async findEventsWithDetails(params = {}) {
    const defaultParams = {
      sort: { publishedAt: 'desc' },
      pagination: {
        page: 1,
        pageSize: 15,
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
      },
      ...params
    };

    return await strapi.db.query('api::event.event').findMany(defaultParams);
  }
}));
