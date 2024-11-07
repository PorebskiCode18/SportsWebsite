import React, { useState, useEffect } from 'react';
import image1 from './assets/bears.png';
import image2 from './assets/helmetCatch.png';
import image3 from './assets/odell.png';
import image4 from './assets/oldPhoto.png';
import image5 from './assets/oneHand.png';

export default function AppAbout() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [image1, image2, image3, image4, image5];
    const cycleInterval = 3000;

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
      const interval = setInterval(handleNext, cycleInterval);
      return () => clearInterval(interval);
  }, [currentIndex]);

    return (
        <section id="about" className="py-10 bg-gray-100">
            <div className="container mx-auto">
                
                <div className="my-16"></div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">About NFL Tracker</h2>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3 px-4 mb-8 md:mb-0">
                        <h2 className="text-2xl font-semibold mb-4">What You Can Do</h2>
                        <p className="text-gray-700 mb-6">
                            Our website is your all-in-one platform for NFL insights and analysis. Dive into detailed team matchups to see how each team stacks up against their weekly opponents, explore player matchups to get the edge in fantasy leagues or just to see how favorite players compare, and access comprehensive seasonal stats to track performance trends across the league.
                        </p>

                        <h2 className="text-2xl font-semibold mb-4">How We Get The Data</h2>
                        <p className="text-gray-700 mb-6">
                            We rely on Sportradar's Football API to provide accurate, up-to-date data directly from the NFL. Through their comprehensive data streams, we’re able to deliver week-to-week depth charts, current injury reports, and seasonal statistics for every team and player.
                        </p>
                        <p className='text-gray-700'>Click on the team logos to learn more about the team.</p>
                    </div>

                    {/* Carousel Section */}
                    <div className="md:w-2/3 flex justify-center md:justify-end px-4">
                        <div className="relative w-full h-full overflow-hidden">
                            {/* Carousel container with a transform property */}
                            <div
                                className="flex transition-transform duration-1000 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                }}
                            >
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        className="w-full h-full object-cover"
                                        alt="NFL Team"
                                    />
                                ))}
                            </div>

                            {/* Carousel controls */}
                            <button
                                onClick={handlePrev}
                                className="absolute bottom-0 left-0 top-0 z-[1] flex items-center justify-center text-white opacity-75 hover:opacity-90"
                                aria-label="Previous slide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute bottom-0 right-0 top-0 z-[1] flex items-center justify-center text-white opacity-75 hover:opacity-90"
                                aria-label="Next slide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}