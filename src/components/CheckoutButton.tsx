'use client';

import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!publishableKey) {
    console.error(
        'La clé publique Stripe est manquante. Ajoutez NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY dans votre fichier .env.local'
    );
}

const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

export default function CheckoutButton() {
    const handleCheckout = async () => {
        try {
            const response = await fetch('/api/checkout_sessions', {
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const { sessionId } = await response.json();
            const stripe = await stripePromise;

            if (!stripe) {
                throw new Error('Stripe failed to initialize.');
            }

            const { error } = await (stripe as any).redirectToCheckout({
                sessionId,
            });

            if (error) {
                console.warn(error.message);
            }
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <button
            onClick={handleCheckout}
            style={{
                backgroundColor: '#635bff',
                color: '#ffffff',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.15s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
            Payer avec Stripe
        </button>
    );
}
