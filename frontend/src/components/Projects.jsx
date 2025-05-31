import {
  ExternalLink,
  Github,
  FolderGit2,
  BookOpen,
  Code,
  Zap,
} from "lucide-react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const projects = [
  {
    title: "Elegant Exhibitor Entry Management System",
    description:
      "A robust system to efficiently manage visitor and exhibitor entry/exit at large-scale exhibitions with real-time monitoring, dynamic badge generation, and in-depth analytics.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "QR Code/RFID"],
    github: "https://github.com/",
    demo: "https://github.com/KhadyotTakale/EventManagement",
    featured: true,
    image: "https://raw.githubusercontent.com/KhadyotTakale/EventManagement/refs/heads/main/frontend/src/assets/Screenshot%202025-05-31%20at%207.01.14%E2%80%AFPM.png", // Add your image path here
  },
  {
    title: "Geo-Tagging Website",
    description:
      "A web application using the MERN stack that allows users to upload images and automatically tag them with geographic coordinates, featuring an interactive map interface.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Maps API"],
    github: "https://github.com/KhadyotTakale/GeoTagPhotoWebsite",
    demo: "https://example.com",
    featured: true,
    image: "https://raw.githubusercontent.com/KhadyotTakale/EventManagement/refs/heads/main/frontend/src/assets/Screenshot%202025-05-31%20at%207.05.55%E2%80%AFPM.png", // Add your image path here
  },
  {
    title: "Real Estate Price Prediction",
    description:
      "A machine learning model using Python and Pandas to estimate property prices based on key factors, with data collection, cleaning, and preprocessing of historical real estate datasets.",
    tech: ["Python", "SQL", "Machine Learning", "Pandas", "Linear Regression"],
    github: "https://github.com/KhadyotTakale/HousePricePrediction",
    demo: "https://example.com",
    featured: true,
    image: "https://github.com/KhadyotTakale/HousePricePrediction/blob/main/frontend/src/assets/Screenshot%202025-05-31%20at%206.57.05%E2%80%AFPM.png?raw=true", // Add your image path here
  },

  {
    title: "Algorithm Problem Solutions",
    description:
      "Solutions to over 400+ DSA problems on Leetcode, with a max rating of 1505 on Codechef and 1188 on Codeforces.",
    tech: ["Data Structures", "Algorithms", "C++", "Problem Solving"],
    github: "https://github.com/",
    featured: false,
    type: "leetcode",
    externalLink: "https://leetcode.com/user",
  },
  {
    title: "Haptic Glove for Post-Stroke Rehabilitaion",
    description:
      "Developed an ergonomic and cost-effective haptic glove for post-stroke hand rehabilitation using flex sensors, vibration motors, and Arduino technology. This solution addresses accessibility barriers by significantly reducing costs while improving user comfort with a compact design compared to bulky alternatives.",
    tech: [
      "Arduino",
      "Flex Sensors",
      "Haptic Technology",
      "Vibration Motors",
      "Rehabilitation Engineering",
    ],
    github: "https://github.com/",
    featured: false,
    type: "research",
    externalLink:
      "https://www.researchgate.net/publication/381030168_Haptic_Glove_for_Post-Stroke_Rehabilitaion", // Added external link
  },
  {
    title:
      "Enhancing Wireless Charging Efficiency with Advanced Mechanisms and Analysis Model",
    description:
      "Research study optimizing wireless EV charging systems through inductive power transfer and reinforcement learning, achieving up to 94% energy transfer efficiency with intelligent coil alignment and dynamic parameter adjustment.",
    tech: [
      "Reinforcement Learning",
      "Proximal Policy Optimization",
      "Sensor Networks",
      "Battery Management Systems",
      "Energy Efficiency Analysis",
    ],
    github: "https://github.com/",
    featured: false,
    type: "research",
    externalLink: "https://ieeexplore.ieee.org/document/10863990",
  },
  {
    title: "Solar-Based Green Hydrogen Production",
    description:
      "An experimental study on solar-based green hydrogen production focusing on efficiency and optimization analysis, published in Scopus.",
    tech: [
      "Research",
      "Data Analysis",
      "Efficiency Optimization",
      "Green Energy",
    ],
    github: "https://github.com/",
    featured: false,
    type: "research",
    externalLink:
      "https://pubs.aip.org/aip/acp/article-abstract/3139/1/060004/3306838/An-experimental-study-on-solar-based-green?redirectedFrom=PDF",
  },
];

const Projects = () => {
  // Separate featured and other projects
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  // Get icon based on project type
  const getProjectIcon = (project) => {
    switch (project.type) {
      case "leetcode":
        return <Code className="text-yellow-500" size={24} />;
      case "research":
        return <BookOpen className="text-blue-500" size={24} />;
      default:
        return <FolderGit2 className="text-primary" size={24} />;
    }
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 lg:px-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project
            represents unique challenges and solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center",
                index % 2 === 1 ? "lg:text-right" : ""
              )}
            >
              {/* Project Image/Preview */}
              <div
                className={cn(
                  "order-1",
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                )}
              >
                <div className="relative rounded-lg overflow-hidden aspect-video bg-soft-blue/20">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-5xl font-serif font-bold text-primary/20">
                        {project.title
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div
                className={cn(
                  "order-2",
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                )}
              >
                <h3
                  className={cn(
                    "text-2xl font-medium mb-4",
                    index % 2 === 1 ? "lg:text-right" : ""
                  )}
                >
                  {project.title}
                </h3>
                <div
                  className={cn(
                    "mb-6 bg-white p-6 rounded-lg shadow-sm border border-border",
                    index % 2 === 1 ? "lg:ml-auto" : ""
                  )}
                >
                  <p className="text-foreground/80">{project.description}</p>
                </div>
                <div
                  className={cn(
                    "flex flex-wrap gap-2 mb-6",
                    index % 2 === 1 ? "lg:justify-end" : ""
                  )}
                >
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs bg-soft-pink/20 text-foreground/80 px-2 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div
                  className={cn(
                    "flex gap-4",
                    index % 2 === 1 ? "lg:justify-end" : ""
                  )}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-medium mb-8 text-center">
          More Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-border card-hover"
            >
              <div className="flex justify-between items-start mb-4">
                {getProjectIcon(project)}
                <div className="flex gap-4">
                  {project.github && !project.type && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.externalLink && (
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="text-xl font-medium mb-2">{project.title}</h4>
              <p className="text-foreground/70 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs bg-soft-green/20 text-foreground/80 px-2 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
