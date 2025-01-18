import Stripe from 'stripe'

export const stripe = new Stripe(process.env.PRIVATE_STRIPE_KEY as string, {
  apiVersion: '2024-12-18.acacia',
  appInfo: {
    name: 'Ignite Shop',
  },
})
