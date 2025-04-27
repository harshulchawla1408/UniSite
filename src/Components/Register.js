const styles = {
    heroButton: {
      display: 'inline-block', // Makes the link an inline-block element
      padding: '10px 20px', // Adds padding for better button-like appearance
      backgroundColor: ' #003366', // Background color for the button
      color: '#fff', // Text color
      fontSize: '16px', // Font size for the text
      fontWeight: 'bold', // Makes the text bold
      textAlign: 'center', // Ensures the text is centered
      borderRadius: '5px', // Rounded corners for the button
      textDecoration: 'none', // Removes underline from the link
      margin: '2px auto', // Adds margin to create space above and centers it horizontally
      display: 'block', // Ensures the link behaves like a block element, taking up available width
      width: 'fit-content', // Adjusts the width to the content inside
    },
  };
  
  function Register() {
    return (
      <div style={{ marginTop: '50px' }}>
        {/* Some content above */}
        
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdrYYf-KpGe4BOZ3RmpxM0FxDZUr4-Mv-auSTbT2ybMbrIMHw/viewform?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.heroButton}
        >
          Register for Placements
        </a>
  
        {/* More content below */}
      </div>
    );
  }
  
  export default Register;
  