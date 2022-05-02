module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        omega: {
          primary: "#6419E6",


          secondary: "#43B4A0",

          accent: "#1FB2A6",

          neutral: "#4b5563",

          "base-100": "#000",
          "base-content": "#fff",

          info: "#fec565",

          success: "#101f36",

          warning: "#19062e",

          error: "#6c2835",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
