import { chromium } from "playwright";

const routes = ["/", "/about-us", "/contact"];
const browser = await chromium.launch({
  executablePath:
    "/Users/tawhidshaheed/Library/Caches/ms-playwright/chromium-1223/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
});
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

for (const route of routes) {
  await page.goto(`http://localhost:5173${route}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  const name = route === "/" ? "home" : route.replace(/\//g, "_");
  await page.screenshot({ path: `/tmp/izzy-screenshots/brand${name}.png`, fullPage: true });
  console.log(`✓ ${route}`);
}

await browser.close();
