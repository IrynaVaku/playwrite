import { test, expect } from '@playwright/test';

test.describe('Common', () => {
  test('Navigations', async ({ page }) => {
    await page.goto('https://coding.pasv.us/user/login');
    await page.pause();

    await page.locator('#normal_login_email').fill('vakulovskaya@gmail.com');
    await page.locator('#normal_login_password').fill('!QA2ws3ed');
    await page.locator('button[type="submit"]').click();

    await expect(page).toHaveURL(
      'https://coding.pasv.us/profile/6181e18d9b0993003b34d342');


    await page.getByTestId('topmenu-Курсы').click();
    await expect(page).toHaveURL('https://coding.pasv.us/course');
    await expect (page.getByText('Курсы программирования и тестирования')).toBeVisible()

    await page.getByTestId('topmenu-Задачи').click();
    await expect(page).toHaveURL(
      'https://coding.pasv.us/challenge?limit=30&page=1');
    await expect(page.getByText('Кодинг задачи')).toBeVisible();

    await page.getByTestId('topmenu-Интервью').click();
    await expect(page).toHaveURL('https://coding.pasv.us/flash');
    await expect(page.getByText('Interview practice cards')).toBeVisible();

    await page.getByTestId('topmenu-Дневник').click();
    await expect(page).toHaveURL('https://coding.pasv.us/diary?page=1');
    await expect(page.getByText('Daily reports')).toBeVisible();

    /*await page.getByTestId('topmenu-Группы').click();
    await expect(page).toHaveURL('https://coding.pasv.us/group');
    await expect(page.getByText('Groups')).toBeVisible()*/
  });
});
