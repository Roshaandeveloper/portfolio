import React from 'react';
import '../assets/styles/FloatingChat.scss'; // Custom styles

const FloatingChat = () => {
  return (
    <a
    href="https://wa.me/923104189775"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-chat"
    >
              <span className="chat-text">Let's Connect</span>

      <div className="chat-icon">
        <img
          src={require('../assets/images/min.jpg')}
          alt="Chat with me"
          className="chat-avatar"
        />
      </div>
      
    </a>
    
  );
  
};

export default FloatingChat;
