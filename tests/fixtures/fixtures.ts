import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

// Declare the types of your fixtures.
type MyFixtures = {
  mainPage: MainPage;
};

// Extend base test by providing "mainPage"
export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use, testInfo) => {
    // Set up the fixture.
    const mainPage = new MainPage(page);
    await mainPage.open();
    if (testInfo.project.name === 'chromium unauthorized') {
      await mainPage.closePopup();
    }

    // Use the fixture value in the test.
    await use(mainPage);
  },
});

export { expect } from '@playwright/test';
