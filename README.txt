Senime V25.4 — Profile + Collection reliability

Senime V25.3 — Calm Action System

- Global purple/pink button flood removed.
- Neutral buttons by default; color reserved for true primary actions.
- Anime titles/covers no longer inherit button gradients.
- Queue/list/profile/collection/player utility controls are quiet neutral chrome.
- Old library action rows are forcibly hidden; card actions live in the ••• menu.
- No SQL required for this visual patch.

Senime V24.6 · Public Beta Foundation
Clean Steam Layer: account isolation migration, auto-layout profile, clean social workspace, unified public profiles.

Senime · legacy notes (V23.6) — Account First + Profile Titles

- Гостевой режим теперь показывает пустую личную библиотеку и большой CTA входа/регистрации; старые локальные данные не удаляются, но гостю не показываются.
- Каталог и поиск доступны без аккаунта, но попытка добавить аниме/очередь/прогресс открывает регистрацию.
- V23.5 Profile Studio сохранён: drag & drop + resize + явные Save/Cancel, XP/Supporter вынесены из верхнего обзора.
- Поиск жанром работает прямо в каталоге: Ecchi/эччи, Romance, Horror и др.
- «До 13 серий» больше не показывает онгоинги; быстрый фильтр сразу ставит статус FINISHED.
- Карточка на аватаре больше не даёт рамку/ауру: она даёт титул профиля. В Avatar Studio можно выбрать титул по имени персонажа или названию аниме.

Senime · legacy notes (V23.5) — Profile Studio

Free 12-column profile layout editor, explicit Save/Cancel, draggable avatar/widgets, resizable blocks, XP info moved to Quests, Supporter info moved to Shop, and smart server-side genre search (e.g. Ecchi / эччи).

Anime List V22.0

PLAYER V22 — MEDIA DECK
Свой интерфейс плеера: пользователь выбирает не провайдера, а реальную медиадорожку.

ЧТО ИЗМЕНИЛОСЬ
- Убрана основная панель «Источник: AniLiberty / AnimeVost / Kodik» из обычного просмотра.
- Источники остаются под капотом в Media Resolver и в настройках/диагностике.
- Справа новый собственный Media Deck с двумя вкладками: «Дорожки» и «Серии».
- Дорожки разделены на 3 независимые группы:
  1) Оригинал / JP audio
  2) Озвучки
  3) Субтитры
- Оригинальная дорожка НЕ подделывается. Она показывается только если HLS/Manifest/провайдер реально отдаёт отдельное Japanese/JP/Original audio.
- HLS master с несколькими audio tracks теперь нормально раскладывается на Original и Dubs.
- HLS subtitle tracks, SubDL, локальные SRT/VTT и Manifest subtitles собираются в одну секцию субтитров.
- Kodik voice translations (после получения API token) идут в «Озвучки».
- Kodik subtitle releases идут в «Субтитры», а не маскируются под озвучку.
- AniLiberty и AnimeVost показываются как варианты озвучки, а не как технические кнопки источника.
- Кнопки AUDIO/CC прямо внутри видео открывают Media Deck; качество остаётся отдельным компактным меню.
- Вкладка «Серии» сохраняет сезоны, прогресс, просмотренные эпизоды и автопереход.
- Ручной HLS/MP4, локальная папка и Manifest убраны в «Свои медиа», чтобы не мешать обычному просмотру.

ТЕКУЩИЕ ИСТОЧНИКИ
- AniLiberty: нативный HLS, русская озвучка.
- AnimeVost: экспериментальный второй нативный источник русской озвучки.
- Kodik: архитектура готова; ждём API access/token для широкого списка переводов и subtitle releases.
- SubDL: внешние RU/EN субтитры (если настроен API key/backend).
- HLS/Manifest/local: могут содержать Original JP + несколько audio/subtitle tracks.

ВАЖНО ПРО ORIGINAL
Сам факт наличия аниме у источника не означает наличие отдельной японской аудиодорожки.
V22 специально не рисует фейковую кнопку «Оригинал». Если master.m3u8 содержит lang=ja / Japanese / Original — она появится автоматически.

