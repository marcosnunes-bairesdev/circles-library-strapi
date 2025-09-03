export const seedPeople = async ({ strapi }: { strapi: any }) => {
  console.log('👥 Seeding people...');

  const peopleData = [
    {
      name: 'Valeria de Albuquerque',
      jobTitle: 'Circles Learning Partner',
    },
    {
      name: 'João Bueno',
      jobTitle: 'Circles Learning Partner',
    },
    {
      name: 'Diego Diehl',
      jobTitle: 'Frontend Circle Leader',
    },
    {
      name: 'Gabriela de Castro',
      jobTitle: 'Director of People X Success',
    },
    {
      name: 'Maria Silva',
      jobTitle: 'Backend Circle Leader',
    },
    {
      name: 'Carlos Santos',
      jobTitle: 'DevOps Circle Leader',
    },
    {
      name: 'Ana Costa',
      jobTitle: 'Product Circle Leader',
    },
    {
      name: 'Pedro Oliveira',
      jobTitle: 'Design Circle Leader',
    },
    {
      name: 'Lucia Ferreira',
      jobTitle: 'QA Circle Leader',
    },
    {
      name: 'Roberto Lima',
      jobTitle: 'Mobile Circle Leader',
    }
  ];

  const createdPeople = [];

  for (const personData of peopleData) {
    try {
      // Check if person already exists
      const existingPerson = await strapi.db.query('api::person.person').findOne({
        where: { name: personData.name }
      });

      if (!existingPerson) {
        const person = await strapi.db.query('api::person.person').create({
          data: personData
        });
        createdPeople.push(person);
        console.log(`✅ Created person: ${person.name}`);
      } else {
        console.log(`ℹ️ Person already exists: ${existingPerson.name}`);
        createdPeople.push(existingPerson);
      }
    } catch (error) {
      console.error(`❌ Failed to create person ${personData.name}:`, error);
    }
  }

  console.log(`👥 People seeding completed. Total: ${createdPeople.length}`);
  return createdPeople;
};
