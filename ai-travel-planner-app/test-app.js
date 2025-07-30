#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧪 AI Travel Planner App - Configuration Test\n');

// Test 1: Check if .env file exists
console.log('1. Checking environment configuration...');
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  if (envContent.includes('EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY=')) {
    console.log('   ✅ .env file found with API key configuration');
  } else {
    console.log('   ⚠️  .env file found but missing API key');
  }
} else {
  console.log('   ❌ .env file not found');
  console.log('   💡 Run: npm run setup');
}

// Test 2: Check if node_modules exists
console.log('\n2. Checking dependencies...');
const nodeModulesPath = path.join(__dirname, 'node_modules');
if (fs.existsSync(nodeModulesPath)) {
  console.log('   ✅ Dependencies installed');
} else {
  console.log('   ❌ Dependencies not installed');
  console.log('   💡 Run: npm install');
}

// Test 3: Check if package.json exists
console.log('\n3. Checking project configuration...');
const packageJsonPath = path.join(__dirname, 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  console.log(`   ✅ Project: ${packageJson.name} v${packageJson.version}`);
} else {
  console.log('   ❌ package.json not found');
}

// Test 4: Check if key files exist
console.log('\n4. Checking key files...');
const keyFiles = [
  'app/_layout.jsx',
  'configs/FirebaseConfig.js',
  'configs/AIModel.js',
  'constants/Colors.ts'
];

keyFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`   ✅ ${file}`);
  } else {
    console.log(`   ❌ ${file} - missing`);
  }
});

// Test 5: Check if assets exist
console.log('\n5. Checking assets...');
const assetsPath = path.join(__dirname, 'assets');
if (fs.existsSync(assetsPath)) {
  const imagesPath = path.join(assetsPath, 'images');
  const fontsPath = path.join(assetsPath, 'fonts');
  
  if (fs.existsSync(imagesPath)) {
    console.log('   ✅ Images directory found');
  } else {
    console.log('   ❌ Images directory missing');
  }
  
  if (fs.existsSync(fontsPath)) {
    console.log('   ✅ Fonts directory found');
  } else {
    console.log('   ❌ Fonts directory missing');
  }
} else {
  console.log('   ❌ Assets directory missing');
}

console.log('\n📋 Summary:');
console.log('   If all tests pass, you can run: npx expo start');
console.log('   If any tests fail, follow the suggested fixes above');
console.log('\n�� Happy coding!'); 