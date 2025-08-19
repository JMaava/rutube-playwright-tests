import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closePopup() {
    await this.page.waitForSelector('.wdp-popup-module__header', { state: 'visible' });
    await this.page.getByRole('button', { name: 'Закрыть' }).click();
  }

  protected async checkAriaSnapshot(locator: Locator, ariaName: string) {
    await expect(locator).toMatchAriaSnapshot({
      name: ariaName,
    });
  }
}
