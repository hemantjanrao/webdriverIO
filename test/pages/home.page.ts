import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {

    private endPoint = "/";

    /**
     * define selectors using getter methods
     */
     get inputSearch () { return $('#search_query_top') }
     get buttonSearch() {return $('button[name="submit_search"]')}

     searchItem(itemName: string): void {
        this.inputSearch.setValue(itemName); 
        this.buttonSearch.click();
     }

     /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
      return super.open(this.endPoint);
    }
}
export default new HomePage();