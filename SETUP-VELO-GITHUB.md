# One-time setup: connect varshaforgings.com code to GitHub (~10–15 min, Yash, on a desktop)
Source: Wix docs, [Set Up Git Integration & Wix CLI for Sites](https://dev.wix.com/docs/develop-websites/articles/workspace-tools/developer-tools/git-integration-wix-cli/setting-up-git-integration-wix-cli).

After this, agents apply every visible-text correction through code. You don't paste anything.

## Steps
1. On a **desktop**, open the Editor: `https://editor.wix.com/html/editor/web/renderer/edit/c27ae6f7-9963-4102-b1dd-70873a201ee3?metaSiteId=4a42e2d8-8fd2-43d7-95a8-1c319f041137`
2. Velo / Dev Mode is already on for this site. In the left **Code sidebar**, click the **GitHub Integration** icon → **Connect to GitHub** → **Continue**.
3. Click **Sign In**, sign in to GitHub as the account that owns `erpvarsha-star`, and authorize Velo.
4. **Owner:** `erpvarsha-star` · **Repo name:** `VflWebsite` → **Create**.
5. Click **Install** (the Velo GitHub app). Choose **Only select repositories**, keep `VflWebsite` selected, then **Approve and Install**.
6. A box shows terminal commands. **You don't need to run them**; Claude runs them in the cloud. Click **Close**.
7. Reply to Claude: **"repo connected"**.

## What changes for you
- The Editor's **code panel becomes read-only** (code now lives in GitHub). **Design and text editing in the Editor work as before.**
- Don't delete the repo or remove the Velo app's access to it, or the connection breaks permanently.
- It can be undone: GitHub Integration → ⋯ → Disconnect. The site keeps the last code. Reconnecting later creates a new repo.

## What Claude does next
1. Gets access to `VflWebsite` and checks the existing site code (anything there is kept).
2. Installs the Wix CLI for Sites in the cloud. If Wix asks for a one-time login approval, you'll get a link and code to approve.
3. **Pilot:** adds the correction layer with ONE fix, the footer email typo `varshaforging.com` → `varshaforgings.com`. It publishes, then a reviewer confirms the live page source shows the fix.
4. If the pilot passes, it applies Blocks 2–6 in batches, verifying each live.
