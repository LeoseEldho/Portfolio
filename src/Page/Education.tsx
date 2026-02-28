import { education } from "../constants";

const Education = () => {
  return (
    <section id="education" className="px-6 md:px-20 py-15 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl uppercase lg:text-9xl font-extrabold font-bebas text-gray-200 mb-16 text-center transition-all duration-800 opacity-100 translate-y-0">
          Education
        </h2>
        <div className="relative border-l-2 border-gray-300 pl-8 space-y-12">
          {/* to map details */}
          {education.map((x) => (
            <div 
              className="relative transition-all duration-800 opacity-100 translate-x-0"
              style={{ transitionDelay: "150ms" }}
            >
              <span className="absolute -left-10.25 top-2 w-5 h-5 rounded-full bg-gray-200"></span>
              <div className="group relative p-6 rounded-2xl bg-gray-800 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gray-700 -translate-x-100 group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="relative">
                  <span className="text-sm text-gray-400">{x.year}</span>
                  <h3 className="text-xl font-semibold text-gray-200 mt-1">
                    {x.school}
                  </h3>
                  <p className="text-gray-400 mt-1">{x.place}</p>
                  <p className="mt-2 font-medium text-gray-200">{x.mark}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
