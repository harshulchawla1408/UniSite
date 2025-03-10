import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data for hero slider
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

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-slider">
          {heroSlides.map((slide, index) => (
            <div 
              key={index} 
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          ))}
          <div className="slider-dots">
            {heroSlides.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-container">
          <h2 className="section-title">About Placement Cell</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Welcome to the Placement Cell of Punjabi University, Patiala, dedicated to bridging the gap between students and career opportunities. Our mission is to ensure the best placements and professional growth for our students by connecting them with top recruiters and industry leaders.</p>
              <Link to="/about" className="learn-more">Learn More →</Link>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>95%</h3>
                <p>Placement Rate</p>
              </div>
              <div className="stat-item">
                <h3>100+</h3>
                <p>Companies</p>
              </div>
              <div className="stat-item">
                <h3>42 LPA</h3>
                <p>Highest Package</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-card">
              <i className="fas fa-user-graduate"></i>
              <h3>1200+</h3>
              <p>Students Placed</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-building"></i>
              <h3>250+</h3>
              <p>Partner Companies</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-chart-line"></i>
              <h3>12 LPA</h3>
              <p>Average Package</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-handshake"></i>
              <h3>98%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="recruiters-section">
        <div className="section-container">
          <h2 className="section-title">Top Recruiters</h2>
          <div className="recruiters-scroll">
            {/* Add company logos here */}
            <div className="recruiter-logos">
              {/* Sample logos - replace with actual company logos */}
              <img src="../images/company1.jpg" alt="Company 1" />
              <img src="../images/company2.png" alt="Company 2" />
              <img src="../images/company3.png" alt="Company 3" />
              <img src="../images/company4.png" alt="Company 4" />
              <img src="../images/company5.png" alt="Company 5" />
              {/* Add more logos */}
            </div>
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="process-section">
        <div className="section-container">
          <h2 className="section-title">Placement Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Registration</h3>
              <p>Complete your profile registration</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Verification</h3>
              <p>Document verification process</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Training</h3>
              <p>Pre-placement training sessions</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Interviews</h3>
              <p>Company interviews and selection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-section">
        <div className="section-container">
          <h2 className="section-title">Upcoming Placement Drives</h2>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-date">
                <span className="day">15</span>
                <span className="month">MAR</span>
              </div>
              <div className="event-details">
                <h3>Microsoft Recruitment Drive</h3>
                <p>For B.Tech CSE & IT Students</p>
                <Link to="/events" className="event-link">Learn More →</Link>
              </div>
            </div>
            {/* Add more event cards */}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <div className="section-container">
          <h2 className="section-title">Placement Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <i className="fas fa-book"></i>
              <h3>Interview Preparation</h3>
              <p>Access study materials and guides</p>
              <Link to="/resources" className="resource-link">View Resources</Link>
            </div>
            {/* Add more resource cards */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Contact Placement Cell</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>placements@university.edu</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p>+91 XXX XXX XXXX</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Placement Cell, University Campus</p>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;