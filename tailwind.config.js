// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Adjust paths as needed
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // o 'media' si prefieres usar la preferencia del sistema
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
      },
    },
  },
  plugins: [],
};
