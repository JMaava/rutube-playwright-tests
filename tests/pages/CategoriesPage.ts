import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CategoriesPage extends BasePage {
  private readonly contentPageLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.contentPageLocator = this.page.locator('.application-module__content');
  }

  // actions

  async open() {
    await this.page.goto('https://rutube.ru/categories/');
  }

  // assertions

  async contentPageHasCorrectLayout() {
    await expect(this.contentPageLocator).toHaveScreenshot('categoriesPage.png');
  }

  async hideHeader() {
    await this.page.evaluate(() => {
      const header = document.querySelector('header');
      if (header) {
        header.style.display = 'none';
      }
    });
  }
}
