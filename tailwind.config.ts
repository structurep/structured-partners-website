import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Set Inter as the default sans-serif font using the CSS variable from layout.tsx
        sans: ["var(--font-inter)", "system-ui", "sans-serif"], // Added system-ui as a fallback
      },
      colors: {
        // Brand Colors from the new Brief
        primary: {
          DEFAULT: "#E35F4F", // Primary color from brief
          hover: "#EF877A",   // Primary Hover color from brief
        },
        secondary: {
          DEFAULT: "#050505", 
        },
        tertiary: {
          DEFAULT: "#F2F2F2", 
          hover: "#FAFAFA",
          active: "#E6E6E6",
          subtle: "#FAFAFA",
          strong: "#A5A5A5",
          disabled: "rgba(242, 242, 242, 0.5)",
        },
        text: {
          title: "#000000",
          body: "#454545",
          subtle: "#5D5D5D",
          caption: "#888888",
          onPrimary: "#FFFFFF", 
          onSecondary: "#FFFFFF", 
        },
        background: {
          1: "#F6F6F6",
          2: "#E7E7E7",
          3: "#D1D1D1",
        },
        stroke: {
          1: "#E7E7E7",
          2: "#F6F6F6",
          3: "#D1D1D1",
        },
      },
      borderRadius: {
        sm: "2px",
        md: "4px",
        DEFAULT: "8px", 
        lg: "8px", 
        xl: "16px", 
        full: "999px", 
      },
      boxShadow: {
        // Standard shadows, brief mentions applying shadow-md and hover:shadow-lg
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)", // Tailwind default sm
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", // Tailwind default
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", // Tailwind default md
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", // Tailwind default lg
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", // Tailwind default xl
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

