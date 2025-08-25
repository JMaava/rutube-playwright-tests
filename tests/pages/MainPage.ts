import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabsLocator: Locator;
  private readonly menuLocator: Locator;
  private readonly headerAddButtonLocator: Locator;
  private readonly headerNotificationsButtonLocator: Locator;
  private readonly headerLoginButtonLocator: Locator;
  private readonly headerAddButtonPopupListLocator: Locator;
  private readonly headerNotificationsPopupLocator: Locator;
  private readonly authorizationModalLocator: Locator;
  private readonly switchToSignEmailModalButtonLocator: Locator;
  private readonly menuButtonLocator: Locator;
  private readonly openMenuAriaLocator: Locator;
  private readonly changeThemeButtonLocator: Locator;
  private readonly userLogoLocator: Locator;
  private readonly headerUserMenuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.locator('.header-module__charHeaderWrapper');
    this.categoriesTabsLocator = this.page.locator('.wdp-tabs-module__tabs');
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
    this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
    this.headerNotificationsButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
    this.headerLoginButtonLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
    this.headerAddButtonPopupListLocator = this.page.locator(
      '.wdp-header-right-module__uploader ul',
    );
    this.headerNotificationsPopupLocator = this.page.locator(
      '.wdp-notifications-popup-module__wrapper',
    );
    this.authorizationModalLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role = "form"]');
    this.switchToSignEmailModalButtonLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .getByRole('button', { name: 'войти с помощью Почта' });
    this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' });
    this.openMenuAriaLocator = this.page.locator('section').filter({ hasText: 'ГлавнаяRUTUBE' });
    this.changeThemeButtonLocator = this.page.getByRole('button', {
      name: 'Переключить на светлую тему',
    });
    this.userLogoLocator = this.page.getByRole('img', { name: 'Иконка канала channel68076164' });
    this.headerUserMenuLocator = this.page
      .locator('section')
      .filter({ hasText: 'channel68076164' })
      .nth(1);
  }

  // actions

  async open() {
    await this.page.goto('/');
  }

  async openHeaderUserMenu() {
    await this.userLogoLocator.click();
  }

  async openAddPopupList() {
    await this.headerAddButtonLocator.click();
  }

  async openNotificationPopup() {
    await this.headerNotificationsButtonLocator.click();
  }

  async openAuthorizationModal() {
    await this.headerLoginButtonLocator.click();
  }

  async switchToSignEmailModal() {
    await this.switchToSignEmailModalButtonLocator.click();
  }

  async openFullMenu() {
    await this.menuButtonLocator.click();
  }

  async changeThemeToWhite() {
    await this.changeThemeButtonLocator.click();
  }

  // assertions

  async headerHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerLocator, 'headerAriaSnapshot.yml');
  }

  async categoriesTabsHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.categoriesTabsLocator, 'categoriesAriaSnapshot.yml');
  }

  async menuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.menuLocator, 'menuAriaSnapshot.yml');
  }

  async addPopupListHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerAddButtonPopupListLocator, 'addButtonPopupList.yml');
  }

  async notificationsPopupHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerNotificationsPopupLocator, 'notificationsPopup.yml');
  }

  async authorizationModalHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.authorizationModalLocator, 'authorizationModal.yml');
  }

  async authorizationEmailModalHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.authorizationModalLocator, 'authorizationModalEmail.yml');
  }

  async fullMenuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.openMenuAriaLocator, 'fullMenuSnapshot.yml');
  }

  async headerUserMenuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerUserMenuLocator, 'headerUserMenuSnapshot.yml');
  }

  async checkThemeAttrributeValue(attrributeValue: 'dark2021' | 'white2022') {
    await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attrributeValue);
  }
}
