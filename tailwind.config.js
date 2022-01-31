module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern': "url('../assets/about-bg.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
