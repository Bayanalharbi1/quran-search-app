// App.js - Main Entry Point
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpV1-nXuqRfzwY7P8Oyma_Aflb5yE2_9w",
  authDomain: "quran-search-e9495.firebaseapp.com",
  projectId: "quran-search-e9495",
  storageBucket: "quran-search-e9495.appspot.com",
  messagingSenderId: "127073385112",
  appId: "1:127073385112:web:7acc348d969aea9e29eeed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthenticated(!!user);
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={authenticated ? <Navigate to="/search" /> : <Login auth={auth} />} />
        <Route path="/search" element={authenticated ? <Search auth={auth} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
