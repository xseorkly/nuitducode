// Données du site — Objectif Nuit du C0de (préparation Scratch, F. Klabi)
window.PADLET = "https://padlet.com/fklabi/objectif-la-nuit-du-code-2kk0nex3f984v9cc";

window.LEVELS = {
  deb: { label: "Débutant", color: "#3ee6a8", desc: "Prendre en main Scratch : se déplacer, tracer, répéter, créer ses blocs." },
  int: { label: "Intermédiaire", color: "#ffc542", desc: "Scène, lutins, interactions, variables : programmer de vrais petits jeux." },
  exp: { label: "Expert", color: "#ff5d8f", desc: "Conditions réelles : un game pack imposé, une démarche de projet, un jeu original." },
  bonus: { label: "Bonus", color: "#8f7bff", desc: "Cahiers des charges avancés et univers adaptés au cycle 3." }
};

/* Fichiers disponibles sur le site (dossier files/ et pages/) */
window.FILES = {
  "sequence-0": { pdf: "Objectif_Coding_Sequence_0.pdf", pages: ["s0-p1", "s0-p2", "s0-p3", "s0-p4", "s0-p5"] },
  "sequence-1": { pdf: "Objectif_Coding_Sequence_1.pdf", pages: ["s1-p1", "s1-p2"] },
  "sequence-2": { pdf: "Objectif_Coding_Sequence_2.pdf", pages: ["s2-p1", "s2-p2"] },
  "sequence-3": { pdf: "Objectif_Coding_Sequence_3.pdf", pages: ["s3-p1", "s3-p2"] },
  "sequence-4": { pdf: "Objectif_Coding_Sequence_4.pdf", pages: ["s4-p1", "s4-p2"] },
  "sequence-5": { pdf: "Objectif_Coding_Sequence_5.pdf", pages: ["s5-p1", "s5-p2"] },
  "sequence-6": { pdf: "Objectif_Coding_Sequence_6.pdf", pages: ["s6-p1", "s6-p2"] },
  "sequence-7": { pdf: "Objectif_Coding_Sequence_7.pdf", pages: ["s7-p1"] },
  "sequence-passerelle": { pdf: "Objectif_Coding_Sequence_1bis_Passerelle.pdf", pages: ["s1bis-p1"] },
  "game-pack-1": { pdf: "Objectif_Coding_Game_Pack_1_Shooting_Duck.pdf", pages: ["gpf1-p1"] },
  "game-pack-2": { pdf: "Objectif_Coding_Game_Pack_2_Race_Car.pdf", pages: ["gpf2-p1"] },
  "game-pack-3": { pdf: "Objectif_Coding_Game_Pack_3_Jeu_de_plateau.pdf", pages: ["gpf3-p1"] },
  "bonus-1": { pdf: "Objectif_Coding_Bonus_1_Tresor_de_Piggy.pdf", pages: ["b1-p1"] },
  "bonus-2": { pdf: "Objectif_Coding_Bonus_2_Flappy_Piggy.pdf", pages: ["b2-p1"] },
  "bonus-3": { pdf: "Objectif_Coding_Bonus_3_Cycle3_Labyrinthe.pdf", pages: ["b3-p1"] },
  "bonus-4": { pdf: "Objectif_Coding_Bonus_4_Cycle3_Combat_spatial.pdf", pages: ["b4-p1"] }
};
window.PACKFILES = {
  gp1: "GamePack_1.zip", gp2: "GamePack_2.zip", gp3: "GamePack_3.zip",
  gp4: "Le_tresor_de_Piggy.zip", gp5: "Flappy_Piggy.zip",
  gp6: "Cycle_3_GamePack_Labyrinthe.zip", gp7: "Cycle_3_GamePack_Espace.zip"
};
window.SB3 = { "GamePack_1.zip": "_GamePack_1.sb3", "GamePack_2.zip": "GamePack_2.sb3", "GamePack_3.zip": "GamePack_3.sb3", "Le_tresor_de_Piggy.zip": "Le_tresor_de_Piggy.sb3", "Flappy_Piggy.zip": "Flappy_Piggy.sb3", "Cycle_3_GamePack_Labyrinthe.zip": "Cycle_3_GamePack_Labyrinthe.sb3", "Cycle_3_GamePack_Espace.zip": "Cycle_3_GamePack_Espace.sb3" };
window.COMPIL = "Objectif_Coding_Sequences_0-7_compilation.pdf";

/* Repères programme (cycle 4 – algorithmique et programmation) utilisés côté prof */
const C = {
  ecrire: "Écrire, mettre au point et exécuter un programme simple",
  algo: "Analyser le comportement attendu d'un système et décomposer un problème en sous-problèmes",
  evenement: "Programmer des déclenchements d'actions par des événements",
  boucles: "Utiliser des boucles et des instructions conditionnelles",
  variables: "Utiliser des variables",
  parallele: "Programmer plusieurs scripts s'exécutant en parallèle (plusieurs lutins)",
  messages: "Faire communiquer des objets (messages)",
  projet: "Mener un projet en équipe : imaginer, planifier, réaliser, présenter",
  maths: "Mathématiques : repérage dans le plan, angles, figures usuelles, nombres aléatoires",
  crea: "Démarche de création : storyboard, règle du jeu, itérations successives"
};

