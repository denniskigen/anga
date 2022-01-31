/* eslint-env node */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: () => ({
        'hero-pattern': "url('../assets/about-bg.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
