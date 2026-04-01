// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      name: 'Poppins',
      cssVariable: '--font-poppins',
      provider: fontProviders.fontsource(),
      weights: [400, 500, 600],
      subsets: ['latin'],
      styles: ['normal'],
    },
  ],

  redirects: {
    '/billing': 'https://billing.stripe.com/p/login/14k3ez8zT1YR6qcfYY',
  },
  prefetch: true,
})
