# AI Travel Planner App 🚀✈️

A React Native mobile application that uses AI to create personalized travel itineraries. Built with Expo, Firebase, and Google's Gemini AI.

![AI Travel Planner App](https://img.shields.io/badge/React%20Native-0.76.7-blue)
![Expo](https://img.shields.io/badge/Expo-52.0.38-green)
![Firebase](https://img.shields.io/badge/Firebase-11.4.0-orange)
![Gemini AI](https://img.shields.io/badge/Gemini%20AI-2.0%20Flash-purple)

## 📱 Features

- **AI-Powered Trip Planning**: Generate personalized travel itineraries using Google's Gemini AI
- **User Authentication**: Secure login/signup with Firebase Authentication
- **Trip Management**: Create, save, and manage your travel plans
- **Interactive UI**: Modern, intuitive interface with smooth navigation
- **Real-time Data**: Live trip updates and synchronization
- **Multi-platform**: Works on iOS, Android, and Web

## 🛠️ Tech Stack

- **Frontend**: React Native 0.76.7
- **Framework**: Expo SDK 52
- **Navigation**: Expo Router
- **Backend**: Firebase (Authentication, Firestore)
- **AI**: Google Gemini 2.0 Flash
- **Styling**: React Native StyleSheet
- **Icons**: Expo Vector Icons
- **State Management**: React Context API

## 📋 Prerequisites

Before running this app, make sure you have:

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development)
- Android Studio (for Android development)
- Google Gemini API Key
- Firebase Project

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ai-travel-planner-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

#### Option 1: Quick Setup (Recommended)
Run the interactive setup script:

```bash
npm run setup
```

This will guide you through the configuration process and create the `.env` file automatically.

#### Option 2: Manual Setup
Create a `.env` file in the root directory:

```bash
# Google Gemini AI API Key
EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY=your_gemini_api_key_here

# Firebase Configuration (optional - already configured)
EXPO_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Get Google Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env` file

### 5. Firebase Setup (Optional)

The app comes with pre-configured Firebase settings. If you want to use your own:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication and Firestore
3. Update the Firebase configuration in `configs/FirebaseConfig.js`

### 6. Test Configuration (Optional)

Verify that everything is set up correctly:

```bash
npm run test-config
```

### 7. Run the App

```bash
# Start the development server
npx expo start

# Run on iOS
npx expo run:ios

# Run on Android
npx expo run:android

# Run on Web
npx expo run:web
```

## 📱 App Screenshots & Visual Guide

### 🎨 App Icons & Branding
![App Icon](assets/images/icon.png)
![Adaptive Icon](assets/images/adaptive-icon.png)
![Splash Icon](assets/images/splash-icon.png)

### 🖥️ Login & Authentication
![Login Screen](assets/images/Login.jpg)
*Beautiful login screen with travel-themed background*

### 🎬 Animated Elements
![Air Animation](assets/images/Air.gif)
*Smooth animations enhance the user experience*

### 🏗️ App Structure Overview
```
📱 Main App Tabs:
├── 🗺️ Discover Tab - Explore destinations with AI recommendations
├── 🎒 My Trip Tab - Manage your saved trips and itineraries  
└── 👤 Profile Tab - User settings and account management
```

### 🚀 Trip Creation Flow
The app features a comprehensive trip creation process:

1. **📍 Destination Selection** 
   - Choose from popular destinations
   - Search for specific locations
   - AI-powered destination suggestions

2. **💰 Budget Planning**
   - Budget-friendly options
   - Mid-range selections  
   - Luxury experiences

3. **📅 Date Selection**
   - Intuitive calendar interface
   - Flexible date ranges
   - Best time recommendations

4. **👥 Traveler Configuration**
   - Solo travelers
   - Couples
   - Family trips
   - Group adventures

5. **🤖 AI Generation**
   - Personalized itineraries
   - Google Gemini AI powered
   - Real-time recommendations

6. **✅ Review & Save**
   - Detailed trip overview
   - Save to profile
   - Share with friends

> 📸 **Want to capture your own screenshots?** Check out our [Screenshot Guide](screenshot-guide.md) for tips on taking professional app screenshots!

## 🏗️ Project Structure

```
ai-travel-planner-app/
├── app/                    # Main app screens (Expo Router)
│   ├── (tabs)/            # Tab navigation screens
│   ├── auth/              # Authentication screens
│   ├── create-trip/       # Trip creation flow
│   └── trip-details/      # Trip detail screens
├── components/            # Reusable components
│   ├── CreateTrip/        # Trip creation components
│   ├── MyTrips/          # Trip management components
│   └── TripDetails/      # Trip detail components
├── configs/              # Configuration files
│   ├── AIModel.js        # Google Gemini AI configuration
│   └── FirebaseConfig.js # Firebase configuration
├── constants/            # App constants
├── context/              # React Context providers
├── assets/               # Images, fonts, and static files
└── package.json          # Dependencies and scripts
```

## 🔧 Key Components

### AI Integration
- **AIModel.js**: Configures Google Gemini AI for trip generation
- **Trip Generation**: Creates personalized itineraries based on user preferences

### Authentication
- **Firebase Auth**: Secure user authentication
- **Login/Signup**: User registration and login flow

### Trip Management
- **CreateTripContext**: Manages trip creation state
- **UserTrips**: Stores and retrieves user trips from Firestore

## 🐛 Troubleshooting

### Common Issues

1. **API Key Error**
   ```
   Error: Google Gemini API key not found
   ```
   **Solution**: Add your API key to the `.env` file

2. **Firebase Connection Error**
   ```
   Error: Firebase connection failed
   ```
   **Solution**: Check your Firebase configuration in `configs/FirebaseConfig.js`

3. **Font Loading Error**
   ```
   Error: Font not loaded
   ```
   **Solution**: Ensure all font files are present in `assets/fonts/`

4. **Navigation Error**
   ```
   Error: Route not found
   ```
   **Solution**: Check the file structure matches Expo Router conventions

### Performance Issues

- **Slow Loading**: Check your internet connection and API response times
- **Memory Issues**: Close unused tabs and restart the development server
- **Build Errors**: Clear cache with `npx expo start --clear`

## 🔒 Security Notes

- Never commit your `.env` file to version control
- Keep your API keys secure and rotate them regularly
- Use Firebase Security Rules to protect your data
- Implement proper input validation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you encounter any issues or have questions:

1. Check the [troubleshooting](#troubleshooting) section
2. Search existing [issues](../../issues)
3. Create a new issue with detailed information

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development platform
- [Google Gemini AI](https://ai.google.dev/) for AI capabilities
- [Firebase](https://firebase.google.com/) for backend services
- [React Native](https://reactnative.dev/) community

---

**Made with ❤️ using React Native and AI**
