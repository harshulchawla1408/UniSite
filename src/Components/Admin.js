import React from 'react';

function Admin() {
  return (
    <div style={{
      paddingTop: '80px', // navbar ke neeche space
      backgroundColor: '#f4f6f8',
      minHeight: '100vh',
      paddingLeft: '20px',
      paddingRight: '20px',
    }}>
      <h2 style={{ 
        marginBottom: '20px', 
        color: '#2c3e50', 
        fontSize: '28px', 
        fontWeight: '600', 
        textAlign: 'center' 
      }}>
        📊 Student Data Sheet
      </h2>

      <div style={{
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '30px',
        border: '1px solid #ddd',
        height: '600px',
        backgroundColor: '#fff',
      }}>
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
      </div>

      <div style={{ textAlign: 'center' }}>
      <button
  onClick={() => window.open('/filter', '_blank')}
  style={{
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    transition: 'all 0.2s ease-in-out',
    marginRight: '10px'
  }}
>
  🔍 Run Filter
</button>

      </div>
      <a
    href="https://docs.google.com/spreadsheets/d/1KovDCzAa3gsCJJRBTZl-KOeMMc8c3N3RhGYa_6RpwXY/export?format=xlsx"
    target="_blank"
    rel="noopener noreferrer"
    download
  >
    <button
      style={{
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: '500',
        cursor: 'pointer',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '8px'
      }}
    >
      📥 Download Excel
    </button>
  </a>

    </div>
  );
}

export default Admin;
