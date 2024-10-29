export default function AppAbout() {
    return (
      <section id="about" className="py-10 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">About NFL Tracker</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 px-4 mb-8 md:mb-0">

              <h2 className="text-2xl font-semibold mb-4">What You Can Do</h2>
              <p className="text-gray-700 mb-6">
                We allow viewers to see stats, porjeted matchups, and health of different players.
              </p>

              
              <h2 className="text-2xl font-semibold mb-4">How We Get The Data</h2>
              <p className="text-gray-700">
                We get teh data though API's, such as...
              </p>

            </div>
            
            <div className="md:w-1/3 flex justify-center md:justify-end px-4">
              <div className="w-48 h-48 bg-gray-300 rounded-full"></div> {/* Placeholder div for image */}
            </div>
          </div>
        </div>
      </section>
    );
  }