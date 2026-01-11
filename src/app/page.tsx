import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Intégration Stripe & Next.js
              <span className={styles.gradient}> Simplifiée</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Apprenez à intégrer des paiements sécurisés avec Stripe dans vos applications Next.js.
              Code source complet, TypeScript, et bonnes pratiques inclus.
            </p>

            <div className={styles.heroBadges}>
              <div className={styles.badge}>
                <svg className={styles.badgeIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Paiement Sécurisé</span>
              </div>
              <div className={styles.badge}>
                <svg className={styles.badgeIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Livraison Immédiate</span>
              </div>
              <div className={styles.badge}>
                <svg className={styles.badgeIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Documentation Complète</span>
              </div>
            </div>

            <div className={styles.heroActions}>
              <Link href="/checkout" className={styles.ctaPrimary}>
                <svg className={styles.lockIcon} width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Acheter Maintenant - 20€
              </Link>
              <a href="#features" className={styles.ctaSecondary}>
                En Savoir Plus
              </a>
            </div>
          </div>

          <div className={styles.heroImage}>
            <Image
              src="/product-hero.png"
              alt="Stripe & Next.js Integration"
              width={600}
              height={450}
              priority
              className={styles.productImage}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <h2 className={styles.sectionTitle}>Ce que vous obtenez</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Code TypeScript</h3>
            <p className={styles.featureDescription}>
              Code source complet avec TypeScript pour une intégration type-safe et maintenable.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Stripe Elements</h3>
            <p className={styles.featureDescription}>
              Intégration complète de Stripe avec PaymentIntents et Elements pour une UX optimale.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Next.js 16</h3>
            <p className={styles.featureDescription}>
              Utilise les dernières fonctionnalités de Next.js avec App Router et Server Components.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Sécurité PCI</h3>
            <p className={styles.featureDescription}>
              Implémentation conforme PCI-DSS avec gestion sécurisée des paiements par Stripe.
            </p>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className={styles.productSection}>
        <div className={styles.productCard}>
          <div className={styles.productHeader}>
            <h2 className={styles.productTitle}>Pack Premium Intégration</h2>
            <div className={styles.priceTag}>
              <span className={styles.price}>20.00 €</span>
              <span className={styles.priceLabel}>Paiement unique</span>
            </div>
          </div>

          <div className={styles.productFeatures}>
            <div className={styles.productFeature}>
              <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Code source complet Next.js + Stripe</span>
            </div>
            <div className={styles.productFeature}>
              <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Support TypeScript intégré</span>
            </div>
            <div className={styles.productFeature}>
              <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Documentation et bonnes pratiques</span>
            </div>
            <div className={styles.productFeature}>
              <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Exemples de PaymentIntents et Elements</span>
            </div>
            <div className={styles.productFeature}>
              <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Livraison immédiate après paiement</span>
            </div>
          </div>

          <Link href="/checkout" className={styles.productCta}>
            Procéder au Paiement Sécurisé
          </Link>
        </div>
      </section>

      {/* Tech Stack */}
      <section className={styles.techStack}>
        <p className={styles.techLabel}>Propulsé par</p>
        <div className={styles.techLogos}>
          <div className={styles.techLogo}>Next.js</div>
          <div className={styles.techLogo}>Stripe</div>
          <div className={styles.techLogo}>TypeScript</div>
          <div className={styles.techLogo}>React</div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 Stripe & Next.js Integration. Tous droits réservés.</p>
        <p className={styles.footerSecure}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="2" />
          </svg>
          Paiements sécurisés par Stripe
        </p>
      </footer>
    </div>
  );
}
