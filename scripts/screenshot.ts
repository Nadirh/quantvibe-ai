import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:3000';
const output = process.argv[3] || '/tmp/screenshot.png';
const viewportWidth = parseInt(process.argv[4] || '1280');
const viewportHeight = parseInt(process.argv[5] || '800');
const fullPage = process.argv.includes('--full');

async function screenshot() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: viewportWidth, height: viewportHeight },
  });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.screenshot({ path: output, fullPage });
  await browser.close();
  console.log(`Screenshot saved to ${output}`);
}

screenshot().catch((err) => {
  console.error(err);
  process.exit(1);
});
