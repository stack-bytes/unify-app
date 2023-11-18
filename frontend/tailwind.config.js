/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#121212',
        'bg-light': '#212121',
        'primary': '#10E3A5',
        'secondary': '#16F1E4',
        'text': '#EEEEEE',
        'bg-dark-trans': '#12121284',
        'bg-light-trans': '#21212164',
        'primary-trans': '#10E3A564',
        'secondary-trans': '#16F1E464',
        'text-trans': '#EEEEEE',
      },
    },
  },
  plugins: [],
}