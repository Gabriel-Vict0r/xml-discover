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
        'background': '#1E2129',
        'primary': '#3288FF',
        'borders': 'rgba(255, 255, 255, 0.29)',
        'bg-container': 'rgba(255, 255, 255, 0.04)',
        'stroke-container': 'rgba(255, 255, 255, 0.08)',
        'bg-input': '#272A32',
        'stroke-cell': 'rgba(255, 255, 255, 0.10)',
        'text': 'rgba(255, 255, 255, 0.63)',
        'icon-add': 'rgba(50, 136, 255, 0.47)',
        'bg-footer': '#1C1F26',
        'stroke-footer': 'rgba(255, 255, 255, 0.08)'
      }
    },
  },
  plugins: [],
};
export default config;