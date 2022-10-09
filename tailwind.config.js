module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      colors: {
        'semi-black': 'rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'contact-image': 'url(images/contact.jpg)',
      },
      zIndex: {
        '-10': '-10',
      },
      boxShadow: {
        glow: '0 0 20px rgba(251,191,36,1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
