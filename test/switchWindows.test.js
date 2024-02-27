const { assert } = require('console');
const internetPage = require('./pageobjects/internet.page');

describe('Switch window', function(){
    it('Should switch to the next window', () => {
        browser.url(`${browser.options.baseUrl}/windows`);
        internetPage.clickHereLink();
        browser.switchWindow(`${browser.options.baseUrl}/windows/new`);
        assert.equals(true, internetPage.h3Header.isExisting());
        assert.equals(true, internetPage.h3Header.isDisplayed());
        assert.equals('New Window', internetPage.h3Header.getText());
        //browser.pause(5000);
    })
})