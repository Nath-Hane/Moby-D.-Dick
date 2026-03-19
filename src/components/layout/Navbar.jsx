import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Anchor } from 'lucide-react';

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
          'flex items-center justify-between transition-all duration-300',
          scrolled ? 'glass' : 'bg-transparent px-8'
        )}
        style={{ width: scrolled ? '50%' : '90%', minWidth: '320px' }}
      >
        <div className="flex items-center gap-2 py-3">
          <Anchor className="w-5 h-5 text-gold" />
          <span className="font-syne font-bold text-lg tracking-widest uppercase">
            Moby Dick
          </span>
        </div>

        <div className="flex items-center gap-8 font-mono text-sm tracking-widest text-titanium">
          <Link
            to="/"
            className={cn(
              'hover:text-gold transition-colors interactive-element',
              location.pathname === '/' && 'text-white'
            )}
          >
            LA MARQUE
          </Link>
          <Link
            to="/products"
            className={cn(
              'hover:text-gold transition-colors interactive-element',
              location.pathname === '/products' && 'text-white'
            )}
          >
            FLOTTE
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
