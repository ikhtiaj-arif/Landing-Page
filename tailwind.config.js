/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        newTheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#B030B0",
          neutral: "#191D24",
          "base-100": "#393232",
          info: "#3ABFF8",
          error: '#eb2632'
        },
      },
      "halloween"
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
