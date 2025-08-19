import test from '@playwright/test';
import { CategoriesPage } from '../../pages/CategoriesPage';

test('Проверка layout', async ({ page }) => {
  const categoriesPage = new CategoriesPage(page);
  await categoriesPage.open();
  await categoriesPage.closePopup();
  await categoriesPage.closeCookiesNotifications();
  await categoriesPage.hideHeader();
  await categoriesPage.contentPageHasCorrectLayout();
});
