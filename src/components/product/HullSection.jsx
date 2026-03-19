import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Blueprint from './Blueprint';
import { cn } from '@/lib/utils';

const HullSection = ({ title, description, imageColor, specs, reverse }) => {
  const sectionRef = useRef(null);
  const visualsRef = useRef(null);
  const imageRef = useRef(null);
  const blueprintRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the visual area while scrolling past
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: visualsRef.current,
          scrub: true,
          anticipatePin: 1,
        }
      });

      // Crossfade image to blueprint
      masterTl.to(imageRef.current, {
        opacity: 0,
        ease: 'none',
        duration: 0.5,
      }, 0);

      masterTl.fromTo(blueprintRef.current, {
        opacity: 0,
        scale: 0.95,
      }, {
        opacity: 1,
        scale: 1,
        ease: 'power1.out',
        duration: 0.8,
      }, 0);

      // Parallax effect on the text
      gsap.to(textRef.current, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={cn("relative w-full min-h-[150vh] flex flex-col md:flex-row items-start", reverse ? "bg-zinc-50 text-abyss" : "bg-abyss text-foam")}>
      
      {/* Visuals Area (Left side on desktop, right if reversed) */}
      <div 
        ref={visualsRef} 
        className={cn(
          "w-full md:w-[60vw] h-screen flex items-center justify-center p-8",
          reverse ? "md:order-last" : "md:order-first"
        )}
      >
        <div className="w-full max-w-2xl aspect-[4/3] max-h-[80vh] relative shadow-2xl rounded-sm overflow-hidden border border-white/5">
          {/* Top layer: Beautiful exterior image placeholder */}
          <div 
            ref={imageRef} 
            className="absolute inset-0 z-20 flex items-center justify-center"
            style={{ backgroundColor: imageColor }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
            <div className="font-syne text-4xl font-bold tracking-widest text-white/50 uppercase mix-blend-overlay">RENDU EXTERIEUR</div>
          </div>
          
          {/* Bottom layer: Technical blueprint */}
          <div ref={blueprintRef} className="absolute inset-0 z-10 bg-abyss opacity-0">
             <Blueprint title={title} scale="1:100" specs={specs} />
          </div>
        </div>
      </div>

      {/* Content Area (Scrolls past) */}
      <div className={cn("w-full md:w-[40vw] pt-[50vh] pb-[50vh] px-8 lg:px-16 flex flex-col justify-center", reverse ? "md:order-first" : "md:order-last")}>
        <div ref={textRef}>
          <h2 className={cn("font-syne text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8 leading-none", reverse ? "text-abyss" : "text-white")}>
            {title}
          </h2>
          <p className={cn("font-mono text-sm leading-relaxed mb-12", reverse ? "text-abyss/80" : "text-titanium")}>
            {description}
          </p>
          
          <div className="space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest font-bold border-b border-gold/30 pb-2 mb-4 text-gold">Données de Performance</h3>
            <ul className={cn("font-mono text-xs uppercase tracking-wider space-y-4", reverse ? "text-abyss" : "text-white")}>
              <li className="flex justify-between border-b border-black/5 pb-2">
                <span className="opacity-50">Stabilité Statique</span>
                <span>Excellente</span>
              </li>
              <li className="flex justify-between border-b border-black/5 pb-2">
                <span className="opacity-50">Franchissement Lame</span>
                <span>Optimisé à 15°</span>
              </li>
              <li className="flex justify-between border-b border-black/5 pb-2">
                <span className="opacity-50">Charge Utile Max</span>
                <span>{specs.payload}</span>
              </li>
            </ul>
          </div>

          <button className={cn(
            "mt-16 px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest border transition-all duration-300 hover:bg-gold hover:text-abyss hover:border-gold interactive-element",
            reverse ? "border-abyss/20 text-abyss" : "border-white/20 text-white"
          )}>
            Spécifications Détaillées
          </button>
        </div>
      </div>
    </section>
  );
};

export default HullSection;
