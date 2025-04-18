// Define cn function locally
const cn = (...classes) => classes.filter(Boolean).join(" ");

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 8 },
      { name: "Python", level: 7 },
      { name: "C++", level: 6 },
      { name: "TypeScript", level: 6 },
    ],
    color: "blue",
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 8 },
      { name: "HTML/CSS", level: 8 },
      { name: "Tailwind CSS", level: 7 },
      { name: "Bootstrap", level: 7 },
    ],
    color: "purple",
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 8 },
      { name: "Express.js", level: 8 },
      { name: "RESTful APIs", level: 7 },
      { name: "MongoDB", level: 7 },
    ],
    color: "green",
  },
  {
    name: "Data Analysis",
    skills: [
      { name: "SQL", level: 7 },
      { name: "Excel", level: 8 },
      { name: "Python (Pandas)", level: 7 },
      { name: "Jupyter Notebook", level: 7 },
      { name: "Tableau", level: 6 },
    ],
    color: "peach",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 lg:px-24 bg-soft-blue/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my education and
            projects. Here's an overview of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={cn(
                "bg-white p-6 rounded-lg shadow-sm border border-border card-hover",
                category.color === "blue"
                  ? "bg-soft-blue/10"
                  : category.color === "purple"
                  ? "bg-soft-purple/10"
                  : category.color === "green"
                  ? "bg-soft-green/10"
                  : "bg-soft-peach/10"
              )}
            >
              <h3 className="text-xl font-medium mb-6">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/70">
                        {skill.level * 10}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          category.color === "blue"
                            ? "bg-soft-blue"
                            : category.color === "purple"
                            ? "bg-soft-purple"
                            : category.color === "green"
                            ? "bg-soft-green"
                            : "bg-soft-peach"
                        )}
                        style={{ width: `${skill.level * 10}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-xl font-medium text-center mb-8">
            Additional Skills & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git",
              "VS Code",
              "Postman",
              "GitHub",
              "Xcode",
              "Problem Solving",
              "Data Cleaning",
              "Team Collaboration",
              "Machine Learning",
              "Statistics",
              "Probability",
              "Linear Regression",
              "Data Visualization",
              "Exploratory Data Analysis",
            ].map((skill, index) => (
              <span
                key={index}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium",
                  index % 4 === 0
                    ? "bg-soft-blue/20"
                    : index % 4 === 1
                    ? "bg-soft-purple/20"
                    : index % 4 === 2
                    ? "bg-soft-green/20"
                    : "bg-soft-peach/20"
                )}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
