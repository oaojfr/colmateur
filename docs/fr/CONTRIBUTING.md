# Guide de Contribution

*[**Français**](./CONTRIBUTING.md) | [English](../en/CONTRIBUTING.md) | [Português](../pt/CONTRIBUTING.md)*

Merci de votre intérêt pour contribuer au Personal Data Breach Checker ! 🎉

## Comment contribuer

### Signaler un bug 🐛

1. Vérifiez que le bug n'a pas déjà été signalé dans les [Issues](../../issues)
2. Créez une nouvelle issue avec :
   - Un titre descriptif
   - Les étapes pour reproduire le bug
   - Le comportement attendu vs observé
   - Votre environnement (OS, navigateur, version Node.js)

### Proposer une fonctionnalité 💡

1. Vérifiez les [Issues](../../issues) et [Discussions](../../discussions) existantes
2. Créez une nouvelle discussion ou issue pour discuter de l'idée
3. Attendez les retours avant de commencer le développement

### Développement 🛠️

#### Configuration de l'environnement

1. Forkez le projet
2. Clonez votre fork :
```bash
git clone https://github.com/votre-username/personal-data-breach-checker.git
cd personal-data-breach-checker
```

3. Installez les dépendances :
```bash
npm install
```

4. Créez une branche pour votre fonctionnalité :
```bash
git checkout -b feature/ma-nouvelle-fonctionnalite
```

5. Lancez le serveur de développement :
```bash
npm run dev
```

#### Conventions de code

- **TypeScript** : Utilisez TypeScript pour tous les nouveaux fichiers
- **ESLint** : Respectez les règles ESLint (`npm run lint`)
- **Prettier** : Le code sera formaté automatiquement
- **Commits** : Utilisez des messages de commit clairs et descriptifs

#### Structure des commits

```
type(scope): description

- feat: nouvelle fonctionnalité
- fix: correction de bug
- docs: documentation
- style: formatage, points-virgules manquants, etc.
- refactor: refactoring du code
- test: ajout ou modification de tests
- chore: maintenance

Exemples :
feat(api): ajouter support pour l'API v2 de HaveIBeenPwned
fix(ui): corriger l'affichage mobile du composant BreachChecker
docs(readme): mettre à jour les instructions d'installation
```

#### Tests et qualité

Avant de soumettre votre PR :

```bash
# Vérifiez le linting
npm run lint

# Testez la compilation
npm run build

# Testez localement
npm run dev
```

### Soumettre une Pull Request 📤

1. Pushez votre branche vers votre fork
2. Créez une Pull Request vers la branche `main`
3. Remplissez le template de PR avec :
   - Description des changements
   - Types de changements (bug fix, feature, etc.)
   - Checklist de vérification
   - Screenshots si applicable

## Directives de sécurité 🔒

- Ne jamais committer de clés API réelles
- Utilisez `.env.example` pour documenter les variables d'environnement
- Validez toujours les entrées utilisateur
- Respectez les bonnes pratiques de sécurité web

## Ressources utiles 📚

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [HaveIBeenPwned API](https://haveibeenpwned.com/API/v3)

## Questions ? 🤔

- Créez une [Discussion](../../discussions) pour les questions générales
- Créez une [Issue](../../issues) pour les bugs ou fonctionnalités spécifiques

Merci de contribuer à la sécurité numérique ! 🙏