window.SEQUENCES = [
/* ============================== #0 ============================== */
{
  id: "sequence-0", num: "#0", title: "Pour prendre un bon départ", level: "deb", img: "img/s0-pdf.jpg", duree: "2 séances de 55 min",
  resume: "Premiers pas avec le stylo de Scratch : on assemble des blocs pour tracer carrés, triangles et rosaces, puis on « exécute » des scripts à la main sur papier quadrillé.",
  contenu: "5 pages : 1 page de 6 défis Scratch (carré, triangle, rosaces), 3 pages d'exercices débranchés (« Scratch le pirate », chemins sur quadrillage, mot mystère) et 1 page d'aide avec les scripts des défis.",
  notions: ["Avancer de… pas", "Tourner de… degrés", "Stylo (poser, relever, effacer)", "Boucle « répéter »", "Angles et figures"],
  eleve: {
    mission: "Tu vas apprendre à piloter le chat de Scratch comme un robot dessinateur. À la fin, tu sauras lui faire tracer des carrés, des triangles et de jolies rosaces… et même lire un programme sans ordinateur !",
    besoin: ["Un ordinateur avec Scratch (scratch.mit.edu → Créer)", "L'extension « Stylo » : bouton bleu en bas à gauche → Stylo", "Un crayon pour les exercices papier"],
    etapes: [
      ["Découvre les blocs", "Glisse dans la zone de script les blocs « effacer tout », « stylo en position d'écriture », « avancer de 100 pas », « tourner de 90 degrés ». Clique sur chacun : que fait le chat ?", "Clique sur un bloc pour l'essayer tout seul, sans lancer tout le programme."],
      ["Défi 1 – Le carré", "En cliquant sur les bons blocs, trace un carré de 100 pas, efface-le, puis trace un carré de 50 pas. Ensuite, colle les blocs les uns sous les autres pour obtenir un programme qui trace un carré de 10 pas.", "Un carré = 4 fois « avancer » + « tourner de 90° »."],
      ["Défi 2 – Le triangle", "Modifie les nombres pour tracer un triangle équilatéral de côté 120.", "Pour un triangle, le chat tourne de 120° et non de 60° !"],
      ["Défi 3 – La rosace", "Mets ton carré dans une boucle : après chaque carré, le chat tourne un peu et recommence.", "36 répétitions × 10° = un tour complet (360°)."],
      ["Défis experts 4, 5, 6", "Reproduis les trois rosaces de la fiche. Les défis 4 et 5 partent du défi 3, le défi 6 du triangle.", "Change l'angle de rotation ou le nombre de répétitions et observe."],
      ["Sans ordinateur – Les chemins", "Sur le quadrillage, dessine le chemin tracé par chaque programme (1 carreau = 20 pas).", "Suis les blocs un par un avec ton crayon, comme si tu étais le chat."],
      ["Sans ordinateur – Scratch le pirate", "Suis le programme pour trouver le bon coffre (a, b ou c), fais le calcul du coffre, puis applique le programme de calcul pour obtenir le code à 3 chiffres.", "Attention aux priorités : on calcule d'abord ce qui est entre crochets et parenthèses."],
      ["Sans ordinateur – Le mot mystère", "Trace la figure du script (1 carreau = 10 pas) en partant de (0 ; 0) : les figures forment un mot.", "Note la position du crayon après chaque bloc."]
    ],
    verifie: ["Mon programme commence par « effacer tout » et place le chat au bon endroit", "Je sais tracer un carré avec une boucle « répéter 4 fois »", "Je sais expliquer pourquoi le triangle utilise 120°", "J'ai trouvé le code du coffre du pirate"],
    plus: "Invente ta propre rosace : change la couleur du stylo à chaque tour avec « ajouter 10 à la couleur du stylo »."
  },
  prof: {
    objectifs: ["Découvrir l'interface de Scratch et l'extension Stylo", "Comprendre la notion d'instruction séquentielle puis de boucle", "Relier angles géométriques et angles de rotation du lutin", "Lire et exécuter un script « à la main » (activités débranchées)"],
    competences: [C.ecrire, C.boucles, C.maths],
    prerequis: "Aucun. Séquence d'entrée idéale pour des élèves qui n'ont jamais programmé (dès le CM2).",
    organisation: "Binômes sur un poste. Séance 1 : défis 1 à 3 sur machine (experts : 4 à 6). Séance 2 : les trois exercices débranchés en individuel puis correction collective au tableau, en vérifiant les tracés dans Scratch.",
    deroule: [["5 min", "Présentation de la Nuit du Code et du parcours"], ["10 min", "Découverte de l'interface et de l'extension Stylo"], ["30 min", "Défis 1 à 3 (4 à 6 pour les plus rapides)"], ["10 min", "Mise en commun : pourquoi 90°, 120°, 360°/n ?"], ["Séance 2", "Exercices débranchés : chemins, pirate, mot mystère, puis vérification sur machine"]],
    vigilance: ["Le triangle : beaucoup d'élèves tournent de 60° (angle intérieur) au lieu de 120° (angle extérieur)", "Penser à « effacer tout », « aller à x:0 y:0 » et « s'orienter à 90 » au début du programme", "Le stylo doit être relevé avant de repositionner le lutin"],
    differenciation: ["Coup de pouce : la page 5 de la fiche donne les scripts des défis 1 à 5", "Experts : défis 4 à 6, puis rosaces paramétrées (voir séquence #2)", "Débranché : possible en classe entière sans ordinateur"],
    evaluation: ["Le carré et le triangle sont tracés avec une boucle", "L'élève justifie l'angle de rotation", "Le code du pirate est trouvé, avec les calculs détaillés"],
    tutos: []
  },
  tutos: []
},
/* ============================== #1 ============================== */
{
  id: "sequence-1", num: "#1", title: "Dessiner, c'est gagné !!", level: "deb", img: "img/s1-pdf.jpg", duree: "2 séances",
  resume: "On crée un compte Scratch et on prend de bonnes habitudes : initialiser son lutin et découper un dessin en blocs personnalisés (« Mes blocs »).",
  contenu: "2 pages : un script d'initialisation à commenter, puis 4 dessins à construire avec des blocs personnalisés (diagonale colorée, sapin de Noël, tête de robot, mur de briques).",
  notions: ["Compte Scratch", "Initialisation (bloc « Reprendre au début »)", "Créer un bloc (procédure)", "Script principal", "Décomposition d'un problème"],
  eleve: {
    mission: "Un vrai programmeur ne réécrit jamais deux fois la même chose : il crée ses propres blocs. Tu vas fabriquer des blocs « Carré », « Branche », « Yeux »… et les assembler pour dessiner un sapin, un robot ou un mur.",
    besoin: ["Un compte Scratch : scratch.mit.edu → « Rejoindre Scratch »", "L'extension Stylo", "La catégorie rose « Mes blocs » → « Créer un bloc »"],
    etapes: [
      ["0 – Le bloc « Reprendre au début »", "Recopie le script d'initialisation de la fiche et écris à côté de chaque bloc à quoi il sert. Range-le dans un bloc « Reprendre au début ».", "Il remet tout à zéro : effacer, position, orientation, stylo relevé."],
      ["I – La diagonale colorée", "Crée « Grand rectangle » (160 × 200) et « Petit rectangle » (40 × 50), puis le script principal qui dessine la figure.", "Un rectangle = répéter 2 fois : avancer longueur, tourner 90, avancer largeur, tourner 90."],
      ["II – Le sapin de Noël", "Crée « Branche à gauche » (rotation de 130° dans le sens horaire, segments de 90 et 40), « Branche à droite » (sens anti-horaire) et « Carré » de 40 pour le tronc.", "Teste chaque bloc seul avant de construire le sapin entier."],
      ["III – La tête de robot", "Crée « Yeux » (carré de 50), « Tête » (rectangle 250 × 200) et « Bouche » (segment de 150), puis place-les.", "Relève le stylo pour te déplacer entre deux éléments sans laisser de trait."],
      ["IV – Le mur", "Crée « Carré » (50), « Rectangle » (100 × 50), « Ligne 1 » et « Ligne 2 » (rangées décalées), puis empile les lignes.", "Ligne 2 commence par un demi-bloc (un carré) pour décaler les briques."]
    ],
    verifie: ["Mon programme principal est court : il appelle mes blocs", "Si je relance le programme, le dessin repart de zéro", "Chaque bloc fonctionne quand je clique dessus seul"],
    plus: "Ajoute des paramètres à tes blocs (ex. « Carré de côté [ ] ») pour dessiner des carrés de toutes les tailles avec un seul bloc."
  },
  prof: {
    objectifs: ["Créer un compte et sauvegarder ses projets en ligne", "Comprendre l'intérêt de l'initialisation", "Découvrir les procédures (blocs personnalisés) et la décomposition", "Distinguer script principal et sous-programmes"],
    competences: [C.ecrire, C.algo, C.maths],
    prerequis: "Séquence #0 (avancer, tourner, stylo, répéter).",
    organisation: "Binômes. Séance 1 : initialisation + diagonale colorée + sapin. Séance 2 : robot + mur, puis présentation de quelques programmes au vidéoprojecteur.",
    deroule: [["10 min", "Création des comptes (prévoir une classe Scratch enseignant pour éviter les adresses e-mail des élèves)"], ["15 min", "Bloc « Reprendre au début » : commentaire collectif de chaque instruction"], ["30 min", "Diagonale colorée et sapin"], ["Séance 2", "Robot et mur, puis comparaison des programmes : lequel est le plus lisible ?"]],
    vigilance: ["Comptes élèves : utiliser un compte enseignant Scratch (classes) pour respecter le RGPD", "Le sens horaire / anti-horaire des branches du sapin", "Les élèves oublient de relever le stylo entre deux éléments"],
    differenciation: ["Fournir le bloc « Rectangle » déjà fait aux élèves en difficulté", "Experts : blocs paramétrés (taille en entrée)", "Tuto vidéo n°3 : initialiser un lutin"],
    evaluation: ["Présence et rôle expliqué du bloc d'initialisation", "Au moins 3 blocs personnalisés réutilisés", "Script principal lisible"],
  },
  tutos: [3]
},
/* ============================== #1 bis ============================== */
{
  id: "sequence-passerelle", num: "#1 bis", title: "Traverser la ville (séquence passerelle)", level: "deb", img: "img/s1bis-pdf.jpg", duree: "1 séance",
  resume: "Passage du dessin à l'animation : Laura recrée une balade nocturne en voiture dans la ville. On découvre les coordonnées x / y, les sons et l'édition de costumes.",
  contenu: "1 page : un scénario (Laura et sa voiture), un script à analyser puis à saisir, l'ajout d'un son et d'un second véhicule, et une animation libre « petit poisson du Pacifique ».",
  notions: ["Arrière-plan et lutin", "Coordonnées x et y", "Glisser jusqu'à…", "Sons", "Symétrie d'un costume", "Taille du lutin"],
  eleve: {
    mission: "Fini le dessin, place à l'animation ! Comme Laura, tu vas faire rouler une voiture la nuit dans une ville, avec le bruit du moteur, puis ajouter un camion sur l'autre voie.",
    besoin: ["Scratch", "Arrière-plan de ville de nuit, lutin « Convertible 3 » (bibliothèque Scratch)", "Des écouteurs pour le son"],
    etapes: [
      ["1 – La scène", "Choisis un arrière-plan de ville la nuit, ajoute le lutin « Convertible 3 » et supprime le chat (Sprite 1).", "Clic droit sur le lutin → supprimer."],
      ["2 – Les coordonnées", "Lis le programme de Laura : explique ce que veulent dire les nombres x et y dans chaque bloc de mouvement.", "x = gauche / droite (de −240 à 240), y = bas / haut (de −180 à 180)."],
      ["3 – Saisis le script", "Recopie le script. Dans l'onglet Sons, ajoute le son « Car passing ».", "Teste chaque bloc avant de tout assembler."],
      ["4 – Teste", "Clique sur le drapeau vert : l'animation fait-elle ce que dit le script ?", "Si la voiture part à l'envers, regarde son orientation."],
      ["5 – Un deuxième véhicule", "Ajoute un camion sur l'autre voie. Dans l'onglet Costumes, fais une symétrie pour qu'il roule dans le bon sens et ajuste sa taille.", "Bouton « retourner horizontalement » dans l'éditeur de costumes."],
      ["Pour aller plus loin", "Crée une nouvelle animation : un petit poisson du Pacifique qui monte et descend dans les fonds marins, avec d'autres personnages.", "Utilise « glisser en 2 secondes à x: y: »."]
    ],
    verifie: ["Ma voiture démarre au drapeau vert, toujours au même endroit", "J'entends le son", "Mes deux véhicules roulent dans des sens opposés"],
    plus: "Fais clignoter les phares avec deux costumes, ou fais accélérer la voiture."
  },
  prof: {
    objectifs: ["Comprendre le repère de la scène (x, y)", "Découvrir lutins, arrière-plans, costumes et sons", "Passer d'un programme de tracé à une animation"],
    competences: [C.ecrire, C.evenement, C.maths],
    prerequis: "Séquences #0 et #1.",
    organisation: "Binômes, 1 séance. Le « pour aller plus loin » sert de différenciation ou de travail à la maison.",
    deroule: [["10 min", "Repère de la scène : projeter la grille xy de Scratch"], ["10 min", "Analyse écrite du script de Laura"], ["25 min", "Saisie, test, ajout du son et du camion"], ["10 min", "Animation libre du poisson"]],
    vigilance: ["Confusion x / y", "La symétrie se fait dans l'éditeur de costumes, pas avec « s'orienter à »", "Prévoir des écouteurs"],
    differenciation: ["Fournir le fichier de départ avec arrière-plan et lutin déjà en place", "Tuto vidéo n°1 : déplacer un lutin"],
    evaluation: ["Coordonnées correctement expliquées", "Animation fonctionnelle avec son", "Second véhicule correctement orienté"],
  },
  tutos: [1]
},
/* ============================== #2 ============================== */
{
  id: "sequence-2", num: "#2", title: "Créer ses blocs", level: "deb", img: "img/s2-pdf.jpg", duree: "2 séances",
  resume: "On approfondit les blocs personnalisés et les boucles itératives : figures multicolores, angles, rosaces paramétrées par l'utilisateur.",
  contenu: "2 pages : activité 1 (rectangle et triangle multicolores avec le moins d'instructions possible), activité 2 (carré et rotations, rosace à n carrés demandée à l'utilisateur, figures à observer et reproduire).",
  notions: ["Boucle « répéter n fois »", "Angle intérieur / angle de rotation", "Demander et attendre / réponse", "Variable", "Couleur du stylo"],
  eleve: {
    mission: "Tu vas fabriquer une machine à rosaces : l'utilisateur choisit un nombre, et ton programme dessine automatiquement la figure correspondante, en couleurs !",
    besoin: ["Scratch + extension Stylo", "Ton bloc « Reprendre au début » de la séquence #1"],
    etapes: [
      ["1 – Rectangle multicolore", "Complète le bloc « rectangle » pour tracer un rectangle de 200 × 130 qui change de couleur, avec le moins de blocs possible.", "Une boucle « répéter 2 fois » suffit."],
      ["2 – L'angle du triangle", "Quelle est la mesure de chaque angle d'un triangle équilatéral ? De combien le lutin doit-il tourner ?", "Angle intérieur 60°, rotation 180 − 60 = 120°."],
      ["3 – Triangle multicolore", "Trace un triangle équilatéral multicolore de côté 150.", "« répéter 3 fois »."],
      ["4 – Carré et rotations", "Crée un bloc « carré » (côté 100) et, avec une boucle, dessine les rosaces de la fiche. Note l'angle de rotation de chacune.", "Angle = 360 ÷ nombre de carrés."],
      ["5 – La machine à rosaces", "Avec « demander… et attendre », demande le nombre n de carrés, puis trace n carrés en tournant de 360/n entre chacun.", "La réponse se trouve dans le bloc bleu clair « réponse »."],
      ["6 – Observe et reproduis", "Pour la figure de la fiche : combien de carrés ? Quel angle ? Qu'est-ce qui a changé ? Reproduis-la, puis réalise les dernières figures.", "Change la taille du carré à chaque tour."]
    ],
    verifie: ["Mon programme demande un nombre et trace la bonne rosace", "Je sais calculer l'angle : 360 ÷ n", "Mes figures sont tracées avec des boucles, pas des blocs recopiés"],
    plus: "Remplace le carré par un triangle, ou fais grandir la figure à chaque tour."
  },
  prof: {
    objectifs: ["Consolider boucles et blocs personnalisés", "Introduire l'interaction avec l'utilisateur (demander / réponse)", "Mobiliser les angles (intérieur / extérieur) et la division de 360°"],
    competences: [C.boucles, C.variables, C.maths],
    prerequis: "Séquences #0 et #1.",
    organisation: "Binômes. Séance 1 : activité 1 et activité 2, questions 1 et 2. Séance 2 : rosace paramétrée et figures libres.",
    deroule: [["15 min", "Rectangle et triangle multicolores, mise en commun sur l'optimisation"], ["15 min", "Angles du triangle : passage par la géométrie"], ["Séance 2", "Rosaces, demander / réponse, observation et reproduction"]],
    vigilance: ["La division 360/n doit être placée dans le bloc « tourner » (opérateurs verts)", "Une réponse non numérique fait planter le tracé : bon prétexte pour parler de tests"],
    differenciation: ["Tableau d'aide : nombre de carrés → angle", "Experts : rosace de polygones à n côtés (double paramètre)"],
    evaluation: ["Rosace paramétrée fonctionnelle", "Angles justifiés par écrit", "Nombre d'instructions minimal"],
  },
  tutos: [3]
},
/* ============================== #3 ============================== */
{
  id: "sequence-3", num: "#3", title: "Scène, lutins & interactions", level: "int", img: "img/s3-pdf.jpg", duree: "2 séances",
  resume: "Lola, passionnée de plongée, crée une animation périlleuse : une plongeuse menacée par un requin. On fait réagir les lutins au clavier, aux clics et aux messages.",
  contenu: "2 pages : analyse de la scène (nombre de lutins, dimensions), scripts clavier et clic, positionnement sur grille, rocher qui tremble, course-poursuite avec message « Croqué ! », réinitialisation et prolongements.",
  notions: ["Scène de 480 × 360 px", "Événements (touche, clic)", "Positionner avec x / y", "Messages (envoyer / recevoir)", "Costumes", "Montrer / cacher"],
  eleve: {
    mission: "Sous l'eau, une plongeuse cherche la clé d'un trésor… mais un requin rôde ! Tu vas programmer chaque personnage pour qu'il réagisse aux touches, aux clics et aux autres lutins.",
    besoin: ["Scratch", "Arrière-plan sous-marin, lutins plongeuse, requin, clé, rocher, crabe (bibliothèque Scratch)"],
    etapes: [
      ["I – Observe la scène", "Combien y a-t-il de lutins ? Lequel est sélectionné ? Quelle est la largeur et la hauteur de la scène en pixels ?", "La scène fait 480 × 360."],
      ["II – Les premiers scripts", "Quand on appuie sur Espace, la plongeuse avance de 10 et le requin de 20. Quand on clique sur la clé, elle dit « clé du trésor » puis « Bravo ! ».", "Chaque lutin a SES scripts : clique bien sur le bon lutin avant de programmer."],
      ["II – Place les lutins", "Recopie les scripts de position de Lola. Place P (plongeuse) et R (requin) sur la grille et trouve les coordonnées du point vert.", "Lis d'abord x (horizontal), puis y (vertical)."],
      ["III – Le rocher tremble", "Quand on clique sur le rocher : il avance de 5, attend 0.01 s, recule de 5… plusieurs fois.", "Dans Scratch, on écrit 0.01 avec un point, pas une virgule."],
      ["IV – La course-poursuite", "Programme la poursuite. Quand le requin touche la plongeuse, il envoie « Croqué ! » et elle disparaît. Au départ, fais-la réapparaître et remets au requin le costume gueule fermée.", "« envoyer à tous » et « quand je reçois » (catégorie Événements)."],
      ["V – Pour aller plus loin", "Le crabe s'agite et saute sur son rocher avec la flèche droite. Change les déplacements pour que la plongeuse trouve la clé avant d'être croquée.", "Utilise une boucle « répéter »."]
    ],
    verifie: ["Au drapeau vert, tout se remet en place", "Le requin croque la plongeuse et elle disparaît", "Le rocher tremble quand je clique dessus"],
    plus: "Ajoute un score : +1 quand la plongeuse touche la clé."
  },
  prof: {
    objectifs: ["Programmer plusieurs lutins en parallèle", "Déclencher des actions par des événements (clavier, clic)", "Faire communiquer les lutins par messages", "Initialiser l'état de tous les lutins"],
    competences: [C.evenement, C.parallele, C.messages, C.maths],
    prerequis: "Séquences #0 à #2 et passerelle.",
    organisation: "Binômes. Séance 1 : parties I à III. Séance 2 : parties IV et V. On peut fournir un fichier de départ avec la scène prête.",
    deroule: [["10 min", "Observation de la scène et questions écrites"], ["25 min", "Scripts clavier et clic, positionnement"], ["15 min", "Rocher qui tremble"], ["Séance 2", "Messages, réinitialisation, prolongements"]],
    vigilance: ["Scripts posés sur le mauvais lutin", "Virgule ou point dans les durées", "Oubli de « montrer » au démarrage après un « cacher »"],
    differenciation: ["Encadré « coup de pouce » de la fiche (boucle répéter)", "Tutos vidéo 1, 2 et 4"],
    evaluation: ["Message envoyé et reçu correctement", "Réinitialisation complète", "Coordonnées justes sur la grille"],
  },
  tutos: [1, 2, 4]
},
/* ============================== #4 ============================== */
{
  id: "sequence-4", num: "#4", title: "Le jeu du Poisson, Chien & Chat", level: "int", img: "img/s4-pdf.jpg", duree: "2 à 3 séances",
  resume: "Premier vrai jeu : le chat (dirigé au clavier) attrape le poisson pour marquer des points et évite le chien qui lui fait perdre des vies.",
  contenu: "2 pages : règles du jeu, cahier des charges de chaque lutin (positions, tailles, mouvements), variables Score et Vie, actions supplémentaires et blocs d'aide.",
  notions: ["Déplacement au clavier", "Mouvement aléatoire", "Boucle « répéter indéfiniment »", "Capteur « touche le lutin »", "Variables Score et Vie", "Sons"],
  eleve: {
    mission: "Ton premier vrai jeu vidéo ! Tu diriges le chat : attrape le poisson pour marquer des points, mais attention au chien qui patrouille… Tu n'as que 5 vies.",
    besoin: ["Scratch", "Lutins chat, chien, poisson (bibliothèque Scratch)"],
    etapes: [
      ["I – Lis les règles", "Poisson aléatoire, chien en aller-retour, chat au clavier. 5 vies au départ, +1 point par poisson, −1 vie au contact du chien.", "Écris les règles en 3 lignes avant de coder."],
      ["II – Le chien", "Au drapeau vert : départ en (−180 ; 0), puis aller-retour horizontal sans fin au milieu de l'écran.", "« répéter indéfiniment » + « avancer » + « rebondir si le bord est atteint »."],
      ["III – Le chat", "Taille 70 %, départ en (−188 ; −117), déplacement avec les 4 flèches.", "« si touche flèche droite pressée alors ajouter 10 à x »."],
      ["IV – Le poisson", "Taille 40 %, position aléatoire, nage tout droit pendant 4 s, puis change de direction au hasard.", "« s'orienter à nombre aléatoire entre 0 et 360 »."],
      ["V – Score et Vie", "Crée les variables. À quel lutin attacher « Score + 1 » ? Et « Vie − 1 » ?", "Le lutin qui détecte le contact s'en occupe."],
      ["VI – Finitions", "Un son au contact poisson-chat. Le poisson disparaît 2 s puis réapparaît ailleurs. Choisis tes arrière-plans.", "Les blocs d'aide de la fiche sont là si tu bloques."]
    ],
    verifie: ["Score à 0 et Vie à 5 au démarrage", "Le jeu s'arrête quand Vie = 0", "Le poisson réapparaît ailleurs après avoir été attrapé"],
    plus: "Ajoute un écran « Game Over », un chronomètre ou un chien qui accélère."
  },
  prof: {
    objectifs: ["Concevoir un jeu complet à partir d'un cahier des charges", "Utiliser des variables (score, vies) et des conditions", "Gérer l'aléatoire et les collisions"],
    competences: [C.variables, C.boucles, C.parallele, C.algo],
    prerequis: "Séquence #3.",
    organisation: "Binômes, 2 à 3 séances : un lutin par demi-séance, puis variables et finitions.",
    deroule: [["10 min", "Lecture du cahier des charges, schéma des interactions au tableau"], ["Séance 1", "Chien et chat"], ["Séance 2", "Poisson et variables"], ["Séance 3", "Finitions, tests croisés entre binômes"]],
    vigilance: ["Mouvement saccadé du chat (tuto 5 : déplacements fluides)", "Vie qui descend de plusieurs points en un contact : ajouter une attente ou attendre jusqu'à ne plus toucher", "Variables « pour tous les lutins »"],
    differenciation: ["Blocs d'aide page 2 de la fiche", "Tutos 2, 4, 5, 6, 8, 9", "Experts : niveaux de difficulté"],
    evaluation: ["Cahier des charges respecté point par point", "Variables correctement initialisées", "Jeu jouable de bout en bout"],
  },
  tutos: [2, 4, 5, 6, 8, 9]
},
/* ============================== #5 ============================== */
{
  id: "sequence-5", num: "#5", title: "Le jeu du Pong", level: "int", img: "img/s5-pdf.jpg", duree: "2 à 3 séances",
  resume: "On recode le grand classique du jeu vidéo : deux raquettes, une balle qui rebondit, deux scores, et le premier à 10 points gagne.",
  contenu: "2 pages : règles du Pong, dessin et programmation des raquettes (A/Q et P/M), balle et rebonds, interactions, variables Score Gauche / Score Droit, idées d'amélioration et scripts d'aide.",
  notions: ["Dessiner un lutin", "Contraintes de position (bornes)", "Direction aléatoire", "Rebond", "Conditions (si… alors)", "Deux variables de score"],
  eleve: {
    mission: "Recrée Pong, l'un des tout premiers jeux vidéo (1972) ! Deux joueurs, deux raquettes, une balle : le premier à 10 points gagne.",
    besoin: ["Scratch", "L'éditeur de dessin (raquettes)", "Un camarade pour tester à deux"],
    etapes: [
      ["I – Les règles", "Une raquette de chaque côté, la balle rebondit en haut et en bas. Si un joueur rate la balle, l'autre marque. Premier à 10.", "Joue d'abord une partie en ligne pour bien comprendre."],
      ["II – Les raquettes", "Dessine un segment de 80 × 5. Crée « raquette gauche » : x = −208, y entre −128 et 128, A pour monter, Q pour descendre. Duplique pour la droite (P / M).", "Ne laisse pas y dépasser 128 : « si y > 128 alors mettre y à 128 »."],
      ["III – La balle", "Au drapeau vert : au centre, direction aléatoire, avance sans fin et rebondit sur les bords.", "« rebondir si le bord est atteint »."],
      ["IV – Les interactions", "La balle rebondit sur les raquettes. Si elle dépasse un joueur, l'autre marque : « A marque 1 point », puis reprise après 1 s.", "Rebond sur raquette : s'orienter à (180 − direction)."],
      ["V – Les scores", "Score Droit +1 si x ≤ −208. Programme le Score Gauche de la même façon.", "Qu'est-ce qui change pour l'autre côté ?"],
      ["VI – Améliore", "Accélération ou balle plus petite tous les 10 échanges, sons, écran d'accueil, fin de partie, bonus « balle collée »…", "Choisis 2 améliorations et termine-les."]
    ],
    verifie: ["Les raquettes ne sortent jamais de l'écran", "Les scores repartent à 0 à chaque partie", "La partie s'arrête à 10 points"],
    plus: "Mode 1 joueur : la raquette droite suit la balle toute seule (une IA simple !)."
  },
  prof: {
    objectifs: ["Programmer un jeu à deux joueurs", "Borner une position, gérer les rebonds", "Gérer deux variables et une condition de victoire"],
    competences: [C.boucles, C.variables, C.algo, C.maths],
    prerequis: "Séquence #4.",
    organisation: "Binômes. Séance 1 : raquettes et balle. Séance 2 : interactions et scores. Séance 3 : améliorations et tournoi de classe.",
    deroule: [["10 min", "Histoire du Pong, règles"], ["Séance 1", "Raquettes et balle"], ["Séance 2", "Rebonds sur les raquettes, scores"], ["Séance 3", "Améliorations, tournoi"]],
    vigilance: ["Rebond sur raquette mal calculé (balle qui reste « collée »)", "QWERTY / AZERTY : A/Q et P/M changent selon le clavier", "Remise au centre après un point"],
    differenciation: ["Scripts d'aide page 2", "Tutos 5, 6, 8, 9", "Experts : IA de raquette, effets selon l'endroit touché"],
    evaluation: ["Jeu jouable à deux", "Scores et fin de partie corrects", "Au moins une amélioration aboutie"],
  },
  tutos: [5, 6, 8, 9]
},
/* ============================== #6 ============================== */
{
  id: "sequence-6", num: "#6", title: "Le circuit de Formule One", level: "int", img: "img/s6-pdf.jpg", duree: "2 séances",
  resume: "On dessine son propre circuit et on pilote une voiture au clavier. Toute sortie de route renvoie sur la grille de départ.",
  contenu: "2 pages : croquis puis dessin du circuit, choix et placement de la voiture, déplacements clavier, détection des sorties de route et pistes d'amélioration (chrono, bonus, multijoueur, niveaux).",
  notions: ["Éditeur d'arrière-plan", "Croquis / conception", "Aller à x / y", "Flèches du clavier", "Capteur « couleur touchée »", "Chronomètre"],
  eleve: {
    mission: "Dessine ton propre circuit de Formule 1 et pilote ta voiture au clavier. Attention : si tu sors de la piste, retour à la case départ !",
    besoin: ["Scratch", "Une feuille et des crayons de couleur pour le croquis"],
    etapes: [
      ["I – Le décor", "Fais d'abord un croquis en couleur sur la fiche, puis dessine la piste dans l'éditeur d'arrière-plan, avec la ligne de départ / arrivée.", "Herbe d'une couleur, piste d'une autre : c'est ce qui servira à détecter les sorties."],
      ["II – La voiture", "Choisis une voiture dans la bibliothèque (pas le chat !) et règle sa taille avec le bon bloc.", "« mettre la taille à … % »."],
      ["III – Le départ", "Quelle instruction place la voiture devant la ligne de départ au lancement ?", "« aller à x: … y: … » et « s'orienter à … »."],
      ["IV – Les déplacements", "Avance avec la flèche haut, tourne avec gauche / droite. Teste !", "Tourner + avancer, comme un vrai volant."],
      ["V – La sortie de route", "Si la voiture touche la couleur de l'herbe, elle revient sur la grille de départ.", "« couleur … touchée ? » : clique sur la pastille puis sur l'herbe avec la pipette."],
      ["VI – Améliore", "Chronomètre, « GAME OVER » / « BRAVO », bonus de vitesse, mode 2 joueurs, niveaux, ambiance sonore.", "Commence par le chronomètre : il rend le jeu captivant."]
    ],
    verifie: ["La voiture démarre toujours sur la grille", "Une sortie de route la ramène au départ", "Passer la ligne d'arrivée déclenche un message"],
    plus: "Fais un mode 2 joueurs (flèches et Z/Q/S/D) avec deux voitures."
  },
  prof: {
    objectifs: ["Concevoir un décor fonctionnel (couleurs = zones)", "Utiliser les capteurs de couleur", "Introduire chronomètre et conditions de victoire"],
    competences: [C.evenement, C.boucles, C.crea],
    prerequis: "Séquences #3 et #4.",
    organisation: "Binômes. Séance 1 : croquis, décor, voiture, déplacements. Séance 2 : sortie de route et améliorations.",
    deroule: [["15 min", "Croquis papier"], ["20 min", "Dessin du circuit"], ["20 min", "Voiture et déplacements"], ["Séance 2", "Détection, chrono, bonus"]],
    vigilance: ["Couleurs d'herbe dégradées : la détection ne fonctionne pas avec une seule couleur", "Taille de la voiture trop grande pour la piste"],
    differenciation: ["Fournir un circuit déjà dessiné (voir aussi game pack 2 Race Car)", "Tutos 9 et 13"],
    evaluation: ["Croquis rendu", "Détection fiable", "Une amélioration au moins"],
  },
  tutos: [9, 13]
},
/* ============================== #7 ============================== */
{
  id: "sequence-7", num: "#7", title: "Space Invaders", level: "int", img: "img/s7-pdf.jpg", duree: "3 séances",
  resume: "Un vaisseau spatial protège la Terre contre des hordes d'extraterrestres. Si un ennemi atteint le bas de l'écran, la partie est perdue.",
  contenu: "1 page : ciel étoilé statique puis dynamique, vaisseau en 4 directions, tir à la barre d'espace, ennemis clonés, sons, musique, score, vies et bonus.",
  notions: ["Arrière-plan dynamique", "Nombre aléatoire", "Projectile (montrer / cacher)", "Clones", "Score et vies", "Effets sonores et musique"],
  eleve: {
    mission: "La Terre est attaquée ! Pilote ton vaisseau, tire sur les envahisseurs et ne les laisse pas atteindre le bas de l'écran.",
    besoin: ["Scratch", "Un vaisseau, un projectile, deux ennemis (bibliothèque Scratch)"],
    etapes: [
      ["I – Le ciel étoilé", "Dessine un ciel étoilé. Ensuite, rends-le vivant : des étoiles qui apparaissent au hasard.", "Un lutin « étoile » + des clones à des positions aléatoires."],
      ["II – Le vaisseau", "Déplace le vaisseau dans les 4 directions avec les flèches.", "Même méthode que le chat de la séquence #4."],
      ["III – Le tir", "Le projectile est caché au départ. Sur Espace, il apparaît sur le vaisseau et monte jusqu'au bord ou jusqu'à un ennemi.", "« aller à vaisseau », « montrer », « répéter jusqu'à ce que bord touché »."],
      ["IV – Les ennemis", "Deux ennemis différents descendent pour attaquer. Utilise le clonage pour en créer beaucoup.", "« créer un clone de moi-même » + « quand je commence comme un clone »."],
      ["V – Finitions", "Sons (tir, explosions), musique (intro, jeu, fin), variables score et vie, bonus (tir spécial, ennemis ralentis ou figés : étoile, flacon, cœur…).", "Tuto vidéo n°10 : créer un tir et gérer les clones."]
    ],
    verifie: ["Je peux tirer plusieurs fois", "Les ennemis touchés disparaissent et le score augmente", "La partie s'arrête si un ennemi atteint le bas"],
    plus: "Fais tirer les ennemis à leur tour, ou ajoute un boss final."
  },
  prof: {
    objectifs: ["Découvrir le clonage", "Gérer de nombreux objets simultanés", "Assembler un jeu complet avec sons, score, vies et bonus"],
    competences: [C.parallele, C.boucles, C.variables, C.crea],
    prerequis: "Séquences #4 et #5.",
    organisation: "Binômes, 3 séances. Bonne répétition générale avant le passage aux game packs.",
    deroule: [["Séance 1", "Décor dynamique et vaisseau"], ["Séance 2", "Tir et ennemis clonés"], ["Séance 3", "Sons, variables, bonus"]],
    vigilance: ["Clones jamais supprimés : le jeu ralentit (« supprimer ce clone »)", "Un seul projectile non cloné ne permet pas les tirs rapides", "Limite de 300 clones dans Scratch"],
    differenciation: ["Tuto n°10", "Version simplifiée : un seul type d'ennemi, sans clones"],
    evaluation: ["Clones correctement gérés", "Score et vies fonctionnels", "Ambiance sonore présente"],
  },
  tutos: [10]
},
/* ============================== GP1 ============================== */
{
  id: "game-pack-1", num: "#7 · GP1", title: "Shooting Duck", level: "exp", img: "img/gp1pdf-pdf.jpg", scene: "img/gp1-scene.jpg", duree: "Entraînement 4 à 6 h", pack: "gp1",
  resume: "Première immersion dans un game pack : un stand de tir forain avec canards, cibles, viseur et munitions. L'équipe imagine son propre jeu avec ces seules ressources.",
  contenu: "1 page : définition d'un game pack, consignes de démarche de projet (croquis, planning, nom, règle du jeu) et critères du jury. Le fichier .sb3 contient 22 lutins de jeu, 3 arrière-plans et 28 sons.",
  notions: ["Univers imposé", "Croquis / carte mentale / storyboard", "Planning des tâches", "Règle du jeu", "Sac à dos et blocs perso"],
  eleve: PROJECT_ELEVE("Shooting Duck", "un stand de tir forain : canards qui défilent, cibles qui basculent, viseur, munitions, rideaux de théâtre", "Viser avec la souris (« aller à pointeur de souris ») et tirer avec un clic."),
  prof: PROJECT_PROF("le stand de tir", "Viseur piloté à la souris ; canards en défilement horizontal (clones) ; cibles qui basculent (costumes) ; compteur de munitions avec le lutin « Munitions » (6 costumes)."),
  tutos: [6, 7]
},
/* ============================== GP2 ============================== */
{
  id: "game-pack-2", num: "#8 · GP2", title: "Race Car", level: "exp", img: "img/gp2pdf-pdf.jpg", scene: "img/gp2-scene.jpg", duree: "Entraînement 4 à 6 h", pack: "gp2",
  resume: "Un game pack sur le thème imposé de la course : circuits, voitures, motos, pilotes, obstacles et feux de départ.",
  contenu: "1 page : consigne « réaliser un jeu sur le thème de la course de voitures », croquis et planning à rendre, critères du jury. Le fichier .sb3 contient 3 circuits, 3 grilles de repérage, 23 lutins de jeu et 20 sons.",
  notions: ["Thème imposé", "Déplacements réalistes", "Collisions avec le décor", "Chronomètre", "Multijoueur"],
  eleve: PROJECT_ELEVE("Race Car", "la course : 3 circuits, voitures et motos de 4 couleurs, pilotes, feux de départ, ligne d'arrivée, tonneaux, cônes, pneus, flaque d'huile, tribunes", "Réutilise ce que tu as appris dans la séquence #6 (circuit de Formule One)."),
  prof: PROJECT_PROF("la course automobile (thème imposé)", "Feux de départ animés (lutin « lights », 5 costumes) ; voitures dirigées au clavier avec inertie (tuto 13) ; obstacles qui ralentissent ; chronomètre au tour ; mode 2 joueurs."),
  tutos: [7, 13]
},
/* ============================== GP3 ============================== */
{
  id: "game-pack-3", num: "#9 · GP3", title: "Jeu de plateau (plateformer)", level: "exp", img: "img/gp3pdf-pdf.jpg", scene: "img/gp3-scene.jpg", duree: "Entraînement 4 à 6 h", pack: "gp3",
  resume: "Le niveau le plus exigeant : un univers de jeu de plateformes avec aliens, monstres, échelles, ressorts, clés, portes et pièges.",
  contenu: "1 page : démarche de projet et critères du jury. Le fichier .sb3 contient 3 arrière-plans (dont un repère), 23 lutins de jeu (2 aliens jouables, 6 ennemis, plateformes, échelles, ressorts, pièges, clé, porte, HUD vies / pièces / clé) et 25 sons.",
  notions: ["Saut et gravité", "Plateformes et collisions", "Ennemis animés", "HUD (vies, pièces, clé)", "Niveaux"],
  eleve: PROJECT_ELEVE("Jeu de plateau", "les jeux de plateformes : 2 aliens, souris, escargot, abeille, slime, bernacle, échelles, ressorts, ponts, pointes, poids, boule de feu, clé, porte, compteurs de vies et de pièces", "Le saut, c'est la partie la plus difficile : regarde les tutos 11 et 12 avant de commencer."),
  prof: PROJECT_PROF("le jeu de plateformes", "Gravité et saut (variable vitesse verticale) ; détection du sol par couleur ou par lutin « Sol » ; clé qui ouvre la porte de fin de niveau ; HUD avec les lutins « HUD Cœur / Monnaie / Clé »."),
  tutos: [11, 12]
},
/* ============================== BONUS 1 ============================== */
{
  id: "bonus-1", num: "Bonus 1", title: "Le trésor de Piggy", level: "bonus", img: "img/b1-pdf.jpg", scene: "img/gp4-scene.jpg", duree: "3 à 4 h", pack: "gp4",
  resume: "Piggy, le cochon ailé, doit récupérer une pièce et la rapporter dans le coffre en évitant quatre obstacles mortels. Un cahier des charges précis, axé sur les costumes.",
  contenu: "1 page : cahier des charges précis des 7 lutins (Piggy, 4 obstacles, pièce, coffre). Le fichier .sb3 contient Piggy (24 costumes), la scie, le piège, le poing, la masse, la pièce (16 costumes), le coffre (9 costumes) et 34 sons.",
  notions: ["Animation par costumes", "Distance entre lutins", "Retour en position initiale", "États (vivant / ange)", "Sons"],
  eleve: {
    mission: "Aide Piggy, le cochon volant, à récupérer la pièce d'or et à la rapporter dans le coffre… sans se faire écraser par la masse, couper par la scie, assommer par le poing ou attraper par le piège !",
    besoin: ["Le game pack « Le trésor de Piggy » (.sb3)", "Scratch 3 : Fichier → Charger depuis votre ordinateur"],
    etapes: [
      ["Explore le pack", "Ouvre chaque lutin et fais défiler ses costumes : Piggy en a 24, la pièce 16, le coffre 9 !", "Note les numéros des costumes utiles (vol, mort, ange…)."],
      ["Les déplacements", "Dirige Piggy avec les 4 flèches.", "Déplacements fluides : tuto 5."],
      ["Le battement d'ailes", "Piggy bat des ailes en permanence : fais alterner ses costumes de vol.", "« costume suivant » + « attendre 0.1 s » dans une boucle."],
      ["Les 4 obstacles", "Quand Piggy s'approche, l'obstacle s'anime. Quand il s'éloigne, l'obstacle s'arrête et revient à sa position de départ (la scie peut s'arrêter n'importe où).", "« distance de Piggy < 100 »."],
      ["Piggy ange", "S'il touche un obstacle, Piggy meurt et s'envole au paradis avec une auréole : partie perdue.", "Utilise les costumes « ange » et un « glisser » vers le haut."],
      ["La pièce et le coffre", "La pièce tourne sur elle-même. Quand Piggy l'attrape, le coffre s'ouvre. Pièce déposée dans le coffre = gagné !", "Un message « pièce attrapée » pour prévenir le coffre."],
      ["Les sons", "Ajoute des sons pour chaque action : vol, obstacle, mort, pièce, victoire.", "Le lutin « Sons » en contient 34."]
    ],
    verifie: ["Chaque obstacle revient à sa place quand Piggy s'éloigne", "La mort de Piggy arrête la partie", "La victoire n'arrive que si la pièce est dans le coffre"],
    plus: "Ajoute plusieurs niveaux avec des obstacles plus rapides."
  },
  prof: {
    objectifs: ["Exploiter finement les costumes pour animer", "Programmer des comportements selon la distance", "Gérer les états d'un personnage (vivant, mort, victoire)"],
    competences: [C.evenement, C.messages, C.boucles, C.algo],
    prerequis: "Séquences #4 à #7.",
    organisation: "Binômes, 3 à 4 h. Bon exercice de « respect du cahier des charges », critère du jury.",
    deroule: [["20 min", "Exploration du pack et lecture du cahier des charges"], ["1 h", "Piggy (déplacement, ailes, mort)"], ["1 h", "Obstacles"], ["1 h", "Pièce, coffre, sons, tests"]],
    vigilance: ["Retour en position initiale des obstacles : mémoriser x / y au départ", "Plusieurs morts déclenchées en même temps : utiliser une variable d'état"],
    differenciation: ["Ne programmer que 2 obstacles", "Tutos 6 et 8"],
    evaluation: ["Grille du jury : jouabilité, richesse, originalité, consignes"],
  },
  tutos: [6, 8, 5]
},
/* ============================== BONUS 2 ============================== */
{
  id: "bonus-2", num: "Bonus 2", title: "Flappy Piggy", level: "bonus", img: "img/b2-pdf.jpg", scene: "img/gp5-scene.jpg", duree: "3 à 4 h", pack: "gp5",
  resume: "Simple à jouer, technique à coder : Piggy passe entre des tuyaux qui défilent. Gravité, clones, scrolling du sol et score à deux chiffres.",
  contenu: "1 page : cahier des charges de 8 lutins (Piggy, tuyaux, 2 sols, Play, 2 chiffres, Game Over). Le fichier .sb3 : Piggy (12 costumes), tuyaux, sols, bouton Play, chiffres 0 à 9 et 4 sons.",
  notions: ["Gravité / accélération", "Clones", "Scrolling", "Position aléatoire", "Score sur 2 chiffres (costumes)", "Arrêt global"],
  eleve: {
    mission: "Recrée le célèbre Flappy Bird avec Piggy ! Facile à jouer, mais un vrai défi de programmeur : gravité, tuyaux clonés, sol qui défile et score.",
    besoin: ["Le game pack « Flappy Piggy » (.sb3)", "Scratch 3"],
    etapes: [
      ["Début du jeu", "Le jeu démarre (et les lutins apparaissent) quand on clique sur Play ou qu'on appuie sur Espace.", "Un message « début » envoyé à tous."],
      ["Les déplacements", "Piggy ne bouge que de haut en bas. Espace = il monte ; Espace relâchée = il redescend en accélérant, mais pas trop vite.", "Variable « vitesse » : on lui retire un peu à chaque tour (gravité)."],
      ["Le battement d'ailes", "Ailes en mouvement permanent, sauf quand Piggy s'assomme contre un tuyau et tombe la tête la première.", "Costumes + « s'orienter à 180 » pour la chute."],
      ["Les tuyaux", "Le premier arrive après 2–3 s. Ils apparaissent à droite, disparaissent à gauche, avec une hauteur et une fréquence au hasard.", "Clones + « nombre aléatoire »."],
      ["Le sol qui défile", "Deux lutins « sol » qui défilent en boucle à la vitesse des tuyaux.", "Quand un sol sort à gauche, il repart à droite (tutos 15 à 18)."],
      ["Score et fin", "+1 point par tuyau franchi (jusqu'à 99, avec les 2 lutins chiffres). Si Piggy tombe : « Game Over » et tout s'arrête.", "Dizaines = score ÷ 10 arrondi vers le bas ; unités = score modulo 10."]
    ],
    verifie: ["La chute accélère sans être injouable", "Les tuyaux ont des hauteurs différentes", "Le score s'affiche correctement de 0 à 99"],
    plus: "Ajoute un meilleur score et une difficulté qui augmente."
  },
  prof: {
    objectifs: ["Modéliser une gravité simple (vitesse variable)", "Maîtriser clones et scrolling", "Afficher un nombre avec des costumes (division euclidienne)"],
    competences: [C.variables, C.parallele, C.maths, C.algo],
    prerequis: "Séquence #7 (clones).",
    organisation: "Binômes ou trinômes, 3 à 4 h. Excellent entraînement pour la catégorie lycée.",
    deroule: [["15 min", "Jouer à Flappy Bird, lire le cahier des charges"], ["1 h", "Piggy et la gravité"], ["1 h", "Tuyaux et sol"], ["1 h", "Score, fin, réglages"]],
    vigilance: ["Gravité trop forte : jeu injouable", "Score qui augmente plusieurs fois par tuyau", "Arrêt de tous les mouvements à la chute"],
    differenciation: ["Score avec une variable affichée au lieu des costumes", "Tutos 10, 15 à 18"],
    evaluation: ["Grille du jury", "Fidélité au cahier des charges"],
  },
  tutos: [10, 15, 18]
},
/* ============================== BONUS 3 ============================== */
{
  id: "bonus-3", num: "Bonus 3", title: "Cycle 3 – Le labyrinthe", level: "bonus", img: "img/b3-pdf.jpg", scene: "img/gp6-scene.jpg", duree: "4 h (CM1–6e)", pack: "gp6",
  resume: "Un game pack pensé pour la catégorie CM1–6e : labyrinthes et parcours, sorcière, fantômes, chauve-souris, pièces et diamants.",
  contenu: "1 page : fiche projet cycle 3 (croquis, planning, nom, règle du jeu). Le fichier .sb3 contient 7 arrière-plans (labyrinthe fermé, entrée / sortie, 4 parcours, fond vide), 10 lutins de jeu et 23 sons.",
  notions: ["Couleur touchée (murs)", "Déplacement au clavier", "Collecte d'objets", "Score et cœurs", "Plusieurs parcours"],
  eleve: PROJECT_ELEVE("Le labyrinthe", "le labyrinthe : 4 parcours, un chat, une sorcière, des fantômes, des chauves-souris, des pièces, des diamants, des cœurs", "Idée simple : le héros ne doit pas toucher les murs (couleur) et doit ramasser les pièces avant la sortie."),
  prof: PROJECT_PROF("le labyrinthe (cycle 3)", "Héros au clavier bloqué par la couleur des murs ; ennemis en patrouille ; pièces à collecter ; passage au parcours suivant à la sortie (4 niveaux tout prêts)."),
  tutos: [1, 7]
},
/* ============================== BONUS 4 ============================== */
{
  id: "bonus-4", num: "Bonus 4", title: "Cycle 3 – Le combat spatial", level: "bonus", img: "img/b4-pdf.jpg", scene: "img/gp7-scene.jpg", duree: "4 h (CM1–6e)", pack: "gp7",
  resume: "Un univers spatial pour les plus jeunes : chat volant, chien astronaute, monstres et fantômes, étoiles bonus, trois décors.",
  contenu: "1 page : fiche projet cycle 3. Le fichier .sb3 contient 3 arrière-plans (Space, Space City, Stars), 8 lutins de jeu, des lettres, des chiffres et 25 sons.",
  notions: ["Tir et clones", "Ennemis", "Bonus", "Score", "Décors multiples"],
  eleve: PROJECT_ELEVE("Le combat spatial", "l'espace : un chat volant, un chien astronaute, des fantômes, deux monstres, une étoile bonus et trois décors", "Inspire-toi de la séquence #7 (Space Invaders), en plus simple."),
  prof: PROJECT_PROF("le combat spatial (cycle 3)", "Chat volant au clavier ; fantômes qui traversent l'écran ; étoile bonus qui rapporte des points ; changement de décor tous les 10 points."),
  tutos: [10]
}
];

