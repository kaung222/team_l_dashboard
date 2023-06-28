// import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       colors: {
        'custom-primary': 'rgba(12, 118, 138, 1)',
      },
    },
  },
  plugins: [require("daisyui")],
};
