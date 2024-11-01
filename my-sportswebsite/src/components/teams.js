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
import niners from './assets/teamLogos/49ers.png';
import seahawks from './assets/teamLogos/seahawks.png';
import buccaneers from './assets/teamLogos/buccaneers.png';
import commanders from './assets/teamLogos/commanders.png';

export default function AppTeams() {
    return (
      <section id="teams" className="py-10 bg-gray-100">
        <div className="container mx-auto">

        <div className="my-32"></div> {/* This adds space between the two sections */}

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">NFC Teams:</h2>
          </div>
          
          {/* NFC TEAMS */}

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 px-4 mb-8 md:mb-0">

              {/* Left Side */}

              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-4">

                  <img src={cardinals} alt="Background" className="w-48 h-48 object-cover rounded-full" />
                  <h2 className="text-2xl font-semibold">Arizona Cardinals</h2>

                </div>
    
                <div className="my-8"></div> {/* This adds space between the two sections */}
                  
                <div className="flex items-center space-x-4">

                  <img src={panthers} alt="Background" className="w-48 h-48 object-cover rounded-full" />
                  <h2 className="text-2xl font-semibold mb-4">Carolina Panthers</h2>

                </div>

                <div className="my-8"></div> {/* This adds space between the two sections */}

                <div className="flex items-center space-x-4">

                  <img src={cowboys} alt="Background" className="w-48 h-48 object-cover rounded-full" />
                  <h2 className="text-2xl font-semibold mb-4">Dallas Cowboys</h2>

                </div>

                <div className="my-8"></div> {/* This adds space between the two sections */}

                <div className="flex items-center space-x-4">

                  <img src={packers} alt="Background" className="w-48 h-48 object-cover rounded-full" />

                  <h2 className="text-2xl font-semibold mb-4">Green Bay Packers</h2>

                </div>

                <div className="my-8"></div> {/* This adds space between the two sections */}

                <div className="flex items-center space-x-4">

                  <img src={vikings} alt="Background" className="w-48 h-48 object-cover rounded-full" />

                  <h2 className="text-2xl font-semibold mb-4">Minnesota Vikings</h2>

                </div>
                  
                <div className="my-8"></div> {/* This adds space between the two sections */}
                  
                <div className="flex items-center space-x-4">

                  <img src={giants} alt="Background" className="w-48 h-48 object-cover rounded-full" />

                  <h2 className="text-2xl font-semibold mb-4">New York Giants</h2>

                </div>

                <div className="my-8"></div> {/* This adds space between the two sections */}

                <div className="flex items-center space-x-4">

                  <img src={niners} alt="Background" className="w-48 h-48 object-cover rounded-full" />

                  <h2 className="text-2xl font-semibold mb-4">San Francisco 49ers</h2>

                </div>

                <div className="my-8"></div> {/* This adds space between the two sections */}

                <div className="flex items-center space-x-4">

                  <img src={buccaneers} alt="Background" className="w-48 h-48 object-cover rounded-full" />

                  <h2 className="text-2xl font-semibold mb-4">Tampa Bay Buccaneers</h2>

                </div>
              </div>

            </div>
            
            <div className="md:w-2/3 px-4 mb-8 md:mb-0">

              {/* Right Side */}

              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-4">

                  <img src={falcons} alt="Background" className="w-48 h-48 object-cover rounded-full" />


                  <h2 className="text-2xl font-semibold">Atlanta Falcons</h2>

                </div>
                    
                <div className="my-8"></div> {/* This adds space between the two sections */}
                    
                <div className="flex items-center space-x-4">
                    
                  <img src={bears} alt="Background" className="w-48 h-48 object-cover rounded-full" />

                  <h2 className="text-2xl font-semibold mb-4">Chicago Bears</h2>
                    
                </div>
                    
                <div className="my-8"></div> {/* This adds space between the two sections */}

                <div className="flex items-center space-x-4">
                    
                  <img src={lions} alt="Background" className="w-48 h-48 object-cover rounded-full" />

                  <h2 className="text-2xl font-semibold mb-4">Detroit Lions</h2>
                    
                </div>
                    
                <div className="my-8"></div> {/* This adds space between the two sections */}

                <div className="flex items-center space-x-4">
                    
                  <img src={rams} alt="Background" className="w-48 h-48 object-cover rounded-full" />

                  <h2 className="text-2xl font-semibold mb-4">Los Angeles Rams</h2>
                    
                </div>
                    
                <div className="my-8"></div> {/* This adds space between the two sections */}

                <div className="flex items-center space-x-4">
                    
                  <img src={saints} alt="Background" className="w-48 h-48 object-cover rounded-full" />

                  <h2 className="text-2xl font-semibold mb-4">New Orleans Saints</h2>
                    
                </div>
                    
                <div className="my-8"></div> {/* This adds space between the two sections */}
                    
                <div className="flex items-center space-x-4">
                    
                  <img src={eagles} alt="Background" className="w-48 h-48 object-cover rounded-full" />

                  <h2 className="text-2xl font-semibold mb-4">Philadelphia Eagles</h2>
                    
                </div>
                    
                <div className="my-8"></div> {/* This adds space between the two sections */}

                <div className="flex items-center space-x-4">
                    
                  <img src={seahawks} alt="Background" className="w-48 h-48 object-cover rounded-full" />

                  <h2 className="text-2xl font-semibold mb-4">Seattle Seahawks</h2>
                    
                </div>
                    
                <div className="my-8"></div> {/* This adds space between the two sections */}

                <div className="flex items-center space-x-4">
                    
                  <img src={commanders} alt="Background" className="w-48 h-48 object-cover rounded-full" />

                  <h2 className="text-2xl font-semibold mb-4">Washington Commanders</h2>
                    
                </div>
              </div>
            </div>
          </div>

          <div className="my-32"></div> {/* This adds space between the two sections */}


          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">AFC Teams:</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 px-4 mb-8 md:mb-0">

              {/* Left Side */}

              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-4">

                  <div className="w-48 h-48 bg-gray-300 rounded-full"></div>

                  <h2 className="text-2xl font-semibold mb-4">Team Name</h2>

                </div>
                  
                <div className="my-8"></div> {/* This adds space between the two sections */}
                  
                <div className="flex items-center space-x-4">

                  <div className="w-48 h-48 bg-gray-300 rounded-full"></div>

                  <h2 className="text-2xl font-semibold mb-4">Team Name</h2>

                </div>

                <div className="my-8"></div> {/* This adds space between the two sections */}

                <div className="flex items-center space-x-4">

                  <div className="w-48 h-48 bg-gray-300 rounded-full"></div>

                  <h2 className="text-2xl font-semibold mb-4">Team Name</h2>

                </div>

                <div className="my-8"></div> {/* This adds space between the two sections */}

                <div className="flex items-center space-x-4">

                  <div className="w-48 h-48 bg-gray-300 rounded-full"></div>

                  <h2 className="text-2xl font-semibold mb-4">Team Name</h2>

                </div>

                <div className="my-8"></div> {/* This adds space between the two sections */}

                <div className="flex items-center space-x-4">

                  <div className="w-48 h-48 bg-gray-300 rounded-full"></div>

                  <h2 className="text-2xl font-semibold mb-4">Team Name</h2>

                </div>
                  
                <div className="my-8"></div> {/* This adds space between the two sections */}
                  
                <div className="flex items-center space-x-4">

                  <div className="w-48 h-48 bg-gray-300 rounded-full"></div>

                  <h2 className="text-2xl font-semibold mb-4">Team Name</h2>

                </div>

                <div className="my-8"></div> {/* This adds space between the two sections */}

                <div className="flex items-center space-x-4">

                  <div className="w-48 h-48 bg-gray-300 rounded-full"></div>

                  <h2 className="text-2xl font-semibold mb-4">Team Name</h2>

                </div>

                <div className="my-8"></div> {/* This adds space between the two sections */}

                <div className="flex items-center space-x-4">

                  <div className="w-48 h-48 bg-gray-300 rounded-full"></div>

                  <h2 className="text-2xl font-semibold mb-4">Team Name</h2>

                </div>
              </div>

            </div>
            
            <div className="md:w-2/3 px-4 mb-8 md:mb-0">

              {/* Right Side */}

              <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-4">

                  <div className="w-48 h-48 bg-gray-300 rounded-full"></div>

                  <h2 className="text-2xl font-semibold mb-4">Team Name</h2>
                    
                </div>
                    
                <div className="my-8"></div> {/* This adds space between the two sections */}
                    
                <div className="flex items-center space-x-4">
                    
                  <div className="w-48 h-48 bg-gray-300 rounded-full"></div>

                  <h2 className="text-2xl font-semibold mb-4">Team Name</h2>
                    
                </div>

                <div className="my-8"></div> {/* This adds space between the two sections */}
                    
                <div className="flex items-center space-x-4">
                    
                  <div className="w-48 h-48 bg-gray-300 rounded-full"></div>

                  <h2 className="text-2xl font-semibold mb-4">Team Name</h2>
                    
                </div>
                    
                <div className="my-8"></div> {/* This adds space between the two sections */}
    
                <div className="flex items-center space-x-4">
                    
                  <div className="w-48 h-48 bg-gray-300 rounded-full"></div>

                  <h2 className="text-2xl font-semibold mb-4">Team Name</h2>
                    
                </div>
                    
                <div className="my-8"></div> {/* This adds space between the two sections */}

                <div className="flex items-center space-x-4">
                    
                  <div className="w-48 h-48 bg-gray-300 rounded-full"></div>

                  <h2 className="text-2xl font-semibold mb-4">Team Name</h2>
                    
                </div>
                    
                <div className="my-8"></div> {/* This adds space between the two sections */}
                    
                <div className="flex items-center space-x-4">
                    
                  <div className="w-48 h-48 bg-gray-300 rounded-full"></div>

                  <h2 className="text-2xl font-semibold mb-4">Team Name</h2>
                    
                </div>
                    
                <div className="my-8"></div> {/* This adds space between the two sections */}
    
                <div className="flex items-center space-x-4">
                    
                  <div className="w-48 h-48 bg-gray-300 rounded-full"></div>

                  <h2 className="text-2xl font-semibold mb-4">Team Name</h2>
                    
                </div>

                <div className="my-8"></div> {/* This adds space between the two sections */}

                <div className="flex items-center space-x-4">
                    
                  <div className="w-48 h-48 bg-gray-300 rounded-full"></div>

                  <h2 className="text-2xl font-semibold mb-4">Team Name</h2>
                    
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }