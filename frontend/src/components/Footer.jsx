import { ArrowUp } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 md:px-12 lg:px-24 bg-foreground text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-serif font-medium">
              <span className="text-primary">Khadyot</span> Takale
            </a>
            <p className="mt-2 text-white/70 text-sm">
              Building digital experiences with the MERN stack.
            </p>
          </div>

          <a
            href="#home"
            className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © {year} Khadyot Takale. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <a
                href="#about"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
