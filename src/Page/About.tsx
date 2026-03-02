const About = () => {
  return (
    <section id="about" className=" px-6 md:px-20 lg:pb-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center">
        <div className="transition-all duration-700 ease-out opacity-100 translate-x-0">
          <h2 className="text-center md:text-left text-5xl uppercase md:text-6xl lg:text-9xl font-bebas font-extrabold text-gray-200 mb-8">
            About Me
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">I’m a passionate Web Developer with a strong background in computer applications and a deep love for technology. What started as curiosity turned into a drive to create clean, responsive, and interactive digital experiences. I enjoy transforming ideas into modern web solutions that are both visually appealing and user-friendly.</p>
        <p className="mt-5 text-lg text-gray-400 leading-relaxed">I focus on building modern, responsive, and performance-driven user interfaces that feel smooth, clean, and enjoyable to use.</p>
        </div>
    {/* image  */}
       <img className="hidden md:block w-full h-full object-cover" src="src\assets\myPhoto\about-image.png" alt="" />
      </div>
    </section>
  );
};

export default About;
