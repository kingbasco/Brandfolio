# Cloudflare hosting

Public URL: https://brandfolio.adeseghacyril.workers.dev

Worker: `brandfolio`. First published November 5, 2026. This is an assets-only Worker: no Worker script, database, credentials, R2 bindings or AI service is shipped. The current site is the landing page and concept catalog, not the guideline editor.

## Deployment

Build in a cloud workspace with `npm ci` and `npm run build`. Publish the contents of `dist` through the connected Cloudflare Static Assets API: create the asset manifest, request an upload session, upload the missing base64 multipart file batches with its short-lived token, and attach the completed upload to the Worker. Never commit or log upload tokens.

Metadata uses compatibility date `2026-11-05`, `html_handling: auto-trailing-slash`, and `not_found_handling: none`. Unknown paths return 404; this landing page uses root query parameters and section anchors. workers.dev is enabled; version preview URLs are disabled. No CLI or paid plan was added. Static asset requests and storage are free under Cloudflare's current terms; the Free plan supports 20,000 files/version and 25 MiB/file. Recheck terms when adding backend work.

GitHub push-to-deploy is **not configured**. Repository commits do not change the live site automatically. Rebuild and republish through the connected deployment flow; Workers Builds integration can be added after the Cloudflare GitHub app connection is configured.

## Verification and rollback

The initial public URL returned HTTP 200. Browser checks covered public search/filter/download and mobile/desktop behavior; a tablet run timed out during navigation, so it was not treated as a six-test clean pass. The redesigned version is checked again after upload. To roll back this static site, rebuild a previous verified source commit and republish its assets, or select the previous deployment in Cloudflare. No persistent application data is involved.

Sources: https://developers.cloudflare.com/workers/static-assets/direct-upload/ and https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/ .
