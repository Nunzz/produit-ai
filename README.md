# 🤖 Simple OpenAI

Un package Node.js simple et élégant pour interagir avec l'API OpenAI de manière intuitive.

## ✨ Caractéristiques

-   🚀 Installation facile
-   💡 API simple et intuitive
-   ⚡ Performances optimisées
-   🛡️ Gestion des erreurs robuste
-   📝 Génération de contenu structuré en JSON

## 🔧 Installation

```bash
npm install question
```

## 📖 Guide d'utilisation

### Configuration de base

```javascript
const ProduitAI = require("produit-ai");

// Initialisation avec votre clé API
const produitAI = new ProduitAI("votre_api_key");
```

### TypeScript

```typescript
import ProduitAI from "produit-ai";

// Initialisation avec votre clé API
const produitAI = new ProduitAI("votre_api_key");
```

### Exemples d'utilisation

#### Générer du contenu structuré

```javascript
const urls = ["https://exemple.com/produit1", "https://exemple.com/produit2"];
const contenu = await question.contenu(urls);
console.log(contenu);
// Résultat :
// {
//   "titre": "Nom du produit",
//   "descriptif": "Description détaillée du produit",
//   "prix": 59
// }
```

#### Utilisation avec async/await

```javascript
async function genererContenu() {
    try {
        const urls = [
            "https://exemple.com/produit1",
            "https://exemple.com/produit2",
        ];
        const contenu = await question.contenu(urls);
        console.log(contenu);
    } catch (error) {
        console.error("Erreur:", error);
    }
}
```

## 🔐 Configuration de l'API

Pour utiliser ce package, vous devez obtenir une clé API OpenAI :

1. Créez un compte sur [OpenAI](https://openai.com)
2. Accédez à votre tableau de bord
3. Générez une nouvelle clé API
4. Utilisez cette clé dans votre configuration

## 📝 Documentation

### Méthode `contenu(urls)`

La méthode `contenu` permet de générer automatiquement une description structurée à partir d'URLs de produits.

**Paramètres :**

-   `urls` : Array de strings - Liste des URLs des produits à analyser

**Retourne :**
Un objet JSON contenant :

-   `titre` : Le titre du produit
-   `descriptif` : Une description détaillée
-   `categorie` : La catégorie du produit
-   `emojis` : Un tableau d'emojis
-   `prix` : Le prix du produit (nombre)

**Exemple de réponse :**

```javascript
{
  "titre": "Pull Poncho Doux en Rose Poudré",
  "descriptif": "Ce pull poncho en laine douce offre confort et élégance...",
  "prix": 59
}
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

-   Ouvrir une issue
-   Proposer une pull request
-   Suggérer des améliorations

### 📂 Lien GitHub

Vous pouvez accéder au dépôt GitHub ici : [git@github.com:Nunzz/produit-ai.git](git@github.com:Nunzz/produit-ai.git)

## 📄 Licence

MIT © [Norbert Galifi]

---

⭐ Si vous aimez ce projet, n'hésitez pas à lui mettre une étoile sur GitHub !
