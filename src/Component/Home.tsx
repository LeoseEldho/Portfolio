import { Typewriter } from "react-simple-typewriter";
import myPhoto from "../assets/myPhoto/main-image.png";
import resume from "../assets/Resume/LeoseEldho_Resume.pdf";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col px-6 md:px-20 pt-14 bg-linear-to-b  from-gray-800 via-gray-900 to-black text-gray-100 transition-colors duration-300"
    >
      {/* <div className="absolute z-100 bottom-10 left-[43%] flex flex-col items-center gap-2">
        <span className="text-xs tracking-[0.3em] text-gray-200">SCROLL</span>
        <div className="w-6 h-10 border-2 border-gray-200 rounded-full flex justify-center overflow-hidden">
          <span
            className="w-1 h-2 bg-gray-100 rounded-full mt-2"
            style={{
              animation: "scrollDot 1.4s ease-in-out infinite",
            }}
          ></span>
        </div>
      </div> */}
      <div className="text-center space-y-2 flex-1 flex flex-col justify-end hero-fade fade-delay-2">
        <h1 className="text-2xl md:text-4xl lg:text-5xl tracking-widest opacity-80 font-medium hero-fade fade-delay-3 uppercase">
          Hi, I’m
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold [-webkit-text-stroke:1px_white] text-transparent lg:[-webkit-text-stroke:2px_white] tracking-wide  lg:tracking-tighter font-bebas hero-fade fade-delay-4 uppercase whitespace-nowrap">
          leose eldho
        </h1>
        <h4 className="text-lg md:text-3xl text-gray-300 font-bebas font-bold hero-fade fade-delay-5 uppercase">
          <Typewriter
            words={[
              "Full Stack Developer",
              "Frontend Developer",
              "Backend Developer",
              "Creative Web Designer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h4>
      </div>

      <div className=" flex flex-col flex-1 mt-8 lg:hidden">
        <div className="flex items-center gap-4 mt-6 justify-center">
          <a href="#contact">
            <button className="flex items-center w-40 h-12 justify-center cursor-pointer bg-gray-400/10 backdrop-blur-2xl text-white rounded-full transition-all duration-500 hover:translate-y-1">
              Let’s connect
            </button>
          </a>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center w-40 h-12 justify-center cursor-pointer bg-white/70 backdrop-blur-2xl text-white rounded-full transition-all duration-500 hover:translate-y-1">
              Download CV
            </button>
          </a>
        </div>
        <div className="mt-auto justify-center flex">
          <img src={myPhoto} alt="myPhoto" />
        </div>
      </div>

      <div className="hidden lg:flex flex-1 items-center mt-12 w-full max-w-7xl mx-auto gap-6">
        <div className="flex-1 flex flex-col justify-center gap-6 hero-left fade-delay-4">
          <div className="w-20 h-1 bg-gray-200 rounded-full"></div>
          <p className="max-w-xs text-gray-300 text-lg leading-relaxed">
            Crafting clean, responsive, and interactive web experiences with
            modern UI precision.
          </p>
          <div className="w-20 h-1 bg-gray-200 rounded-full"></div>
          <div className="relative w-40 h-12 flex items-center justify-center group cursor-pointer">
            <span className="absolute bottom-[-40%] w-24 h-16 rounded-full bg-white/40 blur-2xl transition-opacity duration-300 group-hover:opacity-70 "></span>
            <a href="#contact" className="w-full h-full">
              <button className="relative w-full h-full rounded-xl bg-gray-400/10 backdrop-blur-2xl text-white border border-white/30 shadow-[inset_0_-3px_15px_rgba(255,255,255,0.35)] transition-all duration-200 group-hover:translate-y-1 active:translate-y-2 cursor-pointer">
                Let’s connect
              </button>
            </a>
          </div>
        </div>
        <img
          alt="Leose"
          className="w-full max-w-md object-contain self-end drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] hero-fade fade-delay-5"
          src={myPhoto}
        />
        <div className="flex-1 flex flex-col  gap-6 items-end hero-right fade-delay-4">
          <div className="w-20 h-1 bg-gray-200 rounded-full"></div>
          <p className="max-w-xs text-gray-300 text-lg leading-relaxed text-end">
            Explore my projects, skills, and experience through my professional
            resume.
          </p>
          <div className="w-20 h-1 bg-gray-200 rounded-full"></div>
          <div className="relative group cursor-pointer">
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-28 h-14 rounded-full bg-black/30 blur-2xl transition-opacity duration-300 group-hover:opacity-60"></span>
            <a href={resume} target="_blank" rel="noopener noreferrer" >
              <button className="relative px-6 py-2 rounded-full bg-white/70 backdrop-blur-2xl text-gray-900 border border-gray-300/60 shadow-[inset_0_-4px_18px_rgba(0,0,0,0.15)] transition-all duration-200 group-hover:translate-y-1 active:translate-y-2 cursor-pointer">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
