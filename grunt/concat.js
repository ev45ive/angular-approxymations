module.exports = {
    options: {
      separator: ';',
    },
    scripts: {
        src: [  
            'bower_components/angular/angular.min.js',
            'src/polynomial-approxymator/main.js',
            'src/**/*.js'
        ],
        dest: 'dist/main.js',
    },
    styles: {
        src: [  
            'bower_components/normalize.css/normalize.css',
            'src/jdp/styles/main.css',
            'src/**/*.js'
        ],
        dest: 'dist/styles/main.css',
    }
};
