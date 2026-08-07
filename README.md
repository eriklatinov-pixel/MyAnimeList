Anime List V19

V19 — Source Resolver + несколько озвучек + автоматические субтитры

Что работает без ключей:
- AniLiberty как нативный HLS-источник.
- Наш собственный HTML5/HLS.js плеер: качество, PiP, fullscreen, прогресс, честный XP, OP/ED skip, мини-плеер, hotkeys.
- Direct HLS/MP4, разрешённый Embed, локальные файлы и JSON manifest как запасные адаптеры.

Что добавлено в V19:
- Source Resolver: режим «Авто» последовательно проверяет нативный HLS, затем дополнительные провайдеры и fallback-источники.
- Kodik adapter: если указать свой API token, поиск идёт в первую очередь по MAL/Shikimori ID конкретной части франшизы. Для серии собираются все найденные переводы.
- Kodik переводы выводятся в селекте «Озвучка»: voice-релизы помечаются 🎙, subtitle-релизы — CC.
- SubDL adapter: если указать бесплатный API key, для нативного видео автоматически ищутся RU/EN субтитры конкретной серии.
- Субтитры кэшируются и добавляются в общий селект вместе с HLS/VTT/SRT дорожками.
- Добавлена ручная синхронизация внешних субтитров от -5 до +5 секунд.
- Кнопка «Источники» открывает настройки провайдеров прямо в плеере.

Настройка:
1) AniLiberty — ничего делать не нужно.
2) Kodik — вставь собственный API token в Плеер → Настройки → Источники.
   Доступ к базе Kodik выдаёт сам сервис; чужие/скрытые токены сайт не извлекает.
3) SubDL — вставь API key в том же разделе. Бесплатного ключа достаточно для личного использования в обычном режиме.

Важно про публикацию сайта:
- Сейчас ключи хранятся только локально в localStorage браузера. Для личного локального сайта это удобно.
- Если проект станет публичным, Kodik/SubDL секреты нужно перенести на сервер/API proxy и НЕ отдавать посетителям в JavaScript.
- Kodik подключается как разрешённый provider embed. Мы не извлекаем защищённые прямые видеопотоки и не вырезаем рекламу провайдера.
- SubDL предоставляет только файлы субтитров, не видео.

Manifest по-прежнему поддерживает streams[], subtitles[], opening/ending и duration. См. player-manifest-example.json.

## GitHub Pages
This folder is ready to publish from the repository root.

IMPORTANT: Do not hard-code Kodik tokens or SubDL API keys into index.html/app.js/style.css before publishing. In the current local build, keys entered in the player settings are stored in that browser's localStorage and are not included in these source files.
