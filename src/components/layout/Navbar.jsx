import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
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
          scrolled ? 'bg-foam/95 px-6 rounded-full shadow-2xl gap-8' : 'bg-foam/90 px-8 rounded-2xl shadow-lg gap-8',
          'backdrop-blur-md border border-abyss/10 text-abyss'
        )}
        style={{ width: '90%', maxWidth: scrolled ? '550px' : '1400px', minWidth: '350px' }}
      >
        <div className="flex items-center gap-4 py-2">
          {/* Logo container enlarged (w-12 h-12), centered, using clip-path to crop bottom-right watermark without decentering */}
          <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
            <img 
              src="/assets/Logo without background.png" 
              alt="Moby Dick Logo"
              className="w-[140%] h-[140%] max-w-none object-contain"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 80%, 80% 100%, 0 100%)' }}
            />
          </div>
          <span className="font-syne font-bold text-xl tracking-widest uppercase">
            Moby Dick
          </span>
        </div>

        <div className="flex items-center gap-8 font-mono text-sm tracking-widest text-abyss/70 whitespace-nowrap">
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
      </nav>
    </header>
  );
};

export default Navbar;
