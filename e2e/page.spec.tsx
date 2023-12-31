import { test } from "@playwright/experimental-ct-react";

test("snapshot portfolio", async ({ page }) => {
  await page.goto("/");
  await page.screenshot({
    path: "./__snapshots__/portfolio.png",
    fullPage: true,
  });
});

test("snapshot blogs", async ({ page }) => {
  await page.goto("/blogs");

  await page.screenshot({ path: "./__snapshots__/blogs.png", fullPage: true });
});

test("snapshot blog", async ({ page }) => {
  await page.goto("/blogs/6afc76c9-ce6d-5b23-ae7f-d5510bd386b6");

  await page.screenshot({ path: "./__snapshots__/blog.png", fullPage: true });
});
