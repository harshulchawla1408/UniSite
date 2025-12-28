import React from "react";
import './style.css';


const PROFESSORS = [
  {
    name: "Dr. Gurjit Singh Bhatthal",
    designation: "Senior Professor",
    email: "gurjit.bhatthal@pbi.ac.in",
    linkedin: "https://www.linkedin.com/in/dr-gurjit-singh-bhathal-b0958685/",
    photo: process.env.PUBLIC_URL + '/images/prof1.png',
  },
  {
    name: "Dr. Brahmaleen Kaur Sidhu",
    designation: "Senior Professor",
    email: "brahmleen.sidhu@pbi.ac.in",
    linkedin: "https://www.linkedin.com/in/dr-brahmaleen-k-sidhu-96383464/",
    photo: process.env.PUBLIC_URL + '/images/prof2.png',
  },
  {
    name: "Dr. Gaurav Gupta",
    designation: "Senior Professor",
    email: "gaurav.gupta@pbi.ac.in",
    linkedin: "https://www.linkedin.com/in/dr-gaurav-gupta-542b2383/",
    photo: process.env.PUBLIC_URL + '/images/prof3.png',
  },
];

const STUDENTS = [
  {
    name: "Harshul Chawla",
    designation: "Developer",
    email: "harshulchawla1408@gmail.com",
    linkedin: "https://www.linkedin.com/in/harshul-chawla-3b69b02b6/",
    photo: process.env.PUBLIC_URL + '/images/harshul.png',
    phone: "+91-7814272742",
  },
  {
    name: "Harshita",
    designation: "Developer",
    email: "harshitakhandoli@gmail.com",
    linkedin: "https://www.linkedin.com/in/harshitakhandoli//",
    photo: process.env.PUBLIC_URL + '/images/harshita.png',
    phone: "+91-9915590853",
  },
];

const AboutTeam = () => {
  return (
    <section className="cse-team-container" style={{ background: "var(--light-bg)", borderRadius: 20, boxShadow: "0 4px 24px rgba(0,71,171,0.04)", marginTop: 40, marginBottom: 40 }}>
      <h2 className="cse-team-heading">Meet the CSE Team</h2>
      <p className="cse-team-intro">
        We proudly present the CSE team behind the Placement Cell website project of Punjabi University Patiala.<br/>
        This project was developed under the valuable guidance and mentorship of our respected professors:<br/>
        <b>Dr. Gurjit Singh Bhatthal, Dr. Brahmleen Kaur Sidhu, and Dr. Gaurav Gupta</b>.<br/><br/>
        Driven by passion and dedication, our students — <b>Harshul Chawla</b> and <b>Harshita</b> — have built this platform with a focus on real-world application, innovation, and user experience.<br/>
        Together, this project reflects the spirit of teamwork, technical excellence, and the pursuit of academic and professional success.
      </p>

      {/* Professors Section */}
      <div style={{ background: "#eaf3fc", borderRadius: 16, padding: "32px 0 24px 0", marginBottom: 38 }}>
        <h3 className="cse-team-heading" style={{ fontSize: "1.6rem", marginBottom: 24 }}>Professors & Mentors</h3>
        <div className="cse-team-grid">
          {PROFESSORS.map((prof, idx) => (
            <div className="cse-team-card" key={prof.name} tabIndex={0} aria-label={`Profile of ${prof.name}`}>
              <img src={prof.photo} alt={prof.name} className="cse-team-photo" />
              <div className="cse-team-info">
                <h2>{prof.name}</h2>
                <div className="cse-team-role">{prof.designation}</div>
                <a href={`mailto:${prof.email}`} className="cse-team-email">{prof.email}</a>
                <a
                  href={prof.linkedin}
                  className="cse-team-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn profile of ${prof.name}`}
                >
                  <img src={process.env.PUBLIC_URL + '/images/linkedin.png'} alt="LinkedIn" width={28} height={28} style={{ borderRadius: 6 }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Students Section */}
      <div style={{ background: "#f7fafd", borderRadius: 16, padding: "32px 0 24px 0" }}>
        <h3 className="cse-team-heading" style={{ fontSize: "1.6rem", marginBottom: 24 }}>Student Developers</h3>
        <div className="cse-team-grid">
          {STUDENTS.map((student, idx) => (
            <div className="cse-team-card" key={student.name} tabIndex={0} aria-label={`Profile of ${student.name}`}>
              <img src={student.photo} alt={student.name} className="cse-team-photo" />
              <div className="cse-team-info">
                <h2>{student.name}</h2>
                <div className="cse-team-role">{student.designation}</div>
                <a href={`mailto:${student.email}`} className="cse-team-email">{student.email}</a>
                <a
                  href={student.linkedin}
                  className="cse-team-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn profile of ${student.name}`}
                >
                  <img src={process.env.PUBLIC_URL + '/images/linkedin.png'} alt="LinkedIn" width={28} height={28} style={{ borderRadius: 6 }} />
                </a>
                {student.phone && (
                  <div style={{ fontSize: "0.97rem", color: "#555", marginTop: 8 }}>
                    <span role="img" aria-label="Phone">📞</span> {student.phone}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
