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
    },
    {
      name: 'Frontend Circle: Advanced CSS and Styling Techniques',
      description: 'Mastering modern CSS features, animations, and responsive design patterns.',
      startDate: '2025-04-01T10:00:00-03:00',
      endDate: '2025-04-01T11:30:00-03:00',
      circleGroup: 'Frontend',
      performers: [allPeople[2]], // Diego
      guests: [allPeople[7]], // Pedro
      recording: allRecordings[15],
    },
    {
      name: 'Backend Circle: Database Design and Optimization',
      description: 'Best practices for database schema design, indexing, and query optimization.',
      startDate: '2025-04-05T14:00:00-03:00',
      endDate: '2025-04-05T15:45:00-03:00',
      circleGroup: 'Backend',
      performers: [allPeople[4]], // Maria
      guests: [allPeople[1]], // João
      recording: allRecordings[16],
    },
    {
      name: 'DevOps Circle: Container Orchestration with Kubernetes',
      description: 'Deep dive into Kubernetes concepts, deployment strategies, and monitoring.',
      startDate: '2025-04-10T09:00:00-03:00',
      endDate: '2025-04-10T10:30:00-03:00',
      circleGroup: 'DevOps',
      performers: [allPeople[5]], // Carlos
      guests: [allPeople[9]], // Roberto
      recording: allRecordings[17],
    },
    {
      name: 'Product Circle: Agile Product Management',
      description: 'Effective product management techniques in agile environments.',
      startDate: '2025-04-15T13:00:00-03:00',
      endDate: '2025-04-15T14:30:00-03:00',
      circleGroup: 'Product',
      performers: [allPeople[6]], // Ana
      guests: [allPeople[3]], // Gabriela
      recording: allRecordings[18],
    },
    {
      name: 'Design Circle: User Interface Design Principles',
      description: 'Core principles of UI design, accessibility, and user-centered design.',
      startDate: '2025-04-20T15:00:00-03:00',
      endDate: '2025-04-20T16:30:00-03:00',
      circleGroup: 'Design',
      performers: [allPeople[7]], // Pedro
      guests: [allPeople[0]], // Valeria
      recording: allRecordings[19],
    },
    {
      name: 'QA Circle: API Testing Strategies',
      description: 'Comprehensive approaches to testing REST and GraphQL APIs.',
      startDate: '2025-04-25T11:00:00-03:00',
      endDate: '2025-04-25T12:30:00-03:00',
      circleGroup: 'QA',
      performers: [allPeople[8]], // Lucia
      guests: [allPeople[2]], // Diego
      recording: allRecordings[20],
    },
    {
      name: 'Mobile Circle: Cross-Platform Development',
      description: 'Comparing React Native, Flutter, and native development approaches.',
      startDate: '2025-04-30T16:00:00-03:00',
      endDate: '2025-04-30T17:30:00-03:00',
      circleGroup: 'Mobile',
      performers: [allPeople[9]], // Roberto
      guests: [allPeople[4]], // Maria
      recording: allRecordings[21],
    },
    {
      name: 'Full-Stack Development: State Management Patterns',
      description: 'Exploring state management solutions across the full stack.',
      startDate: '2025-05-05T14:00:00-03:00',
      endDate: '2025-05-05T15:45:00-03:00',
      circleGroup: 'Full-Stack',
      performers: [allPeople[1], allPeople[2]], // João, Diego
      guests: [allPeople[5]], // Carlos
      recording: allRecordings[22],
    },
    {
      name: 'Agile Methodologies: Scrum Master Certification Prep',
      description: 'Preparing for Scrum Master certification with practical examples.',
      startDate: '2025-05-10T10:00:00-03:00',
      endDate: '2025-05-10T11:30:00-03:00',
      circleGroup: 'Agile',
      performers: [allPeople[0], allPeople[3]], // Valeria, Gabriela
      guests: [allPeople[6]], // Ana
      recording: allRecordings[23],
    },
    {
      name: 'Cloud Computing: Serverless Architecture Patterns',
      description: 'Building scalable applications using serverless technologies and patterns.',
      startDate: '2025-05-15T13:00:00-03:00',
      endDate: '2025-05-15T14:30:00-03:00',
      circleGroup: 'Cloud',
      performers: [allPeople[5]], // Carlos
      guests: [allPeople[1]], // João
      recording: allRecordings[24],
    },
    {
      name: 'Data Science: Data Visualization and Analytics',
      description: 'Creating compelling data visualizations and extracting insights from data.',
      startDate: '2025-05-20T15:00:00-03:00',
      endDate: '2025-05-20T16:45:00-03:00',
      circleGroup: 'Data Science',
      performers: [allPeople[4]], // Maria
      guests: [allPeople[7]], // Pedro
      recording: allRecordings[25],
    },
    {
      name: 'Security: OWASP Top 10 and Secure Coding',
      description: 'Understanding and preventing the most common web application security risks.',
      startDate: '2025-05-25T11:00:00-03:00',
      endDate: '2025-05-25T12:30:00-03:00',
      circleGroup: 'Security',
      performers: [allPeople[2]], // Diego
      guests: [allPeople[8]], // Lucia
      recording: allRecordings[26],
    },
    {
      name: 'Performance: Frontend Performance Optimization',
      description: 'Advanced techniques for optimizing frontend performance and user experience.',
      startDate: '2025-05-30T14:00:00-03:00',
      endDate: '2025-05-30T15:30:00-03:00',
      circleGroup: 'Performance',
      performers: [allPeople[1], allPeople[7]], // João, Pedro
      guests: [allPeople[9]], // Roberto
      recording: allRecordings[27],
    },
    {
      name: 'Innovation: AI and Machine Learning in Development',
      description: 'Integrating AI and ML capabilities into software applications.',
      startDate: '2025-06-05T16:00:00-03:00',
      endDate: '2025-06-05T17:30:00-03:00',
      circleGroup: 'Innovation',
      performers: [allPeople[3], allPeople[4]], // Gabriela, Maria
      guests: [allPeople[0]], // Valeria
      recording: allRecordings[28],
    },
    {
      name: 'Frontend Circle: TypeScript Advanced Patterns',
      description: 'Advanced TypeScript features and patterns for large-scale applications.',
      startDate: '2025-06-10T10:00:00-03:00',
      endDate: '2025-06-10T11:30:00-03:00',
      circleGroup: 'Frontend',
      performers: [allPeople[2]], // Diego
      guests: [allPeople[1]], // João
      recording: allRecordings[29],
    },
    {
      name: 'Backend Circle: Microservices Communication Patterns',
      description: 'Designing effective communication between microservices.',
      startDate: '2025-06-15T14:00:00-03:00',
      endDate: '2025-06-15T15:45:00-03:00',
      circleGroup: 'Backend',
      performers: [allPeople[4]], // Maria
      guests: [allPeople[5]], // Carlos
      recording: allRecordings[30],
    },
    {
      name: 'DevOps Circle: Infrastructure as Code',
      description: 'Managing infrastructure using code with Terraform and CloudFormation.',
      startDate: '2025-06-20T09:00:00-03:00',
      endDate: '2025-06-20T10:30:00-03:00',
      circleGroup: 'DevOps',
      performers: [allPeople[5]], // Carlos
      guests: [allPeople[6]], // Ana
      recording: allRecordings[31],
    },
    {
      name: 'Product Circle: User Story Mapping and Prioritization',
      description: 'Effective techniques for mapping user journeys and prioritizing features.',
      startDate: '2025-06-25T13:00:00-03:00',
      endDate: '2025-06-25T14:30:00-03:00',
      circleGroup: 'Product',
      performers: [allPeople[6]], // Ana
      guests: [allPeople[3]], // Gabriela
      recording: allRecordings[32],
    },
    {
      name: 'Design Circle: Design Thinking Workshop',
      description: 'Hands-on workshop on design thinking methodology and application.',
      startDate: '2025-06-30T15:00:00-03:00',
      endDate: '2025-06-30T16:30:00-03:00',
      circleGroup: 'Design',
      performers: [allPeople[7]], // Pedro
      guests: [allPeople[0], allPeople[6]], // Valeria, Ana
      recording: allRecordings[33],
    },
    {
      name: 'QA Circle: Performance Testing Strategies',
      description: 'Load testing, stress testing, and performance optimization techniques.',
      startDate: '2025-07-05T11:00:00-03:00',
      endDate: '2025-07-05T12:30:00-03:00',
      circleGroup: 'QA',
      performers: [allPeople[8]], // Lucia
      guests: [allPeople[1]], // João
      recording: allRecordings[34],
    },
    {
      name: 'Mobile Circle: App Store Optimization',
      description: 'Strategies for optimizing mobile apps for app store visibility and downloads.',
      startDate: '2025-07-10T16:00:00-03:00',
      endDate: '2025-07-10T17:30:00-03:00',
      circleGroup: 'Mobile',
      performers: [allPeople[9]], // Roberto
      guests: [allPeople[2]], // Diego
      recording: allRecordings[35],
    },
    {
      name: 'Full-Stack Development: Real-time Applications',
      description: 'Building real-time features using WebSockets, Server-Sent Events, and more.',
      startDate: '2025-07-15T14:00:00-03:00',
      endDate: '2025-07-15T15:45:00-03:00',
      circleGroup: 'Full-Stack',
      performers: [allPeople[1], allPeople[4]], // João, Maria
      guests: [allPeople[8]], // Lucia
      recording: allRecordings[36],
    },
    {
      name: 'Agile Methodologies: Kanban vs Scrum',
      description: 'Comparing Kanban and Scrum methodologies for different project types.',
      startDate: '2025-07-20T10:00:00-03:00',
      endDate: '2025-07-20T11:30:00-03:00',
      circleGroup: 'Agile',
      performers: [allPeople[0], allPeople[6]], // Valeria, Ana
      guests: [allPeople[3]], // Gabriela
      recording: allRecordings[37],
    },
    {
      name: 'Cloud Computing: Multi-Cloud Strategies',
      description: 'Designing applications that work across multiple cloud providers.',
      startDate: '2025-07-25T13:00:00-03:00',
      endDate: '2025-07-25T14:30:00-03:00',
      circleGroup: 'Cloud',
      performers: [allPeople[5]], // Carlos
      guests: [allPeople[4]], // Maria
      recording: allRecordings[38],
    },
    {
      name: 'Data Science: Big Data Processing with Apache Spark',
      description: 'Processing large datasets using Apache Spark and distributed computing.',
      startDate: '2025-07-30T15:00:00-03:00',
      endDate: '2025-07-30T16:45:00-03:00',
      circleGroup: 'Data Science',
      performers: [allPeople[4]], // Maria
      guests: [allPeople[9]], // Roberto
      recording: allRecordings[39],
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
