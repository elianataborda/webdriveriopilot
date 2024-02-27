const { assert } = require('console');
const internetPage = require('./pageobjects/internet.page');

describe('Scroll to Element', function() {
    it('should scroll to the footer', () => {
        browser.url('/');
        internetPage.pageHeader.waitForDisplayed();
        internetPage.scrollToFooter();
        assert.equal(true, internetPage.pageHeader.isDisplayedInViewport());
    })

    it('should scroll into view', () => {
        browser.url('/')
        internetPage.pageFooter.scrollIntoView()
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
    })

    
})