import { String } from 'typescript-string-operations';

class WebUtility {

    clickElement(element: WebdriverIO.Element): void {
        console.info(String.Format(' ######### Click on {0} element #########', element));
        element.waitForClickable();
        element.click();
    }
}

export default new WebUtility();