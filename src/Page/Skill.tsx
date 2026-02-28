import { skills } from "../constants";


const Skill = () => {
  return (
    <section id="skill" className="px-6 md:px-20 py-5 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl uppercase lg:text-9xl font-extrabold font-bebas text-gray-200 mb-14 text-center transition-all duration-800 opacity-100 translate-y-0">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-16 transition-all duration-800 opacity-100 translate-y-0">
          {skills.map((x) => (
            <div
              className="flex justify-between items-center gap-2
        relative overflow-hidden rounded-2xl p-6
        bg-white/5
        backdrop-blur-xl
        border-white/20
        shadow-[0_30px_60px_rgba(0,0,0,0.25)]
        transition-transform duration-200 ease-out
        will-change-transform cursor-pointer text-gray-200
      "
            >
              <div className="pointer-events-none absolute  inset-0 transition duration-100"></div>
              <div className="text-3xl"> {x.skill}</div>
            <img className="w-12" src={ x.logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
