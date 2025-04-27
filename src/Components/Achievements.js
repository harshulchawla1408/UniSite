import React from 'react';

const Achievements = () => {
  return (
    <div
      style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#1d4ed8',
          marginBottom: '2rem',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
        }}
      >
        Achievements
      </h2>

      {/* Vision and Mission */}
      <div
        style={{
          marginBottom: '3rem',
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3
          style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            color: '#374151',
            marginBottom: '1rem',
          }}
        >
          Vision
        </h3>
        <p
          style={{
            color: '#4b5563',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '1.5rem',
          }}
        >
          To be the best among the departments in Computer Science and Engineering, benefiting society globally by
          producing world-class engineers and researchers with excellent analytical, logical, and communication skills,
          and the ability to work in every type of environment.
        </p>

        <h3
          style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            color: '#374151',
            marginBottom: '1rem',
          }}
        >
          Mission
        </h3>
        <p
          style={{
            color: '#4b5563',
            fontSize: '1.1rem',
            lineHeight: '1.8',
          }}
        >
          To establish as a Centre of Excellence in Technical Education and to produce well-qualified undergraduates,
          postgraduates, and researchers in the field of Computer Science & Engineering.
        </p>
      </div>

      {/* Research Projects */}
      <div
        style={{
          marginBottom: '3rem',
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3
          style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            color: '#374151',
            marginBottom: '1rem',
          }}
        >
          Research Projects
        </h3>
        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <li style={{ marginBottom: '1.5rem' }}>
            <strong style={{ color: '#2563eb' }}>UGC Minor Project:</strong> DNA and Quantum Computing Application for
            Testing VLSI Circuit (2007-2009)
            <br />
            <span style={{ fontStyle: 'italic', color: '#6b7280' }}>Principal Investigator: Dr. Amardeep Singh</span>
            <br />
            <span style={{ color: '#374151' }}>Amount: ₹85,000</span>
          </li>
          <li style={{ marginBottom: '1.5rem' }}>
            <strong style={{ color: '#2563eb' }}>UGC Major Project:</strong> Non-conventional computational techniques
            for modeling and simulating the sequences of bio-molecules database (2011-2014)
            <br />
            <span style={{ fontStyle: 'italic', color: '#6b7280' }}>Principal Investigator: Dr. Amardeep Singh</span>
            <br />
            <span style={{ color: '#374151' }}>Amount: ₹6.50 Lacs</span>
          </li>
        </ul>
      </div>

      {/* Ph.D. Details */}
      <div
        style={{
          marginBottom: '3rem',
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3
          style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            color: '#374151',
            marginBottom: '1rem',
          }}
        >
          Ph.D. Details
        </h3>
        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#2563eb' }}>Number of Ph.D. Students Registered:</strong> 54
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#2563eb' }}>Number of Ph.D. Students Enrolled:</strong> 28
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#2563eb' }}>Number of Ph.D. Completed:</strong> 12
          </li>
        </ul>
      </div>

      {/* Publications */}
      <div
        style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3
          style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            color: '#374151',
            marginBottom: '1rem',
          }}
        >
          Publications
        </h3>
        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#2563eb' }}>Journals:</strong> 487
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#2563eb' }}>Conferences:</strong> 178
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
