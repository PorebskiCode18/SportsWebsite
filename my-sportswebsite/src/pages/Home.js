import React from 'react';
import AppHero from '../Components/hero';
import AppAbout from '../Components/about';
import AppTeams from '../Components/teams';

const Home = () => {
  return (
    <div className="">
      <header id="home" className="w-full bg-white shadow-md">
        <AppHero />
      </header>

      <section id="about" className="w-full bg-gray-200">
        <AppAbout />
      </section>
      
      <main id="teams" className="w-full bg-gray-300 shadow-md">
        <AppTeams />
      </main>

      
    </div>
  );
};

export default Home;