DOWNLOADS
- Premium Download UI сохранён.
- Скачивание появляется только если provider/Manifest явно отдаёт отдельный разрешённый download URL.
- HLS не склеивается и реклама/DRM не обходятся.
- Текущая Premium-проверка и quota 50/day — dev/local. Для публичного сайта entitlement должен подтверждать backend.

BACKEND
Cloudflare Worker starter лежит в /backend.
Он нужен для секретов Kodik/SubDL и API-прокси, чтобы ключи не лежали на GitHub Pages.

ПРОВЕРКИ V22
- app.js: node --check — OK.
- HTML: дублирующихся id нет.
- Headless UI smoke test: окно плеера открывается без JS errors.
- Synthetic HLS test: Japanese -> Original, AniDUB -> Dubs, RU/EN -> Subtitles; переключение HLS audio работает.

ЦЕЛЬ ДАЛЬШЕ
Kodik не должен становиться «плеером Kodik» в интерфейсе. После токена его результаты должны просто расширить Media Deck: AniDUB, Studio Band, subtitle releases и т.д. Пользователь работает с дорожками, а resolver сам знает, где их получить.

ACCOUNT V23 — АККАУНТЫ + ОБЛАЧНАЯ СИНХРОНИЗАЦИЯ
- Добавлен Account Hub: вход, регистрация, выход, восстановление пароля.
- Пароли не хранятся кодом сайта: авторизация рассчитана на Supabase Auth.
- При первом входе текущий локальный список переносится в облако автоматически.
- После входа синхронизируются: anime-list/latestData, настройки интерфейса, watch prefs, resume progress и локальные комментарии серий.
- Перед первой загрузкой облачного состояния создаётся локальная резервная копия.
- Sidebar показывает статус «Данные в облаке» и состояние синхронизации.
- Профиль остаётся полностью рабочим и для гостя.
- Premium/Stars/tickets специально подготовлены как отдельная server-authoritative сущность: клиент не должен иметь права менять их напрямую.

КАК ПОДКЛЮЧИТЬ ACCOUNT BACKEND
1. Создать проект Supabase.
2. В Supabase SQL Editor выполнить файл SUPABASE_SETUP.sql.
3. В Project Settings / API взять Project URL и public anon key.
4. В auth-config.js вставить их в supabaseUrl и supabaseAnonKey.
   ВАЖНО: service_role key туда НЕ вставлять никогда.
5. В Supabase Auth добавить адрес GitHub Pages в Site URL / Redirect URLs:
   https://eriklatinov-pixel.github.io/MyAnimeList/
6. Загрузить обновлённые файлы на GitHub Pages.

V24.0 Steam Layer V1 — Anime Tier Board
- Profile now has a customizable Tier Board widget.
- Only titles from the Completed/«Посмотрел» library are eligible.
- Drag posters between S/A/B/C/D tiers, rename/reorder/add tiers, keep unranked titles in a tray.
- Explicit Save/Cancel; saved data is part of the existing account cloud snapshot.
- Tier Board is also a movable/resizable Profile Studio block and can be hidden in profile settings.
- Includes V23.9 strict genre filter fix.


V24.1 SOCIAL / STEAM LAYER
- Profile Studio layout readability fix.
- Genre pagination now sends genre server-side and batches Load More.
- Friends, follows, user search, activity feed, friend-only DMs.
- New DM starts at LVL 10; lower levels can reply to incoming chats.
IMPORTANT: run SOCIAL_SETUP_V241.sql once in Supabase SQL Editor before using the social tab.


V24.5
- Founder/Admin UI is tied to @senite / Founder #0001, not nickname.
- Creator identity badge and creator profile footer card.
- Guest-safe creator public profile link.


