import React from 'react'
import AppHero from '../Components/hero';
import AppAbout from '../Components/about';
import AppTeams from '../Components/teams';

const Home = () => {
  return (
    <div className=' pt-20'>

<header id="header" className="w-full bg-white shadow-md">
        <AppHero className="m-0" />
      </header>

      <main id="header" className="w-full bg-gray shadow-md">
          <AppAbout />
          <AppTeams />

        </main>

    </div>
  )
}

export default Home