/* Contenus communs aux fiches « game pack » */
function PROJECT_ELEVE(name, univers, astuce) {
  return {
    mission: "Le jour J, tu découvriras un univers de jeu inconnu et tu devras inventer TON jeu. Ici, tu t'entraînes en conditions réelles avec l'univers de " + univers + ". Aucun élément extérieur n'est autorisé !",
    besoin: ["Le fichier du game pack (bouton « Télécharger le game pack » ci-dessus)", "Scratch 3 : Fichier → Charger depuis votre ordinateur", "Une feuille pour le croquis et le planning", "Une équipe de 2 ou 3"],
    etapes: [
      ["Découvre le pack", "Ouvre le fichier dans Scratch. Passe en revue chaque lutin, ses costumes, les arrière-plans et les sons.", "Le lutin « Sons » contient tous les sons du pack."],
      ["1 – Cherche des idées", "Imagine ton jeu : croquis, carte mentale, schéma ou storyboard. Choisis les lutins et décors à garder (tu n'es pas obligé de tout utiliser).", astuce],
      ["2 – Planifie", "Fais la liste des tâches et répartis-les dans l'équipe : qui code quoi, et dans quel ordre ?", "Commencez par le personnage principal."],
      ["3 – Donne un nom", "Trouve un nom à ton jeu « " + name + " ».", "Un bon nom donne envie de jouer !"],
      ["4 – Écris la règle du jeu", "But du jeu, touches, comment on gagne, comment on perd. Ce sera ton mode d'emploi pour le jury.", "Utilise les flèches plutôt que des lettres (QWERTY / AZERTY)."],
      ["5 – Code par étapes", "D'abord une version simple mais jouable, puis difficulté, score, sons. Sauvegarde v1, v2, v3…", "Partage tes scripts avec le « sac à dos » et crée tes propres blocs."]
    ],
    verifie: ["Mon jeu n'utilise QUE des éléments du pack", "On peut gagner et perdre", "Ma règle du jeu explique les touches", "J'ai sauvegardé plusieurs versions"],
    plus: "Fais tester ton jeu par une autre équipe et note ce qu'elle ne comprend pas : c'est ce qu'il faut améliorer."
  };
}
function PROJECT_PROF(univers, pistes) {
  return {
    objectifs: ["Mettre les élèves en conditions réelles de Nuit du Code", "Conduire une démarche de projet : idées, planning, réalisation, présentation", "Faire des choix dans un univers imposé", "Rédiger une règle du jeu / un mode d'emploi"],
    competences: [C.projet, C.crea, C.algo, C.parallele],
    prerequis: "Parcours #0 à #7 recommandé.",
    organisation: "Équipes de 2 ou 3, durée réelle de 4 à 6 h (ou 3 séances de 2 h). Rappeler les règles officielles : pas d'éléments extérieurs, pas d'internet, pas d'IA, pas de copie de scripts.",
    deroule: [["30 min", "Découverte du pack, croquis et règle du jeu"], ["15 min", "Planning et répartition des tâches"], ["3 à 4 h", "Développement par itérations (version jouable dès la 1re heure)"], ["30 min", "Tests croisés et rédaction du mode d'emploi"], ["Après", "Évaluation avec la grille du jury, présentation des jeux"]],
    vigilance: ["Les équipes veulent tout utiliser : insister sur les choix", "Pas de version jouable au bout de 2 h : recentrer sur l'essentiel", "Sauvegardes régulières sur l'ordinateur (Scratch n'a pas d'annulation)", "Pistes de jeu pour " + univers + " : " + pistes],
    differenciation: ["Proposer une idée de jeu toute faite aux équipes bloquées", "Tutos vidéo associés", "Rôles dans l'équipe : codeur, testeur, rédacteur"],
    evaluation: ["Jouabilité /5 : un jeu qui ne fonctionne pas n'est pas évalué", "Richesse et complexité /5", "Originalité et créativité /5", "Respect des consignes, présentation et mode d'emploi /5", "À rendre avec la production : croquis et planning"]
  };
}

