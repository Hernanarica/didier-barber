module.exports = {
  purge: {
    enabled: true,
    content: [
      './*.html',
      './src/js/*.js'
    ],
  },
  theme: {
    screens: {
      'mob-S': { 'min': '320px' },
      'mob-M': { 'min': '375px' },
      'mob-L': { 'min': '425px' },
      'Tablet': { 'min': '768px' },
      'laptop-S': { 'min': '1024px' },
      'laptop-M': { 'min': '1280px' },
      'laptop-L': { 'min': '1440px' },
    },
    extend: {
      lineHeight: {
        'xs': '.9rem',
        'sm': '1.05rem',
        'base': '1.2rem',
        'lg': '1.35rem',
        'xl': '1.5rem',
        '2xl': '1.8rem',
        '3xl': '2.25rem',
      },
      colors: {
        wenge: {
          100: '#26211F'
        },
        gold: {
          100: '#D6A354'
        },
        dark: {
          100: '#1A202C'
        },
        darkLight: {
          100: '#212733'
        },
      },
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed'],
        'lato': ['Lato'],
      },
      width: {
        '68': '18rem',
        '70': '20rem',
        '72': '22rem',
      },
      maxWidth: {
        'wrapper': '1280px'
      }
    },
  },
  variants: {},
  plugins: [],
}
