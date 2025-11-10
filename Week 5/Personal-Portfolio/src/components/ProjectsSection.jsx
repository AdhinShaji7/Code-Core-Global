import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Skill Swapping Network",
    description:
      "A platform where users can exchange skills with others, enabling collaborative learning and networking using real-world technologies.",
    image: "/Projects/Skill_Swapping_Network_Interface_with_bgc.png", 
    tags: ["Java", "Python", "SQL", "HTML", "CSS", "JavaScript"],
    demoUrl: "#", 
    githubUrl: "https://github.com/AdhinShaji7",
  },
  {
    id: 2,
    title: "FixIt - Mechanic/Auto Repair Website",
    description:
      "A responsive auto-repair booking and management system built with PHP and MySQL, providing customers with an easy way to book services.",
    image: "/Projects/ChatGPT_Image_Sep_26_2025_06_42_56_PM_with_bgc.png", 
    tags: ["PHP", "HTML", "CSS", "JavaScript", "SQL"],
    demoUrl: "#", 
    githubUrl: "https://github.com/AdhinShaji7",
  },
  {
    id: 3,
    title: "Limer - Truck Lights Brand Website",
    description:
      "A modern and stylish portfolio website for showcasing premium truck lighting products, designed with a clean and professional UI.",
    image: "/Projects/ChatGPT_Image_Sep_26_2025_06_45_30_PM_with_bgc.png", 
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "#", 
    githubUrl: "https://github.com/AdhinShaji7",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my most impactful projects—built with performance,
          user experience, and clean architecture in mind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/AdhinShaji7"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
