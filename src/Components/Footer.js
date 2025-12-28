import React from "react";
import { Link } from "react-router-dom";

const footerBg = "rgb(27, 46, 111)";
const textColor = "#fff";
const linkColor = "#8cb7ff";
const sectionTitle = { fontWeight: 700, fontSize: "1.1rem", marginBottom: 10, letterSpacing: "0.01em" };
const iconStyle = { width: 24, height: 24, marginRight: 10, verticalAlign: "middle", opacity: 0.92, cursor: "pointer" };

export default function Footer() {
  return (
    <div style={{
      background: footerBg,
      color: textColor,
      padding: "2.5rem 2vw 1.2rem 2vw",
      fontFamily: "Inter, Arial, sans-serif",
      fontSize: "1.01rem"
    }}>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
        maxWidth: 1300,
        margin: "0 auto"
      }}>
        {/* Logo & Address */}
        <div style={{ flex: "1 1 250px", minWidth: 220, margin: "1rem 0" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
            <img src="https://static.toiimg.com/thumb/msid-84977515,width-400,resizemode-4/84977515.jpg"
              alt="OCS" style={{ width: 42, marginRight: 9, background: "#fff", borderRadius: "40%" }} />
            <span style={{ fontWeight: 700, fontSize: "1.5rem", letterSpacing: "0.01em", color: "#ffd700" }}>Placement Cell Office</span>
          </div>
          <div style={{ lineHeight: 1.5, marginBottom: 10 }}>
            <br />
            Ground Floor, UCOE Building,<br />
            Punjabi University, Patiala - 147002
          </div>
          <div>
            <a href="https://youtube.com" style={{ color: linkColor }}>
              <svg style={iconStyle} fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.108-2.115C19.137 3.5 12 3.5 12 3.5s-7.137 0-9.39.571A2.994 2.994 0 0 0 .501 6.186C0 8.438 0 12 0 12s0 3.563.501 5.814a2.994 2.994 0 0 0 2.109 2.115C4.863 20.5 12 20.5 12 20.5s7.137 0 9.39-.571a2.994 2.994 0 0 0 2.108-2.115C24 15.563 24 12 24 12s0-3.562-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://linkedin.com" style={{ color: linkColor }}>
              <svg style={iconStyle} fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.27h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.18c.41-.59 1.22-1.18 2-1.18 2.21 0 4 1.79 4 4v5z"/></svg>
            </a>
            <a href="https://instagram.com" style={{ color: linkColor }}>
              <svg style={iconStyle} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.314.974.974 1.252 2.241 1.314 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.314 3.608-.974.974-2.241 1.252-3.608 1.314-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.314-.974-.974-1.252-2.241-1.314-3.608C2.175 15.646 2.163 15.266 2.163 12s.012-3.584.07-4.849c.062-1.366.34-2.633 1.314-3.608.974-.974 2.241-1.252 3.608-1.314C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.782.131 4.672.414 3.678 1.408c-.994.994-1.277 2.104-1.336 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.27.342 2.38 1.336 3.374.994.994 2.104 1.277 3.374 1.336C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.27-.059 2.38-.342 3.374-1.336.994-.994 1.277-2.104 1.336-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.27-.342-2.38-1.336-3.374-.994-.994-2.104-1.277-3.374-1.336C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div style={{ flex: "1 1 180px", minWidth: 160, margin: "1rem 0" }}>
          <div style={sectionTitle}>USEFUL LINKS</div>
          <div><a href="#" style={{ color: linkColor, textDecoration: "none" }}>Home</a></div>
          <div><a href="#" style={{ color: linkColor, textDecoration: "none" }}>Downloads</a></div>
          <div><a href="#" style={{ color: linkColor, textDecoration: "none" }}>Departments</a></div>
          <div><a href="#" style={{ color: linkColor, textDecoration: "none" }}>Administration</a></div>
          <div><a href="#" style={{ color: linkColor, textDecoration: "none" }}>Past Recruiters</a></div>
          <div><a href="#" style={{ color: linkColor, textDecoration: "none" }}>Student Team</a></div>
        </div>

        {/* Direct Links & Contact */}
        <div style={{ flex: "1 1 240px", minWidth: 200, margin: "1rem 0" }}>
          {/* <div style={sectionTitle}>DIRECT LINKS</div>
          <div><a href="#" style={{ color: linkColor, textDecoration: "none" }}>R&D and NEWS</a></div>
          <div><a href="#" style={{ color: linkColor, textDecoration: "none" }}>Media Report</a></div>
          <div><a href="#" style={{ color: linkColor, textDecoration: "none" }}>PU Home</a></div>
          <div><a href="#" style={{ color: linkColor, textDecoration: "none" }}>PU Webmail</a></div>
          <div><a href="#" style={{ color: linkColor, textDecoration: "none" }}>PU Curriculum</a></div>
          <div><a href="#" style={{ color: linkColor, textDecoration: "none" }}>Academic Calendar</a></div> */}
          <button style={{
            margin: "15px 0 8px 0",
            padding: "7px 22px",
            borderRadius: 7,
            background: "#fff",
            color: footerBg,
            border: "none",
            fontWeight: 700,
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
          }}>CONTACT US</button>
          <div style={{ marginBottom: 5 }}>
            <div style={{ fontWeight: 700 }}>Phone:</div>
            <a href="tel:+91-175-304-6366" style={{ color: linkColor, textDecoration: "none" }}>+91-175-304-6366</a>
          </div>
          <div style={{ fontSize: "0.98rem", marginBottom: 2 }}>
            <span style={{ fontWeight: 700 }}>For placements:</span> <a href="mailto:placement@pbi.ac.in" style={{ color: linkColor }}>placement@pbi.ac.in</a>
          </div>
          <div style={{ fontSize: "0.98rem", marginBottom: 2 }}>
            <span style={{ fontWeight: 700 }}>For internships:</span> <a href="mailto:internship@pbi.ac.in" style={{ color: linkColor }}>internship@pbi.ac.in</a>
          </div>
          <div style={{ fontSize: "0.98rem", marginBottom: 2 }}>
            <span style={{ fontWeight: 700 }}>For PhD placements:</span> <a href="mailto:phd_placement@pbi.ac.in" style={{ color: linkColor }}>phd_placement@pbi.ac.in</a>
          </div>
          <div style={{ marginTop: 6, fontSize: "0.93rem", color: "#c7d5f7" }}>
            Updated on: 26th April, 2025
          </div>
        </div>

        {/* Map & Visitor Counter */}
        <div style={{ flex: "1 1 280px", minWidth: 220, margin: "1rem 0" }}>
          <div style={sectionTitle}>Location</div>
          <div style={{
            width: "100%",
            maxWidth: 320,
            height: 150,
            borderRadius: 12,
            overflow: "hidden",
            marginBottom: 10,
            border: "2px solid #fff"
          }}>
            <iframe
              title="Punjabi University Patiala Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps?q=Punjabi+University,+Patiala,+Punjab,+India&output=embed"
              allowFullScreen
            ></iframe>
          </div>
          <div style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: 2 }}>VISITOR COUNTER</div>
          <div style={{ fontSize: "0.98rem" }}>Number of visitors: <span style={{ fontWeight: 700, color: "#ffd700" }}>60</span></div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div style={{
        textAlign: "center",
        fontSize: "1rem",
        color: "#b7c6ee",
        borderTop: "1px solid #31407e",
        marginTop: 30,
        paddingTop: 18
      }}>
        © Copyright <span style={{ fontWeight: 700, color: "#fff" }}>Punjabi university</span>. All Rights Reserved<br />
        Developed by <span style={{ color: "#8cb7ff", fontWeight: 600 }}><Link to="/cseteam" style={{ color: "#8cb7ff", textDecoration: "underline", fontWeight: 600 }}>CSE Team</Link></span>
      </div>
    </div>
  );
}
