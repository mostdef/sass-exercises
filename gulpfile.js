//=======================================================
// Instalacja gulpa od początku: 
// 1. npm init 
// 2. npm install
// 3. npm install gulp 
// 4. npm install gulp-sass
// 5. stworzenie folderu scss i pliku main.scss
// 6. stworzenie gulpfile.js
// 7. dodanie tasków
// 8. pierwsze odpalenie gulp sass tworzy cssa wynikowego
// 9. korzystamy z gulp watch
//=======================================================


var gulp = require('gulp'); // tutaj mamy samego gulpa, bez sassa
var sass = require('gulp-sass'); // tu pojawia się sass

gulp.task('sass', function() {
    return gulp.src('scss/main.scss') //tutaj ścieżka musi być zgodna z oryginalnym plikiem scss 
    .pipe(sass()) //tutaj wpuszczamy sobie w maszynkę
    .pipe(gulp.dest('css')) // tu w skrócie przekazujemy, ze plik wynikowy ma sie znalezc w folderze css, który gulp sobie stworzy
})

gulp.task('watch', function(){ //po pierwszym uruchomieniu gulp sass możemy odpalić 
    gulp.watch('scss/**/*.scss', ['sass']); 
})

