# 🔍 Personal Data Breach Checker

*[**Français**](./README.md) | [English](../en/README.md) | [Português](../pt/README.md)*

Un outil moderne et sécurisé pour vérifier si vos adresses email ont été compromises dans des fuites de données connues. Protégez votre identité numérique avec des conseils personnalisés.

## ✨ Fonctionnalités

- **🛡️ Vérification sécurisée** : Vérifiez vos emails sans stockage de données
- **⚡ Résultats instantanés** : Vérification rapide avec les dernières bases de données
- **💡 Conseils personnalisés** : Recommandations de sécurité adaptées à votre situation
- **🌙 Mode sombre/clair** : Interface moderne avec support du thème
- **📱 Responsive** : Design optimisé pour mobile et desktop
- **🔒 Respect de la vie privée** : Aucune donnée personnelle n'est stockée

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Installation

1. Clonez le projet :
```bash
git clone <url-du-repo>
cd personal-data-breach-checker
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 🛠️ Technologies utilisées

- **Framework** : Next.js 15 avec App Router
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Icônes** : Lucide React
- **API** : Route handlers Next.js

## 📁 Structure du projet

```
src/
├── app/
│   ├── api/check-breach/     # API pour vérifier les fuites
│   ├── globals.css           # Styles globaux
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Page d'accueil
├── components/
│   └── BreachChecker.tsx     # Composant principal de vérification
```

## 🔧 Configuration de l'API

Pour utiliser la vraie API HaveIBeenPwned (recommandé pour la production) :

1. Obtenez une clé API sur [HaveIBeenPwned](https://haveibeenpwned.com/API/Key)
2. Créez un fichier `.env.local` :
```env
HIBP_API_KEY=votre_cle_api_ici
```
3. Décommentez et utilisez la fonction `checkBreachesReal` dans `src/app/api/check-breach/route.ts`

## 🚀 Déploiement

### Vercel (Recommandé)

1. Pushez votre code sur GitHub
2. Connectez votre repo à [Vercel](https://vercel.com)
3. Déployez automatiquement

### Autres plateformes

```bash
npm run build
npm start
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pusher vers la branche
5. Ouvrir une Pull Request

Voir [CONTRIBUTING.md](../../CONTRIBUTING.md) pour des directives détaillées.

## 📄 Licence

Ce projet est sous licence Apache 2.0. Voir le fichier `LICENSE` pour plus de détails.

## ⚠️ Avertissement

Cet outil est fourni à des fins éducatives et de sensibilisation à la sécurité. Utilisez-le de manière responsable et respectez les conditions d'utilisation des APIs tierces.

---

**Rappel de sécurité** : Changez régulièrement vos mots de passe et activez l'authentification à deux facteurs partout où c'est possible ! 🔐
