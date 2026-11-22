# Diagnostic run 1 (verification only)

## 1. Publish site workflow (VflWebsite)

- Run: https://github.com/erpvarsha-star/VflWebsite/actions/runs/45067391428 (id 45067391428, run_number 1)
- Commit: a892ff1713c7bd6ebaad203810ec39572919e240 ("Add Velo diagnostic meta tags and auto-publish workflow")
- Status: completed. Conclusion: **failure**. Started 2026-11-22T20:36:30Z, finished about 20:37:02Z.
- Failing job: `publish`, failing step `Run npx wix login --api-key "$WIX_CLI_API_KEY"`.
- Key log lines:
  - `env: WIX_CLI_API_KEY: ` (empty value in the job environment)
  - `Error: Raw mode is not supported on the current process.stdin, which Ink uses as input stream by default.`
  - `✖ This command is not supported in non-interactive terminals. Run with --help to`
  - `Process completed with exit code 1.`
- Cause: the repository secret `WIX_CLI_API_KEY` is not available to this run, so the CLI fell into interactive mode in CI.
- Result: the publish did not run. Steps 2 to 3 of the task were not executed (no Firecrawl scrape, no ssr-trigger update).

## Not yet done

- Firecrawl checks of `/` and `/forging-manufacturer-pune` (vf-diag meta tags, `7edffdcc5c`, `×60`, wrapper display) were not run because the publish did not succeed.
- `.github/ssr-trigger` was not updated and the ssr-check workflow was not triggered.

## Next step needed

Add the `WIX_CLI_API_KEY` secret to erpvarsha-star/VflWebsite (repository Settings, Secrets and variables, Actions), then re-run the Publish site workflow for a892ff1 and repeat this check.
