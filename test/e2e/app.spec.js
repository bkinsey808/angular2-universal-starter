describe('angular2-universal-starter application', function() {
  var app;
 
  beforeEach(function() {
    browser.get('/');
    app = element(by.tagName('app'));
  })
  
  describe('Preboot page', function() {
    
    it('should show "Preboot is working" message when you\'ve clicked on check preboot button', function() {
      const button = app.element(by.id('check-preboot'));
      const message = app.element(by.id('message-preboot'));
      
      expect(message.isPresent()).toBeFalsy();
      button.click();
      expect(message.isPresent()).toBeFalsy();
      
      browser.wait(function() { return message.isPresent() }, 5000);
      
      expect(message.getText()).toBe('Preboot is working');
    });    
  });
});