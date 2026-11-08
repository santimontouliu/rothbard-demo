# Rothbard lightweight demo — GitHub Pages

No installation, build, framework, server, API keys or dependencies. The website consists of index.html, style.css, model.js and app.js. All asset paths are relative, so repository subpaths and custom domains work. No external fonts, analytics or runtime requests. Official source links only open when clicked. State resets on refresh; exports download locally.

## Upload and publish
1. Unzip rothbard-pages.zip.
2. Create a GitHub repository. For the simplest Pages availability, use a public repository containing only this synthetic demo.
3. Choose Add file → Upload files. Upload the CONTENTS of this folder, so index.html is directly at the repository root. Do not upload the ZIP itself or wrap these files in another folder.
4. Commit to main.
5. Settings → Pages → Build and deployment → Source: Deploy from a branch. Select main and /(root), then Save.
6. Wait for the Pages deployment to complete; open the URL shown in Settings → Pages, usually https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/.
7. Test scenario changes, sources and Export brief on the deployed URL before the meeting.

You do not need GitHub Actions, npm, node_modules, Vercel or Cloudflare hosting. GitHub Pages uses its normal branch publishing pipeline.

## Optional custom domain
First verify the default GitHub Pages URL. Then add rothbard.useproteus.io in the repository Pages custom-domain setting. In Cloudflare DNS, create a CNAME named rothbard targeting YOUR-USERNAME.github.io (no repository path). Initially use DNS-only while validating domain/HTTPS setup. Follow GitHub's custom-domain verification instructions and enable HTTPS after certificate provisioning. Do not replace your root website DNS. Custom-domain setup is not performed by this package.

## Five-minute demo
1. Explain synthetic-only scope; open Northstar.
2. Compare current structure with cross-border operations.
3. Toggle retained home and related transactions; show changing review topics.
4. Inspect structure nodes and sources; explain missing validation.
5. Export a discussion brief; briefly show Growth Intelligence.
6. Ask Javier which recurring client situation deserves a focused pilot. Schedule a follow-up to define workflow, content review, success measures and pricing.

## Boundaries
Fictional cases, illustrative structures, no calculations or recommendations. Unknown effective dates remain unknown. No real-client data, accounts, persistence or live integrations. Follow-up scope: domain validation and production requirements. See QA.md for verification.
