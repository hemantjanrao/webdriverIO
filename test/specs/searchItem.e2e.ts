import HomePage from '../pageobjects/home.page';

describe('Search item', () => {
    it('Search a Item on homepage', () => {
        HomePage.open();
        HomePage.searchItem('Faded');
    });
});