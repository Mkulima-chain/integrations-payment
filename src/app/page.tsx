import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              src="https://placehold.co/600x400/png"
              alt="Produit Demo"
              width={600}
              height={400}
              priority
              className={styles.pImage}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Pack Premium Intégration</h1>
            <p className={styles.description}>
              Apprenez à intégrer Stripe avec Next.js 14+.
              Code source complet, support TypeScript et bonnes pratiques inclus.
            </p>
            <div className={styles.priceContainer}>
              <span className={styles.price}>20.00 €</span>
              <span className={styles.files}>Livraison immédiate</span>
            </div>
            <div className={styles.action}>
              <Link href="/checkout" className={styles.checkoutButton}>
                Payer avec Stripe
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Propulsé par Stripe & Next.js</p>
      </footer>
    </div>
  );
}
