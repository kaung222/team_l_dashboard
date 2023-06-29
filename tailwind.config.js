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
<<<<<<< HEAD
  plugins: [require("tw-elements/dist/plugin.cjs")],
=======
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
>>>>>>> 152c247d0b0d6a7e35c8badad46f8b47378fdec6
};
