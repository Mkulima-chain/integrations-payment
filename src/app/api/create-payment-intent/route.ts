import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(_req: Request) {
    try {
        // --- MISSION SÉCURITÉ ---
        // ANALYSE : Auparavant, nous lisions "amount" depuis req.json().
        // RISQUE : Un utilisateur malveillant pouvait modifier le prix dans son navigateur.
        // SOLUTION : On définit le prix ici, sur le serveur, où l'utilisateur ne peut pas y toucher.

        const FIXED_AMOUNT = 2000; // 20.00 EUR (Stripe utilise les centimes)

        // On crée le PaymentIntent avec le montant sécurisé
        const paymentIntent = await stripe.paymentIntents.create({
            amount: FIXED_AMOUNT,
            currency: 'eur',
            automatic_payment_methods: {
                enabled: true,
            },
            metadata: {
                product: 'Pack Premium Intégration',
                security_check: 'server_side_amount_enforced'
            },
        });

        // On renvoie le clientSecret au frontend pour qu'il puisse afficher le formulaire
        return NextResponse.json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (err: unknown) {
        const error = err as { message?: string; statusCode?: number };
        console.error('Error creating payment intent:', error);
        return NextResponse.json(
            { error: error.message || 'Une erreur est survenue' },
            { status: error.statusCode || 500 }
        );
    }
}
