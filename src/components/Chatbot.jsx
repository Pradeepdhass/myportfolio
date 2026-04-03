import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 How can I help you today?", type: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (text = inputValue) => {
    if (!text.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text, type: "user" }]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const reply = botReply(text);
      setMessages(prev => [...prev, { text: reply, type: "bot" }]);
      setIsTyping(false);
    }, 900);
  };

  const botReply = (q) => {
    q = q.toLowerCase();
    if (["hi", "hello", "hey"].some(w => q.includes(w))) {
      return "Hi 👋 I can help you with education, skills, projects, or contact details. What would you like to know?";
    }
    if (q.includes("skill")) {
      return "I specialize in Web Development, UI/UX Design, JavaScript, Bootstrap, and modern frontend technologies.";
    }
    if (q.includes("project")) {
      return "I’ve worked on web applications, UI/UX designs, and academic projects. You can check them in the Projects section.";
    }
    if (q.includes("education") || q.includes("study")) {
      return "I’m currently pursuing Msc degree with a strong focus on software development and design.";
    }
    if (q.includes("contact") || q.includes("email")) {
      return "You can contact me via the Contact section or directly through email listed on the website.";
    }
    return "I can help you with skills, projects, education, or contact info. Try asking about one of these 🙂";
  };

  const handleQuickReply = (topic) => {
    handleSendMessage(topic);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <div 
        className="chatbot-toggle" 
        id="chatbotToggle" 
        onClick={() => setIsOpen(true)}
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        💬
      </div>

      <div 
        className="chatbot" 
        id="chatbotBox" 
        style={{ display: isOpen ? 'flex' : 'none' }}
      >
        <div className="chat-header">
          <div className="avatar">🤖</div>
          <div className="title">
            <h4>Pradeep Assistant</h4>
            <span>Online</span>
          </div>
          <button id="closeChat" onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <div className="chat-body" id="chatMessages">
          {messages.map((msg, index) => (
            <div key={index} className={`bubble ${msg.type}`}>
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div className="bubble bot typing">
              <span></span><span></span><span></span>
            </div>
          )}
          <div ref={messagesEndRef} />
          
          <div className="quick-replies" id="quickReplies">
            <button onClick={() => handleQuickReply("skills")}>Skills</button>
            <button onClick={() => handleQuickReply("projects")}>Projects</button>
            <button onClick={() => handleQuickReply("contact")}>Contact</button>
          </div>
        </div>

        <div className="chat-footer">
          <input
            type="text"
            id="userInput"
            placeholder="Ask something..."
            autoComplete="off"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button id="sendBtn" onClick={() => handleSendMessage()}>➤</button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
