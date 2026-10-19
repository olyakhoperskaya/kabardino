# Путеводитель по Кабардино-Балкарии

Статичный лендинг по презентации группы: регион, люди, еда и три дня маршрута. Карта — виджет Яндекс Карт, ключ API не нужен.

## Локально

```bash
python3 -m http.server 4173
```

Открыть http://localhost:4173

## GitHub Pages

Сайт публикуется от аккаунта `olyakhoperskaya`:

https://olyakhoperskaya.github.io/kabardino/

Файлы лежат в корне, сборка не нужна. Публикацию делает Actions (`.github/workflows/pages.yml`).

Один SSH-ключ нельзя привязать к двум аккаунтам GitHub, поэтому пуш идёт по HTTPS через `gh` под `olyakhoperskaya`.

```bash
gh auth login
gh auth switch --user olyakhoperskaya
# закоммитьте сайт и workflow, если они ещё не в git
./scripts/publish-pages.sh
```

Скрипт создаёт публичный репозиторий `olyakhoperskaya/kabardino`, пушит `main` в remote `pages` и включает Pages со сборкой через GitHub Actions. Адрес появится через минуту после зелёного workflow.
