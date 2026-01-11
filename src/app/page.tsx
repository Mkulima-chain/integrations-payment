'use client';

import { useState } from 'react';
import Link from 'next/link';
import CheckoutButton from '@/components/CheckoutButton';
import styles from './page.module.css';

const SCENARIOS = [
  {
    id: 'spotify',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    title: 'Spotify Style',
    description: 'Musique en illimité partout. Abonnez-vous pour écouter vos chansons préférées sans publicité.',
    price: '10.99',
    period: '/mois',
    type: 'checkout'
  },
  {
    id: 'livraison',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Livraison Bio',
    description: 'Vos fruits et légumes frais livrés chez vous. Simple, rapide et bon pour la santé.',
    price: '25.00',
    period: '€ total',
    type: 'elements'
  },
  {
    id: 'cloud',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19l.5-11a5 5 0 0 0-10 0l.5 11" />
        <path d="M4.5 19h15" />
      </svg>
    ),
    title: 'Coffre-fort Numérique',
    description: 'Gardez vos photos et documents en sécurité. Accédez-y sur tous vos appareils, n\'importe où.',
    price: '5.00',
    period: '/mois',
    type: 'checkout'
  },
  {
    id: 'gadget',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: 'Gadget Tech',
    description: 'La technologie dernier cri entre vos mains. Commandez votre nouvel accessoire préféré.',
    price: '150.00',
    period: '€ total',
    type: 'elements'
  }
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('payments');

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* Header Section */}
        <header className={styles.header}>
          <h1 className={styles.title}>Reussissez vos paiements en ligne avec Stripe</h1>
          <p className={styles.subtitle}>
            Encaisser de l’argent en ligne ne doit pas être compliqué.
            Avec Stripe, tout se fait en quelques secondes, de manière simple et totalement sécurisée.
          </p>
        </header>

        {/* Tabs Navigation */}
        <nav className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'info' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('info')}
          >
            Comment ça marche ?
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'payments' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('payments')}
          >
            Paiements
          </button>
        </nav>

        {/* Content based on Tabs */}
        {activeTab === 'payments' ? (
          <div className={styles.grid}>
            {SCENARIOS.map((scenario) => (
              <div key={scenario.id} className={`${styles.card} glass-card`}>
                <div className={styles.cardIcon}>{scenario.icon}</div>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{scenario.title}</h3>
                  <p className={styles.cardDescription}>{scenario.description}</p>
                </div>
                <div className={styles.cardPrice}>
                  €{scenario.price}<span>{scenario.period}</span>
                </div>

                {scenario.id === 'spotify' || scenario.id === 'cloud' ? (
                  <CheckoutButton
                    productId={scenario.id}
                    className={`${styles.button} ${styles.buttonPrimary}`}
                    label="Démarrer"
                  />
                ) : (
                  <Link
                    href="/checkout"
                    className={`${styles.button} ${styles.buttonPrimary}`}
                  >
                    Acheter maintenant
                  </Link>
                )}
              </div>
            ))}
          </div>
        ) : (
          <section className={styles.infoSection}>
            <h2 className={styles.infoTitle}>Recevez des paiements facilement avec Stripe</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoStep}>
                <span className={styles.stepNumber}>1</span>
                <h4 className={styles.stepTitle}>Le client clique sur « Payer »</h4>
                <p className={styles.stepText}>
                  Dès qu’il clique, Stripe est informé qu’un paiement va arriver et se prépare automatiquement.
                </p>
              </div>
              <div className={styles.infoStep}>
                <span className={styles.stepNumber}>2</span>
                <h4 className={styles.stepTitle}>Le client paie en toute confiance</h4>
                <p className={styles.stepText}>
                  Il entre ses informations de paiement directement sur votre site, dans un espace sécurisé.
                  Ses données sont protégées et restent privées.
                </p>
              </div>
              <div className={styles.infoStep}>
                <span className={styles.stepNumber}>3</span>
                <h4 className={styles.stepTitle}>Le paiement est validé</h4>
                <p className={styles.stepText}>
                  Stripe vérifie tout, confirme le paiement et vous prévient immédiatement.
                  C’est fait : vous êtes payé ✔️
                </p>
              </div>
            </div>

            <div style={{ marginTop: '60px', textAlign: 'center' }}>
              <div>
                <p style={{ fontWeight: '700', fontSize: '20px', color: 'var(--slate-900)', marginBottom: '8px' }}>🚀 Simple, rapide et fiable</p>
                <p style={{ color: 'var(--slate-500)', maxWidth: '500px', margin: '0 auto' }}>Stripe s’occupe de la technique pour que vous puissiez vous concentrer sur ce qui compte vraiment : vendre, servir et grandir.</p>
              </div>
            </div>
          </section>
        )}

        <footer className={styles.footer}>
          {/* Footer content removed as requested */}
        </footer>
      </div>
    </main>
  );
}
