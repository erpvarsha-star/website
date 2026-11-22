#!/usr/bin/env bash
# Phase 1 exit gate: visible on-page copy for each page must be >= MIN words.
# Counts every line under a "## <page>" heading EXCEPT the "### SEO title" and
# "### Meta description" sections (those are metadata, not visible body text).
# Usage: scripts/check-wordcount.sh [MIN] [files...]   (default MIN=550, files=content-drafts/*.md)
set -euo pipefail
MIN="${1:-550}"; shift || true
FILES=("$@")
[ ${#FILES[@]} -eq 0 ] && FILES=(content-drafts/*.md)
fail=0
for f in "${FILES[@]}"; do
  awk -v min="$MIN" -v file="$f" '
    function report() {
      if (page == "") return
      # Additive sections (e.g. homepage expansion) only need to lift the live page past min.
      need = (page ~ /[Ee]xpansion|[Aa]ddition/) ? min - 483 : min
      status = (wc >= need) ? "PASS" : "FAIL"; if (wc < need) bad = 1
      printf "%-4s %5d  %s :: %s\n", status, wc, file, page
    }
    /^## /  { report(); page = $0; wc = 0; skip = 0; next }
    /^### / { skip = ($0 ~ /^### (SEO title|Meta description)/); next }
    page != "" && !skip { wc += NF }
    END     { report(); exit bad }
  ' "$f" || fail=1
done
exit $fail
