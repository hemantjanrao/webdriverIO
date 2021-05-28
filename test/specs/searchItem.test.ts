import HomePage from '../pageobjects/home.page';
import '../base/base.test';

describe('Search item', () => {
    it('Search a Item on homepage', () => {
        console.log('Running test');
        HomePage.open();
        HomePage.searchItem('Faded');
    });
});