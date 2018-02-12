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

	it('should have a div in container', () => {
		expect(element(by.css('.container div')).isPresent()).toEqual(true);
	});

	it('should have a div in container', () => {
		expect(element(by.css('.container div')).getText()).toEqual('Hello world');
	});

	it('should have a div in container', () => {
		expect(element(by.css('.container div')).isPresent()).toEqual(true);
	}).pend('Due to ... ');

	// it(' for comment', () => {});
});
