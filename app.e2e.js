describe('#Login', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should have a title', () => {
        expect(browser.getTitle()).toEqual('Login');
    });

    it('should have a .container', () => {
        expect(element(by.css('.container')).isPresent()).toEqual(true);
    });
});
