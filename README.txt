Senime V24.6 · Public Beta Foundation
Clean Steam Layer: account isolation migration, auto-layout profile, clean social workspace, unified public profiles.

My Anime List V23.6 — Account First + Profile Titles

- Гостевой режим теперь показывает пустую личную библиотеку и большой CTA входа/регистрации; старые локальные данные не удаляются, но гостю не показываются.
- Каталог и поиск доступны без аккаунта, но попытка добавить аниме/очередь/прогресс открывает регистрацию.
- V23.5 Profile Studio сохранён: drag & drop + resize + явные Save/Cancel, XP/Supporter вынесены из верхнего обзора.
- Поиск жанром работает прямо в каталоге: Ecchi/эччи, Romance, Horror и др.
- «До 13 серий» больше не показывает онгоинги; быстрый фильтр сразу ставит статус FINISHED.
- Карточка на аватаре больше не даёт рамку/ауру: она даёт титул профиля. В Avatar Studio можно выбрать титул по имени персонажа или названию аниме.

My Anime List V23.5 — Profile Studio

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
