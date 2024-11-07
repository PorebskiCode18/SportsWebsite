import React from 'react';
import AppHero from '../components/hero';
import AppAbout from '../components/about';
import AppTeams from '../components/teams';

const Home = () => {
  return (
    <div className="pt-15">
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