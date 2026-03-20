import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Identity = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax/darkening effect
      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: 50,
      });

      // Ambient Blob Floating Animation
      const blobs = bgRef.current.children;
      if(blobs.length >= 2) {
         gsap.to(blobs[0], { x: "20vw", y: "15vh", scale: 1.2, duration: 12, repeat: -1, yoyo: true, ease: "sine.inOut" });
         gsap.to(blobs[1], { x: "-25vw", y: "20vh", scale: 0.8, duration: 15, repeat: -1, yoyo: true, ease: "sine.inOut" });
      }

      // Text reveal effect (masking)
      const lines = textRef.current.querySelectorAll('.reveal-line');
      
      lines.forEach((line) => {
        gsap.fromTo(line, 
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 1,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-40 bg-zinc-50 overflow-hidden text-abyss z-10 rounded-t-[3rem]">
      {/* Ondes Abyssales Background */}
      <div 
        ref={bgRef}
        className="absolute -inset-[100px] pointer-events-none z-0"
      >
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute top-[20%] right-[-10%] w-[80%] h-[80%] bg-gold/15 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex flex-col md:flex-row gap-20 items-stretch relative z-10">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-gold font-bold block mb-8">Identité</span>
            <h2 className="font-syne text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[0.9]">
              Maîtriser<br />
              <span className="text-outline text-black" style={{ WebkitTextStroke: '1px #0A1128', color: 'transparent' }}>l'Océan.</span>
            </h2>
          </div>
          
          <div className="mt-16 md:mt-0 font-mono text-sm max-w-sm text-abyss/60 border-l border-gold/30 pl-6 py-2">
            "Le sillage absolu n'est pas une question de force brute, c'est l'harmonie parfaite entre l'ingénierie et l'hydrodynamisme."
          </div>
        </div>

        <div className="flex-1 text-2xl md:text-3xl lg:text-5xl font-display italic font-light leading-tight tracking-tight text-abyss flex flex-col gap-6" ref={textRef}>
          <div className="overflow-hidden py-4 -my-4"><div className="reveal-line">Nous ne construisons pas</div></div>
          <div className="overflow-hidden py-4 -my-4"><div className="reveal-line">de simples coques. Nous</div></div>
          <div className="overflow-hidden py-4 -my-4"><div className="reveal-line">forgons le silence des</div></div>
          <div className="overflow-hidden py-4 -my-4"><div className="reveal-line text-gold font-bold">profondeurs.</div></div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
