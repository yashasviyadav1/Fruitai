import React, { useState } from 'react';
import '../Styles/Signup.css';
import SignupSVG from '../assets/pictures/signup.jpg'
import TextInput from '../components/shared/TextInput';
import {useNavigate} from 'react-router-dom';

const Signup = () => {

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate();
    
    const handleSignup = () => {
        // Email validation regex pattern
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
        if (firstName === "") {
          alert('Please enter your first name.');
        } else if (lastName === "") {
          alert('Please enter your last name.');
        } else if (email === "") {
          alert('Please enter your email.');
        } else if (!emailPattern.test(email)) {
          alert('Please enter a valid email address.');
        } else if (password === "") {
          alert('Please enter your password.');
        } else if (password.length < 6) {
          alert('Password must be at least 6 characters long.');
        } else {
          navigate('/home');
        }
      };
      
    return (
            <div className='main-container'>
                <div className='left-section'>
                    <img className='signup-svg' src={SignupSVG}/>
                </div>
                <div className='right-section'>
                    <div className='welcome-text'> 
                        Welcome to <span className='special-text'>Fruit.ai</span>
                    </div>
                    <div className='signup-container'>
                        <div className="signup-text">Fill Details</div>
                        <div className='signup-content-container'>
                            <TextInput placeholder={'First Name'} type='text' value={firstName} setValue={setFirstName}/>
                            <TextInput placeholder={'Last Name'} type='text' value={lastName} setValue={setLastName}/>
                            <TextInput placeholder={'Email'} type='text' value={email} setValue={setEmail}/>
                            <TextInput placeholder={'Create Password'} type='password' value={password} setValue={setPassword}/>
                            <div className='signup-asset submit-button' onClick={()=>handleSignup()}>
                                Signup
                            </div>
                            <div> have an account?
                                <div className='register-text' onClick={()=>{
                                    navigate("/login");
                                }}>
                                Login now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Signup;
