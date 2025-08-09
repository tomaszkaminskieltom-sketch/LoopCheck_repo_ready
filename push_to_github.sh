#!/usr/bin/env bash
set -e
if [ -z "$1" ]; then
  echo "Użycie: ./push_to_github.sh https://github.com/<login>/loopcheck.git"
  exit 1
fi
git init
git add .
git commit -m "Initial"
git branch -M main
git remote add origin "$1"
git push -u origin main
echo "Gotowe. Teraz wejdź na https://vercel.com i zaimportuj repo."
