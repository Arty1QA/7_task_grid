exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub', 
  specs: ['spec.js'],
 capabilities: {
    browserName: 'chrome', 
  }, 
  maxSessions: 1,
  onPrepare: function() {
  browser.manage().window().setSize(1600, 1000);
},

  };

  // capabilities: {
  //   browserName: 'firefox'
  // marionnette: true, 
  // }
  // directConnect: true, // use for FF