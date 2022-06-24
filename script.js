const { Builder } = require('selenium-webdriver');
const percySnapshot = require('@percy/selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://google.com/');
    await percySnapshot(driver, 'Google Homepage');

    await driver.get('https://dalalstreet.ai/');
    await percySnapshot(driver, 'Example Site');
  } finally {
    await driver.quit();
  }
})();