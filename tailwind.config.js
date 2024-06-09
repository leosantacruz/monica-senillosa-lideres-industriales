/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        ghostwhite: "#f7fbff",
        slategray: "#5d6a83",
        main: "#003366",
        gainsboro: "#d9d9d9",
        darkslategray: {
          "100": "#416775",
          "200": "#323b4b",
        },
        honeydew: {
          "100": "#e8ffef",
          "200": "#ddffe9",
          "300": "#ddffe8",
        },
        gray: {
          "100": "#797979",
          "200": "#0c1f3d",
        },
        aquamarine: {
          "100": "#c1ffd6",
          "200": "rgba(193, 255, 214, 0.4)",
        },
        lightblue: "#c7e4f9",
        mediumaquamarine: "#29d6a9",
        darkslateblue: "#073f82",
        aliceblue: "#f0f9ff",
        black: "#000",
        darkseagreen: "#a8e6bd",
        cornflowerblue: "#329ff9",
        lightgreen: "#58da6d",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "helvetica-neue": "'Helvetica Neue'",
        helvetica: "Helvetica",
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
        "81xl": "100px",
        "21xl": "40px",
        "11xl": "30px",
        "3xs": "10px",
        "41xl": "60px",
        "281xl": "300px",
        "181xl": "200px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      "23xl": "42px",
      "15xl": "34px",
      "6xl": "25px",
      "13xl": "32px",
      "7xl": "26px",
      "81xl": "100px",
      "31xl": "50px",
      "11xl": "30px",
      "21xl": "40px",
      "41xl": "60px",
      "29xl": "48px",
      "17xl": "36px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
