const { interfaces } = require('mocha');
const internetPage = require('../pageobjects/internet.page');
const { assert } = require('console');
const loginData = require('../../data/logindata');


internetPage = require('.../pages/internet.page')

describe('Test element actions', function() {
    it('Should click element',() => {
        browser.url('/');
        internetPage.clickOnLink();
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest');
    })

    it('should get Text', () => {
        browser.url('/')
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing')
    })

    it('should click checkbox', () => {
        internetPage.clickCheckbox(1)
        expect(internetPage.checkbox(1).isSelected()).equals(true)
    })

    it('should uncheck checkox', () => {
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(false)
    })

    it('should enter username', () => {
        browser.url(`${browser.options.baseUrl}/login`)
        internetPage.enterUsername(loginData.userName)
        assert.equal(loginData.userName, internetPage.username.getValue())
    })

    it('should enter password', () => {
        browser.url(`${browser.options.baseUrl}/login`)
        internetPage.enterPassword(loginData.password)
        assert.equal(loginData.password, internetPage.password.getValue())
    })

    it('should clear Value', () => {
        internetPage.username.click()
        internetPage.username.clearValue()
        assert.equal(loginData.userName, internetPage.username.getValue())
    })    

    it('should send keyboard value', () => {
        internetPage.clickTarget();
        internetPage.sendKeysToTarget("Enter");
        assert.equal("Enter", internetPage.getResultText());
    })

})