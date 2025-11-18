import { Smartphone, Globe, Plug, Palette, Gauge, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "End-to-end development of high-performance cross-platform mobile applications using React Native. Expertise in publishing to Play Store and App Store with zero critical rejections.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Building modern, responsive web applications with React.js, focusing on performance, accessibility, and excellent user experiences.",
    },
    {
      icon: Plug,
      title: "Third-Party & Native Integration",
      description:
        "Expert integration of third-party modules (Google Maps, Push Notifications, Device Sensors) and native iOS/Android code to accelerate feature delivery.",
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description:
        "Translating design concepts into pixel-perfect, interactive interfaces with attention to detail and user-centric approach.",
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description:
        "Code refactoring and optimization achieving 30%+ boost in startup speed and 40% reduction in crashes through real-time monitoring and best practices.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description:
        "Providing ongoing maintenance, bug fixes, feature enhancements, and technical support for existing applications.",
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass glass-hover p-8 rounded-2xl group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
