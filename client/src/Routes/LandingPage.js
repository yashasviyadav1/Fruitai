
import '../Styles/LandingPage.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/pictures/Fruitai-logo1.png';

const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <div className='landing-main-container'>
            <div className='logo-container'>
                <img className='image-logo' src={logo} />
            </div>
            <div className='content-container'>
                <div>
                    'Healthier lifestyle starts with better choices.'
                </div>
                <div>
                    Fruit.ai offers you a comprehensive suite of tools to enhance your health journey.
                </div>
                <div>Join Us Now...</div>
                <div className='buttons-container'>
                    <div className='buttons' onClick={()=>navigate('/login')}>Login</div>
                    <div className='buttons' onClick={()=>navigate('/signup')}>Signup</div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;