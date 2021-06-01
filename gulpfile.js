const ts = require('gulp-typescript')
const { series, src, dest, watch } = require('gulp')

const tsProject = ts.createProject('tsconfig.json')

function copyManifest() {
  return src('manifest.json').pipe(dest('dist/'))
}

function watchChanges() {
  watch('src/*.ts', tsc)
  watch('manifest.json', copyManifest)
}

function tsc() {
  return tsProject.src().pipe(tsProject()).js.pipe(dest('dist'))
}

exports.default = series(tsc, copyManifest)
exports.watch = series(copyManifest, watchChanges)
