import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { CategoriesPage } from '../pages/CategoriesPage';

// Declare the types of your fixtures.
type MyFixtures = {
  mainPage: MainPage;
  categoriesPage: CategoriesPage;
};

// Extend base test by providing "mainPage"
export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use, testInfo) => {
    // Set up the fixture.
    const mainPage = new MainPage(page);
    await mainPage.open();
    if (testInfo.project.name === 'chromium unauthorized') {
      await mainPage.closePopup();
      await mainPage.closeCookiesNotifications();
    }

    // Use the fixture value in the test.
    await use(mainPage);
  },

  categoriesPage: async ({ page }, use) => {
    const categoriesPage = new CategoriesPage(page);
    await categoriesPage.open();
    await categoriesPage.closePopup();
    await categoriesPage.closeCookiesNotifications();
    await categoriesPage.hideHeader();

    await use(categoriesPage);
  },
});

export { expect } from '@playwright/test';
