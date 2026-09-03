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
  });

  return () => ctx.revert();
}
