import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = ({ auth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      const errorMessage = err.message.includes('auth/') ? err.message.split('auth/')[1].replace('-', ' ') : err.message;
      setError(errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url(/images/quran.jpg)', // Path to the image in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px', // Ensure padding for small screens
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          width: '100%', // Full width for responsiveness
          padding: '40px',
          borderRadius: '15px',
          background: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background for contrast
          boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2), -10px -10px 20px rgba(255, 255, 255, 0.5)',
          color: '#5c4033',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#5c4033', marginBottom: '20px', fontSize: '1.5rem' }}>
          {isRegistering ? 'Register' : 'Login'}
        </h2>
        <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '8px',
              border: 'none',
              outline: 'none',
              boxShadow: 'inset 4px 4px 8px #ab8e36, inset -4px -4px 8px #ffdfa0',
              fontSize: '1rem',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '8px',
              border: 'none',
              outline: 'none',
              boxShadow: 'inset 4px 4px 8px #ab8e36, inset -4px -4px 8px #ffdfa0',
              fontSize: '1rem',
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '12px',
              borderRadius: '12px',
              border: 'none',
              background: 'linear-gradient(145deg, #d4af37, #8c7048)',
              boxShadow: '5px 5px 10px #ab8e36, -5px -5px 10px #ffdfa0',
              color: '#fff',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'transform 0.3s',
              fontSize: '1rem',
            }}
            onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
          >
            {loading ? 'Processing...' : isRegistering ? 'Register' : 'Login'}
          </button>
        </form>
        {error && <p style={{ color: '#ff4d4d', textAlign: 'center', marginTop: '10px' }}>{error}</p>}
        <button
          onClick={() => setIsRegistering(!isRegistering)}
          style={{
            marginTop: '20px',
            padding: '12px',
            borderRadius: '12px',
            border: 'none',
            background: 'linear-gradient(145deg, #8c7048, #d4af37)',
            boxShadow: '5px 5px 10px #ab8e36, -5px -5px 10px #ffdfa0',
            color: '#fff',
            cursor: 'pointer',
            transition: 'transform 0.3s',
            fontSize: '1rem',
          }}
          onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
        >
          {isRegistering ? 'Already have an account? Login' : 'Create an account'}
        </button>
      </div>
    </div>
  );
};

export default Login;