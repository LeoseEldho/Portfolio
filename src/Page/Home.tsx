const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col px-6 md:px-20 pt-14 bg-linear-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="absolute z-100 bottom-10 left-[43%] flex flex-col items-center gap-2">
        <span className="text-xs tracking-[0.3em] text-gray-200">SCROLL</span>
        <div className="w-6 h-10 border-2 border-gray-200 rounded-full flex justify-center overflow-hidden">
          <span
            className="w-1 h-2 bg-gray-100 rounded-full mt-2"
            style={{
              animation: "scrollDot 1.4s ease-in-out infinite",
            }}
          ></span>
        </div>
      </div>
      <div className="text-center space-y-2 flex-1 flex flex-col justify-end hero-fade fade-delay-2">
        <h1 className="text-2xl md:text-4xl lg:text-5xl tracking-widest opacity-80 font-medium hero-fade fade-delay-3">
          HI, I'M
        </h1>
        <h1
          className="text-5xl md:text-7xl lg:text-9xl font-extrabold lg:text-transparent 
        lg:tracking-tighter font-bebas "
        >
          LEOSE ELDHO
        </h1>
        <h4 className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-bebas font-bold hero-fade fade-delay-5">
          Full STACK DEVELOPER
        </h4>
      </div>

      <div className=" flex flex-col flex-1 mt-8 lg:hidden">
        <div className="flex items-center gap-4 mt-6 justify-center">
          <button className="flex items-center w-40 h-12 justify-center cursor-pointer bg-white/20 dark:bg-gray-400/10 backdrop-blur-2xl text-white rounded-full">Let’s connect</button>
          <button className="flex items-center w-40 h-12 justify-center cursor-pointer bg-grey-900/80 dark:bg-white/70 backdrop-blur-2xl text-white rounded-full">Download CV</button>
        </div>
        <div className="mt-auto justify-center flex">
          <img src="src\assets\WhatsApp_Image_2026-02-24_at_11.04.52_PM-removebg-preview.png" alt="" />
        </div>
      </div>

      <div className=" hidden lg:flex flex-1 items-center mt-12 w-full max-w-7xl mx-auto gap-6"></div>
    </section>
  );
};

export default Home;
