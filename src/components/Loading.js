import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Loading = () => {
  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', // Full height for centering
        color: '#5c4033', // Text color
      }}
    >
      <div className="d-flex justify-content-center">
        <div 
          className="spinner-border" 
          role="status" 
          style={{
            width: '3rem', 
            height: '3rem', 
            borderColor: '#d4af37', // Spinner border color
          }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <p style={{ marginTop: '10px' }}>Loading...</p>
    </div>
  );
};

export default Loading;