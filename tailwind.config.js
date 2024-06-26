/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
// added palette from https://coolors.co/palette/001219-005f73-0a9396-94d2bd-e9d8a6-ee9b00-ca6702-bb3e03-ae2012-9b2226
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'black': '#001219',
        'dark-teal': '#005F73',
        'light-teal': '#0A9396',
        'mint': '#94D2BD',
        'beige': '#E9D8A6',
        'orange': '#EE9B00',
        'dark-orange': '#CA6702',
        'red-orange': '#BB3E03',
        'red': '#AE2012',
        'burgandy': '#9B2226'
      },
      fontFamily: {
        "noto-sans": ['"Noto Sans Symbols"', "sans-serif"],
        'poetsen-one': ['"Poetsen One"', 'sans-serif'],
        'silkscreen': ['"Silkscreen"', 'sans-serif']
      },
      fontWeight: {
        // Define weight classes from 100 to 900
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
    },
  },
  plugins: [],
};

