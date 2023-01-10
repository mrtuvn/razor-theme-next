/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Condensed', 'sans-serif'],
      },
      screens: {
        xs: '480px',
        '3xl': '1920px',
        '5xl': '2436px',
      },
      flex: {
        25: '0 0 25%',
      },
      backgroundImage: {
        phoneContactImg: 'url("/images/icons/icon-phone.png")',
      },
      colors: {
        primary: 'rgba(255,126,0)',
        fill: 'rgba(255,255,255)',
        second: '#fa8c16',
        tertiary: '#424',
        textBase: 'rgba(58,58,58)',
        button: '#ff792c',
        footer: 'rgba(35,47,63)',
      },
      boxShadow: {
        custom: '0px 10px 20px rgba(0,0,0,0.1)',
        card: '0px 0px 6px rgba(79, 95, 120, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
};
