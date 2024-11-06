import React from 'react'
import AppHero from '../Components/hero';
import AppAbout from '../Components/about';
import AppTeams from '../Components/teams';
import AppSearch from '../Components/searchTeams';


const Home = () => {
  return (
    <div className=' pt-15'>

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