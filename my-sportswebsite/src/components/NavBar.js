import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate and useLocation
import Home from '../pages/Home';
import Matchups from '../pages/Matchups';
import Injuries from '../pages/Injuries';
import DepthCharts from '../pages/DepthChart';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFootballBall } from "react-icons/fa";

const NavBar = () => {
    const [nav, setNav] = useState(true);
    const location = useLocation(); // Access the current location
    const navigate = useNavigate(); // Access the navigate function

    const handleNav = () => {
        setNav(!nav);
    };

    // A function to check if the current page is the one you're looking for
    const isActive = (path) => {
        return location.pathname === path ? 'text-[#00df9a]' : 'text-white'; // Active page will have a different color
    };

    // Custom click handler to navigate and scroll to the section
    const handleClick = (e, to, section) => {
        e.preventDefault(); // Prevent the default behavior of the anchor tag
        navigate(to); // Navigate to the path using React Router
    
        setTimeout(() => {
            const element = document.getElementById(section); // Find the element by ID
            if (element) {
                if (section === 'home' || section === 'about') {
                    // Normal scroll to the top for "home" and "about"
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else if (section === 'teams') {
                    // Scroll 60% down for "AFC"
                    if (e.target.textContent === 'AFC Teams') {
                        const elementHeight = element.clientHeight;
                        const scrollPosition = element.offsetTop + (elementHeight * 0.46); // 60% of the way down
                        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
                    } else {
                        // Scroll to the top for "Teams"
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            }
        }, 0); // Delay scroll to ensure the page updates before scrolling
    };
    return (
        <div className='flex fixed z-50 justify-between items-center h-15 w-full mx-auto px-4 text-white bg-black'>
            <div>
                <FaFootballBall />
            </div>
            <ul className='hidden md:flex'>
                <li className='p-4'>
                    <Link 
                        to="/" 
                        className={`text-white hover:text-gray-300 ${isActive('/')}`} 
                        onClick={(e) => handleClick(e, '/', 'home')} // Scroll to 'home' after navigation
                    >
                        Home
                    </Link>
                </li>
                <li className='p-4'>
                    <Link 
                        to="/" 
                        className={`text-white hover:text-gray-300 ${isActive('/')}`} 
                        onClick={(e) => handleClick(e, '/', 'about')} // Scroll to 'about' after navigation
                    >
                        About
                    </Link>
                </li>
                <li className='p-4'>
                    <Link 
                        to="/" 
                        className={`text-white hover:text-gray-300 ${isActive('/')}`}
                        onClick={(e) => handleClick(e, '/', 'teams')} // Scroll to 'about' after navigation

                    >
                        NFC Teams
                    </Link>
                </li>
                <li className='p-4'>
                    <Link 
                        to="/" 
                        className={`text-white hover:text-gray-300 ${isActive('/')}`}
                        onClick={(e) => handleClick(e, '/', 'teams')} // Scroll to 'about' after navigation

                    >
                        AFC Teams
                    </Link>
                </li>
                <li className='p-4'>
                    <Link 
                        to="/matchups" 
                        className={`text-white hover:text-gray-300 ${isActive('/matchups')}`}
                    >
                        Matchups
                    </Link>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed hidden'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>MY PORTFOLIO.</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>
                        <Link 
                            to="/" 
                            className={`text-white hover:text-gray-300 ${isActive('/')}`} 
                            onClick={(e) => handleClick(e, '/', 'home')} // Scroll to 'home' on mobile
                        >
                            Home
                        </Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link 
                            to="/" 
                            className={`text-white hover:text-gray-300 ${isActive('/')}`} 
                            onClick={(e) => handleClick(e, '/', 'about')} // Scroll to 'about' on mobile
                        >
                            About
                        </Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link 
                            to="/" 
                            className={`text-white hover:text-gray-300 ${isActive('/')}`}
                            onClick={(e) => handleClick(e, '/', 'teams')}
                        >
                            NFC Teams
                        </Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link 
                            to="/" 
                            className={`text-white hover:text-gray-300 ${isActive('/')}`}
                            onClick={(e) => handleClick(e, '/', 'teams')}
                        >
                            AFC Teams
                        </Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link 
                            to="/matchups" 
                            className={`text-white hover:text-gray-300 ${isActive('/matchups')}`}
                        >
                            Matchups
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const App = () => (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matchups" element={<Matchups />} />
            <Route path="/depth-charts/:homeTeamId/:awayTeamId/:currentWeek" element={<DepthCharts />} />
        </Routes>
    </Router>
);

export default App;