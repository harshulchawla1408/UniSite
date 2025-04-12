import React, { useState } from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "How can I apply for admission?",
    answer: "You can apply online through our official university portal. Applications typically open in May."
  },
  {
    question: "What programs does the university offer?",
    answer: "We offer undergraduate, postgraduate, and doctoral programs in engineering, science, arts, commerce, and technology."
  },
  {
    question: "Is hostel accommodation available?",
    answer: "Yes, our campus includes modern and secure hostel facilities for both boys and girls."
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {faqs.map((faq, index) => (
        <div key={index} style={{ border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1rem', backgroundColor: 'white', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}>
          <button
            style={{ width: '100%', textAlign: 'left', fontWeight: '600', fontSize: '1.125rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            onClick={() => toggle(index)}
          >
            {faq.question}
            <span>{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <div style={{ marginTop: '0.5rem', color: '#374151' }}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const stats = [
  { label: "Students", value: 15000 },
  { label: "Faculty", value: 600 },
  { label: "Placements", value: 95 },
  { label: "Years of Excellence", value: 25 },
];

const achievements = [
  "Top 10 in Innovation (2023)",
  "NAAC A++ Accreditation",
  "500+ Research Publications",
  "Global Student Exchange Programs"
];

const timeline = [
  { year: "2000", event: "University Established" },
  { year: "2005", event: "First Engineering Batch Graduated" },
  { year: "2015", event: "Ranked Top 50 by NIRF" },
  { year: "2023", event: "Awarded Centre of Excellence" },
];

const About = () => {
  return (
    <div style={{ padding: '1.5rem', background: 'linear-gradient(to bottom, white, #f3f4f6)', minHeight: '100vh' }}>
      {/* Header */}
      <motion.div 
        style={{ textAlign: 'center', marginBottom: '3rem' }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1d4ed8' }}>About Us</h1>
        <p style={{ marginTop: '1rem', color: '#4b5563', fontSize: '1.125rem' }}>Empowering the future with knowledge and innovation</p>
      </motion.div>

      {/* Image + Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center', marginBottom: '4rem' }}>
        <motion.img 
          src="https://via.placeholder.com/500x300" 
          alt="Campus" 
          style={{ borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>Who We Are</h2>
          <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
            Our university stands as a beacon of academic excellence, nurturing innovation, leadership, and research. We aim to empower students with not only knowledge, but the skills to lead change in the world.
          </p>
          <p style={{ color: '#4b5563' }}>
            With state-of-the-art facilities, experienced faculty, and a commitment to holistic development, we ensure every student thrives academically and personally.
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', textAlign: 'center', marginBottom: '4rem' }}>
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', transition: 'all 0.3s ease' }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#2563eb' }}>
              <CountUp end={stat.value} duration={3} />+
            </h3>
            <p style={{ marginTop: '0.5rem', color: '#4b5563', fontWeight: '500' }}>{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', textAlign: 'center', color: '#1f2937' }}>Our Journey</h2>
        <div style={{ borderLeft: '4px solid #3b82f6', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              style={{ position: 'relative' }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div style={{ position: 'absolute', left: '-0.75rem', width: '1.25rem', height: '1.25rem', backgroundColor: '#3b82f6', borderRadius: '9999px' }}></div>
              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{item.year}</p>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#374151' }}>{item.event}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', textAlign: 'center', color: '#1f2937' }}>Achievements</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {achievements.map((ach, index) => (
            <motion.div 
              key={index}
              style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '1rem', textAlign: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease' }}
              whileHover={{ scale: 1.03 }}
            >
              <p style={{ color: '#1d4ed8', fontWeight: '500' }}>{ach}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', textAlign: 'center', color: '#1f2937' }}>Frequently Asked Questions</h2>
        <FAQAccordion />
      </div>
    </div>
  );
};

export default About;