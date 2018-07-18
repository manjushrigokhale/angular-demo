// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma'),
	  require('karma-junit-reporter')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: ['html','lcovonly'],
      fixWebpackSourcePaths: true
    },
	
	
	junitReporter: {
        outputDir: 'testresults', 
        outputFile: 'karmatest.xml', 
        suite: 'unit',  // whichever prefix you wish to use
        useBrowserName: false, 
      },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress','kjhtml','junit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true
  });
};
