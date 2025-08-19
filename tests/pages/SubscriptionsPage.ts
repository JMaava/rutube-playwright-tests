import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';

export class SubscriptionPage extends BasePage {
  private readonly contentPageLocator: Locator;

  constructor(page: Page) {
    super(page);

    this.contentPageLocator = this.page.locator('.application-module__content');
  }

  // actions

  async open() {
    await this.page.goto('https://rutube.ru/my/subscriptions/');
  }

  // assertions

  async contentHasCorrectAriaSnapshot() {
    this.checkAriaSnapshot(this.contentPageLocator, 'contentAriaSnapshot.yml');
  }
}
