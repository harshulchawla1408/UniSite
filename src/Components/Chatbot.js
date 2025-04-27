import React, { useState } from 'react';
import './Chatbot.css'; // CSS ke liye alag file bana lena

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id="chatbot-icon" onClick={toggleChatbot}>💬</div>

      {isOpen && (
        <div id="chatbot-popup">
          <button id="close-btn" onClick={toggleChatbot}>Close</button>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/5EixSxQS2I1AHKnG8e0P-"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Placement Chatbot"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Chatbot;
