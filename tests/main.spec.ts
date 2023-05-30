import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
	await page.goto('http://127.0.0.1:5173/');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Etourne/);
});

// test('get started link', async ({ page }) => {
// 	await page.goto('https://playwright.dev/');

// 	// Click the get started link.
// 	await page.getByRole('link', { name: 'Get started' }).click();

// 	// Expects the URL to contain intro.
// 	await expect(page).toHaveURL(/.*intro/);
// });

test('check sign in with discord button exists', async ({ page }) => {
	await page.goto('http://127.0.0.1:5173/');

	// get
	await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
	// await page.getByRole('link', { name: 'Sign In' });

	// Expects the URL to contain intro.
	// await expect(page).toHaveURL(/.*intro/);
});
