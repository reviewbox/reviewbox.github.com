// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-07-05 using
// generator-karma 1.0.0

'use strict';

module.exports = function (config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
    // bower:js
    'bower_components/jquery/dist/jquery.js', 'bower_components/angular/angular.js', 'bower_components/firebase/firebase.js', 'bower_components/angularfire/dist/angularfire.js', 'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js', 'bower_components/angular-animate/angular-animate.js', 'bower_components/angular-aria/angular-aria.js', 'bower_components/angular-cookies/angular-cookies.js', 'bower_components/angular-messages/angular-messages.js', 'bower_components/angular-resource/angular-resource.js', 'bower_components/angular-route/angular-route.js', 'bower_components/angular-sanitize/angular-sanitize.js', 'bower_components/angular-touch/angular-touch.js', 'bower_components/angular-material/angular-material.js', 'bower_components/lodash/lodash.js', 'bower_components/angular-ui-grid/ui-grid.js', 'bower_components/rangy/rangy-core.js', 'bower_components/rangy/rangy-classapplier.js', 'bower_components/rangy/rangy-highlighter.js', 'bower_components/rangy/rangy-selectionsaverestore.js', 'bower_components/rangy/rangy-serializer.js', 'bower_components/rangy/rangy-textrange.js', 'bower_components/textAngular/dist/textAngular.js', 'bower_components/textAngular/dist/textAngular-sanitize.js', 'bower_components/textAngular/dist/textAngularSetup.js', 'bower_components/blueimp-file-upload/js/jquery.fileupload.js', 'bower_components/cloudinary_js/js/jquery.cloudinary.js', 'bower_components/cloudinary_ng/js/angular.cloudinary.js', 'bower_components/ng-file-upload/ng-file-upload.js', 'bower_components/material-design-lite/material.min.js', 'bower_components/medium-editor/dist/js/medium-editor.js', 'bower_components/mockfirebase/browser/mockfirebase.js', 'bower_components/angular-mocks/angular-mocks.js',
    // endbower
    'app/scripts/**/*.js', 'test/mock/**/*.js', 'test/spec/**/*.js'],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // Which plugins to enable
    plugins: ['karma-phantomjs-launcher', 'karma-jasmine'],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO

  });
};
// Uncomment the following lines if you are using grunt's server to run the tests
// proxies: {
//   '/': 'http://localhost:9000/'
// },
// URL root prevent conflicts with the site root
// urlRoot: '_karma_'

//# sourceMappingURL=karma.conf-compiled.js.map