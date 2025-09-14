import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const magnifyGlassRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const magnifyGlass = magnifyGlassRef.current;
    if (!magnifyGlass) return;

    let mouseX = 0;
    let mouseY = 0;
    let glassX = 0;
    let glassY = 0;
    let isMouseMoving = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
    };

    const animate = () => {
      // Smooth following effect with easing
      glassX += (mouseX - glassX) * 0.1;
      glassY += (mouseY - glassY) * 0.1;

      magnifyGlass.style.left = `${glassX}px`;
      magnifyGlass.style.top = `${glassY}px`;

      if (isMouseMoving) {
        magnifyGlass.classList.add('active');
        isMouseMoving = false;
      }

      requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      magnifyGlass.classList.add('active');
    };

    const handleMouseLeave = () => {
      magnifyGlass.classList.remove('active');
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Start animation loop
    animate();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="app">
      <div ref={magnifyGlassRef} className="magnify-glass"></div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Resume />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
