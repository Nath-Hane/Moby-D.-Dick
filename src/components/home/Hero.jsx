import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const Hero = () => {
  const titleRef = useRef(null);
  
  useEffect(() => {
    if (!titleRef.current) return;
    
    // Splittext alternative using simple nested spans since we don't have SplitText club plugin
    const text = 'MOBY DICK';
    titleRef.current.innerHTML = '';
    
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = 0;
      span.style.display = 'inline-block';
      span.style.transform = 'translateY(40px)';
      span.style.filter = 'blur(10px)';
      if (char === ' ') {
        span.innerHTML = '&nbsp;';
      }
      titleRef.current.appendChild(span);
    });

    const chars = titleRef.current.querySelectorAll('span');

    gsap.to(chars, {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: 'power4.out',
      stagger: 0.05,
      delay: 0.5,
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-60"
        >
          {/* Note: In a real environment we map to the exact file path or public folder. Assuming the assets folder is available at root */}
          <source src="/assets/arrière-plan-landing-page.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/40 via-transparent to-abyss/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full px-4">
        <h1 
          ref={titleRef}
          className="font-syne font-extrabold text-7xl md:text-[9rem] tracking-tighter text-white uppercase leading-none mix-blend-overlay"
        >
          MOBY DICK
        </h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          className="mt-8 font-mono text-titanium text-lg tracking-[0.3em] uppercase max-w-xl mx-auto"
        >
          Ingénierie navale absolue.
        </motion.p>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-white/20 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-gold absolute top-[-50%]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