SENIME V24.6 · PUBLIC BETA FOUNDATION
- Rebrand: My Anime List / «Мой аниме-лист» -> Senime (external MyAnimeList source names stay unchanged).
- Public profile comments/replies backed by Supabase.
- Founder Admin UI is injected only for FOUNDER #0001; regular accounts do not get an Admin button/modal.
- Server-issued pending grants: XP, Stars, Character/Waifu Tickets, Premium days, and a Ticket for a specific anime.
- Card tickets never intentionally drop a character already owned; exhausted pools keep the ticket.
- Rarity rebalance: MAIN is at least Rare; Rare is now a real middle tier.
- Waifu Ticket now uses fan-favorite female characters with Ecchi/Romance bias plus a small special pool (including Reze-style picks); child-coded characters are excluded and there is no sexual-trait scoring.
- Public avatar preserves Avatar Studio crop/position; bio is prominent; public profile uses page scrolling rather than an inner scrollbar.
- UI Refresh / Design System V1: larger readable labels, cleaner cards, consistent controls.
- Production prep: metadata, favicon, Privacy / Terms / Contact pages, stale prototype copy removed.

IMPORTANT
1. Run SUPABASE_PATCH_V246.sql ONCE in Supabase SQL Editor.
2. Do NOT upload the SQL file to GitHub Pages.
3. GitHub FULL/UPDATE archives intentionally exclude SQL.
4. Together/Watch Party is NOT part of this release.


V24.6.1 REGRESSION FIX
- Senime brand is hard-locked (old local custom name can no longer overwrite it).
- Admin grants are claimed only after cloud restore; periodic pickup added.
- Premium badge added to own/public profiles.
- Uploaded custom avatars are included in public profile payload.
- Own profile guestbook now uses Supabase public comments.
- DM loading flicker removed.
- Footer Privacy / Terms / Contact links enlarged.
- Founder audit can re-issue grants that V24.6 already marked claimed.


V24.7 COMMUNITY & COLLECTION UPDATE
- Sidebar Community: Chats, Friends, Notifications, Leaderboards, Collections.
- Redesigned chats: replies, reactions, edit/delete/copy/search, read receipts.
- Comment likes in profiles/player + clickable author profiles.
- Notifications deep-link to the exact liked/replied comment.
- Public user-made anime collections with create/like/save/reorder.
- Card collection search, rarity/anime filters, custom folders, hidden archive, compact mode.
- Themed ticket bundles scale with completed title length and mark COMPLETE sets.
- Cheaper ticket shop; Premium gets a 20% shop discount without leaderboard boosts.
- Share anime now uses a deep link to the exact title.
- Requires SUPABASE_PATCH_V247.sql once. SQL is intentionally NOT included in GitHub archives.


V24.7.1 HOTFIX
- Fixed Chats/Friends crash caused by missing socialState.incoming alias.
- Removed redundant Friends tab from Profile; Community sidebar is now the single social entry point.
- Hardened collection search/filter/folder/compact/card controls.
- Fixed giant gradient nickname / broken avatar layout in profile, public, and player comments.
- No new SQL required.


V24.7.3 CACHE-BUST
- index.html now loads app.js?v=24.7.3 and style.css?v=24.7.3.
- Founder gets a one-time "Senime V24.7.3 loaded" toast to prove the fresh JS is active.
- Fixes the case where GitHub Pages/browser kept serving the old V24.7.1 script.
- No new SQL required.


V24.8 SECURITY FOUNDATION
- Cloudflare Turnstile frontend integration for login/signup/password recovery.
- Official Turnstile TEST sitekey is enabled for staging only; real key required before production.
- Kodik/SubDL browser secret fields removed and old localStorage secrets purged.
- Public Worker URL can be fixed in auth-config.js.
- Upload MIME/size validation.
- Cloudflare Pages _headers security baseline.
- Supabase V24.8 SQL hardens SECURITY DEFINER execute rights, notifications, DMs and adds abuse rate limits.
- HLS.js is pinned to 1.6.16 instead of a floating @1 tag.
- IMPORTANT: legacy XP/Stars/cards remain client-owned and are not yet anti-cheat/server-authoritative.


