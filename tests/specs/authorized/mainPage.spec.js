import { test } from '../../fixtures/fixtures';

test('Проверка доступности элементов хедера авторизованного пользователя', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов списка попапа уведомлений авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationPopup();
  await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов раскрытого меню авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов меню пользователя в хедере авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openHeaderUserMenu();
  await mainPage.headerUserMenuHasCorrectAriaSnapshot();
});
