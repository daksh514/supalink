import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ['var(--font-poppins)']
      }
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      {
        mainTheme: {

          "primary": "FFA500",

          "secondary": "#FF8C00",

          "accent": "#FFA500",

          "neutral": "F0EAD6",

          "base-100": "#F5F5DC",
          "base-200": "#EEE8AA",  // Pale Goldenrod (a light beige)
          "base-300": "#D2B48C",

          "info": "#FFA07A",

          "success": "#00ff00",

          "warning": "#FFD700",

          "error": "#FF6347",
        },
      },
      "dark"
    ],
  },
};
export default config;
