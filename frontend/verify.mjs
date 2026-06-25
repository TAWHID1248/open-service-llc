import { chromium } from "playwright";
import fs from "fs";

const routes = [
  "/",
  "/services",
  "/services/electricity",
  "/about-us",
  "/faq",
  "/testimonials",
  "/privacy-policy",
  "/contact",
  "/category/exterior-renovation",
  "/category/home-maintenance",
];

const outDir = "/tmp/izzy-screenshots";
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  executablePath:
    "/Users/tawhidshaheed/Library/Caches/ms-playwright/chromium-1223/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
});
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

const report = [];

for (const route of routes) {
  const errors = [];
  const consoleHandler = (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  };
  const pageErrorHandler = (err) => errors.push(`pageerror: ${err.message}`);
  page.on("console", consoleHandler);
  page.on("pageerror", pageErrorHandler);

  await page.goto(`http://localhost:5173${route}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);

  const fileName = route === "/" ? "home" : route.replace(/\//g, "_").replace(/^_/, "");
  const screenshotPath = `${outDir}/${fileName}.png`;
  await page.screenshot({ path: screenshotPath, fullPage: true });

  page.off("console", consoleHandler);
  page.off("pageerror", pageErrorHandler);

  report.push({ route, screenshotPath, errors });
}

await browser.close();

for (const r of report) {
  console.log(`\n=== ${r.route} ===`);
  console.log(`Screenshot: ${r.screenshotPath}`);
  if (r.errors.length === 0) {
    console.log("Console: no errors");
  } else {
    console.log("Console errors:");
    r.errors.forEach((e) => console.log(`  - ${e}`));
  }
}
