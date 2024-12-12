import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Result = ({ results }) => {
  return (
    <div 
      style={{ 
        minHeight: '100vh', // Ensures the container covers the full viewport height
        backgroundImage: 'url(/images/quran.jpg)', // Path to the image in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div 
        className="row" 
        style={{ 
          padding: '20px', 
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          borderRadius: '15px', 
          boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2), -10px -10px 20px rgba(255, 255, 255, 0.5)' 
        }}
      >
        {results.map((result, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card"
              style={{
                border: 'none',
                borderRadius: '12px',
                background: 'linear-gradient(145deg, #d4af37, #8c7048)',
                boxShadow: '5px 5px 15px rgba(171, 142, 54, 0.8), -5px -5px 15px rgba(255, 223, 160, 0.6)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '10px 10px 20px rgba(171, 142, 54, 0.8), -10px -10px 20px rgba(255, 223, 160, 0.6)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '5px 5px 15px rgba(171, 142, 54, 0.8), -5px -5px 15px rgba(255, 223, 160, 0.6)';
              }}
            >
              <div
                className="card-body"
                style={{
                  cursor: 'pointer',
                  padding: '15px',
                  color: '#5c4033',
                  textAlign: 'center',
                }}
              >
                <h5
                  className="card-title"
                  style={{
                    fontWeight: 'bold',
                    color: '#5c4033',
                    marginBottom: '10px',
                  }}
                >
                  <strong>{result.surah.name}</strong> ({result.surah.englishName})
                </h5>
                <p
                  className="card-text"
                  style={{
                    fontSize: '14px',
                    color: '#333',
                  }}
                >
                  {result.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;