exports.config = {
  tests: 'exampleTests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Project1'
}