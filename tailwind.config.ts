import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        "lato": ["var(--lato)"],
        "libre-franklin": ["var(--libre-franklin)"],
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
          DEFAULT: "#383838",
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
          50: "#DCE7E1",
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config