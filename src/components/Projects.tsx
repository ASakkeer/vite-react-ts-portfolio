import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Enterprise Mobile Applications",
      category: "mobile",
      description:
        "Led development of 10+ cross-platform mobile applications at Mongrov Inc. Published to both Play Store and App Store with 90% on-time release rate and zero critical rejections.",
      tags: ["React Native", "TypeScript", "Redux Toolkit", "CI/CD"],
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "Performance Optimized Apps",
      category: "mobile",
      description:
        "Refactored existing applications achieving 30%+ boost in startup speed and 40% reduction in crashes through code optimization, real-time monitoring with Sentry and Crashlytics.",
      tags: ["Performance", "Optimization", "Sentry", "Crashlytics"],
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      title: "Native Module Integration",
      category: "mobile",
      description:
        "Expert integration of third-party modules including Google Maps, Push Notifications, Device Sensors, and custom native iOS/Android code to accelerate feature delivery.",
      tags: ["Native Modules", "iOS", "Android", "Third-Party APIs"],
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      title: "Full Stack Solutions",
      category: "web",
      description:
        "Developed integrated web and mobile solutions with robust RESTful APIs, middleware development, and seamless UI/UX connection across platforms.",
      tags: ["React", "Node.js", "REST APIs", "Full Stack"],
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      title: "Responsive Web Applications",
      category: "web",
      description:
        "Engineered responsive user interfaces using React, Angular, and modern UI libraries. Implemented modular architectures for scalable solutions.",
      tags: ["React.js", "Angular", "Responsive Design", "UI/UX"],
      image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "mobile", label: "Mobile" },
    { id: "web", label: "Web" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing some of my most impactful work
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={filter === cat.id ? "default" : "outline"}
              onClick={() => setFilter(cat.id)}
              className={filter === cat.id ? "glow-box" : "glass"}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-2xl overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Gradient */}
              <div
                className="h-48 relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6 gap-4">
                  <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full glass text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
