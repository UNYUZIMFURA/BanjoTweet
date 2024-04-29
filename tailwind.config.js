/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          inputsclr: "var(--color-text-inputs)",
        },
      },

      backgroundColor: {
        secondary: "var(--color-secondary)",
        custom: "var(--color-btn-accent)",
        primaryhover: "var(--color-primary-hover)",
        btnhover: "var(--color-btn-hover)",
        inputsbg: "var(--color-inputs-bg)",
      },

      borderColor: {
        custom: "var(--color-border)",
      },
    },
    screens: {
      xs: "320px",
      sm: "500px",
      md: "988px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};


