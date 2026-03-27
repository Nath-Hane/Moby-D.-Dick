import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Blueprint from './Blueprint';
import { cn } from '@/lib/utils';
import { Crosshair } from 'lucide-react';

const HullSection = ({ title, subtitle, description, imageColor, imageUrl, imagePosition, specs, reverse }) => {
  const sectionRef = useRef(null);
  const visualsRef = useRef(null);
  const imageRef = useRef(null);
  const blueprintRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // Desktop animations
      mm.add("(min-width: 768px)", () => {
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
      });

      // Mobile animations (no pinning, flow naturally)
      mm.add("(max-width: 767px)", () => {
        const masterTl = gsap.timeline({
          scrollTrigger: {
            trigger: visualsRef.current,
            start: 'top 80%',
            end: 'bottom top',
            scrub: true,
          }
        });

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
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={cn("relative w-full md:min-h-[150vh] flex flex-col md:flex-row items-start", reverse ? "bg-zinc-50 text-abyss" : "bg-abyss text-foam")}>
      
      {/* Visuals Area (Left side on desktop, right if reversed) */}
      <div 
        ref={visualsRef} 
        className={cn(
          "w-full md:w-[60vw] h-[50vh] md:h-screen flex items-center justify-center p-10 md:p-16 relative",
          reverse ? "md:order-last" : "md:order-first"
        )}
      >
        <div className="w-full max-w-2xl aspect-[4/3] max-h-[80vh] relative">
          
          {/* HUD Elements */}
          <div className={cn("absolute -inset-4 md:-inset-8 border pointer-events-none", reverse ? "border-abyss/10 bg-abyss/[0.02]" : "border-white/5 bg-white/[0.02]")} />
          
          {/* Corners (Brackets) */}
          <div className={cn("absolute -top-6 md:-top-12 -left-6 md:-left-12 w-8 md:w-16 h-8 md:h-16 border-t border-l pointer-events-none", reverse ? "border-abyss/40" : "border-gold/40")} />
          <div className={cn("absolute -top-6 md:-top-12 -right-6 md:-right-12 w-8 md:w-16 h-8 md:h-16 border-t border-r pointer-events-none", reverse ? "border-abyss/40" : "border-gold/40")} />
          <div className={cn("absolute -bottom-6 md:-bottom-12 -left-6 md:-left-12 w-8 md:w-16 h-8 md:h-16 border-b border-l pointer-events-none", reverse ? "border-abyss/40" : "border-gold/40")} />
          <div className={cn("absolute -bottom-6 md:-bottom-12 -right-6 md:-right-12 w-8 md:w-16 h-8 md:h-16 border-b border-r pointer-events-none", reverse ? "border-abyss/40" : "border-gold/40")} />
          
          {/* Random crosshairs */}
          <Crosshair className={cn("absolute top-1/4 -left-10 md:-left-16 w-4 h-4 pointer-events-none", reverse ? "text-abyss/30" : "text-gold/30")} />
          <Crosshair className={cn("absolute bottom-1/4 -right-10 md:-right-16 w-4 h-4 pointer-events-none", reverse ? "text-abyss/30" : "text-gold/30")} />
          
          {/* Data text */}
          <div className={cn("absolute -top-8 md:-top-10 left-0 font-mono text-[8px] md:text-[10px] tracking-widest uppercase pointer-events-none", reverse ? "text-abyss/50" : "text-gold/50")}>
            SYS.TRACKING_{title.toUpperCase().replace(/ /g, '_')} // HULL.ID: {title.length * 1024}
          </div>
          <div className={cn("absolute -bottom-8 md:-bottom-10 right-0 font-mono text-[8px] md:text-[10px] tracking-widest uppercase pointer-events-none", reverse ? "text-abyss/50" : "text-gold/50")}>
            SCALE: 1:100 // VECTOR: ALIGNED
          </div>
          <div className={cn("absolute top-1/2 -left-16 md:-left-24 -translate-y-1/2 -rotate-90 font-mono text-[8px] md:text-[10px] tracking-widest uppercase whitespace-nowrap pointer-events-none origin-center", reverse ? "text-abyss/30" : "text-gold/30")}>
            ELEVATION PROFILE // {specs.material.toUpperCase()}
          </div>

          <div className="absolute inset-0 z-10 shadow-2xl overflow-hidden border border-white/10 rounded-sm">
          {/* Top layer: Beautiful exterior image placeholder */}
          <div 
            ref={imageRef} 
            className={cn("absolute inset-0 z-20 flex items-center justify-center", !imageUrl && "bg-zinc-900")}
            style={{ backgroundColor: !imageUrl ? imageColor : 'transparent' }}
          >
            {imageUrl && (
              <img 
                src={imageUrl} 
                alt={`Rendu extérieur ${title}`} 
                className={cn("absolute inset-0 w-full h-full object-cover", imagePosition === 'bottom' ? 'object-bottom' : 'object-center')} 
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10" />
            {!imageUrl && <div className="font-syne text-4xl font-bold tracking-widest text-white/50 uppercase mix-blend-overlay z-20">RENDU EXTERIEUR</div>}
          </div>
          
          {/* Bottom layer: Technical blueprint */}
          <div ref={blueprintRef} className="absolute inset-0 z-10 bg-abyss opacity-0">
             <Blueprint title={title} scale="1:100" specs={specs} />
          </div>
          </div>
        </div>
      </div>

      {/* Content Area (Scrolls past) */}
      <div className={cn("w-full md:w-[40vw] py-16 md:pt-[50vh] md:pb-[50vh] px-6 md:px-8 lg:px-16 flex flex-col justify-center", reverse ? "md:order-first" : "md:order-last")}>
        <div ref={textRef}>
          <h2 className={cn("font-syne text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight mb-2 leading-none", reverse ? "text-abyss" : "text-white")}>
            {title}
          </h2>
          {subtitle && (
            <h3 className="font-mono text-3xl md:text-4xl tracking-widest text-gold mb-8 uppercase font-bold">
              Arch: {subtitle}
            </h3>
          )}
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
