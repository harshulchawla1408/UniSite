import React, { useState } from "react";

function Resources() {
    const [selectedCompany, setSelectedCompany] = useState("");
    const [activeTab, setActiveTab] = useState("pyqs");

    const companies = [
        { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png" },
        { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "TCS", logo: "https://i.pinimg.com/736x/aa/a2/45/aaa245759726ab04e968b9bff4981a52.jpg" },
        { name: "Infosys", logo: "https://bfsi.eletsonline.com/wp-content/uploads/2018/05/infosys_and_blockchain.jpg" },
        { name: "Wipro", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPKhrm8mpzlQpU8Rh43eGTMufwLvCSHCMGlw&s" },
        { name: "Cognizant", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKE0GgxQbFi1chj5IfW9bPKDh6FMF7sbXfLA&s" },
        { name: "Quark", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzXuuwjlnPyI_BD3qaXXZQajlKy1t-eQxQw&s" },
        { name: "Jio", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reliance_Jio_Logo.svg/1200px-Reliance_Jio_Logo.svg.png" },
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
        <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9fafb", minHeight: "100vh", padding: "2rem" }}>
            {/* Header Section */}
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1d4ed8" }}>Placement Resources & PYQs Hub</h1>
                <p style={{ fontSize: "1.125rem", color: "#4b5563" }}>Your one-stop destination for placement preparation materials</p>
            </div>

            {/* Tabs Section */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                <button
                    style={{
                        padding: "0.75rem 2rem",
                        margin: "0 1rem",
                        backgroundColor: activeTab === "pyqs" ? "#2563eb" : "#e5e7eb",
                        color: activeTab === "pyqs" ? "#fff" : "#374151",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                    onClick={() => setActiveTab("pyqs")}
                >
                    Previous Year Papers
                </button>
                <button
                    style={{
                        padding: "0.75rem 2rem",
                        margin: "0 1rem",
                        backgroundColor: activeTab === "study" ? "#2563eb" : "#e5e7eb",
                        color: activeTab === "study" ? "#fff" : "#374151",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                    onClick={() => setActiveTab("study")}
                >
                    Study Resources
                </button>
            </div>

            {/* Companies Section */}
            {activeTab === "pyqs" && (
                <section>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
                        {companies.map((company, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: "#fff",
                                    padding: "1.5rem",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                    textAlign: "center",
                                    cursor: "pointer",
                                    transition: "transform 0.2s",
                                }}
                                onClick={() => setSelectedCompany(company.name)}
                            >
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    style={{ height: "60px", marginBottom: "1rem" }}
                                />
                                <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1d4ed8" }}>{company.name}</h3>
                                {selectedCompany === company.name && (
                                    <div style={{ marginTop: "1rem" }}>
                                        <a href="#" style={{ display: "block", color: "#2563eb", marginBottom: "0.5rem" }}>📝 Aptitude Questions</a>
                                        <a href="#" style={{ display: "block", color: "#2563eb", marginBottom: "0.5rem" }}>💻 Technical Questions</a>
                                        <a href="#" style={{ display: "block", color: "#2563eb", marginBottom: "0.5rem" }}>🎯 Coding Questions</a>
                                        <a href="#" style={{ display: "block", color: "#2563eb" }}>🗣️ Interview Questions</a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Study Resources Section */}
            {activeTab === "study" && (
                <section>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
                        {studyResources.map((category, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: "#fff",
                                    padding: "1.5rem",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                                    <span style={{ fontSize: "2rem", marginRight: "0.5rem" }}>{category.icon}</span>
                                    <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1d4ed8" }}>{category.title}</h3>
                                </div>
                                <div>
                                    {category.items.map((item, idx) => (
                                        <a
                                            key={idx}
                                            href={item.link}
                                            style={{
                                                display: "block",
                                                color: "#2563eb",
                                                marginBottom: "0.5rem",
                                                textDecoration: "none",
                                            }}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

export default Resources;
