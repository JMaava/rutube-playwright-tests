import test from '@playwright/test';
import { ForCreatorsPage } from '../../pages/ForCreatorsPage';

ForCreatorsPage.testsParam.forEach(({ url, screenshotName, name }) => {
  test(`Проверка layout таба - ${name}`, async ({ page }) => {
    const forCreatorsPage = new ForCreatorsPage(page);
    await forCreatorsPage.open(url);
    await forCreatorsPage.pageHasCorrectLayout(screenshotName);
  });
});
