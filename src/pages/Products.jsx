import { useEffect } from 'react';
import HullSection from '../components/product/HullSection';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hulls = [
    {
      title: "Classe Offshore",
      description: "Le fer de lance de Moby Dick. Conçue pour briser l'océan ouvert avec une violence minimale. La Classe Offshore redéfinit les attentes en matière d'opérations lointaines en eaux hostiles grâce à son coefficient hydrodynamique inégalé.",
      imageColor: "#1a2530", // Dark grey/slate
      reverse: false,
      specs: {
        length: "85m",
        beam: "18m",
        material: "Alliage Carbone/Titane",
        draft: "4.5m",
        drag: "Cv 0.12",
        resistance: "Sea State 7",
        payload: "1250 Tonnes"
      }
    },
    {
      title: "Classe Catamaran",
      description: "La stabilité comme doctrine mathématique. Deux coques asymétriques sculptées pour une réduction de traînée de 30% à grande vitesse. L'outil B2B ultime pour le transport logistique furtif et lourd.",
      imageColor: "#4B5563", // Gray
      reverse: true, // Uses light theme for visual rhythm
      specs: {
        length: "110m",
        beam: "32m",
        material: "Aluminium Renforcé Otan",
        draft: "2.8m",
        drag: "Cv 0.08",
        resistance: "Sea State 5",
        payload: "2400 Tonnes"
      }
    },
    {
      title: "Projet DeepOcean",
      description: "Le mastodonte. Une ingénierie brute dépourvue de compromis. Quand l'océan exige le respect, la DeepOcean l'impose. Prévue pour le forage, l'exploration et les interventions de sauvetage critiques sous la glace.",
      imageColor: "#050814", // Very dark navy
      reverse: false,
      specs: {
        length: "145m",
        beam: "28m",
        material: "Acier Balistique",
        draft: "9.5m",
        drag: "Cv 0.18",
        resistance: "Sea State 9+",
        payload: "5500 Tonnes"
      }
    }
  ];

  return (
    <div className="bg-abyss min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 mb-24 z-10 relative">
         <span className="font-mono text-xs tracking-widest uppercase text-gold font-bold block mb-4">La Flotte B2B</span>
         <h1 className="font-syne text-5xl md:text-7xl font-bold tracking-tight uppercase text-white leading-[0.9]">
            Architectures<br />Navales
         </h1>
      </div>

      <div className="flex flex-col">
        {hulls.map((hull, index) => (
          <div key={index}>
             <HullSection 
               title={hull.title}
               description={hull.description}
               imageColor={hull.imageColor}
               reverse={hull.reverse}
               specs={hull.specs}
             />
          </div>
        ))}
      </div>
      
      {/* Strategic B2B Lead Gen CTA / Contact block */}
      <section className="bg-gold text-abyss py-32 px-8 lg:px-16 border-t border-abyss flex items-center justify-center">
         <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h2 className="font-syne font-bold text-4xl md:text-6xl uppercase tracking-tighter leading-none mb-8">
               Engager le chantier naval
            </h2>
            <p className="font-mono text-sm max-w-xl mx-auto mb-12 opacity-80 leading-relaxed text-abyss">
               Notre bureau d'étude technique opère uniquement sur cahier des charges strict. Prenez contact pour modéliser votre prochain déploiement océanique.
            </p>
            <button className="bg-abyss text-gold px-12 py-5 font-mono text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-abyss transition-colors duration-300 interactive-element">
               Contacter l'Ingénierie
            </button>
         </div>
      </section>
    </div>
  );
};

export default Products;
