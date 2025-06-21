# Politique de Sécurité

*[**Français**](./SECURITY.md) | [English](../en/SECURITY.md) | [Português](../pt/SECURITY.md)*

## Signaler des Vulnérabilités de Sécurité

Si vous découvrez une vulnérabilité de sécurité dans ce projet, veuillez la signaler de manière responsable.

### Comment signaler

1. **NE PAS** créer une issue publique pour les vulnérabilités de sécurité
2. Envoyez un email détaillé à [votre-email@domain.com] avec :
   - Description de la vulnérabilité
   - Étapes pour reproduire le problème
   - Impact potentiel
   - Suggestions de correction si possible

### Ce que nous nous engageons à faire

- Accuser réception de votre rapport dans les 48 heures
- Fournir une estimation du temps de correction
- Vous tenir informé des progrès
- Vous créditer pour la découverte (si souhaité)

## Versions supportées

| Version | Support de sécurité |
| ------- | ------------------ |
| 1.x.x   | ✅ Supportée       |
| < 1.0   | ❌ Non supportée   |

## Bonnes pratiques de sécurité

### Pour les utilisateurs

- Ne partagez jamais vos vrais mots de passe lors des tests
- Utilisez des emails de test pour les démonstrations
- Vérifiez toujours l'URL avant de saisir des informations sensibles

### Pour les développeurs

- Validez toujours les entrées utilisateur
- Utilisez HTTPS en production
- Ne loggez jamais d'informations sensibles
- Respectez les limites de taux des APIs tierces
- Suivez le principe du moindre privilège

## Dépendances

Ce projet utilise des dépendances tierces. Nous recommandons de :

- Maintenir les dépendances à jour
- Utiliser `npm audit` régulièrement
- Surveiller les alertes de sécurité GitHub

## Contact

Pour toute question de sécurité non urgente, vous pouvez aussi créer une discussion dans l'onglet Discussions du projet.
