import React from "react";

const cardData = [
  {
    title: "Students",
    desc: "Punjabi University's CSE department attracts the brightest minds, nurturing exceptional talent in the world of technology and innovation.",
    img: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png", // Replace with your own SVG if needed
    link: "#students"
  },
  {
    title: "Departments",
    desc: "Our department proudly offers over  30+ specialized fields, preparing students for the future of computer science.",
    img: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png", // Replace with your own SVG if needed
    link: "#departments"
  },
  {
    title: "Research",
    desc: "The CSE department's dedicated Research and Development Unit supports groundbreaking projects, fostering an environment of innovation and specialized technical exploration.",
    img: "https://cdn-icons-png.flaticon.com/512/2922/2922022.png", // Replace with your own SVG if needed
    link: "#research"
  }
];

const cardStyle = {
  flex: "1 1 300px",
  margin: "1rem",
  padding: "2rem 1.5rem",
  background: "#fff",
  borderRadius: "20px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer"
};

const cardHoverStyle = {
  transform: "translateY(-8px) scale(1.03)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.13)"
};

const imgStyle = {
  height: "90px",
  marginBottom: "1.5rem"
};

const titleStyle = {
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "#1b2e6f",
  margin: "0 0 1rem 0"
};

const descStyle = {
  fontSize: "1rem",
  color: "#444",
  textAlign: "center",
  marginBottom: "1.5rem"
};

const linkStyle = {
  color: "#2257d6",
  fontWeight: 600,
  textDecoration: "none",
  fontSize: "1.1rem",
  marginTop: "auto",
  transition: "color 0.2s"
};

function Card({ title, desc, img, link }) {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{
        ...cardStyle,
        ...(hover ? cardHoverStyle : {})
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={img} alt={title} style={imgStyle} />
      <div style={titleStyle}>{title}</div>
      <div style={descStyle}>{desc}</div>
      <a
        href={link}
        style={{
          ...linkStyle,
          color: hover ? "#0a2e7b" : "#2257d6"
        }}
      >
        Read More
      </a>
    </div>
  );
}

export default function IITDelhiValues() {
  return (
    <div style={{
      background: "linear-gradient(90deg, #f6faff 0%, #e7f0fd 100%)",
      minHeight: "80vh",
      padding: "3rem 1rem"
    }}>
      <div style={{
        textAlign: "center",
        color: "#1b2e6f",
        fontWeight: 800,
        fontSize: "2.5rem",
        marginBottom: "2.5rem"
      }}>
        Our Students, Departments and Research
      </div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem"
      }}>
        {cardData.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}
