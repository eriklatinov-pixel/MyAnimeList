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
