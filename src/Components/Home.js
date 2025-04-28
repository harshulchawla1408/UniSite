import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Register from './Register'; // Assuming you have a Register component

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "../images/slide1.jpg",
      title: "Welcome to Placement Cell",
      subtitle: "Shaping Careers, Building Futures"
    },
    {
      image: "../images/slide2.jpg",
      title: "100+ Companies",
      subtitle: "Recruiting Every Year"
    },
    {
      image: "../images/slide3.jpg",
      title: "95% Placement Rate",
      subtitle: "For 2023 Batch"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const styles = {
    homeContainer: { fontFamily: 'Arial, sans-serif', marginTop: '0px' },
    heroSection: { position: 'relative', height: '90vh', overflow: 'hidden' },
    slide: (image, active) => ({
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: active ? 1 : 0,
      transition: 'opacity 1s ease-in-out',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      textShadow: '0 2px 8px rgba(0,0,0,0.7)',
      zIndex: active ? 1 : 0,
    }),
    heroButton: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: ' #003366 ',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '5px',
      fontWeight: 'bold',
    },
    sliderDots: {
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '10px',
    },
    dot: (active) => ({
      height: '10px',
      width: '10px',
      borderRadius: '50%',
      backgroundColor: active ? 'white' : 'gray',
      cursor: 'pointer',
    }),
    sectionContainer: { padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' },
    sectionTitle: { textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px', color: '#333' },
    aboutContent: { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' },
    aboutText: { flex: '1', minWidth: '300px', paddingRight: '20px' },
    aboutStats: { flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'space-around' },
    statItem: { textAlign: 'center' },
    statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' },
    statCard: { textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' },
    recruitersScroll: { overflowX: 'auto', whiteSpace: 'nowrap', paddingBottom: '20px' },
    recruiterLogos: { display: 'inline-flex', gap: '20px', alignItems: 'center' },
    recruiterImage: { height: '80px', objectFit: 'contain' },
    resourcesGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' },
    resourceCard: { textAlign: 'center', backgroundColor: '#e6f7ff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 8px rgba(0,0,0,0.1)' },
    contactGrid: { display: 'flex', flexWrap: 'wrap', gap: '30px' },
    contactInfo: { flex: '1', minWidth: '300px' },
    contactForm: { flex: '1', minWidth: '300px' },
    input: { width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' },
    textarea: { width: '100%', padding: '10px', height: '100px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' },
    submitBtn: { backgroundColor: '#28a745', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }
  };

  return (
    <div style={styles.homeContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        {heroSlides.map((slide, index) => (
          <div key={index} style={styles.slide(slide.image, index === currentSlide)}>
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
          </div>
        ))}
        <div style={styles.sliderDots}>
          {heroSlides.map((_, index) => (
            <span key={index} style={styles.dot(index === currentSlide)} onClick={() => setCurrentSlide(index)}></span>
          ))}
        </div>
      </section>
      <Register />
      {/* About Section */}
      <section>
        <div style={styles.sectionContainer}>
          <h2 style={styles.sectionTitle}>About Placement Cell</h2>
          <div style={styles.aboutContent}>
            <div style={styles.aboutText}>
              <p>Welcome to the Placement Cell of Punjabi University, Patiala, dedicated to bridging the gap between students and career opportunities.</p>
              <Link to="/about">Learn More →</Link>
            </div>
            <div style={styles.aboutStats}>
              <div style={styles.statItem}>
                <h3>95%</h3>
                <p>Placement Rate</p>
              </div>
              <div style={styles.statItem}>
                <h3>100+</h3>
                <p>Companies</p>
              </div>
              <div style={styles.statItem}>
                <h3>42 LPA</h3>
                <p>Highest Package</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <div style={styles.sectionContainer}>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <h3>1200+</h3>
              <p>Students Placed</p>
            </div>
            <div style={styles.statCard}>
              <h3>250+</h3>
              <p>Partner Companies</p>
            </div>
            <div style={styles.statCard}>
              <h3>12 LPA</h3>
              <p>Average Package</p>
            </div>
            <div style={styles.statCard}>
              <h3>98%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiters Section */}
      <section className="recruiters-section">
         <div className="section-container">
           <h2 className="section-title">Top Recruiters</h2>
           <div className="recruiters-scroll">
             <div className="recruiter-logos">
               <img src="../images/company1.jpg" alt="Company 1" />
               <img src="../images/company2.png" alt="Company 2" />
               <img src="../images/company3.png" alt="Company 3" />
               <img src="../images/company4.png" alt="Company 4" />
               <img src="../images/company5.png" alt="Company 5" />
               <img src="../images/company6.jpg" alt="Company 6" />
               <img src="../images/company7.png" alt="Company 7" />
               <img src="../images/company8.png" alt="Company 8" />
               <img src="../images/company9.png" alt="Company 9" />
               <img src="../images/company10.png" alt="Company 10" />
             </div>
           </div>
         </div>
       </section>

      {/* Resources Section */}
<section>
  <div style={{
    padding: '40px 20px', 
    backgroundColor: '#f5f5f5', 
    borderRadius: '10px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    textAlign: 'center'
  }}>
    <h2 style={{
      fontSize: '2rem', 
      color: '#003366', 
      fontWeight: 'bold', 
      marginBottom: '20px'
    }}>
      Placement Resources
    </h2>
    <div style={{
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
      gap: '20px', 
      justifyContent: 'center'
    }}>
      <div style={{
        backgroundColor: '#ffffff', 
        padding: '30px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
        transition: 'transform 0.3s, box-shadow 0.3s'
      }}>
        <h3 style={{
          fontSize: '1.5rem', 
          color: '#003366', 
          marginBottom: '10px'
        }}>
          Interview Preparation
        </h3>
        <p style={{
          fontSize: '1rem', 
          color: '#666', 
          marginBottom: '15px'
        }}>
          Access study materials and guides
        </p>
        <Link to="/resources" style={{
          backgroundColor: '#4CAF50', 
          color: 'white', 
          padding: '10px 20px', 
          textDecoration: 'none', 
          borderRadius: '5px', 
          fontSize: '1rem', 
          transition: 'background-color 0.3s'
        }} 
        onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'} 
        onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}>
          View Resources
        </Link>
      </div>
    </div>
  </div>
</section>
{/* Contact Section */}
<section>
  <div style={{
    padding: '40px 20px', 
    backgroundColor: '#f9f9f9', 
    borderRadius: '10px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    textAlign: 'center'
  }}>
    <h2 style={{
      fontSize: '2rem', 
      color: '#003366', 
      fontWeight: 'bold', 
      marginBottom: '30px'
    }}>
      Contact Placement Cell
    </h2>
    <div style={{
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '20px', 
      justifyContent: 'center'
    }}>
      {/* Contact Information */}
      <div style={{
        backgroundColor: '#ffffff', 
        padding: '30px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
        color: '#333'
      }}>
        <p style={{fontSize: '1rem', marginBottom: '15px'}}><b>Email:</b> placement@pbi.ac.in</p>
        <p style={{fontSize: '1rem', marginBottom: '15px'}}><b>Phone:</b> +91-175-304-6366</p>
        <p style={{fontSize: '1rem', marginBottom: '15px'}}><b>Address:</b> Career and Counselling cum Placement Cell,<br />Punjabi University, Patiala (Punjab)</p>
      </div>

      {/* Contact Form */}
      <div style={{
        backgroundColor: '#ffffff', 
        padding: '30px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <form>
          <input 
            type="text" 
            placeholder="Your Name" 
            style={{
              width: '100%', 
              padding: '12px', 
              marginBottom: '15px', 
              borderRadius: '5px', 
              border: '1px solid #ccc', 
              fontSize: '1rem', 
              boxSizing: 'border-box'
            }} 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            style={{
              width: '100%', 
              padding: '12px', 
              marginBottom: '15px', 
              borderRadius: '5px', 
              border: '1px solid #ccc', 
              fontSize: '1rem', 
              boxSizing: 'border-box'
            }} 
          />
          <textarea 
            placeholder="Your Message" 
            style={{
              width: '100%', 
              padding: '12px', 
              marginBottom: '20px', 
              borderRadius: '5px', 
              border: '1px solid #ccc', 
              fontSize: '1rem', 
              boxSizing: 'border-box', 
              minHeight: '150px'
            }}
          />
          <button 
            type="submit" 
            style={{
              backgroundColor: '#4CAF50', 
              color: 'white', 
              padding: '12px 20px', 
              border: 'none', 
              borderRadius: '5px', 
              fontSize: '1rem', 
              cursor: 'pointer', 
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;
