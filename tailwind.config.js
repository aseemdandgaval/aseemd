/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          retro: ['"Press Start 2P"', 'monospace']
        }
      }
    },
    plugins: []
  };