/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8093f1", // Blue color, you can adjust this
        border: "#e5e7eb",
        foreground: "#1f2937",
        "soft-blue": "#60a5fa",
        "soft-purple": "#a78bfa",
        "soft-green": "#34d399",
        "soft-peach": "#fda4af",
      },
    },
  },
  plugins: [],
};
