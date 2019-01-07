/** en gulp las tareas pueden ser ejecutadas de dos maneras
 * en series o parallel
 * tambien se puede hacer composicion y correr tareas paralelas dentro de tareas en serie y vice verse
 */

const { series, parallel, src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const cleanCss = require("gulp-clean-css");
function defaultTask(cb) {
  cb();
}

function uglifyJs() {
  return src("./js/*.js")
    .pipe(uglify())
    .pipe(dest("dist/"));
}

function minifyCss() {
  return src("./css/*.css")
    .pipe(cleanCss({}))
    .pipe(dest("dist/"));
}

module.exports.default = series(uglifyJs, minifyCss);
