import React, { useState } from 'react';
import { signOut } from 'firebase/auth';

const Search = ({ auth }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://api.alquran.cloud/v1/search/${query}/all/en`);
      const data = await response.json();
      setResults(data.data.matches || []);
    } catch (error) {
      setError('An error occurred while fetching results.');
    } finally {
      setLoading(false);
    }
  };

  const buttonStyle = {
    padding: '12px',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(145deg, #8c7048, #d4af37)',
    boxShadow: '5px 5px 10px #ab8e36, -5px -5px 10px #ffdfa0',
    color: '#fff',
    cursor: 'pointer',
    transition: 'transform 0.3s',
    fontSize: '1rem',
    width: '100%',
  };

  return (
    <div 
      style={{ 
        padding: '20px', 
        minHeight: '100vh', // Ensure it covers the full height of the viewport
        backgroundImage: 'url(/images/quran.jpg)', // Path to the image in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '0', // Remove border radius to fit the entire screen
        boxShadow: 'none', // Remove shadow for full-page effect
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div 
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background for readability
          borderRadius: '15px', 
          padding: '20px',
          maxWidth: '800px',
          width: '100%', // Full width for responsiveness
          boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2), -10px -10px 20px rgba(255, 255, 255, 0.5)', 
        }}
      >
        <button
          onClick={handleLogout}
          style={{
            ...buttonStyle,
            marginBottom: '20px',
            backgroundColor: '#dc3545', // Different background for logout button
          }}
        >
          Logout
        </button>
        <input
          type="text"
          placeholder="Search for Quran verses"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: '10px',
            width: '100%',
            marginBottom: '10px',
            border: 'none',
            borderRadius: '8px',
            boxShadow: 'inset 4px 4px 8px rgba(171, 142, 54, 0.5), inset -4px -4px 8px rgba(255, 223, 160, 0.3)',
          }}
        />
        <button
          onClick={handleSearch}
          style={buttonStyle}
        >
          Search
        </button>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: '#ff4d4d' }}>{error}</p>}
        <div>
          {results.map((result, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <h5 style={{ color: '#5c4033' }}>
                <strong>{result.surah.name}</strong> ({result.surah.englishName})
              </h5>
              <p style={{ color: '#333' }}>{result.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;