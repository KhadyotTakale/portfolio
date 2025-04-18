import { BriefcaseIcon } from "lucide-react";

// Define cn function locally
const cn = (...classes) => classes.filter(Boolean).join(" ");

const experiences = [
  {
    title: "Web Developer",
    company: "Elegant Enterprises",
    period: "July 2024 - Sep 2024",
    location: "Pune, India (Remote)",
    description: [
      "Developed Elegant Exhibitor Entry Management System for large-scale exhibitions with real-time monitoring",
      "Implemented QR code/RFID badge scanning, real-time entry/exit validation, and anomaly detection",
      "Utilized the MERN stack (React.js, Node.js/Express.js, MongoDB) for robust application development",
      "Created Geo-Tagging Website allowing users to upload and automatically tag images with geographic coordinates",
      "Integrated Google Maps API for an interactive map interface to view, edit, and manage geotagged images",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Google Maps API",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-12 lg:px-24 bg-soft-blue/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 transform md:translate-x-px"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={cn(
                  "relative grid grid-cols-1 md:grid-cols-2 gap-8",
                  index % 2 === 0 ? "md:text-right" : ""
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 bg-white border-2 border-primary rounded-full transform -translate-x-2 md:-translate-x-2.5"></div>

                {/* Content */}
                <div
                  className={cn(
                    "md:col-span-1",
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  )}
                >
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-border card-hover">
                    <div className="flex items-center mb-4">
                      <BriefcaseIcon className="text-primary mr-2" size={18} />
                      <h3 className="text-xl font-medium">{exp.title}</h3>
                    </div>
                    <div className="mb-4">
                      <p className="font-medium text-primary">{exp.company}</p>
                      <p className="text-sm text-foreground/70">
                        {exp.period} | {exp.location}
                      </p>
                    </div>
                    <ul className="space-y-2 mb-4 text-foreground/80">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm">
                          • {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-soft-purple/20 text-foreground/80 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty column for timeline layout */}
                <div
                  className={cn(
                    "hidden md:block md:col-span-1",
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  )}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
