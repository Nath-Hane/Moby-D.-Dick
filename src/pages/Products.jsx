import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HullSection from '../components/product/HullSection';

const Products = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const hulls = [
    {
      title: "Classe Littoral",
      subtitle: "Pech 4",
      description: "Vélocité et précision absolues pour les déplacements côtiers rapides. Conçu autour d'une propulsion hydrojet ultra-dynamique, le Pech 4 offre une accélération balistique tout en maintenant une stabilité parfaite pour des transports VIP.",
      imageColor: "#1a2530", // Dark grey/slate
      imageUrl: `${import.meta.env.BASE_URL}assets/hors-bord.jpg`,
      reverse: false,
      specs: {
        length: "14m",
        beam: "4.2m",
        material: "Kevlar / Carbone Forgé",
        draft: "0.8m",
        drag: "Cv 0.05",
        resistance: "Sea State 3",
        payload: "3.5 Tonnes"
      }
    },
    {
      title: "Classe Offshore",
      subtitle: "Prom 5.5",
      description: "L'alliance parfaite entre l'ingénierie éolienne furtive et le luxe silencieux de la haute mer. Ses foils en titane et son gréement composite profilé lui permettent des croisières transocéaniques à très haute vitesse, dans une autonomie énergétique totale.",
      imageColor: "#4B5563", // Gray
      imageUrl: `${import.meta.env.BASE_URL}assets/voilier.jpg`,
      reverse: true, // Uses light theme for visual rhythm
      specs: {
        length: "24m",
        beam: "6.8m",
        material: "Fibre de Carbone Haut Module",
        draft: "3.5m",
        drag: "Cv 0.03",
        resistance: "Sea State 6",
        payload: "12 Tonnes"
      }
    },
    {
      title: "Projet DeepOcean",
      subtitle: "Stan 8",
      description: "Le mastodonte. Une ingénierie brute dépourvue de compromis. Quand l'océan exige le respect, la DeepOcean l'impose. Prévue pour un confort optimal, même dans la plus tumultueuse des tempêtes.",
      imageColor: "#050814", // Very dark navy
      imageUrl: `${import.meta.env.BASE_URL}assets/yatch.webp`,
      imagePosition: "bottom",
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
    <div className="bg-abyss min-h-screen pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 mb-12 md:mb-24 z-10 relative">
        <span className="font-mono text-xs tracking-widest uppercase text-gold font-bold block mb-4">La Flotte B2B</span>
        <h1 className="font-syne text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight uppercase text-white leading-[0.9]">
          Architectures<br />Navales
        </h1>
      </div>

      <div className="flex flex-col">
        {hulls.map((hull, index) => {
          const hullId = hull.title.toLowerCase().replace(/ /g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          return (
            <div key={index} id={hullId} className="scroll-mt-32">
              <HullSection
                title={hull.title}
                subtitle={hull.subtitle}
                description={hull.description}
                imageColor={hull.imageColor}
                imageUrl={hull.imageUrl}
                imagePosition={hull.imagePosition}
                reverse={hull.reverse}
                specs={hull.specs}
              />
            </div>
          );
        })}
      </div>

      {/* Strategic B2B Lead Gen CTA / Contact block */}
      <section className="bg-gold text-abyss py-16 md:py-32 px-6 md:px-8 lg:px-16 border-t border-abyss flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-6xl uppercase tracking-tighter leading-none mb-8">
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
