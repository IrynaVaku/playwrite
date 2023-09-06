export const logIn = async (page, email, password) => {
  await page.goto('https://coding.pasv.us/user/login');
  //await page.pause();

  await page.locator('#normal_login_email').fill(email);
  await page.locator('#normal_login_password').fill(password);
  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveURL(
     'https://coding.pasv.us/profile/6181e18d9b0993003b34d342');
}