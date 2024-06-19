import { useState, useEffect, useRef } from 'react';

import sun_icon from './img/sun.svg';
import moon_icon from './img/moon.svg';

import './style.css'

const ButtonDarkMode = () => {

    const [darkMode, setDarkMode] = useState('light');
    const darkButtonRef = useRef(null);

    useEffect(() => {
        if(darkMode === 'dark'){
            document.body.classList.add('dark');
            darkButtonRef.current.classList.add('dark-mode-btn--active');
        }else{
            document.body.classList.remove('dark');
            darkButtonRef.current.classList.remove('dark-mode-btn--active');
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }

    return (
        <button ref={darkButtonRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun_icon} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon_icon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
}
 
export default ButtonDarkMode;