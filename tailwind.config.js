// import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements/dist/js/**/*.js",
],
  theme: {
    extend: {
       colors: {
        'custom-primary': 'rgba(12, 118, 138, 1)',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
