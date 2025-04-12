// import React from 'react';

// function Admin() {
//   return (
//     <div style={{
//       paddingTop: '80px', // navbar ke neeche space
//       backgroundColor: '#f4f6f8',
//       minHeight: '100vh',
//       paddingLeft: '20px',
//       paddingRight: '20px',
//     }}>
//       <h2 style={{ 
//         marginBottom: '20px', 
//         color: '#2c3e50', 
//         fontSize: '28px', 
//         fontWeight: '600', 
//         textAlign: 'center' 
//       }}>
//         📊 Student Data Sheet
//       </h2>

//       <div style={{
//         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//         borderRadius: '12px',
//         overflow: 'hidden',
//         marginBottom: '30px',
//         border: '1px solid #ddd',
//         height: '600px',
//         backgroundColor: '#fff',
//       }}>
//         <iframe 
//           src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRz433_SS4XubaVyiDKp7-PNtFOK95bnV79ZDJi6W3JYCDHLTTqY6VSJ-HqxZMdhf4Rl22Y_p3eo8SK/pubhtml?widget=true&amp;headers=false"
//           width="100%"
//           height="100%"
//           frameBorder="0"
//           title="Student Data Google Sheet"
//           style={{
//             border: 'none',
//           }}
//         />
//       </div>

//       <div style={{ textAlign: 'center' }}>
//       <button
//   onClick={() => window.open('/filter', '_blank')}
//   style={{
//     padding: '12px 24px',
//     fontSize: '16px',
//     fontWeight: '500',
//     cursor: 'pointer',
//     backgroundColor: '#007BFF',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '8px',
//     transition: 'all 0.2s ease-in-out',
//     marginRight: '10px'
//   }}
// >
//   🔍 Run Filter
// </button>

//       </div>
//       <a
//     href="https://docs.google.com/spreadsheets/d/1KovDCzAa3gsCJJRBTZl-KOeMMc8c3N3RhGYa_6RpwXY/export?format=xlsx"
//     target="_blank"
//     rel="noopener noreferrer"
//     download
//   >
//     <button
//       style={{
//         padding: '12px 24px',
//         fontSize: '16px',
//         fontWeight: '500',
//         cursor: 'pointer',
//         backgroundColor: '#28a745',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '8px'
//       }}
//     >
//       📥 Download Excel
//     </button>
//   </a>

//     </div>
//   );
// }

// export default Admin;
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
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
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

  return (
    <div
      style={{
        paddingTop: '80px',
        backgroundColor: '#f5f7fa',
        minHeight: '100vh',
        paddingLeft: '20px',
        paddingRight: '20px',
        transition: 'all 0.3s ease',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        animation: showAnimation ? 'fadeIn 0.6s ease-out' : 'none',
      }}
    >
      <h2
        style={{
          marginBottom: '25px',
          color: '#1a365d',
          fontSize: '32px',
          fontWeight: '700',
          textAlign: 'center',
          position: 'relative',
          display: 'inline-block',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '0 15px 10px',
          borderBottom: '3px solid #4299e1',
        }}
      >
        📊 Student Data Sheet
      </h2>

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
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRz433_SS4XubaVyiDKp7-PNtFOK95bnV79ZDJi6W3JYCDHLTTqY6VSJ-HqxZMdhf4Rl22Y_p3eo8SK/pubhtml?widget=true&amp;headers=false"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Student Data Google Sheet"
            style={{
              border: 'none',
            }}
          />
        )}
      </div>

      <div
        style={{
          textAlign: 'center',
          marginTop: '30px',
          animation: showAnimation
            ? 'fadeIn 0.8s ease-out 0.2s backwards'
            : 'none',
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={handleFilterClick}
          onMouseEnter={() => setFilterHovered(true)}
          onMouseLeave={() => setFilterHovered(false)}
          style={{
            padding: '14px 28px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            marginBottom:'10px',
            backgroundColor: filterHovered ? '#0056b3' : '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            transition: 'all 0.2s ease-in-out',
            boxShadow: filterHovered
              ? '0 5px 15px rgba(0, 123, 255, 0.4)'
              : '0 4px 6px rgba(117, 146, 178, 0.2)',
            transform: filterHovered ? 'translateY(-2px)' : 'translateY(0)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ marginRight: '8px', fontSize: '18px' }}>🔍</span>
          Run Filter
        </button>

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
            style={{
              padding: '14px 28px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              backgroundColor: downloadHovered ? '#218838' : '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              transition: 'all 0.2s ease-in-out',
              boxShadow: downloadHovered
                ? '0 5px 15px rgba(68, 210, 101, 0.4)'
                : '0 4px 6px rgba(40, 167, 69, 0.2)',
              transform: downloadHovered ? 'translateY(-2px)' : 'translateY(0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ marginRight: '8px', fontSize: '18px' }}>📥</span>
            Download Excel
          </button>
        </a>
      </div>
    </div>
  );
}

export default Admin;
