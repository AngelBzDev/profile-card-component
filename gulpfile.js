const { watch, src, dest } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function css() {
   return src('./src/scss/**/*.scss')
      .pipe(sass())
      .pipe(dest('./build/css/'))
}

function liveCss(){
   watch('./src/scss/**/*.scss', css)
}

exports.css = css 
exports.liveCss = liveCss