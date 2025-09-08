/**
 * event controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::event.event', ({ strapi }) => ({
  // Custom controller methods can be added here if needed
  // For now, using the default factory which provides all CRUD operations
}));
