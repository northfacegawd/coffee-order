module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  plugins: [require('@tailwindcss/forms')],
};
