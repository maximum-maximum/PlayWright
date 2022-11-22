import { test } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

test("test", async ({ page }) => {
  await page.pause();
  await page.goto(process.env.END_POINT as string);
  await page.locator("id=loginField").fill(process.env.USERNAME as string);
  await page.locator("id=passwordField").fill(process.env.PASSWORD as string);
  await page.locator("id=loginButton").click();

  await page.getByRole("link", { name: "Mobiusの使い方(デモ用)" }).click();

  await page.getByRole("link", { name: "Class User Manager" }).click();
  await page.getByRole("link", { name: "Import Users From Roster" }).click();
  await page.locator('input[name="file"]').click();
  await page.getByRole("button", { name: "submit" }).click();
});
