#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 AI Travel Planner App Setup\n');

// Check if .env file already exists
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  console.log('⚠️  .env file already exists. This will overwrite it.\n');
}

// Function to ask for input
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function setup() {
  try {
    console.log('📝 Please provide the following information:\n');
    
    const geminiKey = await askQuestion('🔑 Google Gemini API Key (required): ');
    
    if (!geminiKey.trim()) {
      console.log('\n❌ Google Gemini API Key is required!');
      console.log('   Get your API key from: https://makersuite.google.com/app/apikey\n');
      rl.close();
      return;
    }
    
    // Create .env content
    const envContent = `# Google Gemini AI API Key
EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY=${geminiKey.trim()}

# Firebase Configuration (optional - already configured in the app)
# If you want to use your own Firebase project, uncomment and update these:
# EXPO_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
# EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
# EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
# EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
# EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
# EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
`;
    
    // Write .env file
    fs.writeFileSync(envPath, envContent);
    
    console.log('\n✅ Setup completed successfully!');
    console.log('📁 .env file created with your configuration');
    console.log('\n🚀 You can now run the app with:');
    console.log('   npx expo start\n');
    
  } catch (error) {
    console.error('\n❌ Setup failed:', error.message);
  } finally {
    rl.close();
  }
}

setup(); 