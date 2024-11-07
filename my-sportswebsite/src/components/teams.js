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

import React from 'react';
import { useNavigate } from 'react-router-dom';



export default function AppTeams() {
  const navigate = useNavigate();
  const handleTeamPage = (teamId) => {
      navigate(`/team-info/${teamId}`);
  };

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
            <img src={cardinals} alt="Cardinals" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('de760528-1dc0-416a-a978-b510d20692ff')} />
            <h3 className="text-2xl font-semibold mt-4">Arizona Cardinals</h3>
          </div>
          <div className="text-center">
            <img src={falcons} alt="Falcons" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('e6aa13a4-0055-48a9-bc41-be28dc106929')} />
            <h3 className="text-2xl font-semibold mt-4">Atlanta Falcons</h3>
          </div>
          <div className="text-center">
            <img src={panthers} alt="Panthers" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('f14bf5cc-9a82-4a38-bc15-d39f75ed5314')}/>
            <h3 className="text-2xl font-semibold mt-4">Carolina Panthers</h3>
          </div>
          <div className="text-center">
            <img src={bears} alt="Bears" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('7b112545-38e6-483c-a55c-96cf6ee49cb8')}/>
            <h3 className="text-2xl font-semibold mt-4">Chicago Bears</h3>
          </div>
          <div className="text-center">
            <img src={cowboys} alt="Cowboys" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('e627eec7-bbae-4fa4-8e73-8e1d6bc5c060')}/>
            <h3 className="text-2xl font-semibold mt-4">Dallas Cowboys</h3>
          </div>
          <div className="text-center">
            <img src={lions} alt="Lions" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('c5a59daa-53a7-4de0-851f-fb12be893e9e')}/>
            <h3 className="text-2xl font-semibold mt-4">Detroit Lions</h3>
          </div>
          <div className="text-center">
            <img src={packers} alt="Packers" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('a20471b4-a8d9-40c7-95ad-90cc30e46932')}/>
            <h3 className="text-2xl font-semibold mt-4">Green Bay Packers</h3>
          </div>
          <div className="text-center">
            <img src={rams} alt="Rams" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('2eff2a03-54d4-46ba-890e-2bc3925548f3')}/>
            <h3 className="text-2xl font-semibold mt-4">Los Angeles Rams</h3>
          </div>
          <div className="text-center">
            <img src={vikings} alt="Vikings" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('33405046-04ee-4058-a950-d606f8c30852')}/>
            <h3 className="text-2xl font-semibold mt-4">Minnesota Vikings</h3>
          </div>
          <div className="text-center">
            <img src={saints} alt="Saints" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('0d855753-ea21-4953-89f9-0e20aff9eb73')}/>
            <h3 className="text-2xl font-semibold mt-4">New Orleans Saints</h3>
          </div>
          <div className="text-center">
            <img src={giants} alt="Giants" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('04aa1c9d-66da-489d-b16a-1dee3f2eec4d')}/>
            <h3 className="text-2xl font-semibold mt-4">New York Giants</h3>
          </div>
          <div className="text-center">
            <img src={eagles} alt="Eagles" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('386bdbf9-9eea-4869-bb9a-274b0bc66e80')}/>
            <h3 className="text-2xl font-semibold mt-4">Philadelphia Eagles</h3>
          </div>
          <div className="text-center">
            <img src={niners} alt="49ers" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('f0e724b0-4cbf-495a-be47-013907608da9')}/>
            <h3 className="text-2xl font-semibold mt-4">San Francisco 49ers</h3>
          </div>
          <div className="text-center">
            <img src={seahawks} alt="Seahawks" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('3d08af9e-c767-4f88-a7dc-b920c6d2b4a8')}/>
            <h3 className="text-2xl font-semibold mt-4">Seattle Seahawks</h3>
          </div>
          <div className="text-center">
            <img src={buccaneers} alt="Buccaneers" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('4254d319-1bc7-4f81-b4ab-b5e6f3402b69')}/>
            <h3 className="text-2xl font-semibold mt-4">Tampa Bay Buccaneers</h3>
          </div>
          <div className="text-center">
            <img src={commanders} alt="Commanders" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('22052ff7-c065-42ee-bc8f-c4691c50e624')}/>
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
            <img src={ravens} alt="Ravens" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('ebd87119-b331-4469-9ea6-d51fe3ce2f1c')}/>
            <h3 className="text-2xl font-semibold mt-4">Baltimore Ravens</h3>
          </div>
          <div className="text-center">
            <img src={bills} alt="Bills" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('768c92aa-75ff-4a43-bcc0-f2798c2e1724')}/>
            <h3 className="text-2xl font-semibold mt-4">Buffalo Bills</h3>
          </div>
          <div className="text-center">
            <img src={bengals} alt="Bengals" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('ad4ae08f-d808-42d5-a1e6-e9bc4e34d123')}/>
            <h3 className="text-2xl font-semibold mt-4">Cincinnati Bengals</h3>
          </div>
          <div className="text-center">
            <img src={browns} alt="Browns" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('d5a2eb42-8065-4174-ab79-0a6fa820e35e')}/>
            <h3 className="text-2xl font-semibold mt-4">Cleveland Browns</h3>
          </div>
          <div className="text-center">
            <img src={broncos} alt="Broncos" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('ce92bd47-93d5-4fe9-ada4-0fc681e6caa0')}/>
            <h3 className="text-2xl font-semibold mt-4">Denver Broncos</h3>
          </div>
          <div className="text-center">
            <img src={texans} alt="Texans" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('82d2d380-3834-4938-835f-aec541e5ece7')}/>
            <h3 className="text-2xl font-semibold mt-4">Houston Texans</h3>
          </div>
          <div className="text-center">
            <img src={colts} alt="Colts" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9')}/>
            <h3 className="text-2xl font-semibold mt-4">Indianapolis Colts</h3>
          </div>
          <div className="text-center">
            <img src={jaguars} alt="Jaguars" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de')}/>
            <h3 className="text-2xl font-semibold mt-4">Jacksonville Jaguars</h3>
          </div>
          <div className="text-center">
            <img src={chiefs} alt="Chiefs" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('6680d28d-d4d2-49f6-aace-5292d3ec02c2')}/>
            <h3 className="text-2xl font-semibold mt-4">Kansas City Chiefs</h3>
          </div>
          <div className="text-center">
            <img src={raiders} alt="Raiders" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576')}/>
            <h3 className="text-2xl font-semibold mt-4">Las Vegas Raiders</h3>
          </div>
          <div className="text-center">
            <img src={chargers} alt="Chargers" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('1f6dcffb-9823-43cd-9ff4-e7a8466749b5')}/>
            <h3 className="text-2xl font-semibold mt-4">Los Angeles Chargers</h3>
          </div>
          <div className="text-center">
            <img src={dolphins} alt="Dolphins" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('4809ecb0-abd3-451d-9c4a-92a90b83ca06')}/>
            <h3 className="text-2xl font-semibold mt-4">Miami Dolphins</h3>
          </div>
          <div className="text-center">
            <img src={patriots} alt="Patriots" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('97354895-8c77-4fd4-a860-32e62ea7382a')}/>
            <h3 className="text-2xl font-semibold mt-4">New England Patriots</h3>
          </div>
          <div className="text-center">
            <img src={jets} alt="Jets" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('5fee86ae-74ab-4bdd-8416-42a9dd9964f3')}/>
            <h3 className="text-2xl font-semibold mt-4">New York Jets</h3>
          </div>
          <div className="text-center">
            <img src={steelers} alt="Steelers" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('cb2f9f1f-ac67-424e-9e72-1475cb0ed398')}/>
            <h3 className="text-2xl font-semibold mt-4">Pittsburgh Steelers</h3>
          </div>
          <div className="text-center">
            <img src={titans} alt="Titans" className="w-48 h-48 object-cover rounded-full mx-auto transform hover:scale-105 transition duration-300" onClick={() => handleTeamPage('d26a1ca5-722d-4274-8f97-c92e49c96315')}/>
            <h3 className="text-2xl font-semibold mt-4">Tennessee Titans</h3>
          </div>
        </div>

        <div className="my-32"></div> {/* Space after AFC section */}
      </div>
    </section>
  );
}