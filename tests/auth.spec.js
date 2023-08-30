import { test, expect } from '@playwright/test';

test.describe('Authentication and Autorization', () => {
  test('Sign In with valid credentials', async ({page}) => {
    await page.goto('https://coding.pasv.us/user/login')
    //await page.pause()

    await page.locator('#normal_login_email').fill('vakulovskaya@gmail.com')
    await page.locator('#normal_login_password').fill('!QA2ws3ed')
    await page.locator('button[type="submit"]').click()

    await expect(page.locator('.ant-avatar-square')).toBeVisible()
  })
  });