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
        opacity: 0.8,
      });

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
      {/* Subtle topographic background lines */}
      <div 
        ref={bgRef}
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 100% 50%, transparent 20%, #D4AF37 21%, #D4AF37 21.5%, transparent 22%), radial-gradient(circle at 0% 50%, transparent 20%, #0A1128 21%, #0A1128 21.5%, transparent 22%)',
          backgroundSize: '100px 100px',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex flex-col md:flex-row gap-20 items-stretch">
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
          <div className="overflow-hidden pb-2"><div className="reveal-line">Nous ne construisons pas</div></div>
          <div className="overflow-hidden pb-2"><div className="reveal-line">de simples coques. Nous</div></div>
          <div className="overflow-hidden pb-2"><div className="reveal-line">forgons le silence des</div></div>
          <div className="overflow-hidden pb-2"><div className="reveal-line text-gold font-bold">profondeurs.</div></div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
