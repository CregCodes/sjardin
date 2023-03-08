/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff6201",

          secondary: "#50ffb1",

          accent: "#4d4d4d",

          neutral: "#ffffff",

          "base-100": "#F7F7ff",

          info: "#000000",

          success: "#50ffb1",

          warning: "#F3A712",

          error: "#ff6201",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
