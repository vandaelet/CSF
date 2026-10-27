#!/bin/bash
# Draait alle tests met de nep-Firebase (lokaal en op GitHub Actions).
# Een nieuwe test in test/ (een .js-bestand dat eindigt met process.exit) komt er vanzelf bij.
cd "$(dirname "$0")/.."
test/serve.sh
for i in 1 2 3 4 5; do curl -s -o /dev/null http://localhost:8765/ && break; sleep 1; done
mislukt=()
for f in test/*.js; do
  n=$(basename "$f" .js)
  case "$n" in helpers) continue;; esac
  echo "== $n"
  timeout 600 node "$f" || mislukt+=("$n")
done
if [ ${#mislukt[@]} -gt 0 ]; then echo "MISLUKT: ${mislukt[*]}"; exit 1; fi
echo "Alle tests OK"
