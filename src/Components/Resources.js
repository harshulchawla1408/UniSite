import React, { useState } from "react";
function Resources() {
    const [selectedCompany, setSelectedCompany] = useState("");
    const companies = ["TCS", "Infosys", "Wipro", "Amazon", "Cognizant"];
  
    const handleCompanyChange = (e) => {
      setSelectedCompany(e.target.value);
    };
  
    return (
      <div className="resources-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Placement Resources & PYQs Hub</h1>
            <p>
              Prepare smarter with previous year questions, company insights, and
              essential resources — all in one place!
            </p>
          </div>
        </section>
  
        {/* Company-wise PYQs Section */}
        <section className="pyqs-section">
          <h2>Company-wise Previous Year Questions</h2>
          <select className="company-filter" onChange={handleCompanyChange}>
            <option value="">Select Company</option>
            {companies.map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
          </select>
          {selectedCompany && (
            <div className="pyqs-content">
              <h3>{selectedCompany} - Aptitude Questions</h3>
              <p>Download Aptitude PYQs for {selectedCompany}</p>
              <h3>{selectedCompany} - Technical Questions</h3>
              <p>Download Technical PYQs for {selectedCompany}</p>
              <h3>{selectedCompany} - HR Interview Questions</h3>
              <p>Prepare for HR interviews with {selectedCompany} specific questions</p>
            </div>
          )}
        </section>
  
        {/* Study Resources Section */}
        <section className="study-resources">
          <h2>Study Resources</h2>
          <ul>
            <li>Top Coding Platforms: Leetcode, HackerRank, Codeforces</li>
            <li>Aptitude & Reasoning PDFs</li>
            <li>Resume Building Tips + Sample Resumes</li>
            <li>Group Discussion Topics + Model Answers</li>
            <li>Quick Revision Notes: DSA, DBMS, OS, CN, OOPs</li>
          </ul>
        </section>
  
        {/* Preparation Roadmap Section */}
        <section className="preparation-roadmap">
          <h2>Preparation Roadmap</h2>
          <p>Weekly study plans and a checklist for coding, aptitude, projects, and interview prep.</p>
          <ul>
            <li>✅ Coding Practice</li>
            <li>✅ Aptitude Skills</li>
            <li>✅ Resume Building</li>
            <li>✅ Project Showcase</li>
            <li>✅ Interview Prep</li>
          </ul>
        </section>
  
        {/* Alumni Success Stories Section */}
        <section className="alumni-stories">
          <h2>Alumni Success Stories</h2>
          <p>Get inspired by success stories from seniors who cracked top companies!</p>
        </section>
  
        {/* Motivational Footer Section */}
        <section className="footer-section">
          <h2>🚀 Your Placement Journey Starts Here!</h2>
          <p>Every click brings you closer to success!</p>
          <a href="/placement-dashboard">Back to Placement Dashboard</a>
          <a href="/upcoming-drives">Check Upcoming Drives</a>
        </section>
      </div>
    );
  }
  
  export default Resources;
  