import { Anchor } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050B14] text-titanium py-20 px-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center gap-2">
            <Anchor className="w-6 h-6 text-gold" />
            <span className="font-syne font-bold text-xl tracking-widest uppercase text-white">
              Moby Dick
            </span>
          </div>
          <p className="font-mono text-sm leading-relaxed">
            Ingénierie navale de pointe. Des coques conçues pour maîtriser les abysses avec une précision absolue.
          </p>
        </div>

        <div className="flex gap-16 font-mono text-sm">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-widest uppercase mb-2">Division B2B</h4>
            <a href="#" className="hover:text-gold transition-colors interactive-element">Classe Littoral</a>
            <a href="#" className="hover:text-gold transition-colors interactive-element">Flotte Offshore</a>
            <a href="#" className="hover:text-gold transition-colors interactive-element">Projets DeepOcean</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-widest uppercase mb-2">Contact</h4>
            <a href="#" className="hover:text-gold transition-colors interactive-element">Consultation</a>
            <a href="#" className="hover:text-gold transition-colors interactive-element">Direction technique</a>
            <a href="#" className="hover:text-gold transition-colors interactive-element">Presse</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center font-mono text-xs opacity-60">
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
