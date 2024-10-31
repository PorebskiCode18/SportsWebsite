import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Matchups from '../pages/Matchups';
import Injuries from '../pages/Injuries';
import { AiOutlineMenu , AiOutlineClose} from "react-icons/ai";
import { FaFootballBall } from "react-icons/fa";


const NavBar = () => {
    const[nav,setNav]= useState(true)
    
    const handleNav= () => {
        setNav(!nav)
    }

  return (
    <Router>
        <div className='flex fixed z-50 justify-between items-center h-15 w-full mx-auto px-4 text-white bg-black'>
            <div>
                <FaFootballBall/>
            </div>
            <ul className='hidden md:flex'>
                <li className='p-4'>
                    <Link to="/">Home</Link>
                </li>
                <li className='p-4'>
                    <Link to="/matchups">Matcups</Link>
                </li>
                <li className='p-4'>
                    <Link to="/injuries">Injuries</Link> 
                </li>
            </ul>
            <div onClick={handleNav}  className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div> 
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed hidden'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>MY PORTFOLIO.</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to="/matchups">Matcups</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to="/injuries">Injuries</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matchups" element={<Matchups />} />
            <Route path="/injuries" element={<Injuries />} />
        </Routes>
    </Router>
  )
}

export default NavBar