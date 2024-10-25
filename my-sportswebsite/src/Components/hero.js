import logo from './assets/background.png';

export default function AppHero() {
    return (
        <section id="home" className="hero-block relative">
            <figure className="relative">
                <img src={logo} alt="Background" className="w-full h-auto" />
                <div className="absolute inset-0 bg-black bg-opacity-50">
                    <figcaption className="absolute top-[10%] left-[10%] text-white text-[3vw] font-bold m-4">
                        NFL <br /> Sports Tracker
                    </figcaption>
                    <figcaption className="absolute bottom-[1%] left-[10%] text-white text-[2vw] font-bold m-4">
                        - <br /> name <br /> name 
                    </figcaption>
                </div>
            </figure>
        </section>
    );
}