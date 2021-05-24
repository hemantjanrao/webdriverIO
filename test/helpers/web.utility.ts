class WebUtility {

    clickElement(element: WebdriverIO.Element): void {
        element.waitForClickable();
        element.click();
    }
}

export default new WebUtility();