import { BookOpen, Code, Monitor, Trophy } from "lucide-react";

// Define cn function locally
const cn = (...classes) => classes.filter(Boolean).join(" ");

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 lg:px-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-lg text-foreground/80 mb-6">
              Hello! I'm{" "}
              <span className="font-medium text-primary">Khadyot Takale</span>,
              a web developer with expertise in building web applications and
              data analysis systems. I'm currently pursuing a B.Tech in
              Electronics and Telecommunication Engineering at Vishwakarma
              Institute of Technology, Pune.
            </p>

            <p className="text-lg text-foreground/80 mb-6">
              I have a strong foundation in full-stack development, with
              experience in the MERN stack, and a passion for data analysis. My
              approach combines technical expertise with problem-solving skills
              to deliver high-quality applications.
            </p>

            <p className="text-lg text-foreground/80 mb-8">
              Currently, I'm focused on developing innovative solutions in web
              development while expanding my knowledge in machine learning and
              data analysis.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="border border-border rounded-lg p-5 bg-soft-blue/10 card-hover">
                <Code className="text-primary mb-4" size={28} />
                <h3 className="text-lg font-medium mb-2">Web Development</h3>
                <p className="text-foreground/70 text-sm">
                  Building responsive applications with modern technologies
                </p>
              </div>

              <div className="border border-border rounded-lg p-5 bg-soft-green/10 card-hover">
                <Monitor className="text-primary mb-4" size={28} />
                <h3 className="text-lg font-medium mb-2">UI/UX</h3>
                <p className="text-foreground/70 text-sm">
                  Creating intuitive and engaging user interfaces
                </p>
              </div>

              <div className="border border-border rounded-lg p-5 bg-soft-purple/10 card-hover">
                <BookOpen className="text-primary mb-4" size={28} />
                <h3 className="text-lg font-medium mb-2">Data Analysis</h3>
                <p className="text-foreground/70 text-sm">
                  Extracting insights from data using Python and SQL
                </p>
              </div>

              <div className="border border-border rounded-lg p-5 bg-soft-peach/10 card-hover">
                <Trophy className="text-primary mb-4" size={28} />
                <h3 className="text-lg font-medium mb-2">Problem Solving</h3>
                <p className="text-foreground/70 text-sm">
                  Solving complex algorithmic challenges
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div
              className={cn(
                "relative w-full max-w-md aspect-square rounded-2xl overflow-hidden",
                "before:absolute before:inset-0 before:border-8 before:border-soft-pink/20 before:rounded-2xl before:z-10"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-soft-purple/40 to-soft-blue/40 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-serif font-bold mb-4">
                    Education Highlights
                  </h3>
                  <ul className="text-left space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                      <span>
                        B.Tech in Electronics and Telecommunication Engineering
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                      <span>
                        Vishwakarma Institute of Technology, Pune (2022-2026)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                      <span>MERN Stack Developer</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                      <span>Competitive Programmer</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                      <span>Data Analysis enthusiast</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
