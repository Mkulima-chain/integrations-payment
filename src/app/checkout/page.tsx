'use client';

import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import PaymentForm from '@/components/PaymentForm';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

export default function CheckoutPage() {
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({}), // Plus besoin d'envoyer le montant d'ici !
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to create payment intent');
                }
                return res.json();
            })
            .then((data) => {
                setClientSecret(data.clientSecret);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error:', err);
                setError('Unable to initialize payment. Please try again.');
                setLoading(false);
            });
    }, []);

    const options: StripeElementsOptions = {
        clientSecret,
        appearance: {
            theme: 'stripe',
            variables: {
                colorPrimary: '#635bff',
                colorBackground: '#ffffff',
                colorText: '#1a1f36',
                colorDanger: '#df1b41',
                fontFamily: 'Inter, system-ui, sans-serif',
                spacingUnit: '4px',
                borderRadius: '8px',
            },
        },
    };

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Link href="/" className={styles.backButton}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5m0 0l7 7m-7-7l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Retour
                </Link>

                {/* Logo */}
                <div className={styles.logoContainer}>
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={64}
                        height={64}
                        className={styles.logo}
                    />
                </div>

                {/* Title with lock icon */}
                <div className={styles.header}>
                    <svg
                        className={styles.lockIcon}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 11H18V7C18 4.24 15.76 2 13 2C10.24 2 8 4.24 8 7V11H7C5.9 11 5 11.9 5 13V20C5 21.1 5.9 22 7 22H19C20.1 22 21 21.1 21 20V13C21 11.9 20.1 11 19 11ZM10 7C10 5.34 11.34 4 13 4C14.66 4 16 5.34 16 7V11H10V7Z"
                            fill="#1a1f36"
                        />
                    </svg>
                    <h1 className={styles.title}>Secure Payment</h1>
                </div>

                {/* Order Summary Card */}
                <div className={styles.orderSummary}>
                    <h2 className={styles.summaryTitle}>Order Summary</h2>
                    <div className={styles.productInfo}>
                        <div className={styles.productDetails}>
                            <p className={styles.productName}>
                                Pack Premium Intégration
                            </p>
                            <p className={styles.productDescription}>
                                Stripe + Next.js Integration
                            </p>
                        </div>
                        <div className={styles.productPrice}>
                            <span className={styles.price}>€20.00</span>
                        </div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.totalRow}>
                        <span className={styles.totalLabel}>Total</span>
                        <span className={styles.totalAmount}>€20.00</span>
                    </div>
                </div>

                {/* Payment Form */}
                <div className={styles.paymentCard}>
                    {loading && (
                        <div className={styles.loadingContainer}>
                            <div className={styles.spinner}></div>
                            <p>Loading payment form...</p>
                        </div>
                    )}

                    {error && (
                        <div className={styles.errorContainer}>
                            <p className={styles.errorText}>{error}</p>
                        </div>
                    )}

                    {clientSecret && !loading && !error && (
                        <Elements options={options} stripe={stripePromise}>
                            <PaymentForm />
                        </Elements>
                    )}
                </div>

                {/* Card Logos */}
                <div className={styles.cardLogos}>
                    <Image
                        src="/card-logos.png"
                        alt="Visa and Mastercard"
                        width={120}
                        height={40}
                        className={styles.cardLogosImage}
                    />
                </div>
            </div>
        </div>
    );
}
