# Prompts d'Animation : Moby Dick

### Révélation du Titre Hero
- **Couche :** Interface / Scroll
- **Section(s) concernée(s) :** Hero Intro (Home)
- **Description visuelle :** Le titre massif "MOBY DICK" émerge du noir profond ou de la vidéo, caractère par caractère. Chaque lettre subit un très léger effet de flou (blur) qui se dissipe tout en glissant vers le haut.
- **Comportement :** Se déclenche au chargement de la page (après préchargement de la vidéo fond). Fin à 100% d'opacité.
- **Technique :** GSAP + SplitText (ou Framer Motion avec variateurs). Choisi pour sa performance sur les transformations typographiques complexes.
- **Paramètres clés :** Durée 1.2s, easing `power4.out`, délai entre caractères (stagger) 0.05s.
- **Prompt de reproduction :** "Crée une animation d'entrée de texte où chaque caractère apparaît un par un, en glissant vers le haut depuis une légère translation sur l'axe Y, en passant d'un état flou (blur: 10px) et transparent (opacity: 0) à un état net et 100% opaque. L'animation globale doit être rapide, très fluide, et chaque lettre doit apparaître avec un léger décalage temporel."

### Transition Navbar Glassmorphism
- **Couche :** Interface
- **Section(s) concernée(s) :** Navbar (Globale)
- **Description visuelle :** La barre de navigation passe d'une transparence totale (invisible sur la vidéo d'accueil) à un bandeau sombre "verre dépoli".
- **Comportement :** Se déclenche au premier pixel de scroll, se fond de manière parfaitement linéaire, dure tout le temps du défilement.
- **Technique :** React State + Tailwind (backdrop-blur). Parfaitement natif et très performant.
- **Paramètres clés :** Seuil de scroll 50px, transition bg-color et backdrop-filter 0.3s `ease-in-out`.
- **Prompt de reproduction :** "Crée une barre de navigation fixe au sommet. Lorsqu'on est tout en haut de la page, elle doit être complètement transparente. Dès qu'on descend de plus de 50 pixels, elle doit s'animer doucement pour prendre un fond très sombre avec un effet 'verre dépoli' (blur en arrière-plan) et une légère bordure inférieure semi-transparente."

### Sticky Scrollytelling Coque-Blueprint
- **Couche :** Scroll
- **Section(s) concernée(s) :** Coque Offshore, Coque Catamaran, Coque DeepOcean (Products)
- **Description visuelle :** L'image réaliste de la coque de bateau s'immobilise au centre de l'écran. Alors que l'utilisateur continue de scroller, l'image s'estompe lentement pour révéler les plans techniques (blueprint) placés exactement en dessous, pendant que les données techniques défilent et s'illuminent sur le côté.
- **Comportement :** L'élément conteneur est épinglé (`pin: true`) au scroll. La progression du scroll contrôle l'opacité (0 à 1) du blueprint et l'opacité (1 à 0) de l'image.
- **Technique :** GSAP ScrollTrigger + Scrub. Indispensable pour llier l'avancement de l'animation à la position précise du défilement de l'utilisateur.
- **Paramètres clés :** Scrub 1 (adoucissement), pin de la section complète, hauteur de défilement perçue (start/end) équivalente à 200vh.
- **Prompt de reproduction :** "Crée une section où, lors du défilement, une grande image au centre reste 'épinglée' à l'écran et ne bouge plus. En continuant de scroller, cette image doit se transformer visuellement en une autre image superposée au même endroit (effet de fondu croisé contrôlé par le scroll — opacity allant de 1 à 0 pour la première, et 0 à 1 pour la deuxième). L'effet doit durer sur une distance de défilement importante pour comprendre la transformation, puis l'élément se détache et le scroll normal reprend."

### Curseur Focal (Magnétique)
- **Couche :** Interface
- **Section(s) concernée(s) :** Globale
- **Description visuelle :** Le curseur est un petit point doré qui suit la souris. Lorsqu'il survole un élément interactif (bouton) ou un blueprint, le point s'agrandit pour devenir un cercle vide (outline fin) ou se fond dans le bouton.
- **Comportement :** Mouvement continu (lerp) vers les coordonnées de la souris. Changement d'état (scale) au hover.
- **Technique :** Framer Motion (`useAnimation`, `usePointer`). Lissage natif des coordonnées.
- **Paramètres clés :** Spring physics (damping 20, stiffness 150, mass 0.5), transition rapide pour le scale.
- **Prompt de reproduction :** "Crée un curseur de souris personnalisé qui suit le pointeur physique avec un léger retard élastique. Par défaut, c'est un tout petit point d'une couleur d'accent (doré). Lorsqu'on survole un lien ou un bouton, ce point s'élargit doucement en un cercle creux englobant l'élément cliquable, donnant une sensation d'aimantation au bouton."
