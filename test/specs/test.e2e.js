const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page');
const { assert } = require('console');

describe('My Login application', () => {    
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        wdioExpect(SecurePage.flashAlert).toBeExisting();
        wdioExpect(SecurePage.flashAlert).toHaveText(
            'SECURE', {ignoreCase:true, containing:true});

        wdioExpect(browser).toHaveUrl('https://the-internet.herokuapp.com/');
        wdioExpect(browser).toHaveUrlContaining('secure');
        wdioExpect(browser).toHaveTitle('The Internet');

        
    });
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        assert.equal(true,SecurePage.flashAlert.isExisting());
        assert.include(SecurePage.flashAlert.getText(),
             'You logged into a secure area!');
        assert.equal('http://the-internet.herokuapp.com/secure',brower.getURL());
        assert.equal(true, SecurePage.flashAlert.isExisting());
        SecurePage.flashAlert.isExisting().should.equal(true);
    });
})

