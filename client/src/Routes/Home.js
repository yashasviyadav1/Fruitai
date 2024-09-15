
import '../Styles/Home.css';
import fruitai_logo from '../assets/pictures/Fruitai-logo2.png';
import { IoIosChatboxes } from "react-icons/io";
import { FaQuoteLeft,FaInfoCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { MdGTranslate } from "react-icons/md";
import { useState } from 'react';

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='home-main-container'>
            <div className='navbar'>
                <img className='navbar-logo' src={fruitai_logo}/>
            </div>
            <div className='home-content-container'>
                <div className='home-content-container-title'>
                    Explore Different Tabs...
                </div>
                <div className='home-cards-container'>
                    <div className='home-cards' onClick={()=>navigate('/chatbot')}>
                        <IoIosChatboxes />
                        Chatbot
                    </div>
                    <div className='home-cards' onClick={()=>navigate('/faq')}>
                        <FaQuoteLeft />
                        FAQs
                    </div>
                    <div className='home-cards' onClick={()=>navigate('/about')}>
                        <FaInfoCircle />
                        About
                    </div>
                    <div className='home-cards translate-button translate-card' onClick={()=>navigate('/translate')}>
                        <MdGTranslate fontSize={50} />
                        <div>Google Translate</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
