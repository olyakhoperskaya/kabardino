#!/usr/bin/env bash
# Публикует текущую ветку main в olyakhoperskaya/kabardino и включает GitHub Pages.
set -euo pipefail

USER=olyakhoperskaya
REPO=kabardino
REMOTE=pages
URL="https://github.com/${USER}/${REPO}.git"
SITE="https://${USER}.github.io/${REPO}/"

if ! command -v gh >/dev/null 2>&1; then
  echo "Нужен GitHub CLI: https://cli.github.com/"
  exit 1
fi

active="$(gh api user --jq .login)"
if [[ "$active" != "$USER" ]]; then
  echo "Сейчас gh вошёл как ${active}. Для публикации нужен ${USER}."
  echo "  gh auth login"
  echo "  gh auth switch --user ${USER}"
  exit 1
fi

branch="$(git branch --show-current)"
if [[ "$branch" != "main" ]]; then
  echo "Скрипт публикует ветку main. Сейчас активна ${branch}."
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Есть незакоммиченные изменения. Сначала сделайте commit, затем запустите скрипт снова."
  git status --short
  exit 1
fi

if ! gh repo view "${USER}/${REPO}" >/dev/null 2>&1; then
  gh repo create "${USER}/${REPO}" --public --description "Путеводитель по Кабардино-Балкарии"
fi

if git remote get-url "$REMOTE" >/dev/null 2>&1; then
  git remote set-url "$REMOTE" "$URL"
else
  git remote add "$REMOTE" "$URL"
fi

git push -u "$REMOTE" main

if ! gh api "repos/${USER}/${REPO}/pages" >/dev/null 2>&1; then
  gh api --method POST "repos/${USER}/${REPO}/pages" --raw-field build_type=workflow >/dev/null
fi

echo "Репозиторий: https://github.com/${USER}/${REPO}"
echo "Сайт (через минуту после зелёного Actions): ${SITE}"
