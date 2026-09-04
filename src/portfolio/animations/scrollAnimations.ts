import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function setupScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    const build = document.querySelector("#scene-build h2");
    if (build) {
      gsap.fromTo(
        build,
        { opacity: 0.35, y: 28 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.7,
          scrollTrigger: {
            trigger: "#scene-build",
            start: "top 78%",
            once: true,
          },
        }
      );
    }

    const skills = document.querySelector("#scene-signal");
    if (skills) {
      const label = skills.querySelector(".skills-label");
      const heading = skills.querySelector(".skills-heading");
      const flowItems = skills.querySelectorAll(".skills-flow-item");
      const groups = skills.querySelectorAll(".skills-group");

      if (label) {
        gsap.fromTo(
          label,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skills,
              start: "top 78%",
              once: true,
            },
          }
        );
      }

      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            delay: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skills,
              start: "top 78%",
              once: true,
            },
          }
        );
      }

      if (flowItems.length) {
        gsap.fromTo(
          flowItems,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
            delay: 0.16,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skills,
              start: "top 78%",
              once: true,
            },
          }
        );
      }

      if (groups.length) {
        gsap.fromTo(
          groups,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
            delay: 0.28,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skills,
              start: "top 72%",
              once: true,
            },
          }
        );
      }
    }
  });

  return () => ctx.revert();
}
