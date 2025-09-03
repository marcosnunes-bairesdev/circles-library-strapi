# Database Seeds - Events Library

This directory contains database seeds for populating the Events Library with demo data.

## 🌱 What the Seeds Create

### **People (10 entries)**
- Various circle leaders and learning partners
- Different job titles and roles
- Used as performers and guests in events

### **Recordings (15 entries)**
- Video URLs (Google Drive links)
- **Thumbnails**: Media fields (users can upload images via admin panel)
- All marked as published

### **Events (15 entries)**
- Various circle group events (Frontend, Backend, DevOps, etc.)
- Realistic descriptions and dates
- Proper relations to people and recordings
- All events are published and ready to use

## 🚀 How Seeds Work

### **Automatic Execution via Bootstrap**

The seeds are configured to run automatically when Strapi starts using the `bootstrap` function in `./src/index.ts`. This is the proper Strapi v5 approach.

### **Running the Seeds**

Simply start Strapi in development mode:

```bash
npm run develop
```

**The seeds will run automatically** during startup. You'll see console output like:

```
🌱 Starting database seeding...
👥 Seeding people...
✅ Created person: Valeria de Albuquerque
🎥 Seeding recordings...
🎭 Seeding events...
✅ Database seeding completed successfully!
```

## 📊 Demo Data Overview

### **Circle Groups Covered:**
- People X Success
- Frontend
- Backend
- DevOps
- Product
- Design
- QA
- Mobile
- Full-Stack
- Agile
- Cloud
- Data Science
- Security
- Performance
- Innovation

### **Sample Event:**
```json
{
  "name": "Devflix Episode 11 with Gabriela de Castro, our Director of People X Success",
  "description": "Join us LIVE as we dive into how talent growth and agile methodologies supercharge BairesDev people experience!",
  "circleGroup": "People X Success",
  "performers": ["Valeria de Albuquerque", "João Bueno", "Diego Diehl"],
  "guests": ["Gabriela de Castro"],
  "startDate": "2025-01-15T14:00:00-03:00",
  "endDate": "2025-01-15T15:30:00-03:00"
}
```

## 🔄 Re-running Seeds

The seeds are designed to be **idempotent** - they won't create duplicates if run multiple times. They check for existing entries before creating new ones.

**To force a fresh start:**
1. Delete all content in Strapi admin panel
2. Restart Strapi (`npm run develop`)
3. Seeds will run again automatically

## 🧪 Testing the API

After seeding, test the API endpoints:

1. **Get all events:**
   ```bash
   curl http://localhost:1337/api/events
   ```

2. **Get a specific event:**
   ```bash
   curl http://localhost:1337/api/events/1
   ```

3. **Get all people:**
   ```bash
   curl http://localhost:1337/api/people
   ```

4. **Get all recordings:**
   ```bash
   curl http://localhost:1337/api/recordings
   ```

## 📝 Notes

- **15 events limit**: The API is configured to return max 15 events as per requirements
- **Relations**: All events have proper performers, guests, and recordings linked
- **Dates**: Events are spread across January-March 2025 for realistic demo data
- **Thumbnails**: Now use media fields - users can upload images via admin panel
- **Bootstrap execution**: Seeds run automatically on every Strapi startup

## 🚨 Troubleshooting

If seeds fail:
1. Check that Strapi is running
2. Verify database connection
3. Check console logs for specific error messages
4. Ensure all content types are properly configured
5. Try restarting Strapi

## 🔧 Technical Details

- **Location**: Seeds are imported and executed in `./src/index.ts` bootstrap function
- **Timing**: Runs after Strapi setup but before server starts
- **Error handling**: Failures won't crash Strapi - they're logged but startup continues
- **Idempotency**: Safe to run multiple times without creating duplicates
- **Media fields**: Thumbnails are now proper media fields for file uploads

## 🖼️ Adding Thumbnails

After seeding, users can add thumbnails to recordings:

1. **Go to Content Manager** → **Recording**
2. **Edit any recording**
3. **Upload thumbnail image** in the thumbnail field
4. **Save and publish**

The seeds will create a fully functional Events Library with realistic demo data ready for frontend development and testing!
