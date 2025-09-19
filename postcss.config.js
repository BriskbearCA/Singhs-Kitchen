module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('cssnano')({ preset: 'default' }),
    require('postcss-url')({
      url: 'inline', // inline assets instead of keeping as URL
      maxSize: 14,   // in KB, default is 14, set higher if your SVGs are bigger
      fallback: 'copy' // what to do if file is too large
    }),
  ]
};