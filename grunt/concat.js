module.exports = {
    options: {
      separator: ';',
    },
    scripts: {
        src: [  
            'bower_components/angular/angular.min.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/d3/d3.js',
            'bower_components/c3/c3.js',
            'src/modules/polynomial-approxymator/main.js',
            'src/modules/jdp/main.js',
            'src/modules/jdp/**/*.js',
            'src/app.js',
            'src/**/*.js'
        ],
        dest: 'dist/main.js',
    },
    styles: {
        src: [  
            'bower_components/normalize.css/normalize.css',
            'bower_components/c3/c3.css',
            'src/modules/jdp/styles/main.css',
            'src/**/*.js'
        ],
        dest: 'dist/styles/main.css',
    }
};
