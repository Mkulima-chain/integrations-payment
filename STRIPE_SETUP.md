# Configuration des Clés Stripe 🛠️

Pour que ton projet fonctionne, tu dois configurer tes clés API Stripe. Les erreurs que tu vois (IntegrationError et 500) sont dues à l'absence de ces clés.

## Étape 1 : Créer le fichier .env.local
Crée un fichier nommé `.env.local` à la racine de ton projet (au même endroit que `package.json`).

## Étape 2 : Ajouter les clés
Copie et colle le contenu suivant dans ton fichier `.env.local`, puis remplace les valeurs par tes propres clés trouvées dans ton [Tableau de bord Stripe](https://dashboard.stripe.com/test/apikeys).

```bash
# Clé Secrète (Backend)
STRIPE_SECRET_KEY=sk_test_tu_dois_mettre_ta_cle_ici

# Clé Publique (Frontend)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_tu_dois_mettre_ta_cle_ici
```

## Pourquoi c'est important ?
1. **STRIPE_SECRET_KEY** : Utilisée par ton serveur (Node.js) pour parler en toute sécurité à Stripe. Elle doit rester secrète !
2. **NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY** : Utilisée par ton navigateur (React) pour charger les éléments UI sécurisés (le formulaire de carte).

---
*Une fois le fichier créé, redémarre ton serveur avec `npm run dev`.*
