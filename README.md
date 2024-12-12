# Quran Search App

## Description
The **Quran Search App** is a web application that allows users to search for Quranic verses in English translations using a clean and interactive interface. It incorporates Firebase Authentication for login and registration, enabling personalized access to the app. The app is designed with responsive and creative themes, utilizing modern 3D effects and a gradient color palette inspired by gold and brown tones.

## Features
- **Login and Registration**:
  - Secure authentication using Firebase.
  - Responsive and user-friendly login and registration forms.
- **Search Functionality**:
  - Search Quranic verses using an API.
  - Displays results with themed 3D cards.
- **Responsive Design**:
  - Fully adaptable to mobile, tablet, and desktop views.
- **Creative Theme**:
  - Gold and brown-inspired design with gradient backgrounds and hover effects.

## Technologies Used
- **Frontend**:
  - React.js
  - Bootstrap for responsive grid system
  - Inline CSS with creative theming
- **Backend**:
  - Firebase Authentication for user management
  - [Al-Quran Cloud API](https://alquran.cloud/api) for Quranic search

## Installation
### Prerequisites
- Node.js installed
- Git installed

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Bayanalharbi1/quran-search-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd quran-search-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage
1. **Register or Login**:
   - Use the login/register form to authenticate.
2. **Search for Verses**:
   - Enter keywords in the search bar to find Quranic verses in English translations.
3. **Logout**:
   - Use the logout button to securely exit the session.

## Folder Structure
```
quran-search-app/
├── public/
│   ├── images/
│   │   └── quran.jpg         # Background image for login page
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.js          # Login and Registration form
│   │   ├── Search.js         # Search functionality
│   │   └── Result.js         # Display search results
│   ├── App.js                # Main app component
│   └── index.js              # Entry point of the app
├── README.md                 # Project documentation
└── package.json
```

## API Integration
- **Al-Quran Cloud API**:
  - Base URL: `https://alquran.cloud/api`
  - Used for searching Quranic verses in English.

## Firebase Configuration
1. Go to the Firebase Console and create a new project.
2. Enable **Email/Password Authentication** under the Authentication section.
3. Add a web app to get Firebase configuration.


## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgements
- [Firebase](https://firebase.google.com/) for Authentication
- [Al-Quran Cloud API](https://alquran.cloud/api) for Quranic search
- [Bootstrap](https://getbootstrap.com/) for the responsive grid system

---

Developed by **[Bayanalharbi1](https://github.com/Bayanalharbi1)**

