module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      headline: ['Pacifico', 'serif'],
      body: ['Roboto', 'sans-serif'],

      brand: ['Pacifico', 'serif'],
      plain: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [
    require('@cre/chlorophyll-tailwind')({
      colors: {
        primary: '#154c79',
        secondary: '#ad6630',
        tertiary: '#873e23',
        neutral: '#75756f',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#bb3535',
      },
    }),
  ],
};
