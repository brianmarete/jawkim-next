import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "very-dark-blue": "var(--very-dark-blue)",
        "mustard-yellow": "var(--mustard-yellow)",
      },
      backgroundImage: {
        "scale-pattern": "url('https://pub-94dc47df391c4556bac5370df0514d7d.r2.dev/scale-bg.png')",
      }
    },
  },
  plugins: [],
};
export default config;
