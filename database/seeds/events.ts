export const seedEvents = async ({ strapi }: { strapi: any }) => {
  console.log('🎭 Seeding events...');

  // Get all people and recordings for linking
  const allPeople = await strapi.entityService.findMany('api::person.person', {});
  const allRecordings = await strapi.entityService.findMany('api::recording.recording', {});

  console.log(`📊 Found ${allPeople.length} people and ${allRecordings.length} recordings for linking`);

  if (allRecordings.length === 0) {
    console.error('❌ No recordings found! Cannot create events without recordings.');
    return [];
  }

  if (allPeople.length === 0) {
    console.error('❌ No people found! Cannot create events without people.');
    return [];
  }

  const eventsData = [
    {
      name: 'Devflix Episode 11 with Gabriela de Castro, our Director of People X Success',
      description: 'Join us LIVE as we dive into how talent growth and agile methodologies supercharge BairesDev people experience!',
      startDate: '2025-01-15T14:00:00-03:00',
      endDate: '2025-01-15T15:30:00-03:00',
      circleGroup: 'People X Success',
      performers: [allPeople[0], allPeople[1], allPeople[2]], // Valeria, João, Diego
      guests: [allPeople[3]], // Gabriela
      recording: allRecordings[0],
    },
    {
      name: 'Frontend Circle: Modern React Patterns and Best Practices',
      description: 'Deep dive into React 18 features, hooks optimization, and performance best practices for modern web applications.',
      startDate: '2025-01-20T10:00:00-03:00',
      endDate: '2025-01-20T11:30:00-03:00',
      circleGroup: 'Frontend',
      performers: [allPeople[2]], // Diego
      guests: [allPeople[4]], // Maria
      recording: allRecordings[1],
    },
    {
      name: 'Backend Architecture: Microservices vs Monoliths',
      description: 'Exploring the trade-offs between microservices and monolithic architectures in modern backend development.',
      startDate: '2025-01-25T14:00:00-03:00',
      endDate: '2025-01-25T15:45:00-03:00',
      circleGroup: 'Backend',
      performers: [allPeople[4]], // Maria
      guests: [allPeople[5]], // Carlos
      recording: allRecordings[2],
    },
    {
      name: 'DevOps Circle: CI/CD Pipeline Optimization',
      description: 'Learn how to optimize your CI/CD pipelines for faster deployments and better reliability.',
      startDate: '2025-01-30T09:00:00-03:00',
      endDate: '2025-01-30T10:30:00-03:00',
      circleGroup: 'DevOps',
      performers: [allPeople[5]], // Carlos
      guests: [allPeople[6]], // Ana
      recording: allRecordings[3],
    },
    {
      name: 'Product Circle: User Research and UX Design',
      description: 'Understanding user needs through research and translating insights into exceptional user experiences.',
      startDate: '2025-02-05T13:00:00-03:00',
      endDate: '2025-02-05T14:30:00-03:00',
      circleGroup: 'Product',
      performers: [allPeople[6]], // Ana
      guests: [allPeople[7]], // Pedro
      recording: allRecordings[4],
    },
    {
      name: 'Design Circle: Design Systems and Component Libraries',
      description: 'Building scalable design systems that ensure consistency and improve development efficiency.',
      startDate: '2025-02-10T15:00:00-03:00',
      endDate: '2025-02-10T16:30:00-03:00',
      circleGroup: 'Design',
      performers: [allPeople[7]], // Pedro
      guests: [allPeople[8]], // Lucia
      recording: allRecordings[5],
    },
    {
      name: 'QA Circle: Test Automation Strategies',
      description: 'Implementing effective test automation strategies for web and mobile applications.',
      startDate: '2025-02-15T11:00:00-03:00',
      endDate: '2025-02-15T12:30:00-03:00',
      circleGroup: 'QA',
      performers: [allPeople[8]], // Lucia
      guests: [allPeople[9]], // Roberto
      recording: allRecordings[6],
    },
    {
      name: 'Mobile Circle: React Native Performance Optimization',
      description: 'Techniques for optimizing React Native apps for better performance and user experience.',
      startDate: '2025-02-20T16:00:00-03:00',
      endDate: '2025-02-20T17:30:00-03:00',
      circleGroup: 'Mobile',
      performers: [allPeople[9]], // Roberto
      guests: [allPeople[0]], // Valeria
      recording: allRecordings[7],
    },
    {
      name: 'Full-Stack Development: Building Scalable Applications',
      description: 'End-to-end development approaches for building scalable full-stack applications.',
      startDate: '2025-02-25T14:00:00-03:00',
      endDate: '2025-02-25T15:45:00-03:00',
      circleGroup: 'Full-Stack',
      performers: [allPeople[1], allPeople[4]], // João, Maria
      guests: [allPeople[2]], // Diego
      recording: allRecordings[8],
    },
    {
      name: 'Agile Methodologies: Sprint Planning and Retrospectives',
      description: 'Best practices for effective sprint planning and conducting meaningful retrospectives.',
      startDate: '2025-03-02T10:00:00-03:00',
      endDate: '2025-03-02T11:30:00-03:00',
      circleGroup: 'Agile',
      performers: [allPeople[0], allPeople[6]], // Valeria, Ana
      guests: [allPeople[3]], // Gabriela
      recording: allRecordings[9],
    },
    {
      name: 'Cloud Computing: AWS vs Azure vs GCP',
      description: 'Comparing major cloud providers and choosing the right platform for your projects.',
      startDate: '2025-03-07T13:00:00-03:00',
      endDate: '2025-03-07T14:30:00-03:00',
      circleGroup: 'Cloud',
      performers: [allPeople[5]], // Carlos
      guests: [allPeople[7]], // Pedro
      recording: allRecordings[10],
    },
    {
      name: 'Data Science: Machine Learning Fundamentals',
      description: 'Introduction to machine learning concepts and practical applications in software development.',
      startDate: '2025-03-12T15:00:00-03:00',
      endDate: '2025-03-12T16:45:00-03:00',
      circleGroup: 'Data Science',
      performers: [allPeople[4]], // Maria
      guests: [allPeople[8]], // Lucia
      recording: allRecordings[11],
    },
    {
      name: 'Security: Web Application Security Best Practices',
      description: 'Essential security practices for protecting web applications from common vulnerabilities.',
      startDate: '2025-03-17T11:00:00-03:00',
      endDate: '2025-03-17T12:30:00-03:00',
      circleGroup: 'Security',
      performers: [allPeople[2]], // Diego
      guests: [allPeople[5]], // Carlos
      recording: allRecordings[12],
    },
    {
      name: 'Performance: Frontend and Backend Optimization',
      description: 'Techniques for optimizing both frontend and backend performance for better user experience.',
      startDate: '2025-03-22T14:00:00-03:00',
      endDate: '2025-03-22T15:30:00-03:00',
      circleGroup: 'Performance',
      performers: [allPeople[1], allPeople[9]], // João, Roberto
      guests: [allPeople[6]], // Ana
      recording: allRecordings[13],
    },
    {
      name: 'Innovation: Emerging Technologies in Software Development',
      description: 'Exploring cutting-edge technologies and their potential impact on software development.',
      startDate: '2025-03-27T16:00:00-03:00',
      endDate: '2025-03-27T17:30:00-03:00',
      circleGroup: 'Innovation',
      performers: [allPeople[3]], // Gabriela
      guests: [allPeople[0], allPeople[4]], // Valeria, Maria
      recording: allRecordings[14],
    }
  ];

  const createdEvents = [];

  for (const eventData of eventsData) {
    try {
      // Check if event already exists
      const existingEvent = await strapi.entityService.findMany('api::event.event', {
        filters: { name: eventData.name }
      });

      if (!existingEvent || existingEvent.length === 0) {
        // Verify the recording exists before creating the event
        if (!eventData.recording || !eventData.recording.id) {
          console.error(`❌ Recording not found for event: ${eventData.name}`);
          continue;
        }

        console.log(`🔗 Linking event "${eventData.name}" to recording: ${eventData.recording.url}`);

        // Create the event using entityService for proper Strapi handling
        const event = await strapi.entityService.create('api::event.event', {
          data: {
            name: eventData.name,
            description: eventData.description,
            startDate: eventData.startDate,
            endDate: eventData.endDate,
            circleGroup: eventData.circleGroup,
            performers: eventData.performers.map(p => p.id),
            guests: eventData.guests.map(g => g.id),
            recording: eventData.recording.id,
          }
        });

        // Publish the event
        await strapi.entityService.update('api::event.event', event.id, {
          data: {
            publishedAt: new Date().toISOString(),
          }
        });

        createdEvents.push(event);
        console.log(`✅ Created and published event: ${event.name} with recording: ${eventData.recording.url}`);
      } else {
        console.log(`ℹ️ Event already exists: ${existingEvent[0].name}`);
        createdEvents.push(existingEvent[0]);
      }
    } catch (error) {
      console.error(`❌ Failed to create event ${eventData.name}:`, error);
    }
  }

  console.log(`🎭 Events seeding completed. Total: ${createdEvents.length}`);
  return createdEvents;
};
