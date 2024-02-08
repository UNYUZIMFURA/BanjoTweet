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
       custom: 'var(--color-btn-accent)'
     },
     
     borderColor: {
      custom: 'var(--color-border)'
     }
    },
    screens: {
      'sm': '500px',
      'md': '988px',
      'lg':'1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }
  },

  plugins: [],
};
