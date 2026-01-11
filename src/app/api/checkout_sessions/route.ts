import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST() {
    try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    // For this demo, we'll use a dynamic price_data
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: 'Produit de Démonstration',
                            description: 'Un super produit créé avec Stripe et Next.js',
                            images: ['https://placehold.co/600x400'],
                        },
                        unit_amount: 2000, // 20.00 EUR
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?success=true`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?canceled=true`,
        });

        return NextResponse.json({ url: session.url, sessionId: session.id });
    } catch (err: unknown) {
        console.error('Error creating checkout session:', err);
        const errorMessage = err instanceof Error ? err.message : 'Internal Server Error';
        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
