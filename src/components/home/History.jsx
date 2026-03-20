import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const History = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Calculate how far to move horizontally
      const scrollWidth = containerRef.current.scrollWidth - window.innerWidth;

      gsap.to(containerRef.current, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const milestones = [
    { year: "1984", title: "LE PREMIER SILLAGE", desc: "La première coque Moby Dick touche l'eau. Un design radical qui redéfinit les standards de stabilité offshore." },
    { year: "1997", title: "ALLIAGE TITANE", desc: "Intégration d'alliages aérospatiaux dans l'armature principale. La Classe Offshore voit le jour." },
    { year: "2012", title: "GÉOMÉTRIE FRACTALE", desc: "Dépôt de brevet sur une conception de quille inspirée des ailerons de grands cétacés, réduisant la traînée de 18%." },
    { year: "2024", title: "L'ÈRE DE L'ABYSSE", desc: "Classe DeepOcean. Des navires haut de gamme capables d'opérer dans les conditions océaniques les plus hostiles de la planète." }
  ];

  return (
    <section ref={sectionRef} className="h-screen w-full bg-abyss text-foam overflow-hidden relative border-t border-white/5 pt-20">

      <div className="absolute top-20 left-16 z-20">
        <span className="font-mono text-xs tracking-widest uppercase text-gold font-bold">Héritage</span>
        <h2 className="font-syne text-4xl font-bold uppercase mt-2">Chronologie</h2>
      </div>

      <div
        ref={containerRef}
        className="h-full w-fit flex items-center px-16 lg:px-[20vw] gap-[15vw]"
      >
        {/* Decorative horizontal line representing the timeline */}
        <div className="absolute top-1/2 left-0 w-[500vw] h-[1px] bg-white/10 -translate-y-1/2 z-0" />

        {milestones.map((milestone, idx) => (
          <div key={idx} className="w-[300px] md:w-[400px] shrink-0 relative z-10 group">
            <div className="w-4 h-4 rounded-full bg-abyss border border-gold absolute top-[50%] -left-2 -translate-y-1/2 group-hover:bg-gold transition-colors duration-500" />
            <div className="mb-8">
              <span className="font-display italic text-6xl md:text-8xl text-white/5 group-hover:text-gold/20 transition-colors duration-500 block -ml-4">
                {milestone.year}
              </span>
              <h3 className="font-syne text-xl md:text-2xl font-bold tracking-widest uppercase mt-4 mb-4">
                {milestone.title}
              </h3>
              <p className="font-mono text-sm text-titanium leading-relaxed max-w-xs group-hover:text-foam transition-colors">
                {milestone.desc}
              </p>
            </div>

            {/* Historical images */}
            <div className="w-full h-64 bg-white/5 border border-white/10 mt-16 group-hover:border-gold/30 transition-colors overflow-hidden relative">
              <img 
                src={`${import.meta.env.BASE_URL}assets/archive_${milestone.year}.png`} 
                alt={`Archive Moby Dick ${milestone.year}`} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
              />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default History;
