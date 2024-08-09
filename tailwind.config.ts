import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
      orange: {
        100: "#FA7268",
        200: "#F16367",
        300: "#E85467",
        400: "#DE4466",
        500: "#D23467",
        600: "#C62268",
      },
      space: '#001220',
    },
    },
    
  },
  plugins: [],
};
export default config;
