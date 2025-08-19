import { test } from '../../fixtures/fixtures';

test('Проверка layout', async ({ categoriesPage }) => {
  await categoriesPage.contentPageHasCorrectLayout();
});
