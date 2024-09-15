


import React from 'react';
import '../Styles/Chatbot.css';
import fruitai_logo from '../assets/pictures/Fruitai-logo2.png';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
    const navigate = useNavigate();

    return (
        <div className='chatbot-container'>
            <div className='chatbot-container-navbar'> 
                <div className='navbar-links cursor-pointer underline' onClick={() => navigate('/home')}>Home</div>
                <img className='navbar-logo' src={fruitai_logo} alt="Fruitai Logo"/>
                <div className='navbar-links cursor-pointer underline' onClick={() => navigate('/faq')}>FAQs</div>
            </div>

            <div className='chatbot-inner-container'>
                <iframe 
                    src="https://bot.orimon.ai/?tenantId=1a46de38-99c0-40bf-bf3b-c437204fa0e0&fullScreenBot=true" 
                    height="100%" 
                    width="100%" 
                    frameBorder="0"
                    title="Chatbot"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                />
            </div>
        </div>
    );
};

export default Chatbot;