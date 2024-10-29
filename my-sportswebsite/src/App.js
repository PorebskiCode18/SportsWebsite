import AppHero from './components/hero';
import AppAbout from './components/about';

import React from 'react';
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (      
    <div>
      <NavBar/>

      <header id="header" className="w-full bg-white shadow-md">
        <AppHero className="m-0" />
      </header>

      <main id="header" className="w-full bg-black shadow-md">
          <AppAbout />
        </main>

    </div>
  );
}

export default App;