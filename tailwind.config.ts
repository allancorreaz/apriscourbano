import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7fa',
          100: '#eaeff5',
          200: '#d0deea',
          300: '#a7c2d6',
          400: '#789fbf',
          500: '#5682a7',
          600: '#43698b',
          700: '#365571',
          800: '#30485f',
          900: '#2c3e51',
        },
        gold: {
          50: '#fefdf8',
          100: '#fefbf0',
          200: '#fef4d6',
          300: '#fde9ad',
          400: '#fbd981',
          500: '#f7c32e',
          600: '#e4a91b',
          700: '#c18716',
          800: '#9d6a18',
          900: '#805618',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config