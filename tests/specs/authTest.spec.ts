import { test, expect } from '@playwright/test';
import path from 'path';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

chromium.use(stealth());

test('test', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://rutube.ru/');
  await page.waitForSelector('.wdp-popup-module__header', { state: 'visible' });
  await page.getByRole('button', { name: 'Закрыть' }).click();
  await page.getByRole('button', { name: 'Вход и регистрация' }).click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'войти с помощью Почта' })
    .click({ delay: 1000 });
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'Введите почту' })
    .pressSequentially(process.env.LOGIN!, { delay: 100 });
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Продолжить' })
    .click({ delay: 1000 });
  await expect(
    page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .getByText(`Введите пароль для профиля с почтой ${process.env.LOGIN!}`),
  ).toBeVisible();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .locator('#login-password')
    .pressSequentially(process.env.PASSWORD!, { delay: 100 });
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Войти', exact: true })
    .click({ delay: 100 });
  await page.getByRole('img', { name: 'Иконка канала channel68076164' }).click();
  await page.getByRole('link', { name: 'Профиль' }).click();
  await expect(page.getByRole('heading', { name: 'Основное' })).toBeVisible();

  await page.context().storageState({ path: authFile });
});
