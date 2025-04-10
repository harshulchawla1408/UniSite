import React, { useState } from "react";
import { Link } from "react-router-dom";

function Resources() {
    const [selectedCompany, setSelectedCompany] = useState("");
    const [activeTab, setActiveTab] = useState("pyqs");

    const companies = [
        { name: "Amazon", logo: "amazon.png" },
        { name: "Microsoft", logo: "microsoft.png" },
        { name: "Google", logo: "google.png" },
        { name: "TCS", logo: "tcs.png" },
        { name: "Infosys", logo: "infosys.png" },
        { name: "Wipro", logo: "wipro.png" },
        { name: "Cognizant", logo: "cognizant.png" },
        { name: "Quark", logo: "quark.png" },
        { name: "Jio", logo: "jio.png" },
    ];

    const studyResources = [
        {
            title: "Coding Practice",
            icon: "💻",
            items: [
                { name: "LeetCode Premium Problems", link: "#" },
                { name: "HackerRank Challenges", link: "#" },
                { name: "CodeForces Contests", link: "#" },
                { name: "InterviewBit DSA Track", link: "#" },
            ],
        },
        {
            title: "Aptitude & Reasoning",
            icon: "🎯",
            items: [
                { name: "Quantitative Aptitude PDF", link: "#" },
                { name: "Logical Reasoning Guide", link: "#" },
                { name: "Verbal Ability Practice", link: "#" },
                { name: "Mock Aptitude Tests", link: "#" },
            ],
        },
        {
            title: "Interview Preparation",
            icon: "🎤",
            items: [
                { name: "HR Interview Questions", link: "#" },
                { name: "Technical Interview Guide", link: "#" },
                { name: "Mock Interview Videos", link: "#" },
                { name: "Company Specific Tips", link: "#" },
            ],
        },
        {
            title: "Core Subjects",
            icon: "📚",
            items: [
                { name: "DSA Complete Notes", link: "#" },
                { name: "DBMS Quick Review", link: "#" },
                { name: "OS Concepts Guide", link: "#" },
                { name: "CN Important Topics", link: "#" },
            ],
        },
    ];

    return (
        <div className="resources-container">
            <div className="resources-welcome">
                <h1>Placement Resources & PYQs Hub</h1>
                <p>Your one-stop destination for placement preparation materials</p>
            </div>

            <div className="resources-tabs">
                <button
                    className={`tab-btn ${activeTab === "pyqs" ? "active" : ""}`}
                    onClick={() => setActiveTab("pyqs")}
                >
                    Previous Year Papers
                </button>
                <button
                    className={`tab-btn ${activeTab === "study" ? "active" : ""}`}
                    onClick={() => setActiveTab("study")}
                >
                    Study Resources
                </button>
            </div>

            {activeTab === "pyqs" && (
                <section className="companies-section">
                    <div className="companies-grid">
                        {companies.map((company, index) => (
                            <div key={index} className="company-card" onClick={() => setSelectedCompany(company.name)}>
                                <div className="company-logo">{company.name[0]}</div>
                                <h3>{company.name}</h3>
                                <div className={`company-resources ${selectedCompany === company.name ? "active" : ""}`}>
                                    <div className="resource-link">
                                        <span>📝 Aptitude Questions</span>
                                        <a href="#" className="download-btn">Download PDF</a>
                                    </div>
                                    <div className="resource-link">
                                        <span>💻 Technical Questions</span>
                                        <a href="#" className="download-btn">Download PDF</a>
                                    </div>
                                    <div className="resource-link">
                                        <span>🎯 Coding Questions</span>
                                        <a href="#" className="download-btn">Download PDF</a>
                                    </div>
                                    <div className="resource-link">
                                        <span>🗣️ Interview Questions</span>
                                        <a href="#" className="download-btn">Download PDF</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {activeTab === "study" && (
                <section className="study-section">
                    <div className="resources-grid">
                        {studyResources.map((category, index) => (
                            <div key={index} className="resource-card">
                                <div className="resource-header">
                                    <span className="resource-icon">{category.icon}</span>
                                    <h3>{category.title}</h3>
                                </div>
                                <div className="resource-links">
                                    {category.items.map((item, idx) => (
                                        <a key={idx} href={item.link} className="resource-item">
                                            {item.name}
                                            <span className="arrow">→</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <section className="resources-footer">
                <div className="footer-content">
                    <h2>🚀 Ready to Begin Your Preparation?</h2>
                    <p>Access all materials and start your journey towards success</p>
                    <div className="footer-actions">
                        <a href="#" className="footer-btn secondary">Download Study Plan</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
  
  export default Resources;
  