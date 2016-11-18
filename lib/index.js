const concat = require('gulp-concat');
const bemhtml = require('gulp-bem-xjst').bemhtml;
const gulpif = require('gulp-if');
const wrap = require('gulp-wrap');

module.exports = (bundle, options) => {
  options = Object.assign({
    ym: false,
    engine: {}
  }, options);

  return bundle.src('bemhtml')
  .pipe(concat('any.bemhtml.js'))
  .pipe(bemhtml(options.engine))
  .pipe(gulpif(options.ym, wrap({src: __dirname + '/../wrappers/ym.js'})))
  .pipe(concat(bundle.name + '.bemhtml.js'))
}
