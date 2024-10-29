import React from 'react'
import AppHero from '../components/hero';
import AppAbout from '../components/about';
import AppTeams from '../components/teams';


const Home = () => {
  return (
    <div className="App font-sans bg-gray-100 min-h-screen flex flex-col">
      
    <header id="header" className="Sw-full bg-white shadow-md">
      <AppHero className="m-0" />
    </header>

    <main id="header" className="w-full bg-black shadow-md">
        <AppAbout />
        <AppTeams />
      </main>

    {/* <div className=' pt-20'>Home */}

    </div>
  )
}

export default Home