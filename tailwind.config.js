module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    important: true,
    extend: {
      colors: {
        card_primary_color: "var(--card-primary-color)",
        card_title_color: "var(--card-title-color)",
        card_secondary_color: "var(--card-secondary-color)",
        card_bg_color: "var(--card-bg-color)",
        card_error_color: "var(--card-error-color)",
      },
    },
  },
  variants: {
    extend: {opacity: ['disabled'],},
  },
  plugins: [],
};

