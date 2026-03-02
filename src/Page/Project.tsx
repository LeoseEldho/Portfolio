import { project } from "../constants";

const Project = () => {
  return (
    <section id="project" className="px-6 md:px-20 py-10 md:28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl lg:text-9xl font-extrabold text-center mb-15 lg:mb-20 text-gray-200 transition-all duration-700  translate-y-0 opacity-100">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-14 ">
          {/* map */}
          {project.map((x) => (
            <div className="rounded-3xl bg-gray-800 transition-all duration-500 translate-y-0 opacity-100 overflow-hidden">
              <div className="h-64 sm:h-72 md:h-80 lg:h-150  ">
                <img className="w-full object-cover h-full" src={x.image} alt="" />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-100">
                  {x.name}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {x.details}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {/* map */}
                  {x.stack.map(stack => (
                    <span className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-200">{stack}</span>
                  ))}
              </div>
                <button  className="mt-4 flex items-center gap-2 font-medium text-gray-100  transition-all cursor-pointer">
                  <a href={x.link} target="_blank">View Project</a> <span>→</span>
                  
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
