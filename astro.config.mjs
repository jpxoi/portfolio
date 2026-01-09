// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/billing': 'https://billing.stripe.com/p/login/14k3ez8zT1YR6qcfYY',
  },
})
