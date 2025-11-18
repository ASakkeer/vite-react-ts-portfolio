import { Code2, Smartphone, Globe, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code2, label: "Years Experience", value: "8" },
    { icon: Smartphone, label: "Apps Published", value: "5+" },
    { icon: Globe, label: "Performance Boost", value: "40%" },
    { icon: Zap, label: "Crash Reduction", value: "55%" },
  ];

  const skills = [
    "React Native",
    "React.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Redux Toolkit",
    "Context API",
    "REST APIs",
    "Angular",
    "Firebase",
    "Git & GitHub",
    "Native Modules (iOS/Android)",
    "Jest Testing",
    "Sentry & Crashlytics",
    "Agile & Scrum",
    "App Store Publishing",
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating seamless user experiences and high-performance applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold">
              Senior React Native Engineer & Full Stack Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Seasoned Senior React Native Engineer with over 8 years of experience in leading the end-to-end development of high-performance, scalable, and robust cross-platform mobile applications for global clients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Expertise in publishing applications to Android and iOS app stores, integrating complex APIs, and delivering reliable, high-quality builds that consistently drive project success. My proven track record includes reducing crash rates by up to 40% and boosting performance by 30%+, significantly enhancing user engagement and retention.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Strong collaboration skills across functional teams enable rapid troubleshooting of complex issues, delivering polished solutions in fast-paced Agile environments. I'm passionate about mentoring developers and fostering a culture of continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass glass-hover p-6 rounded-2xl text-center group"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-bold mb-8 text-center">Core Skills & Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass glass-hover px-6 py-3 rounded-full text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
