import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const isHovering = useRef(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
    
    // Only initialize GSAP/listeners if not on a touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // Ring follow vars (smooth trailing for ring only)
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot tracks exactly with no lag
      dot.style.transform = `translate3d(${mouseX - 14}px, ${mouseY - 14}px, 0)`;
    };

    const onMouseOver = (e) => {
      const hoverable = e.target.closest('a, button, .interactive-element');
      isHovering.current = !!hoverable;
    };

    // Smooth ring trailing loop
    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      dot.style.opacity = isHovering.current ? '0' : '1';
      ring.style.transform = `translate3d(${ringX - 30}px, ${ringY - 30}px, 0) scale(${isHovering.current ? 1 : 0.5})`;
      ring.style.opacity = isHovering.current ? '1' : '0';
      rafId = requestAnimationFrame(loop);
    };

    loop();

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Global style to hide native cursor */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* Main dot — tracks 1:1, no lag */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 28,
          height: 28,
          borderRadius: '50%',
          backgroundColor: '#D4AF37',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          willChange: 'transform',
          transition: 'none',
        }}
      />

      {/* Ring — appears on hover with smooth trail */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 60,
          height: 60,
          borderRadius: '50%',
          border: '1.5px solid #D4AF37',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          opacity: 0,
          willChange: 'transform, opacity',
          transition: 'opacity 0.2s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;
