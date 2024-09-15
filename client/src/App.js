import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Routes/Login'
import Signup from './Routes/Signup';
import LandingPage from './Routes/LandingPage';
import Home from './Routes/Home';
import Faq from './Routes/Faq';
import Chatbot from './Routes/Chatbot';
import Translate from './Routes/Translate.js';
import About from './Routes/About.js';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<LandingPage/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/faq' element={<Faq/>}/>
              <Route path='/chatbot' element={<Chatbot/>}/>
              <Route path='/translate' element={<Translate/>}/>
              <Route path='/about' element={<About/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
