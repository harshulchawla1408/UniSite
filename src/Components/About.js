import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Cards from './Cards'; // Assuming you have a Cards component
import Achievements from './Achievements';
import Register from './Register';
// Example Data
const stats = [
  { label: "Students Placed", value: 1500 },
  { label: "Companies Visited", value: 250 },
  { label: "Highest Package", value: "₹50 LPA" },
  { label: "Average Salary", value: "₹12 LPA" },
];

const faqData = [
  { question: "How do I register for placements?", answer: "Students need to log in to the portal and fill out their details to register." },
  { question: "What documents do I need?", answer: "Students must submit their resume, transcripts, and relevant certifications." },
  { question: "When does the placement season begin?", answer: "The placement season typically begins in September each year." },
];

const achievements = [
  "Ranked #1 in Innovation (2023)",
  "NAAC A++ Accreditation",
  "600+ Research Publications",
  "Global Student Exchange Programs",
];

const timeline = [
  { year: "1962", event: "University Established" },
  { year: "1980", event: "First Engineering Batch Graduated" },
  { year: "2000", event: "Ranked Top 10 in India" },
  { year: "2023", event: "Awarded Centre of Excellence" },
];

const AboutPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: 'url("../images/university-campus.jpg") no-repeat center center/cover',
          padding: '4rem 0',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color:'rgb(27, 46, 111)' }}>Welcome to Punjabi University Placement Portal</h1>
        <p style={{ fontSize: '1.125rem', marginTop: '1rem',color:'rgb(27, 46, 111)' }}>Empowering students with knowledge, innovation, and career opportunities</p>
        <button
          style={{
            padding: '0.75rem 2rem',
            backgroundColor: '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.25rem',
            cursor: 'pointer',
            marginTop: '1rem',
          }}
        >
          <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdrYYf-KpGe4BOZ3RmpxM0FxDZUr4-Mv-auSTbT2ybMbrIMHw/viewform?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
          Register Now 
          </a>
        </button>
      </motion.div>
          <Cards/>
      {/* About Section */}
      <div style={{ padding: '2rem', backgroundColor: '#fff', textAlign: 'center' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: '2rem', fontWeight: '600', color: '#1f2937' }}
        >
          About CSE Department
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ marginTop: '1rem', color: '#4b5563', fontSize: '1.125rem', lineHeight: '1.75rem' }}
        >



The Computer Engineering Department was established in 2003, after consultations between the senior faculty of the University, technical experts and the Vice-Chancellor regarding the need for education in the field of engineering and technology in the state of Punjab. Earlier it was known as University College of Engineering (UCoE), Punjab, India

The university has drawn up a master plan to be executed in three phases to provide technical education in the basic and specialized fields. Three branches leading to B.Tech. degree have been offered in the first phase. The second phase will introduce another three branches namely Micro-electronics, Power Engineering and Bio-informatics and the third phase will include further expansion, and stress on research work and establishment of a research and development centre with the participation of industry. This centre would provide solutions to the technical problems of the industry and would suggest means for growth of industry in the region.

A central placement cell has been established by Punjabi University for arranging the training and final placement of its students. Companies like Maruti Suzuki, TechMahindra, L&T, Infosys, Wipro, SAP, TATA Motors, Google, Facebook, Aricent, Airtel, Idea Cellular visit the campus every year. The cell is in touch with industry houses and arranges on and off campus interviews of its students with the executives of the industry.

Clubs for technical, cultural and literary subjects have been formed by the students. The Punjabi University is committed to develop UCoE as a Centre of Excellence in Technical Education        </motion.p>
      </div>

      {/* Stats Section */}
      <div style={{ padding: '2rem 0', backgroundColor: '#f3f4f6' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '600', color: '#1f2937' }}>Placement Stats</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              style={{
                textAlign: 'center',
                backgroundColor: '#fff',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                width: '22%',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 style={{ fontSize: '2.25rem', color: '#2563eb' }}>{stat.value}</h3>
              <p style={{ fontSize: '1.125rem', color: '#333' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      {/* <div style={{ padding: '2rem', backgroundColor: '#fff' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '600', color: '#1f2937' }}>Achievements</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              style={{
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              }}
              whileHover={{ scale: 1.03 }}
            >
              <p style={{ color: '#1d4ed8', fontWeight: '500' }}>{ach}</p>
            </motion.div>
          ))}
        </div>
      </div> */}
      <Achievements/>

      {/* Timeline Section
      <div style={{ padding: '2rem 0', backgroundColor: '#f9fafb' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '600', color: '#1f2937' }}>Our Journey</h2>
        <div style={{ borderLeft: '4px solid #3b82f6', paddingLeft: '1.5rem', marginTop: '2rem' }}>
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              style={{ marginBottom: '1.5rem', position: 'relative' }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '-0.75rem',
                  width: '1.25rem',
                  height: '1.25rem',
                  backgroundColor: '#3b82f6',
                  borderRadius: '9999px',
                }}
              ></div>
              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{item.year}</p>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#374151' }}>{item.event}</h3>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* FAQ Section */}
      <div style={{ padding: '2rem', backgroundColor: '#fff' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '600', color: '#1f2937' }}>Frequently Asked Questions</h2>
        <div style={{ marginTop: '2rem' }}>
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              style={{
                marginBottom: '1rem',
                backgroundColor: '#f9fafb',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#2563eb' }}>{faq.question}</h3>
              <p style={{ marginTop: '0.5rem', color: '#4b5563' }}>{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
