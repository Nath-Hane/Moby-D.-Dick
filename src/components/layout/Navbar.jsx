import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        setIsOpen(false); // Close menu on scroll
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 transition-all duration-300 ease-in-out',
        scrolled ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'
      )}
    >
      <nav
        className={cn(
          'flex items-center justify-between transition-all duration-500 ease-in-out',
          scrolled ? 'bg-foam/95 px-4 md:px-6 rounded-full shadow-2xl md:gap-8' : 'bg-foam/90 px-4 md:px-8 rounded-2xl shadow-lg gap-4 md:gap-8',
          'backdrop-blur-md border border-abyss/10 text-abyss relative'
        )}
        style={{ width: '95%', maxWidth: scrolled ? '550px' : '1400px' }}
      >
        <div className="flex items-center gap-4 py-2">
          {/* Logo container enlarged (w-12 h-12), centered, using clip-path to crop bottom-right watermark without decentering */}
          <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
            <img 
              src={`${import.meta.env.BASE_URL}assets/Logo without background.png`} 
              alt="Moby Dick Logo"
              className="w-[140%] h-[140%] max-w-none object-contain"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 80%, 80% 100%, 0 100%)' }}
            />
          </div>
          <span className="font-syne font-bold text-xl tracking-widest uppercase">
            Moby Dick
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-widest text-abyss/70 whitespace-nowrap">
          <Link
            to="/"
            className={cn(
              'hover:text-gold transition-colors interactive-element',
              location.pathname === '/' && 'text-abyss font-bold'
            )}
          >
            LA MARQUE
          </Link>
          <Link
            to="/products"
            className={cn(
              'hover:text-gold transition-colors interactive-element',
              location.pathname === '/products' && 'text-abyss font-bold'
            )}
          >
            FLOTTE
          </Link>
          <Link
            to="/insights"
            className={cn(
              'hover:text-gold transition-colors interactive-element',
              location.pathname === '/insights' && 'text-abyss font-bold'
            )}
          >
            INSIGHTS
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button 
          className="md:hidden p-2 text-abyss hover:text-gold transition-colors interactive-element"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu dropdown */}
        <div className={cn(
          "absolute top-full left-0 right-0 mt-4 p-6 bg-foam/95 rounded-2xl shadow-xl border border-abyss/10 flex flex-col gap-6 font-mono text-sm tracking-widest text-abyss/70 backdrop-blur-md transition-all duration-300 md:hidden origin-top",
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        )}>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={cn(
              'hover:text-gold transition-colors w-full text-center py-2 interactive-element border-b border-abyss/10',
              location.pathname === '/' && 'text-abyss font-bold border-gold'
            )}
          >
            LA MARQUE
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className={cn(
              'hover:text-gold transition-colors w-full text-center py-2 interactive-element border-b border-abyss/10',
              location.pathname === '/products' && 'text-abyss font-bold border-gold'
            )}
          >
            FLOTTE
          </Link>
          <Link
            to="/insights"
            onClick={() => setIsOpen(false)}
            className={cn(
              'hover:text-gold transition-colors w-full text-center py-2 interactive-element',
              location.pathname === '/insights' && 'text-abyss font-bold'
            )}
          >
            INSIGHTS
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
