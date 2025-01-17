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
        'blackish-green': '#001a16', // Example custom blackish green color
        },
        fontFamily:{
          body: ["var(--font-novo-mono)"],
          display: ["var(--font-roboto-mono)"]
        }
    },
  },
  plugins: [],
};
export default config;
