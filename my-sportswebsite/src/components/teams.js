import cardinals from './assets/teamLogos/cardinals.png';
import falcons from './assets/teamLogos/falcons.png';
import panthers from './assets/teamLogos/panthers.png';
import bears from './assets/teamLogos/bears.png';
import cowboys from './assets/teamLogos/cowboys.png';
import lions from './assets/teamLogos/lions.png';
import packers from './assets/teamLogos/packers.png';
import rams from './assets/teamLogos/rams.png';
import vikings from './assets/teamLogos/vikings.png';
import saints from './assets/teamLogos/saints.png';
import giants from './assets/teamLogos/giants.png';
import eagles from './assets/teamLogos/eagles.png';
import niners from './assets/teamLogos/niners.png';
import seahawks from './assets/teamLogos/seahawks.png';
import buccaneers from './assets/teamLogos/buccaneers.png';
import commanders from './assets/teamLogos/commanders.png';

import ravens from './assets/teamLogos/ravens.png';
import bills from './assets/teamLogos/bills.png';
import bengals from './assets/teamLogos/bengals.png';
import browns from './assets/teamLogos/browns.png';
import broncos from './assets/teamLogos/broncos.png';
import texans from './assets/teamLogos/texans.png';
import colts from './assets/teamLogos/colts.png';
import jaguars from './assets/teamLogos/jaguars.png';
import chiefs from './assets/teamLogos/chiefs.png';
import raiders from './assets/teamLogos/raiders.png';
import chargers from './assets/teamLogos/chargers.png';
import dolphins from './assets/teamLogos/dolphins.png';
import patriots from './assets/teamLogos/patriots.png';
import jets from './assets/teamLogos/jets.png';
import steelers from './assets/teamLogos/steelers.png';
import titans from './assets/teamLogos/titans.png';

export default function AppTeams() {
  return (
    <section  className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto text-black">

        <div className="my-16"></div> {/* Space between sections */}

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">NFC Teams:</h2>
        </div>

        {/* NFC Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
          <div className="text-center">
            <img src={cardinals} alt="Cardinals" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Arizona Cardinals</h3>
          </div>
          <div className="text-center">
            <img src={falcons} alt="Falcons" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Atlanta Falcons</h3>
          </div>
          <div className="text-center">
            <img src={panthers} alt="Panthers" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Carolina Panthers</h3>
          </div>
          <div className="text-center">
            <img src={bears} alt="Bears" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Chicago Bears</h3>
          </div>
          <div className="text-center">
            <img src={cowboys} alt="Cowboys" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Dallas Cowboys</h3>
          </div>
          <div className="text-center">
            <img src={lions} alt="Lions" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Detroit Lions</h3>
          </div>
          <div className="text-center">
            <img src={packers} alt="Packers" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Green Bay Packers</h3>
          </div>
          <div className="text-center">
            <img src={rams} alt="Rams" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Los Angeles Rams</h3>
          </div>
          <div className="text-center">
            <img src={vikings} alt="Vikings" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Minnesota Vikings</h3>
          </div>
          <div className="text-center">
            <img src={saints} alt="Saints" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">New Orleans Saints</h3>
          </div>
          <div className="text-center">
            <img src={giants} alt="Giants" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">New York Giants</h3>
          </div>
          <div className="text-center">
            <img src={eagles} alt="Eagles" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Philadelphia Eagles</h3>
          </div>
          <div className="text-center">
            <img src={niners} alt="49ers" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">San Francisco 49ers</h3>
          </div>
          <div className="text-center">
            <img src={seahawks} alt="Seahawks" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Seattle Seahawks</h3>
          </div>
          <div className="text-center">
            <img src={buccaneers} alt="Buccaneers" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Tampa Bay Buccaneers</h3>
          </div>
          <div className="text-center">
            <img src={commanders} alt="Commanders" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Washington Commanders</h3>
          </div>
        </div>

        <div className="my-32"></div> {/* Space between NFC and AFC sections */}

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">AFC Teams:</h2>
        </div>

        {/* AFC Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
          <div className="text-center">
            <img src={ravens} alt="Ravens" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Baltimore Ravens</h3>
          </div>
          <div className="text-center">
            <img src={bills} alt="Bills" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Buffalo Bills</h3>
          </div>
          <div className="text-center">
            <img src={bengals} alt="Bengals" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Cincinnati Bengals</h3>
          </div>
          <div className="text-center">
            <img src={browns} alt="Browns" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Cleveland Browns</h3>
          </div>
          <div className="text-center">
            <img src={broncos} alt="Broncos" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Denver Broncos</h3>
          </div>
          <div className="text-center">
            <img src={texans} alt="Texans" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Houston Texans</h3>
          </div>
          <div className="text-center">
            <img src={colts} alt="Colts" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Indianapolis Colts</h3>
          </div>
          <div className="text-center">
            <img src={jaguars} alt="Jaguars" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Jacksonville Jaguars</h3>
          </div>
          <div className="text-center">
            <img src={chiefs} alt="Chiefs" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Kansas City Chiefs</h3>
          </div>
          <div className="text-center">
            <img src={raiders} alt="Raiders" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Las Vegas Raiders</h3>
          </div>
          <div className="text-center">
            <img src={chargers} alt="Chargers" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Los Angeles Chargers</h3>
          </div>
          <div className="text-center">
            <img src={dolphins} alt="Dolphins" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Miami Dolphins</h3>
          </div>
          <div className="text-center">
            <img src={patriots} alt="Patriots" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">New England Patriots</h3>
          </div>
          <div className="text-center">
            <img src={jets} alt="Jets" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">New York Jets</h3>
          </div>
          <div className="text-center">
            <img src={steelers} alt="Steelers" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Pittsburgh Steelers</h3>
          </div>
          <div className="text-center">
            <img src={titans} alt="Titans" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" />
            <h3 className="text-2xl font-semibold mt-4">Tennessee Titans</h3>
          </div>
        </div>

        <div className="my-32"></div> {/* Space after AFC section */}
      </div>
    </section>
  );
}