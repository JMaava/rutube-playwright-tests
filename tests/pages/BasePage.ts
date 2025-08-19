import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  private readonly cookiesNotificationsLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cookiesNotificationsLocator = this.page
      .getByRole('complementary', { name: 'Уведомление об использовании cookies' })
      .locator('div')
      .first();
  }

  async closePopup() {
    await this.page.waitForSelector('.wdp-popup-module__header', { state: 'visible' });
    await this.page.getByRole('button', { name: 'Закрыть' }).click();
  }

  async closeCookiesNotifications() {
    await expect(this.cookiesNotificationsLocator).toBeVisible();
    await this.page.getByRole('button', { name: 'Ок', exact: true }).click();
  }

  protected async checkAriaSnapshot(locator: Locator, ariaName: string) {
    await expect(locator).toMatchAriaSnapshot({
      name: ariaName,
    });
  }

  protected async checkLayoutByScreenshot(locator: Locator, screenshotName: string) {
    await expect(locator).toHaveScreenshot(screenshotName);
  }

  protected async hideElement(selector: string) {
    await this.page.evaluate((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        (element as HTMLElement).style.display = 'none';
      }
    }, selector);
  }
}
