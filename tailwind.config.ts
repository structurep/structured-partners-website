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
        // Add Advent Pro using the CSS variable defined in layout.tsx
        sans: ["var(--font-advent-pro)", "sans-serif"],
      },
      colors: {
        // Brand Colors from Style Guide / Tech Plan
        primary: {
          DEFAULT: "#E35F4F", // Primary
          hover: "#EF877A",   // Primary Hover
          // active: "#CF4433", // Assuming active state if needed
          // subtle: "#FCE7E4", // Assuming subtle state if needed
        },
        secondary: {
          DEFAULT: "#050505", // Secondary
          // hover: "#171717", // Assuming hover state if needed
          // active: "#0A0A0A", // Assuming active state if needed
        },
        tertiary: {
          DEFAULT: "#F2F2F2", // Tertiary (from previous style guide, useful for backgrounds/text)
          hover: "#FAFAFA",
          active: "#E6E6E6",
          subtle: "#FAFAFA",
          strong: "#A5A5A5",
          disabled: "rgba(242, 242, 242, 0.5)",
        },
        // Text Colors from Style Guide
        text: {
          title: "#000000",
          body: "#454545",
          subtle: "#5D5D5D",
          caption: "#888888",
          // Add contrast text colors if needed
          onPrimary: "#FFFFFF", // White text on primary bg
          onSecondary: "#FFFFFF", // White text on secondary bg
        },
        // Background Colors from Style Guide
        background: {
          1: "#F6F6F6",
          2: "#E7E7E7",
          3: "#D1D1D1",
        },
        // Stroke Colors from Style Guide
        stroke: {
          1: "#E7E7E7",
          2: "#F6F6F6",
          3: "#D1D1D1",
        },
      },
      borderRadius: {
        // Corner Radius from Tech Plan (8px)
        sm: "2px",
        md: "4px",
        DEFAULT: "8px", // Default for cards/buttons
        lg: "8px", // Explicitly match default
        xl: "16px", // For modals
        full: "999px", // Round
      },
      boxShadow: {
        // Shadows from Tech Plan
        sm: "0 0 4px 0 rgba(0, 0, 0, 0.1)",
        md: "0 0 8px 0 rgba(0, 0, 0, 0.2)", // Default shadow
        lg: "0 0 16px 0 rgba(0, 0, 0, 0.3)", // Hover shadow
        DEFAULT: "0 0 8px 0 rgba(0, 0, 0, 0.2)", // Set default shadow
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

