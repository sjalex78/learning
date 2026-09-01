# Resume build

`Sarah_Alexander_Resume.md` is the content. Everything else in this folder turns
it into a dated, styled PDF.

## Run it

```sh
mise trust   # first time only, approves this folder's mise.toml
mise run pdf
```

Output lands at `dist/Sarah_Alexander_Resume_<YYYY-MM-DD>.pdf`. Re-running on
a different day produces a new dated file rather than overwriting the last one.

No `mise`? `npm install && node build-resume.mjs` works the same way, using
Node directly.

## Contact info

The markdown has `{{EMAIL}}` / `{{PHONE}}` placeholders, filled in at build
time from the `RESUME_EMAIL` / `RESUME_PHONE` environment variables (defaults
live in `mise.toml`). To use different contact details for one export:

```sh
RESUME_EMAIL="you@example.com" RESUME_PHONE="+61 4xx xxx xxx" mise run pdf
```

## Tweaking the look

- **Colours, fonts, spacing** — `style.css`. The variables at the top of the
  file (`--color-accent`, `--font-body`, `--space-section`, etc.) cover most
  changes; the rules below rarely need touching.
- **Page size/margins, footer text** — `PDF_OPTIONS` in `build-resume.mjs`.
- **A future photo** — add `<img src="photo.jpg" class="headshot">` near the
  top of the markdown (raw HTML passes through). A `.headshot` style
  (circular, floated top-right) is already defined in `style.css`, just
  unused until an image is added.

## Files

| File                        | Purpose                                                        |
| --------------------------- | -------------------------------------------------------------- |
| `Sarah_Alexander_Resume.md` | Resume content, with `{{EMAIL}}`/`{{PHONE}}` placeholders      |
| `style.css`                 | All visual styling                                             |
| `build-resume.mjs`          | Fills placeholders, renders PDF via `md-to-pdf`                |
| `mise.toml`                 | Pins Node, holds contact-info defaults, defines the `pdf` task |
| `dist/`                     | Generated PDFs (git-ignored)                                   |
