export default function AppTeams() {
    return (
      <section id="teams" className="py-10 bg-gray-100">
        <div className="container mx-auto">

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">NFC Teams:</h2>
          </div>
          
          {/* NFC TEAMS */}

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 px-4 mb-8 md:mb-0">

              {/* Left Side */}

                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3 px-4 mb-8 md:mb-0">

              {/* Left Side */}

                        <div className="w-48 h-48 bg-gray-300 rounded-full"></div>
              
                        <div className="w-48 h-48 bg-gray-300 rounded-full"></div>
            </div>
            
            <div className="md:w-2/3 px-4 mb-8 md:mb-0">

              <h2 className="text-2xl font-semibold mb-4">Team Name</h2>
              
              <h2 className="text-2xl font-semibold mb-4">Team Name</h2>


            </div>
          </div>


            </div>
            
            <div className="md:w-2/3 px-4 mb-8 md:mb-0">

              <div className="w-48 h-48 bg-gray-300 rounded-full"></div>
              <h2 className="text-2xl font-semibold mb-4">What You Can Do</h2>
              
              <div className="w-48 h-48 bg-gray-300 rounded-full"></div>
              <h2 className="text-2xl font-semibold mb-4">How We Get The Data</h2>


            </div>
          </div>


          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">AFC Teams:</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 px-4 mb-8 md:mb-0">

              <div className="w-48 h-48 bg-gray-300 rounded-full"></div>
              <h2 className="text-2xl font-semibold mb-4">What You Can Do</h2>
              
              <div className="w-48 h-48 bg-gray-300 rounded-full"></div>
              <h2 className="text-2xl font-semibold mb-4">How We Get The Data</h2>


            </div>
            
            <div className="md:w-2/3 px-4 mb-8 md:mb-0">

              <div className="w-48 h-48 bg-gray-300 rounded-full"></div>
              <h2 className="text-2xl font-semibold mb-4">What You Can Do</h2>
              
              <div className="w-48 h-48 bg-gray-300 rounded-full"></div>
              <h2 className="text-2xl font-semibold mb-4">How We Get The Data</h2>


            </div>
          </div>

        </div>
      </section>
    );
  }