V24.8.1 COLLECTION / CURATION HOTFIX
- Cache-bust is now app.js?v=24.8.1 and style.css?v=24.8.1.
- Fixes notification "Read all" after V24.8 DB hardening.
- Replaces fragile card action row so Avatar / Folder / Showcase / Hide clicks work independently.
- Redesigns user-made collection page into compact mosaic + info + anime cards.
- Adds cloud comments, replies and likes to user-made collections.
- Collection comment notifications deep-link to the exact comment.
- Requires SUPABASE_PATCH_V2481_COLLECTION_COMMENTS.sql once.

============================================================
Senime V25.0 — INTERFACE OVERHAUL / SMART LIST / VERIFIED UX
============================================================

Что нового:
- Большой визуальный overhaul: новый shell, sidebar, hero, карточки, каталог, detail/player/profile/community polish, адаптив и лёгкие анимации.
- List Studio: переименование базовых разделов, emoji, порядок, hide/show, grid/compact.
- Личные полки поверх системных статусов — статус прогресса при этом не ломается.
- Профиль: "просмотрено" отдельно от "✓ verified".
- Русский/английский/Romaji поиск + быстрые алиасы (включая «Табакошка») и несколько популярных опечаток.
- Точное совпадение может показываться даже при включённом «Не показывать мой список».
- Watch recap после verified-завершения: даты, время, серии по дням, OP/ED skip, ручное получение награды.
- Награда за завершение ограничена: фильм 1; <=13 серий 2; <=26 — 3; <=50 — 4; <=100 — 5; >100 — 6 тематических тикетов.
- После verified-завершения на странице аниме открывается дорогой тематический Ticket за 900 Stars; при полной коллекции покупка скрывается.
- Leaderboard UI помечает competitive watch-метрики как verified.

ОБЯЗАТЕЛЬНО ДЛЯ ЛИДЕРБОРДА:
Запусти отдельно SUPABASE_PATCH_V250_VERIFIED_LEADERBOARD.sql в Supabase SQL Editor.
SQL НИКОГДА не загружается на GitHub/Cloudflare Pages.

Проверка кэша после деплоя:
1) Hard reload / Ctrl+F5.
2) DevTools Console: window.SENIME_BUILD
3) Ожидается: "25.0"

Важно перед большим публичным запуском:
V25 отделяет verified UX и verified leaderboard-поля, но текущий legacy watch/economy ledger всё ещё частично живёт в клиентском user_state. Это НЕ финальная anti-cheat архитектура для платных функций/серьёзных соревнований. Перед включением реальных платежей нужен server-authoritative payment webhook и отдельный серверный verified-watch/economy ledger.


=== V25.1 · QUIET UI POLISH ===
- Profile now uses the desktop width instead of looking like a small modal.
- Profile tabs and utility controls are neutral; gradients are reserved for primary actions.
- Collection grid is responsive and no longer forms a horizontal wall of cards.
- Card actions are progressively disclosed on desktop hover/focus, always visible on touch.
- Library cards are cleaner and place title/progress before controls.
- Public profile widgets size to their content; small Watching blocks no longer consume full width.
- Player chrome is quieter so the video remains the focal point.
- Reduced blanket entrance animations and visual nesting.


Senime V25.2 — CLEAN LIBRARY ACTIONS
- Убрана постоянно видимая строка кнопок на карточках библиотеки.
- На карточке остаётся только тихая кнопка •••; все действия открываются по клику в компактном меню.
- На мобильном ••• всегда достаточно заметна.
- Cache bust: app.js?v=25.2 / style.css?v=25.2.
- SQL не нужен.


V25.6: cosmetic profile frames now apply to own avatar, sidebar avatar and public profile; frame choice syncs through public_payload. No SQL required.


V25.6: каталог снова AniList-first; Jikan только резерв. Исправлен конфликт 65k/5k и добавлены надежные fallback-обложки каталога.