window.PACKS = [
  { id: "gp1", name: "Shooting Duck", file: "_GamePack_1.sb3", taille: "4,5 Mo", seq: "game-pack-1", public: "Collège", decors: 3, lutins: 22, sons: "28 sons",
    desc: "Stand de tir forain : 3 canards, 4 cibles, viseur, pistolet, impacts, munitions, rideaux, vagues, herbe, arbres, nuages, supports bois et métal." },
  { id: "gp2", name: "Race Car", file: "GamePack_2.sb3", taille: "3,1 Mo", seq: "game-pack-2", public: "Collège", decors: 6, lutins: 23, sons: "20 sons",
    desc: "3 circuits + grilles de repérage : voitures et motos de 4 couleurs, pilotes, feux de départ, ligne d'arrivée, tonneaux, cônes, pneus, flaque d'huile, tribunes." },
  { id: "gp3", name: "Jeu de plateau", file: "GamePack_3.sb3", taille: "1,3 Mo", seq: "game-pack-3", public: "Collège / lycée", decors: 3, lutins: 23, sons: "25 sons",
    desc: "Plateformer : 2 aliens jouables, souris, escargot, abeille, slime, bernacle, échelles, ressorts, ponts, pointes, poids, boule de feu, clé, porte, HUD vies / pièces / clé." },
  { id: "gp4", name: "Le trésor de Piggy", file: "Le_trésor_de_Piggy.sb3", taille: "5,3 Mo", seq: "bonus-1", public: "Collège (avancé)", decors: 1, lutins: 7, sons: "34 sons",
    desc: "Piggy (24 costumes), scie, piège, poing, masse, pièce tournante (16 costumes), coffre (9 costumes) : tout se joue sur l'animation par costumes." },
  { id: "gp5", name: "Flappy Piggy", file: "Flappy_Piggy.sb3", taille: "0,5 Mo", seq: "bonus-2", public: "Collège / lycée", decors: 1, lutins: 6, sons: "4 sons",
    desc: "Piggy (12 costumes), tuyaux, deux sols pour le scrolling, bouton Play, chiffres pour le score, Game Over." },
  { id: "gp6", name: "Le labyrinthe", file: "Cycle_3_GamePack_Labyrinthe.sb3", taille: "1,6 Mo", seq: "bonus-3", public: "Cycle 3 (CM1–6e)", decors: 7, lutins: 10, sons: "23 sons",
    desc: "Labyrinthe fermé, entrée / sortie, 4 parcours : chat, sorcière, fantôme, chauve-souris, étoile, pièces, diamants, explosion, HUD cœur / monnaie." },
  { id: "gp7", name: "Le combat spatial", file: "Cycle_3_GamePack_Espace.sb3", taille: "2,7 Mo", seq: "bonus-4", public: "Cycle 3 (CM1–6e)", decors: 3, lutins: 8, sons: "25 sons",
    desc: "Space, Space City, Stars : chat volant, chien astronaute, 3 fantômes, 2 monstres Gobo, étoile bonus." }
];

