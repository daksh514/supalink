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

          "base-100": "#FFFFFF",
          "base-200": "#F8F8F8",  // Pale Goldenrod (a light beige)
          "base-300": "#F0F0F0",

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
