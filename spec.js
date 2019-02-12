// spec.js

describe('Mentoring', function() {
  it('Login page rendering', function() {
   browser.ignoreSynchronization = true; 
   browser.get('https://testenv.com/');   
   element(by.name('UserName')).sendKeys('test'); 
   element(by.name('Password')).sendKeys('test'); 
   element(by.className('loginBtn')).click();
   browser.ignoreSynchronization = false;
   expect(element(by.cssContainingText('#ir-user-config-button', 'test')).isDisplayed()).toBe(true);
   element(by.className('fa fa-lg fa-search')).click();
   element(by.id('fileNumber')).sendKeys('1');
   element(by.id("irSearchButton")).click(); 
 });
});