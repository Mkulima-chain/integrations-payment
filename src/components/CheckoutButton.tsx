'use client';



export default function CheckoutButton() {
    const handleCheckout = async () => {
        try {
            const response = await fetch('/api/checkout_sessions', {
                method: 'POST',
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
