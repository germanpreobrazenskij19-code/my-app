export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#3E2723",
        coffee: {
          DEFAULT: "#6D4C41",
          light: "#8D6E63",
        },
        cream: {
          DEFAULT: "#FFF8E1",
          dark: "#F5E6C8",
        },
        amber: {
          accent: "#FF8F00",
          light: "#FFB300",
        },
        "text-dark": "#2C1810",
        "text-muted": "#795548",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};