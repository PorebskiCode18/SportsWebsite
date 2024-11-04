import React from 'react'
import AppHero from '../components/hero';
import AppAbout from '../components/about';
import AppTeams from '../components/teams';
import AppSearch from '../components/searchTeams';


const Home = () => {
  return (
    <div className=' pt-20'>

<header id="header" className="w-full bg-white shadow-md">
        <AppHero className="m-0" />
      </header>

      <main id="header" className="w-full bg-gray-300 shadow-md">
          <AppAbout />
          <AppTeams />
          <AppSearch />

        </main>

    </div>
  )
}

export default Home