import { details } from "../constants";


const Details = () => {

  return (
    <section className="px-6 py-20  min-h-screen lg:py-30">
      <h2 className="uppercase text-6xl md:text-9xl text-gray-200 font-bold text-center mb-16">
        Let’s explore ...
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Map Details */}
        {details.map((x, ind) => (
          <a href={`#${x.id}`}>
          <div
            key={ind}
           
            className="group relative cursor-pointer rounded-3xl p-10 overflow-hidden
  bg-linear-to-br from-white/20 via-white/10 to-white/5
  backdrop-blur-2xl backdrop-saturate-150
  border border-white/20
  shadow-[0_10px_40px_rgba(0,0,0,0.15)]
  transition-all duration-500 ease-out
  hover:-translate-y-2
  hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          >
            {/* Top border */}
            <span
              className="absolute -top-px inset-x-0 h-0.75
      bg-linear-to-r from-transparent via-white to-transparent
      animate-[MoveX_2.5s_linear_infinite]
      opacity-60"
            ></span>

            {/* Bottom border */}
            <span
              className="absolute bottom-0 inset-x-0 h-0.75
      bg-linear-to-r from-transparent via-white to-transparent
      animate-[MoveX_2.5s_linear_infinite]
      opacity-60"
            ></span>

            {/* Left border */}
            <span
              className="absolute left-0 inset-y-0 w-px
      bg-linear-to-b from-transparent via-white to-transparent
      animate-[MoveY_2.5s_linear_infinite]
      opacity-60"
            ></span>

            {/* Right border */}
            <span
              className="absolute right-0 inset-y-0 w-px
      bg-linear-to-b from-transparent via-white to-transparent
      animate-[MoveY_2.5s_linear_infinite]
      opacity-60"
            ></span>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white">
                {x.title}
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                {x.click}
              </p>
              <div className="hidden lg:block mt-6 h-0.5 w-10 bg-gray-200 transition-all duration-300 group-hover:w-full"></div>
            </div>
          
          </div></a>
        ))}
      </div>
    </section>
  );
};

export default Details;
