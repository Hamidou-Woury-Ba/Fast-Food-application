# Fast-Food-application
Mise en place d'une application de fast food en utilisant React, NextJS, TailwindCSS? Clerk pour l'authentication, et HyGraph

# NextJS
## A propos
    NexJS est un framework react pour le web qui permet de créer des applications Web de haute qualité avec la puissance des composants.
## Installation
    npx create-next-app@latest

# Arborescence des fichiers
## le fichier global.css
    Il contient tout le css qui s'applique tout au long de l'application
## le fichier layout.js
    Il constitue le point de départ de notre application
## le fichier page.js
    Il constitue la page par défaut de notre application
## le dossier node_modules
    C'est là ou se trouvera les les nouveaux paquets ou bibliothèques installés
    
# Démarrer l'application
    npm run dev

# La librairie shadcn
    Une bibliothèque css trés populaire contenant des composants magnifiquement conçu.
## Installation
    npx shadcn@latest init
 
# Authentification avec clerk
   * Clerk est une suite complète d’interfaces utilisateur intégrables, d’API flexibles et de tableaux de bord d’administration pour authentifier et gérer vos utilisateurs.
   * Il suffit de partir sur leur site web créer une nouvelle application puis recupèrer les clés api.
   * Par la suite, il faut télécharger clerk.
    npm install @clerk/nextjs
   * Enfin, on regarde la documentation pour continuer.