# Système de Design : Moby Dick

## 1. Identité esthétique
**"Sillage Absolu" (Absolute Wake)**
Cette identité est à la fois imposante (B2B, ingénierie lourde) et profondément luxueuse. L'interface s'inspire de l'hydrodynamisme parfait : sombre, silencieuse, extrêmement précise. Chaque interaction donne l'impression de manipuler un instrument de navigation de très haute technologie.

## 2. Palette de couleurs
- **Primaire : Bleu Abysse (`#0A1128`)** — Un bleu marine extrêmement profond, presque noir.
- **Accent : Or Brossé (`#D4AF37`)** — Utilisé avec grande parcimonie pour les lignes de blueprint et micro-interactions.
- **Fond : Blanc Écume (`#F8F9FA`)** — Pour les moments de respiration et de lecture prolongée.
- **Texte : Titane Brut (`#8C9BAB`) & Blanc Pur (`#FFFFFF`)** — Pour la hiérarchie de lecture sur fond sombre.

## 3. Typographie
- **Police de Titre : `Syne`** — Géométrique, architecturale, avec un tracking défini, en majuscules.
- **Police Dramatique (Display) : `Cormorant Garamond`** — Serif racé, élégant, en italique pour les citations et mots clés.
- **Police Utilitaire : `Space Mono`** — Monospace B2B pour les données techniques, spécifications et blueprints.

## 4. Système d'animation (Les 3 Couches)
- **Couche 1 — Background :** Caustiques et fonds sombres animés subtilement, lignes hydrodynamiques en SVG pour les sections claires.
- **Couche 2 — Scroll :** Scrollytelling lourd. Images sticky qui se dissolvent en blueprints au fur et à mesure du défilement.
- **Couche 3 — Interface :** Micro-interactions denses et magnétiques. Curseur personnalisé (point/loupe) et glassmorphism réactif.

## 5. Boîte à outils d'animation
- React 18 + Vite 5
- TailwindCSS 3
- GSAP + ScrollTrigger (Scrollytelling & Sticky)
- Framer Motion (Transitions de vue & Micro-interactions UI)
- Lenis (Smooth Scroll)
- Lucide React (Icônes)

## 6. Carte des sections
**Page d'Accueil (`/`)**
1. Hero Intro (Vidéo plein écran absorbante)
2. Brand Identity (Contraste et révélation de texte)
3. Heritage / Story (Frise horizontale de savoir-faire)

**Page Modèles (`/products`)**
1. Coque Offshore (Scrollytelling et blueprint)
2. Coque Catamaran (Variante visuelle)
3. Coque DeepOcean & Appel à l'action (Formulaire de contact B2B ultra-premium)
