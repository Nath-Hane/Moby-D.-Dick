import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#050B14] text-titanium py-12 md:py-20 px-6 md:px-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}assets/Logo without background.png`} 
                alt="Moby Dick Logo"
                className="w-[140%] h-[140%] max-w-none object-contain"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 80%, 80% 100%, 0 100%)' }}
              />
            </div>
            <span className="font-syne font-bold text-xl tracking-widest uppercase text-white">
              Moby Dick
            </span>
          </div>
          <p className="font-mono text-sm leading-relaxed">
            Ingénierie navale de pointe. Des coques conçues pour maîtriser les abysses avec une précision absolue.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 font-mono text-sm w-full md:w-auto">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-widest uppercase mb-2">Flotte</h4>
            <Link to="/products#classe-littoral" className="hover:text-gold transition-colors interactive-element">Classe Littoral</Link>
            <Link to="/products#classe-offshore" className="hover:text-gold transition-colors interactive-element">Flotte Offshore</Link>
            <Link to="/products#projet-deepocean" className="hover:text-gold transition-colors interactive-element">Projets DeepOcean</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-widest uppercase mb-2">Presse & Vision</h4>
            <Link to="/insights" className="hover:text-gold transition-colors interactive-element">Insights Stratégiques</Link>
            <a href="#" className="hover:text-gold transition-colors interactive-element">Rapports Financiers</a>
            <a href="#" className="hover:text-gold transition-colors interactive-element">Communiqués</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 md:mt-16 pt-8 flex flex-col md:flex-row justify-between items-center font-mono text-xs opacity-60 gap-4 md:gap-0 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Moby Dick Naval Engineering. Tous droits réservés.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
