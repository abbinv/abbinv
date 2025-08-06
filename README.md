# Abbin V - Portfolio Website

Modern portfolio website showcasing backend development expertise.

## 🚀 Firebase Deployment

### Prerequisites
- Node.js installed
- Firebase CLI installed globally: `npm install -g firebase-tools`

### Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase project:
   ```bash
   firebase init hosting
   ```

### Development
```bash
npm start
```
Serves the site locally at http://localhost:5000

### Deployment
```bash
npm run deploy
```

## 🛠 Tech Stack
- HTML5, CSS3, JavaScript
- Firebase Hosting
- Custom animations and interactions
- Responsive design

## 📁 Project Structure
```
├── public/           # Firebase hosting directory
│   ├── css/         # Stylesheets
│   ├── js/          # JavaScript files
│   ├── img/         # Images
│   └── index.html   # Main HTML file
├── firebase.json    # Firebase configuration
└── .firebaserc      # Firebase project settings
```