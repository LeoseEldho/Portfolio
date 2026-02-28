const Footer = () => {
  return (
    <footer className="px-6 md:px-20 py-12 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6 md:flex-row md:justify-between md:text-left">
        <div className="text-gray-800 dark:text-gray-200 font-medium text-lg">
          Leose Eldho
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-700 dark:text-gray-400">
          <a
            href="#introduction"
            className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors capitalize"
          >
            introduction
          </a>
          <a
            href="#about"
            className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors capitalize"
          >
            about
          </a>
          <a
            href="#education"
            className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors capitalize"
          >
            education
          </a>
          <a
            href="#skills"
            className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors capitalize"
          >
            skills
          </a>
          <a
            href="#projects"
            className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors capitalize"
          >
            projects
          </a>
          <a
            href="#contact"
            className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors capitalize"
          >
            contact
          </a>
        </div>
        <div className="text-gray-700 dark:text-gray-400 text-sm">
          © 2026 Leose Eldho
        </div>
      </div>
    </footer>
  );
};

export default Footer;
