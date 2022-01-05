module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      // brand: ['Pacifico', 'serif'],
      brand: ['Roboto', 'sans-serif'],
      plain: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [
    require('@cre/chlorophyll-tailwind')({
      colors: {
        primary: '#154c79',
        secondary: '#ad6630',
        tertiary: '#873e23',
        neutral: '#535a72',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#bb3535',
      },
    }),
  ],
};
