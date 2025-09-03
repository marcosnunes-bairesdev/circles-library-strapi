import { seedPeople } from './people';
import { seedRecordings } from './recordings';
import { seedEvents } from './events';

export default async ({ strapi }: { strapi: any }) => {
  try {
    console.log('🌱 Starting database seeding...');

    // Seed in order due to dependencies
    await seedPeople({ strapi });
    await seedRecordings({ strapi });
    await seedEvents({ strapi });

    console.log('✅ Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Database seeding failed:', error);
    throw error;
  }
};
