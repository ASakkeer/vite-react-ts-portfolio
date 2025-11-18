import { Briefcase, GraduationCap, Download } from "lucide-react";
import { Button } from "./ui/button";

const Resume = () => {
  const experience = [
    {
      company: "Mongrov, Inc.",
      location: "Coimbatore, IN",
      role: "Senior Software Engineer",
      period: "Aug 2020 - Sep 2025",
      description:
        "Led development of 10+ cross-platform mobile applications with zero critical rejections. Achieved 40% crash reduction and 30% performance improvements through code optimization and real-time monitoring.",
      achievements: [
        "Designed and engineered 10+ cross-platform mobile applications",
        "Led app store publishing with 90% on-time release rate",
        "Integrated third-party modules and native iOS/Android code",
        "Mentored team of junior/mid developers improving delivery KPIs",
        "Implemented Redux state management for better performance",
      ],
      skills: ["React Native", "TypeScript", "Redux Toolkit", "CI/CD", "Fastlane"],
    },
    {
      company: "Hartwin Tech Pvt Ltd",
      location: "Coimbatore, IN",
      role: "Full Stack Developer",
      period: "Mar 2020 - Jun 2020",
      description:
        "Developed integrated web and mobile solutions, focusing on robust RESTful API/middleware development and seamless UI/UX connection.",
      achievements: [
        "Built integrated web and mobile solutions",
        "Developed RESTful APIs and middleware",
        "Collaborated with designers for rapid prototyping",
        "Drove end-to-end app delivery cycles",
      ],
      skills: ["React", "Node.js", "REST APIs", "UI/UX"],
    },
    {
      company: "Brigita Solutions Pvt Ltd",
      location: "Coimbatore, IN",
      role: "Frontend Developer",
      period: "Sep 2017 - Feb 2020",
      description:
        "Engineered responsive user interfaces using React, Angular, and modern UI libraries. Managed web/mobile integrations with modular architectures.",
      achievements: [
        "Engineered responsive UIs using React and Angular",
        "Implemented modular architectures",
        "Coordinated with backend teams for scalable solutions",
        "Managed web/mobile integrations",
      ],
      skills: ["React.js", "Angular", "JavaScript", "RESTful APIs"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science (B.Sc)",
      major: "Computer Science",
      institution: "K.S.G. College of Arts & Science",
      location: "Coimbatore, TN, India",
      period: "2017",
      description: "Graduated with comprehensive knowledge in software development and computer science fundamentals.",
    },
  ];

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            A journey of continuous learning and professional growth
          </p>
          <Button 
            size="lg" 
            className="glow-box"
            onClick={() => window.open('/sakkeer_resume.pdf', '_blank')}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Full Resume
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="glass glass-hover p-6 rounded-2xl relative pl-8 border-l-4 border-primary/50"
                >
                  <div className="absolute left-0 top-8 w-3 h-3 bg-primary rounded-full -translate-x-[7px]" />
                  <div className="text-sm text-primary font-medium mb-2">{exp.period}</div>
                  <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                  <div className="text-muted-foreground font-medium mb-1">{exp.company}</div>
                  <div className="text-sm text-muted-foreground mb-3">{exp.location}</div>
                  <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass glass-hover p-6 rounded-2xl relative pl-8 border-l-4 border-primary/50"
                >
                  <div className="absolute left-0 top-8 w-3 h-3 bg-primary rounded-full -translate-x-[7px]" />
                  <div className="text-sm text-primary font-medium mb-2">{edu.period}</div>
                  <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                  <div className="text-muted-foreground font-medium mb-1">{edu.major}</div>
                  <div className="text-muted-foreground font-medium mb-1">{edu.institution}</div>
                  <div className="text-sm text-muted-foreground mb-3">{edu.location}</div>
                  <p className="text-muted-foreground text-sm">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Core Competencies */}
            <div className="mt-12 glass p-6 rounded-2xl">
              <h4 className="text-lg font-bold mb-4">Core Competencies</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>End-to-End Mobile App Development (Android & iOS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>App Store Publishing (Play Store, App Store)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Third-Party & Native Module Integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Performance Optimization (30%+ improvement)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>State Management (Redux, Context API)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>CI/CD Automation (Fastlane, Bitrise, GitHub Actions)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Scalable Architecture Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Mentoring & Team Leadership</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Agile & Scrum Methodologies</span>
                </li>
              </ul>
            </div>

            {/* Technical Tools */}
            <div className="mt-6 glass p-6 rounded-2xl">
              <h4 className="text-lg font-bold mb-4">Technical Tools</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-primary font-medium">Languages:</span>
                  <span className="text-muted-foreground ml-2">JavaScript (ES6+), TypeScript</span>
                </div>
                <div>
                  <span className="text-primary font-medium">Frameworks:</span>
                  <span className="text-muted-foreground ml-2">React Native, React, Angular</span>
                </div>
                <div>
                  <span className="text-primary font-medium">Tools:</span>
                  <span className="text-muted-foreground ml-2">VS Code, Git, Figma, POSTMAN, Fastlane, Bitrise</span>
                </div>
                <div>
                  <span className="text-primary font-medium">Databases:</span>
                  <span className="text-muted-foreground ml-2">Firebase, SQL Server</span>
                </div>
                <div>
                  <span className="text-primary font-medium">Testing:</span>
                  <span className="text-muted-foreground ml-2">Jest, Sentry, Crashlytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
