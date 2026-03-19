const Blueprint = ({ title, scale, specs }) => {
  return (
    <div className="w-full h-full bg-abyss text-gold font-mono p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden group">
      {/* Blueprint Grid Background Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity duration-1000"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.4) 1px, transparent 1px),
            linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
        }}
      />
      
      {/* Blueprint Top Header */}
      <div className="relative z-10 flex justify-between items-start text-xs tracking-widest uppercase pb-4 border-b border-gold/30">
        <div>
          <span className="opacity-50 block mb-1">PROJET</span>
          <span className="font-bold text-white">{title}</span>
        </div>
        <div className="text-right">
          <span className="opacity-50 block mb-1">Scale</span>
          <span>{scale}</span>
        </div>
      </div>

      {/* Blueprint Main Illustration (Geometric representation) */}
      <div className="relative z-10 flex-grow flex items-center justify-center py-12">
        <div className="w-3/4 h-32 border-2 border-gold rounded-[40%] flex items-center justify-center relative">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gold opacity-50" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gold opacity-50" />
          <div className="w-1/2 h-16 border border-gold border-dashed rounded-[50%]" />
          
          {/* Measurement Annotations */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-70">&lt; LOA: {specs.length} &gt;</div>
          <div className="absolute top-1/2 -right-16 -translate-y-1/2 text-[10px] opacity-70 transform origin-left">BEAM: {specs.beam}</div>
        </div>
      </div>

      {/* Blueprint Specs Footer */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs pt-4 border-t border-gold/30">
        <div>
          <span className="opacity-50 block mb-1">Matière</span>
          <span className="text-white">{specs.material}</span>
        </div>
        <div>
          <span className="opacity-50 block mb-1">Tirant d'eau</span>
          <span className="text-white">{specs.draft}</span>
        </div>
        <div>
          <span className="opacity-50 block mb-1">Traînée Hydro</span>
          <span className="text-white">{specs.drag}</span>
        </div>
        <div>
          <span className="opacity-50 block mb-1">Résistance</span>
          <span className="text-white">{specs.resistance}</span>
        </div>
      </div>

    </div>
  );
};

export default Blueprint;
