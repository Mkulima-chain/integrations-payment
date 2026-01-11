'use client';

export default function PaymentSuccessPage() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f9fafb',
            padding: '24px',
            fontFamily: 'Inter, system-ui, sans-serif',
        }}>
            <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: '48px 32px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                maxWidth: '480px',
            }}>
                <div style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#ecfdf5',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                }}>
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                            fill="#10b981"
                        />
                    </svg>
                </div>
                <h1 style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#1a1f36',
                    margin: '0 0 12px 0',
                }}>
                    Payment Successful!
                </h1>
                <p style={{
                    fontSize: '16px',
                    color: '#8898aa',
                    margin: '0 0 32px 0',
                }}>
                    Thank you for your purchase. Your payment has been processed successfully.
                </p>
                <a
                    href="/"
                    style={{
                        display: 'inline-block',
                        backgroundColor: '#10b981',
                        color: 'white',
                        padding: '12px 32px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '16px',
                        boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)',
                        transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#059669';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(16, 185, 129, 0.3)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#10b981';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.2)';
                    }}
                >
                    Return to Home
                </a>
            </div>
        </div>
    );
}
