const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo:50 });
  
  const page = await browser.newPage();
  await page.goto('https://web.gencat.cat/ca/inici');
  await page.click('a.NG-header__icon2');
  await page.fill('id=autoCompleteCapcalera', 'agenda cultural');
  await page.click('button.NG-inputSearch__button');
  //await page.waitForTimeout(2500)
  await browser.close();
})();

