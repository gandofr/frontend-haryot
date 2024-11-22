/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006a43",
        "on-container": "#ebffe1",
        white: "#ffffff",
        outline: "#d1d5db",
        container: "#003923",
        secondary: "#F6F6F6",
        surface: {
          primary: "#fafaf5",
          secondary: "#ffffff",
          tertiary: " #fff7e1",
        },
        black: {
          100: "#4a4a4a",
          200: "#111111",
        },
        info: {
          danger: "#c91c1c",
          warning: "##fff4bd",
          "warning-container": "#734701",
        },
      },
      fontSize: {
        sx: "10px",
        xd: "11px",
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "35px", // 35px
        "5xl": "40px", // 40px
        "6xl": "52px", // 52px
        "7xl": "5rem", // 80px
      },
    },
    keyframes: {
      "caret-blink": {
        "0%,70%,100%": {
          opacity: "1",
        },
        "20%,50%": {
          opacity: "0",
        },
      },
      heartbeat1: {
        "0%, 100%": {
          opacity: "0.3",
          transform: "scale(1)",
        },
        "50%": {
          opacity: "1",
          transform: "scale(1.1)",
        },
      },
      heartbeat2: {
        "0%, 100%": {
          opacity: "1",
          transform: "scale(1.1)",
        },
        "50%": {
          opacity: "0.3",
          transform: "scale(1)",
        },
      },
    },
    animation: {
      "caret-blink": "caret-blink 1.25s ease-out infinite",
      heartbeat1: "heartbeat1 2s infinite ease-in-out",
      heartbeat2: "heartbeat2 2s infinite ease-in-out",
    },
  },
  plugins: [],
};
