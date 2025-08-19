import { SubscriptionPage } from '../../pages/SubscriptionsPage';
import { test } from '@playwright/test';

test('Проверка доступности контента для авторизованного пользователя', async ({ page }) => {
  const subscriptionsPage = new SubscriptionPage(page);
  await subscriptionsPage.open();
  await subscriptionsPage.contentHasCorrectAriaSnapshot();
});
