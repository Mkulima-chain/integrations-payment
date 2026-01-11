'use client';

import { useState } from 'react';

interface CheckoutButtonProps {
    productId: string;
    className?: string;
    label?: string;
}

export default function CheckoutButton({ productId, className, label = 'Payer avec Stripe' }: CheckoutButtonProps) {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/checkout_sessions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ productId }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const { url } = await response.json();

            if (url) {
                window.location.href = url;
            } else {
                throw new Error('Failed to get checkout URL.');
            }
        } catch (error) {
            console.error('Error during checkout:', error);
            alert('Une erreur est survenue lors de la redirection vers Stripe.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleCheckout}
            disabled={loading}
            className={className}
        >
            {loading ? 'Redirection...' : label}
        </button>
    );
}
