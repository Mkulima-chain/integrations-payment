import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

// --- DICTIONNAIRE DE PRIX SÉCURISÉ ---
// ANALYSE : On ne laisse jamais le client envoyer le prix.
// On reçoit un ID et on cherche le prix correspondant ici.
const PRODUCTS: Record<string, { name: string; amount: number; mode: 'payment' | 'subscription' }> = {
    spotify: { name: 'Spotify Premium (Simulé)', amount: 1099, mode: 'payment' }, // Paiement simple pour la démo
    livraison: { name: 'Panier Fraîcheur Bio', amount: 2500, mode: 'payment' },
    cloud: { name: 'Stockage Cloud Pro (Mensuel)', amount: 500, mode: 'payment' },
    gadget: { name: 'Casque Audio Hi-Fi', amount: 15000, mode: 'payment' }
};

export async function POST(req: Request) {
    try {
        const { productId } = await req.json();
        const product = PRODUCTS[productId] || PRODUCTS.gadget;

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: product.name,
                            description: `Intégration Stripe pour ${product.name}`,
                        },
                        unit_amount: product.amount,
                    },
                    quantity: 1,
                },
            ],
            mode: product.mode,
            success_url: `${req.headers.get('origin')}/payment-success`,
            cancel_url: `${req.headers.get('origin')}/`,
        });

        return NextResponse.json({ url: session.url });
    } catch (err: unknown) {
        console.error('Error creating checkout session:', err);
        const error = err as { message?: string };
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
