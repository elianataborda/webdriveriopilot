const { assert } = require('console');
const internetPage = require('./pageobjects/internet.page')

internetPage = require('.../pages/internet.page')

describe('WebdriverIO API Actions', function(){
    it('Should hover on figure', () => {
        browser.url(`${browser.options.baseUrl}/hovers`);
        internetPage.hoverOnFigure(1);
        assert.equal("name: user1", internetPage.getFigureDetailsText(1));
    })

    it('should hover on figure 2', () => {
        browser.url(`${browser.options.baseUrl}/hovers`)
        internetPage.hoverOnFigure(4)
        assert.equal("name: user2", internetPage.getFigureDetailsText(4))
    })

    it('should hover on figure 3', () => {
        browser.url(`${browser.options.baseUrl}/hovers`)
        internetPage.hoverOnFigure(3)
        assert.equal("name: user1", internetPage.getFigureDetailsText(3))
    }) 
    it('should send keyboard value', () => {
        internetPage.clickTarget();
        internetPage.sendKeysToTarget("Enter");
        assert.equal("Enter", internetPage.getResultText());
    })

    it('should send keyboard backspace', () => {
        browser.url(`${browser.options.baseUrl}/key_presses`);       
        internetPage.clickTarget();
        internetPage.sendKeysToTarget("Backspace");
        assert.equal("You entered: BACK_SPACE", internetPage.getResultText());
    })

    it('should send keyboard tab', () => {
        browser.url(`${browser.options.baseUrl}/key_presses`);       
        internetPage.clickTarget();
        internetPage.sendKeysToTarget("Backspace");
        assert.equal("You entered: TAB", internetPage.getResultText());
    })

    it('should send keyboard Shift', () => {
        browser.url(`${browser.options.baseUrl}/key_presses`);       
        internetPage.clickTarget();
        internetPage.sendKeysToTarget("Backspace");
        assert.equal("You entered: SHIFT", internetPage.getResultText());
    })


})