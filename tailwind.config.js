module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        light: '#54C96C',
        DEFAULT: '#2b8a3e',
        dark: '#1E5C29',
      },
      secondary: '#F6F7F8',
      tertiary: '#20A4F3',
      quartenary: '#FF3366',
      quinquennial: '#011627',
      error: '#ff9800',
      success: '#00bcd4',
      warning: '#ff5722',
      info: '#ffc107',
      white: '#fff',
      grey: '#474747',
    },
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['active'],
    },
  },
  plugins: [],
};
