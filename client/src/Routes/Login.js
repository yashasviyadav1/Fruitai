import React, { useState } from 'react';
import '../Styles/Login.css';
import LoginSVG from '../assets/pictures/login.jpg'
import TextInput from '../components/shared/TextInput';
import {useNavigate} from 'react-router-dom';
import fruitai_logo from '../assets/pictures/Fruitai-logo2.png'

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email, password);

  const handleLogin = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (email === "" || password === "") {
      alert('Please enter both email and password.');
    } else if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
    } else if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
    } else {
      navigate('/home');
    }
  };
  

  return (
    <div className='main-container'>
        <div className='left-section'>
            <img className='login-svg' src={LoginSVG}/>
        </div>
        <div className='right-section'>
          <div className='welcome-text'> 
            Welcome back to <span className='special-text'>Fruit.ai</span>
          </div> 
          <div className='login-container'>
              <div className="login-text">Enter Credentials</div>
            <div className='login-content-container'>
                <TextInput placeholder={'Email'} type='text' value={email} setValue={setEmail}/>
                <TextInput placeholder={'Password'} type='password' value={password} setValue={setPassword}/>
                <div className='login-asset submit-button' onClick={()=>{handleLogin()}}>
                  Login
                </div>
              <div>New User? 
                <div className='register-text' onClick={()=>{
                    navigate("/signup");
                }}>
                    Register now 
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Login;