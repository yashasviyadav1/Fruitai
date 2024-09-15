// import { useEffect } from 'react';
// import '../Styles/Translate.css'; // If you want to add specific styles for translate

// const Translate = () => {

//     //Load Google Translate script on component mount
//     useEffect(() => {
//         const addGoogleTranslateScript = () => {
//             const script = document.createElement('script');
//             script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//             script.async = true;
//             document.body.appendChild(script);

//             window.googleTranslateElementInit = () => {
//                 new window.google.translate.TranslateElement({
//                     pageLanguage: 'en',
//                     includedLanguages: 'en,es,fr,de,hi', // Add languages you want to support
//                     layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//                 }, 'google_translate_element');
//             };
//         };

//         addGoogleTranslateScript();
//     }, []);
    

//     return (
//         <div className="translate-container">
//             <h1> Google Translate </h1>
//             <div id="google_translate_element"></div> {/* This is where Google Translate widget will be loaded */}
//         </div>
//     );
// };

// export default Translate;


//------------------------------------------------------------------------------------------

import React, { useEffect, useState } from 'react';
import '../Styles/Translate.css'; // Import your CSS if needed

import fruitai_logo from '../assets/pictures/Fruitai-logo2.png';
import { useNavigate } from 'react-router-dom';

const Translate = () => {

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the page has already been reloaded
    if (!localStorage.getItem('reloaded')) {
      localStorage.setItem('reloaded', 'true');
      window.location.reload();
    }

    // Check if Google Translate script already exists
    if (document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]')) {
      return;
    }

    // Define the Google Translate initialization function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };

    // Load Google Translate script
    const script = document.createElement('script');
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      const script = document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]');
      if (script) {
        document.body.removeChild(script);
      }
      // Optionally, clear the Google Translate initialization function if necessary
      // Note: This might not be necessary and could cause issues.
      // delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="translate-container">

      <div className='translate-navbar'>
        <img src={fruitai_logo} className='translate-logo'/>
      </div>

      <div className='font-semibold text-lg text-white py-4'>
        To experience Fruit.ai in different language, choose from below options..
      </div>

      <div className='text-red-300 text-lg font-bold'>
         in case 'Google Translator' button is not visible, Reload the page..
      </div>

      <div className='translate-content-container '>
        <div className='translate-content-inner-container'>
          <div id="google_translate_element"></div>
          <div className='translate-buttons-container'>
            <div className='translate-buttons cursor-pointer' onClick={()=>navigate('/home')}>
                Home
            </div>
            <div className='translate-buttons cursor-pointer'  onClick={()=>navigate('/faq')}>
                FAQs
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Translate;



//------------------------------------------------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import '../Styles/Translate.css';
// import fruitai_logo from '../assets/pictures/Fruitai-logo2.png';
// import { useNavigate } from 'react-router-dom';

// const Translate = () => {
//   const navigate = useNavigate();
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const checkGoogleTranslate = () => {
//       if (window.google && window.google.translate) {
//         // Google Translate is loaded, show the element
//         const element = document.getElementById('google_translate_element');
//         if (element) {
//           element.style.display = 'block';
//           setIsLoaded(true);
//         }
//       } else {
//         // If not loaded yet, check again after a short delay
//         setTimeout(checkGoogleTranslate, 100);
//       }
//     };

//     checkGoogleTranslate();

//     // Cleanup function
//     return () => {
//       const element = document.getElementById('google_translate_element');
//       if (element) {
//         element.style.display = 'none';
//       }
//     };
//   }, []);

//   return (
//     <div className="translate-container">
//       <div className='translate-navbar'>
//         <img src={fruitai_logo} alt="Fruit.ai Logo" className='translate-logo'/>
//       </div>

//       <div className='font-semibold text-lg text-white py-4'>
//         To experience Fruit.ai in a different language, choose from the options below:
//       </div>

//       {!isLoaded && (
//         <div className='text-yellow-300 text-lg font-bold'>
//           Loading Google Translate... Please wait.
//         </div>
//       )}

//       <div className='translate-content-container'>
//         <div className='translate-content-inner-container'>
//           <div id="google_translate_element"></div>
//           <div className='translate-buttons-container'>
//             <button className='translate-buttons cursor-pointer' onClick={() => navigate('/home')}>
//               Home
//             </button>
//             <button className='translate-buttons cursor-pointer' onClick={() => navigate('/faq')}>
//               FAQs
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Translate;

// //------------------------------------------------------------------------------------------
