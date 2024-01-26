/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      first_color: '#5787e0',
      first_color_alt: '#82a6e8',
      title_color: '#f0f2f4',
      title_color_light: '#21252c',
      text_color: '#babec4',
      text_color_light: '#888b91',
      body_color: '#0b111e',
      container_color: '#151c28',
      gray: {
        50: '#f9fafb',
        100: '#f4f5f7',
        200: '#e5e7eb',
        300: '#d2d6dc',
        400: '#9fa6b2',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#252f3f',
        900: '#161e2e',
      },
    }
  },
  plugins: [],
}

