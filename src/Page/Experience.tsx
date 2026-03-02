const Experience = () => {
  return (
    <section id="experience" className="px-6 md:px-20 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl text-center uppercase lg:text-9xl font-extrabold font-bebas text-gray-200 mb-10 transition-all duration-800 opacity-100 translate-y-0">
          Experience
        </h2>
        <div className="group relative p-10 rounded-3xl bg-gray-800 shadow-lg overflow-hidden transition-all duration-300 opacity-100 scale-100">
          <div className="relative z-10 space-y-4">
            <div className="flex justify-between items-center gap-6">
              <img src="src\assets\vonnue\webverse_logo.png" alt="" />
              <p className="  font-semibold text-gray-200 text-2xl sm:text-4xl md:text-6xl">
                Fullstack Developer Intern
              </p>
            </div>

            <p className="text-gray-400 leading-relaxed sm:mt-5">
              Worked as a Fullstack Developer Intern, where I contributed to
              building and maintaining scalable web applications using the MERN
              stack. Focused on both frontend and backend development, and
              collaborated with cross-functional teams to enhance application
              performance and user interface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
