export const seedRecordings = async ({ strapi }: { strapi: any }) => {
  console.log('🎥 Seeding recordings...');

  const recordingsData = [
    {
      url: 'https://drive.google.com/file/d/1h7QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/2k8QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/3l9QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/4m0QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/5n1QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/6o2QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/7p3QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/8q4QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/9r5QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/0s6QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/1t7QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/2u8QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/3v9QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/4w0QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/5x1QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/6y2QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/7z3QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/8a4QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/9b5QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/0c6QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/1d7QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/2e8QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/3f9QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/4g0QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/5h1QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/6i2QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/7j3QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/8k4QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/9l5QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/0m6QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/1n7QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/2o8QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/3p9QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/4q0QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/5r1QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/6s2QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/7t3QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/8u4QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    },
    {
      url: 'https://drive.google.com/file/d/9v5QHdBZtorUSLf6Qrm0o9S1otgcf00SG/view',
      isPublished: true,
    }
  ];

  const createdRecordings = [];

  for (const recordingData of recordingsData) {
    try {
      // Check if recording already exists
      const existingRecordings = await strapi.entityService.findMany('api::recording.recording', {
        filters: { url: recordingData.url }
      });

      if (!existingRecordings || existingRecordings.length === 0) {
        // Create the recording using entityService for proper Strapi handling
        const recording = await strapi.entityService.create('api::recording.recording', {
          data: {
            url: recordingData.url,
            isPublished: recordingData.isPublished,
            // thumbnail will be null - users can upload images via admin panel
          }
        });

        // Publish the recording
        await strapi.entityService.update('api::recording.recording', recording.id, {
          data: {
            publishedAt: new Date().toISOString(),
          }
        });

        createdRecordings.push(recording);
        console.log(`✅ Created and published recording: ${recording.url}`);
      } else {
        console.log(`ℹ️ Recording already exists: ${existingRecordings[0].url}`);
        createdRecordings.push(existingRecordings[0]);
      }
    } catch (error) {
      console.error(`❌ Failed to create recording ${recordingData.url}:`, error);
    }
  }

  console.log(`🎥 Recordings seeding completed. Total: ${createdRecordings.length}`);
  return createdRecordings;
};
