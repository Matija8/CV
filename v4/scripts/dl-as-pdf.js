#!/usr/bin/env node

// #!/usr/bin/env -S ts-node -T

// TODO: WSL2 doesn't work.

import puppeteer from 'puppeteer';

const main = async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // const url = 'https://example.com';
  const url = 'http://localhost:5174/'; // Vite url.
  await page.goto(url, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: 'page.pdf', // path (relative to CWD) to save the PDF to.
    format: 'A4',
  });

  await browser.close();
  console.log('PDF saved successfully');
};

main();
