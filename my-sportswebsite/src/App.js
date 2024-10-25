import AppHero from './Components/hero';
import AppAbout from './Components/about';

import './App.css';

function App() {
  return (
    <div className="App font-sans bg-gray-100 min-h-screen flex flex-col">
      
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
