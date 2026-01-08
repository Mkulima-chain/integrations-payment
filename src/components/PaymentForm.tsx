'use client';

import { useState, FormEvent } from 'react';
import {
    PaymentElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import styles from './PaymentForm.module.css';

export default function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);
        setMessage(null);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/payment-success`,
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`.
        if (error) {
            if (error.type === 'card_error' || error.type === 'validation_error') {
                setMessage(error.message || 'Une erreur est survenue');
            } else {
                setMessage('Une erreur inattendue est survenue.');
            }
        }

        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.paymentElement}>
                <PaymentElement />
            </div>

            {message && (
                <div className={styles.errorMessage}>
                    {message}
                </div>
            )}

            <button
                disabled={isLoading || !stripe || !elements}
                className={styles.payButton}
                type="submit"
            >
                {isLoading ? (
                    <span className={styles.spinner}></span>
                ) : (
                    <>
                        <svg
                            className={styles.lockIcon}
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.5 7H11.5V5C11.5 3.067 9.933 1.5 8 1.5C6.067 1.5 4.5 3.067 4.5 5V7H3.5C2.948 7 2.5 7.448 2.5 8V13C2.5 13.552 2.948 14 3.5 14H12.5C13.052 14 13.5 13.552 13.5 13V8C13.5 7.448 13.052 7 12.5 7ZM5.5 5C5.5 3.619 6.619 2.5 8 2.5C9.381 2.5 10.5 3.619 10.5 5V7H5.5V5Z"
                                fill="currentColor"
                            />
                        </svg>
                        Pay Now
                    </>
                )}
            </button>

            <div className={styles.poweredBy}>
                <span>Payments powered by</span>
                <svg
                    className={styles.stripeLogo}
                    width="33"
                    height="15"
                    viewBox="0 0 33 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M32.3 6.3c0-2.2-1.1-3.9-3.2-3.9-2.1 0-3.4 1.7-3.4 3.9 0 2.6 1.5 3.8 3.6 3.8 1 0 1.8-.2 2.5-.6v-1.5c-.7.3-1.4.5-2.3.5-1 0-1.8-.3-1.9-1.5h4.6c0-.2.1-.5.1-.7zm-4.7-1c0-1.1.7-1.6 1.4-1.6.7 0 1.3.5 1.3 1.6h-2.7zm-5.4-2.9c-.8 0-1.4.4-1.7.7l-.1-.5h-1.8v9.8l2-.4V9.4c.3.2.8.5 1.5.5 1.5 0 2.9-1.2 2.9-4 .1-2.5-1.3-3.5-2.8-3.5zm-.5 6.1c-.5 0-.8-.2-1-.4V5c.2-.3.6-.5 1-.5.8 0 1.3.9 1.3 2.3 0 1.5-.5 2.7-1.3 2.7zm-6.8-8.7l2-.4V0l-2 .4v1.4zm0 .8h2v7.5h-2V2.6zm-2.4.5l-.1-.5h-1.8v7.5h2V5.2c.5-.6 1.3-.5 1.5-.4V2.6c-.2-.1-1.1-.3-1.6.5zm-4.4-.5c-.4 0-.7.1-1 .2V0l-2 .4v9.7c0 1.2.9 2 2.3 2 1.2 0 2.4-.5 2.4-2.8V2.6c-.5-.2-1.1-.3-1.7-.3zm.1 7.4c-.3 0-.5-.1-.7-.2V4.3c.2-.1.4-.2.7-.2.9 0 1.4.5 1.4 2.1 0 1.7-.5 2.5-1.4 2.5zM3.9 6.1c0-.4.3-.6.9-.6.8 0 1.9.2 2.7.7V3.7c-.9-.4-1.8-.6-2.7-.6C2.5 3.1 1 4.2 1 6c0 2.9 4 2.4 4 3.7 0 .5-.4.7-1 .7-.9 0-2-.4-2.9-.9v2.6c1 .5 2 .7 2.9.7 2.4 0 4-1.1 4-3.1-.1-3.1-4.1-2.5-4.1-3.6z"
                        fill="#635BFF"
                    />
                </svg>
            </div>
        </form>
    );
}
