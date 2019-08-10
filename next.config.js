// next.config.js
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css');
const withImages = require('next-optimized-images');

module.exports = withSass(withCss(withImages({optimizeImagesInDev: true})));