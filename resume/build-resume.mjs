#!/usr/bin/env node
// Builds Sarah_Alexander_Resume.md into a dated, styled PDF.
//
// Look & feel:  edit style.css (colours, fonts, spacing all live at the top as CSS variables).
// Page setup:   edit PDF_OPTIONS below (page size, margins, footer text).
// Contact info: RESUME_EMAIL / RESUME_PHONE env vars are required — the build
//               fails without them (`mise run pdf` reads these from mise.toml,
//               or export them yourself).
//
// Usage: node build-resume.mjs   (or: mise run pdf)

import { mdToPdf } from 'md-to-pdf';
import { readFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SOURCE_FILE = path.join(__dirname, 'Sarah_Alexander_Resume.md');
const STYLESHEET = path.join(__dirname, 'style.css');
const OUTPUT_DIR = path.join(__dirname, 'dist');

const today = new Date();
// Local date, not UTC (toISOString() would roll back a day for timezones ahead of UTC).
const isoDate = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, '0'),
  String(today.getDate()).padStart(2, '0'),
].join('-');
const longDate = new Intl.DateTimeFormat('en-AU', { dateStyle: 'long' }).format(today);

const PDF_OPTIONS = {
  format: 'A4',
  margin: { top: '16mm', bottom: '16mm', left: '18mm', right: '18mm' },
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate: '<span></span>', // empty, but required to suppress Chrome's default header
  footerTemplate: `
    <div style="width:100%; font-family:-apple-system,Helvetica,Arial,sans-serif; font-size:7.5px; color:#9aa4ae; text-align:center;">
      Generated ${longDate} &middot; Page <span class="pageNumber"></span> of <span class="totalPages"></span>
    </div>
  `,
};

async function main() {
  const email = process.env.RESUME_EMAIL;
  const phone = process.env.RESUME_PHONE;

  if (!email || !phone) {
    throw new Error(
      'RESUME_EMAIL and RESUME_PHONE must both be set (e.g. via mise.toml, or export them yourself).'
    );
  }

  const template = await readFile(SOURCE_FILE, 'utf8');
  const content = template
    .replaceAll('{{EMAIL}}', email)
    .replaceAll('{{PHONE}}', phone);

  await mkdir(OUTPUT_DIR, { recursive: true });
  const dest = path.join(OUTPUT_DIR, `Sarah_Alexander_Resume_${isoDate}.pdf`);

  await mdToPdf(
    { content },
    {
      dest,
      stylesheet: [STYLESHEET],
      body_class: 'resume',
      document_title: 'Sarah Alexander — Resume',
      pdf_options: PDF_OPTIONS,
      launch_options: { args: ['--no-sandbox'] },
    }
  );

  console.log(`Resume PDF written to ${path.relative(process.cwd(), dest)}`);
}

main().catch((err) => {
  console.error('Failed to build resume PDF:', err);
  process.exitCode = 1;
});
