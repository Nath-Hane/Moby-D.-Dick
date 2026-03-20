import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TrendingUp, Users, DollarSign, Award } from 'lucide-react';

const Insights = () => {
  const containerRef = useRef(null);

  const posts = [
    {
      quarter: "T1",
      period: "Lancement - Année 1",
      category: "Stratégie & Marketing",
      icon: TrendingUp,
      title: "Le pari du luxe et de la valeur perçue",
      content: "Chez Moby Dick, nous avons fait un choix radical dès le lancement de l'année 1 : ne pas entrer dans une guerre des prix, mais bâtir une image de marque forte. Concentrés sur nos modèles d'élite Stan 8 et Prom 5.5, nous avons misé sur le confort et l'esthétique pour séduire le segment du prestige.",
      bulletPoints: [
        "Investissement marketing audacieux : 300 000 € injectés pour imposer notre signature.",
        "Politique de prix sélective : Tarifs supérieurs de 20% à 30% justifiés par une hausse de la valeur perçue.",
        "Parts de marché en valeur : Captation d'un tiers du marché, validant notre rentabilité."
      ],
      metric: "Rentabilité maximale : score 19.80/20"
    },
    {
      quarter: "T2",
      period: "Croissance - Année 1",
      category: "Pilotage Financier",
      icon: DollarSign,
      title: "Redressement et vision stratégique",
      content: "La performance ne se limite pas aux ventes. Après une clôture d'année précédente contrastée, nous avons entamé ce trimestre une stratégie de trésorerie proactive pour sécuriser notre écosystème.",
      bulletPoints: [
        "Sécurisation financière : 500 000 € injectés pour consolider nos engagements fiscaux et sociaux (Note Tréso : 19.8/20).",
        "Résultat d'exploitation exceptionnel : Bondissement de 25k€ à plus de 370k€ en un mois.",
        "Arbitrage VMP : Rendement supérieur de 5 479 € grâce à une diversification d'actifs rigoureuse."
      ],
      metric: "+1500% Résultat d'Exploit."
    },
    {
      quarter: "T3",
      period: "Expansion - Année 1",
      category: "Ressources Humaines",
      icon: Users,
      title: "Croissance, Recrutement et Rétention de l'Excellence",
      content: "Pour atteindre nos objectifs de pénétration de marché, l'expansion de notre force commerciale était impérative. Nos ressources humaines s'adaptent désormais aux standards de la haute plaisance.",
      bulletPoints: [
        "Déploiement quantitatif : Équipe commerciale quadruplée pour une couverture de marché de 88%.",
        "Rétention & Climat Social : Rémunérations revalorisées (Commission 8%) pour attirer les ambassadeurs du luxe.",
        "Satisfaction d'équipe : Note RH à 84/100, socle de notre stabilité relationnelle avec les clients."
      ],
      metric: "Équipe Commerciale x4"
    },
    {
      quarter: "T4",
      period: "Clôture - Année 1",
      category: "Gestion & Logistique",
      icon: Award,
      title: "Bilan, Succès et Gestion des Cycles",
      content: "Ce dernier trimestre a testé notre agilité. Face aux flux saisonniers, nous avons orchestré nos flux logistiques pour converger vers une efficience maximale à l'approche du nouveau cycle.",
      bulletPoints: [
        "Fluidité des Stocks : Gestion optimale des stocks avec ajustements tactiques en fin de cycle.",
        "Fonds de Roulement (BFR) : Canalisé malgré 8.1M€ de créances, grâce à 1.4M€ de Capacité d'autofinancement (CAF).",
        "Résilience : Maintien de la structure humaine en basse saison pour capitaliser sur l'expertise acquise."
      ],
      metric: "Note Globale : 16/20"
    }
  ];

  return (
    <div className="bg-abyss min-h-screen pt-32 text-white pb-20">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 mb-24 z-10 relative">
        <span className="font-mono text-xs tracking-widest uppercase text-gold font-bold block mb-4">Actualités Corporate</span>
        <h1 className="font-syne text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[0.9]">
          Insights<br />Stratégiques
        </h1>
        <p className="font-mono text-sm max-w-sm text-titanium mt-4">
          Analyse trimestrielle de la performance & vision de l'Armateur Moby Dick.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16" ref={containerRef}>
        {/* Timeline main vertical line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2" />

        <div className="flex flex-col gap-20">
          {posts.map((post, index) => {
            const IconComponent = post.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center relative ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Timeline node/center */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gold border-4 border-abyss md:-translate-x-1/2 z-20 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

                <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-gold/30 transition-all duration-500 group relative">
                    {/* Floating Quarter */}
                    <div className="absolute -top-4 -left-4 md:-top-5 md:-left-5 bg-gold text-abyss font-syne font-black text-xl w-12 h-12 flex items-center justify-center rounded-xl shadow-lg">
                      {post.quarter}
                    </div>

                    <div className="flex items-center gap-3 mb-6 mt-2">
                      <span className="bg-gold/10 text-gold font-mono text-2xs px-3 py-1 rounded-full">{post.category}</span>
                      <span className="font-mono text-titanium text-xs">{post.period}</span>
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-gold group-hover:scale-110 transition-transform duration-500">
                        <IconComponent size={24} />
                      </div>
                      <h2 className="font-syne font-bold text-xl md:text-2xl tracking-tight leading-tight">
                        {post.title}
                      </h2>
                    </div>

                    <p className="font-mono text-sm text-titanium/80 mb-6 leading-relaxed">
                      {post.content}
                    </p>

                    <ul className="flex flex-col gap-3 font-mono text-xs text-titanium/60 mb-6">
                      {post.bulletPoints.map((bp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gold mt-0.5">▪</span> {bp}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-gold">{post.metric}</span>
                      <span className="font-mono text-2xs opacity-40">Moby Dick Int.</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Insights;
