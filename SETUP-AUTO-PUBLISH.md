# One-time setup: auto-publish site code from GitHub (~10 min, Yash, desktop)
Source: Wix docs, [Set Up GitHub Actions to Work with the Wix CLI for Sites](https://dev.wix.com/docs/develop-websites/articles/workspace-tools/developer-tools/git-integration-wix-cli-for-sites/set-up-git-hub-actions-to-work-with-the-wix-cli-for-sites). Free.

1. Open the **API Keys Manager**: https://manage.wix.com/account/api-keys → **Generate API Key**.
2. Name it `VflWebsite publish`. Under site permissions, choose the varshaforgings.com site and tick **only** "Wix CLI for Sites - Git Integration". Generate, then **copy the key** (it is shown once).
3. Open https://github.com/erpvarsha-star/VflWebsite/settings/secrets/actions → **New repository secret**.
   - Name: `WIX_CLI_API_KEY`
   - Secret: paste the key → **Add secret**.
4. Tell Claude **"key saved"**. Never paste the key into chat.

Claude then adds the workflow: install → `wix login --api-key` → `wix publish` on every push to main. Its first run is checked against the baseline.
To undo: delete the key in the API Keys Manager; publishing falls back to your Publish click.
