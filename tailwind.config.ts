// TAILWIND CONFIG FILE
// this is where we define our custom styles (typography & colors)

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
        "lato": ["var(--font-lato)"],
        "libre-franklin": ["var(--font-libre-franklin)"],
      },
      fontSize: {
        xs: '0.6875rem', // 11 px
        sm: '0.8125rem', // 13 px
        body: '1rem', // 16 px
        lg: '1.1875rem', // 19 px
        h5: '1.4375rem', // 23 px
        h4: '1.75rem', // 28 px
        h3: '2.0625rem', // 33 px
        h2: '2.5rem', // 40 px
        h1: '3rem', // 48 px
      },
      colors: {
        light: "#FFFAFF",
        dark: "#545F71",
        darker: "#404040",
        grey: "#757575",
        placeholder: "#9ba5b7",
        error: "#bf1b1e",
        text: {
          DEFAULT: "#333333",
          50: "#fafafa",
          100: "#ebebeb",
          200: "#cccccc",
          300: "#adadad",
          400: "#8f8f8f",
          500: "#707070",
          600: "#525252",
          700: "#333333",
          800: "#292929",
          900: "#1f1f1f",
          950: "#1a1a1a",
        },
        primary: {
          DEFAULT: "#781113",
          50: "#f7c4c5",
          100: "#f4b2b4",
          200: "#ef8f91",
          300: "#ea6b6d",
          400: "#e5454a",
          500: "#e02326",
          600: "#bf1c1e",
          700: "#9c1519",
          800: "#781113",
          900: "#470a0b",
          950: "#2e0707",
        },
        secondary: {
          DEFAULT: "#004622",
          50: "#14fc85",
          100: "#03fb7e",
          200: "#06dd6e",
          300: "#03bf5f",
          400: "#00a150",
          500: "#008241",
          600: "#036432",
          700: "#004622",
          800: "#01371b",
          900: "#012814",
          950: "#002010",
        },
        accent: {
          DEFAULT: "#fca92c",
          50: "#fff3e1",
          100: "#feebcd",
          200: "#fedaa6",
          300: "#fdca7c",
          400: "#fdb954",
          500: "#fca92c",
          600: "#ed8f05",
          700: "#b56e04",
          800: "#7e4c01",
          900: "#472b01",
          950: "#2c1a01",
        },
      }
    },
  },
  plugins: [],
};
export default config;
