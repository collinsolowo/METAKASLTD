/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'metakas-primary': '#0B2540',
        'metakas-accent': '#F39C12',
        'metakas-teal': '#0FB2C6',
        'metakas-slate': '#2F3A47',
        'metakas-light': '#F6F7F9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
