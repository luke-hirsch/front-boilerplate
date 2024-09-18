import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        resi: {
          100: "#F9F6F3",
          150: "#F5EEE8",
          200: "#F0E0D8",
          250: "#EDDACD",
          300: "#E6C1AF",
          350: "#E1B69F",
          400: "#DCAC8F",
          450: "#D99B7A",
          500: "#EA5B0C",
          550: "#D24D0A",
          600: "#C24E0B",
          650: "#AA470A",
          700: "#9B3F09",
          750: "#823408",
          800: "#6B2E06",
          850: "#532405",
          900: "#4A2419",
          950: "#3D1F16",
        },
        neutral: {
          0: "#FFFFFF",
          50: "#F5F5F5",
          100: "#EBEBEB",
          200: "#D6D6D6",
          300: "#BFBFBF",
          400: "#A5A5A5",
          500: "#7C7C7A",
          600: "#656563",
          700: "#4E4E4B",
          800: "#383836",
          900: "#16161D",
          1000: "#000000",
        },
        success: {
          0: "#EAF6FF", // Very light blue
          50: "#D5ECFF", // Light blue
          100: "#B8E0FF", // Light-medium blue
          200: "#85CFFF", // Medium light blue
          300: "#55BFFF", // Medium blue
          400: "#349BDA", // Slightly darker blue
          500: "#264653", // Navy blue (works well in dark mode, fits with #EA5B0C)
          600: "#1F3B48", // Darker navy
          700: "#1A313E", // Even darker navy
          800: "#152734", // Dark blue, nearly black
          900: "#0D1A26", // Very dark blue
          1000: "#081219",
        },
        error: {
          0: "#FFF4F4", // Very light burgundy
          50: "#FEE8E8", // Light burgundy
          100: "#FDCFCF", // Light-medium burgundy
          200: "#FBAAAA", // Medium-light burgundy
          300: "#F57F7F", // Medium burgundy
          400: "#D95C5C", // Slightly darker burgundy
          500: "#7D2C3B", // Rich burgundy (works well in dark mode)
          600: "#6A2432", // Darker burgundy
          700: "#571D29", // Dark burgundy
          800: "#44161F", // Very dark burgundy
          900: "#2E0F15", // Almost black burgundy
          1000: "#1A070A",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
