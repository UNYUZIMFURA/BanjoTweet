/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      textColor: {
        skin: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)'
        }
      },

     backgroundColor: {
       btnactive: 'var(--color-btn-active)'
     },
     
     borderColor: {
      custom: 'var(--color-border)'
     }
    }
  },

  plugins: [],
};
