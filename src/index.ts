import type { Core } from '@strapi/strapi';
import { seedPeople } from '../database/seeds/people';
import { seedRecordings } from '../database/seeds/recordings';
import { seedEvents } from '../database/seeds/events';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Only run seeds in development mode
    if (strapi.config.environment === 'development') {
      try {
        console.log('🌱 Starting database seeding (development mode)...');

        // Seed in order due to dependencies
        await seedPeople({ strapi });
        await seedRecordings({ strapi });
        await seedEvents({ strapi });

        console.log('✅ Database seeding completed successfully!');
      } catch (error) {
        console.error('❌ Database seeding failed:', error);
        // Don't throw error to prevent Strapi from crashing
        console.error('Continuing with Strapi startup...');
      }
    } else {
      console.log('🚀 Production mode: Skipping database seeding');
    }
  },
};
