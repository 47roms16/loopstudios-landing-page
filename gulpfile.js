const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));

const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("sass/**/*.scss")
    .pipe(sass())
    .pipe(
      purgecss({
        content: ["*.html"],
        options: {
          safelist: ["hidden", "mobile-nav-visible"],
        },
      })
    )
    .pipe(dest("css"));
}

function watchSass() {
  watch(["sass/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchSass);
