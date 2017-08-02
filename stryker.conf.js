module.exports = function (config) {
  config.set({
    files: [
      { pattern: 'src/**/*.js', mutated: true },
      'test/*.js',
      '!test/FailingAddSpec.js',],
    testFramework: 'jasmine',
    testRunner: 'karma',
    coverageAnalysis: 'off',
    reporter: ['html', 'progress', 'event-recorder']
  });
};