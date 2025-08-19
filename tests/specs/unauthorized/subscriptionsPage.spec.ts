import { SubscriptionPage } from '../../pages/SubscriptionsPage';
import { test } from '@playwright/test';

test('Проверка доступности контента для неавторизованного пользователя', async ({ page }) => {
  const subscriptionsPage = new SubscriptionPage(page);
  await subscriptionsPage.open();
  await subscriptionsPage.closePopup();
  await subscriptionsPage.closeCookiesNotifications();
  await subscriptionsPage.contentHasCorrectAriaSnapshot();
});
