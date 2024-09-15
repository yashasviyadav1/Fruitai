import React from 'react';
import '../Styles/About.css'; // Assuming you have a CSS file for styles
import { useNavigate } from 'react-router-dom'; // Using React Router's hook for navigation

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      {/* Navigation Buttons in the top-left corner */}
      <div className="nav-buttons">
        <div className="nav-button" onClick={() => navigate('/home')}>Home</div>
        <div className="nav-button" onClick={() => navigate('/faq')}>FAQs</div>
        <div className="nav-button" onClick={() => navigate('/chatbot')}>Chatbot</div>
      </div>

      <h1>About Fruit.AI</h1>
      <p>
        Welcome to <strong>Fruit.AI</strong>, your AI-powered fruit companion! Whether you're a seasoned fruit enthusiast or just starting to explore the world of fruits, our chatbot is here to assist you. We provide personalized recommendations based on your dietary preferences and health goals, helping you incorporate the best fruits into your daily routine.
      </p>
      <p>
        With <strong>Fruit.AI</strong>, you'll have access to a wealth of information, including nutritional facts, seasonal recommendations, and creative fruit ideas. We aim to make your fruit experience both enjoyable and informative, empowering you to make healthier choices every day.
      </p>
    </div>
  );
};

export default About;

