# Integrations Payment (Stripe Demo)

Projet de démonstration d'intégration de paiements Stripe avec **Next.js 14+** (App Router) et **TypeScript**.



## 🚀 Fonctionnalités
- **Next.js App Router** : Architecture moderne et performante.
- **Stripe Checkout** : Redirection vers la page de paiement sécurisée de Stripe.
- **TypeScript** : Typage strict pour une meilleure maintenabilité.
- **CSS Modules** : Styles isolés et propres.

## 🛠️ Structure du Projet

Voici comment comprendre la structure des fichiers pour collaborer facilement :

*   **`src/app`** : Cœur de l'application (Pages et Routes API).
    *   `page.tsx` : La page d'accueil (Vitrine Produit).
    *   `api/checkout_sessions/route.ts` : Le backend qui communique avec Stripe pour créer la session.
*   **`src/components`** : Composants React réutilisables.
    *   `CheckoutButton.tsx` : Le bouton qui déclenche l'action de paiement côté client.
*   **`src/lib`** : Utilitaires et Configuration.
    *   `stripe.ts` : Initialisation unique du client Stripe (Singleton pattern).

## ⚡ Guide de Démarrage

### 1. Prérequis
- Node.js 18 ou supérieur.
- Un compte [Stripe](https://dashboard.stripe.com/register) (activé en mode test).

### 2. Installation
Cloner le projet et installer les dépendances :
```bash
npm install
```

### 3. Configuration
Renommez le fichier `.env.example` en `.env.local` (ou créez-le) et ajoutez vos clés API Stripe de test :

```env
# Récupérez ces clés sur https://dashboard.stripe.com/test/apikeys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. Lancement
Démarrez le serveur de développement :
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🤝 Contribuer
Les Pull Requests sont les bienvenues. Pour des changements majeurs, veuillez d'abord ouvrir une issue pour discuter de ce que vous souhaitez changer.
