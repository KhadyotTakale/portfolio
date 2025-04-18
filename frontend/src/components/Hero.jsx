// Hero.jsx

import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

// Define cn function locally
const cn = (...classes) => classes.filter(Boolean).join(" ");
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-primary font-medium mb-4 block fade-in">
              Hello, I'm
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 fade-in delay-200">
              Khadyot <span className="text-primary">Takale</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 fade-in delay-400">
              Web Developer specializing in creating{" "}
              <span className="highlight">exceptional digital experiences</span>
            </p>
            <p className="text-foreground/70 mb-8 max-w-lg fade-in delay-600">
              B.Tech in Electronics and Telecommunication Engineering with
              expertise in web development and data analysis.
            </p>

            <div className="flex flex-wrap gap-4 mb-12 fade-in delay-600">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#about"
                className="border border-primary/30 hover:border-primary text-primary px-6 py-3 rounded-md transition-colors"
              >
                Learn More
              </a>
            </div>

            <div className="flex space-x-6 fade-in delay-600">
              <a
                href="https://www.linkedin.com/in/khadyot-takale-588005200/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/KhadyotTakale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Github size={22} />
              </a>
              <a
                href="mailto:khadyottakale@gmail.com"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center fade-in">
            <div
              className={cn(
                "relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden",
                "before:absolute before:inset-0 before:border-8 before:border-soft-blue/30 before:rounded-full before:z-10",
                "after:absolute after:inset-4 after:border-8 after:border-soft-pink/30 after:rounded-full after:z-10"
              )}
            >
              <div className="absolute inset-5 bg-gradient-to-br from-soft-blue to-soft-pink rounded-full">
                {/* Profile Image */}
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="/src/assets/my_img.jpeg" // Replace this with the actual path to your image
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full" // Use object-cover to maintain aspect ratio
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="block p-2">
            <ArrowDown size={24} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
