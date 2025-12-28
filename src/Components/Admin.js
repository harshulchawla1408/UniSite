import React, { useState, useEffect } from 'react';

function Admin() {
  const [isLoading, setIsLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes shimmer {
        0% { background-position: -1000px 0; }
        100% { background-position: 1000px 0; }
      }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
      setIsLoading(false);
      setShowAnimation(true);
    }, 800);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleFilterClick = () => {
    window.open('/filter', '_blank');
  };

  const [filterHovered, setFilterHovered] = useState(false);
  const [downloadHovered, setDownloadHovered] = useState(false);

  const buttonStyle = (hovered, baseColor, hoverColor) => ({
    padding: '14px 28px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    backgroundColor: hovered ? hoverColor : baseColor,
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    transition: 'all 0.2s ease-in-out',
    boxShadow: hovered
      ? `0 5px 15px ${hoverColor}`
      : `0 4px 6px rgba(0, 0, 0, 0.2)`,
    transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  return (
    <div
      style={{
        paddingTop: '40px',
        backgroundColor: '#f3f4f6',
        minHeight: '80vh',
        paddingLeft: '20px',
        paddingRight: '20px',
        fontFamily: 'Arial, sans-serif',
        animation: showAnimation ? 'fadeIn 0.6s ease-out' : 'none',
      }}
    >
      {/* Header */}
      <h2
        style={{
          marginBottom: '25px',
          color: 'rgb(27, 46, 111)',
          fontSize: '2.5rem',
          fontWeight: '700',
          textAlign: 'center',
          borderBottom: 'rgb(27, 46, 111)',
          display: 'inline-block',
          paddingBottom: '10px',
          textDecorationLine: 'underline',
        }}
      >
        📊 Student Data Sheet
      </h2>

      {/* Data Section */}
      <div
        style={{
          boxShadow: isLoading ? 'none' : '0 8px 30px rgba(0, 0, 0, 0.12)',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '35px',
          border: isLoading ? '1px solid #e2e8f0' : '1px solid #d1d5db',
          height: '600px',
          backgroundColor: '#fff',
          transition: 'all 0.3s ease',
          transform: showAnimation ? 'translateY(0)' : 'translateY(20px)',
          opacity: showAnimation ? 1 : 0,
          position: 'relative',
        }}
      >
        {isLoading ? (
          <div
            style={{
              height: '100%',
              background:
                'linear-gradient(90deg, #f0f0f0 25%, #f8f8f8 50%, #f0f0f0 75%)',
              backgroundSize: '1000px 100%',
              animation: 'shimmer 1.5s infinite linear',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: '18px',
                color: '#718096',
              }}
            >
              Loading student data...
            </div>
          </div>
        ) : (
          <div
            style={{
              position: 'relative',
              height: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRz433_SS4XubaVyiDKp7-PNtFOK95bnV79ZDJi6W3JYCDHLTTqY6VSJ-HqxZMdhf4Rl22Y_p3eo8SK/pubhtml?widget=true&amp;headers=false"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Student Data Google Sheet"
              style={{
                border: 'none',
                borderRadius: '16px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: '#2563eb',
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 'bold',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
              }}
            >
              Live Data
            </div>
          </div>
        )}
      </div>

      {/* Buttons Section */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          
        }}
      >
        {/* Filter Button */}
        <button
          onClick={handleFilterClick}
          onMouseEnter={() => setFilterHovered(true)}
          onMouseLeave={() => setFilterHovered(false)}
          style={buttonStyle(filterHovered, '#3b82f6', '#2563eb')}
        >
          <span style={{ marginRight: '8px', fontSize: '18px' }}>🔍</span>
          Run Filter
        </button>

        {/* Download Button */}
        <a
          href="https://docs.google.com/spreadsheets/d/1KovDCzAa3gsCJJRBTZl-KOeMMc8c3N3RhGYa_6RpwXY/export?format=xlsx"
          target="_blank"
          rel="noopener noreferrer"
          download
          style={{ textDecoration: 'none' }}
        >
          <button
            onMouseEnter={() => setDownloadHovered(true)}
            onMouseLeave={() => setDownloadHovered(false)}
            style={buttonStyle(downloadHovered, '#22c55e', '#16a34a')}
          >
            <span style={{ marginRight: '8px', fontSize: '18px' }}>📥</span>
            Download Excel
          </button>
        </a>
      </div>
      <br></br>
    </div>
   
  );
}

export default Admin;
