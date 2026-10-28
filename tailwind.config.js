/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#050711', navy: '#08152F', blue: '#247BFF', ice: '#55B7FF', ruby: '#FF315A', wine: '#9E1235', rose: '#FF5278', mist: '#C9D4E8' },
      fontFamily: {
        script: ['"Dancing Script"', 'cursive'],
        hand: ['Caveat', 'cursive'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
