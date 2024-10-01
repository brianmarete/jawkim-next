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
        "scale-pattern": "url('/images/scale-bg.png')",
        "hero-image": "url('/images/bg-hero.png')",
        "bishop-magua": "url('/images/featured-image-2.png')"
      },
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'bounce-short': 'bounce 1s ease-in-out 3'
      },
    },
  },
  plugins: [],
};
export default config;