window.TUTOS = [
  [1, "Déplacer un lutin – méthode 1", "a6WRTBb8CkM", "Passerelle · #3"],
  [2, "Déplacer un lutin – méthode 2", "3PbXyzQQOYk", "#3 · #4"],
  [3, "Initialiser un lutin au début d'un projet", "8oSKtPQNDr8", "#1 · #2"],
  [4, "Déplacer un lutin automatiquement vers un autre", "xRiZD5wsh0k", "#3 · #4"],
  [5, "Obtenir des déplacements plus fluides", "O1tDjDGwBtE", "#4 · #5"],
  [6, "Ajouter des interactions entre les lutins", "nINGvQVP_Og", "#4 · #5"],
  [7, "Interactions entre un lutin et l'arrière-plan", "P22s9A9U9lM", "GP1 · GP2"],
  [8, "Faire communiquer des lutins", "jtVMnEZDDes", "#4 · #5"],
  [9, "Utiliser le chronomètre", "v37gPSxlPW4", "#4 · #5"],
  [10, "Créer un tir et gérer le bloc clone", "P7ORrWLlGsA", "#7"],
  [11, "Faire sauter un lutin", "n1NCXKKrtq0", "GP3"],
  [12, "Faire sauter un lutin – version améliorée", "DZYkdUrQegU", "GP3"],
  [13, "Gérer des déplacements plus réalistes", "5wrleesBQCU", "GP2"],
  [14, "Créer une trajectoire parabolique (tir de basket…)", "MK4F1E3_nEY", "—"],
  [15, "Faire défiler l'écran – le scrolling", "fQZVY39WTg4", "Piggy"],
  [16, "Scrolling avec effet de profondeur", "8VfQzEOcRd0", "Piggy"],
  [17, "Scrolling fini sur plusieurs arrière-plans", "-S4utl_quqQ", "Piggy"],
  [18, "Scrolling infini sur plusieurs arrière-plans", "X669S6tAyis", "Piggy"]
];
