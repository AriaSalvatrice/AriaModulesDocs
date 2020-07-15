/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {},
  variants: {},
  plugins: [],
  separator: '_', // Pug can't handle colons
  division: '_',
  theme: {
    extend: {
      width: {
        // Pug can't handle fractions
        '10p': '10%',
        '16p': '16.666667%',
        '20p': '20%',
        '25p': '25%',
        '30p': '30%',
        '33p': '33.333333%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '66p': '66.666667%',
        '70p': '70%',
        '75p': '75%',
        '80p': '80%',
        '90p': '90%'
      }
    }
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
