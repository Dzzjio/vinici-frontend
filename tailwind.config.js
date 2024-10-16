module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandColorPrimary: '#7960FC',
        brandColorSecondary: '#0E051E',
        brandColorLight: '#F1EFF8',
        grayBackground: '#F9FAFB'
      },
      maxWidth: {
        'container': '80vw',
      },
    },
  },
  plugins: [],
};