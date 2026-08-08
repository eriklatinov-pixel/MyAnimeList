const STORAGE_KEY = "animeListLocalV2";
const SECTION_TITLES = {
  watching: "▶️ Сейчас",
  planned: "📺 Посмотреть",
  movies: "🎬 Фильмы посмотреть",
  completed: "✅ Посмотрел",
  paused: "⏸️ Отложено"
};
const DEFAULT_DATA = {
  "sections": {
    "watching": [
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "WataMote",
        "aliases": [
          "WataMote"
        ],
        "emoji": "🥀",
        "descriptor": "неловкое",
        "episodes": 12,
        "episodes_text": "12 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Табакошка / Chainsmoker Cat",
        "aliases": [
          "Табакошка / Chainsmoker Cat"
        ],
        "emoji": "🐈‍⬛",
        "descriptor": "странное",
        "episodes": null,
        "episodes_text": "количество не объявлено",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Girls Band Cry",
        "aliases": [
          "Girls Band Cry"
        ],
        "emoji": "🥁",
        "descriptor": "эмоциональное",
        "episodes": 13,
        "episodes_text": "13 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Attack on Titan",
        "aliases": [
          "Attack on Titan"
        ],
        "emoji": "🧱",
        "descriptor": "эпичное",
        "episodes": 89,
        "episodes_text": "89 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Chainsaw Man",
        "aliases": [
          "Chainsaw Man"
        ],
        "emoji": "🪚",
        "descriptor": "безумное",
        "episodes": 12,
        "episodes_text": "12 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      }
    ],
    "planned": [
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Code Geass",
        "aliases": [
          "Code Geass"
        ],
        "emoji": "🧠",
        "descriptor": "напряжённое",
        "episodes": 50,
        "episodes_text": "50 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Chainsaw Man",
        "aliases": [
          "Chainsaw Man"
        ],
        "emoji": "🪚",
        "descriptor": "безумное",
        "episodes": 12,
        "episodes_text": "12 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Hellsing Ultimate",
        "aliases": [
          "Hellsing Ultimate"
        ],
        "emoji": "🧛",
        "descriptor": "кровавое",
        "episodes": 10,
        "episodes_text": "10 эпизодов",
        "format": "OVA",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Inuyashiki",
        "aliases": [
          "Inuyashiki"
        ],
        "emoji": "🤖",
        "descriptor": "мрачное",
        "episodes": 11,
        "episodes_text": "11 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Hunter × Hunter",
        "aliases": [
          "Hunter × Hunter"
        ],
        "emoji": "⚡️",
        "descriptor": "приключенческое",
        "episodes": 148,
        "episodes_text": "148 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Akame ga Kill!",
        "aliases": [
          "Akame ga Kill!"
        ],
        "emoji": "🗡️",
        "descriptor": "трагичное",
        "episodes": 24,
        "episodes_text": "24 эпизода",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Solo Leveling",
        "aliases": [
          "Solo Leveling"
        ],
        "emoji": "🆙",
        "descriptor": "динамичное",
        "episodes": 25,
        "episodes_text": "25 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Serial Experiments Lain",
        "aliases": [
          "Serial Experiments Lain"
        ],
        "emoji": "🌀",
        "descriptor": "странное",
        "episodes": 13,
        "episodes_text": "13 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Oshi no Ko",
        "aliases": [
          "Oshi no Ko"
        ],
        "emoji": "🌟",
        "descriptor": "драматичное",
        "episodes": 35,
        "episodes_text": "35 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Call of the Night",
        "aliases": [
          "Call of the Night"
        ],
        "emoji": "🌙",
        "descriptor": "атмосферное",
        "episodes": 25,
        "episodes_text": "25 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Witch Hat Atelier",
        "aliases": [
          "Witch Hat Atelier"
        ],
        "emoji": "🧙",
        "descriptor": "сказочное",
        "episodes": 13,
        "episodes_text": "13 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Devil May Cry",
        "aliases": [
          "Devil May Cry"
        ],
        "emoji": "😈",
        "descriptor": "драйвовое",
        "episodes": 8,
        "episodes_text": "8 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Gurren Lagann",
        "aliases": [
          "Gurren Lagann"
        ],
        "emoji": "🔥",
        "descriptor": "эпичное",
        "episodes": 27,
        "episodes_text": "27 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Takopi’s Original Sin",
        "aliases": [
          "Takopi’s Original Sin"
        ],
        "emoji": "🐙",
        "descriptor": "тяжёлое",
        "episodes": 6,
        "episodes_text": "6 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Monster",
        "aliases": [
          "Monster"
        ],
        "emoji": "🕵️",
        "descriptor": "психологическое",
        "episodes": 74,
        "episodes_text": "74 эпизода",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Steins;Gate",
        "aliases": [
          "Steins;Gate"
        ],
        "emoji": "⏳",
        "descriptor": "запутанное",
        "episodes": 24,
        "episodes_text": "24 эпизода",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Fullmetal Alchemist: Brotherhood",
        "aliases": [
          "Fullmetal Alchemist: Brotherhood"
        ],
        "emoji": "⚗️",
        "descriptor": "масштабное",
        "episodes": 64,
        "episodes_text": "64 эпизода",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Clannad",
        "aliases": [
          "Clannad"
        ],
        "emoji": "🌸",
        "descriptor": "душевное",
        "episodes": 47,
        "episodes_text": "47 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Terror in Resonance",
        "aliases": [
          "Terror in Resonance"
        ],
        "emoji": "💣",
        "descriptor": "меланхоличное",
        "episodes": 11,
        "episodes_text": "11 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Future Diary",
        "aliases": [
          "Future Diary"
        ],
        "emoji": "📓",
        "descriptor": "безумное",
        "episodes": 26,
        "episodes_text": "26 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Frieren: Beyond Journey’s End",
        "aliases": [
          "Frieren: Beyond Journey’s End"
        ],
        "emoji": "🧝‍♀️",
        "descriptor": "спокойное",
        "episodes": 38,
        "episodes_text": "38 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "The Exiled Heavy Knight Knows How to Game the System",
        "aliases": [
          "The Exiled Heavy Knight Knows How to Game the System"
        ],
        "emoji": "🛡️",
        "descriptor": "игровое",
        "episodes": null,
        "episodes_text": "количество не объявлено",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "My Dress-Up Darling",
        "aliases": [
          "My Dress-Up Darling"
        ],
        "emoji": "👗",
        "descriptor": "лёгкое",
        "episodes": 24,
        "episodes_text": "24 эпизода",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Girls’ Last Tour",
        "aliases": [
          "Girls’ Last Tour"
        ],
        "emoji": "🛵",
        "descriptor": "меланхоличное",
        "episodes": 12,
        "episodes_text": "12 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "86 Eighty-Six",
        "aliases": [
          "86 Eighty-Six"
        ],
        "emoji": "🤖",
        "descriptor": "военное",
        "episodes": 23,
        "episodes_text": "23 эпизода",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Erased",
        "aliases": [
          "Erased"
        ],
        "emoji": "⏪",
        "descriptor": "напряжённое",
        "episodes": 12,
        "episodes_text": "12 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Parasyte: The Maxim",
        "aliases": [
          "Parasyte: The Maxim"
        ],
        "emoji": "🦠",
        "descriptor": "мрачное",
        "episodes": 24,
        "episodes_text": "24 эпизода",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Black Clover",
        "aliases": [
          "Black Clover"
        ],
        "emoji": "🍀",
        "descriptor": "приключенческое",
        "episodes": 170,
        "episodes_text": "170 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Lucky☆Star",
        "aliases": [
          "Lucky☆Star"
        ],
        "emoji": "⭐️",
        "descriptor": "повседневное",
        "episodes": 24,
        "episodes_text": "24 эпизода",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Kakegurui / Безумный азарт",
        "aliases": [
          "Kakegurui / Безумный азарт"
        ],
        "emoji": "🎲",
        "descriptor": "безумное",
        "episodes": 24,
        "episodes_text": "24 эпизода",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Saga of Tanya the Evil / Youjo Senki",
        "aliases": [
          "Saga of Tanya the Evil / Youjo Senki"
        ],
        "emoji": "⚔️",
        "descriptor": "военное",
        "episodes": 12,
        "episodes_text": "12 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Hibike! Euphonium",
        "aliases": [
          "Hibike! Euphonium"
        ],
        "emoji": "🎺",
        "descriptor": "душевное",
        "episodes": 39,
        "episodes_text": "39 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Rascal Does Not Dream of Bunny Girl Senpai",
        "aliases": [
          "Rascal Does Not Dream of Bunny Girl Senpai"
        ],
        "emoji": "🐰",
        "descriptor": "романтичное",
        "episodes": 13,
        "episodes_text": "13 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Beck: Mongolian Chop Squad",
        "aliases": [
          "Beck: Mongolian Chop Squad"
        ],
        "emoji": "🎸",
        "descriptor": "вдохновляющее",
        "episodes": 26,
        "episodes_text": "26 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "The Seven Deadly Sins",
        "aliases": [
          "The Seven Deadly Sins"
        ],
        "emoji": "⚔️",
        "descriptor": "приключенческое",
        "episodes": 96,
        "episodes_text": "96 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      }
    ],
    "movies": [
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Grave of the Fireflies",
        "aliases": [
          "Grave of the Fireflies"
        ],
        "emoji": "🪦",
        "descriptor": "трагичное",
        "episodes": null,
        "episodes_text": "1 фильм",
        "format": "MOVIE",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Your Name",
        "aliases": [
          "Your Name"
        ],
        "emoji": "☄️",
        "descriptor": "романтичное",
        "episodes": null,
        "episodes_text": "1 фильм",
        "format": "MOVIE",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "The Tunnel to Summer, the Exit of Goodbyes",
        "aliases": [
          "The Tunnel to Summer, the Exit of Goodbyes"
        ],
        "emoji": "🎬",
        "descriptor": "романтичное",
        "episodes": null,
        "episodes_text": "1 фильм",
        "format": "MOVIE",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Weathering with You / Дитя погоды",
        "aliases": [
          "Weathering with You / Дитя погоды"
        ],
        "emoji": "🌧️",
        "descriptor": "романтичное",
        "episodes": null,
        "episodes_text": "1 фильм",
        "format": "MOVIE",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "5 Centimeters per Second",
        "aliases": [
          "5 Centimeters per Second"
        ],
        "emoji": "🚄",
        "descriptor": "меланхоличное",
        "episodes": null,
        "episodes_text": "1 фильм",
        "format": "MOVIE",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "I Want to Eat Your Pancreas",
        "aliases": [
          "I Want to Eat Your Pancreas"
        ],
        "emoji": "🩷",
        "descriptor": "душераздирающее",
        "episodes": null,
        "episodes_text": "1 фильм",
        "format": "MOVIE",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Сквозь слёзы я притворяюсь кошкой",
        "aliases": [
          "Сквозь слёзы я притворяюсь кошкой"
        ],
        "emoji": "🐈",
        "descriptor": "трогательное",
        "episodes": null,
        "episodes_text": "1 фильм",
        "format": "MOVIE",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Chainsaw Man – The Movie: Reze Arc",
        "aliases": [
          "Chainsaw Man – The Movie: Reze Arc"
        ],
        "emoji": "💣",
        "descriptor": "боевое",
        "episodes": null,
        "episodes_text": "1 фильм",
        "format": "MOVIE",
        "year": null,
        "cover": null,
        "note": ""
      }
    ],
    "completed": [
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Jujutsu Kaisen",
        "aliases": [
          "Jujutsu Kaisen"
        ],
        "emoji": "👊",
        "descriptor": "динамичное",
        "episodes": 59,
        "episodes_text": "59 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Tokyo Ghoul",
        "aliases": [
          "Tokyo Ghoul"
        ],
        "emoji": "🩸",
        "descriptor": "мрачное",
        "episodes": 48,
        "episodes_text": "48 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Berserk",
        "aliases": [
          "Berserk"
        ],
        "emoji": "⚔️",
        "descriptor": "жестокое",
        "episodes": 25,
        "episodes_text": "25 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Death Note",
        "aliases": [
          "Death Note"
        ],
        "emoji": "📓",
        "descriptor": "интеллектуальное",
        "episodes": 37,
        "episodes_text": "37 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "A Silent Voice",
        "aliases": [
          "A Silent Voice"
        ],
        "emoji": "💔",
        "descriptor": "эмоциональное",
        "episodes": null,
        "episodes_text": "1 фильм",
        "format": "MOVIE",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Spirited Away",
        "aliases": [
          "Spirited Away"
        ],
        "emoji": "🐉",
        "descriptor": "сказочное",
        "episodes": null,
        "episodes_text": "1 фильм",
        "format": "MOVIE",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Evangelion",
        "aliases": [
          "Evangelion"
        ],
        "emoji": "🤖",
        "descriptor": "психологическое",
        "episodes": 26,
        "episodes_text": "26 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Vinland Saga",
        "aliases": [
          "Vinland Saga"
        ],
        "emoji": "⚔️",
        "descriptor": "серьёзное",
        "episodes": 48,
        "episodes_text": "48 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Укрась прощальное утро цветами обещания",
        "aliases": [
          "Укрась прощальное утро цветами обещания"
        ],
        "emoji": "🌸",
        "descriptor": "эмоциональное",
        "episodes": null,
        "episodes_text": "1 фильм",
        "format": "MOVIE",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Another",
        "aliases": [
          "Another"
        ],
        "emoji": "👁️",
        "descriptor": "жуткое",
        "episodes": 12,
        "episodes_text": "12 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Bocchi the Rock!",
        "aliases": [
          "Bocchi the Rock!"
        ],
        "emoji": "🎸",
        "descriptor": "лёгкое",
        "episodes": 12,
        "episodes_text": "12 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Howl’s Moving Castle",
        "aliases": [
          "Howl’s Moving Castle"
        ],
        "emoji": "🏰",
        "descriptor": "сказочное",
        "episodes": null,
        "episodes_text": "1 фильм",
        "format": "MOVIE",
        "year": null,
        "cover": null,
        "note": ""
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Suzume",
        "aliases": [
          "Suzume"
        ],
        "emoji": "🚪",
        "descriptor": "красивое",
        "episodes": null,
        "episodes_text": "1 фильм",
        "format": "MOVIE",
        "year": null,
        "cover": null,
        "note": ""
      }
    ],
    "paused": [
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "K-On!",
        "aliases": [
          "K-On!"
        ],
        "emoji": "🎸",
        "descriptor": "уютное",
        "episodes": 39,
        "episodes_text": "39 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": "Остановился: 2 сезон, 1 серия"
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Naruto",
        "aliases": [
          "Naruto"
        ],
        "emoji": "🍥",
        "descriptor": "приключенческое",
        "episodes": 220,
        "episodes_text": "220 эпизодов",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": "Остановился: 3 серия"
      },
      {
        "anilist_id": null,
        "mal_id": null,
        "title": "Your Lie in April",
        "aliases": [
          "Your Lie in April"
        ],
        "emoji": "🎹",
        "descriptor": "эмоциональное",
        "episodes": 22,
        "episodes_text": "22 эпизода",
        "format": "TV",
        "year": null,
        "cover": null,
        "note": "Остановился: 4 серия"
      }
    ]
  },
  "next_queue": [
    {
      "anilist_id": null,
      "title": "Girls Band Cry"
    },
    {
      "anilist_id": null,
      "title": "Future Diary"
    },
    {
      "anilist_id": null,
      "title": "Attack on Titan"
    },
    {
      "anilist_id": null,
      "title": "Girls’ Last Tour"
    },
    {
      "anilist_id": null,
      "title": "Code Geass"
    },
    {
      "anilist_id": null,
      "title": "Chainsaw Man"
    }
  ]
};

const OVERRIDES = {
  "watamote": ["🥀","неловкое"], "chainsmoker cat": ["🐈‍⬛","странное"],
  "girls band cry": ["🥁","эмоциональное"], "attack on titan": ["🧱","эпичное"],
  "chainsaw man": ["🪚","безумное"], "code geass": ["🧠","напряжённое"],
  "hellsing ultimate": ["🧛","кровавое"], "inuyashiki": ["🤖","мрачное"],
  "hunter x hunter": ["⚡️","приключенческое"], "akame ga kill": ["🗡️","трагичное"],
  "solo leveling": ["🆙","динамичное"], "serial experiments lain": ["🌀","странное"],
  "oshi no ko": ["🌟","драматичное"], "call of the night": ["🌙","атмосферное"],
  "witch hat atelier": ["🧙","сказочное"], "devil may cry": ["😈","драйвовое"],
  "gurren lagann": ["🔥","эпичное"], "takopi's original sin": ["🐙","тяжёлое"],
  "monster": ["🕵️","психологическое"], "steins;gate": ["⏳","запутанное"],
  "fullmetal alchemist: brotherhood": ["⚗️","масштабное"], "clannad": ["🌸","душевное"],
  "terror in resonance": ["💣","меланхоличное"], "future diary": ["📓","безумное"],
  "frieren: beyond journey's end": ["🧝‍♀️","спокойное"], "my dress-up darling": ["👗","лёгкое"],
  "girls' last tour": ["🛵","меланхоличное"], "86 eighty-six": ["🤖","военное"],
  "86 eighty six": ["🤖","военное"], "erased": ["⏪","напряжённое"],
  "parasyte: the maxim": ["🦠","мрачное"], "black clover": ["🍀","приключенческое"],
  "lucky☆star": ["⭐️","повседневное"], "kakegurui": ["🎲","безумное"],
  "saga of tanya the evil": ["⚔️","военное"], "youjo senki": ["⚔️","военное"],
  "hibike! euphonium": ["🎺","душевное"], "rascal does not dream of bunny girl senpai": ["🐰","романтичное"],
  "beck: mongolian chop squad": ["🎸","вдохновляющее"], "the seven deadly sins": ["⚔️","приключенческое"],
  "grave of the fireflies": ["🪦","трагичное"], "your name": ["☄️","романтичное"],
  "the tunnel to summer, the exit of goodbyes": ["🎬","романтичное"], "weathering with you": ["🌧️","романтичное"],
  "5 centimeters per second": ["🚄","меланхоличное"], "i want to eat your pancreas": ["🩷","душераздирающее"],
  "a whisker away": ["🐈","трогательное"], "chainsaw man - the movie: reze arc": ["💣","боевое"],
  "jujutsu kaisen": ["👊","динамичное"], "tokyo ghoul": ["🩸","мрачное"],
  "berserk": ["⚔️","жестокое"], "death note": ["📓","интеллектуальное"],
  "a silent voice": ["💔","эмоциональное"], "spirited away": ["🐉","сказочное"],
  "neon genesis evangelion": ["🤖","психологическое"], "evangelion": ["🤖","психологическое"],
  "vinland saga": ["⚔️","серьёзное"], "another": ["👁️","жуткое"],
  "bocchi the rock!": ["🎸","лёгкое"], "howl's moving castle": ["🏰","сказочное"],
  "suzume": ["🚪","красивое"], "k-on!": ["🎸","уютное"],
  "naruto": ["🍥","приключенческое"], "your lie in april": ["🎹","эмоциональное"]
};

const SEARCH_QUERY = `
query ($search: String!) {
  Page(page: 1, perPage: 6) {
    media(search: $search, type: ANIME, isAdult: false, sort: [SEARCH_MATCH, POPULARITY_DESC]) {
      id idMal
      title { romaji english native }
      format status episodes seasonYear genres
      tags { name rank }
      coverImage { medium large color }
    }
  }
}`;

const COVER_QUERY = `
query ($search: String!) {
  Page(page: 1, perPage: 6) {
    media(search: $search, type: ANIME, isAdult: false, sort: [SEARCH_MATCH, POPULARITY_DESC]) {
      id idMal
      title { romaji english native }
      format episodes seasonYear
      coverImage { medium large }
    }
  }
}`;

let latestData = null;
let pendingAdd = null;
let searchResults = [];
const $ = (s) => document.querySelector(s);
const clone = (x) => JSON.parse(JSON.stringify(x));

function esc(v) { return String(v ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"); }
function setMessage(text,type="") { const e=$("#message"); e.textContent=text; e.className=`message ${type}`; }
function normalize(t) { return String(t||"").normalize("NFKC").toLowerCase().replaceAll("×","x").replaceAll("’","'").replace(/[–—]/g,"-").replace(/[^\p{L}\p{N}_\s'!☆;:\-]/gu," ").replace(/\s+/g," ").trim(); }
function loadData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) { latestData=clone(DEFAULT_DATA); saveData(); return; }
  try { latestData=JSON.parse(raw); } catch { latestData=clone(DEFAULT_DATA); saveData(); }
  latestData.sections ||= {}; Object.keys(SECTION_TITLES).forEach(k => latestData.sections[k] ||= []); latestData.next_queue ||= [];
}
function saveData() { localStorage.setItem(STORAGE_KEY, JSON.stringify(latestData)); }
function pickTitle(m) { return m?.title?.english || m?.title?.romaji || m?.title?.native || "Без названия"; }
function aliasesForMedia(m) { return [m?.title?.english,m?.title?.romaji,m?.title?.native].filter(Boolean); }
function episodesText(n,isMovie) {
  if (isMovie) return "1 фильм"; if (n == null) return "количество не объявлено";
  n=Number(n); const last2=n%100,last=n%10; let w="эпизодов";
  if (!(last2>=11&&last2<=14)) { if(last===1)w="эпизод"; else if(last>=2&&last<=4)w="эпизода"; }
  return `${n} ${w}`;
}
function termsFor(m) { return [...(m.genres||[]),...(m.tags||[]).map(t=>t.name||"")].filter(Boolean).map(x=>x.toLowerCase()); }
function has(terms,...needles) { return needles.some(n=>terms.some(t=>t.includes(n.toLowerCase()))); }
function chooseStyle(m) {
  for (const t of aliasesForMedia(m)) { const o=OVERRIDES[normalize(t)]; if(o) return {emoji:o[0],descriptor:o[1]}; }
  const terms=termsFor(m), titleText=aliasesForMedia(m).join(" ").toLowerCase();
  const rules=[
    [["chainsaw"],"🪚"], [["cat","cats","nekomimi"],"🐈"], [["vampire"],"🧛"], [["gambling"],"🎲"],
    [["time travel","time manipulation"],"⏳"], [["band","music"],"🎸"], [["idol"],"🌟"], [["military","war"],"⚔️"],
    [["mecha","robot"],"🤖"], [["cyberpunk"],"🌃"], [["space"],"🚀"], [["detective","mystery"],"🕵️"],
    [["magic","witch"],"🧙"], [["demons","demon"],"😈"], [["samurai","swordplay"],"🗡️"], [["ninja"],"🥷"],
    [["sports"],"🏆"], [["cooking","food"],"🍜"], [["school"],"🎒"], [["post-apocalyptic"],"🌆"],
    [["horror"],"👁️"], [["romance"],"🌸"], [["fantasy"],"🧙"], [["adventure"],"⚡️"], [["comedy"],"😄"],
    [["drama"],"🎭"], [["action"],"🔥"]
  ];
  let emoji="🎬";
  for (const [ns,e] of rules) { if(ns.some(n=>titleText.includes(n)) || has(terms,...ns)){emoji=e;break;} }
  let descriptor="интересное";
  if(has(terms,"tragedy","tragic")) descriptor="трагичное";
  else if(has(terms,"psychological")&&has(terms,"thriller","mystery")) descriptor="напряжённое";
  else if(has(terms,"horror")) descriptor="жуткое";
  else if(has(terms,"military","war")) descriptor="военное";
  else if(has(terms,"cyberpunk")) descriptor="мрачное";
  else if(has(terms,"music")&&has(terms,"drama")) descriptor="эмоциональное";
  else if(has(terms,"slice of life")&&has(terms,"comedy")) descriptor="лёгкое";
  else if(has(terms,"romance")&&has(terms,"drama")) descriptor="романтичное";
  else if(has(terms,"psychological")) descriptor="психологическое";
  else if(has(terms,"mystery","thriller")) descriptor="напряжённое";
  else if(has(terms,"adventure")) descriptor="приключенческое";
  else if(has(terms,"fantasy")) descriptor="сказочное";
  else if(has(terms,"romance")) descriptor="романтичное";
  else if(has(terms,"comedy")) descriptor="лёгкое";
  else if(has(terms,"drama")) descriptor="драматичное";
  else if(has(terms,"action")) descriptor="динамичное";
  return {emoji,descriptor};
}
function entryNames(e) {
  const out=new Set(); [e.title,...(e.aliases||[])].filter(Boolean).forEach(raw=>{out.add(normalize(raw)); String(raw).split(/\s*\/\s*/).forEach(p=>out.add(normalize(p)));}); return out;
}
function findDuplicates(m) {
  const id=m.id, names=new Set([...aliasesForMedia(m),pickTitle(m)].map(normalize)); const found=[];
  Object.entries(latestData.sections).forEach(([section,entries])=>entries.forEach((e,index)=>{
    const sameId=id!=null && e.anilist_id===id; const ens=entryNames(e); const sameName=[...names].some(n=>ens.has(n));
    if(sameId||sameName) found.push({section,index,entry:e});
  })); return found;
}
function removeSame(entry) {
  const id=entry.anilist_id, names=entryNames(entry);
  Object.keys(SECTION_TITLES).forEach(section=> latestData.sections[section]=latestData.sections[section].filter(e=>{
    const sameId=id!=null&&e.anilist_id===id; const en=entryNames(e); const sameName=[...names].some(n=>en.has(n)); return !(sameId||sameName);
  }));
}
function buildEntry(m,emoji,descriptor){ const s=chooseStyle(m), movie=m.format==="MOVIE"; return {anilist_id:m.id,mal_id:m.idMal,title:pickTitle(m),aliases:aliasesForMedia(m),emoji:(emoji||s.emoji).trim()||s.emoji,descriptor:(descriptor||s.descriptor).trim()||s.descriptor,episodes:m.episodes,episodes_text:episodesText(m.episodes,movie),format:m.format,year:m.seasonYear,cover:m.coverImage?.large||m.coverImage?.medium||null,note:"",cover_checked: !!(m.coverImage?.large||m.coverImage?.medium)}; }

function renderAll(){ renderQueue(); renderLists(); }
function entrySearchPhrases(e){
  const raw=[e.title,...(e.aliases||[])].filter(Boolean);
  const phrases=[];
  raw.forEach(v=>{
    const txt=String(v);
    phrases.push(txt);
    txt.split(/\s*\/\s*/).forEach(p=>phrases.push(p));
  });
  return [...new Set(phrases.map(x=>x.trim()).filter(Boolean))];
}
function scoreMediaMatch(media, entry){
  const mediaNames=[pickTitle(media), ...(aliasesForMedia(media)||[])].map(normalize);
  const entryNames=entrySearchPhrases(entry).map(normalize);
  let score=0;
  for(const en of entryNames){
    for(const mn of mediaNames){
      if(!en || !mn) continue;
      if(en===mn) score=Math.max(score,120);
      else if(mn.includes(en) || en.includes(mn)) score=Math.max(score,70);
      else {
        const parts=en.split(' ');
        const hit=parts.filter(p=>p.length>2 && mn.includes(p)).length;
        if(hit>=2) score=Math.max(score,45+hit*5);
      }
    }
  }
  if(entry.episodes && media.episodes && Number(entry.episodes)===Number(media.episodes)) score += 10;
  if(entry.format && media.format && entry.format===media.format) score += 5;
  return score;
}
async function anilistFetch(query, variables){
  const response=await fetch("https://graphql.anilist.co",{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify({query,variables})});
  const payload=await response.json();
  if(!response.ok || payload.errors) throw new Error(payload?.errors?.[0]?.message || `Ошибка AniList ${response.status}`);
  return payload;
}
async function tryFillCoverForEntry(entry){
  if(entry.cover) return true;
  const phrases=entrySearchPhrases(entry).sort((a,b)=>b.length-a.length);
  for(const phrase of phrases){
    try{
      const payload=await anilistFetch(COVER_QUERY,{search:phrase});
      const list=payload?.data?.Page?.media || [];
      if(!list.length) continue;
      let best=null, bestScore=0;
      for(const media of list){
        const score=scoreMediaMatch(media,entry);
        if(score>bestScore){ bestScore=score; best=media; }
      }
      if(best && bestScore>=55){
        entry.cover = best.coverImage?.large || best.coverImage?.medium || entry.cover || null;
        entry.anilist_id ??= best.id ?? null;
        entry.mal_id ??= best.idMal ?? null;
        entry.year ??= best.seasonYear ?? null;
        entry.format ??= best.format ?? entry.format;
        if(!entry.aliases || !entry.aliases.length) entry.aliases = aliasesForMedia(best);
        entry.cover_checked = true;
        return !!entry.cover;
      }
    } catch(err){
      console.warn('Cover fetch failed for', entry.title, err);
    }
  }
  entry.cover_checked = true;
  return false;
}
async function enrichMissingCovers(){
  const entries=[];
  Object.keys(SECTION_TITLES).forEach(section=>latestData.sections[section].forEach(entry=>{ if(!entry.cover) entries.push(entry); }));
  if(!entries.length){ setMessage('У всех карточек уже есть обложки.', 'ok'); return; }
  let ok=0, fail=0;
  setMessage(`Подтягиваю обложки… 0 / ${entries.length}`);
  for(let i=0;i<entries.length;i++){
    const success = await tryFillCoverForEntry(entries[i]);
    if(success) ok++; else fail++;
    saveData();
    renderLists();
    setMessage(`Подтягиваю обложки… ${i+1} / ${entries.length}. Найдено: ${ok}, без результата: ${fail}`);
  }
  setMessage(`Готово: найдено ${ok} обложек, без результата ${fail}.`, ok? 'ok' : '');
}
function renderQueue(){ const q=latestData.next_queue||[], el=$("#nextQueue"); el.innerHTML=q.length?q.map((x,i)=>`<div class="queue-chip"><span>${i+1}. ${esc(x.title)}</span><button onclick="reorderQueue(${i},${i-1})" ${i===0?'disabled':''}>↑</button><button onclick="reorderQueue(${i},${i+1})" ${i===q.length-1?'disabled':''}>↓</button></div>`).join(""):'<div class="empty">Очередь пока пустая.</div>'; }
function renderLists(){ const order=["watching","planned","movies","completed","paused"]; $("#lists").innerHTML=order.map(section=>`<section class="anime-section"><h2>${esc(SECTION_TITLES[section])}</h2><div class="anime-grid">${latestData.sections[section].length?latestData.sections[section].map((e,i)=>animeCard(e,section,i)).join(""):'<div class="empty">Пусто.</div>'}</div></section>`).join(""); }
function animeCard(e,s,i){ const img=e.cover?`<img class="card-cover" src="${esc(e.cover)}" alt="">`:`<div class="card-cover placeholder"><span>${esc(e.emoji || "🎌")}</span></div>`; return `<article class="anime-card">${img}<div><div class="card-title">${esc(e.emoji)} ${esc(e.title)}</div><div class="card-line">${esc(e.episodes_text)} · ${esc(e.descriptor)}${e.year?` · ${e.year}`:""}</div>${e.note?`<div class="card-line">${esc(e.note)}</div>`:""}<div class="card-actions"><button onclick="openMove('${s}',${i})">Переместить</button><button onclick="editEntry('${s}',${i})">✏️ Изменить</button><button onclick="toggleQueue('${s}',${i})">🗓️ Далее</button><button class="danger" onclick="deleteEntry('${s}',${i})">Удалить</button></div></div></article>`; }

$("#searchForm").addEventListener("submit", async e=>{
  e.preventDefault(); const q=$("#searchInput").value.trim(); if(q.length<2)return setMessage("Введи хотя бы 2 символа.","error");
  setMessage("Ищу в AniList…"); $("#results").innerHTML="";
  try {
    let list=[];
    try { const payload=await anilistFetch(SEARCH_QUERY,{search:q}); list=payload?.data?.Page?.media||[]; } catch(anilistErr){ console.warn("AniList search failed",anilistErr); }
    if(!list.length){
      setMessage("AniList ничего не дал — пробую запасной поиск через MyAnimeList…");
      try { list=(await jikanSearchAnime(q)).map(jikanMediaLike); } catch(jikanErr){ console.warn("Jikan search failed",jikanErr); }
    }
    searchResults=await buildGroupedSearchResultsV9(list,q);
    if(!searchResults.length)return setMessage("Ничего не нашлось ни в AniList, ни в MyAnimeList.","error"); setMessage(`Нашлось: ${searchResults.length}`); renderResults();
  } catch(err) { setMessage(`Ошибка поиска: ${err.message}. Проверь интернет/VPN.`,"error"); }
});
function renderResults(){ $("#results").innerHTML=searchResults.map((r,i)=>{const m=r.media,cover=m.coverImage?.large||m.coverImage?.medium||"",format=r.is_movie?"Фильм":(m.format||"Anime"),dup=r.duplicate_sections.length?`<div class="duplicate-badge">Уже есть: ${esc(r.duplicate_sections.join(", "))}</div>`:""; const opts=r.is_movie?`<option value="movies">🎬 Фильмы посмотреть</option><option value="completed">✅ Посмотрел</option>`:`<option value="planned">📺 Посмотреть</option><option value="watching">▶️ Сейчас</option><option value="completed">✅ Посмотрел</option><option value="paused">⏸️ Отложено</option>`; return `<article class="result-card" data-result-index="${i}">${cover?`<img class="cover" src="${esc(cover)}" alt="">`:`<div class="cover"></div>`}<div class="result-main"><h3>${esc(r.display_title)}</h3><div class="meta">${esc(format)} · ${esc(r.episodes_text)}${m.seasonYear?` · ${m.seasonYear}`:""}</div>${dup}<div class="auto-fields"><input class="emoji-input" value="${esc(r.emoji)}" title="Можно поменять эмодзи"><input class="descriptor-input" value="${esc(r.descriptor)}" title="Можно поменять характеристику"></div><div class="result-actions"><select class="destination">${opts}</select><button onclick="addResult(${i})">Добавить</button></div></div></article>`;}).join(""); }
function addResult(i,force=false,destOverride=null){ const r=searchResults[i], card=document.querySelector(`[data-result-index="${i}"]`); const dest=destOverride||card.querySelector(".destination").value, emoji=card.querySelector(".emoji-input").value,descriptor=card.querySelector(".descriptor-input").value,dupes=findDuplicates(r.media); if(dupes.length&&!force){pendingAdd={i,emoji,descriptor,dest}; openDuplicateModal(r,dupes);return;} const entry=buildEntry(r.media,emoji,descriptor); if(dupes.length||force)removeSame(entry); latestData.sections[dest].push(entry); saveData(); renderAll(); setMessage(`${entry.emoji} ${entry.title} → ${SECTION_TITLES[dest]}`,"ok"); }
function openDuplicateModal(r,dupes){ $("#modalTitle").textContent=`${r.display_title} уже есть в списке`; $("#modalText").textContent=`Сейчас находится: ${dupes.map(d=>SECTION_TITLES[d.section]).join(", ")}. Переместить в другой раздел?`; const opts=r.is_movie?[["movies","🎬 Фильмы посмотреть"],["completed","✅ Посмотрел"]]:[["watching","▶️ Сейчас"],["planned","📺 Посмотреть"],["completed","✅ Посмотрел"],["paused","⏸️ Отложено"]]; $("#modalActions").innerHTML=opts.map(([k,l])=>`<button onclick="forceMovePending('${k}')">${l}</button>`).join(""); $("#modal").classList.remove("hidden"); }
function forceMovePending(dest){if(!pendingAdd)return; const p=pendingAdd; closeModal(); addResult(p.i,true,dest);}
function closeModal(){ $("#modal").classList.add("hidden"); pendingAdd=null; }
$("#modalCancel").addEventListener("click",closeModal); $("#modal").addEventListener("click",e=>{if(e.target===$("#modal"))closeModal();});
function openMove(source,index){ const e=latestData.sections[source][index]; $("#modalTitle").textContent=`Переместить ${e.title}`; $("#modalText").textContent=`Сейчас: ${SECTION_TITLES[source]}`; const opts=e.format==="MOVIE"?[["movies","🎬 Фильмы посмотреть"],["completed","✅ Посмотрел"]]:Object.entries(SECTION_TITLES).filter(([k])=>k!=="movies"); $("#modalActions").innerHTML=opts.filter(([k])=>k!==source).map(([k,l])=>`<button onclick="moveEntry('${source}',${index},'${k}')">${l}</button>`).join(""); $("#modal").classList.remove("hidden"); }
function moveEntry(source,index,dest){ const e=latestData.sections[source].splice(index,1)[0]; removeSame(e); latestData.sections[dest].push(e); saveData();closeModal();renderAll(); }
function editEntry(section,index){ const e=latestData.sections[section][index], emoji=prompt("Эмодзи:",e.emoji);if(emoji===null)return; const descriptor=prompt("Характеристика:",e.descriptor);if(descriptor===null)return; const note=prompt("Заметка (можно пусто):",e.note||"");if(note===null)return; e.emoji=emoji.trim();e.descriptor=descriptor.trim();e.note=note.trim();saveData();renderAll(); }
function deleteEntry(section,index){const e=latestData.sections[section][index];if(!confirm(`Удалить ${e.title} из списка?`))return;latestData.sections[section].splice(index,1);saveData();renderAll();}
function toggleQueue(section,index){const e=latestData.sections[section][index], key=e.anilist_id?`id:${e.anilist_id}`:`name:${normalize(e.title)}`, q=latestData.next_queue;const at=q.findIndex(x=>(x.anilist_id?`id:${x.anilist_id}`:`name:${normalize(x.title)}`)===key);if(at>=0){q.splice(at,1);setMessage("Убрано из очереди «Далее».","ok");}else{q.push({anilist_id:e.anilist_id||null,title:e.title});setMessage("Добавлено в очередь «Далее».","ok");}saveData();renderQueue();}
function reorderQueue(a,b){if(b<0||b>=latestData.next_queue.length)return;const q=latestData.next_queue;[q[a],q[b]]=[q[b],q[a]];saveData();renderQueue();}
function exportText(){const lines=["🎌 Аниме-лист",""];["watching","planned","movies","completed","paused"].forEach(s=>{lines.push(SECTION_TITLES[s]);const es=latestData.sections[s];if(es.length)es.forEach(e=>{lines.push(`${e.emoji||"🎬"} ${e.title} — ${e.episodes_text||"количество не объявлено"} — ${e.descriptor||"интересное"}`);if(e.note)lines.push(e.note);});else lines.push("—");lines.push("");});lines.push("🗓️ Далее");lines.push(latestData.next_queue.length?latestData.next_queue.map(x=>x.title).join(" → "):"—");return lines.join("\n");}
async function copyText(text){try{await navigator.clipboard.writeText(text);}catch{const ta=document.createElement("textarea");ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand("copy");ta.remove();}}
$("#coversBtn").addEventListener("click",()=>{enrichMissingCovers();});
$("#copyBtn").addEventListener("click",async()=>{await copyText(exportText());setMessage("Весь аниме-лист скопирован.","ok");});
$("#backupBtn").addEventListener("click",()=>{const blob=new Blob([JSON.stringify(latestData,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="anime-list-backup.json";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);setMessage("Резервная копия сохранена.","ok");});
$("#importBtn").addEventListener("click",()=>$("#importFile").click());
$("#importFile").addEventListener("change",async e=>{const f=e.target.files?.[0];if(!f)return;try{const x=JSON.parse(await f.text());if(!x.sections)throw new Error("Нет sections");latestData=x;Object.keys(SECTION_TITLES).forEach(k=>latestData.sections[k]||=[]);latestData.next_queue||=[];saveData();renderAll();setMessage("Список импортирован.","ok");}catch(err){setMessage(`Не удалось импортировать: ${err.message}`,"error");}e.target.value="";});

loadData(); renderAll();
setTimeout(()=>{ const missing=[]; Object.keys(SECTION_TITLES).forEach(section=>latestData.sections[section].forEach(e=>{ if(!e.cover) missing.push(e);})); if(missing.length){ setMessage(`Можно нажать «🖼️ Подтянуть обложки» — сайт попробует найти постеры для ${missing.length} старых записей.`); } }, 60);


// ========================= V3 =========================
const DETAIL_BY_ID_QUERY = `
query ($id: Int!) {
  Media(id: $id, type: ANIME) {
    id idMal
    title { romaji english native }
    synonyms format status episodes duration season seasonYear
    startDate { year month day } endDate { year month day }
    source genres averageScore meanScore popularity favourites
    description
    coverImage { extraLarge large medium color }
    bannerImage
    studios(isMain: true) { nodes { name } }
    trailer { id site thumbnail }
  }
}`;
const DETAIL_BY_MAL_QUERY = `
query ($idMal: Int!) {
  Media(idMal: $idMal, type: ANIME) {
    id idMal
    title { romaji english native }
    synonyms format status episodes duration season seasonYear
    startDate { year month day } endDate { year month day }
    source genres averageScore meanScore popularity favourites
    description
    coverImage { extraLarge large medium color }
    bannerImage
    studios(isMain: true) { nodes { name } }
    trailer { id site thumbnail }
  }
}`;

const QUERY_HINTS = {
  "grave of the fireflies": ["Hotaru no Haka", "Grave of the Fireflies"],
  "lucky☆star": ["Lucky Star", "Lucky☆Star"],
  "kakegurui / безумный азарт": ["Kakegurui"],
  "saga of tanya the evil / youjo senki": ["Youjo Senki", "Saga of Tanya the Evil"],
  "weathering with you / дитя погоды": ["Weathering With You", "Tenki no Ko"],
  "сквозь слёзы я притворяюсь кошкой": ["A Whisker Away", "Nakitai Watashi wa Neko wo Kaburu"],
  "укрась прощальное утро цветами обещания": ["Maquia: When the Promised Flower Blooms", "Sayonara no Asa ni Yakusoku no Hana wo Kazarou"],
  "i want to eat your pancreas": ["Kimi no Suizou wo Tabetai", "I Want to Eat Your Pancreas"],
  "5 centimeters per second": ["Byousoku 5 Centimeter", "5 Centimeters per Second"],
  "the tunnel to summer, the exit of goodbyes": ["Natsu e no Tunnel, Sayonara no Deguchi", "The Tunnel to Summer, the Exit of Goodbyes"]
};

function migrateV3(){
  Object.entries(latestData.sections).forEach(([section,entries])=>entries.forEach(e=>{
    if(e.score===undefined) e.score=null;
    if(e.progress===undefined || e.progress===null){
      e.progress = section==="completed" ? (e.format==="MOVIE" ? 1 : (e.episodes||0)) : 0;
    }
    if(e.mal_id===undefined) e.mal_id=null;
    if(e.anilist_id===undefined) e.anilist_id=null;
  }));
  saveData();
}

// override existing loadData so old saved data is upgraded automatically
function loadData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) { latestData=clone(DEFAULT_DATA); }
  else { try { latestData=JSON.parse(raw); } catch { latestData=clone(DEFAULT_DATA); } }
  latestData.sections ||= {}; Object.keys(SECTION_TITLES).forEach(k => latestData.sections[k] ||= []); latestData.next_queue ||= [];
  migrateV3();
}

function buildEntry(m,emoji,descriptor){
  const s=chooseStyle(m), movie=m.format==="MOVIE";
  return {anilist_id:m.id||null,mal_id:m.idMal||null,title:pickTitle(m),aliases:aliasesForMedia(m),emoji:(emoji||s.emoji).trim()||s.emoji,descriptor:(descriptor||s.descriptor).trim()||s.descriptor,episodes:m.episodes,episodes_text:episodesText(m.episodes,movie),format:m.format,year:m.seasonYear,cover:m.coverImage?.extraLarge||m.coverImage?.large||m.coverImage?.medium||null,note:"",score:null,progress:0};
}

function findDuplicates(m) {
  const id=m.id, mal=m.idMal, names=new Set([...aliasesForMedia(m),pickTitle(m)].map(normalize)); const found=[];
  Object.entries(latestData.sections).forEach(([section,entries])=>entries.forEach((e,index)=>{
    const sameId=id!=null && e.anilist_id===id;
    const sameMal=mal!=null && e.mal_id===mal;
    const ens=entryNames(e); const sameName=[...names].some(n=>ens.has(n));
    if(sameId||sameMal||sameName) found.push({section,index,entry:e});
  })); return found;
}
function removeSame(entry) {
  const id=entry.anilist_id, mal=entry.mal_id, names=entryNames(entry);
  Object.keys(SECTION_TITLES).forEach(section=> latestData.sections[section]=latestData.sections[section].filter(e=>{
    const sameId=id!=null&&e.anilist_id===id; const sameMal=mal!=null&&e.mal_id===mal; const en=entryNames(e); const sameName=[...names].some(n=>en.has(n)); return !(sameId||sameMal||sameName);
  }));
}

function entrySearchPhrases(e){
  const raw=[...(QUERY_HINTS[normalize(e.title)]||[]),e.title,...(e.aliases||[])].filter(Boolean);
  const phrases=[];
  raw.forEach(v=>{ const txt=String(v); phrases.push(txt); txt.split(/\s*\/\s*/).forEach(p=>phrases.push(p)); });
  // also try a cleaned version without decorative punctuation
  [...phrases].forEach(v=>phrases.push(v.replace(/[☆★]/g,' ').replace(/\s+/g,' ').trim()));
  return [...new Set(phrases.map(x=>x.trim()).filter(x=>x.length>1))];
}

function mediaNameList(media){ return [media?.title?.english,media?.title?.romaji,media?.title?.native,...(media?.synonyms||[])].filter(Boolean).map(normalize); }
function scoreMediaMatchV3(media,entry){
  const mediaNames=mediaNameList(media), ens=entrySearchPhrases(entry).map(normalize); let score=0;
  for(const en of ens) for(const mn of mediaNames){
    if(en===mn) score=Math.max(score,140);
    else if(en && mn && (mn.includes(en)||en.includes(mn))) score=Math.max(score,82);
    else { const ep=en.split(' ').filter(x=>x.length>2); const hit=ep.filter(p=>mn.includes(p)).length; if(hit>=2) score=Math.max(score,42+hit*9); }
  }
  if(entry.episodes && media.episodes && Number(entry.episodes)===Number(media.episodes)) score+=12;
  if(entry.format && media.format && String(entry.format).toUpperCase()===String(media.format).toUpperCase()) score+=6;
  return score;
}

let lastJikanAt=0;
async function jikanSearchAnime(q){
  const wait=Math.max(0,380-(Date.now()-lastJikanAt)); if(wait) await new Promise(r=>setTimeout(r,wait));
  const res=await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(q)}&limit=5&sfw=true`,{headers:{Accept:"application/json"}});
  lastJikanAt=Date.now(); if(!res.ok) throw new Error(`Jikan ${res.status}`); const p=await res.json(); return p.data||[];
}
function jikanMediaLike(j){
  return {id:null,idMal:j.mal_id,title:{english:j.title_english||j.title||null,romaji:j.title||null,native:j.title_japanese||null},synonyms:j.title_synonyms||[],format:(j.type||"").toUpperCase().replace("TV SPECIAL","SPECIAL"),episodes:j.episodes,seasonYear:j.year,genres:[...(j.genres||[]),...(j.themes||[]),...(j.demographics||[])].map(x=>x.name),tags:[...(j.themes||[]),...(j.demographics||[])].map(x=>({name:x.name,rank:60})),coverImage:{large:j.images?.webp?.large_image_url||j.images?.jpg?.large_image_url||null,medium:j.images?.webp?.image_url||j.images?.jpg?.image_url||null},description:j.synopsis||null,averageScore:j.score?Math.round(j.score*10):null,duration:null,status:j.status||null,source:j.source||null,studios:{nodes:(j.studios||[]).map(x=>({name:x.name}))}};
}
async function resolveEntryV3(entry,{needDetail=false}={}){
  if(entry.anilist_id){
    try{ const p=await anilistFetch(DETAIL_BY_ID_QUERY,{id:Number(entry.anilist_id)}); const m=p?.data?.Media; if(m){applyResolved(entry,m); return m;} }catch(e){console.warn(e);}
  }
  if(entry.mal_id){
    try{ const p=await anilistFetch(DETAIL_BY_MAL_QUERY,{idMal:Number(entry.mal_id)}); const m=p?.data?.Media; if(m){applyResolved(entry,m); return m;} }catch(e){console.warn(e);}
  }
  for(const phrase of entrySearchPhrases(entry)){
    try{
      const p=await anilistFetch(COVER_QUERY,{search:phrase}); const list=p?.data?.Page?.media||[];
      let best=null,bestScore=0; for(const m of list){const sc=scoreMediaMatchV3(m,entry);if(sc>bestScore){bestScore=sc;best=m;}}
      if(best&&bestScore>=55){ applyResolved(entry,best); saveData(); if(needDetail&&best.id){try{const d=await anilistFetch(DETAIL_BY_ID_QUERY,{id:Number(best.id)});if(d?.data?.Media){applyResolved(entry,d.data.Media);saveData();return d.data.Media;}}catch{}} return best; }
    }catch(err){console.warn('AniList resolve failed',phrase,err);}
  }
  // fallback: MyAnimeList via Jikan
  for(const phrase of entrySearchPhrases(entry).slice(0,4)){
    try{
      const list=await jikanSearchAnime(phrase); if(!list.length) continue;
      const media=list.map(jikanMediaLike); let best=null,bestScore=0; for(const m of media){const sc=scoreMediaMatchV3(m,entry);if(sc>bestScore){bestScore=sc;best=m;}}
      if(best&&bestScore>=48){ applyResolved(entry,best); saveData(); if(best.idMal){try{const d=await anilistFetch(DETAIL_BY_MAL_QUERY,{idMal:Number(best.idMal)});if(d?.data?.Media){applyResolved(entry,d.data.Media);saveData();return d.data.Media;}}catch{}} return best; }
    }catch(err){console.warn('Jikan resolve failed',phrase,err);}
  }
  return null;
}
function applyResolved(entry,m){
  entry.anilist_id ||= m.id||null; entry.mal_id ||= m.idMal||null;
  entry.cover ||= m.coverImage?.extraLarge||m.coverImage?.large||m.coverImage?.medium||null;
  entry.year ||= m.seasonYear||null; entry.aliases=[...new Set([...(entry.aliases||[]),...aliasesForMedia(m),...(m.synonyms||[])].filter(Boolean))];
  if(!entry.episodes && m.episodes){entry.episodes=m.episodes;entry.episodes_text=episodesText(m.episodes,m.format==="MOVIE");}
  if(!entry.format && m.format) entry.format=m.format;
}
async function tryFillCoverForEntry(entry){ const m=await resolveEntryV3(entry); return !!(entry.cover||m?.coverImage?.large); }

function cardProgress(e){
  const max=e.format==="MOVIE"?1:(Number(e.episodes)||0), p=Math.max(0,Number(e.progress)||0), pct=max?Math.min(100,(p/max)*100):0;
  if(!p && !max) return '';
  return `<div class="progress-line"><span>${p}${max?` / ${max}`:''}</span><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div></div>`;
}
function animeCard(e,s,i){
  const img=e.cover?`<img class="card-cover" src="${esc(e.cover)}" alt="${esc(e.title)}">`:`<div class="card-cover placeholder"><span>${esc(e.emoji||"🎌")}</span></div>`;
  const score=e.score?`<span class="user-score-badge">⭐ ${esc(e.score)}/10</span>`:'';
  return `<article class="anime-card"><button class="card-cover-click" onclick="openDetails('${s}',${i})" title="Открыть ${esc(e.title)}">${img}</button><div><div class="card-topline"><button class="card-title-button" onclick="openDetails('${s}',${i})">${esc(e.emoji)} ${esc(e.title)}</button>${score}</div><div class="card-line">${esc(e.episodes_text)} · ${esc(e.descriptor)}${e.year?` · ${e.year}`:""}</div>${cardProgress(e)}${e.note?`<div class="card-line">${esc(e.note)}</div>`:""}<div class="card-actions"><button onclick="openMove('${s}',${i})">Переместить</button><button onclick="editEntry('${s}',${i})">✏️ Изменить</button><button onclick="toggleQueue('${s}',${i})">🗓️ Далее</button><button class="danger" onclick="deleteEntry('${s}',${i})">Удалить</button></div></div></article>`;
}

function editEntry(section,index){
  const e=latestData.sections[section][index];
  const emoji=prompt("Эмодзи:",e.emoji);if(emoji===null)return;
  const descriptor=prompt("Характеристика:",e.descriptor);if(descriptor===null)return;
  const score=prompt("Оценка 1–10 (пусто = без оценки):",e.score??"");if(score===null)return;
  const progress=prompt("Сколько серий просмотрено:",e.progress??0);if(progress===null)return;
  const note=prompt("Заметка (можно пусто):",e.note||"");if(note===null)return;
  e.emoji=emoji.trim(); e.descriptor=descriptor.trim(); e.score=score.trim()===""?null:Math.min(10,Math.max(1,Number(score)||0)); e.progress=Math.max(0,Number(progress)||0); e.note=note.trim(); saveData(); renderAll();
}

let openedDetail=null;
function formatDateObj(d){if(!d?.year)return '—';return [d.day,d.month,d.year].filter(Boolean).map((x,i)=>i<2?String(x).padStart(2,'0'):x).join('.');}
function humanFormat(f){return ({TV:'TV-сериал',TV_SHORT:'Короткий TV',MOVIE:'Фильм',OVA:'OVA',ONA:'ONA',SPECIAL:'Спешл',MUSIC:'Клип'})[f]||f||'—';}
function humanStatus(s){return ({FINISHED:'Завершён',RELEASING:'Онгоинг',NOT_YET_RELEASED:'Анонс',CANCELLED:'Отменён',HIATUS:'Пауза'})[s]||s||'—';}
function stripHtmlText(s){const d=document.createElement('div');d.innerHTML=s||'';return (d.textContent||d.innerText||'').trim();}
function oldExternalSlug(title){
  const tr={
    'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'e','ж':'zh','з':'z','и':'i','й':'y','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f','х':'h','ц':'c','ч':'ch','ш':'sh','щ':'sch','ъ':'','ы':'y','ь':'','э':'e','ю':'yu','я':'ya'
  };
  return String(title||'anime').toLowerCase().split('').map(ch=>tr[ch]??ch).join('')
    .normalize('NFKD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').replace(/-+/g,'-') || 'anime';
}
function oldExternalDirectUrl(entry,media=null){
  const malId=Number(entry?.mal_id || media?.idMal || 0);
  if(!malId) return null;
  const title=(media&&pickTitle(media)) || entry?.title || 'anime';
  return `https://example.invalid/anime/${oldExternalSlug(title)}-${malId}`;
}
function updateOldExternalButton(entry,media=null){
  const btn=$('#detailWatchOldExternal'),hint=$('#detailWatchHint'); if(!btn)return;
  const url=oldExternalDirectUrl(entry,media);
  btn.disabled=false;
  btn.textContent='▶ Смотреть на OldExternal';
  btn.dataset.url=url||'';
  hint.textContent=url?'Откроется в новой вкладке.':'MAL ID пока не найден — попробую найти при нажатии.';
}
async function watchCurrentOnOldExternal(){
  if(!openedDetail)return;
  const {section,index}=openedDetail, entry=latestData.sections?.[section]?.[index]; if(!entry)return;
  const btn=$('#detailWatchOldExternal'),hint=$('#detailWatchHint');
  // Open a blank tab immediately so browsers do not block it after the async lookup.
  let tab=null; try{tab=window.open('about:blank','_blank');}catch{}
  btn.disabled=true; btn.textContent='Ищу на OldExternal…'; hint.textContent='Проверяю ID тайтла…';
  let media=null;
  try{
    if(!entry.mal_id) media=await resolveEntryV3(entry,{needDetail:true});
    const url=oldExternalDirectUrl(entry,media);
    saveData(); renderAll();
    if(url){
      if(tab) tab.location.href=url; else window.open(url,'_blank','noopener,noreferrer');
      hint.textContent='Открываю OldExternal…';
    }else{
      if(tab) tab.close();
      hint.textContent='Не удалось найти MAL ID для этого тайтла.';
    }
  }catch(err){
    if(tab) tab.close();
    hint.textContent='Не получилось подготовить ссылку. Попробуй «Обновить данные».';
    console.warn('OldExternal link error',err);
  }finally{
    btn.disabled=false; btn.textContent='▶ Смотреть на OldExternal';
  }
}
function detailSectionOptions(e,current){
  const opts=e.format==="MOVIE"?[['movies','🎬 Фильмы посмотреть'],['completed','✅ Посмотрел']]:Object.entries(SECTION_TITLES).filter(([k])=>k!=='movies');
  return opts.map(([k,l])=>`<option value="${k}" ${k===current?'selected':''}>${esc(l)}</option>`).join('');
}
async function openDetails(section,index){
  const e=latestData.sections[section][index]; openedDetail={section,index};
  $('#detailModal').classList.remove('hidden'); document.body.style.overflow='hidden';
  $('#detailTitle').textContent=e.title; $('#detailAltTitle').textContent='Загружаю информацию…'; $('#detailDescription').textContent='Загружаю информацию…';
  $('#detailUserScore').value=e.score??''; $('#detailProgress').value=e.progress??0; $('#detailSection').innerHTML=detailSectionOptions(e,section);
  renderDetailCover(e.cover,e.emoji); updateOldExternalButton(e,null); $('#detailHero').style.backgroundImage=''; $('#detailBadges').innerHTML=''; $('#detailFacts').innerHTML=''; $('#detailGenres').innerHTML=''; $('#detailExtra').innerHTML='';
  const m=await resolveEntryV3(e,{needDetail:true}); saveData(); renderAll();
  if(!openedDetail || openedDetail.section!==section) return;
  renderDetailPage(e,m,section);
}
function renderDetailCover(url,emoji){ const img=$('#detailCover'),ph=$('#detailCoverPlaceholder'); if(url){img.src=url;img.style.display='block';ph.style.display='none';}else{img.style.display='none';ph.style.display='grid';ph.textContent=emoji||'🎌';} }
function renderDetailPage(e,m,section){
  $('#detailTitle').textContent=m?pickTitle(m):e.title;
  const alts=m?[m.title?.romaji,m.title?.native].filter(x=>x&&x!==pickTitle(m)).join(' · '):''; $('#detailAltTitle').textContent=alts||e.title;
  const banner=m?.bannerImage; $('#detailHero').style.backgroundImage=banner?`url("${banner.replaceAll('"','%22')}")`:''; renderDetailCover(e.cover||m?.coverImage?.extraLarge||m?.coverImage?.large,e.emoji);
  const avg=m?.averageScore?`${(m.averageScore/10).toFixed(1)}/10`:null;
  $('#detailBadges').innerHTML=[avg?`<span class="detail-badge score">⭐ ${avg}</span>`:'',`<span class="detail-badge">${esc(humanFormat(m?.format||e.format))}</span>`,(m?.seasonYear||e.year)?`<span class="detail-badge">📅 ${esc(m?.seasonYear||e.year)}</span>`:'',m?.status?`<span class="detail-badge">${esc(humanStatus(m.status))}</span>`:''].join('');
  const studio=m?.studios?.nodes?.map(x=>x.name).filter(Boolean).join(', ')||'—';
  const ep=m?.episodes??e.episodes; const duration=m?.duration?`${m.duration} мин.`:'—';
  $('#detailFacts').innerHTML=[['Эпизоды',ep??'не объявлено'],['Длительность',duration],['Студия',studio],['Начало',formatDateObj(m?.startDate)],['Популярность',m?.popularity?Number(m.popularity).toLocaleString('ru-RU'):'—'],['MAL ID',e.mal_id||'—']].map(([a,b])=>`<div class="detail-fact"><small>${esc(a)}</small><strong>${esc(b)}</strong></div>`).join('');
  $('#detailGenres').innerHTML=(m?.genres||[]).map(g=>`<span class="genre-chip">${esc(g)}</span>`).join('');
  $('#detailDescription').textContent=stripHtmlText(m?.description)||'Описание пока не найдено.';
  $('#detailExtra').innerHTML=`<strong>Источник:</strong> ${esc(m?.source||'—')}<br><strong>Твоя характеристика:</strong> ${esc(e.descriptor||'—')}<br><strong>Твой эмодзи:</strong> ${esc(e.emoji||'—')}`;
  $('#detailUserScore').value=e.score??''; $('#detailProgress').max=ep||9999; $('#detailProgress').value=e.progress??0; $('#detailSection').innerHTML=detailSectionOptions(e,section); updateOldExternalButton(e,m);
}
function closeDetails(){ $('#detailModal').classList.add('hidden'); document.body.style.overflow=''; openedDetail=null; }
function saveDetailChanges(){
  if(!openedDetail)return; let {section,index}=openedDetail; const e=latestData.sections[section][index]; if(!e)return;
  const score=$('#detailUserScore').value; e.score=score===''?null:Number(score); e.progress=Math.max(0,Number($('#detailProgress').value)||0);
  const dest=$('#detailSection').value;
  if(dest!==section){ latestData.sections[section].splice(index,1); latestData.sections[dest].push(e); openedDetail={section:dest,index:latestData.sections[dest].length-1}; }
  saveData(); renderAll(); setMessage(`Сохранено: ${e.title}${e.score?` · ⭐ ${e.score}/10`:''}`,'ok'); closeDetails();
}

function xmlEsc(v){return String(v??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&apos;');}
function cdata(v){return String(v??'').replaceAll(']]>',']]]]><![CDATA[>');}
function csvCell(v){const s=String(v??'');return /[",\n]/.test(s)?`"${s.replaceAll('"','""')}"`:s;}
function sectionMalStatus(s){return ({watching:'Watching',planned:'Plan to Watch',movies:'Plan to Watch',completed:'Completed',paused:'On-Hold'})[s]||'Plan to Watch';}
function malSeriesType(e){const x=String(e.format||'TV').toUpperCase();return ({TV:'TV',TV_SHORT:'TV',MOVIE:'Movie',OVA:'OVA',ONA:'ONA',SPECIAL:'Special',MUSIC:'Music'})[x]||'TV';}
function downloadBlob(name,text,type){const blob=new Blob([text],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1200);}
function allEntriesWithSections(){const out=[];Object.entries(latestData.sections).forEach(([section,entries])=>entries.forEach(e=>out.push({section,e})));return out;}
async function ensureMalIds(){
  const missing=allEntriesWithSections().filter(x=>!x.e.mal_id); let ok=0;
  for(let i=0;i<missing.length;i++){setMessage(`Готовлю совместимый экспорт: ищу MAL ID ${i+1}/${missing.length}…`);const m=await resolveEntryV3(missing[i].e);if(missing[i].e.mal_id)ok++; if(i%5===0)saveData();}
  saveData(); return {attempted:missing.length,found:ok};
}
async function exportMalXml(){
  closeExport(); const ids=await ensureMalIds(); const rows=allEntriesWithSections().filter(x=>x.e.mal_id);
  const counts={watching:0,completed:0,paused:0,planned:0}; rows.forEach(({section})=>{if(section==='movies')counts.planned++;else if(counts[section]!==undefined)counts[section]++;});
  let xml=`<?xml version="1.0" encoding="UTF-8" ?>\n<!-- Created by Local Anime List -->\n<myanimelist>\n  <myinfo>\n    <user_export_type>1</user_export_type>\n    <user_total_anime>${rows.length}</user_total_anime>\n    <user_total_watching>${counts.watching}</user_total_watching>\n    <user_total_completed>${counts.completed}</user_total_completed>\n    <user_total_onhold>${counts.paused}</user_total_onhold>\n    <user_total_dropped>0</user_total_dropped>\n    <user_total_plantowatch>${counts.planned}</user_total_plantowatch>\n  </myinfo>\n`;
  rows.forEach(({section,e})=>{const p=Math.max(0,Number(e.progress)||0),eps=Number(e.episodes)||0,score=Number(e.score)||0;xml+=`  <anime>\n    <series_animedb_id>${e.mal_id}</series_animedb_id>\n    <series_title><![CDATA[${cdata(e.title)}]]></series_title>\n    <series_type>${xmlEsc(malSeriesType(e))}</series_type>\n    <series_episodes>${eps}</series_episodes>\n    <my_id>0</my_id>\n    <my_watched_episodes>${p}</my_watched_episodes>\n    <my_start_date>0000-00-00</my_start_date>\n    <my_finish_date>0000-00-00</my_finish_date>\n    <my_score>${score}</my_score>\n    <my_status>${xmlEsc(sectionMalStatus(section))}</my_status>\n    <my_rewatching>0</my_rewatching>\n    <my_rewatching_ep>0</my_rewatching_ep>\n    <my_last_updated>0</my_last_updated>\n    <my_tags><![CDATA[]]></my_tags>\n    <update_on_import>1</update_on_import>\n  </anime>\n`;});
  xml+='</myanimelist>\n'; downloadBlob('anime-list-MAL.xml',xml,'application/xml;charset=utf-8');
  const skipped=allEntriesWithSections().length-rows.length; setMessage(`MAL XML готов: ${rows.length} тайтлов${skipped?`, ${skipped} не удалось сопоставить`:''}.`,'ok'); renderAll();
}
function exportCsv(){
  closeExport(); const header=['Title','MAL ID','AniList ID','Section','Status','Score','Progress','Episodes','Format','Emoji','Descriptor','Notes']; const rows=[header];
  allEntriesWithSections().forEach(({section,e})=>rows.push([e.title,e.mal_id||'',e.anilist_id||'',SECTION_TITLES[section],sectionMalStatus(section),e.score||'',e.progress||0,e.episodes||'',e.format||'',e.emoji||'',e.descriptor||'',e.note||'']));
  downloadBlob('anime-list.csv','\uFEFF'+rows.map(r=>r.map(csvCell).join(',')).join('\n'),'text/csv;charset=utf-8'); setMessage('CSV сохранён.','ok');
}
function exportJsonFull(){closeExport();downloadBlob('anime-list-backup.json',JSON.stringify(latestData,null,2),'application/json;charset=utf-8');setMessage('JSON-копия сохранена.','ok');}
function openExport(){ $('#exportModal').classList.remove('hidden'); }
function closeExport(){ $('#exportModal').classList.add('hidden'); }

// Detail + export event bindings
$('#detailClose').addEventListener('click',closeDetails);
$('#detailModal').addEventListener('click',e=>{if(e.target===$('#detailModal'))closeDetails();});
$('#detailSave').addEventListener('click',saveDetailChanges);
$('#detailWatchOldExternal')?.addEventListener('click',watchCurrentOnOldExternal);
$('#progressMinus').addEventListener('click',()=>{$('#detailProgress').value=Math.max(0,(Number($('#detailProgress').value)||0)-1);});
$('#progressPlus').addEventListener('click',()=>{const max=Number($('#detailProgress').max)||9999;$('#detailProgress').value=Math.min(max,(Number($('#detailProgress').value)||0)+1);});
$('#exportBtn').addEventListener('click',openExport); $('#exportCancel').addEventListener('click',closeExport); $('#exportModal').addEventListener('click',e=>{if(e.target===$('#exportModal'))closeExport();});
$('#exportMalBtn').addEventListener('click',exportMalXml); $('#exportCsvBtn').addEventListener('click',exportCsv); $('#exportJsonBtn').addEventListener('click',exportJsonFull);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!$('#detailModal').classList.contains('hidden'))closeDetails();if(!$('#exportModal').classList.contains('hidden'))closeExport();}});

// upgrade existing state once more because original file called loadData() before this block was appended
migrateV3(); renderAll();

/* ===== V4: visual settings + safer OldExternal resolver ===== */
const SETTINGS_KEY = 'animeListUiSettingsV4';
const THEME_PRESETS = {
  midnight:{mode:'dark',bg:'#0b0d13',panel:'#151821',panel2:'#1b1f2a',line:'#2b3040',text:'#f5f7fb',muted:'#979dac',accent:'#ff6079',accent2:'#826cff'},
  oled:{mode:'dark',bg:'#000000',panel:'#0a0a0d',panel2:'#111116',line:'#24242c',text:'#f7f7fb',muted:'#8d8d99',accent:'#ff4f72',accent2:'#845cff'},
  graphite:{mode:'dark',bg:'#111214',panel:'#191b1f',panel2:'#22252b',line:'#343842',text:'#f2f2f3',muted:'#9c9fa6',accent:'#e4677d',accent2:'#8b84d9'},
  light:{mode:'light',bg:'#f3f5f9',panel:'#ffffff',panel2:'#edf0f6',line:'#d7dce6',text:'#191c24',muted:'#6f7684',accent:'#e84e69',accent2:'#695be7'}
};
const DEFAULT_SETTINGS = {
  theme:'midnight', accent:'#ff6079',accent2:'#826cff',bg:'#0b0d13',panel:'#151821',line:'#2b3040',text:'#f5f7fb',muted:'#979dac',
  radius:18, scale:100, poster:104, width:1480, columns:'auto',
  showProgress:true,showDescriptor:true,showActions:true,animations:true,glass:true,glow:true,showEmoji:true,
  preferRussian:true,showThemes:true,showReviews:true
};
let uiSettings = null;
let settingsSnapshot = null;
function loadSettings(){
  try{uiSettings={...DEFAULT_SETTINGS,...JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}')};}catch{uiSettings={...DEFAULT_SETTINGS};}
  if(THEME_PRESETS[uiSettings.theme] && uiSettings.theme!=='custom'){
    const p=THEME_PRESETS[uiSettings.theme];
    ['accent','accent2','bg','panel','line','text','muted'].forEach(k=>{ if(!uiSettings[k]) uiSettings[k]=p[k]; });
  }
  return uiSettings;
}
function saveSettings(){localStorage.setItem(SETTINGS_KEY,JSON.stringify(uiSettings));}
function derivePanel2(panel,bg){
  // Let CSS color-mix do most of the work; this is only a stable fallback variable.
  return panel || bg;
}
function applySettings(s=uiSettings){
  if(!s)return;
  const r=document.documentElement,b=document.body;
  const preset=THEME_PRESETS[s.theme]||null;
  const mode=preset?.mode || (s.theme==='light'?'light':'dark');
  r.dataset.uiMode=mode;
  const vals={
    '--bg':s.bg,'--panel':s.panel,'--panel2':derivePanel2(s.panel,s.bg),'--line':s.line||preset?.line||'#2b3040','--text':s.text||preset?.text||'#f5f7fb','--muted':s.muted||preset?.muted||'#979dac',
    '--accent':s.accent,'--accent2':s.accent2,'--radius':`${Number(s.radius)||18}px`,'--ui-scale':String((Number(s.scale)||100)/100),'--page-width':`${Number(s.width)||1480}px`,
    '--poster-w':`${Number(s.poster)||104}px`,'--poster-h':`${Math.round((Number(s.poster)||104)*1.414)}px`,'--glass-blur':s.glass?'18px':'0px','--panel-alpha':s.glass?'.88':'1'
  };
  Object.entries(vals).forEach(([k,v])=>r.style.setProperty(k,v));
  b.classList.toggle('no-animations',!s.animations); b.classList.toggle('no-glass',!s.glass); b.classList.toggle('no-glow',!s.glow);
  b.classList.toggle('hide-progress',!s.showProgress); b.classList.toggle('hide-descriptor',!s.showDescriptor); b.classList.toggle('hide-actions',!s.showActions); b.classList.toggle('hide-emoji',!s.showEmoji);
  b.classList.remove('cols-2','cols-3','cols-4'); if(['2','3','4'].includes(String(s.columns))) b.classList.add(`cols-${s.columns}`);
}
function setSettingsForm(s=uiSettings){
  $('#settingTheme').value=s.theme||'midnight'; $('#settingAccent').value=s.accent; $('#settingAccent2').value=s.accent2; $('#settingBg').value=s.bg; $('#settingPanel').value=s.panel;
  $('#settingRadius').value=s.radius; $('#settingScale').value=s.scale; $('#settingPoster').value=s.poster; $('#settingWidth').value=s.width; $('#settingColumns').value=String(s.columns||'auto');
  $('#settingProgress').checked=!!s.showProgress; $('#settingDescriptor').checked=!!s.showDescriptor; $('#settingActions').checked=!!s.showActions; $('#settingAnimations').checked=!!s.animations; $('#settingGlass').checked=!!s.glass; $('#settingGlow').checked=!!s.glow; $('#settingEmoji').checked=!!s.showEmoji;
  $('#settingPreferRu').checked=s.preferRussian!==false; $('#settingThemes').checked=s.showThemes!==false; $('#settingReviews').checked=s.showReviews!==false;
  updateSettingsLabels();
}
function updateSettingsLabels(){
  $('#radiusValue').textContent=`${$('#settingRadius').value}px`; $('#scaleValue').textContent=`${$('#settingScale').value}%`; $('#posterValue').textContent=`${$('#settingPoster').value}px`; $('#widthValue').textContent=`${$('#settingWidth').value}px`;
}
function readSettingsForm(){
  const current={...uiSettings};
  current.theme=$('#settingTheme').value; current.accent=$('#settingAccent').value; current.accent2=$('#settingAccent2').value; current.bg=$('#settingBg').value; current.panel=$('#settingPanel').value;
  current.radius=Number($('#settingRadius').value); current.scale=Number($('#settingScale').value); current.poster=Number($('#settingPoster').value); current.width=Number($('#settingWidth').value); current.columns=$('#settingColumns').value;
  current.showProgress=$('#settingProgress').checked; current.showDescriptor=$('#settingDescriptor').checked; current.showActions=$('#settingActions').checked; current.animations=$('#settingAnimations').checked; current.glass=$('#settingGlass').checked; current.glow=$('#settingGlow').checked; current.showEmoji=$('#settingEmoji').checked;
  current.preferRussian=$('#settingPreferRu').checked; current.showThemes=$('#settingThemes').checked; current.showReviews=$('#settingReviews').checked;
  const preset=THEME_PRESETS[current.theme]; if(preset){current.line=preset.line;current.text=preset.text;current.muted=preset.muted;}
  return current;
}
function previewSettings(){uiSettings=readSettingsForm(); applySettings(); updateSettingsLabels();}
function openSettings(){settingsSnapshot={...uiSettings};setSettingsForm(uiSettings);$('#settingsModal').classList.remove('hidden');document.body.style.overflow='hidden';}
function closeSettings(save=false){
  if(save){uiSettings=readSettingsForm();saveSettings();applySettings();}
  else if(settingsSnapshot){uiSettings={...settingsSnapshot};applySettings();}
  settingsSnapshot=null;$('#settingsModal').classList.add('hidden');document.body.style.overflow='';
}
function applyPresetToForm(name){
  const p=THEME_PRESETS[name]; if(!p)return;
  $('#settingAccent').value=p.accent;$('#settingAccent2').value=p.accent2;$('#settingBg').value=p.bg;$('#settingPanel').value=p.panel;
  previewSettings();
}
function resetSettings(){uiSettings={...DEFAULT_SETTINGS};setSettingsForm(uiSettings);applySettings();}

function renderHeroStats(){
  const el=$('#heroStats'); if(!el||!latestData)return;
  const entries=Object.values(latestData.sections||{}).flat(); const watched=latestData.sections?.completed?.length||0; const scored=entries.filter(e=>Number(e.score)>0).length;
  const progress=entries.reduce((n,e)=>n+(Number(e.progress)||0),0);
  el.innerHTML=`<span class="hero-stat"><b>${entries.length}</b> тайтлов</span><span class="hero-stat"><b>${watched}</b> просмотрено</span><span class="hero-stat"><b>${scored}</b> оценено</span><span class="hero-stat"><b>${progress}</b> серий отмечено</span>`;
}
const _renderAllV3 = renderAll;
renderAll = function(){ _renderAllV3(); renderHeroStats(); };

// Card markup with hooks for visibility settings.
animeCard = function(e,s,i){
  const img=e.cover?`<img class="card-cover" src="${esc(e.cover)}" alt="${esc(e.title)}">`:`<div class="card-cover placeholder"><span>${esc(e.emoji||"🎌")}</span></div>`;
  const score=e.score?`<span class="user-score-badge">⭐ ${esc(e.score)}/10</span>`:'';
  return `<article class="anime-card"><button class="card-cover-click" onclick="openDetails('${s}',${i})" title="Открыть ${esc(e.title)}">${img}</button><div><div class="card-topline"><button class="card-title-button" onclick="openDetails('${s}',${i})"><span class="entry-emoji">${esc(e.emoji)} </span>${esc(e.title)}</button>${score}</div><div class="card-line">${esc(e.episodes_text)}<span class="descriptor-text"> · ${esc(e.descriptor)}</span>${e.year?` · ${e.year}`:""}</div>${cardProgress(e)}${e.note?`<div class="card-line">${esc(e.note)}</div>`:""}<div class="card-actions"><button onclick="openMove('${s}',${i})">Переместить</button><button onclick="editEntry('${s}',${i})">✏️ Изменить</button><button onclick="toggleQueue('${s}',${i})">🗓️ Далее</button><button class="danger" onclick="deleteEntry('${s}',${i})">Удалить</button></div></div></article>`;
};

async function shikimoriRussianByMal(malId){
  if(!malId)return null;
  const ctl=new AbortController(); const timer=setTimeout(()=>ctl.abort(),7000);
  try{
    const res=await fetch(`https://shikimori.one/api/animes/${encodeURIComponent(malId)}`,{headers:{'Accept':'application/json'},signal:ctl.signal});
    if(!res.ok)throw new Error(`Shikimori ${res.status}`); const j=await res.json();
    return (j?.russian||j?.name||'').trim()||null;
  }finally{clearTimeout(timer);}
}
function titleLooksRussian(t){return /[А-Яа-яЁё]/.test(String(t||''));}
async function resolveOldExternalUrlV4(entry,media=null){
  if(entry?.oldexternal_url)return entry.oldexternal_url;
  if(!entry?.mal_id) await resolveEntryV3(entry,{needDetail:true});
  const malId=Number(entry?.mal_id||media?.idMal||0); if(!malId)return null;
  let ru=entry.oldexternal_russian_title||null;
  if(!ru && titleLooksRussian(entry.title))ru=entry.title.split('/')[0].trim();
  if(!ru){
    try{ru=await shikimoriRussianByMal(malId);}catch(err){console.warn('Shikimori title lookup failed',err);}
  }
  if(!ru)return null;
  entry.oldexternal_russian_title=ru;
  entry.oldexternal_url=`https://example.invalid/anime/${oldExternalSlug(ru)}-${malId}`;
  saveData();
  return entry.oldexternal_url;
}
const _legacyOldExternalClickV4 = watchCurrentOnOldExternal;
$('#detailWatchOldExternal')?.removeEventListener('click',_legacyOldExternalClickV4);

updateOldExternalButton = function(entry,media=null){
  const btn=$('#detailWatchOldExternal'),hint=$('#detailWatchHint'); if(!btn)return;
  btn.disabled=false; btn.textContent='▶ Смотреть на OldExternal'; btn.dataset.url=entry?.oldexternal_url||'';
  hint.textContent=entry?.oldexternal_url?'Ссылка уже подготовлена.':'Сначала сверю русское название, чтобы не отправить тебя на 404.';
};
async function openOldExternalCatalogFallback(){
  if(!openedDetail)return; const {section,index}=openedDetail,entry=latestData.sections?.[section]?.[index];if(!entry)return;
  try{await copyText(entry.oldexternal_russian_title||entry.title);}catch{}
  window.open('https://example.invalid/catalog','_blank','noopener,noreferrer');
  $('#detailWatchHint').textContent='Открыл каталог OldExternal и скопировал название тайтла — вставь его в поиск.';
}
watchCurrentOnOldExternal = async function(){
  if(!openedDetail)return;
  const {section,index}=openedDetail, entry=latestData.sections?.[section]?.[index]; if(!entry)return;
  const btn=$('#detailWatchOldExternal'),hint=$('#detailWatchHint'); let tab=null; try{tab=window.open('about:blank','_blank');}catch{}
  btn.disabled=true;btn.textContent='Ищу точную страницу…';hint.textContent='Сверяю MAL ID и русское название…';
  try{
    let media=null;if(!entry.mal_id)media=await resolveEntryV3(entry,{needDetail:true});
    const url=await resolveOldExternalUrlV4(entry,media);saveData();renderAll();
    if(url){if(tab)tab.location.href=url;else window.open(url,'_blank','noopener,noreferrer');hint.textContent='Открываю OldExternal по русскому slug + MAL ID.';}
    else{if(tab)tab.close();await openOldExternalCatalogFallback();}
  }catch(err){if(tab)tab.close();console.warn('OldExternal V4 resolver failed',err);await openOldExternalCatalogFallback();}
  finally{btn.disabled=false;btn.textContent='▶ Смотреть на OldExternal';}
};

$('#detailWatchOldExternal')?.addEventListener('click',watchCurrentOnOldExternal);

// Settings bindings
$('#settingsBtn').addEventListener('click',openSettings); $('#settingsClose').addEventListener('click',()=>closeSettings(false)); $('#settingsCancel').addEventListener('click',()=>closeSettings(false)); $('#settingsSave').addEventListener('click',()=>closeSettings(true)); $('#settingsReset').addEventListener('click',resetSettings);
$('#settingsModal').addEventListener('click',e=>{if(e.target===$('#settingsModal'))closeSettings(false);});
['settingAccent','settingAccent2','settingBg','settingPanel','settingRadius','settingScale','settingPoster','settingWidth','settingColumns','settingProgress','settingDescriptor','settingActions','settingAnimations','settingGlass','settingGlow','settingEmoji','settingPreferRu','settingThemes','settingReviews'].forEach(id=>$('#'+id).addEventListener('input',()=>{if(['settingAccent','settingAccent2','settingBg','settingPanel'].includes(id))$('#settingTheme').value='custom';previewSettings();}));
$('#settingTheme').addEventListener('change',e=>{if(e.target.value!=='custom')applyPresetToForm(e.target.value);else previewSettings();});
$('#detailOldExternalFallback')?.addEventListener('click',openOldExternalCatalogFallback);

// Init V4 after all older migration code.
loadSettings();applySettings();renderAll();
const _oldKeydownV4=e=>{if(e.key==='Escape'&&!$('#settingsModal').classList.contains('hidden'))closeSettings(false);};document.addEventListener('keydown',_oldKeydownV4);

/* ===== V5: custom editing, RU descriptions, OP/ED links, compact MAL reviews ===== */
let editTargetV5 = null;
let detailEnglishV5 = '';
let detailRussianV5 = '';
let detailRuSourceV5 = '';
let detailExtrasTokenV5 = 0;
let lastJikanExtraAtV5 = 0;
const shikimoriCacheV5 = new Map();

function currentEntryV5(){
  if(!openedDetail) return null;
  return latestData.sections?.[openedDetail.section]?.[openedDetail.index] || null;
}

function openEditModalV5(section,index){
  const e=latestData.sections?.[section]?.[index]; if(!e)return;
  editTargetV5={section,index};
  $('#editTitle').textContent=`✏️ ${e.title}`;
  $('#editEmoji').value=e.emoji||'';
  $('#editDescriptor').value=e.descriptor||'';
  $('#editScore').value=e.score??'';
  $('#editProgress').value=Math.max(0,Number(e.progress)||0);
  $('#editProgress').max=e.format==='MOVIE'?1:(Number(e.episodes)||9999);
  $('#editNote').value=e.note||'';
  $('#editModal').classList.remove('hidden'); document.body.style.overflow='hidden';
  setTimeout(()=>$('#editEmoji').focus(),40);
}
function closeEditModalV5(){
  $('#editModal').classList.add('hidden'); editTargetV5=null; document.body.style.overflow='';
}
function saveEditModalV5(){
  if(!editTargetV5)return;
  const e=latestData.sections?.[editTargetV5.section]?.[editTargetV5.index]; if(!e)return closeEditModalV5();
  e.emoji=$('#editEmoji').value.trim()||e.emoji||'🎌';
  e.descriptor=$('#editDescriptor').value.trim()||'интересное';
  const score=$('#editScore').value; e.score=score===''?null:Number(score);
  const max=e.format==='MOVIE'?1:(Number(e.episodes)||9999);
  e.progress=Math.min(max,Math.max(0,Number($('#editProgress').value)||0));
  e.note=$('#editNote').value.trim();
  saveData();renderAll();setMessage(`Сохранено: ${e.emoji} ${e.title}`,'ok');closeEditModalV5();
}
editEntry = function(section,index){ openEditModalV5(section,index); };

function confirmDeleteV5(section,index){
  const e=latestData.sections?.[section]?.[index]; if(!e)return;
  $('#modalTitle').textContent=`Удалить ${e.title}?`;
  $('#modalText').textContent='Запись исчезнет из этого локального списка. Резервную копию можно сделать сверху.';
  $('#modalActions').innerHTML=`<button class="danger-solid" onclick="deleteEntryNowV5('${section}',${index})">Удалить</button>`;
  $('#modal').classList.remove('hidden');
}
function deleteEntryNowV5(section,index){
  const e=latestData.sections?.[section]?.[index]; if(!e)return closeModal();
  latestData.sections[section].splice(index,1);
  // also remove matching queue item
  latestData.next_queue=(latestData.next_queue||[]).filter(q=>!(q.anilist_id&&e.anilist_id?q.anilist_id===e.anilist_id:normalize(q.title)===normalize(e.title)));
  saveData();closeModal();renderAll();setMessage(`Удалено: ${e.title}`,'ok');
}
deleteEntry = function(section,index){ confirmDeleteV5(section,index); };

async function jikanExtraFetchV5(path){
  const wait=Math.max(0,420-(Date.now()-lastJikanExtraAtV5)); if(wait)await new Promise(r=>setTimeout(r,wait));
  const res=await fetch(`https://api.jikan.moe/v4${path}`,{headers:{Accept:'application/json'}});
  lastJikanExtraAtV5=Date.now();
  if(!res.ok)throw new Error(`Jikan ${res.status}`);
  return res.json();
}

async function shikimoriInfoV5(malId){
  if(!malId)return null;
  if(shikimoriCacheV5.has(Number(malId)))return shikimoriCacheV5.get(Number(malId));
  const ctl=new AbortController(),timer=setTimeout(()=>ctl.abort(),6500);
  try{
    const res=await fetch(`https://shikimori.one/api/animes/${encodeURIComponent(malId)}`,{headers:{Accept:'application/json'},signal:ctl.signal});
    if(!res.ok)throw new Error(`Shikimori ${res.status}`);
    const data=await res.json(); shikimoriCacheV5.set(Number(malId),data); return data;
  }finally{clearTimeout(timer);}
}

function cleanDescriptionV5(text){return stripHtmlText(text||'').replace(/\s*\[Written by MAL Rewrite\]\s*$/i,'').trim();}
function splitTranslateChunksV5(text,max=430){
  const sentences=String(text||'').replace(/\s+/g,' ').trim().split(/(?<=[.!?])\s+/); const out=[];let cur='';
  for(const s of sentences){
    if(!s)continue;
    if((cur+' '+s).trim().length<=max){cur=(cur+' '+s).trim();continue;}
    if(cur)out.push(cur);cur='';
    if(s.length<=max){cur=s;continue;}
    for(let i=0;i<s.length;i+=max)out.push(s.slice(i,i+max));
  }
  if(cur)out.push(cur); return out;
}
async function translateChunkV5(text){
  const url=`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|ru`;
  const res=await fetch(url,{headers:{Accept:'application/json'}}); if(!res.ok)throw new Error(`Перевод ${res.status}`);
  const data=await res.json(); return String(data?.responseData?.translatedText||'').trim();
}
async function translateDescriptionV5(text){
  const chunks=splitTranslateChunksV5(text); const translated=[];
  for(let i=0;i<chunks.length;i++){
    $('#detailDescriptionSource').textContent=`Перевожу… ${i+1}/${chunks.length}`;
    translated.push(await translateChunkV5(chunks[i]));
  }
  return translated.join(' ').trim();
}
function setDescriptionLanguageV5(lang){
  const ruBtn=$('#detailRuDescription'),enBtn=$('#detailEnDescription');
  if(lang==='ru'&&detailRussianV5){
    $('#detailDescription').textContent=detailRussianV5;
    $('#detailDescriptionSource').textContent=detailRuSourceV5||'Русское описание';
    ruBtn.classList.add('active');enBtn.classList.remove('active');
  }else{
    $('#detailDescription').textContent=detailEnglishV5||'Описание пока не найдено.';
    $('#detailDescriptionSource').textContent=detailEnglishV5?'Источник: AniList / MyAnimeList':'';
    enBtn.classList.add('active');ruBtn.classList.remove('active');
  }
}
async function requestRussianDescriptionV5(){
  const e=currentEntryV5();if(!e)return;
  if(detailRussianV5)return setDescriptionLanguageV5('ru');
  const btn=$('#detailRuDescription');btn.disabled=true;btn.textContent='🇷🇺 …';
  try{
    if(e.description_ru){detailRussianV5=e.description_ru;detailRuSourceV5=e.description_ru_source||'Сохранённый русский текст';return setDescriptionLanguageV5('ru');}
    if(!e.mal_id)await resolveEntryV3(e,{needDetail:true});
    if(e.mal_id){
      try{
        const sh=await shikimoriInfoV5(e.mal_id);
        const ru=cleanDescriptionV5(sh?.description_html||sh?.description||'');
        if(ru){detailRussianV5=ru;detailRuSourceV5='Русское описание: Shikimori';e.description_ru=ru;e.description_ru_source=detailRuSourceV5;saveData();return setDescriptionLanguageV5('ru');}
      }catch(err){console.warn('Shikimori description unavailable',err);}
    }
    if(!detailEnglishV5)throw new Error('Нет английского описания для перевода');
    const tr=await translateDescriptionV5(detailEnglishV5);
    if(!tr)throw new Error('Перевод пустой');
    detailRussianV5=tr;detailRuSourceV5='Машинный перевод MyMemory';e.description_ru=tr;e.description_ru_source=detailRuSourceV5;saveData();setDescriptionLanguageV5('ru');
  }catch(err){console.warn(err);$('#detailDescriptionSource').textContent='Русское описание получить не удалось — оставил английское.';setDescriptionLanguageV5('en');}
  finally{btn.disabled=false;btn.textContent='🇷🇺 RU';}
}

function themeSearchLinksV5(entry,raw,index,kind){
  const q=`${entry.title} ${raw}`;
  const yt=`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  const sp=`https://open.spotify.com/search/${encodeURIComponent(raw)}`;
  return `<div class="theme-row"><span class="theme-index">${kind}${index+1}</span><span class="theme-name" title="${esc(raw)}">${esc(raw)}</span><span class="theme-links"><a href="${yt}" target="_blank" rel="noopener noreferrer">YouTube</a><a href="${sp}" target="_blank" rel="noopener noreferrer">Spotify</a></span></div>`;
}
function renderThemesV5(entry,theme){
  if(uiSettings?.showThemes===false){$('#detailThemesSection').classList.add('hidden');return;}
  const ops=(theme?.openings||[]).filter(Boolean),eds=(theme?.endings||[]).filter(Boolean);
  if(!ops.length&&!eds.length){$('#detailThemesSection').classList.add('hidden');return;}
  $('#detailThemesSection').classList.remove('hidden');
  $('#detailOpeningsCount').textContent=ops.length?`· ${ops.length}`:''; $('#detailEndingsCount').textContent=eds.length?`· ${eds.length}`:'';
  $('#detailOpenings').innerHTML=ops.length?ops.map((x,i)=>themeSearchLinksV5(entry,x,i,'OP')).join(''):'<div class="theme-empty">Нет данных.</div>';
  $('#detailEndings').innerHTML=eds.length?eds.map((x,i)=>themeSearchLinksV5(entry,x,i,'ED')).join(''):'<div class="theme-empty">Нет данных.</div>';
  if(ops.length){
    const raw=ops[0],yt=`https://www.youtube.com/results?search_query=${encodeURIComponent(`${entry.title} ${raw}`)}`;
    $('#detailPrimaryOpening').innerHTML=`<div><small>ГЛАВНЫЙ OP</small><strong>${esc(raw)}</strong></div><a href="${yt}" target="_blank" rel="noopener noreferrer">▶ Послушать</a>`;
    $('#detailPrimaryOpening').classList.remove('hidden');
  }else $('#detailPrimaryOpening').classList.add('hidden');
}

function reviewTextV5(text,limit=360){const t=String(text||'').replace(/\s+/g,' ').trim();return t.length>limit?t.slice(0,limit).replace(/\s+\S*$/,'')+'…':t;}
function renderReviewsV5(reviews){
  if(uiSettings?.showReviews===false){$('#detailReviewsSection').classList.add('hidden');return;}
  const safe=(reviews||[]).filter(r=>!r.is_spoiler&&r.review).slice(0,3);
  if(!safe.length){$('#detailReviewsSection').classList.add('hidden');return;}
  $('#detailReviewsSection').classList.remove('hidden');
  $('#detailReviews').innerHTML=safe.map(r=>{
    const user=r.user?.username||'Пользователь MAL',avatar=r.user?.images?.webp?.image_url||r.user?.images?.jpg?.image_url||'';
    const url=r.url||r.user?.url||'#';
    return `<article class="review-card"><div class="review-head">${avatar?`<img src="${esc(avatar)}" alt="">`:''}<div><strong>${esc(user)}</strong><span>${r.score?`⭐ ${esc(r.score)}/10`:''}</span></div></div><p>${esc(reviewTextV5(r.review))}</p><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">Читать отзыв ↗</a></article>`;
  }).join('');
}

async function loadDetailExtrasV5(entry,media){
  const token=++detailExtrasTokenV5;
  $('#detailThemesSection').classList.add('hidden');$('#detailReviewsSection').classList.add('hidden');
  let malId=Number(entry.mal_id||media?.idMal||0);
  if(!malId){try{await resolveEntryV3(entry,{needDetail:true});malId=Number(entry.mal_id||0);}catch{}}
  if(token!==detailExtrasTokenV5||!openedDetail||!malId)return;
  try{
    const full=await jikanExtraFetchV5(`/anime/${malId}/full`); if(token!==detailExtrasTokenV5)return;
    renderThemesV5(entry,full?.data?.theme||{});
    // Try native Russian description from Shikimori quietly, but never block the page.
    if(!entry.description_ru){
      try{const sh=await shikimoriInfoV5(malId);const ru=cleanDescriptionV5(sh?.description_html||sh?.description||'');if(ru){entry.description_ru=ru;entry.description_ru_source='Русское описание: Shikimori';saveData();detailRussianV5=ru;detailRuSourceV5=entry.description_ru_source;if(uiSettings?.preferRussian!==false)setDescriptionLanguageV5('ru');}}catch{}
    }
  }catch(err){console.warn('Theme load failed',err);}
  if(uiSettings?.showReviews!==false){
    try{
      const reviews=await jikanExtraFetchV5(`/anime/${malId}/reviews`); if(token!==detailExtrasTokenV5)return; renderReviewsV5(reviews?.data||[]);
    }catch(err){console.warn('Review load failed',err);}
  }
}

const renderDetailPageBeforeV5 = renderDetailPage;
renderDetailPage = function(e,m,section){
  renderDetailPageBeforeV5(e,m,section);
  detailEnglishV5=cleanDescriptionV5(m?.description)||'Описание пока не найдено.';
  detailRussianV5=e.description_ru||''; detailRuSourceV5=e.description_ru_source||'';
  if(detailRussianV5&&uiSettings?.preferRussian!==false)setDescriptionLanguageV5('ru'); else setDescriptionLanguageV5('en');
  loadDetailExtrasV5(e,m);
};

// Custom edit modal bindings.
$('#editClose').addEventListener('click',closeEditModalV5);$('#editCancel').addEventListener('click',closeEditModalV5);$('#editSave').addEventListener('click',saveEditModalV5);
$('#editModal').addEventListener('click',e=>{if(e.target===$('#editModal'))closeEditModalV5();});
$('#detailRuDescription').addEventListener('click',requestRussianDescriptionV5);$('#detailEnDescription').addEventListener('click',()=>setDescriptionLanguageV5('en'));

// Stop async detail extras when closing and make Escape close the custom editor too.
$('#detailClose').addEventListener('click',()=>{detailExtrasTokenV5++;});
$('#detailModal').addEventListener('click',e=>{if(e.target===$('#detailModal'))detailExtrasTokenV5++;});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#editModal').classList.contains('hidden'))closeEditModalV5();});

// Re-apply settings in case this update introduced new default fields.
loadSettings();applySettings();renderAll();


/* ===== V6: ALL main-series OP/ED + AniList reviews primary ===== */
const ANILIST_REVIEWS_QUERY_V6 = `
query ($mediaId: Int!) {
  Page(page: 1, perPage: 5) {
    reviews(mediaId: $mediaId, sort: [RATING_DESC]) {
      id
      summary
      body(asHtml: true)
      rating
      ratingAmount
      score
      siteUrl
      user { name avatar { medium } }
    }
  }
}`;

// Disable the older V5 extras loader. The V6 loader below replaces it.
loadDetailExtrasV5 = async function(){};

let detailExtrasTokenV6 = 0;
let lastJikanV6At = 0;
const jikanFullCacheV6 = new Map();
const franchiseThemesCacheV6 = new Map();

function sleepV6(ms){return new Promise(r=>setTimeout(r,ms));}

async function jikanFetchV6(path,{tries=4}={}){
  let lastErr=null;
  for(let attempt=0;attempt<tries;attempt++){
    const wait=Math.max(0,500-(Date.now()-lastJikanV6At));
    if(wait)await sleepV6(wait);
    try{
      const res=await fetch(`https://api.jikan.moe/v4${path}`,{headers:{Accept:'application/json'}});
      lastJikanV6At=Date.now();
      if(res.ok)return res.json();
      if(res.status===429 || res.status>=500){
        lastErr=new Error(`Jikan ${res.status}`);
        await sleepV6(900+(attempt*750));
        continue;
      }
      throw new Error(`Jikan ${res.status}`);
    }catch(err){
      lastErr=err;
      if(attempt<tries-1)await sleepV6(700+(attempt*600));
    }
  }
  throw lastErr||new Error('Jikan недоступен');
}

async function jikanFullV6(malId){
  const id=Number(malId);if(!id)return null;
  if(jikanFullCacheV6.has(id))return jikanFullCacheV6.get(id);
  const p=await jikanFetchV6(`/anime/${id}/full`);
  const d=p?.data||null;
  if(d)jikanFullCacheV6.set(id,d);
  return d;
}

function isMainStoryRelationV6(rel){
  const x=String(rel||'').toLowerCase();
  return x==='prequel'||x==='sequel';
}

function airedTimeV6(item){
  const s=item?.aired?.from||'';
  const t=Date.parse(s);return Number.isFinite(t)?t:9e15;
}

async function collectFranchiseThemesV6(rootMalId,token){
  const root=Number(rootMalId);if(!root)return [];
  if(franchiseThemesCacheV6.has(root))return franchiseThemesCacheV6.get(root);
  const q=[root],seen=new Set(),parts=[];
  while(q.length && seen.size<16){
    if(token!==detailExtrasTokenV6||!openedDetail)return [];
    const id=Number(q.shift());if(!id||seen.has(id))continue;seen.add(id);
    let d=null;
    try{d=await jikanFullV6(id);}catch(err){console.warn('Franchise part failed',id,err);continue;}
    if(!d)continue;
    parts.push({
      mal_id:Number(d.mal_id||id),
      title:d.title_english||d.title||`MAL ${id}`,
      title_short:d.title_english||d.title||`MAL ${id}`,
      year:d.year||null,
      type:d.type||'',
      aired:d.aired||null,
      openings:(d.theme?.openings||[]).filter(Boolean),
      endings:(d.theme?.endings||[]).filter(Boolean)
    });
    for(const rel of (d.relations||[])){
      if(!isMainStoryRelationV6(rel?.relation))continue;
      for(const e of (rel.entry||[])){
        if(String(e?.type||'').toLowerCase()!=='anime')continue;
        const rid=Number(e?.mal_id||0);if(rid&&!seen.has(rid)&&!q.includes(rid))q.push(rid);
      }
    }
  }
  parts.sort((a,b)=>airedTimeV6(a)-airedTimeV6(b));
  franchiseThemesCacheV6.set(root,parts);
  // All discovered IDs point to the same cached franchise in this session.
  for(const p of parts)franchiseThemesCacheV6.set(Number(p.mal_id),parts);
  return parts;
}

function normalizeThemeV6(s){return String(s||'').toLowerCase().replace(/\s+/g,' ').replace(/[“”„]/g,'"').trim();}
function flattenFranchiseThemesV6(parts,key){
  const out=[],seen=new Set();
  for(const part of parts){
    for(const raw of (part[key]||[])){
      const n=normalizeThemeV6(raw);if(!n||seen.has(n))continue;seen.add(n);
      out.push({raw,part});
    }
  }
  return out;
}
function themeLinkRowV6(entry,item,index,kind){
  const raw=item.raw,part=item.part;
  const q=`${part.title||entry.title} ${raw}`;
  const yt=`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  const sp=`https://open.spotify.com/search/${encodeURIComponent(raw)}`;
  const label=[part.title,part.year].filter(Boolean).join(' · ');
  return `<div class="theme-row v6"><span class="theme-index">${kind}${index+1}</span><span class="theme-name-v6" title="${esc(raw)}"><b>${esc(raw)}</b><small>${esc(label)}</small></span><span class="theme-links"><a href="${yt}" target="_blank" rel="noopener noreferrer">YouTube</a><a href="${sp}" target="_blank" rel="noopener noreferrer">Spotify</a></span></div>`;
}
function renderFranchiseThemesV6(entry,parts,currentMalId){
  const sec=$('#detailThemesSection');
  if(uiSettings?.showThemes===false){sec.classList.add('hidden');return;}
  sec.classList.remove('hidden');
  const ops=flattenFranchiseThemesV6(parts,'openings'),eds=flattenFranchiseThemesV6(parts,'endings');
  $('#detailOpeningsCount').textContent=ops.length?`· ${ops.length}`:'';
  $('#detailEndingsCount').textContent=eds.length?`· ${eds.length}`:'';
  $('#detailOpenings').innerHTML=ops.length?ops.map((x,i)=>themeLinkRowV6(entry,x,i,'OP')).join(''):'<div class="theme-empty">Опенинги не нашлись.</div>';
  $('#detailEndings').innerHTML=eds.length?eds.map((x,i)=>themeLinkRowV6(entry,x,i,'ED')).join(''):'<div class="theme-empty">Эндинги не нашлись.</div>';
  const status=$('#detailThemesStatus');
  if(status)status.innerHTML=`Основная цепочка: <b>${parts.length}</b> ${parts.length===1?'часть':'частей'} · <b>${ops.length}</b> OP · <b>${eds.length}</b> ED`;
  const current=parts.find(p=>Number(p.mal_id)===Number(currentMalId))||parts[0];
  const primary=current?.openings?.[0]||ops[0]?.raw||'';
  if(primary){
    const yt=`https://www.youtube.com/results?search_query=${encodeURIComponent(`${current?.title||entry.title} ${primary}`)}`;
    $('#detailPrimaryOpening').innerHTML=`<div><small>ГЛАВНЫЙ OP ЭТОЙ ЧАСТИ</small><strong>${esc(primary)}</strong></div><a href="${yt}" target="_blank" rel="noopener noreferrer">▶ Послушать</a>`;
    $('#detailPrimaryOpening').classList.remove('hidden');
  }else $('#detailPrimaryOpening').classList.add('hidden');
}
function renderThemesLoadingV6(){
  if(uiSettings?.showThemes===false){$('#detailThemesSection').classList.add('hidden');return;}
  $('#detailThemesSection').classList.remove('hidden');
  $('#detailPrimaryOpening').classList.add('hidden');
  $('#detailOpeningsCount').textContent='';$('#detailEndingsCount').textContent='';
  $('#detailOpenings').innerHTML='<div class="theme-loading">Ищу все сезоны основной истории и собираю опенинги…</div>';
  $('#detailEndings').innerHTML='<div class="theme-loading">Ищу все сезоны основной истории и собираю эндинги…</div>';
  const s=$('#detailThemesStatus');if(s)s.textContent='Собираю всю основную цепочку Prequel / Sequel…';
}

function plainReviewTextV6(html){return stripHtmlText(html||'').replace(/\s+/g,' ').trim();}
function reviewSnippetV6(text,limit=330){
  const t=String(text||'').replace(/\s+/g,' ').trim();
  return t.length>limit?t.slice(0,limit).replace(/\s+\S*$/,'')+'…':t;
}
function showReviewsSectionV6(){
  if(uiSettings?.showReviews===false){$('#detailReviewsSection').classList.add('hidden');return false;}
  $('#detailReviewsSection').classList.remove('hidden');return true;
}
function renderReviewsLoadingV6(){
  if(!showReviewsSectionV6())return;
  $('#detailReviews').innerHTML='<div class="review-loading">Ищу короткие отзывы зрителей…</div>';
  const s=$('#detailReviewsStatus');if(s)s.textContent='AniList — основной источник, MyAnimeList — запасной.';
}
function renderReviewsEmptyV6(message='Для этого тайтла публичных отзывов пока не нашлось.'){
  if(!showReviewsSectionV6())return;
  $('#detailReviews').innerHTML=`<div class="review-empty">${esc(message)}</div>`;
  const s=$('#detailReviewsStatus');if(s)s.textContent='Блок работает, но источник не вернул подходящих отзывов.';
}
function renderAniListReviewsV6(reviews){
  if(!showReviewsSectionV6())return 0;
  const arr=(reviews||[]).filter(r=>r&&(r.summary||r.body)).slice(0,3);
  if(!arr.length)return 0;
  $('#detailReviews').innerHTML=arr.map(r=>{
    const user=r.user?.name||'Пользователь AniList',avatar=r.user?.avatar?.medium||'';
    const summary=String(r.summary||'').trim();
    const body=reviewSnippetV6(plainReviewTextV6(r.body),300);
    const url=r.siteUrl||'#';
    return `<article class="review-card"><div class="review-head">${avatar?`<img src="${esc(avatar)}" alt="">`:''}<div><strong>${esc(user)}</strong><span>${r.score?`⭐ ${esc(Math.round(Number(r.score)/10))}/10`:''}</span></div></div><div class="review-meta-line"><span class="review-source">AniList</span>${r.rating?`<span class="review-source">👍 ${esc(r.rating)}</span>`:''}</div>${summary?`<div class="review-summary">${esc(summary)}</div>`:''}${body?`<p class="review-body">${esc(body)}</p>`:''}<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">Открыть отзыв ↗</a></article>`;
  }).join('');
  const s=$('#detailReviewsStatus');if(s)s.textContent=`Показано ${arr.length} популярных отзыв${arr.length===1?'':'а'} с AniList.`;
  return arr.length;
}
function renderJikanReviewsV6(reviews){
  if(!showReviewsSectionV6())return 0;
  let arr=(reviews||[]).filter(r=>r?.review&&!r?.is_spoiler).slice(0,3);
  if(!arr.length)arr=(reviews||[]).filter(r=>r?.review).slice(0,3);
  if(!arr.length)return 0;
  $('#detailReviews').innerHTML=arr.map(r=>{
    const user=r.user?.username||'Пользователь MAL',avatar=r.user?.images?.webp?.image_url||r.user?.images?.jpg?.image_url||'';
    const url=r.url||r.user?.url||'#',body=reviewSnippetV6(r.review,330);
    return `<article class="review-card"><div class="review-head">${avatar?`<img src="${esc(avatar)}" alt="">`:''}<div><strong>${esc(user)}</strong><span>${r.score?`⭐ ${esc(r.score)}/10`:''}</span></div></div><div class="review-meta-line"><span class="review-source">MyAnimeList</span>${r.is_spoiler?'<span class="review-source">⚠ spoiler</span>':''}</div><p class="review-body">${esc(body)}</p><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">Открыть отзыв ↗</a></article>`;
  }).join('');
  const s=$('#detailReviewsStatus');if(s)s.textContent=`AniList не дал отзывов — показал ${arr.length} с MyAnimeList.`;
  return arr.length;
}
async function loadReviewsV6(entry,media,token){
  if(uiSettings?.showReviews===false)return;
  renderReviewsLoadingV6();
  let mediaId=Number(entry.anilist_id||media?.id||0);
  if(!mediaId){
    try{const m=await resolveEntryV3(entry,{needDetail:true});mediaId=Number(entry.anilist_id||m?.id||0);}catch{}
  }
  if(token!==detailExtrasTokenV6||!openedDetail)return;
  if(mediaId){
    try{
      const p=await anilistFetch(ANILIST_REVIEWS_QUERY_V6,{mediaId});
      if(token!==detailExtrasTokenV6||!openedDetail)return;
      if(renderAniListReviewsV6(p?.data?.Page?.reviews||[]))return;
    }catch(err){console.warn('AniList reviews failed',err);}
  }
  let malId=Number(entry.mal_id||media?.idMal||0);
  if(!malId){try{await resolveEntryV3(entry,{needDetail:true});malId=Number(entry.mal_id||0);}catch{}}
  if(token!==detailExtrasTokenV6||!openedDetail)return;
  if(malId){
    try{
      const p=await jikanFetchV6(`/anime/${malId}/reviews?page=1`);
      if(token!==detailExtrasTokenV6||!openedDetail)return;
      if(renderJikanReviewsV6(p?.data||[]))return;
    }catch(err){console.warn('MAL reviews failed',err);}
  }
  renderReviewsEmptyV6();
}

async function loadFranchiseThemesV6(entry,media,token){
  if(uiSettings?.showThemes===false)return;
  renderThemesLoadingV6();
  let malId=Number(entry.mal_id||media?.idMal||0);
  if(!malId){try{await resolveEntryV3(entry,{needDetail:true});malId=Number(entry.mal_id||0);}catch{}}
  if(token!==detailExtrasTokenV6||!openedDetail)return;
  if(!malId){
    $('#detailOpenings').innerHTML='<div class="theme-empty">Не удалось определить MAL ID.</div>';
    $('#detailEndings').innerHTML='<div class="theme-empty">Не удалось определить MAL ID.</div>';
    const s=$('#detailThemesStatus');if(s)s.textContent='Не смог определить тайтл в базе MyAnimeList.';
    return;
  }
  try{
    const parts=await collectFranchiseThemesV6(malId,token);
    if(token!==detailExtrasTokenV6||!openedDetail)return;
    if(parts.length)return renderFranchiseThemesV6(entry,parts,malId);
  }catch(err){console.warn('Franchise themes failed',err);}
  // final fallback: current title only
  try{
    const d=await jikanFullV6(malId);
    if(token!==detailExtrasTokenV6||!openedDetail)return;
    if(d)return renderFranchiseThemesV6(entry,[{mal_id:d.mal_id,title:d.title_english||d.title,year:d.year,type:d.type,aired:d.aired,openings:d.theme?.openings||[],endings:d.theme?.endings||[]}],malId);
  }catch{}
  $('#detailOpenings').innerHTML='<div class="theme-empty">Данные об опенингах сейчас недоступны.</div>';
  $('#detailEndings').innerHTML='<div class="theme-empty">Данные об эндингах сейчас недоступны.</div>';
  const s=$('#detailThemesStatus');if(s)s.textContent='Источник музыки временно не ответил.';
}

function loadDetailExtrasV6(entry,media){
  const token=++detailExtrasTokenV6;
  // Reviews are loaded independently, so a long franchise crawl can never block them.
  loadReviewsV6(entry,media,token);
  loadFranchiseThemesV6(entry,media,token);
  // Russian description is still handled by V5 language controls.
  if(!entry.description_ru && entry.mal_id){
    shikimoriInfoV5(entry.mal_id).then(sh=>{
      if(token!==detailExtrasTokenV6||!openedDetail)return;
      const ru=cleanDescriptionV5(sh?.description_html||sh?.description||'');
      if(ru){entry.description_ru=ru;entry.description_ru_source='Русское описание: Shikimori';saveData();detailRussianV5=ru;detailRuSourceV5=entry.description_ru_source;if(uiSettings?.preferRussian!==false)setDescriptionLanguageV5('ru');}
    }).catch(()=>{});
  }
}

const renderDetailPageBeforeV6 = renderDetailPage;
renderDetailPage = function(e,m,section){
  renderDetailPageBeforeV6(e,m,section);
  loadDetailExtrasV6(e,m);
};

// Cancel V6 requests when details close.
$('#detailClose').addEventListener('click',()=>{detailExtrasTokenV6++;});
$('#detailModal').addEventListener('click',e=>{if(e.target===$('#detailModal'))detailExtrasTokenV6++;});


/* ===== V7: reliable franchise chain, editable queue, stable search ===== */
const ANILIST_RELATIONS_QUERY_V7 = `
query ($id: Int!) {
  Media(id: $id, type: ANIME) {
    id idMal format seasonYear
    title { romaji english native }
    relations {
      edges {
        relationType
        node {
          id idMal type format seasonYear
          title { romaji english native }
        }
      }
    }
  }
}`;

const anilistRelationsCacheV7 = new Map();
const franchiseChainCacheV7 = new Map();
const jikanRelationsCacheV7 = new Map();

async function anilistRelationMediaV7(id){
  id=Number(id); if(!id)return null;
  if(anilistRelationsCacheV7.has(id))return anilistRelationsCacheV7.get(id);
  const p=await anilistFetch(ANILIST_RELATIONS_QUERY_V7,{id});
  const m=p?.data?.Media||null;
  if(m)anilistRelationsCacheV7.set(id,m);
  return m;
}

function seasonlessTitleV7(title){
  return normalize(String(title||''))
    .replace(/\b(the\s+)?final\s+season\b/g,' ')
    .replace(/\bfinal\s+chapters?\b/g,' ')
    .replace(/\bkanketsu[\s-]*hen\b/g,' ')
    .replace(/\bseason\s*\d+\b/g,' ')
    .replace(/\b\d+(st|nd|rd|th)\s+season\b/g,' ')
    .replace(/\bpart\s*\d+\b/g,' ')
    .replace(/\bcour\s*\d+\b/g,' ')
    .replace(/\br\s*\d+\b/g,' ')
    .replace(/\bii+\b/g,' ')
    .replace(/\s+/g,' ').trim();
}
function titleTokensV7(title){
  const stop=new Set(['the','a','an','of','no','to','and','on','in','season','part','final']);
  return seasonlessTitleV7(title).split(' ').filter(x=>x.length>1&&!stop.has(x));
}
function rootBaseV7(media,entry){
  const names=[media?.title?.english,media?.title?.romaji,entry?.title,...(entry?.aliases||[])].filter(Boolean);
  const cleaned=names.map(seasonlessTitleV7).filter(Boolean).sort((a,b)=>a.length-b.length);
  return cleaned[0]||seasonlessTitleV7(entry?.title||'');
}
function formatAllowedV7(format,rootFormat){
  const f=String(format||'').toUpperCase(),r=String(rootFormat||'TV').toUpperCase();
  if(r==='MOVIE')return f==='MOVIE';
  if(r==='OVA')return ['OVA','SPECIAL'].includes(f);
  if(r==='ONA')return ['ONA','TV','TV_SHORT','SPECIAL'].includes(f);
  return ['TV','TV_SHORT','SPECIAL'].includes(f);
}
function relationCandidateScoreV7(node,base,rootFormat){
  if(!node||String(node.type||'ANIME')!=='ANIME'||!formatAllowedV7(node.format,rootFormat))return -9999;
  const names=[node.title?.english,node.title?.romaji,node.title?.native].filter(Boolean);
  const normNames=names.map(normalize), bases=names.map(seasonlessTitleV7);
  const bad=/\b(gaiden|spin[ -]?off|picture drama|junior high|chibi|recap|summary|movie|school caste|lost girls|no regrets)\b/i;
  let score=0;
  if(node.format==='TV')score+=50; else if(node.format==='TV_SHORT')score+=38; else if(node.format==='SPECIAL')score+=30; else if(node.format==='ONA')score+=20;
  if(bases.some(x=>x===base))score+=100;
  if(normNames.some(x=>x.includes(base)||base.includes(x)))score+=60;
  const bt=titleTokensV7(base), nt=titleTokensV7(names[0]||'');
  if(bt.length){const hit=bt.filter(t=>nt.includes(t)).length;score+=Math.round((hit/bt.length)*50);}
  if(names.some(x=>bad.test(x)))score-=140;
  return score;
}
function chooseRelationNodeV7(media,relationType,base,rootFormat,seen=new Set()){
  const edges=media?.relations?.edges||[];
  const cands=edges
    .filter(e=>String(e?.relationType||'').toUpperCase()===relationType)
    .map(e=>e.node)
    .filter(n=>n?.id&&!seen.has(Number(n.id)))
    .map(n=>({node:n,score:relationCandidateScoreV7(n,base,rootFormat)}))
    .filter(x=>x.score>15)
    .sort((a,b)=>b.score-a.score);
  return cands[0]?.node||null;
}

async function collectAniListMainChainV7(rootAniId,entry,token){
  rootAniId=Number(rootAniId);if(!rootAniId)return [];
  if(franchiseChainCacheV7.has(`al:${rootAniId}`))return franchiseChainCacheV7.get(`al:${rootAniId}`);
  let current=await anilistRelationMediaV7(rootAniId);if(!current)return [];
  const rootFormat=current.format||entry?.format||'TV',base=rootBaseV7(current,entry);
  const backSeen=new Set([Number(current.id)]);
  // Walk back to the earliest main TV/Special part.
  for(let i=0;i<12;i++){
    if(token!==detailExtrasTokenV6||!openedDetail)return [];
    const prev=chooseRelationNodeV7(current,'PREQUEL',base,rootFormat,backSeen);
    if(!prev)break;
    const p=await anilistRelationMediaV7(prev.id);if(!p)break;
    backSeen.add(Number(p.id)); current=p;
  }
  // Walk forward through the main sequel chain.
  const chain=[],seen=new Set();
  for(let i=0;i<18&&current;i++){
    if(token!==detailExtrasTokenV6||!openedDetail)return [];
    const id=Number(current.id);if(!id||seen.has(id))break;
    seen.add(id); chain.push(current);
    const nextNode=chooseRelationNodeV7(current,'SEQUEL',base,rootFormat,seen);
    if(!nextNode)break;
    current=await anilistRelationMediaV7(nextNode.id);
  }
  if(chain.length){
    for(const m of chain)franchiseChainCacheV7.set(`al:${Number(m.id)}`,chain);
  }
  return chain;
}

async function jikanRelationsV7(malId){
  const id=Number(malId);if(!id)return [];
  if(jikanRelationsCacheV7.has(id))return jikanRelationsCacheV7.get(id);
  const p=await jikanFetchV6(`/anime/${id}/relations`);
  const d=p?.data||[];jikanRelationsCacheV7.set(id,d);return d;
}
async function chooseJikanRelationV7(malId,kind,base,rootFormat,seen){
  const rels=await jikanRelationsV7(malId), ids=[];
  for(const rel of rels){
    if(String(rel?.relation||'').toLowerCase()!==kind.toLowerCase())continue;
    for(const e of (rel.entry||[]))if(String(e?.type||'').toLowerCase()==='anime'&&e?.mal_id&&!seen.has(Number(e.mal_id)))ids.push(Number(e.mal_id));
  }
  let best=null,bestScore=-9999;
  for(const id of ids.slice(0,5)){
    try{
      const d=await jikanFullV6(id);if(!d)continue;
      const fake={type:'ANIME',format:String(d.type||'').toUpperCase().replace('TV SPECIAL','SPECIAL'),title:{english:d.title_english||d.title,romaji:d.title,native:d.title_japanese}};
      const sc=relationCandidateScoreV7(fake,base,rootFormat);
      if(sc>bestScore){bestScore=sc;best=d;}
    }catch{}
  }
  return bestScore>15?best:null;
}
async function collectJikanMainChainV7(rootMalId,entry,token){
  const id=Number(rootMalId);if(!id)return [];
  let current=await jikanFullV6(id);if(!current)return [];
  const rootFormat=String(current.type||entry?.format||'TV').toUpperCase().replace('TV SPECIAL','SPECIAL');
  const base=seasonlessTitleV7(current.title_english||current.title||entry?.title||'');
  const backSeen=new Set([id]);
  for(let i=0;i<10;i++){
    if(token!==detailExtrasTokenV6||!openedDetail)return [];
    const prev=await chooseJikanRelationV7(current.mal_id,'Prequel',base,rootFormat,backSeen);
    if(!prev)break;backSeen.add(Number(prev.mal_id));current=prev;
  }
  const chain=[],seen=new Set();
  for(let i=0;i<16&&current;i++){
    if(token!==detailExtrasTokenV6||!openedDetail)return [];
    const mid=Number(current.mal_id);if(!mid||seen.has(mid))break;
    seen.add(mid);chain.push(current);
    current=await chooseJikanRelationV7(mid,'Sequel',base,rootFormat,seen);
  }
  return chain;
}

function looksLikeSeasonVariantV7(title,base){
  const n=normalize(title),b=normalize(base);if(!n||!b)return false;
  if(seasonlessTitleV7(n)===seasonlessTitleV7(b))return true;
  if(!n.includes(b))return false;
  const extra=n.replace(b,' ').trim();
  return /\b(season|part|final|chapter|kanketsu|cour|r\s*\d+|\d+(st|nd|rd|th))\b/.test(extra);
}
async function collectJikanSearchFallbackV7(rootMalId,entry,token){
  let root=null;try{root=await jikanFullV6(rootMalId);}catch{}
  if(!root)return [];
  const title=root.title_english||root.title||entry.title, rootFormat=String(root.type||entry.format||'TV').toUpperCase().replace('TV SPECIAL','SPECIAL');
  const q=seasonlessTitleV7(title)||title;
  let p=null;try{p=await jikanFetchV6(`/anime?q=${encodeURIComponent(q)}&limit=25&order_by=start_date&sort=asc&sfw=true`);}catch{return [];}
  const candidates=(p?.data||[]).filter(c=>{
    const f=String(c.type||'').toUpperCase().replace('TV SPECIAL','SPECIAL');
    return c.mal_id&&formatAllowedV7(f,rootFormat)&&looksLikeSeasonVariantV7(c.title_english||c.title||'',q);
  });
  const parts=[];
  for(const c of candidates.slice(0,14)){
    if(token!==detailExtrasTokenV6||!openedDetail)return [];
    try{const d=await jikanFullV6(c.mal_id);if(d)parts.push(d);}catch{}
  }
  return parts;
}

// Known ID hints are only a final safety net for franchises whose public relation data is temporarily incomplete.
const AOT_MAIN_MAL_IDS_V7=[16498,25777,35760,38524,40028,48583,51535];
const FRANCHISE_MAL_HINTS_V7 = Object.fromEntries(AOT_MAIN_MAL_IDS_V7.map(id=>[id,AOT_MAIN_MAL_IDS_V7]));
async function hintedFranchisePartsV7(rootMalId,token){
  const ids=FRANCHISE_MAL_HINTS_V7[Number(rootMalId)]||[];if(!ids.length)return [];
  const out=[];for(const id of ids){
    if(token!==detailExtrasTokenV6||!openedDetail)return [];
    try{const d=await jikanFullV6(id);if(d)out.push(d);}catch{}
  }return out;
}

function jikanFullToThemePartV7(d){
  return {mal_id:Number(d.mal_id||0),title:d.title_english||d.title||`MAL ${d.mal_id}`,year:d.year||null,type:d.type||'',aired:d.aired||null,openings:(d.theme?.openings||[]).filter(Boolean),endings:(d.theme?.endings||[]).filter(Boolean)};
}
async function collectFranchiseThemesV7(entry,media,token){
  let aniId=Number(entry.anilist_id||media?.id||0),malId=Number(entry.mal_id||media?.idMal||0);
  if(!aniId||!malId){try{const m=await resolveEntryV3(entry,{needDetail:true});aniId=Number(entry.anilist_id||m?.id||aniId);malId=Number(entry.mal_id||m?.idMal||malId);}catch{}}
  let chain=[];
  if(aniId){
    try{chain=await collectAniListMainChainV7(aniId,entry,token);}catch(err){console.warn('AniList chain V7 failed',err);}
  }
  let full=[];
  if(chain.length>1){
    for(const node of chain){
      if(token!==detailExtrasTokenV6||!openedDetail)return [];
      let mid=Number(node.idMal||0);
      if(!mid){
        try{const al=await anilistRelationMediaV7(node.id);mid=Number(al?.idMal||0);}catch{}
      }
      if(mid){try{const d=await jikanFullV6(mid);if(d)full.push(d);}catch{}}
    }
  }
  if(full.length<=1&&malId){
    try{full=await collectJikanMainChainV7(malId,entry,token);}catch(err){console.warn('Jikan relation chain V7 failed',err);}
  }
  if(full.length<=1&&malId){
    const searched=await collectJikanSearchFallbackV7(malId,entry,token);if(searched.length>full.length)full=searched;
  }
  if(malId&&FRANCHISE_MAL_HINTS_V7[malId]){
    const hinted=await hintedFranchisePartsV7(malId,token);
    // Merge the safety-net IDs instead of replacing a partially discovered chain.
    if(hinted.length)full=[...full,...hinted];
  }
  if(!full.length&&malId){try{const d=await jikanFullV6(malId);if(d)full=[d];}catch{}}
  // Deduplicate and sort chronologically.
  const map=new Map();for(const d of full)if(d?.mal_id)map.set(Number(d.mal_id),d);
  return [...map.values()].sort((a,b)=>airedTimeV6(a)-airedTimeV6(b)).map(jikanFullToThemePartV7);
}

loadFranchiseThemesV6 = async function(entry,media,token){
  if(uiSettings?.showThemes===false)return;
  renderThemesLoadingV6();
  let malId=Number(entry.mal_id||media?.idMal||0);
  if(!malId){try{await resolveEntryV3(entry,{needDetail:true});malId=Number(entry.mal_id||0);}catch{}}
  if(token!==detailExtrasTokenV6||!openedDetail)return;
  try{
    const parts=await collectFranchiseThemesV7(entry,media,token);
    if(token!==detailExtrasTokenV6||!openedDetail)return;
    if(parts.length){
      renderFranchiseThemesV6(entry,parts,malId);
      const status=$('#detailThemesStatus');
      if(status)status.innerHTML=`Нашёл <b>${parts.length}</b> ${parts.length===1?'часть':'частей'} франшизы · собираю темы из каждой части`;
      // restore exact counts after renderer has calculated them
      const ops=flattenFranchiseThemesV6(parts,'openings'),eds=flattenFranchiseThemesV6(parts,'endings');
      if(status)status.innerHTML=`Франшиза: <b>${parts.length}</b> ${parts.length===1?'часть':'частей'} · <b>${ops.length}</b> OP · <b>${eds.length}</b> ED`;
      return;
    }
  }catch(err){console.warn('Franchise themes V7 failed',err);}
  $('#detailOpenings').innerHTML='<div class="theme-empty">Данные об опенингах сейчас недоступны.</div>';
  $('#detailEndings').innerHTML='<div class="theme-empty">Данные об эндингах сейчас недоступны.</div>';
  const s=$('#detailThemesStatus');if(s)s.textContent='Не удалось собрать части франшизы. Попробуй открыть страницу ещё раз.';
};

// Queue: add/remove directly from the queue block.
function queueKeyV7(x){return x?.anilist_id?`id:${x.anilist_id}`:(x?.mal_id?`mal:${x.mal_id}`:`name:${normalize(x?.title||'')}`);}
function entryInQueueV7(e){const k=queueKeyV7(e);return (latestData.next_queue||[]).some(x=>queueKeyV7(x)===k);}
function findQueueSourceV7(q){
  for(const [section,entries] of Object.entries(latestData.sections||{})){
    const index=entries.findIndex(e=>queueKeyV7(e)===queueKeyV7(q));if(index>=0)return {section,index,entry:entries[index]};
  }return null;
}
renderQueue = function(){
  const q=latestData.next_queue||[],el=$('#nextQueue');
  el.innerHTML=q.length?q.map((x,i)=>{
    const src=findQueueSourceV7(x);
    const title=src?`<button class="queue-chip-title" onclick="openDetails('${src.section}',${src.index})" title="Открыть карточку">${i+1}. ${esc(x.title)}</button>`:`<span class="queue-chip-title">${i+1}. ${esc(x.title)}</span>`;
    return `<div class="queue-chip">${title}<button onclick="reorderQueue(${i},${i-1})" ${i===0?'disabled':''} title="Выше">↑</button><button onclick="reorderQueue(${i},${i+1})" ${i===q.length-1?'disabled':''} title="Ниже">↓</button><button class="queue-remove" onclick="removeQueueV7(${i})" title="Убрать из Далее">✕</button></div>`;
  }).join(''):'<div class="empty">Очередь пока пустая. Нажми «＋ Добавить».</div>';
};
function removeQueueV7(index){
  const q=latestData.next_queue||[];if(index<0||index>=q.length)return;
  const removed=q.splice(index,1)[0];saveData();renderQueue();setMessage(`${removed?.title||'Аниме'} убрано из «Далее».`,'ok');
}
function addQueueFromPickerV7(section,index){
  const e=latestData.sections?.[section]?.[index];if(!e)return;
  if(!entryInQueueV7(e))latestData.next_queue.push({anilist_id:e.anilist_id||null,mal_id:e.mal_id||null,title:e.title});
  saveData();closeModal();renderQueue();setMessage(`${e.title} добавлено в «Далее».`,'ok');
}
function openQueuePickerV7(){
  const all=[];
  for(const [section,entries] of Object.entries(latestData.sections||{}))entries.forEach((e,index)=>{if(e.format!=='MOVIE'&&!entryInQueueV7(e))all.push({section,index,e});});
  all.sort((a,b)=>a.e.title.localeCompare(b.e.title,'ru'));
  $('#modalTitle').textContent='Добавить в «Далее»';
  $('#modalText').textContent='Выбери аниме из своего списка. Уже добавленные здесь не показываются.';
  const actions=$('#modalActions');actions.classList.add('queue-picker-actions');
  actions.innerHTML=all.length?all.map(({section,index,e})=>`<button class="queue-pick-btn" onclick="addQueueFromPickerV7('${section}',${index})"><span>${esc(e.emoji||'🎌')} ${esc(e.title)}</span><small>${esc(SECTION_TITLES[section])}</small></button>`).join(''):'<div class="queue-picker-empty">Все доступные аниме уже есть в очереди.</div>';
  $('#modal').classList.remove('hidden');
}
const closeModalBeforeV7=closeModal;
closeModal=function(){ $('#modalActions').classList.remove('queue-picker-actions'); closeModalBeforeV7(); };
$('#queueAddBtn')?.addEventListener('click',openQueuePickerV7);

// Search: stale results disappear as soon as the query is edited/cleared.
$('#searchInput')?.addEventListener('input',e=>{
  searchResults=[];
  $('#results').innerHTML='';
  const q=e.target.value.trim();
  if(!q)setMessage('');
  else if(q.length<2)setMessage('Введи хотя бы 2 символа.');
  else setMessage('');
});

// V7 migration: keep queue items richer without changing the storage key.
for(const q of (latestData.next_queue||[])){
  const src=findQueueSourceV7(q);if(src){q.anilist_id ||= src.entry.anilist_id||null;q.mal_id ||= src.entry.mal_id||null;}
}
saveData();renderQueue();

/* ===== V8: polished motion, customizable mascot/footer, steadier franchise music ===== */
const V8_DEFAULTS = {
  siteName:'Мой аниме-лист',
  siteTagline:'Мой личный аниме-трекер — всё хранится прямо в браузере.',
  showFooter:true,
  motion:'normal',buttonFx:'ripple',
  mascotEnabled:false,mascotImage:'',mascotAltImage:'',mascotSize:180,mascotPosition:'right',mascotHover:'lift',mascotClick:'bounce'
};
Object.assign(DEFAULT_SETTINGS,V8_DEFAULTS);
uiSettings={...V8_DEFAULTS,...(uiSettings||{})};

const applySettingsBeforeV8=applySettings;
applySettings=function(s=uiSettings){
  applySettingsBeforeV8(s);
  const b=document.body,r=document.documentElement;
  b.classList.remove('motion-soft','motion-normal','motion-playful','buttonfx-ripple','buttonfx-glow','buttonfx-press','buttonfx-none');
  b.classList.add(`motion-${s.motion||'normal'}`,`buttonfx-${s.buttonFx||'ripple'}`);
  r.style.setProperty('--mascot-size',`${Number(s.mascotSize)||180}px`);
  applyBrandingV8(s);renderMascotV8(s);
};

const setSettingsFormBeforeV8=setSettingsForm;
setSettingsForm=function(s=uiSettings){
  setSettingsFormBeforeV8(s);
  $('#settingSiteName').value=s.siteName||V8_DEFAULTS.siteName;
  $('#settingSiteTagline').value=s.siteTagline||V8_DEFAULTS.siteTagline;
  $('#settingFooter').checked=s.showFooter!==false;
  $('#settingMotion').value=s.motion||'normal';
  $('#settingButtonFx').value=s.buttonFx||'ripple';
  $('#settingMascotEnabled').checked=!!s.mascotEnabled;
  $('#settingMascotSize').value=Number(s.mascotSize)||180;
  $('#settingMascotPosition').value=s.mascotPosition||'right';
  $('#settingMascotHover').value=s.mascotHover||'lift';
  $('#settingMascotClick').value=s.mascotClick||'bounce';
  updateMascotSettingsPreviewV8();updateSettingsLabels();
};

const readSettingsFormBeforeV8=readSettingsForm;
readSettingsForm=function(){
  const s=readSettingsFormBeforeV8();
  s.siteName=$('#settingSiteName').value.trim()||V8_DEFAULTS.siteName;
  s.siteTagline=$('#settingSiteTagline').value.trim()||V8_DEFAULTS.siteTagline;
  s.showFooter=$('#settingFooter').checked;
  s.motion=$('#settingMotion').value||'normal';
  s.buttonFx=$('#settingButtonFx').value||'ripple';
  s.mascotEnabled=$('#settingMascotEnabled').checked;
  s.mascotSize=Number($('#settingMascotSize').value)||180;
  s.mascotPosition=$('#settingMascotPosition').value||'right';
  s.mascotHover=$('#settingMascotHover').value||'lift';
  s.mascotClick=$('#settingMascotClick').value||'bounce';
  // Images live in uiSettings while the settings window is open so cancel still works via settingsSnapshot.
  s.mascotImage=uiSettings?.mascotImage||'';
  s.mascotAltImage=uiSettings?.mascotAltImage||'';
  return s;
};

const updateSettingsLabelsBeforeV8=updateSettingsLabels;
updateSettingsLabels=function(){updateSettingsLabelsBeforeV8();const e=$('#mascotSizeValue');if(e)e.textContent=`${$('#settingMascotSize')?.value||180}px`;};

const saveSettingsBeforeV8=saveSettings;
saveSettings=function(){
  try{saveSettingsBeforeV8();}
  catch(err){console.warn('Settings save failed',err);setMessage('Не удалось сохранить настройки: картинка, возможно, слишком большая. Попробуй файл поменьше.','error');}
};

function applyBrandingV8(s=uiSettings){
  const name=(s.siteName||V8_DEFAULTS.siteName).trim(),tag=(s.siteTagline||V8_DEFAULTS.siteTagline).trim();
  const title=$('#siteTitle'),tagline=$('#siteTagline'),footerName=$('#footerSiteName'),footerTag=$('#footerTagline'),copyright=$('#footerCopyright'),footer=$('#appFooter');
  if(title)title.textContent=`🎌 ${name}`;if(tagline)tagline.textContent=tag;if(footerName)footerName.textContent=name;if(footerTag)footerTag.textContent=tag;
  if(copyright)copyright.textContent=`© ${new Date().getFullYear()} ${name}`;if(footer)footer.classList.toggle('hidden',s.showFooter===false);
  document.title=`🎌 ${name}`;
}

function renderMascotV8(s=uiSettings){
  const dock=$('#mascotDock'),p=$('#mascotPrimary'),a=$('#mascotAlt');if(!dock||!p||!a)return;
  const has=!!s.mascotImage,hasAlt=!!s.mascotAltImage;
  dock.classList.toggle('hidden',!(s.mascotEnabled&&has));dock.classList.toggle('position-left',s.mascotPosition==='left');dock.classList.toggle('no-alt',!hasAlt);
  dock.dataset.hover=s.mascotHover||'lift';dock.dataset.click=s.mascotClick||'bounce';
  p.src=has?s.mascotImage:'';a.src=hasAlt?s.mascotAltImage:'';
}
function updateMascotSettingsPreviewV8(){
  const p=$('#mascotSettingsPrimary'),a=$('#mascotSettingsAlt');if(!p||!a)return;
  p.innerHTML=uiSettings?.mascotImage?`<img src="${esc(uiSettings.mascotImage)}" alt="Основная картинка">`:'Нет картинки';
  a.innerHTML=uiSettings?.mascotAltImage?`<img src="${esc(uiSettings.mascotAltImage)}" alt="Альтернативная картинка">`:'Alt не задан';
}
function fileToRawDataV8(file){return new Promise((resolve,reject)=>{const fr=new FileReader();fr.onload=()=>resolve(fr.result);fr.onerror=reject;fr.readAsDataURL(file);});}
async function compressImageV8(file){
  if(!file)return '';
  if(file.type==='image/gif'){
    if(file.size>1800000)throw new Error('GIF больше 1.8 МБ');
    return fileToRawDataV8(file);
  }
  const raw=await fileToRawDataV8(file);
  const img=await new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=reject;im.src=raw;});
  const max=760,scale=Math.min(1,max/Math.max(img.naturalWidth||1,img.naturalHeight||1));
  const c=document.createElement('canvas');c.width=Math.max(1,Math.round(img.naturalWidth*scale));c.height=Math.max(1,Math.round(img.naturalHeight*scale));
  const ctx=c.getContext('2d');ctx.clearRect(0,0,c.width,c.height);ctx.drawImage(img,0,0,c.width,c.height);
  return c.toDataURL('image/webp',.88);
}
async function handleMascotFileV8(file,alt=false){
  try{
    const data=await compressImageV8(file);if(!data)return;
    if(alt)uiSettings.mascotAltImage=data;else uiSettings.mascotImage=data;
    $('#settingMascotEnabled').checked=true;uiSettings.mascotEnabled=true;updateMascotSettingsPreviewV8();previewSettings();
  }catch(err){setMessage(`Не удалось загрузить картинку: ${err.message||err}`,'error');}
}
$('#settingMascotFile')?.addEventListener('change',e=>{const f=e.target.files?.[0];if(f)handleMascotFileV8(f,false);e.target.value='';});
$('#settingMascotAltFile')?.addEventListener('change',e=>{const f=e.target.files?.[0];if(f)handleMascotFileV8(f,true);e.target.value='';});
$('#settingMascotClear')?.addEventListener('click',()=>{uiSettings.mascotImage='';$('#settingMascotEnabled').checked=false;updateMascotSettingsPreviewV8();previewSettings();});
$('#settingMascotAltClear')?.addEventListener('click',()=>{uiSettings.mascotAltImage='';updateMascotSettingsPreviewV8();previewSettings();});
['settingSiteName','settingSiteTagline','settingFooter','settingMotion','settingButtonFx','settingMascotEnabled','settingMascotSize','settingMascotPosition','settingMascotHover','settingMascotClick'].forEach(id=>$('#'+id)?.addEventListener('input',previewSettings));

$('#mascotButton')?.addEventListener('click',()=>{
  const dock=$('#mascotDock');if(!dock||dock.classList.contains('hidden'))return;
  const fx=uiSettings?.mascotClick||'bounce';
  if(fx==='swap'&&!dock.classList.contains('no-alt')){dock.classList.toggle('is-alt');return;}
  const cls={bounce:'mascot-bounce',spin:'mascot-spin',pulse:'mascot-pulse',hide:'mascot-peek'}[fx];if(!cls)return;
  dock.classList.remove(cls);void dock.offsetWidth;dock.classList.add(cls);setTimeout(()=>dock.classList.remove(cls),fx==='hide'?2050:750);
});

// Stagger new cards/chips/results instead of making the page feel static.
function stageElementsV8(selector){
  if(uiSettings?.animations===false)return;
  requestAnimationFrame(()=>document.querySelectorAll(selector).forEach((el,i)=>{el.classList.remove('ui-enter');el.style.setProperty('--enter-i',String(Math.min(i,18)));void el.offsetWidth;el.classList.add('ui-enter');}));
}
const renderListsBeforeV8=renderLists;renderLists=function(){renderListsBeforeV8();stageElementsV8('#lists .anime-card');};
const renderQueueBeforeV8=renderQueue;renderQueue=function(){renderQueueBeforeV8();stageElementsV8('#nextQueue .queue-chip');};
const renderResultsBeforeV8=renderResults;renderResults=function(){renderResultsBeforeV8();stageElementsV8('#results .result-card');};

// Button click animation: ripple / glow / press.
document.addEventListener('pointerdown',e=>{
  const btn=e.target.closest('button');if(!btn||uiSettings?.animations===false)return;
  const fx=uiSettings?.buttonFx||'ripple';if(fx==='none')return;
  if(fx==='ripple'){
    const r=document.createElement('span'),rect=btn.getBoundingClientRect(),size=Math.max(rect.width,rect.height)*.55;r.className='v8-ripple';r.style.width=r.style.height=`${size}px`;r.style.left=`${e.clientX-rect.left}px`;r.style.top=`${e.clientY-rect.top}px`;btn.appendChild(r);setTimeout(()=>r.remove(),600);
  }else{btn.classList.remove('v8-clicked');void btn.offsetWidth;btn.classList.add('v8-clicked');setTimeout(()=>btn.classList.remove('v8-clicked'),500);}
},{passive:true});

function scrollToV8(id){document.getElementById(id)?.scrollIntoView({behavior:uiSettings?.animations===false?'auto':'smooth',block:'start'});}
function scrollSectionV8(section){const title=SECTION_TITLES[section];const sec=[...document.querySelectorAll('.anime-section')].find(x=>x.querySelector('h2')?.textContent===title);sec?.scrollIntoView({behavior:uiSettings?.animations===false?'auto':'smooth',block:'start'});}
window.scrollToV8=scrollToV8;window.scrollSectionV8=scrollSectionV8;
const exportTextBeforeV8=exportText;exportText=function(){const txt=exportTextBeforeV8();return txt.replace(/^🎌 Аниме-лист/m,`🎌 ${uiSettings?.siteName||V8_DEFAULTS.siteName}`);};

/* --- V8 Jikan request lane: intentionally stays below the documented 60 req/min limit. --- */
let jikanLaneV8=Promise.resolve(),lastJikanLaneAtV8=0;
async function jikanFetchDirectV8(path,{tries=6}={}){
  let err=null;
  for(let attempt=0;attempt<tries;attempt++){
    const wait=Math.max(0,1080-(Date.now()-lastJikanLaneAtV8));if(wait)await sleepV6(wait);
    try{
      const res=await fetch(`https://api.jikan.moe/v4${path}`,{headers:{Accept:'application/json'}});lastJikanLaneAtV8=Date.now();
      if(res.ok)return res.json();
      err=new Error(`Jikan ${res.status}`);
      if(res.status===429||res.status>=500){const retry=Math.max(1300,Number(res.headers.get('Retry-After')||0)*1000,1300+attempt*900);await sleepV6(retry);continue;}
      throw err;
    }catch(e){err=e;if(attempt<tries-1)await sleepV6(900+attempt*650);}
  }
  throw err||new Error('Jikan недоступен');
}
jikanFetchV6=function(path,opts={}){
  const task=jikanLaneV8.then(()=>jikanFetchDirectV8(path,opts));jikanLaneV8=task.catch(()=>{});return task;
};

const MUSIC_CACHE_KEY_V8='animeFranchiseMusicCacheV8';
function readMusicCacheV8(){try{return JSON.parse(localStorage.getItem(MUSIC_CACHE_KEY_V8)||'{"franchises":{},"partToRoot":{}}');}catch{return {franchises:{},partToRoot:{}};}}
function getMusicCacheV8(malId){const c=readMusicCacheV8(),root=c.partToRoot?.[String(malId)]||String(malId),x=c.franchises?.[root];if(!x||Date.now()-Number(x.ts||0)>1000*60*60*24*21)return null;return x.parts||null;}
function saveMusicCacheV8(rootMalId,parts){try{const c=readMusicCacheV8();c.franchises||={};c.partToRoot||={};const key=String(rootMalId);c.franchises[key]={ts:Date.now(),parts};for(const p of parts)c.partToRoot[String(p.mal_id)]=key;localStorage.setItem(MUSIC_CACHE_KEY_V8,JSON.stringify(c));}catch(err){console.warn('Music cache save failed',err);}}
function clearMusicCacheV8(malId){try{const c=readMusicCacheV8(),root=c.partToRoot?.[String(malId)]||String(malId);delete c.franchises?.[root];for(const [k,v] of Object.entries(c.partToRoot||{}))if(String(v)===String(root))delete c.partToRoot[k];localStorage.setItem(MUSIC_CACHE_KEY_V8,JSON.stringify(c));}catch{}}

function humanSeasonlessV8(title){return String(title||'').replace(/\s*[:\-]?\s*(the\s+)?final\s+season.*$/i,'').replace(/\s*[:\-]?\s*season\s*\d+.*$/i,'').replace(/\s*[:\-]?\s*\d+(st|nd|rd|th)\s+season.*$/i,'').replace(/\s*[:\-]?\s*part\s*\d+.*$/i,'').replace(/\s+r\s*\d+.*$/i,'').trim()||String(title||'').trim();}
function jikanFormatV8(x){return String(x||'').toUpperCase().replace('TV SPECIAL','SPECIAL').replace('TV_SHORT','TV_SHORT');}
function isBadFranchiseTitleV8(title){return /\b(junior high|chibi|gaiden|spin[ -]?off|recap|summary|chronicle|movie|picture drama|lost girls|no regrets|ova|special compilation|school caste)\b/i.test(String(title||''));}
function candidateMatchesV8(c,rootBase,rootFormat){
  const title=c.title_english||c.title||'',fmt=jikanFormatV8(c.type||c.format);if(!c.mal_id||!formatAllowedV7(fmt,rootFormat)||isBadFranchiseTitleV8(title))return false;
  const base=seasonlessTitleV7(rootBase),cand=seasonlessTitleV7(title);if(!base||!cand)return false;if(cand===base)return true;
  const bt=titleTokensV7(base),ct=titleTokensV7(title);if(!bt.length)return false;const hit=bt.filter(t=>ct.includes(t)).length,ratio=hit/bt.length;
  const extra=normalize(title).replace(normalize(rootBase),' ');return ratio>=.8&&/\b(season|part|final|chapter|kanketsu|cour|r\s*\d+|\d+(st|nd|rd|th))\b/.test(extra);
}
const AOT_HINTS_V8=[
  {mal_id:16498,title:'Attack on Titan',year:2013,type:'TV'},
  {mal_id:25777,title:'Attack on Titan Season 2',year:2017,type:'TV'},
  {mal_id:35760,title:'Attack on Titan Season 3',year:2018,type:'TV'},
  {mal_id:38524,title:'Attack on Titan Season 3 Part 2',year:2019,type:'TV'},
  {mal_id:40028,title:'Attack on Titan: Final Season',year:2020,type:'TV'},
  {mal_id:48583,title:'Attack on Titan: Final Season Part 2',year:2022,type:'TV'},
  {mal_id:51535,title:'Attack on Titan: Final Season - The Final Chapters',year:2023,type:'Special'},
  {mal_id:53889,title:'Attack on Titan: Final Season - The Final Chapters Part 2',year:2023,type:'Special'}
];
const AOT_IDS_V8=new Set(AOT_HINTS_V8.map(x=>x.mal_id));
async function discoverFranchiseCandidatesV8(entry,media,token){
  let malId=Number(entry.mal_id||media?.idMal||0),aniId=Number(entry.anilist_id||media?.id||0);if(!malId||!aniId){try{const m=await resolveEntryV3(entry,{needDetail:true});malId=Number(entry.mal_id||m?.idMal||malId);aniId=Number(entry.anilist_id||m?.id||aniId);}catch{}}
  const rootTitle=(media?.title?.english||entry.title||media?.title?.romaji||'').split(' / ')[0],rootBase=humanSeasonlessV8(rootTitle),rootFormat=jikanFormatV8(entry.format||media?.format||'TV');
  const map=new Map();const add=c=>{if(c?.mal_id)map.set(Number(c.mal_id),{mal_id:Number(c.mal_id),title:c.title_english||c.title||c.name||`MAL ${c.mal_id}`,year:c.year||c.seasonYear||null,type:c.type||c.format||'',aired:c.aired||null});};
  if(malId)add({mal_id:malId,title:rootTitle,year:entry.year,type:rootFormat});
  if(AOT_IDS_V8.has(malId))AOT_HINTS_V8.forEach(add);
  if(aniId){try{const chain=await collectAniListMainChainV7(aniId,entry,token);for(const n of chain)add({mal_id:n.idMal,title:n.title?.english||n.title?.romaji,year:n.seasonYear,type:n.format});}catch(e){console.warn('V8 AniList chain',e);}}
  if(token!==detailExtrasTokenV6||!openedDetail)return [];
  for(const q of [...new Set([rootBase,rootTitle].filter(x=>x&&x.length>1))].slice(0,2)){
    try{
      const p=await jikanFetchV6(`/anime?q=${encodeURIComponent(q)}&limit=25&order_by=start_date&sort=asc&sfw=true`);
      for(const c of (p?.data||[]))if(candidateMatchesV8(c,rootBase,rootFormat))add(c);
      if(map.size>=4)break;
    }catch(e){console.warn('V8 franchise search',e);}
  }
  // If search was too narrow, follow only Prequel/Sequel relations. This catches sequels with renamed titles.
  if(map.size<3&&malId){
    const q=[malId],seen=new Set();
    while(q.length&&seen.size<12){
      if(token!==detailExtrasTokenV6||!openedDetail)return [];
      const id=Number(q.shift());if(!id||seen.has(id))continue;seen.add(id);
      try{
        const p=await jikanFetchV6(`/anime/${id}/relations`);
        for(const rel of (p?.data||[])){
          if(!['prequel','sequel'].includes(String(rel.relation||'').toLowerCase()))continue;
          for(const en of (rel.entry||[]))if(String(en.type||'').toLowerCase()==='anime'&&en.mal_id){add({mal_id:en.mal_id,title:en.name,type:rootFormat});if(!seen.has(Number(en.mal_id)))q.push(Number(en.mal_id));}
        }
      }catch(e){console.warn('V8 relation crawl',id,e);}
    }
  }
  return [...map.values()].filter((c,i)=>i===0||candidateMatchesV8(c,rootBase,rootFormat)||AOT_IDS_V8.has(c.mal_id)).sort((a,b)=>(Number(a.year)||9999)-(Number(b.year)||9999)||a.mal_id-b.mal_id).slice(0,18);
}
async function fetchThemePartV8(c){
  const p=await jikanFetchV6(`/anime/${Number(c.mal_id)}/themes`);const d=p?.data||{};
  return {mal_id:Number(c.mal_id),title:c.title||`MAL ${c.mal_id}`,year:c.year||null,type:c.type||'',aired:c.aired||null,openings:(d.openings||[]).filter(Boolean),endings:(d.endings||[]).filter(Boolean)};
}
async function collectFranchiseThemesV8(entry,media,token){
  let malId=Number(entry.mal_id||media?.idMal||0);if(!malId){try{await resolveEntryV3(entry,{needDetail:true});malId=Number(entry.mal_id||0);}catch{}}
  const cached=malId?getMusicCacheV8(malId):null;if(cached?.length)return {parts:cached,malId,cached:true};
  const candidates=await discoverFranchiseCandidatesV8(entry,media,token);if(!candidates.length)return {parts:[],malId,cached:false};
  const parts=[];for(let i=0;i<candidates.length;i++){
    if(token!==detailExtrasTokenV6||!openedDetail)return {parts:[],malId,cached:false};
    const status=$('#detailThemesStatus');if(status)status.textContent=`Проверяю части франшизы: ${i+1} / ${candidates.length}…`;
    try{parts.push(await fetchThemePartV8(candidates[i]));}catch(e){console.warn('V8 themes part failed',candidates[i].mal_id,e);}
  }
  const good=parts.filter(p=>p.openings.length||p.endings.length);if(good.length&&malId)saveMusicCacheV8(malId,good);return {parts:good,malId,cached:false};
}
loadFranchiseThemesV6=async function(entry,media,token){
  if(uiSettings?.showThemes===false)return;renderThemesLoadingV6();
  try{
    const {parts,malId,cached}=await collectFranchiseThemesV8(entry,media,token);if(token!==detailExtrasTokenV6||!openedDetail)return;
    if(parts.length){renderFranchiseThemesV6(entry,parts,malId);const ops=flattenFranchiseThemesV6(parts,'openings'),eds=flattenFranchiseThemesV6(parts,'endings'),s=$('#detailThemesStatus');if(s)s.innerHTML=`Франшиза: <b>${parts.length}</b> ${parts.length===1?'часть':'частей'} · <b>${ops.length}</b> OP · <b>${eds.length}</b> ED${cached?' · из кеша':''}`;return;}
  }catch(e){console.warn('V8 franchise themes failed',e);}
  $('#detailOpenings').innerHTML='<div class="theme-empty">Музыку сейчас собрать не удалось.</div>';$('#detailEndings').innerHTML='<div class="theme-empty">Можно нажать «↻ Обновить» и попробовать ещё раз.</div>';const s=$('#detailThemesStatus');if(s)s.textContent='Источник не ответил полностью — попробуй обновить блок.';
};
$('#detailThemesRefresh')?.addEventListener('click',async()=>{
  const entry=currentEntryV5();if(!entry)return;let malId=Number(entry.mal_id||0);if(!malId){try{await resolveEntryV3(entry,{needDetail:true});malId=Number(entry.mal_id||0);}catch{}}
  if(malId)clearMusicCacheV8(malId);const token=++detailExtrasTokenV6;let media=null;try{media=await resolveEntryV3(entry,{needDetail:true});}catch{}loadFranchiseThemesV6(entry,media,token);
});

// Finalize V8 after all earlier startup code.
uiSettings={...V8_DEFAULTS,...uiSettings};applySettings(uiSettings);renderAll();updateMascotSettingsPreviewV8();


/* ===== V9: franchise bundles, season-aware detail, flexible mascot, app navigation ===== */
const V9_DEFAULTS={
  mascotSide:22,mascotBottom:18,mascotOpacity:100,mascotRotate:0,mascotFlip:false,mascotIdle:'none',mascotReturn:20,mascotShadow:true
};
Object.assign(DEFAULT_SETTINGS,V9_DEFAULTS);
uiSettings={...V9_DEFAULTS,...(uiSettings||{})};

const ANILIST_BUNDLE_QUERY_V9=`
query ($id:Int!){
  Media(id:$id,type:ANIME){
    id idMal format status episodes seasonYear genres
    title{romaji english native}
    tags{name rank}
    coverImage{extraLarge large medium color}
    bannerImage
    relations{edges{relationType node{id idMal type format status episodes seasonYear title{romaji english native} coverImage{extraLarge large medium color}}}}
  }
}`;
const bundleNodeCacheV9=new Map();
const bundleByPartV9=new Map();
const GROUPABLE_FORMATS_V9=new Set(['TV','TV_SHORT','SPECIAL','ONA']);
function partFromMediaV9(m){return {anilist_id:Number(m?.id||0)||null,mal_id:Number(m?.idMal||0)||null,title:pickTitle(m),title_romaji:m?.title?.romaji||'',title_native:m?.title?.native||'',format:m?.format||'',status:m?.status||'',episodes:m?.episodes??null,year:m?.seasonYear??null,cover:m?.coverImage?.extraLarge||m?.coverImage?.large||m?.coverImage?.medium||null,oldexternal_url:m?.oldexternal_url||null,oldexternal_russian_title:m?.oldexternal_russian_title||null};}
async function fetchBundleNodeV9(id){
  id=Number(id||0);if(!id)return null;if(bundleNodeCacheV9.has(id))return bundleNodeCacheV9.get(id);
  const p=await anilistFetch(ANILIST_BUNDLE_QUERY_V9,{id});const m=p?.data?.Media||null;if(m)bundleNodeCacheV9.set(id,m);return m;
}
function relationAllowedV9(type,node,seedFormat){
  if(type!=='PREQUEL'&&type!=='SEQUEL')return false;
  if(seedFormat==='MOVIE')return node?.format==='MOVIE';
  return GROUPABLE_FORMATS_V9.has(node?.format||'');
}
function sortBundlePartsV9(a,b){
  const ya=Number(a.year||9999),yb=Number(b.year||9999);if(ya!==yb)return ya-yb;
  const p={TV:0,TV_SHORT:1,ONA:2,SPECIAL:3};const fa=p[a.format]??8,fb=p[b.format]??8;if(fa!==fb)return fa-fb;
  return String(a.title).localeCompare(String(b.title),'en');
}
async function fetchFranchiseBundleV9(seed){
  if(!seed?.id||seed.format==='MOVIE'||!GROUPABLE_FORMATS_V9.has(seed.format||''))return {parts:[partFromMediaV9(seed)],canonical:seed,totalEpisodes:seed?.episodes??null,hasUnknown:seed?.episodes==null};
  const seedId=Number(seed.id);if(bundleByPartV9.has(seedId))return bundleByPartV9.get(seedId);
  const queue=[seedId],seen=new Set(),nodes=new Map(),relationInfo=new Map();
  while(queue.length&&seen.size<20){
    const id=Number(queue.shift());if(!id||seen.has(id))continue;seen.add(id);
    let m=null;try{m=await fetchBundleNodeV9(id);}catch(e){console.warn('V9 bundle node',id,e);}
    if(!m)continue;nodes.set(id,m);
    const rels=(m.relations?.edges||[]).filter(x=>relationAllowedV9(x.relationType,x.node,seed.format));relationInfo.set(id,rels);
    for(const edge of rels){const nid=Number(edge.node?.id||0);if(nid&&!seen.has(nid))queue.push(nid);}
  }
  if(!nodes.size)nodes.set(seedId,seed);
  const raw=[...nodes.values()];
  let root=raw.find(m=>!(relationInfo.get(Number(m.id))||[]).some(e=>e.relationType==='PREQUEL'&&nodes.has(Number(e.node?.id))))||null;
  if(!root)root=[...raw].sort((a,b)=>(Number(a.seasonYear||9999)-Number(b.seasonYear||9999))||String(pickTitle(a)).length-String(pickTitle(b)).length)[0]||seed;
  const parts=raw.map(partFromMediaV9).sort(sortBundlePartsV9);
  const known=parts.reduce((n,p)=>n+(Number(p.episodes)||0),0),hasUnknown=parts.some(p=>p.episodes==null);
  const bundle={parts,canonical:root,totalEpisodes:known||null,hasUnknown};
  for(const p of parts)if(p.anilist_id)bundleByPartV9.set(Number(p.anilist_id),bundle);
  return bundle;
}
function makeBundleMediaV9(bundle,seed){
  const c=bundle.canonical||seed,known=bundle.totalEpisodes;
  const m={...c};m.episodes=known;m.seasonYear=bundle.parts.map(p=>p.year).filter(Boolean).sort((a,b)=>a-b)[0]||c.seasonYear||null;
  m.__franchise_parts=bundle.parts;m.__franchise_unknown=!!bundle.hasUnknown;m.__franchise_all=bundle.parts.length>1;
  return m;
}
async function buildGroupedSearchResultsV9(list,q){
  const out=[],covered=new Set();
  setMessage('Нашёл совпадения — объединяю сезоны…');
  for(const seed of list||[]){
    if(seed?.id&&covered.has(Number(seed.id)))continue;
    let media=seed,bundle=null;
    if(seed?.id&&GROUPABLE_FORMATS_V9.has(seed.format||'')){
      try{bundle=await fetchFranchiseBundleV9(seed);if(bundle?.parts?.length>1){media=makeBundleMediaV9(bundle,seed);for(const p of bundle.parts)if(p.anilist_id)covered.add(Number(p.anilist_id));}}catch(e){console.warn('V9 search bundle',e);}
    }
    if(seed?.id)covered.add(Number(seed.id));
    const s=chooseStyle(media),movie=media.format==='MOVIE',dupes=findDuplicates(media);
    const unknown=media.__franchise_unknown&&Number(media.episodes)>0;
    out.push({media,display_title:pickTitle(media),emoji:s.emoji,descriptor:s.descriptor,episodes_text:unknown?`${media.episodes}+ эпизодов`:episodesText(media.episodes,movie),is_movie:movie,duplicate_sections:dupes.map(d=>SECTION_TITLES[d.section]),bundle_count:media.__franchise_parts?.length||1,is_bundle:!!media.__franchise_all});
  }
  return out;
}
function mediaPartIdsV9(m){
  const al=new Set(),mal=new Set();if(m?.id)al.add(Number(m.id));if(m?.idMal)mal.add(Number(m.idMal));
  for(const p of (m?.__franchise_parts||m?.franchise_parts||[])){if(p.anilist_id)al.add(Number(p.anilist_id));if(p.mal_id)mal.add(Number(p.mal_id));}
  return {al,mal};
}
function entryPartIdsV9(e){
  const al=new Set(),mal=new Set();if(e?.anilist_id)al.add(Number(e.anilist_id));if(e?.mal_id)mal.add(Number(e.mal_id));
  for(const p of (e?.franchise_parts||[])){if(p.anilist_id)al.add(Number(p.anilist_id));if(p.mal_id)mal.add(Number(p.mal_id));}
  return {al,mal};
}
function setsIntersectV9(a,b){for(const x of a)if(b.has(x))return true;return false;}
findDuplicates=function(m){
  const mids=mediaPartIdsV9(m),names=new Set([...aliasesForMedia(m),pickTitle(m)].map(normalize)),found=[];
  Object.entries(latestData.sections||{}).forEach(([section,entries])=>entries.forEach((e,index)=>{const ids=entryPartIdsV9(e),sameId=setsIntersectV9(mids.al,ids.al)||setsIntersectV9(mids.mal,ids.mal),ens=entryNames(e),sameName=[...names].some(n=>ens.has(n));if(sameId||sameName)found.push({section,index,entry:e});}));return found;
};
removeSame=function(entry){
  const ids=entryPartIdsV9(entry),names=entryNames(entry);
  Object.keys(SECTION_TITLES).forEach(section=>latestData.sections[section]=latestData.sections[section].filter(e=>{const x=entryPartIdsV9(e),sameId=setsIntersectV9(ids.al,x.al)||setsIntersectV9(ids.mal,x.mal),en=entryNames(e),sameName=[...names].some(n=>en.has(n));return !(sameId||sameName);}));
};
const buildEntryBeforeV9=buildEntry;
buildEntry=function(m,emoji,descriptor){
  const e=buildEntryBeforeV9(m,emoji,descriptor),parts=m?.__franchise_parts||[];if(parts.length>1){e.franchise_parts=parts.map(p=>({...p}));e.is_franchise=true;e.franchise_count=parts.length;e.franchise_unknown_episodes=!!m.__franchise_unknown;e.episodes=Number(m.episodes)||null;e.episodes_text=e.franchise_unknown_episodes&&e.episodes?`${e.episodes}+ эпизодов`:episodesText(e.episodes,false);e.title=pickTitle(m);e.year=m.seasonYear||e.year;e.format='TV';e.progress=0;}return e;
};
renderResults=function(){
  const el=$('#results');if(!el)return;
  el.innerHTML=searchResults.map((r,i)=>{
    const m=r.media,cover=m.coverImage?.large||m.coverImage?.extraLarge||m.coverImage?.medium||'',format=r.is_movie?'Фильм':(m.format||'Anime'),dup=r.duplicate_sections.length?`<div class="duplicate-badge">Уже есть: ${esc(r.duplicate_sections.join(', '))}</div>`:'',bundle=r.is_bundle?`<span class="bundle-badge">◉ Все сезоны вместе · ${r.bundle_count} частей</span>`:'';
    const opts=r.is_movie?`<option value="movies">🎬 Фильмы посмотреть</option><option value="completed">✅ Посмотрел</option>`:`<option value="planned">📺 Посмотреть</option><option value="watching">▶️ Сейчас</option><option value="completed">✅ Посмотрел</option><option value="paused">⏸️ Отложено</option>`;
    return `<article class="result-card ${r.is_bundle?'bundle-result':''}" data-result-index="${i}">${cover?`<img class="cover" src="${esc(cover)}" alt="">`:`<div class="cover"></div>`}<div class="result-main"><div class="result-title-row"><h3>${esc(r.display_title)}</h3>${bundle}</div><div class="meta">${esc(format)} · ${esc(r.episodes_text)}${m.seasonYear?` · ${m.seasonYear}`:''}${r.is_bundle?' · суммарно':''}</div>${dup}<div class="auto-fields"><input class="emoji-input" value="${esc(r.emoji)}" title="Можно поменять эмодзи"><input class="descriptor-input" value="${esc(r.descriptor)}" title="Можно поменять характеристику"></div><div class="result-actions"><select class="destination">${opts}</select><button onclick="addResult(${i})">Добавить</button></div></div></article>`;
  }).join('');stageElementsV8?.('#results .result-card');
};

async function ensureEntryBundleV9(entry,media=null){
  if(!entry||entry.format==='MOVIE')return null;if(entry.franchise_parts?.length>1)return {parts:entry.franchise_parts,totalEpisodes:entry.episodes,hasUnknown:!!entry.franchise_unknown_episodes,canonical:media};
  const id=Number(entry.anilist_id||media?.id||0);if(!id)return null;
  let seed=media;try{if(!seed||!seed.relations)seed=await fetchBundleNodeV9(id);const b=await fetchFranchiseBundleV9(seed||{id,format:entry.format});if(b.parts.length>1){entry.franchise_parts=b.parts.map(p=>({...p}));entry.is_franchise=true;entry.franchise_count=b.parts.length;entry.franchise_unknown_episodes=b.hasUnknown;entry.episodes=b.totalEpisodes||entry.episodes;entry.episodes_text=b.hasUnknown&&b.totalEpisodes?`${b.totalEpisodes}+ эпизодов`:episodesText(entry.episodes,false);const root=b.canonical;if(root){entry.title=pickTitle(root)||entry.title;entry.anilist_id=root.id||entry.anilist_id;entry.mal_id=root.idMal||entry.mal_id;entry.year=root.seasonYear||entry.year;entry.cover=entry.cover||root.coverImage?.extraLarge||root.coverImage?.large||null;}saveData();return b;}}catch(e){console.warn('V9 ensure bundle',e);}return null;
}
function partLabelV9(p,i){const ep=p.episodes==null?'эпизоды не объявлены':episodesText(p.episodes,p.format==='MOVIE');return `<span>${esc(humanFormat(p.format))} · ${esc(ep)}${p.year?` · ${esc(p.year)}`:''}</span>`;}
function renderDetailPartsV9(entry){
  const sec=$('#detailPartsSection'),box=$('#detailParts'),status=$('#detailPartsStatus');if(!sec||!box)return;const parts=entry?.franchise_parts||[];
  if(parts.length<=1){sec.classList.add('hidden');box.innerHTML='';return;}sec.classList.remove('hidden');status.textContent=`${parts.length} частей основной истории · ${entry.franchise_unknown_episodes?'известно минимум ':''}${entry.episodes||0} эпизодов`;
  box.innerHTML=parts.map((p,i)=>`<article class="detail-part-card"><div class="detail-part-index">${String(i+1).padStart(2,'0')}</div>${p.cover?`<img src="${esc(p.cover)}" alt="">`:''}<div class="detail-part-main"><strong>${esc(p.title)}</strong>${partLabelV9(p,i)}</div><button type="button" onclick="watchFranchisePartV9(${i},this)">▶ OldExternal</button></article>`).join('');
}
async function resolvePartOldExternalV9(part){
  if(part.oldexternal_url)return part.oldexternal_url;if(!part.mal_id)return null;let ru=part.oldexternal_russian_title||'';if(!ru){try{ru=await shikimoriRussianByMal(part.mal_id)||'';}catch{}}if(!ru)return null;part.oldexternal_russian_title=ru;part.oldexternal_url=`https://example.invalid/anime/${oldExternalSlug(ru)}-${part.mal_id}`;saveData();return part.oldexternal_url;
}
async function watchFranchisePartV9(index,btn){
  const entry=currentEntryV5?.();const part=entry?.franchise_parts?.[index];if(!part)return;let tab=null;try{tab=window.open('about:blank','_blank');}catch{}const old=btn?.textContent;if(btn){btn.disabled=true;btn.textContent='Ищу…';}
  try{const url=await resolvePartOldExternalV9(part);if(url){if(tab)tab.location.href=url;else window.open(url,'_blank','noopener,noreferrer');}else{if(tab)tab.close();await copyText(part.title);window.open('https://example.invalid/catalog','_blank','noopener,noreferrer');}}catch(e){if(tab)tab.close();console.warn(e);}finally{if(btn){btn.disabled=false;btn.textContent=old||'▶ OldExternal';}}
}
window.watchFranchisePartV9=watchFranchisePartV9;
function applyBundleDetailSummaryV9(e){
  if(!e?.franchise_parts?.length||e.franchise_parts.length<=1)return;const total=e.episodes||0;$('#detailTitle').textContent=e.title;
  const badges=$('#detailBadges');if(badges&&!badges.querySelector('.detail-badge.franchise'))badges.insertAdjacentHTML('beforeend',`<span class="detail-badge franchise">◉ Все сезоны вместе</span>`);
  const fact=$('#detailFacts');if(fact){const rest=fact.innerHTML.replace(/<div class="detail-fact"><small>(?:Эпизоды|Всего эпизодов|Основных частей)<\/small>[\s\S]*?<\/div>/g,'');fact.innerHTML=`<div class="detail-fact"><small>Всего эпизодов</small><strong>${esc(e.franchise_unknown_episodes?`${total}+`:total)}</strong></div><div class="detail-fact"><small>Основных частей</small><strong>${e.franchise_parts.length}</strong></div>`+rest;}
  $('#detailProgress').max=total||9999;
}
const renderDetailPageBeforeV9=renderDetailPage;
renderDetailPage=function(e,m,section){
  renderDetailPageBeforeV9(e,m,section);renderDetailPartsV9(e);applyBundleDetailSummaryV9(e);
  ensureEntryBundleV9(e,m).then(b=>{if(!b||!openedDetail)return;renderDetailPartsV9(e);applyBundleDetailSummaryV9(e);renderAll();});
};

// Music now uses the exact season list already stored on the grouped title.
loadFranchiseThemesV6=async function(entry,media,token){
  if(uiSettings?.showThemes===false)return;renderThemesLoadingV6();
  try{await ensureEntryBundleV9(entry,media);if(token!==detailExtrasTokenV6||!openedDetail)return;const eps=entry.franchise_parts||[];const candidates=eps.filter(p=>p.mal_id);if(candidates.length){const parts=[];for(let i=0;i<candidates.length;i++){if(token!==detailExtrasTokenV6||!openedDetail)return;const s=$('#detailThemesStatus');if(s)s.textContent=`Загружаю музыку по частям: ${i+1} / ${candidates.length}…`;try{parts.push(await fetchThemePartV8({mal_id:candidates[i].mal_id,title:candidates[i].title,year:candidates[i].year,type:candidates[i].format}));}catch(e){console.warn('V9 music part',e);}}const good=parts.filter(p=>p.openings.length||p.endings.length);if(good.length){renderFranchiseThemesV6(entry,good,Number(entry.mal_id||0));const ops=flattenFranchiseThemesV6(good,'openings'),eds=flattenFranchiseThemesV6(good,'endings'),st=$('#detailThemesStatus');if(st)st.innerHTML=`По сохранённым сезонам: <b>${good.length}</b> частей · <b>${ops.length}</b> OP · <b>${eds.length}</b> ED`;return;}}
  }catch(e){console.warn('V9 exact music failed',e);}
  try{const x=await collectFranchiseThemesV8(entry,media,token);if(x.parts?.length)return renderFranchiseThemesV6(entry,x.parts,x.malId);}catch{}
  $('#detailOpenings').innerHTML='<div class="theme-empty">Музыку сейчас собрать не удалось.</div>';$('#detailEndings').innerHTML='<div class="theme-empty">Попробуй ↻ Обновить.</div>';
};

// Export grouped entries as individual MAL records so external services still understand the list.
function expandedEntriesForExportV9(){
  const out=[];for(const [section,entries] of Object.entries(latestData.sections||{}))for(const e of entries){if(e.franchise_parts?.length>1){let remaining=Math.max(0,Number(e.progress)||0);for(const p of e.franchise_parts){const eps=Number(p.episodes)||0,watched=eps?Math.min(eps,remaining):0;remaining=Math.max(0,remaining-watched);out.push({section,e:{...e,title:p.title,mal_id:p.mal_id,anilist_id:p.anilist_id,episodes:p.episodes,format:p.format,year:p.year,progress:watched,franchise_parts:undefined}});}}else out.push({section,e});}return out;
}
exportMalXml=async function(){
  closeExport();const rows=expandedEntriesForExportV9().filter(x=>x.e.mal_id);const counts={watching:0,completed:0,paused:0,planned:0};rows.forEach(({section})=>{const k=section==='movies'?'planned':section;if(counts[k]!==undefined)counts[k]++;});let xml=`<?xml version="1.0" encoding="UTF-8" ?>
<!-- Created by Local Anime List V9 -->
<myanimelist>
  <myinfo>
    <user_export_type>1</user_export_type>
    <user_total_anime>${rows.length}</user_total_anime>
    <user_total_watching>${counts.watching}</user_total_watching>
    <user_total_completed>${counts.completed}</user_total_completed>
    <user_total_onhold>${counts.paused}</user_total_onhold>
    <user_total_dropped>0</user_total_dropped>
    <user_total_plantowatch>${counts.planned}</user_total_plantowatch>
  </myinfo>
`;rows.forEach(({section,e})=>{const p=Math.max(0,Number(e.progress)||0),eps=Number(e.episodes)||0,score=Number(e.score)||0;xml+=`  <anime>
    <series_animedb_id>${e.mal_id}</series_animedb_id>
    <series_title><![CDATA[${cdata(e.title)}]]></series_title>
    <series_type>${xmlEsc(malSeriesType(e))}</series_type>
    <series_episodes>${eps}</series_episodes>
    <my_id>0</my_id>
    <my_watched_episodes>${p}</my_watched_episodes>
    <my_start_date>0000-00-00</my_start_date>
    <my_finish_date>0000-00-00</my_finish_date>
    <my_score>${score}</my_score>
    <my_status>${xmlEsc(sectionMalStatus(section))}</my_status>
    <my_rewatching>0</my_rewatching>
    <my_rewatching_ep>0</my_rewatching_ep>
    <my_last_updated>0</my_last_updated>
    <my_tags><![CDATA[]]></my_tags>
    <update_on_import>1</update_on_import>
  </anime>
`;});xml+=`</myanimelist>\n`;downloadBlob('anime-list-MAL.xml',xml,'application/xml;charset=utf-8');setMessage(`MAL XML готов: ${rows.length} отдельных записей. Объединённые сезоны автоматически разложены обратно.`,'ok');
};
// Replace old click binding by making the button call the newest export through a capture handler.
$('#exportMalBtn')?.addEventListener('click',e=>{e.stopImmediatePropagation();exportMalXml();},true);

// Mascot V9: trim transparent borders, preserve aspect ratio, precise positioning and temporary alt state.
const setSettingsFormBeforeV9=setSettingsForm;
setSettingsForm=function(s=uiSettings){setSettingsFormBeforeV9(s);$('#settingMascotSide').value=Number(s.mascotSide??22);$('#settingMascotBottom').value=Number(s.mascotBottom??18);$('#settingMascotOpacity').value=Number(s.mascotOpacity??100);$('#settingMascotRotate').value=Number(s.mascotRotate??0);$('#settingMascotFlip').checked=!!s.mascotFlip;$('#settingMascotIdle').value=s.mascotIdle||'none';$('#settingMascotReturn').value=Number(s.mascotReturn??20);$('#settingMascotShadow').checked=s.mascotShadow!==false;updateSettingsLabels();};
const readSettingsFormBeforeV9=readSettingsForm;
readSettingsForm=function(){const s=readSettingsFormBeforeV9();s.mascotSide=Number($('#settingMascotSide').value)||0;s.mascotBottom=Number($('#settingMascotBottom').value)||0;s.mascotOpacity=Number($('#settingMascotOpacity').value)||100;s.mascotRotate=Number($('#settingMascotRotate').value)||0;s.mascotFlip=$('#settingMascotFlip').checked;s.mascotIdle=$('#settingMascotIdle').value||'none';s.mascotReturn=Number($('#settingMascotReturn').value)||20;s.mascotShadow=$('#settingMascotShadow').checked;return s;};
const updateSettingsLabelsBeforeV9=updateSettingsLabels;
updateSettingsLabels=function(){updateSettingsLabelsBeforeV9();const vals={mascotSideValue:`${$('#settingMascotSide')?.value||0}px`,mascotBottomValue:`${$('#settingMascotBottom')?.value||0}px`,mascotOpacityValue:`${$('#settingMascotOpacity')?.value||100}%`,mascotRotateValue:`${$('#settingMascotRotate')?.value||0}°`,mascotReturnValue:`${((Number($('#settingMascotReturn')?.value)||20)/10).toFixed(1)} сек.`};for(const [id,t] of Object.entries(vals)){const el=$('#'+id);if(el)el.textContent=t;}};
const applySettingsBeforeV9=applySettings;
applySettings=function(s=uiSettings){applySettingsBeforeV9(s);const r=document.documentElement,d=$('#mascotDock');r.style.setProperty('--mascot-side',`${Number(s.mascotSide??22)}px`);r.style.setProperty('--mascot-bottom',`${Number(s.mascotBottom??18)}px`);r.style.setProperty('--mascot-opacity',String((Number(s.mascotOpacity??100))/100));r.style.setProperty('--mascot-rotate',`${Number(s.mascotRotate??0)}deg`);if(d){d.classList.toggle('mascot-flip',!!s.mascotFlip);d.classList.toggle('mascot-no-shadow',s.mascotShadow===false);d.dataset.idle=s.mascotIdle||'none';}applyBrandingV9(s);};
function applyBrandingV9(s=uiSettings){const n=(s.siteName||V8_DEFAULTS.siteName).trim();const b=$('#topBrandName');if(b)b.textContent=n;renderTopMiniStatV9();}
renderMascotV8=function(s=uiSettings){
  const dock=$('#mascotDock'),p=$('#mascotPrimary'),a=$('#mascotAlt');if(!dock||!p||!a)return;const has=!!s.mascotImage,hasAlt=!!s.mascotAltImage;dock.classList.toggle('hidden',!(s.mascotEnabled&&has));dock.classList.toggle('position-left',s.mascotPosition==='left');dock.classList.toggle('no-alt',!hasAlt);dock.classList.toggle('mascot-flip',!!s.mascotFlip);dock.classList.toggle('mascot-no-shadow',s.mascotShadow===false);dock.dataset.hover=s.mascotHover||'lift';dock.dataset.click=s.mascotClick||'bounce';dock.dataset.idle=s.mascotIdle||'none';p.src=has?s.mascotImage:'';a.src=hasAlt?s.mascotAltImage:'';const resize=()=>{if(!p.naturalWidth||!p.naturalHeight)return;const h=Number(s.mascotSize)||180,w=Math.max(40,Math.round(h*(p.naturalWidth/p.naturalHeight)));dock.style.width=`${w}px`;dock.style.height=`${h}px`;};if(p.complete)resize();else p.onload=resize;
};
compressImageV8=async function(file){
  if(!file)return '';if(file.type==='image/gif'){if(file.size>1800000)throw new Error('GIF больше 1.8 МБ');return fileToRawDataV8(file);}
  const raw=await fileToRawDataV8(file),img=await new Promise((res,rej)=>{const im=new Image();im.onload=()=>res(im);im.onerror=rej;im.src=raw;});const src=document.createElement('canvas');src.width=img.naturalWidth;src.height=img.naturalHeight;const sctx=src.getContext('2d',{willReadFrequently:true});sctx.clearRect(0,0,src.width,src.height);sctx.drawImage(img,0,0);let x0=0,y0=0,x1=src.width-1,y1=src.height-1;try{const d=sctx.getImageData(0,0,src.width,src.height).data;let minX=src.width,minY=src.height,maxX=-1,maxY=-1;for(let y=0;y<src.height;y+=2)for(let x=0;x<src.width;x+=2){if(d[(y*src.width+x)*4+3]>8){if(x<minX)minX=x;if(y<minY)minY=y;if(x>maxX)maxX=x;if(y>maxY)maxY=y;}}if(maxX>=0){const pad=Math.max(4,Math.round(Math.max(src.width,src.height)*.012));x0=Math.max(0,minX-pad);y0=Math.max(0,minY-pad);x1=Math.min(src.width-1,maxX+pad);y1=Math.min(src.height-1,maxY+pad);}}catch{}const cw=x1-x0+1,ch=y1-y0+1,max=900,scale=Math.min(1,max/Math.max(cw,ch)),c=document.createElement('canvas');c.width=Math.max(1,Math.round(cw*scale));c.height=Math.max(1,Math.round(ch*scale));const ctx=c.getContext('2d');ctx.clearRect(0,0,c.width,c.height);ctx.drawImage(src,x0,y0,cw,ch,0,0,c.width,c.height);return c.toDataURL('image/webp',.92);
};
['settingMascotSide','settingMascotBottom','settingMascotOpacity','settingMascotRotate','settingMascotFlip','settingMascotIdle','settingMascotReturn','settingMascotShadow'].forEach(id=>$('#'+id)?.addEventListener('input',previewSettings));
let mascotReturnTimerV9=null;
$('#mascotButton')?.addEventListener('click',()=>{const d=$('#mascotDock');if(!d||d.classList.contains('hidden'))return;const fx=uiSettings?.mascotClick||'bounce';if(fx==='swap_temp'&&!d.classList.contains('no-alt')){clearTimeout(mascotReturnTimerV9);d.classList.add('is-alt');mascotReturnTimerV9=setTimeout(()=>d.classList.remove('is-alt'),Math.max(500,(Number(uiSettings?.mascotReturn)||20)*100));}},true);

// Top navigation: original layout, keyboard shortcut and random title.
function scrollTargetV9(id){if(id==='movies')return scrollSectionV8('movies');const e=document.getElementById(id);if(e)e.scrollIntoView({behavior:uiSettings?.animations===false?'auto':'smooth',block:'start'});}
document.querySelectorAll('[data-nav-target]').forEach(b=>b.addEventListener('click',()=>scrollTargetV9(b.dataset.navTarget)));
$('#topBrandBtn')?.addEventListener('click',()=>scrollTargetV9('top'));$('#topSettingsBtn')?.addEventListener('click',()=>$('#settingsBtn')?.click());$('#topSearchBtn')?.addEventListener('click',()=>{$('#searchSection')?.scrollIntoView({behavior:'smooth',block:'start'});setTimeout(()=>$('#searchInput')?.focus(),260);});
function renderTopMiniStatV9(){const el=$('#topMiniStat');if(!el||!latestData)return;const n=Object.values(latestData.sections||{}).flat().length;el.textContent=`${n} тайтлов`;}
function openRandomV9(){const pool=[];for(const [section,entries] of Object.entries(latestData.sections||{}))entries.forEach((e,index)=>pool.push({section,index,e}));if(!pool.length)return;const x=pool[Math.floor(Math.random()*pool.length)];openDetails(x.section,x.index);}
$('#topRandomBtn')?.addEventListener('click',openRandomV9);document.addEventListener('keydown',e=>{if(e.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName||'')){e.preventDefault();$('#topSearchBtn')?.click();}});
const renderAllBeforeV9=renderAll;renderAll=function(){renderAllBeforeV9();renderTopMiniStatV9();};

// Existing entries are upgraded lazily on opening, so no saved list is destroyed or rewritten at startup.
uiSettings={...V9_DEFAULTS,...uiSettings};applySettings(uiSettings);renderAll();updateSettingsLabels();

/* ===== V9.1: upgrade existing saved titles into franchise bundles ===== */
const FRANCHISE_SYNC_TTL_V91=1000*60*60*24*7;
let franchiseSyncRunningV91=false;
const sleepV91=ms=>new Promise(r=>setTimeout(r,ms));
function partsWordV91(n){n=Number(n)||0;const n100=n%100,n10=n%10;if(n100>=11&&n100<=14)return 'частей';if(n10===1)return 'часть';if(n10>=2&&n10<=4)return 'части';return 'частей';}
function canAutoCheckFranchiseV91(e){
  if(!e||e.format==='MOVIE'||e.format==='OVA'||e.format==='MUSIC')return false;
  if(e.franchise_parts?.length>1)return false;
  // Old list entries already stored totals for most multi-season shows, so 24+ is a useful
  // low-cost first pass. Manual “Обновить данные” checks every serial.
  return Number(e.episodes||0)>=24 || !!e.is_franchise;
}
async function seedForExistingV91(entry){
  let id=Number(entry?.anilist_id||0);
  if(!id){
    try{await resolveEntryV3(entry,{needDetail:false});id=Number(entry?.anilist_id||0);}catch(e){console.warn('V9.1 resolve old entry',entry?.title,e);}
  }
  if(!id)return null;
  try{return await fetchBundleNodeV9(id);}catch(e){console.warn('V9.1 seed node',entry?.title,e);return null;}
}
function seedHasMainRelationV91(seed){
  return (seed?.relations?.edges||[]).some(x=>relationAllowedV9(x.relationType,x.node,seed?.format));
}
async function upgradeExistingEntryV91(entry,{force=false}={}){
  if(!entry||entry.format==='MOVIE'||entry.format==='OVA'||entry.format==='MUSIC')return false;
  if(entry.franchise_parts?.length>1){entry.franchise_count=entry.franchise_parts.length;entry.is_franchise=true;return false;}
  const last=Number(entry.franchise_checked_v91||0);
  if(!force&&last&&Date.now()-last<FRANCHISE_SYNC_TTL_V91)return false;
  const seed=await seedForExistingV91(entry);entry.franchise_checked_v91=Date.now();
  if(!seed)return false;
  const stored=Number(entry.episodes||0),single=Number(seed.episodes||0);
  // Crawl only when AniList says there is a main sequel/prequel, or the old saved total is
  // clearly larger than this single AniList season.
  if(!seedHasMainRelationV91(seed)&&!(stored&&single&&stored>single))return false;
  try{
    const b=await fetchFranchiseBundleV9(seed);
    if(!b?.parts?.length||b.parts.length<=1)return false;
    const oldProgress=Number(entry.progress||0),oldScore=entry.score,oldEmoji=entry.emoji,oldDescriptor=entry.descriptor,oldNote=entry.note;
    entry.franchise_parts=b.parts.map(p=>({...p}));
    entry.is_franchise=true;
    entry.franchise_count=b.parts.length;
    entry.franchise_unknown_episodes=!!b.hasUnknown;
    entry.episodes=b.totalEpisodes||entry.episodes;
    entry.episodes_text=b.hasUnknown&&b.totalEpisodes?`${b.totalEpisodes}+ эпизодов`:episodesText(entry.episodes,false);
    const root=b.canonical;
    if(root){
      entry.title=pickTitle(root)||entry.title;
      entry.anilist_id=root.id||entry.anilist_id;
      entry.mal_id=root.idMal||entry.mal_id;
      entry.year=root.seasonYear||entry.year;
      entry.cover=entry.cover||root.coverImage?.extraLarge||root.coverImage?.large||root.coverImage?.medium||null;
      entry.aliases=[...new Set([...(entry.aliases||[]),...aliasesForMedia(root)].filter(Boolean))];
    }
    // Never lose personal fields during the migration.
    entry.progress=oldProgress;entry.score=oldScore;entry.emoji=oldEmoji;entry.descriptor=oldDescriptor;entry.note=oldNote;
    entry.franchise_synced_at=Date.now();
    return true;
  }catch(e){console.warn('V9.1 bundle upgrade',entry?.title,e);return false;}
}
function safeSyncMessageV91(text,type=''){
  const q=$('#searchInput');
  if((q?.value||'').trim()||searchResults?.length)return;
  setMessage(text,type);
}
async function syncExistingFranchisesV91({force=false,auto=false}={}){
  if(franchiseSyncRunningV91)return;
  franchiseSyncRunningV91=true;
  try{
    const jobs=[];
    for(const section of ['watching','planned','completed','paused']){
      for(const entry of (latestData.sections?.[section]||[])){
        if(force||canAutoCheckFranchiseV91(entry))jobs.push({section,entry});
      }
    }
    if(!jobs.length)return;
    let changed=0,checked=0;
    safeSyncMessageV91(auto?'Проверяю старые записи и объединяю сезоны…':'Обновляю данные и объединяю сезоны…');
    for(const job of jobs){
      const did=await upgradeExistingEntryV91(job.entry,{force});checked++;
      if(did){changed++;saveData();renderAll();}
      if(checked%4===0)saveData();
      safeSyncMessageV91(`Объединяю старые записи… ${checked} / ${jobs.length}${changed?` · обновлено ${changed}`:''}`);
      // Gentle pacing so the background migration does not hammer AniList while the UI stays usable.
      await sleepV91(force?300:650);
    }
    saveData();renderAll();
    safeSyncMessageV91(changed?`Готово: ${changed} ${changed===1?'тайтл обновлён':'тайтлов обновлено'} до формата «все сезоны вместе».`:'Данные проверены — новых объединений не понадобилось.','ok');
  }finally{franchiseSyncRunningV91=false;}
}
window.syncExistingFranchisesV91=syncExistingFranchisesV91;

// Existing-list cards now visibly use the same franchise language as grouped search results.
animeCard=function(e,s,i){
  const img=e.cover?`<img class="card-cover" src="${esc(e.cover)}" alt="${esc(e.title)}">`:`<div class="card-cover placeholder"><span>${esc(e.emoji||'🎌')}</span></div>`;
  const score=e.score?`<span class="user-score-badge">⭐ ${esc(e.score)}/10</span>`:'';
  const bundled=!!(e.franchise_parts?.length>1||e.is_franchise&&e.franchise_count>1);
  const count=Number(e.franchise_parts?.length||e.franchise_count||0);
  const eps=e.franchise_unknown_episodes&&e.episodes?`${e.episodes}+ эпизодов`:(e.episodes_text||episodesText(e.episodes,false));
  const info=bundled
    ?`<div class="card-line card-bundle-meta"><span>TV</span><span>·</span><strong>${esc(eps)}</strong>${e.year?`<span>·</span><span>${esc(e.year)}</span>`:''}<span>·</span><span class="sum-word">суммарно</span></div><div class="card-franchise-badge">◉ Все сезоны вместе · ${count} ${partsWordV91(count)}</div><div class="card-line card-descriptor-line">${esc(e.descriptor||'интересное')}</div>`
    :`<div class="card-line">${esc(e.episodes_text)} · ${esc(e.descriptor)}${e.year?` · ${e.year}`:''}</div>`;
  return `<article class="anime-card ${bundled?'franchise-card':''}"><button class="card-cover-click" onclick="openDetails('${s}',${i})" title="Открыть ${esc(e.title)}">${img}</button><div><div class="card-topline"><button class="card-title-button" onclick="openDetails('${s}',${i})">${esc(e.emoji)} ${esc(e.title)}</button>${score}</div>${info}${cardProgress(e)}${e.note?`<div class="card-line">${esc(e.note)}</div>`:''}<div class="card-actions"><button onclick="openMove('${s}',${i})">Переместить</button><button onclick="editEntry('${s}',${i})">✏️ Изменить</button><button onclick="toggleQueue('${s}',${i})">🗓️ Далее</button><button class="danger" onclick="deleteEntry('${s}',${i})">Удалить</button></div></div></article>`;
};

// “Обновить данные” now also upgrades old entries, not only covers/IDs.
const enrichMissingCoversBeforeV91=enrichMissingCovers;
enrichMissingCovers=async function(){
  try{await enrichMissingCoversBeforeV91();}catch(e){console.warn('V9.1 old data refresh',e);}
  await syncExistingFranchisesV91({force:true,auto:false});
};

// Do a one-time gentle background pass after loading V9.1. Attack on Titan and other old
// aggregate entries update automatically without the user having to remove/re-add them.
setTimeout(()=>syncExistingFranchisesV91({force:false,auto:true}),1200);
renderAll();

/* ===== V10: catalog, filters and local taste recommendations ===== */
const CATALOG_FILTER_KEY_V10='animeCatalogFiltersV10';
const CATALOG_REC_KEY_V10='animeCatalogRecommendationsV10';
const CATALOG_REC_TTL_V10=1000*60*60*12;
const CATALOG_GENRES_V10=['Action','Adventure','Comedy','Drama','Ecchi','Fantasy','Horror','Mahou Shoujo','Mecha','Music','Mystery','Psychological','Romance','Sci-Fi','Slice of Life','Sports','Supernatural','Thriller'];
const CATALOG_QUERY_V10=`
query($page:Int,$search:String,$genre:String,$format:MediaFormat,$status:MediaStatus,$start:FuzzyDateInt,$end:FuzzyDateInt,$sort:[MediaSort]){
  Page(page:$page,perPage:24){
    pageInfo{total currentPage lastPage hasNextPage}
    media(type:ANIME,isAdult:false,search:$search,genre:$genre,format:$format,status:$status,startDate_greater:$start,startDate_lesser:$end,sort:$sort){
      id idMal type format status episodes duration seasonYear averageScore popularity isAdult
      title{romaji english native}
      genres
      coverImage{extraLarge large medium color}
      relations{edges{relationType node{id type format}}}
    }
  }
}`;
const CATALOG_SAFE_QUERY_V101=`
query($page:Int,$search:String,$format:MediaFormat,$status:MediaStatus,$sort:[MediaSort]){
  Page(page:$page,perPage:20){
    pageInfo{total currentPage lastPage hasNextPage}
    media(type:ANIME,isAdult:false,search:$search,format:$format,status:$status,sort:$sort){
      id idMal type format status episodes duration seasonYear averageScore popularity isAdult
      title{romaji english native}
      genres
      coverImage{extraLarge large medium color}
    }
  }
}`;
const CATALOG_RANDOM_META_QUERY_V101=`
query{
  Page(page:1,perPage:1){
    pageInfo{total lastPage}
    media(type:ANIME,isAdult:false,format_not:OVA){id}
  }
}`;
const CATALOG_RANDOM_ONE_QUERY_V101=`
query($page:Int){
  Page(page:$page,perPage:1){
    media(type:ANIME,isAdult:false,format_not:OVA){
      id idMal type format status episodes duration seasonYear averageScore popularity isAdult
      title{romaji english native}
      genres
      coverImage{extraLarge large medium color}
    }
  }
}`;
const TASTE_QUERY_V10=`
query($ids:[Int]){
  Page(page:1,perPage:12){
    media(id_in:$ids,type:ANIME){
      id title{romaji english native} genres tags{name rank}
      recommendations(sort:RATING_DESC,perPage:18){
        nodes{
          rating
          mediaRecommendation{
            id idMal type format status episodes duration seasonYear averageScore popularity trending source isAdult
            title{romaji english native}
            genres tags{name rank}
            coverImage{extraLarge large medium color}
            bannerImage
            nextAiringEpisode{episode airingAt}
            relations{edges{relationType node{id type format}}}
          }
        }
      }
    }
  }
}`;
const catalogStateV10={page:1,hasNext:false,total:0,items:[],media:new Map(),mode:'catalog',preset:'trending',loading:false,recommendations:[],tasteGenres:[],tasteSources:[],filters:null};
window.catalogStateV10=catalogStateV10;

function catalogDefaultFiltersV10(){return {search:'',sort:'POPULARITY_DESC',format:'',status:'',genre:'',yearFrom:'',yearTo:'',score:0,length:'',hideOwned:true,firstSeason:true};}
function catalogLoadFiltersV10(){try{return {...catalogDefaultFiltersV10(),...JSON.parse(localStorage.getItem(CATALOG_FILTER_KEY_V10)||'{}')}}catch{return catalogDefaultFiltersV10()}}
function catalogSaveFiltersV10(){try{localStorage.setItem(CATALOG_FILTER_KEY_V10,JSON.stringify(catalogStateV10.filters||catalogDefaultFiltersV10()))}catch{}}
function catalogSetFormV10(f){f={...catalogDefaultFiltersV10(),...(f||{})};catalogStateV10.filters=f;$('#catalogSearch').value=f.search||'';$('#catalogSort').value=f.sort||'POPULARITY_DESC';$('#catalogFormat').value=f.format||'';$('#catalogStatus').value=f.status||'';$('#catalogGenre').value=f.genre||'';$('#catalogYearFrom').value=f.yearFrom||'';$('#catalogYearTo').value=f.yearTo||'';$('#catalogScore').value=Number(f.score)||0;$('#catalogLength').value=f.length||'';$('#catalogHideOwned').checked=f.hideOwned!==false;$('#catalogFirstSeason').checked=f.firstSeason!==false;catalogUpdateScoreLabelV10();}
function catalogReadFormV10(){return {search:$('#catalogSearch').value.trim(),sort:$('#catalogSort').value||'POPULARITY_DESC',format:$('#catalogFormat').value||'',status:$('#catalogStatus').value||'',genre:$('#catalogGenre').value||'',yearFrom:$('#catalogYearFrom').value.trim(),yearTo:$('#catalogYearTo').value.trim(),score:Number($('#catalogScore').value)||0,length:$('#catalogLength').value||'',hideOwned:$('#catalogHideOwned').checked,firstSeason:$('#catalogFirstSeason').checked};}
function catalogUpdateScoreLabelV10(){const n=Number($('#catalogScore')?.value||0),e=$('#catalogScoreValue');if(e)e.textContent=n?`от ${(n/10).toFixed(1)}`:'без ограничения';}
function catalogPopulateGenresV10(){const s=$('#catalogGenre');if(!s)return;const current=s.value;s.innerHTML='<option value="">Все жанры</option>'+CATALOG_GENRES_V10.map(g=>`<option value="${esc(g)}">${esc(g)}</option>`).join('');s.value=current||catalogStateV10.filters?.genre||'';}
function catalogOwnedIdsV10(){const ids=new Set();for(const entries of Object.values(latestData?.sections||{})){if(!Array.isArray(entries))continue;for(const e of entries){if(e?.anilist_id)ids.add(Number(e.anilist_id));for(const p of e?.franchise_parts||[])if(p?.anilist_id)ids.add(Number(p.anilist_id));}}return ids;}
function catalogOwnedInfoV10(m){const d=findDuplicates(m);if(!d.length)return null;return d[0];}
function catalogHasPrequelV10(m){return (m?.relations?.edges||[]).some(e=>e?.relationType==='PREQUEL'&&e?.node?.type==='ANIME');}
function catalogClientFilterV10(m,f){if(!m||m.isAdult)return false;if(f.score&&Number(m.averageScore||0)<Number(f.score))return false;const ep=Number(m.episodes||0);if(f.length==='long'&&ep&&ep<=50)return false;if(f.length&&f.length!=='long'){const mx=Number(f.length);if(ep&&ep>mx)return false;}if(f.hideOwned&&catalogOwnedInfoV10(m))return false;if(f.firstSeason&&f.format!=='MOVIE'&&catalogHasPrequelV10(m))return false;return true;}
function catalogFormatTextV10(m){const fm={TV:'TV',TV_SHORT:'TV',MOVIE:'Фильм',OVA:'OVA',ONA:'ONA',SPECIAL:'Спешл',MUSIC:'Клип'}[m?.format]||m?.format||'Аниме';const ep=m?.format==='MOVIE'?'1 фильм':(m?.episodes?episodesText(m.episodes,false):'серии ?');return `${fm} · ${ep}`;}
function catalogCardV10(m,{recommendation=false,why=''}={}){if(!m?.id)return '';catalogStateV10.media.set(Number(m.id),m);const cover=m.coverImage?.extraLarge||m.coverImage?.large||m.coverImage?.medium||'';const title=pickTitle(m),score=m.averageScore?`★ ${(m.averageScore/10).toFixed(1)}`:'';const owned=catalogOwnedInfoV10(m),ownedText=owned?SECTION_TITLES[owned.section]?.replace(/^[^ ]+\s*/,'')||'В списке':'';const airing=m.status==='RELEASING'&&!owned;const statusBadge=owned?`<span class="catalog-owned-badge">✓ ${esc(ownedText)}</span>`:(airing?`<span class="catalog-airing-badge">● Онгоинг</span>`:'');const addLabel=owned?'Открыть':(m.format==='MOVIE'?'+ Фильм':'+ В список');return `<article class="catalog-card ${recommendation?'catalog-rec-card':''}" data-catalog-id="${m.id}"><div class="catalog-poster-wrap"><button type="button" onclick="openCatalogMediaV10(${m.id})" style="position:absolute;inset:0;border:0;padding:0;background:transparent;z-index:1" aria-label="Открыть ${esc(title)}"></button>${cover?`<img class="catalog-poster" src="${esc(cover)}" alt="${esc(title)}" loading="lazy">`:`<div class="catalog-poster-placeholder">🎌</div>`}${score?`<span class="catalog-score-badge">${score}</span>`:''}${statusBadge}<div class="catalog-poster-actions"><button type="button" onclick="event.stopPropagation();openCatalogMediaV10(${m.id})">Подробнее</button><button class="primary" type="button" onclick="event.stopPropagation();catalogAddMenuV10(${m.id})">${addLabel}</button></div></div><div class="catalog-card-title">${esc(title)}</div><div class="catalog-card-meta">${m.seasonYear?`<span class="year">${m.seasonYear}</span><span>·</span>`:''}<span>${esc(catalogFormatTextV10(m))}</span></div>${why?`<div class="catalog-why">${esc(why)}</div>`:''}</article>`;}
function catalogRegisterItemsV10(items){for(const x of items||[]){const m=x?.media||x;if(m?.id)catalogStateV10.media.set(Number(m.id),m);}}
function catalogRenderGridV10(){const grid=$('#catalogGrid'),empty=$('#catalogEmpty'),load=$('#catalogLoadMore');if(!grid)return;const recMode=catalogStateV10.mode==='recommendations';const arr=recMode?catalogStateV10.recommendations:catalogStateV10.items;grid.innerHTML=arr.map((x,i)=>{const m=x?.media||x;return catalogCardV10(m,{recommendation:recMode,why:x?.why||''}).replace('<article class="catalog-card','<article style="animation-delay:'+Math.min(i,20)*18+'ms" class="catalog-card');}).join('');empty.classList.toggle('hidden',arr.length>0);load.classList.toggle('hidden',recMode||!catalogStateV10.hasNext);$('#catalogResultCount').textContent=recMode?`${arr.length} рекомендаций`:(catalogStateV10.total?`${arr.length} в выдаче · ~${catalogStateV10.total.toLocaleString('ru-RU')} всего`:`${arr.length} в выдаче`);}
function catalogSetLoadingV10(on,text='Загружаю каталог…'){catalogStateV10.loading=on;const grid=$('#catalogGrid');if(on&&grid&&!catalogStateV10.items.length)grid.innerHTML=`<div class="catalog-skeleton-row" style="grid-column:1/-1;height:420px"></div>`;if(on)$('#catalogResultCount').textContent=text;$('#catalogApplyBtn').disabled=on;$('#catalogLoadMore').disabled=on;}
function catalogSortListV101(f){const primary=f.sort||'POPULARITY_DESC';return f.search?['SEARCH_MATCH',primary]:[primary];}
function catalogSafeClientFilterV101(m,f){if(!m||m.isAdult)return false;if(f.genre&&!(m.genres||[]).includes(f.genre))return false;const y=Number(m.seasonYear||0),yf=Number(f.yearFrom||0),yt=Number(f.yearTo||0);if(yf&&y&&y<yf)return false;if(yt&&y&&y>yt)return false;if(f.score&&Number(m.averageScore||0)<Number(f.score))return false;const ep=Number(m.episodes||0);if(f.length==='long'&&ep&&ep<=50)return false;if(f.length&&f.length!=='long'){const mx=Number(f.length);if(ep&&ep>mx)return false;}if(f.hideOwned&&catalogOwnedInfoV10(m))return false;return true;}
async function catalogRequestPageV101(f,pageNo){const vars={page:pageNo,search:f.search||null,genre:f.genre||null,format:f.format||null,status:f.status||null,start:f.yearFrom?Number(f.yearFrom)*10000:null,end:f.yearTo?Number(f.yearTo)*10000+1231:null,sort:catalogSortListV101(f)};try{return {payload:await anilistFetch(CATALOG_QUERY_V10,vars),safe:false};}catch(firstErr){console.warn('V10.1 catalog primary request failed, retrying safe mode',firstErr);const safeVars={page:pageNo,search:f.search||null,format:f.format||null,status:f.status||null,sort:catalogSortListV101(f)};return {payload:await anilistFetch(CATALOG_SAFE_QUERY_V101,safeVars),safe:true};}}
async function catalogFetchPageV10({append=false}={}){if(catalogStateV10.loading)return;catalogStateV10.mode='catalog';const f=catalogStateV10.filters=catalogReadFormV10();catalogSaveFiltersV10();if(!append){catalogStateV10.page=1;catalogStateV10.items=[];}catalogSetLoadingV10(true);catalogMarkPresetV10(null);$('#catalogModeLabel').textContent='КАТАЛОГ';$('#catalogResultsTitle').textContent=f.search?`Поиск: ${f.search}`:(f.genre?`${f.genre} · аниме`:'Каталог аниме');try{const r=await catalogRequestPageV101(f,catalogStateV10.page),page=r.payload?.data?.Page||{},raw=page.media||[],filterFn=r.safe?catalogSafeClientFilterV101:catalogClientFilterV10;let filtered=raw.filter(m=>filterFn(m,f));catalogRegisterItemsV10(filtered);catalogStateV10.items=append?[...catalogStateV10.items,...filtered]:filtered;catalogStateV10.hasNext=!!page.pageInfo?.hasNextPage;catalogStateV10.total=Number(page.pageInfo?.total||0);catalogRenderGridV10();if(r.safe&&catalogStateV10.items.length)$('#catalogResultCount').textContent+=` · запасной режим`;if(!catalogStateV10.items.length&&catalogStateV10.hasNext&&!append){let tries=0,nextPage=catalogStateV10.page;while(!catalogStateV10.items.length&&tries<2&&catalogStateV10.hasNext){tries++;nextPage++;const rr=await catalogRequestPageV101(f,nextPage),pp=rr.payload?.data?.Page||{},rrRaw=pp.media||[],ff=rr.safe?catalogSafeClientFilterV101:catalogClientFilterV10,more=rrRaw.filter(m=>ff(m,f));catalogRegisterItemsV10(more);catalogStateV10.items.push(...more);catalogStateV10.hasNext=!!pp.pageInfo?.hasNextPage;catalogStateV10.total=Number(pp.pageInfo?.total||catalogStateV10.total);if(more.length)catalogStateV10.page=nextPage;}catalogRenderGridV10();}}catch(e){console.warn('V10.1 catalog failed after fallback',e);catalogStateV10.hasNext=false;catalogStateV10.total=0;catalogStateV10.items=[];catalogRenderGridV10();$('#catalogResultCount').textContent=`Не удалось загрузить каталог`; }finally{catalogSetLoadingV10(false);}}
function catalogMarkPresetV10(name){document.querySelectorAll('[data-catalog-preset]').forEach(b=>b.classList.toggle('active',!!name&&b.dataset.catalogPreset===name));catalogStateV10.preset=name||'';}
function catalogApplyPresetV10(name){const y=new Date().getFullYear(),f=catalogDefaultFiltersV10();if(name==='for-you'){catalogStateV10.mode='recommendations';catalogMarkPresetV10(name);$('#catalogModeLabel').textContent='ДЛЯ ТЕБЯ';$('#catalogResultsTitle').textContent='Рекомендации под твой вкус';catalogRenderGridV10();if(!catalogStateV10.recommendations.length)catalogLoadRecommendationsV10();return;}if(name==='trending'){f.sort='TRENDING_DESC';}else if(name==='best'){f.sort='SCORE_DESC';f.score=75;}else if(name==='airing'){f.status='RELEASING';f.sort='TRENDING_DESC';}else if(name==='new'){f.sort='START_DATE_DESC';f.yearFrom=String(y-1);}else if(name==='movies'){f.format='MOVIE';f.sort='SCORE_DESC';f.firstSeason=false;}else if(name==='short'){f.length='13';f.sort='POPULARITY_DESC';}catalogSetFormV10(f);catalogMarkPresetV10(name);catalogFetchPageV10();}
function catalogShowV10(){document.body.classList.add('catalog-mode');$('#catalogView').classList.remove('hidden');$('#topCatalogBtn')?.classList.add('active');window.scrollTo({top:0,behavior:uiSettings?.animations===false?'auto':'smooth'});if(!catalogStateV10.filters){catalogStateV10.filters=catalogLoadFiltersV10();catalogSetFormV10(catalogStateV10.filters);}if(!catalogStateV10.items.length)catalogApplyPresetV10('trending');catalogLoadRecommendationsV10();}
function catalogHideV10(target='top'){document.body.classList.remove('catalog-mode');$('#catalogView').classList.add('hidden');$('#topCatalogBtn')?.classList.remove('active');setTimeout(()=>scrollTargetV9?.(target),20);}
window.catalogShowV10=catalogShowV10;window.catalogHideV10=catalogHideV10;

function catalogTasteEntriesV10(){const pos=[],neg=[];for(const [section,entries] of Object.entries(latestData?.sections||{})){if(!['completed','watching'].includes(section))continue;for(const e of entries||[]){const id=Number(e?.anilist_id||0),score=Number(e?.score||0);if(!id)continue;if(score>=7)pos.push({e,id,w:1.2+(score-6)*.72,score});else if(section==='completed'&&!score)pos.push({e,id,w:1.05,score:0});else if(score&&score<=5)neg.push({e,id,w:-.5-(6-score)*.18,score});}}pos.sort((a,b)=>b.w-a.w);return {pos:[...new Map(pos.map(x=>[x.id,x])).values()].slice(0,8),neg:[...new Map(neg.map(x=>[x.id,x])).values()].slice(0,4)};}
async function catalogResolveTasteIdsV10(){let t=catalogTasteEntriesV10();if(t.pos.length>=3)return t;const candidates=[...(latestData?.sections?.completed||[])].filter(e=>!e.anilist_id).slice(0,4);for(const e of candidates){try{await resolveEntryV3(e,{needDetail:false});}catch{}await new Promise(r=>setTimeout(r,220));}saveData();return catalogTasteEntriesV10();}
function catalogRecSignatureV10(t){return [...t.pos.map(x=>`${x.id}:${x.score||0}`),...t.neg.map(x=>`-${x.id}:${x.score||0}`)].join('|');}
function catalogReadRecCacheV10(sig){try{const x=JSON.parse(localStorage.getItem(CATALOG_REC_KEY_V10)||'null');if(x&&x.sig===sig&&Date.now()-Number(x.ts||0)<CATALOG_REC_TTL_V10)return x}catch{}return null;}
function catalogSaveRecCacheV10(sig,items,tasteGenres,sources){try{localStorage.setItem(CATALOG_REC_KEY_V10,JSON.stringify({sig,ts:Date.now(),items,tasteGenres,sources}))}catch{}}
function catalogRenderPersonalV10(){const rail=$('#catalogPersonalRail');if(!rail)return;const items=catalogStateV10.recommendations.slice(0,10);catalogRegisterItemsV10(items);rail.innerHTML=items.length?items.map(x=>catalogCardV10(x.media,{recommendation:true,why:x.why})).join(''):'<div class="catalog-empty" style="min-height:180px;min-width:100%"><span>✨</span><b>Пока мало данных</b><p>Оцени несколько просмотренных аниме — рекомендации станут точнее.</p></div>';const chips=$('#catalogTasteChips');chips.innerHTML=(catalogStateV10.tasteGenres||[]).slice(0,6).map(x=>`<span class="catalog-taste-chip"><strong>${esc(x.name)}</strong> ${Math.round(x.value*10)/10}</span>`).join('');const h=$('#catalogTasteHint');if(h){const src=(catalogStateV10.tasteSources||[]).slice(0,3);h.textContent=src.length?`Основано прежде всего на: ${src.join(' · ')}. Запланированное не влияет на вкус.`:'Поставь оценки просмотренному — тогда подборка будет точнее.';}}
function catalogWhyV10(sourceNames,genres){const src=[...new Set(sourceNames)].slice(0,2),gs=[...new Set(genres)].slice(0,2);if(src.length&&gs.length)return `Похож на ${src.join(' / ')} · совпадает по ${gs.join(', ')}`;if(src.length)return `Пользователи советуют после ${src.join(' / ')}`;if(gs.length)return `Совпадает с твоим вкусом: ${gs.join(', ')}`;return 'Подобрано по твоему просмотренному';}
async function catalogTasteFallbackV10(topGenre,owned){try{const p=await anilistFetch(CATALOG_QUERY_V10,{page:1,search:null,genre:topGenre||null,format:null,status:null,start:null,end:null,sort:['SCORE_DESC','POPULARITY_DESC']}),list=p?.data?.Page?.media||[];return list.filter(m=>m?.id&&!owned.has(Number(m.id))&&!m.isAdult&&!catalogHasPrequelV10(m)).slice(0,12).map(m=>({media:m,why:`Любимый жанр: ${topGenre}`,rank:(m.averageScore||0)/10}));}catch{return [];}}
async function catalogLoadRecommendationsV10(force=false){const rail=$('#catalogPersonalRail');if(rail&&(!catalogStateV10.recommendations.length||force))rail.innerHTML='<div class="catalog-skeleton-row"></div>';let t=await catalogResolveTasteIdsV10(),sig=catalogRecSignatureV10(t);if(!force){const c=catalogReadRecCacheV10(sig);if(c){catalogStateV10.recommendations=c.items||[];catalogStateV10.tasteGenres=c.tasteGenres||[];catalogStateV10.tasteSources=c.sources||[];catalogRegisterItemsV10(catalogStateV10.recommendations);catalogRenderPersonalV10();if(catalogStateV10.mode==='recommendations')catalogRenderGridV10();return;}}
  const owned=catalogOwnedIdsV10();if(!t.pos.length){catalogStateV10.recommendations=[];catalogStateV10.tasteGenres=[];catalogStateV10.tasteSources=[];catalogRenderPersonalV10();if(catalogStateV10.mode==='recommendations')catalogRenderGridV10();return;}
  const all=[...t.pos,...t.neg],weights=new Map(all.map(x=>[x.id,x.w])),positive=new Set(t.pos.map(x=>x.id));try{const p=await anilistFetch(TASTE_QUERY_V10,{ids:all.map(x=>x.id)}),sources=p?.data?.Page?.media||[],profile=new Map(),cands=new Map(),sourceNames=[];for(const s of sources){const w=weights.get(Number(s.id))||0;if(w>0)sourceNames.push(pickTitle(s));for(const g of s.genres||[])profile.set(g,(profile.get(g)||0)+w);if(!positive.has(Number(s.id)))continue;for(const r of s.recommendations?.nodes||[]){const m=r?.mediaRecommendation;if(!m?.id||m.type!=='ANIME'||m.isAdult||owned.has(Number(m.id)))continue;let x=cands.get(Number(m.id));if(!x){x={media:m,rank:0,sources:[],genres:[]};cands.set(Number(m.id),x);}x.rank+=w*3.5+Math.log1p(Math.max(0,Number(r.rating||0)))*.85+(Number(m.averageScore||0)/100);x.sources.push(pickTitle(s));}}
    const taste=[...profile.entries()].sort((a,b)=>b[1]-a[1]).map(([name,value])=>({name,value}));for(const x of cands.values()){const matched=(x.media.genres||[]).filter(g=>(profile.get(g)||0)>.5).sort((a,b)=>(profile.get(b)||0)-(profile.get(a)||0));x.rank+=matched.slice(0,3).reduce((n,g)=>n+Math.max(-1,profile.get(g)||0)*.35,0);x.why=catalogWhyV10(x.sources,matched);}let arr=[...cands.values()].sort((a,b)=>b.rank-a.rank).slice(0,24);if(arr.length<12){const fb=await catalogTasteFallbackV10(taste[0]?.name,owned),seen=new Set(arr.map(x=>Number(x.media.id)));for(const x of fb)if(!seen.has(Number(x.media.id))){arr.push(x);seen.add(Number(x.media.id));if(arr.length>=24)break;}}catalogStateV10.recommendations=arr;catalogStateV10.tasteGenres=taste;catalogStateV10.tasteSources=[...new Set(sourceNames)].slice(0,5);catalogRegisterItemsV10(arr);catalogSaveRecCacheV10(sig,arr,taste,catalogStateV10.tasteSources);catalogRenderPersonalV10();if(catalogStateV10.mode==='recommendations')catalogRenderGridV10();}catch(e){console.warn('V10 recommendations',e);const fb=await catalogTasteFallbackV10('',owned);catalogStateV10.recommendations=fb;catalogRenderPersonalV10();if(catalogStateV10.mode==='recommendations')catalogRenderGridV10();}}

function catalogEnsurePreviewSectionV10(){if(!Object.prototype.hasOwnProperty.call(latestData.sections,'__catalog_preview'))Object.defineProperty(latestData.sections,'__catalog_preview',{value:[],writable:true,configurable:true,enumerable:false});return latestData.sections.__catalog_preview;}
async function openCatalogMediaV10(id){id=Number(id);const m=catalogStateV10.media.get(id);if(!m)return;const dup=catalogOwnedInfoV10(m);if(dup){openDetails(dup.section,dup.index);return;}const temp=catalogEnsurePreviewSectionV10(),s=chooseStyle(m),e=buildEntry(m,s.emoji,s.descriptor);e.__catalog_preview=true;temp.splice(0,temp.length,e);openDetails('__catalog_preview',0);const dest=m.format==='MOVIE'?'movies':'planned';setTimeout(()=>{const sel=$('#detailSection');if(sel)sel.value=dest;},0);}
window.openCatalogMediaV10=openCatalogMediaV10;
function catalogAddMenuV10(id){id=Number(id);const m=catalogStateV10.media.get(id);if(!m)return;const dup=catalogOwnedInfoV10(m);if(dup){openDetails(dup.section,dup.index);return;}$('#modalTitle').textContent=`Добавить ${pickTitle(m)}`;$('#modalText').textContent=m.format==='MOVIE'?'Куда добавить фильм?':'Выбери раздел. Сезоны основной истории будут объединены автоматически.';const opts=m.format==='MOVIE'?[['movies','🎬 Фильмы посмотреть'],['completed','✅ Уже посмотрел']]:[['planned','📺 Посмотреть'],['watching','▶️ Сейчас'],['completed','✅ Посмотрел'],['paused','⏸️ Отложено']];$('#modalActions').innerHTML=opts.map(([k,l])=>`<button onclick="catalogCommitAddV10(${id},'${k}')">${l}</button>`).join('');$('#modal').classList.remove('hidden');}
window.catalogAddMenuV10=catalogAddMenuV10;
async function catalogCommitAddV10(id,dest){id=Number(id);let m=catalogStateV10.media.get(id);if(!m)return;closeModal();const oldText=$('#catalogResultCount').textContent;$('#catalogResultCount').textContent='Подготавливаю запись…';try{if(m.id&&GROUPABLE_FORMATS_V9.has(m.format||'')){const b=await fetchFranchiseBundleV9(m);if(b?.parts?.length>1)m=makeBundleMediaV9(b,m);}const dup=findDuplicates(m);if(dup.length){openDetails(dup[0].section,dup[0].index);return;}const s=chooseStyle(m),e=buildEntry(m,s.emoji,s.descriptor);latestData.sections[dest].push(e);saveData();renderAll();catalogRenderGridV10();catalogRenderPersonalV10();$('#catalogResultCount').textContent=`Добавлено: ${e.title}`;setTimeout(()=>{if($('#catalogResultCount').textContent.startsWith('Добавлено:'))catalogRenderGridV10();},1600);}catch(err){console.warn('V10 add',err);$('#catalogResultCount').textContent=oldText;}}
window.catalogCommitAddV10=catalogCommitAddV10;

let catalogRandomBusyV101=false;
async function catalogRandomV10(){if(catalogRandomBusyV101)return;catalogRandomBusyV101=true;const btn=$('#catalogRandomBtn'),top=$('#topRandomBtn'),old=btn?.textContent;if(btn){btn.disabled=true;btn.textContent='🎲 Ищу…';}if(top)top.classList.add('is-loading');try{let meta=Number(sessionStorage.getItem('animeRandomTotalNoOvaV101')||0);if(!meta){const p=await anilistFetch(CATALOG_RANDOM_META_QUERY_V101,{});meta=Number(p?.data?.Page?.pageInfo?.lastPage||p?.data?.Page?.pageInfo?.total||0);if(meta)sessionStorage.setItem('animeRandomTotalNoOvaV101',String(meta));}if(!meta)throw new Error('Не удалось узнать размер каталога');for(let attempt=0;attempt<4;attempt++){const page=Math.max(1,Math.floor(Math.random()*meta)+1),p=await anilistFetch(CATALOG_RANDOM_ONE_QUERY_V101,{page}),m=p?.data?.Page?.media?.[0];if(!m||m.format==='OVA'||m.isAdult)continue;catalogStateV10.media.set(Number(m.id),m);openCatalogMediaV10(m.id);return;}throw new Error('Случайный тайтл не найден');}catch(e){console.warn('V10.1 global random',e);setMessage('Не получилось выбрать случайное аниме. Нажми ещё раз.','error');}finally{catalogRandomBusyV101=false;if(btn){btn.disabled=false;btn.textContent=old||'🎲 Случайное';}if(top)top.classList.remove('is-loading');}}
function catalogResetV10(){catalogSetFormV10(catalogDefaultFiltersV10());catalogApplyPresetV10('trending');}
let catalogSearchTimerV10=null;
function catalogInitV10(){catalogStateV10.filters=catalogLoadFiltersV10();catalogPopulateGenresV10();catalogSetFormV10(catalogStateV10.filters);$('#topCatalogBtn')?.addEventListener('click',catalogShowV10);$('#footerCatalogBtn')?.addEventListener('click',catalogShowV10);$('#catalogHomeBtn')?.addEventListener('click',()=>catalogHideV10('top'));$('#catalogApplyBtn')?.addEventListener('click',()=>catalogFetchPageV10());$('#catalogResetBtn')?.addEventListener('click',catalogResetV10);$('#catalogLoadMore')?.addEventListener('click',()=>{catalogStateV10.page++;catalogFetchPageV10({append:true});});$('#catalogRandomBtn')?.addEventListener('click',catalogRandomV10);$('#catalogRefreshRecBtn')?.addEventListener('click',()=>catalogLoadRecommendationsV10(true));$('#catalogScore')?.addEventListener('input',catalogUpdateScoreLabelV10);document.querySelectorAll('[data-catalog-preset]').forEach(b=>b.addEventListener('click',()=>catalogApplyPresetV10(b.dataset.catalogPreset)));$('#catalogSearch')?.addEventListener('input',()=>{clearTimeout(catalogSearchTimerV10);catalogSearchTimerV10=setTimeout(()=>{catalogStateV10.filters=catalogReadFormV10();catalogFetchPageV10();},480);});$('#catalogSearch')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();clearTimeout(catalogSearchTimerV10);catalogFetchPageV10();}});
  document.querySelectorAll('[data-nav-target]').forEach(b=>b.addEventListener('click',()=>{if(document.body.classList.contains('catalog-mode'))catalogHideV10(b.dataset.navTarget||'top');}));$('#topRandomBtn')?.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();catalogRandomV10();},true);$('#topSearchBtn')?.addEventListener('click',()=>{if(document.body.classList.contains('catalog-mode'))setTimeout(()=>$('#catalogSearch')?.focus(),20);});document.addEventListener('keydown',e=>{if(e.key==='/'&&document.body.classList.contains('catalog-mode')&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName||'')){e.preventDefault();e.stopImmediatePropagation();setTimeout(()=>$('#catalogSearch')?.focus(),0);}},true);
}
catalogInitV10();


/* ===== V11: reliable catalog core ===== */
const CATALOG_SIMPLE_QUERY_V11=`
query($page:Int,$search:String,$sort:[MediaSort]){
  Page(page:$page,perPage:50){
    pageInfo{total currentPage lastPage hasNextPage}
    media(type:ANIME,isAdult:false,search:$search,sort:$sort){
      id idMal type format status episodes duration seasonYear averageScore popularity isAdult
      title{romaji english native}
      genres
      coverImage{extraLarge large medium color}
      relations{edges{relationType node{id type format}}}
    }
  }
}`;
const CATALOG_V11_MIGRATION='catalogV11MigrationDone';
function catalogDefaultFiltersV10(){return {search:'',sort:'POPULARITY_DESC',format:'',status:'',genre:'',yearFrom:'',yearTo:'',score:0,length:'',hideOwned:true,firstSeason:false};}
function catalogMigrateFiltersV11(){
  if(localStorage.getItem(CATALOG_V11_MIGRATION))return;
  const f=catalogLoadFiltersV10();
  f.firstSeason=false;
  if(f.yearFrom==='1990'&&f.yearTo==='2026'){f.yearFrom='';f.yearTo='';}
  localStorage.setItem(CATALOG_FILTER_KEY_V10,JSON.stringify(f));
  localStorage.setItem(CATALOG_V11_MIGRATION,'1');
  catalogStateV10.filters=f;
  catalogSetFormV10(f);
}
function catalogTitleLooksLikeContinuationV11(m){
  const t=[m?.title?.english,m?.title?.romaji].filter(Boolean).join(' ').toLowerCase();
  return /(?:season\s*[2-9]|[2-9](?:nd|rd|th)\s+season|part\s*[2-9]|cour\s*[2-9]|final\s+season|chapter\s*[2-9])/.test(t);
}
function catalogClientFilterV11(m,f,{jikan=false}={}){
  if(!m||m.isAdult)return false;
  if(f.format&&String(m.format||'').toUpperCase()!==String(f.format).toUpperCase())return false;
  if(f.status){
    const st=String(m.status||'').toUpperCase().replace(/ /g,'_');
    const map={AIRING:'RELEASING',CURRENTLY_AIRING:'RELEASING',FINISHED_AIRING:'FINISHED',NOT_YET_AIRED:'NOT_YET_RELEASED'};
    if((map[st]||st)!==f.status)return false;
  }
  if(f.genre&&!(m.genres||[]).some(g=>String(g).toLowerCase()===String(f.genre).toLowerCase()))return false;
  const y=Number(m.seasonYear||0),yf=Number(f.yearFrom||0),yt=Number(f.yearTo||0);
  if(yf&&y&&y<yf)return false;if(yt&&y&&y>yt)return false;
  if(f.score&&Number(m.averageScore||0)<Number(f.score))return false;
  const ep=Number(m.episodes||0);
  if(f.length==='long'&&ep&&ep<=50)return false;
  if(f.length&&f.length!=='long'){const mx=Number(f.length);if(ep&&ep>mx)return false;}
  if(f.hideOwned&&catalogOwnedInfoV10(m))return false;
  if(f.firstSeason){
    if(!jikan&&catalogHasPrequelV10(m))return false;
    if(jikan&&catalogTitleLooksLikeContinuationV11(m))return false;
  }
  return true;
}
function catalogSortListV11(f){
  if(f.search)return ['SEARCH_MATCH'];
  const primary=f.sort||'POPULARITY_DESC';
  return [primary];
}
async function catalogAniListPageV11(f,pageNo){
  return anilistFetch(CATALOG_SIMPLE_QUERY_V11,{page:pageNo,search:f.search||null,sort:catalogSortListV11(f)});
}
function catalogJikanOrderV11(f){
  if(f.sort==='SCORE_DESC')return ['score','desc'];
  if(f.sort==='START_DATE_DESC')return ['start_date','desc'];
  if(f.sort==='TRENDING_DESC')return ['popularity','asc'];
  return ['popularity','asc'];
}
function catalogJikanStatusV11(status){return ({RELEASING:'airing',FINISHED:'complete',NOT_YET_RELEASED:'upcoming'})[status]||'';}
function catalogJikanTypeV11(format){return ({TV:'tv',MOVIE:'movie',OVA:'ova',ONA:'ona',SPECIAL:'special',MUSIC:'music'})[format]||'';}
function catalogJikanMediaV11(j){
  const m=jikanMediaLike(j);
  m.id=-Number(j.mal_id||0);m.idMal=Number(j.mal_id||0)||null;m.__jikan=true;
  m.coverImage={extraLarge:j.images?.webp?.large_image_url||j.images?.jpg?.large_image_url||null,large:j.images?.webp?.large_image_url||j.images?.jpg?.large_image_url||null,medium:j.images?.webp?.image_url||j.images?.jpg?.image_url||null};
  m.status=({Currently_Airing:'RELEASING','Currently Airing':'RELEASING','Finished Airing':'FINISHED','Not yet aired':'NOT_YET_RELEASED','Not Yet Aired':'NOT_YET_RELEASED'})[j.status]||j.status;
  return m;
}
async function catalogJikanPageV11(f,pageNo){
  const [order,sort]=catalogJikanOrderV11(f),p=new URLSearchParams();
  p.set('page',String(pageNo));p.set('limit','25');p.set('sfw','true');p.set('order_by',order);p.set('sort',sort);
  if(f.search)p.set('q',f.search);
  const type=catalogJikanTypeV11(f.format);if(type)p.set('type',type);
  const status=catalogJikanStatusV11(f.status);if(status)p.set('status',status);
  if(f.score)p.set('min_score',(Number(f.score)/10).toFixed(1));
  if(f.yearFrom)p.set('start_date',`${f.yearFrom}-01-01`);
  if(f.yearTo)p.set('end_date',`${f.yearTo}-12-31`);
  const data=await jikanFetchV6(`/anime?${p.toString()}`);
  return {items:(data?.data||[]).map(catalogJikanMediaV11),pagination:data?.pagination||{}};
}
function catalogMediaKeyV11(m){return Number(m?.id||0)||(-Number(m?.idMal||0));}
function catalogRegisterItemsV10(items){for(const x of items||[]){const m=x?.media||x,key=catalogMediaKeyV11(m);if(key)catalogStateV10.media.set(key,m);}}
function catalogCardV10(m,{recommendation=false,why=''}={}){
  const key=catalogMediaKeyV11(m);if(!key)return '';
  catalogStateV10.media.set(key,m);const cover=m.coverImage?.extraLarge||m.coverImage?.large||m.coverImage?.medium||'',title=pickTitle(m),score=m.averageScore?`★ ${(m.averageScore/10).toFixed(1)}`:'',owned=catalogOwnedInfoV10(m),ownedText=owned?SECTION_TITLES[owned.section]?.replace(/^[^ ]+\s*/,'')||'В списке':'',airing=String(m.status||'').toUpperCase()==='RELEASING'&&!owned,statusBadge=owned?`<span class="catalog-owned-badge">✓ ${esc(ownedText)}</span>`:(airing?`<span class="catalog-airing-badge">● Онгоинг</span>`:''),addLabel=owned?'Открыть':(m.format==='MOVIE'?'+ Фильм':'+ В список');
  return `<article class="catalog-card ${recommendation?'catalog-rec-card':''}" data-catalog-id="${key}"><div class="catalog-poster-wrap"><button type="button" onclick="openCatalogMediaV10(${key})" style="position:absolute;inset:0;border:0;padding:0;background:transparent;z-index:1" aria-label="Открыть ${esc(title)}"></button>${cover?`<img class="catalog-poster" src="${esc(cover)}" alt="${esc(title)}" loading="lazy">`:`<div class="catalog-poster-placeholder">🎌</div>`}${score?`<span class="catalog-score-badge">${score}</span>`:''}${statusBadge}<div class="catalog-poster-actions"><button type="button" onclick="event.stopPropagation();openCatalogMediaV10(${key})">Подробнее</button><button class="primary" type="button" onclick="event.stopPropagation();catalogAddMenuV10(${key})">${addLabel}</button></div></div><div class="catalog-card-title">${esc(title)}</div><div class="catalog-card-meta">${m.seasonYear?`<span class="year">${m.seasonYear}</span><span>·</span>`:''}<span>${esc(catalogFormatTextV10(m))}</span></div>${why?`<div class="catalog-why">${esc(why)}</div>`:''}</article>`;
}
async function catalogResolveMediaV11(m){
  if(!m?.__jikan)return m;
  if(m.idMal){
    try{const p=await anilistFetch(DETAIL_BY_MAL_QUERY,{idMal:Number(m.idMal)}),a=p?.data?.Media;if(a){catalogStateV10.media.set(Number(a.id),a);return a;}}catch(e){console.warn('V11 AniList enrichment skipped',e);}
  }
  return {...m,id:null};
}
async function openCatalogMediaV10(id){
  id=Number(id);let m=catalogStateV10.media.get(id);if(!m)return;m=await catalogResolveMediaV11(m);const dup=catalogOwnedInfoV10(m);if(dup){openDetails(dup.section,dup.index);return;}const temp=catalogEnsurePreviewSectionV10(),s=chooseStyle(m),e=buildEntry(m,s.emoji,s.descriptor);e.__catalog_preview=true;temp.splice(0,temp.length,e);openDetails('__catalog_preview',0);const dest=m.format==='MOVIE'?'movies':'planned';setTimeout(()=>{const sel=$('#detailSection');if(sel)sel.value=dest;},0);
}
window.openCatalogMediaV10=openCatalogMediaV10;
function catalogAddMenuV10(id){id=Number(id);const m=catalogStateV10.media.get(id);if(!m)return;const dup=catalogOwnedInfoV10(m);if(dup){openDetails(dup.section,dup.index);return;}$('#modalTitle').textContent=`Добавить ${pickTitle(m)}`;$('#modalText').textContent=m.format==='MOVIE'?'Куда добавить фильм?':'Выбери раздел. Сезоны основной истории будут объединены автоматически.';const opts=m.format==='MOVIE'?[['movies','🎬 Фильмы посмотреть'],['completed','✅ Уже посмотрел']]:[['planned','📺 Посмотреть'],['watching','▶️ Сейчас'],['completed','✅ Посмотрел'],['paused','⏸️ Отложено']];$('#modalActions').innerHTML=opts.map(([k,l])=>`<button onclick="catalogCommitAddV10(${id},'${k}')">${l}</button>`).join('');$('#modal').classList.remove('hidden');}
window.catalogAddMenuV10=catalogAddMenuV10;
async function catalogCommitAddV10(id,dest){
  id=Number(id);let m=catalogStateV10.media.get(id);if(!m)return;closeModal();const oldText=$('#catalogResultCount').textContent;$('#catalogResultCount').textContent='Подготавливаю запись…';try{m=await catalogResolveMediaV11(m);if(m.id&&GROUPABLE_FORMATS_V9.has(m.format||'')){const b=await fetchFranchiseBundleV9(m);if(b?.parts?.length>1)m=makeBundleMediaV9(b,m);}const dup=findDuplicates(m);if(dup.length){openDetails(dup[0].section,dup[0].index);return;}const s=chooseStyle(m),e=buildEntry(m,s.emoji,s.descriptor);latestData.sections[dest].push(e);saveData();renderAll();catalogRenderGridV10();catalogRenderPersonalV10();$('#catalogResultCount').textContent=`Добавлено: ${e.title}`;setTimeout(()=>catalogRenderGridV10(),1500);}catch(err){console.warn('V11 add',err);$('#catalogResultCount').textContent=oldText;}}
window.catalogCommitAddV10=catalogCommitAddV10;
function catalogSetEmptyV11(title,text,detail=''){
  const t=$('#catalogEmptyTitle'),p=$('#catalogEmptyText');if(t)t.textContent=title;if(p)p.textContent=text;
  let d=$('#catalogErrorDetail');if(!d&&detail){d=document.createElement('div');d.id='catalogErrorDetail';d.className='catalog-error-detail';$('#catalogEmpty')?.appendChild(d);}if(d)d.textContent=detail||'';
}
async function catalogFetchPageV10({append=false}={}){
  if(catalogStateV10.loading)return;catalogStateV10.mode='catalog';const f=catalogStateV10.filters=catalogReadFormV10();catalogSaveFiltersV10();if(!append){catalogStateV10.page=1;catalogStateV10.items=[];}catalogSetLoadingV10(true);catalogMarkPresetV10(null);$('#catalogModeLabel').textContent='КАТАЛОГ';$('#catalogResultsTitle').textContent=f.search?`Поиск: ${f.search}`:(f.genre?`${f.genre} · аниме`:'Каталог аниме');
  let source='AniList',lastErr=null,hasMore=false,total=0,accepted=[];
  try{
    const startPage=catalogStateV10.page,maxPages=append?1:4;
    for(let offset=0;offset<maxPages&&accepted.length<(append?12:30);offset++){
      const pageNo=startPage+offset;
      try{
        const payload=await catalogAniListPageV11(f,pageNo),page=payload?.data?.Page||{},raw=page.media||[],filtered=raw.filter(m=>catalogClientFilterV11(m,f));accepted.push(...filtered);hasMore=!!page.pageInfo?.hasNextPage;total=Number(page.pageInfo?.total||total);catalogStateV10.page=pageNo;if(!hasMore)break;
      }catch(e){lastErr=e;accepted=[];break;}
    }
    if(!accepted.length){
      source='Jikan';const start=append?catalogStateV10.page+1:1;for(let offset=0;offset<(append?1:3)&&accepted.length<(append?12:30);offset++){
        const r=await catalogJikanPageV11(f,start+offset),filtered=(r.items||[]).filter(m=>catalogClientFilterV11(m,f,{jikan:true}));accepted.push(...filtered);hasMore=!!r.pagination?.has_next_page;total=Number(r.pagination?.items?.total||total);catalogStateV10.page=start+offset;if(!hasMore)break;
      }
    }
    const uniq=new Map();for(const m of accepted){const k=m.idMal?`mal:${m.idMal}`:`ani:${m.id}`;if(!uniq.has(k))uniq.set(k,m);}accepted=[...uniq.values()];catalogRegisterItemsV10(accepted);catalogStateV10.items=append?[...catalogStateV10.items,...accepted]:accepted;catalogStateV10.hasNext=hasMore;catalogStateV10.total=total;catalogRenderGridV10();
    if(catalogStateV10.items.length){$('#catalogResultCount').innerHTML=`${catalogStateV10.items.length} в выдаче${total?` · ~${Number(total).toLocaleString('ru-RU')} всего`:''}<span class="catalog-source-note">${source}</span>`;catalogSetEmptyV11('Ничего не нашлось','Попробуй ослабить фильтры или выбрать другую подборку.');}
    else catalogSetEmptyV11('По этим фильтрам пусто','Сбрось часть фильтров — сам каталог работает.',source==='Jikan'?'Проверены два источника: AniList и Jikan.':'');
  }catch(e){lastErr=e;catalogStateV10.hasNext=false;catalogStateV10.total=0;catalogStateV10.items=[];catalogRenderGridV10();catalogSetEmptyV11('Каталог временно недоступен','Нажми «Повторить». Если один источник не отвечает, сайт автоматически попробует другой.',String(e?.message||e));$('#catalogResultCount').textContent='Ошибка загрузки';console.warn('V11 catalog both sources failed',e);}finally{catalogSetLoadingV10(false);}
}
function catalogResetV10(){const f=catalogDefaultFiltersV10();catalogSetFormV10(f);catalogSaveFiltersV10();catalogApplyPresetV10('trending');}
function catalogShowV10(){document.body.classList.add('catalog-mode');$('#catalogView').classList.remove('hidden');$('#topCatalogBtn')?.classList.add('active');window.scrollTo({top:0,behavior:uiSettings?.animations===false?'auto':'smooth'});if(!catalogStateV10.filters){catalogStateV10.filters=catalogLoadFiltersV10();catalogSetFormV10(catalogStateV10.filters);}if(!catalogStateV10.items.length)catalogApplyPresetV10('trending');catalogLoadRecommendationsV10();}
window.catalogShowV10=catalogShowV10;
function catalogInitV11(){
  catalogMigrateFiltersV11();
  $('#catalogRetryBtn')?.addEventListener('click',()=>catalogFetchPageV10());
  $('#catalogEmptyResetBtn')?.addEventListener('click',catalogResetV10);
}
setTimeout(catalogInitV11,0);

/* ===== V12: living shell + catalog that never silently dies ===== */
const SIDEBAR_STATE_KEY_V12='animeSidebarCollapsedV12';
const CATALOG_COUNT_CACHE_V12='animeCatalogUniverseV12';
const CATALOG_PAGE_CACHE_V12='animeCatalogLastGoodV12';
const CATALOG_COUNT_TTL_V12=1000*60*60*24;
const CATALOG_PAGE_CACHE_TTL_V12=1000*60*60*8;
const CATALOG_YEAR_BUCKETS_V12=[
  {key:'future',from:2020,to:2039,label:'2020–2039'},
  {key:'y2010',from:2010,to:2019,label:'2010-е'},
  {key:'y2000',from:2000,to:2009,label:'2000-е'},
  {key:'y1990',from:1990,to:1999,label:'1990-е'},
  {key:'y1980',from:1980,to:1989,label:'1980-е'},
  {key:'classic',from:1900,to:1979,label:'классика'}
];
let catalogUniverseV12={total:0,buckets:[],ts:0};
let catalogAutoObserverV12=null;
let catalogAutoLoadBusyV12=false;

function fmtNumV12(n){return Number(n||0).toLocaleString('ru-RU');}
function sectionCountV12(k){return Array.isArray(latestData?.sections?.[k])?latestData.sections[k].length:0;}
function updateSidebarStatsV12(){
  const set=(id,v)=>{const e=$(id);if(e)e.textContent=String(v)};
  const total=['watching','planned','movies','completed','paused'].reduce((n,k)=>n+sectionCountV12(k),0);
  set('#sidebarTotalCount',total);set('#sidebarWatchingCount',sectionCountV12('watching'));set('#sidebarPlannedCount',sectionCountV12('planned'));set('#sidebarMoviesCount',sectionCountV12('movies'));set('#sidebarCompletedCount',sectionCountV12('completed'));set('#sidebarPausedCount',sectionCountV12('paused'));set('#sidebarQueueCount',(latestData?.next_queue||[]).length);
  if(catalogUniverseV12.total)set('#sidebarCatalogTotal',catalogUniverseV12.total>9999?'10k+':fmtNumV12(catalogUniverseV12.total));
  document.querySelectorAll('#lists .anime-section').forEach((el,i)=>{const k=['watching','planned','movies','completed','paused'][i];if(k)el.id=`section-${k}`;});
}
function setSidebarActiveV12(route){document.querySelectorAll('.sidebar-nav-btn[data-sidebar-route]').forEach(b=>b.classList.toggle('active',b.dataset.sidebarRoute===route));}
function closeSidebarMobileV12(){document.body.classList.remove('sidebar-mobile-open');}
function scrollSectionV12(section){
  if(document.body.classList.contains('catalog-mode'))catalogHideV10(`section-${section}`);
  setTimeout(()=>{document.querySelector(`#section-${section}`)?.scrollIntoView({behavior:uiSettings?.animations===false?'auto':'smooth',block:'start'});},40);closeSidebarMobileV12();
}
function initSidebarV12(){
  const collapsed=localStorage.getItem(SIDEBAR_STATE_KEY_V12)==='1';document.body.classList.toggle('sidebar-collapsed',collapsed);
  $('#sidebarToggleBtn')?.addEventListener('click',()=>{if(innerWidth<=900){closeSidebarMobileV12();return;}document.body.classList.toggle('sidebar-collapsed');localStorage.setItem(SIDEBAR_STATE_KEY_V12,document.body.classList.contains('sidebar-collapsed')?'1':'0');});
  $('#sidebarMobileBtn')?.addEventListener('click',()=>document.body.classList.toggle('sidebar-mobile-open'));
  $('#sidebarBackdrop')?.addEventListener('click',closeSidebarMobileV12);
  document.querySelectorAll('[data-side-section]').forEach(b=>b.addEventListener('click',()=>scrollSectionV12(b.dataset.sideSection)));
  $('#sidebarForYouBtn')?.addEventListener('click',()=>{catalogShowV10();setTimeout(()=>catalogApplyPresetV10('for-you'),30);closeSidebarMobileV12();});
  $('#topCatalogBtn')?.addEventListener('click',()=>{setSidebarActiveV12('catalog');closeSidebarMobileV12();});
  document.querySelectorAll('[data-nav-target]').forEach(b=>b.addEventListener('click',()=>{if(b.dataset.navTarget==='top')setSidebarActiveV12('overview');else if(b.dataset.navTarget==='lists')setSidebarActiveV12('list');closeSidebarMobileV12();}));
  window.addEventListener('resize',()=>{if(innerWidth>900)closeSidebarMobileV12();});
  updateSidebarStatsV12();
}

function findQueueEntryV12(q){
  for(const [section,entries] of Object.entries(latestData?.sections||{})){if(!Array.isArray(entries)||section.startsWith('__'))continue;const idx=entries.findIndex(e=>(q.anilist_id&&Number(e.anilist_id)===Number(q.anilist_id))||normalize(e.title)===normalize(q.title));if(idx>=0)return {section,index:idx,entry:entries[idx]};}
  return null;
}
function incrementProgressV12(section,index){const e=latestData?.sections?.[section]?.[index];if(!e)return;const max=Number(e.episodes||0),p=Number(e.progress||0);e.progress=max?Math.min(max,p+1):p+1;saveData();renderAll();setMessage(`${e.title}: ${e.progress}${max?` / ${max}`:''}`,'ok');}
function renderHomePulseV12(){
  const root=$('#homePulse');if(!root)return;
  const watching=(latestData?.sections?.watching||[]).filter(Boolean),entry=watching.find(e=>!e.episodes||Number(e.progress||0)<Number(e.episodes||0))||watching[0];
  const q=(latestData?.next_queue||[])[0],qFound=q?findQueueEntryV12(q):null;
  const planned=latestData?.sections?.planned||[],surprise=planned.length?planned[Math.floor((Date.now()/86400000)%planned.length)]:null;
  if(!entry){root.innerHTML=`<div class="home-pulse-empty"><div><div class="home-mini-kicker">ТВОЙ ОБЗОР</div><h3>Здесь появится продолжение просмотра</h3><p>Добавь аниме в «Сейчас», и главная станет твоей стартовой точкой.</p></div><button type="button" onclick="catalogShowV10()">◇ Открыть каталог</button></div>`;return;}
  const idx=(latestData.sections.watching||[]).indexOf(entry),p=Math.max(0,Number(entry.progress||0)),eps=Math.max(0,Number(entry.episodes||0)),pct=eps?Math.min(100,p/eps*100):0,cover=entry.cover||'';
  const qHtml=q?`<div class="home-side-card"><small>Следующее в очереди</small><div class="home-side-title">${esc(q.title)}</div><p>${qFound?`${esc(qFound.entry.episodes_text||'')} · ${esc(qFound.entry.descriptor||'')}`:'Стоит первым в разделе «Далее».'}</p>${qFound?`<button type="button" onclick="openDetails('${qFound.section}',${qFound.index})">Открыть</button>`:`<button type="button" onclick="document.querySelector('#queueSection')?.scrollIntoView({behavior:'smooth'})">К очереди</button>`}</div>`:`<div class="home-side-card"><small>Очередь</small><div class="home-side-title">Добавь, что смотреть после</div><p>Раздел «Далее» помогает не потеряться между тайтлами.</p><button type="button" onclick="document.querySelector('#queueAddBtn')?.click()">＋ Добавить</button></div>`;
  const sHtml=surprise?`<div class="home-side-card"><small>Из «Посмотреть»</small><div class="home-side-title">${esc(surprise.title)}</div><p>${esc(surprise.episodes_text||'')} · ${esc(surprise.descriptor||'')}</p><button type="button" onclick="openDetails('planned',${planned.indexOf(surprise)})">Напомнить себе</button></div>`:`<div class="home-side-card"><small>Открыть новое</small><div class="home-side-title">Не знаешь, что дальше?</div><p>Каталог умеет подбирать тайтлы по твоим оценкам.</p><button type="button" onclick="catalogShowV10();setTimeout(()=>catalogApplyPresetV10('for-you'),30)">Для меня</button></div>`;
  root.innerHTML=`${cover?`<div class="home-pulse-bg" style="background-image:url('${esc(cover)}')"></div>`:''}<div class="home-pulse-inner"><div class="home-now">${cover?`<img class="home-now-cover" src="${esc(cover)}" alt="">`:`<div class="home-now-cover"></div>`}<div class="home-now-copy"><div class="home-mini-kicker">ПРОДОЛЖИТЬ</div><h2>${esc(entry.emoji||'')} ${esc(entry.title)}</h2><div class="home-now-meta">${esc(entry.episodes_text||'')} · ${esc(entry.descriptor||'')}${entry.year?` · ${entry.year}`:''}</div><div class="home-now-progress"><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div><span>${p}${eps?` / ${eps}`:''}</span></div><div class="home-now-actions"><button type="button" onclick="openDetails('watching',${idx})">Открыть страницу</button><button class="secondary" type="button" onclick="incrementProgressV12('watching',${idx})">＋ 1 серия</button></div></div></div><div class="home-side-stack">${qHtml}${sHtml}</div></div>`;
}
window.incrementProgressV12=incrementProgressV12;

/* ----- Catalog V12: simple first, targeted second, cached third ----- */
const CATALOG_FIELDS_V12=`
  id idMal type format status episodes duration seasonYear averageScore popularity isAdult
  title{romaji english native}
  genres
  coverImage{extraLarge large medium color}
  relations{edges{relationType node{id type format}}}
`;
function catalogSafeSortV12(f){const allowed=new Set(['POPULARITY_DESC','SCORE_DESC','TRENDING_DESC','START_DATE_DESC']);return allowed.has(f?.sort)?f.sort:'POPULARITY_DESC';}
function catalogBareQueryV12(f){const sort=f.search?'SEARCH_MATCH':catalogSafeSortV12(f);return `query($page:Int,$search:String){Page(page:$page,perPage:50){pageInfo{total currentPage lastPage hasNextPage}media(type:ANIME,isAdult:false,search:$search,sort:[${sort}]){${CATALOG_FIELDS_V12}}}}`;}
function catalogTargetQueryV12(f){const sort=f.search?'SEARCH_MATCH':catalogSafeSortV12(f);return `query($page:Int,$search:String,$genre:String,$format:MediaFormat,$status:MediaStatus,$start:FuzzyDateInt,$end:FuzzyDateInt){Page(page:$page,perPage:50){pageInfo{total currentPage lastPage hasNextPage}media(type:ANIME,isAdult:false,search:$search,genre:$genre,format:$format,status:$status,startDate_greater:$start,startDate_lesser:$end,sort:[${sort}]){${CATALOG_FIELDS_V12}}}}`;}
async function catalogRawPageV12(f,page,targeted=false){
  const variables={page,search:f.search||null};
  if(targeted){variables.genre=f.genre||null;variables.format=f.format||null;variables.status=f.status||null;variables.start=f.yearFrom?Number(f.yearFrom)*10000+101:null;variables.end=f.yearTo?Number(f.yearTo)*10000+1231:null;}
  const payload=await anilistFetch(targeted?catalogTargetQueryV12(f):catalogBareQueryV12(f),variables);return payload?.data?.Page||{};
}
function catalogNeedsTargetedV12(f){return !!(f.genre||f.format||f.status||f.yearFrom||f.yearTo);}
function catalogCacheSignatureV12(f){return JSON.stringify({search:f.search||'',sort:f.sort||'',format:f.format||'',status:f.status||'',genre:f.genre||'',yearFrom:f.yearFrom||'',yearTo:f.yearTo||'',score:Number(f.score)||0,length:f.length||'',hideOwned:!!f.hideOwned,firstSeason:!!f.firstSeason});}
function catalogWriteCacheV12(f,items,total,hasNext,page){try{localStorage.setItem(CATALOG_PAGE_CACHE_V12,JSON.stringify({ts:Date.now(),sig:catalogCacheSignatureV12(f),items:items.slice(0,120),total,hasNext,page}))}catch{}}
function catalogReadCacheV12(f){try{const c=JSON.parse(localStorage.getItem(CATALOG_PAGE_CACHE_V12)||'null');if(c&&Date.now()-Number(c.ts||0)<CATALOG_PAGE_CACHE_TTL_V12&&Array.isArray(c.items)&&c.items.length)return c}catch{}return null;}
function catalogFilterV12(m,f){
  if(!m||m.isAdult)return false;
  if(f.format&&String(m.format||'')!==f.format)return false;
  if(f.status&&String(m.status||'')!==f.status)return false;
  if(f.genre&&!(m.genres||[]).some(g=>String(g).toLowerCase()===String(f.genre).toLowerCase()))return false;
  const y=Number(m.seasonYear||0),yf=Number(f.yearFrom||0),yt=Number(f.yearTo||0);if(yf&&y&&y<yf)return false;if(yt&&y&&y>yt)return false;
  if(f.score&&Number(m.averageScore||0)<Number(f.score))return false;
  const ep=Number(m.episodes||0);if(f.length==='long'&&ep&&ep<=50)return false;if(f.length&&f.length!=='long'&&ep&&ep>Number(f.length))return false;
  if(f.hideOwned&&catalogOwnedInfoV10(m))return false;
  if(f.firstSeason&&m.format!=='MOVIE'&&catalogHasPrequelV10(m))return false;
  return true;
}
function catalogDedupV12(list){const map=new Map();for(const m of list||[]){const k=m?.idMal?`m${m.idMal}`:`a${m?.id}`;if(k&&!map.has(k))map.set(k,m);}return [...map.values()];}
function catalogSetLoadingV12(on){
  catalogStateV10.loading=on;$('#catalogApplyBtn').disabled=on;$('#catalogLoadMore').disabled=on;
  const grid=$('#catalogGrid');if(on&&grid&&!catalogStateV10.items.length)grid.innerHTML=`<div class="catalog-skeleton-cards">${Array.from({length:18},()=>'<div class="catalog-skeleton-card"></div>').join('')}</div>`;
  if(on)$('#catalogResultCount').textContent='Загружаю…';
}
async function catalogFetchPageV10({append=false}={}){
  if(catalogStateV10.loading)return;
  catalogStateV10.mode='catalog';const f=catalogStateV10.filters=catalogReadFormV10();catalogSaveFiltersV10();
  if(!append){catalogStateV10.page=1;catalogStateV10.items=[];}
  const requestedPage=Math.max(1,Number(catalogStateV10.page||1));catalogSetLoadingV12(true);
  $('#catalogModeLabel').textContent='КАТАЛОГ';$('#catalogResultsTitle').textContent=f.search?`Поиск: ${f.search}`:(f.genre?`${f.genre} · аниме`:'Каталог аниме');
  let accepted=[],pageInfo={},source='AniList',lastError=null;
  try{
    const targeted=catalogNeedsTargetedV12(f);let pageNo=requestedPage;
    for(let tries=0;tries<(append?2:5)&&accepted.length<(append?18:36);tries++,pageNo++){
      let page;
      try{page=await catalogRawPageV12(f,pageNo,targeted);}catch(e){lastError=e;if(targeted){page=await catalogRawPageV12(f,pageNo,false);source='AniList · safe';}else throw e;}
      const raw=page.media||[];pageInfo=page.pageInfo||pageInfo;accepted.push(...raw.filter(m=>catalogFilterV12(m,f)));catalogStateV10.page=pageNo;if(!pageInfo.hasNextPage)break;
    }
    if(!accepted.length&&lastError){throw lastError;}
    if(!accepted.length&&catalogStateV10.recommendations?.length&&!append&&!f.search&&!catalogNeedsTargetedV12(f)){
      accepted=catalogStateV10.recommendations.map(x=>x.media||x).filter(m=>catalogFilterV12(m,f));source='AniList · рекомендации';
    }
    accepted=catalogDedupV12(accepted);const merged=append?catalogDedupV12([...catalogStateV10.items,...accepted]):accepted;catalogRegisterItemsV10(merged);catalogStateV10.items=merged;catalogStateV10.hasNext=!!pageInfo.hasNextPage;catalogStateV10.total=Number(pageInfo.total||catalogUniverseV12.total||0);catalogRenderGridV10();
    if(merged.length){$('#catalogResultCount').innerHTML=`${merged.length} показано${catalogUniverseV12.total?` · ${fmtNumV12(catalogUniverseV12.total)}+ в базе`:''}<span class="catalog-source-note">${source}</span>`;$('#catalogSourceStatus').textContent=source;catalogWriteCacheV12(f,merged,catalogStateV10.total,catalogStateV10.hasNext,catalogStateV10.page);catalogSetEmptyV11('Ничего не нашлось','Попробуй изменить фильтры.');}
    else{catalogSetEmptyV11('По этим фильтрам пусто','Сбрось часть фильтров или попробуй другую подборку.');$('#catalogResultCount').textContent='0 в выдаче';}
  }catch(e){
    console.warn('V12 catalog primary',e);lastError=e;
    try{
      source='Jikan';let pageNo=append?Math.max(1,catalogStateV10.page):1;const r=await catalogJikanPageV11(f,pageNo),items=(r.items||[]).filter(m=>catalogClientFilterV11(m,f,{jikan:true}));const merged=append?catalogDedupV12([...catalogStateV10.items,...items]):catalogDedupV12(items);catalogRegisterItemsV10(merged);catalogStateV10.items=merged;catalogStateV10.hasNext=!!r.pagination?.has_next_page;catalogStateV10.page=pageNo;catalogStateV10.total=Number(r.pagination?.items?.total||catalogUniverseV12.total||0);catalogRenderGridV10();if(merged.length){$('#catalogResultCount').innerHTML=`${merged.length} показано${catalogStateV10.total?` · ${fmtNumV12(catalogStateV10.total)} в источнике`:''}<span class="catalog-source-note">Jikan</span>`;$('#catalogSourceStatus').textContent='Jikan · резерв';catalogWriteCacheV12(f,merged,catalogStateV10.total,catalogStateV10.hasNext,catalogStateV10.page);}else throw e;
    }catch(jErr){
      const c=catalogReadCacheV12(f);if(c){catalogStateV10.items=c.items;catalogStateV10.total=c.total||catalogUniverseV12.total;catalogStateV10.hasNext=!!c.hasNext;catalogStateV10.page=c.page||1;catalogRegisterItemsV10(c.items);catalogRenderGridV10();$('#catalogResultCount').innerHTML=`${c.items.length} из кэша<span class="catalog-source-note">офлайн-кэш</span>`;catalogSetEmptyV11('Нет свежего соединения','Показываю последнюю успешно загруженную выдачу.');}
      else{catalogStateV10.items=[];catalogStateV10.hasNext=false;catalogRenderGridV10();catalogSetEmptyV11('Не удалось загрузить каталог','Нажми «Повторить». Рекомендации сверху могут продолжать работать отдельно.',`${String(lastError?.message||lastError||'')} | ${String(jErr?.message||jErr||'')}`);$('#catalogResultCount').textContent='Ошибка загрузки';}
    }
  }finally{catalogSetLoadingV12(false);catalogAutoLoadBusyV12=false;}
}
window.catalogFetchPageV10=catalogFetchPageV10;

function catalogApplyPresetV10(name){
  const y=new Date().getFullYear(),f=catalogDefaultFiltersV10();catalogStateV10.preset=name||'';catalogMarkPresetV10(name);
  if(name==='for-you'){catalogStateV10.mode='recommendations';$('#catalogModeLabel').textContent='ДЛЯ ТЕБЯ';$('#catalogResultsTitle').textContent='Рекомендации под твой вкус';catalogRenderGridV10();if(!catalogStateV10.recommendations.length)catalogLoadRecommendationsV10();return;}
  if(name==='trending')f.sort='TRENDING_DESC';else if(name==='best'){f.sort='SCORE_DESC';f.score=75;}else if(name==='airing'){f.status='RELEASING';f.sort='TRENDING_DESC';}else if(name==='new'){f.sort='START_DATE_DESC';f.yearFrom=String(y-1);}else if(name==='movies'){f.format='MOVIE';f.sort='SCORE_DESC';}else if(name==='short'){f.length='13';f.sort='POPULARITY_DESC';}
  catalogSetFormV10(f);catalogSaveFiltersV10();catalogStateV10.page=1;catalogFetchPageV10();
}
window.catalogApplyPresetV10=catalogApplyPresetV10;
function catalogResetV10(){const f=catalogDefaultFiltersV10();catalogSetFormV10(f);catalogSaveFiltersV10();catalogStateV10.page=1;catalogApplyPresetV10('trending');}
window.catalogResetV10=catalogResetV10;

const CATALOG_COUNT_QUERY_V12=`query{
 b0:Page(page:1,perPage:1){pageInfo{total}media(type:ANIME,isAdult:false,startDate_greater:20200101,startDate_lesser:20391231){id}}
 b1:Page(page:1,perPage:1){pageInfo{total}media(type:ANIME,isAdult:false,startDate_greater:20100101,startDate_lesser:20191231){id}}
 b2:Page(page:1,perPage:1){pageInfo{total}media(type:ANIME,isAdult:false,startDate_greater:20000101,startDate_lesser:20091231){id}}
 b3:Page(page:1,perPage:1){pageInfo{total}media(type:ANIME,isAdult:false,startDate_greater:19900101,startDate_lesser:19991231){id}}
 b4:Page(page:1,perPage:1){pageInfo{total}media(type:ANIME,isAdult:false,startDate_greater:19800101,startDate_lesser:19891231){id}}
 b5:Page(page:1,perPage:1){pageInfo{total}media(type:ANIME,isAdult:false,startDate_greater:19000101,startDate_lesser:19791231){id}}
}`;
async function catalogLoadUniverseV12(force=false){
  if(!force){try{const c=JSON.parse(localStorage.getItem(CATALOG_COUNT_CACHE_V12)||'null');if(c&&Date.now()-Number(c.ts||0)<CATALOG_COUNT_TTL_V12&&Number(c.total)>0){catalogUniverseV12=c;catalogUpdateUniverseUIV12();return c;}}catch{}}
  try{const p=await anilistFetch(CATALOG_COUNT_QUERY_V12,{}),d=p?.data||{},buckets=CATALOG_YEAR_BUCKETS_V12.map((b,i)=>({...b,total:Number(d[`b${i}`]?.pageInfo?.total||0)})),total=buckets.reduce((n,b)=>n+b.total,0);catalogUniverseV12={total,buckets,ts:Date.now()};localStorage.setItem(CATALOG_COUNT_CACHE_V12,JSON.stringify(catalogUniverseV12));catalogUpdateUniverseUIV12();return catalogUniverseV12;}catch(e){console.warn('V12 count',e);{const el=$('#catalogUniverseCount');if(el)el.textContent='Большая база аниме';}return catalogUniverseV12;}
}
function catalogUpdateUniverseUIV12(){if(!catalogUniverseV12.total)return;{const a=$('#catalogUniverseCount');if(a)a.textContent=`${fmtNumV12(catalogUniverseV12.total)}+ тайтлов в каталоге`;const b=$('#sidebarCatalogTotal');if(b)b.textContent=catalogUniverseV12.total>9999?'10k+':fmtNumV12(catalogUniverseV12.total);}}

const CATALOG_RANDOM_BUCKET_QUERY_V12=`query($page:Int,$start:FuzzyDateInt,$end:FuzzyDateInt){Page(page:$page,perPage:1){pageInfo{total lastPage}media(type:ANIME,isAdult:false,format_not:OVA,startDate_greater:$start,startDate_lesser:$end,sort:[POPULARITY_DESC]){${CATALOG_FIELDS_V12}}}}`;
async function catalogRandomV10(){
  if(catalogRandomBusyV101)return;catalogRandomBusyV101=true;const btn=$('#catalogRandomBtn'),top=$('#topRandomBtn'),old=btn?.textContent;if(btn){btn.disabled=true;btn.textContent='🎲 Ищу…';}if(top)top.classList.add('is-loading');
  try{const u=await catalogLoadUniverseV12(),buckets=(u.buckets||[]).filter(b=>b.total>0);if(!buckets.length)throw new Error('Нет данных о каталоге');const sum=buckets.reduce((n,b)=>n+b.total,0);let r=Math.random()*sum,b=buckets[0];for(const x of buckets){r-=x.total;if(r<=0){b=x;break;}}const start=b.from*10000+101,end=b.to*10000+1231;const meta=await anilistFetch(CATALOG_RANDOM_BUCKET_QUERY_V12,{page:1,start,end}),pages=Number(meta?.data?.Page?.pageInfo?.lastPage||meta?.data?.Page?.pageInfo?.total||1),page=Math.max(1,Math.floor(Math.random()*Math.max(1,pages))+1),p=page===1?meta:await anilistFetch(CATALOG_RANDOM_BUCKET_QUERY_V12,{page,start,end}),m=p?.data?.Page?.media?.[0];if(!m||m.format==='OVA')throw new Error('Попался неподходящий тайтл');catalogStateV10.media.set(Number(m.id),m);openCatalogMediaV10(m.id);}catch(e){console.warn('V12 random',e);setMessage('Не получилось выбрать случайное аниме. Попробуй ещё раз.','error');}finally{catalogRandomBusyV101=false;if(btn){btn.disabled=false;btn.textContent=old||'🎲 Случайное';}if(top)top.classList.remove('is-loading');}
}
window.catalogRandomV10=catalogRandomV10;

function setupCatalogAutoLoadV12(){if(catalogAutoObserverV12)catalogAutoObserverV12.disconnect();const sentinel=$('#catalogScrollSentinel');if(!sentinel||!('IntersectionObserver'in window))return;catalogAutoObserverV12=new IntersectionObserver(entries=>{if(!entries.some(e=>e.isIntersecting)||catalogAutoLoadBusyV12||catalogStateV10.loading||catalogStateV10.mode==='recommendations'||!catalogStateV10.hasNext||!document.body.classList.contains('catalog-mode'))return;catalogAutoLoadBusyV12=true;catalogStateV10.page=Math.max(1,Number(catalogStateV10.page||1))+1;catalogFetchPageV10({append:true});},{rootMargin:'1100px 0px 700px'});catalogAutoObserverV12.observe(sentinel);}

function catalogShowV10(){document.body.classList.add('catalog-mode');$('#catalogView').classList.remove('hidden');setSidebarActiveV12('catalog');window.scrollTo({top:0,behavior:uiSettings?.animations===false?'auto':'smooth'});if(!catalogStateV10.filters){catalogStateV10.filters=catalogLoadFiltersV10();catalogSetFormV10(catalogStateV10.filters);}catalogLoadUniverseV12();if(!catalogStateV10.items.length&&catalogStateV10.mode!=='recommendations')catalogApplyPresetV10('trending');catalogLoadRecommendationsV10();setupCatalogAutoLoadV12();}
window.catalogShowV10=catalogShowV10;
const catalogHideBaseV12=catalogHideV10;
catalogHideV10=function(target='top'){catalogHideBaseV12(target);setSidebarActiveV12(target==='lists'?'list':'overview');};window.catalogHideV10=catalogHideV10;

/* Re-render hooks */
const renderAllBaseV12=renderAll;
renderAll=function(){renderAllBaseV12();updateSidebarStatsV12();renderHomePulseV12();};
window.renderAll=renderAll;

function initV12(){
  initSidebarV12();renderAll();catalogLoadUniverseV12();setupCatalogAutoLoadV12();
  $('#catalogRetryBtn')?.addEventListener('click',()=>{catalogStateV10.page=1;catalogFetchPageV10();});
  $('#catalogEmptyResetBtn')?.addEventListener('click',catalogResetV10);
  $('#catalogResetBtn')?.addEventListener('click',catalogResetV10);
  // Make the existing load-more button safe even after the older handler incremented the page.
  $('#catalogLoadMore')?.addEventListener('click',()=>{if(catalogStateV10.loading)return;catalogAutoLoadBusyV12=true;setTimeout(()=>{catalogAutoLoadBusyV12=false;},900);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSidebarMobileV12();});
}
setTimeout(initV12,20);


/* ===== V13: dynamic greetings, YouTube trailer hero, future profile ===== */
const V13_DEFAULTS={nickname:'друг',heroTrailer:true};
Object.assign(DEFAULT_SETTINGS,V13_DEFAULTS);
uiSettings={...V13_DEFAULTS,...(uiSettings||{})};
let heroGreetingSeedV13=null,heroTrailerKeyV13='',heroTrailerRequestV13=0;
const heroTrailerCacheV13=new Map();

function cleanNicknameV13(v){const s=String(v||'').trim();return s||'друг';}
function greetingPoolV13(name){
  const h=new Date().getHours(),time=h<6?'Ночная смена':h<12?'Доброе утро':h<18?'Добрый день':'Добрый вечер';
  return [
    `${time}, ${name}`,
    `Привет, ${name}`,
    `С возвращением, ${name}`,
    `Ну что, ${name}, что смотрим?`,
    `Ещё одну серию, ${name}?`,
    `Твоя очередь выбирать, ${name}`,
    `Пора в новый мир, ${name}`,
    `Что сегодня в очереди, ${name}?`,
    `Рад снова видеть тебя, ${name}`,
    `${name}, кажется, время для аниме`
  ];
}
function chooseGreetingV13(force=false){
  const name=cleanNicknameV13(uiSettings?.nickname),pool=greetingPoolV13(name);
  let last='';try{last=sessionStorage.getItem('animeHeroGreetingV13')||'';}catch{}
  if(heroGreetingSeedV13&&!force)return heroGreetingSeedV13;
  let choices=pool.filter(x=>x!==last);if(!choices.length)choices=pool;
  heroGreetingSeedV13=choices[Math.floor(Math.random()*choices.length)]||`Привет, ${name}`;
  try{sessionStorage.setItem('animeHeroGreetingV13',heroGreetingSeedV13);}catch{}
  return heroGreetingSeedV13;
}
function heroSubtitleV13(){
  const watching=(latestData?.sections?.watching||[]).filter(Boolean);
  const e=watching.find(x=>!x.episodes||Number(x.progress||0)<Number(x.episodes||0))||watching[0];
  const queue=(latestData?.next_queue||[])[0];
  const opts=[];
  if(e){const p=Number(e.progress||0),eps=Number(e.episodes||0);opts.push(p?`Продолжим ${e.title}? Ты на ${p}${eps?` из ${eps}`:''}.`:`${e.title} уже ждёт тебя в «Сейчас».`);}
  if(queue)opts.push(`Следом в очереди — ${queue.title}.`);
  opts.push('Твой список на месте. Можно просто выбрать настроение и смотреть.','Сегодня можно открыть что-то новое — или наконец добить начатое.','Никакой спешки: выбирай то, к чему реально тянет.');
  return opts[Math.floor(Math.random()*opts.length)];
}
function renderGreetingV13(force=false){
  const title=$('#siteTitle'),tag=$('#siteTagline'),eye=$('#heroEyebrow'),chip=$('#heroSiteNameChip');
  if(force)heroGreetingSeedV13=null;
  if(title)title.textContent=chooseGreetingV13(force);
  if(tag)tag.textContent=heroSubtitleV13();
  if(eye)eye.textContent='ТВОЁ АНИМЕ-ПРОСТРАНСТВО';
  if(chip)chip.textContent=uiSettings?.siteName||V8_DEFAULTS.siteName;
}
function updateProfileSlotV13(){
  const name=cleanNicknameV13(uiSettings?.nickname),n=$('#sidebarProfileName'),a=$('#sidebarProfileAvatar');if(n)n.textContent=name;
  if(a){const chars=[...name];a.textContent=(chars[0]||'•').toUpperCase();a.title=name;}
}

const setSettingsFormBeforeV13=setSettingsForm;
setSettingsForm=function(s=uiSettings){setSettingsFormBeforeV13(s);const n=$('#settingNickname'),t=$('#settingHeroTrailer');if(n)n.value=s.nickname||V13_DEFAULTS.nickname;if(t)t.checked=s.heroTrailer!==false;};
const readSettingsFormBeforeV13=readSettingsForm;
readSettingsForm=function(){const s=readSettingsFormBeforeV13();const n=$('#settingNickname'),t=$('#settingHeroTrailer');s.nickname=cleanNicknameV13(n?.value);s.heroTrailer=t?t.checked:true;return s;};
const applySettingsBeforeV13=applySettings;
applySettings=function(s=uiSettings){applySettingsBeforeV13(s);updateProfileSlotV13();renderGreetingV13(false);if(s.heroTrailer===false)clearHeroTrailerV13();else scheduleHeroTrailerV13();};
['settingNickname','settingHeroTrailer'].forEach(id=>$('#'+id)?.addEventListener('input',previewSettings));

// V13 branding keeps the app name in the rail/footer, while the big hero is a greeting.
const applyBrandingBeforeV13=applyBrandingV9;
applyBrandingV9=function(s=uiSettings){
  applyBrandingBeforeV13(s);
  const n=(s.siteName||V8_DEFAULTS.siteName).trim(),b=$('#topBrandName'),chip=$('#heroSiteNameChip');if(b)b.textContent=n;if(chip)chip.textContent=n;
  renderGreetingV13(false);updateProfileSlotV13();
};

function heroCurrentEntryV13(){
  const watching=(latestData?.sections?.watching||[]).filter(Boolean);
  return watching.find(e=>!e.episodes||Number(e.progress||0)<Number(e.episodes||0))||watching[0]||null;
}
function heroPartForProgressV13(entry){
  const parts=(entry?.franchise_parts||[]).filter(Boolean);if(parts.length<2)return null;
  let left=Math.max(0,Number(entry.progress||0));
  for(const p of parts){const ep=Number(p.episodes||0);if(!ep||left<ep)return p;left-=ep;}
  return parts[parts.length-1]||null;
}
async function heroMediaV13(entry){
  if(!entry)return null;const part=heroPartForProgressV13(entry);const aid=Number(part?.anilist_id||entry.anilist_id||0),mid=Number(part?.mal_id||entry.mal_id||0),key=aid?`a:${aid}`:mid?`m:${mid}`:'';
  if(!key)return null;if(heroTrailerCacheV13.has(key))return heroTrailerCacheV13.get(key);
  try{
    let payload=null;if(aid)payload=await anilistFetch(DETAIL_BY_ID_QUERY,{id:aid});else payload=await anilistFetch(DETAIL_BY_MAL_QUERY,{idMal:mid});
    const m=payload?.data?.Media||null;heroTrailerCacheV13.set(key,m);return m;
  }catch(e){console.warn('V13 hero trailer',e);heroTrailerCacheV13.set(key,null);return null;}
}
function clearHeroTrailerV13(){const l=$('#heroTrailerLayer'),b=$('#heroTrailerBadge');if(l){l.innerHTML='';l.classList.remove('has-video');l.style.backgroundImage='';}if(b)b.classList.add('hidden');heroTrailerKeyV13='';}
function youtubeHeroUrlV13(id){id=String(id||'').trim();return id?`https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&mute=1&controls=0&loop=1&playlist=${encodeURIComponent(id)}&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`:'';}
async function renderHeroTrailerV13(){
  if(uiSettings?.heroTrailer===false)return clearHeroTrailerV13();const entry=heroCurrentEntryV13(),layer=$('#heroTrailerLayer'),badge=$('#heroTrailerBadge');if(!layer)return;
  const part=entry?heroPartForProgressV13(entry):null,key=`${part?.anilist_id||entry?.anilist_id||part?.mal_id||entry?.mal_id||entry?.title||''}:${entry?.progress||0}`;if(key===heroTrailerKeyV13)return;heroTrailerKeyV13=key;
  const req=++heroTrailerRequestV13;layer.classList.remove('has-video');layer.innerHTML='';if(badge)badge.classList.add('hidden');
  const fallback=part?.cover||entry?.cover||'';if(fallback)layer.style.backgroundImage=`url("${String(fallback).replaceAll('"','%22')}")`;else layer.style.backgroundImage='';
  if(!entry)return;const m=await heroMediaV13(entry);if(req!==heroTrailerRequestV13)return;
  const bg=m?.bannerImage||m?.trailer?.thumbnail||fallback;if(bg)layer.style.backgroundImage=`url("${String(bg).replaceAll('"','%22')}")`;
  const tr=m?.trailer,site=String(tr?.site||'').toLowerCase();if(tr?.id&&site.includes('youtube')){
    const fr=document.createElement('iframe');fr.className='hero-trailer-frame';fr.src=youtubeHeroUrlV13(tr.id);fr.title='';fr.tabIndex=-1;fr.setAttribute('aria-hidden','true');fr.setAttribute('allow','autoplay; encrypted-media; picture-in-picture');fr.setAttribute('referrerpolicy','strict-origin-when-cross-origin');layer.appendChild(fr);layer.classList.add('has-video');if(badge)badge.classList.remove('hidden');
  }
}
let heroTrailerTimerV13=null;
function scheduleHeroTrailerV13(){clearTimeout(heroTrailerTimerV13);heroTrailerTimerV13=setTimeout(renderHeroTrailerV13,120);}

function openProfileSoonV13(){
  $('#modalTitle').textContent=`${cleanNicknameV13(uiSettings?.nickname)} · профиль`;
  $('#modalText').textContent='Место под аккаунт уже готово. Позже сюда можно добавить аватар, синхронизацию между устройствами, историю просмотров и облачный бэкап.';
  $('#modalActions').innerHTML='<button id="profileSettingsV13" type="button">⚙ Настроить ник</button><button class="secondary" type="button" onclick="closeModal()">Пока закрыть</button>';
  $('#modal').classList.remove('hidden');setTimeout(()=>$('#profileSettingsV13')?.addEventListener('click',()=>{closeModal();openSettings();setTimeout(()=>$('#settingNickname')?.focus(),50);}),0);
}
$('#profileFutureBtn')?.addEventListener('click',openProfileSoonV13);

// A new greeting whenever the user explicitly returns to Overview, not on every tiny re-render.
$('[data-sidebar-route="overview"]')?.addEventListener('click',()=>{renderGreetingV13(true);scheduleHeroTrailerV13();});
$('#topBrandBtn')?.addEventListener('click',()=>{renderGreetingV13(true);scheduleHeroTrailerV13();});

const renderAllBeforeV13=renderAll;
renderAll=function(){renderAllBeforeV13();updateProfileSlotV13();renderGreetingV13(false);scheduleHeroTrailerV13();};

// Initialize after all previous migrations have finished.
uiSettings={...V13_DEFAULTS,...uiSettings};applySettings(uiSettings);renderGreetingV13(true);updateProfileSlotV13();scheduleHeroTrailerV13();


/* ===== V14: AnimeThemes hero (no YouTube) + rotating Continue ===== */
const V14_HERO_THEME_CACHE_KEY='animeHeroThemesV14:';
let homeFeatureIndexV14=0,homeFeatureTimerV14=null,homeFeatureSwitchPulseV14=0;
const animeThemesHeroCacheV14=new Map();

function watchingCandidatesV14(){
  const all=(latestData?.sections?.watching||[]).filter(Boolean);
  const unfinished=all.filter(e=>!Number(e.episodes||0)||Number(e.progress||0)<Number(e.episodes||0));
  return unfinished.length?unfinished:all;
}
function currentFeaturedWatchingV14(){
  const a=watchingCandidatesV14();if(!a.length)return null;
  homeFeatureIndexV14=((homeFeatureIndexV14%a.length)+a.length)%a.length;
  return a[homeFeatureIndexV14]||a[0]||null;
}
function rotateFeaturedWatchingV14(step=1,manual=false){
  const a=watchingCandidatesV14();if(a.length<2)return;
  homeFeatureIndexV14=((homeFeatureIndexV14+step)%a.length+a.length)%a.length;
  homeFeatureSwitchPulseV14=1;
  renderHomePulseV12();
  heroTrailerKeyV13='';
  scheduleHeroTrailerV13();
  if(manual)restartFeaturedWatchingTimerV14();
}
window.rotateFeaturedWatchingV14=rotateFeaturedWatchingV14;
function restartFeaturedWatchingTimerV14(){
  clearInterval(homeFeatureTimerV14);
  homeFeatureTimerV14=setInterval(()=>{if(document.hidden||document.body.classList.contains('catalog-mode'))return;rotateFeaturedWatchingV14(1,false);},22000);
}

const renderHomePulseV12BeforeV14=renderHomePulseV12;
renderHomePulseV12=function(){
  const root=$('#homePulse');if(!root)return;
  const candidates=watchingCandidatesV14(),entry=currentFeaturedWatchingV14();
  const q=(latestData?.next_queue||[])[0],qFound=q?findQueueEntryV12(q):null;
  const planned=latestData?.sections?.planned||[],surprise=planned.length?planned[Math.floor((Date.now()/86400000)%planned.length)]:null;
  if(!entry){root.innerHTML=`<div class="home-pulse-empty"><div><div class="home-mini-kicker">ТВОЙ ОБЗОР</div><h3>Здесь появится продолжение просмотра</h3><p>Добавь аниме в «Сейчас», и главная станет твоей стартовой точкой.</p></div><button type="button" onclick="catalogShowV10()">◇ Открыть каталог</button></div>`;return;}
  const idx=(latestData.sections.watching||[]).indexOf(entry),p=Math.max(0,Number(entry.progress||0)),eps=Math.max(0,Number(entry.episodes||0)),pct=eps?Math.min(100,p/eps*100):0,cover=entry.cover||'';
  const qHtml=q?`<div class="home-side-card"><small>Следующее в очереди</small><div class="home-side-title">${esc(q.title)}</div><p>${qFound?`${esc(qFound.entry.episodes_text||'')} · ${esc(qFound.entry.descriptor||'')}`:'Стоит первым в разделе «Далее».'}</p>${qFound?`<button type="button" onclick="openDetails('${qFound.section}',${qFound.index})">Открыть</button>`:`<button type="button" onclick="document.querySelector('#queueSection')?.scrollIntoView({behavior:'smooth'})">К очереди</button>`}</div>`:`<div class="home-side-card"><small>Очередь</small><div class="home-side-title">Добавь, что смотреть после</div><p>Раздел «Далее» помогает не потеряться между тайтлами.</p><button type="button" onclick="document.querySelector('#queueAddBtn')?.click()">＋ Добавить</button></div>`;
  const sHtml=surprise?`<div class="home-side-card"><small>Из «Посмотреть»</small><div class="home-side-title">${esc(surprise.title)}</div><p>${esc(surprise.episodes_text||'')} · ${esc(surprise.descriptor||'')}</p><button type="button" onclick="openDetails('planned',${planned.indexOf(surprise)})">Напомнить себе</button></div>`:`<div class="home-side-card"><small>Открыть новое</small><div class="home-side-title">Не знаешь, что дальше?</div><p>Каталог умеет подбирать тайтлы по твоим оценкам.</p><button type="button" onclick="catalogShowV10();setTimeout(()=>catalogApplyPresetV10('for-you'),30)">Для меня</button></div>`;
  const nav=candidates.length>1?`<div class="home-feature-nav" title="Менять аниме из «Сейчас»"><button type="button" onclick="rotateFeaturedWatchingV14(-1,true)" aria-label="Предыдущее">‹</button><span>${homeFeatureIndexV14+1}/${candidates.length}</span><button type="button" onclick="rotateFeaturedWatchingV14(1,true)" aria-label="Следующее">›</button></div>`:'';
  root.dataset.featureSwitch=homeFeatureSwitchPulseV14?'1':'0';homeFeatureSwitchPulseV14=0;
  root.innerHTML=`${cover?`<div class="home-pulse-bg" style="background-image:url('${esc(cover)}')"></div>`:''}<div class="home-pulse-inner"><div class="home-now">${cover?`<img class="home-now-cover" src="${esc(cover)}" alt="">`:`<div class="home-now-cover"></div>`}<div class="home-now-copy"><div class="home-mini-row"><div class="home-mini-kicker">ПРОДОЛЖИТЬ</div>${nav}</div><h2>${esc(entry.emoji||'')} ${esc(entry.title)}</h2><div class="home-now-meta">${esc(entry.episodes_text||'')} · ${esc(entry.descriptor||'')}${entry.year?` · ${entry.year}`:''}</div><div class="home-now-progress"><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div><span>${p}${eps?` / ${eps}`:''}</span></div><div class="home-now-actions"><button type="button" onclick="openDetails('watching',${idx})">Открыть страницу</button><button class="secondary" type="button" onclick="incrementProgressV12('watching',${idx})">＋ 1 серия</button></div></div></div><div class="home-side-stack">${qHtml}${sHtml}</div></div>`;
};

// The hero follows the same rotating "Continue" item.
heroCurrentEntryV13=function(){return currentFeaturedWatchingV14();};

function heroPartForEntryV14(entry){return heroPartForProgressV13(entry)||entry||null;}
function normalizeAnimeThemesVideoUrlV14(v){
  let s=String(v?.link||v?.path||'').trim();if(!s)return '';
  if(s.startsWith('//'))s='https:'+s;
  else if(s.startsWith('/'))s='https://v.animethemes.moe'+s;
  else if(!/^https?:\/\//i.test(s))s='https://v.animethemes.moe/'+s.replace(/^\/+/, '');
  return s.replace('://api.animethemes.moe/', '://v.animethemes.moe/');
}
function chooseAnimeThemesVideoV14(data){
  const themes=data?.anime?.[0]?.animethemes||[];
  const sorted=[...themes].sort((a,b)=>((a.type==='OP'?0:a.type==='ED'?1:2)-(b.type==='OP'?0:b.type==='ED'?1:2))||Number(a.sequence||999)-Number(b.sequence||999));
  for(const t of sorted){
    const entries=(t?.animethemeentries||[]).filter(e=>!e?.nsfw&&!e?.spoiler);
    for(const e of entries){
      const vs=(e?.videos||[]).filter(v=>normalizeAnimeThemesVideoUrlV14(v));if(!vs.length)continue;
      vs.sort((a,b)=>{const ar=Number(a.resolution||0),br=Number(b.resolution||0);const ap=ar===720?0:ar===480?1:ar<=1080?2:3,bp=br===720?0:br===480?1:br<=1080?2:3;return ap-bp||(Number(b.nc)-Number(a.nc));});
      const v=vs[0],url=normalizeAnimeThemesVideoUrlV14(v);if(url)return {url,type:t.type||'THEME',sequence:t.sequence||1,title:t?.song?.title||'',resolution:v.resolution||null};
    }
  }
  return null;
}
async function fetchAnimeThemesHeroV14(entry){
  const part=heroPartForEntryV14(entry);let mal=Number(part?.mal_id||entry?.mal_id||0);
  if(!mal&&entry){try{await resolveEntryV3(entry);mal=Number(entry.mal_id||0);}catch{}}
  if(!mal)return null;const key=String(mal);if(animeThemesHeroCacheV14.has(key))return animeThemesHeroCacheV14.get(key);
  try{
    const stored=localStorage.getItem(V14_HERO_THEME_CACHE_KEY+key);if(stored){const o=JSON.parse(stored);if(o?.ts>Date.now()-7*86400000&&o?.data?.url){animeThemesHeroCacheV14.set(key,o.data);return o.data;}}
  }catch{}
  const ctl=new AbortController(),timer=setTimeout(()=>ctl.abort(),9000);
  try{
    const inc='animethemes.animethemeentries.videos,animethemes.song';
    const url=`https://api.animethemes.moe/anime?filter[has]=resources&filter[site]=MyAnimeList&filter[external_id]=${encodeURIComponent(mal)}&include=${encodeURIComponent(inc)}`;
    const r=await fetch(url,{headers:{Accept:'application/json'},signal:ctl.signal});if(!r.ok)throw new Error(`AnimeThemes ${r.status}`);
    const data=await r.json(),picked=chooseAnimeThemesVideoV14(data);animeThemesHeroCacheV14.set(key,picked||null);
    if(picked)try{localStorage.setItem(V14_HERO_THEME_CACHE_KEY+key,JSON.stringify({ts:Date.now(),data:picked}));}catch{}
    return picked||null;
  }catch(e){console.warn('V14 AnimeThemes hero',e);animeThemesHeroCacheV14.set(key,null);return null;}finally{clearTimeout(timer);}
}

async function renderHeroAnimeV14(){
  if(uiSettings?.heroTrailer===false)return clearHeroTrailerV13();
  const entry=currentFeaturedWatchingV14(),layer=$('#heroTrailerLayer'),badge=$('#heroTrailerBadge');if(!layer)return;
  const part=entry?heroPartForEntryV14(entry):null,key=`v14:${part?.mal_id||entry?.mal_id||part?.anilist_id||entry?.anilist_id||entry?.title||''}:${homeFeatureIndexV14}`;
  if(key===heroTrailerKeyV13&&layer.querySelector('.hero-anime-video'))return;heroTrailerKeyV13=key;
  const req=++heroTrailerRequestV13;layer.classList.remove('has-video');layer.classList.add('video-loading');layer.innerHTML='';if(badge)badge.classList.add('hidden');
  const fallback=part?.cover||entry?.cover||'';if(fallback)layer.style.backgroundImage=`url("${String(fallback).replaceAll('"','%22')}")`;else layer.style.backgroundImage='';
  if(!entry){layer.classList.remove('video-loading');return;}
  // Get a wide poster/bannner while the direct video lookup runs.
  const [mediaRes,videoRes]=await Promise.allSettled([heroMediaV13(entry),fetchAnimeThemesHeroV14(entry)]);if(req!==heroTrailerRequestV13)return;
  const m=mediaRes.status==='fulfilled'?mediaRes.value:null,videoInfo=videoRes.status==='fulfilled'?videoRes.value:null;
  const bg=m?.bannerImage||fallback;if(bg)layer.style.backgroundImage=`url("${String(bg).replaceAll('"','%22')}")`;
  layer.classList.remove('video-loading');if(!videoInfo?.url)return;
  // Two synchronized video layers: a blurred cover fills the wide hero, while the
  // foreground uses contain so the actual OP frame is always visible in full.
  const bgv=document.createElement('video');bgv.className='hero-anime-video-bg';bgv.autoplay=true;bgv.muted=true;bgv.loop=true;bgv.playsInline=true;bgv.preload='metadata';bgv.disablePictureInPicture=true;bgv.setAttribute('aria-hidden','true');bgv.tabIndex=-1;
  const v=document.createElement('video');v.className='hero-anime-video';v.autoplay=true;v.muted=true;v.loop=true;v.playsInline=true;v.preload='metadata';v.disablePictureInPicture=true;v.setAttribute('aria-hidden','true');v.tabIndex=-1;
  let settled=false;const fail=()=>{if(settled)return;settled=true;v.remove();bgv.remove();layer.classList.remove('has-video');if(badge)badge.classList.add('hidden');};
  v.addEventListener('loadeddata',()=>{if(req!==heroTrailerRequestV13)return fail();settled=true;v.classList.add('is-ready');bgv.classList.add('is-ready');layer.classList.add('has-video');if(badge){const n=entry.title||'аниме';badge.textContent=`▶ ${videoInfo.type||'OP'} · ${n} · видео без звука`;badge.classList.remove('hidden');}try{bgv.currentTime=v.currentTime||0;}catch{}bgv.play().catch(()=>{});v.play().catch(()=>{});},{once:true});
  v.addEventListener('timeupdate',()=>{if(Math.abs((bgv.currentTime||0)-(v.currentTime||0))>.35){try{bgv.currentTime=v.currentTime}catch{}}});
  v.addEventListener('error',fail,{once:true});bgv.addEventListener('error',()=>{}, {once:true});
  bgv.src=videoInfo.url;v.src=videoInfo.url;layer.appendChild(bgv);layer.appendChild(v);setTimeout(()=>{if(!settled&&v.readyState<2)fail();},12000);
}
renderHeroTrailerV13=renderHeroAnimeV14;
scheduleHeroTrailerV13=function(){clearTimeout(heroTrailerTimerV13);heroTrailerTimerV13=setTimeout(renderHeroAnimeV14,100);};

// Much larger greeting pool; avoid recently used greetings in the same session.
function greetingPoolV14(name){
  const h=new Date().getHours(),time=h<5?'Ночь на твоей стороне':h<11?'Доброе утро':h<17?'Добрый день':h<22?'Добрый вечер':'Ночная смена';
  const curated=[
    `${time}, ${name}`,`Привет, ${name}`,`С возвращением, ${name}`,`Ну что, ${name}, что смотрим?`,`Ещё одну серию, ${name}?`,`Твоя очередь выбирать, ${name}`,
    `Пора в новый мир, ${name}`,`Что сегодня в очереди, ${name}?`,`Рад снова видеть тебя, ${name}`,`${name}, кажется, время для аниме`,`Какой сегодня вайб, ${name}?`,
    `${name}, открываем следующую историю?`,`Сегодня без спешки, ${name}`,`${name}, список никуда не убежал`,`Есть настроение на одну серию, ${name}?`,`Аниме-вечер, ${name}?`,
    `${name}, продолжим с того места?`,`Ну что там в «Сейчас», ${name}?`,`Сегодня выбираешь ты, ${name}`,`${name}, может что-нибудь совершенно новое?`,`Заглянул на минутку, ${name}?`,
    `${name}, твои тайтлы на месте`,`Что включаем первым, ${name}?`,`Пора проверить очередь, ${name}`,`${name}, сегодня можно и марафон`,`Добро пожаловать обратно, ${name}`,
    `${name}, тут как раз осталось место для новой истории`,`Одна серия — и посмотрим, ${name}`,`${name}, выбирай сердцем`,`Время продолжить, ${name}`,`${name}, что-то хорошее уже ждёт`,
    `Сегодняшний выбор за тобой, ${name}`,`${name}, может добьём начатое?`,`Устраивайся, ${name}`,`${name}, каталог большой — вечер маленький`,`Найдем что-нибудь цепляющее, ${name}`
  ];
  const starts=['Ну что','Кажется','Похоже','Сегодня','Может','Самое время','Есть идея','Без лишних слов'];
  const ends=['продолжить начатое?','найти новый тайтл?','заглянуть в очередь?','выбрать что-нибудь по настроению?','устроить маленький марафон?','добить ещё одну серию?'];
  for(const a of starts)for(const b of ends)curated.push(`${a}, ${name}, ${b}`);
  return [...new Set(curated)];
}
greetingPoolV13=greetingPoolV14;
chooseGreetingV13=function(force=false){
  const name=cleanNicknameV13(uiSettings?.nickname),pool=greetingPoolV14(name);if(heroGreetingSeedV13&&!force)return heroGreetingSeedV13;
  let recent=[];try{recent=JSON.parse(sessionStorage.getItem('animeHeroGreetingRecentV14')||'[]');if(!Array.isArray(recent))recent=[];}catch{}
  let choices=pool.filter(x=>!recent.includes(x));if(!choices.length){recent=[];choices=pool;}
  heroGreetingSeedV13=choices[Math.floor(Math.random()*choices.length)]||`Привет, ${name}`;recent.push(heroGreetingSeedV13);recent=recent.slice(-12);
  try{sessionStorage.setItem('animeHeroGreetingRecentV14',JSON.stringify(recent));}catch{}return heroGreetingSeedV13;
};
heroSubtitleV13=function(){
  const entry=currentFeaturedWatchingV14(),q=(latestData?.next_queue||[])[0],p=Number(entry?.progress||0),eps=Number(entry?.episodes||0),opts=[];
  if(entry)opts.push(p?`Сейчас на очереди ${entry.title}: ${p}${eps?` из ${eps}`:''}.`:`${entry.title} уже ждёт в «Сейчас».`,`Можно продолжить ${entry.title} — или переключиться стрелками ниже.`);
  if(q)opts.push(`Следом в твоей очереди — ${q.title}.`,`В «Далее» первым стоит ${q.title}.`);
  opts.push('Выбирай по настроению — здесь ничего не надо успевать.','Можно продолжить начатое или провалиться в каталог.','Твой список, твой темп, твой вечер.','Если не знаешь, что включить — случайное всё решит.','Иногда лучший план — просто открыть первую серию.');
  return opts[Math.floor(Math.random()*opts.length)];
};

// Ensure no previously scheduled YouTube iframe survives the upgrade.
clearTimeout(heroTrailerTimerV13);clearHeroTrailerV13();
const firstCandidatesV14=watchingCandidatesV14();if(firstCandidatesV14.length>1)homeFeatureIndexV14=Math.floor(Math.random()*firstCandidatesV14.length);
renderHomePulseV12();renderGreetingV13(true);scheduleHeroTrailerV13();restartFeaturedWatchingTimerV14();
document.addEventListener('visibilitychange',()=>{if(!document.hidden)scheduleHeroTrailerV13();});


/* ===== V15: native watch player, dubs/subtitles, future watch-party shell ===== */
const WATCH_PREF_KEY_V15='animeWatchPrefsV15';
const WATCH_MANIFEST_KEY_V15='animeWatchManifestsV15';
const WATCH_RESUME_KEY_V15='animeWatchResumeV15';
let watchStateV15={section:null,index:-1,entry:null,season:0,episode:1,localVideos:[],localSubs:[],objectUrls:[],manifest:null,lastPersist:0};
function watchPrefsV15(){try{return {...{autoNext:true,dub:'',quality:'',subs:'off'},...JSON.parse(localStorage.getItem(WATCH_PREF_KEY_V15)||'{}')}}catch{return {autoNext:true,dub:'',quality:'',subs:'off'}}}
function saveWatchPrefsV15(p){try{localStorage.setItem(WATCH_PREF_KEY_V15,JSON.stringify(p))}catch{}}
function watchEntryKeyV15(e){return String(e?.anilist_id?`al:${e.anilist_id}`:e?.mal_id?`mal:${e.mal_id}`:`name:${normalize(e?.title||'anime')}`)}
function cleanupWatchUrlsV15(){for(const u of watchStateV15.objectUrls||[])try{URL.revokeObjectURL(u)}catch{}watchStateV15.objectUrls=[]}
function watchPartsV15(e){if(Array.isArray(e?.franchise_parts)&&e.franchise_parts.length)return e.franchise_parts.map((p,i)=>({...p,episodes:Number(p.episodes||0),season:i+1}));return [{title:e?.title||'Аниме',episodes:Number(e?.episodes||1)||1,cover:e?.cover||'',season:1,mal_id:e?.mal_id||null,anilist_id:e?.anilist_id||null}]}
function watchGlobalEpisodeV15(e,seasonIdx,episode){const parts=watchPartsV15(e);let n=0;for(let i=0;i<seasonIdx;i++)n+=Number(parts[i]?.episodes||0);return n+Number(episode||1)}
function watchLocateProgressV15(e){const p=Math.max(0,Number(e?.progress||0)),parts=watchPartsV15(e);if(!p)return {season:0,episode:1};let left=p;for(let i=0;i<parts.length;i++){const eps=Number(parts[i]?.episodes||0);if(!eps)return {season:i,episode:Math.max(1,left+1)};if(left<eps)return {season:i,episode:Math.min(eps,left+1)};left-=eps;}return {season:Math.max(0,parts.length-1),episode:Math.max(1,Number(parts.at(-1)?.episodes||1))}}
function watchFindEntryV15(section,index){const e=latestData?.sections?.[section]?.[index];return e?{section,index,entry:e}:null}
function openWatchPlayerV15(section,index,opts={}){const found=watchFindEntryV15(section,index);if(!found)return;cleanupWatchUrlsV15();watchStateV15={...watchStateV15,...found,localVideos:[],localSubs:[],objectUrls:[],manifest:loadWatchManifestV15(found.entry)};const loc=opts.season!=null?{season:Number(opts.season)||0,episode:Number(opts.episode)||1}:watchLocateProgressV15(found.entry);watchStateV15.season=Math.max(0,loc.season);watchStateV15.episode=Math.max(1,loc.episode);$('#watchModal')?.classList.remove('hidden');document.body.style.overflow='hidden';renderWatchShellV15();loadWatchEpisodeV15({autoplay:false});}
window.openWatchPlayerV15=openWatchPlayerV15;
function closeWatchPlayerV15(){persistWatchResumeV15(true);const v=$('#watchVideo');if(v){v.pause();v.removeAttribute('src');v.load()}cleanupWatchUrlsV15();$('#watchModal')?.classList.add('hidden');document.body.style.overflow='';watchStateV15.entry=null;}
function manifestStoreV15(){try{return JSON.parse(localStorage.getItem(WATCH_MANIFEST_KEY_V15)||'{}')||{}}catch{return {}}}
function loadWatchManifestV15(e){return manifestStoreV15()[watchEntryKeyV15(e)]||null}
function saveWatchManifestV15(e,m){const all=manifestStoreV15();all[watchEntryKeyV15(e)]=m;try{localStorage.setItem(WATCH_MANIFEST_KEY_V15,JSON.stringify(all))}catch{}watchStateV15.manifest=m}
function episodeFromFilenameV15(name){const s=String(name||'');let m=s.match(/s(\d{1,2})[ ._-]*e(\d{1,3})/i);if(m)return {season:Number(m[1]),episode:Number(m[2])};m=s.match(/(?:episode|ep|серия|e)[ ._#-]*(\d{1,3})/i);if(m)return {season:1,episode:Number(m[1])};m=s.match(/(?:^|[^\d])(\d{1,3})(?:[^\d]|$)/);return {season:1,episode:m?Number(m[1]):1}}
function dubFromFilenameV15(name){const s=String(name||'');for(const [rx,label] of [[/anilibria/i,'AniLibria'],[/anidub/i,'AniDUB'],[/crunchyroll/i,'Crunchyroll'],[/original|japanese|jpn|\bjp\b/i,'Оригинал'],[/russian|rus|\bru\b/i,'Русская'],[/english|eng|\ben\b/i,'English']])if(rx.test(s))return label;const b=s.match(/[\[(]([^\]\)]{2,28})[\]\)]/);return b?b[1].trim():'Локальный файл'}
function qualityFromFilenameV15(name){const m=String(name||'').match(/(2160|1440|1080|720|480|360)p/i);return m?`${m[1]}p`:'auto'}
function subLangFromFilenameV15(name){const s=String(name||'').toLowerCase();if(/(?:^|[^a-z])(ru|rus)(?:[^a-z]|$)|рус/.test(s))return {id:'ru',label:'Русские'};if(/(?:^|[^a-z])(en|eng)(?:[^a-z]|$)/.test(s))return {id:'en',label:'English'};return {id:'sub',label:'Субтитры'}}
function handleWatchFolderV15(files){cleanupWatchUrlsV15();watchStateV15.localVideos=[];watchStateV15.localSubs=[];for(const f of [...files]){const x=episodeFromFilenameV15(f.name),ext=f.name.split('.').pop().toLowerCase();if(['mp4','webm','m4v','mov'].includes(ext)){watchStateV15.localVideos.push({file:f,season:x.season,episode:x.episode,dub:dubFromFilenameV15(f.name),quality:qualityFromFilenameV15(f.name),label:f.name})}else if(['vtt','srt'].includes(ext)){const l=subLangFromFilenameV15(f.name);watchStateV15.localSubs.push({file:f,season:x.season,episode:x.episode,id:l.id,label:l.label,ext})}}renderWatchShellV15();loadWatchEpisodeV15({autoplay:false});}
function normalizeManifestV15(raw){if(!raw||typeof raw!=='object')throw new Error('Manifest должен быть JSON-объектом');const seasons=Array.isArray(raw.seasons)?raw.seasons:[];return {...raw,seasons:seasons.map((s,si)=>({number:Number(s.number||s.season||si+1),title:s.title||`Сезон ${si+1}`,episodes:(s.episodes||[]).map((ep,ei)=>({number:Number(ep.number||ep.episode||ei+1),title:ep.title||'',streams:(ep.streams||ep.sources||[]).map((x,j)=>({url:x.url||x.src||'',type:x.type||(/\.m3u8(?:$|[?#])/i.test(String(x.url||x.src||''))?'hls':'video'),provider:x.provider||'',dub:x.dub||x.audio||x.name||`Дорожка ${j+1}`,quality:x.quality||'auto',label:x.label||x.name||''})).filter(x=>x.url),subtitles:(ep.subtitles||ep.subs||[]).map((x,j)=>({url:x.url||x.src||'',id:x.id||x.lang||`sub${j+1}`,label:x.label||x.name||x.lang||`Субтитры ${j+1}`})).filter(x=>x.url)}))}))}}
async function importWatchManifestV15(file){try{const raw=JSON.parse(await file.text()),m=normalizeManifestV15(raw);saveWatchManifestV15(watchStateV15.entry,m);renderWatchShellV15();loadWatchEpisodeV15({autoplay:false});setMessage('Manifest источников подключён.','ok')}catch(e){setMessage(`Не удалось импортировать manifest: ${e.message}`,'error')}}
function currentManifestEpisodeV15(){const m=watchStateV15.manifest;if(!m)return null;const s=(m.seasons||[]).find(x=>Number(x.number)===watchStateV15.season+1)||m.seasons?.[watchStateV15.season];return (s?.episodes||[]).find(x=>Number(x.number)===watchStateV15.episode)||null}
function currentSourcesV15(){const s=watchStateV15.season+1,e=watchStateV15.episode,local=watchStateV15.localVideos.filter(x=>x.season===s&&x.episode===e).map(x=>({...x,kind:'local'})),remote=(currentManifestEpisodeV15()?.streams||[]).map(x=>({...x,kind:'remote'}));return [...local,...remote]}
function currentSubsV15(){const s=watchStateV15.season+1,e=watchStateV15.episode,local=watchStateV15.localSubs.filter(x=>x.season===s&&x.episode===e).map(x=>({...x,kind:'local'})),remote=(currentManifestEpisodeV15()?.subtitles||[]).map(x=>({...x,kind:'remote'}));return [...local,...remote]}
function renderWatchShellV15(){const e=watchStateV15.entry;if(!e)return;const parts=watchPartsV15(e),part=parts[Math.min(watchStateV15.season,parts.length-1)]||parts[0],eps=Math.max(1,Number(part?.episodes||1)),glob=watchGlobalEpisodeV15(e,watchStateV15.season,watchStateV15.episode),total=Number(e.episodes||parts.reduce((n,p)=>n+Number(p.episodes||0),0));$('#watchTitle').textContent=e.title;$('#watchMeta').textContent=`${part?.title||`Сезон ${watchStateV15.season+1}`} · серия ${watchStateV15.episode}${total?` · ${glob}/${total}`:''}`;$('#watchEpisodeTitle').textContent=e.format==='MOVIE'?'Фильм':`Серия ${watchStateV15.episode}`;$('#watchProgressPill').textContent=`${Math.max(0,Number(e.progress||0))}${total?` / ${total}`:''}`;$('#watchSeasonTabs').innerHTML=parts.length>1?parts.map((p,i)=>`<button class="${i===watchStateV15.season?'active':''}" onclick="watchSetSeasonV15(${i})">${i+1}. ${esc((p.title||`Сезон ${i+1}`).replace(e.title,'').trim()||`Сезон ${i+1}`)}</button>`).join(''):'';$('#watchEpisodeGrid').innerHTML=Array.from({length:eps},(_,i)=>{const n=i+1,g=watchGlobalEpisodeV15(e,watchStateV15.season,n),watched=Number(e.progress||0)>=g;return `<button class="${n===watchStateV15.episode?'active':''} ${watched?'watched':''}" onclick="watchSetEpisodeV15(${n})">${n}</button>`}).join('');const pref=watchPrefsV15();$('#watchAutoNext').checked=pref.autoNext!==false;renderWatchSelectorsV15(pref)}
function renderWatchSelectorsV15(pref=watchPrefsV15()){const src=currentSourcesV15(),subs=currentSubsV15(),dubs=[...new Set(src.map(x=>x.dub||'Дорожка'))],quals=[...new Set(src.map(x=>x.quality||'auto'))];const dubSel=$('#watchDub'),qSel=$('#watchQuality'),subSel=$('#watchSubs');dubSel.innerHTML=dubs.length?dubs.map(x=>`<option ${x===pref.dub?'selected':''}>${esc(x)}</option>`).join(''):'<option>Нет дорожек</option>';qSel.innerHTML=quals.length?quals.map(x=>`<option ${x===pref.quality?'selected':''}>${esc(x)}</option>`).join(''):'<option>auto</option>';subSel.innerHTML=`<option value="off">Без субтитров</option>`+subs.map(x=>`<option value="${esc(x.id)}" ${x.id===pref.subs?'selected':''}>${esc(x.label)}</option>`).join('');dubSel.disabled=!dubs.length;qSel.disabled=!quals.length;subSel.disabled=!subs.length;if(dubs.length&&!dubs.includes(pref.dub))dubSel.value=dubs[0];if(quals.length&&!quals.includes(pref.quality))qSel.value=quals[0];}
async function watchSubtitleUrlV15(sub){if(!sub)return '';if(sub.kind==='remote')return sub.url;if(sub.ext==='vtt'){const u=URL.createObjectURL(sub.file);watchStateV15.objectUrls.push(u);return u}let t=await sub.file.text();t='WEBVTT\n\n'+t.replace(/\r/g,'').replace(/(\d{2}:\d{2}:\d{2}),(\d{3})/g,'$1.$2');const u=URL.createObjectURL(new Blob([t],{type:'text/vtt'}));watchStateV15.objectUrls.push(u);return u}
async function loadWatchEpisodeV15({autoplay=false,preserveTime=false}={}){const e=watchStateV15.entry;if(!e)return;cleanupWatchUrlsV15();renderWatchShellV15();const v=$('#watchVideo'),empty=$('#watchEmpty'),srcs=currentSourcesV15();const dub=$('#watchDub')?.value||'',q=$('#watchQuality')?.value||'auto';let choices=srcs.filter(x=>(!dub||x.dub===dub));let chosen=choices.find(x=>x.quality===q)||choices[0]||srcs[0];if(!chosen){v.pause();v.removeAttribute('src');v.load();empty.classList.remove('hidden');$('#watchSourceNote').textContent='Для этой серии пока нет подключённого видео-источника.';return}empty.classList.add('hidden');const old=preserveTime?Number(v.currentTime||0):0;let url=chosen.url;if(chosen.kind==='local'){url=URL.createObjectURL(chosen.file);watchStateV15.objectUrls.push(url)}v.innerHTML='';v.src=url;const subs=currentSubsV15(),subId=$('#watchSubs')?.value||'off';if(subId!=='off'){const sub=subs.find(x=>String(x.id)===String(subId));if(sub){const tr=document.createElement('track');tr.kind='subtitles';tr.label=sub.label;tr.srclang=sub.id||'sub';tr.src=await watchSubtitleUrlV15(sub);tr.default=true;v.appendChild(tr)}}v.load();$('#watchSourceNote').textContent=`${chosen.kind==='local'?'Локально':'Manifest'} · ${chosen.dub||'Дорожка'} · ${chosen.quality||'auto'}`;v.addEventListener('loadedmetadata',()=>{if(old>0)try{v.currentTime=old}catch{}else restoreWatchResumeV15();if(autoplay)v.play().catch(()=>{})},{once:true})}
function watchSetSeasonV15(i){watchStateV15.season=Math.max(0,Number(i)||0);watchStateV15.episode=1;loadWatchEpisodeV15({autoplay:false})}window.watchSetSeasonV15=watchSetSeasonV15;
function watchSetEpisodeV15(n){watchStateV15.episode=Math.max(1,Number(n)||1);loadWatchEpisodeV15({autoplay:false})}window.watchSetEpisodeV15=watchSetEpisodeV15;
function watchNextEpisodeV15(){const e=watchStateV15.entry,parts=watchPartsV15(e),part=parts[watchStateV15.season],eps=Math.max(1,Number(part?.episodes||1));if(watchStateV15.episode<eps){watchStateV15.episode++;loadWatchEpisodeV15({autoplay:true});return true}if(watchStateV15.season<parts.length-1){watchStateV15.season++;watchStateV15.episode=1;loadWatchEpisodeV15({autoplay:true});return true}return false}
function markWatchProgressV15(){const e=watchStateV15.entry;if(!e)return;const g=watchGlobalEpisodeV15(e,watchStateV15.season,watchStateV15.episode);if(g>Number(e.progress||0)){e.progress=g;saveData();renderAll();$('#watchProgressPill').textContent=`${e.progress}${e.episodes?` / ${e.episodes}`:''}`;renderWatchShellV15()}}
function watchResumeKeyV15(){return `${watchEntryKeyV15(watchStateV15.entry)}:${watchStateV15.season+1}:${watchStateV15.episode}`}
function resumeStoreV15(){try{return JSON.parse(localStorage.getItem(WATCH_RESUME_KEY_V15)||'{}')||{}}catch{return {}}}
function persistWatchResumeV15(force=false){const v=$('#watchVideo');if(!v||!watchStateV15.entry||!v.duration)return;const now=Date.now();if(!force&&now-watchStateV15.lastPersist<7000)return;watchStateV15.lastPersist=now;const all=resumeStoreV15(),k=watchResumeKeyV15();all[k]={t:Number(v.currentTime||0),d:Number(v.duration||0),at:now};try{localStorage.setItem(WATCH_RESUME_KEY_V15,JSON.stringify(all))}catch{}}
function restoreWatchResumeV15(){const v=$('#watchVideo'),x=resumeStoreV15()[watchResumeKeyV15()];if(!v||!x?.t||!v.duration)return;if(x.t<v.duration-20)try{v.currentTime=Math.max(0,Math.min(x.t,v.duration-1))}catch{}}
function showWatchPartyInfoV15(){const m=$('#modal');$('#modalTitle').textContent='◉ Смотреть вместе';$('#modalText').textContent='Интерфейс комнаты уже заложен, но настоящую синхронизацию добавим, когда сайт будет опубликован: комнаты, ссылка-приглашение, синхронная пауза/перемотка и список друзей.';$('#modalActions').innerHTML='<button onclick="document.querySelector(\'#modal\').classList.add(\'hidden\')">Понятно</button>';m.classList.remove('hidden')}
window.showWatchPartyInfoV15=showWatchPartyInfoV15;
function watchFranchisePartHereV15(i){if(!openedDetail)return;const {section,index}=openedDetail;openWatchPlayerV15(section,index,{season:Number(i)||0,episode:1})}window.watchFranchisePartHereV15=watchFranchisePartHereV15;

// Replace franchise part cards with our player first, external link second.
const renderDetailPartsV15Base=renderDetailPartsV9;
renderDetailPartsV9=function(entry){const sec=$('#detailPartsSection'),box=$('#detailParts'),status=$('#detailPartsStatus');if(!sec||!box)return;const parts=entry?.franchise_parts||[];if(parts.length<=1){sec.classList.add('hidden');box.innerHTML='';return}sec.classList.remove('hidden');if(status)status.textContent=`${parts.length} частей · можно открыть конкретный сезон`;box.innerHTML=parts.map((p,i)=>`<article class="detail-part-card"><div class="detail-part-index">${String(i+1).padStart(2,'0')}</div>${p.cover?`<img src="${esc(p.cover)}" alt="">`:''}<div class="detail-part-main"><strong>${esc(p.title)}</strong>${partLabelV9(p,i)}</div><div class="detail-part-actions-v15"><button type="button" onclick="watchFranchisePartHereV15(${i})">▶ Здесь</button><button class="secondary" type="button" onclick="watchFranchisePartV9(${i},this)">↗ OldExternal</button></div></article>`).join('')};

$('#detailWatchHere')?.addEventListener('click',()=>{if(!openedDetail)return;openWatchPlayerV15(openedDetail.section,openedDetail.index)});
$('#watchClose')?.addEventListener('click',closeWatchPlayerV15);
$('#watchModal')?.addEventListener('click',e=>{if(e.target===$('#watchModal'))closeWatchPlayerV15()});
$('#watchPartyBtn')?.addEventListener('click',showWatchPartyInfoV15);
for(const id of ['watchPickFolder','watchPickFolderSide'])$('#'+id)?.addEventListener('click',()=>$('#watchFolderInput')?.click());
for(const id of ['watchImportManifest','watchImportManifestSide'])$('#'+id)?.addEventListener('click',()=>$('#watchManifestInput')?.click());
$('#watchFolderInput')?.addEventListener('change',e=>{if(e.target.files?.length)handleWatchFolderV15(e.target.files);e.target.value=''});
$('#watchManifestInput')?.addEventListener('change',e=>{const f=e.target.files?.[0];if(f)importWatchManifestV15(f);e.target.value=''});
$('#watchDub')?.addEventListener('change',()=>{const p=watchPrefsV15();p.dub=$('#watchDub').value;saveWatchPrefsV15(p);loadWatchEpisodeV15({autoplay:false,preserveTime:true})});
$('#watchQuality')?.addEventListener('change',()=>{const p=watchPrefsV15();p.quality=$('#watchQuality').value;saveWatchPrefsV15(p);loadWatchEpisodeV15({autoplay:false,preserveTime:true})});
$('#watchSubs')?.addEventListener('change',()=>{const p=watchPrefsV15();p.subs=$('#watchSubs').value;saveWatchPrefsV15(p);loadWatchEpisodeV15({autoplay:false,preserveTime:true})});
$('#watchAutoNext')?.addEventListener('change',()=>{const p=watchPrefsV15();p.autoNext=$('#watchAutoNext').checked;saveWatchPrefsV15(p)});
$('#watchVideo')?.addEventListener('timeupdate',()=>{const v=$('#watchVideo');persistWatchResumeV15();if(v?.duration&&v.currentTime/v.duration>=.9)markWatchProgressV15()});
$('#watchVideo')?.addEventListener('ended',()=>{markWatchProgressV15();if($('#watchAutoNext')?.checked)watchNextEpisodeV15()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#watchModal')?.classList.contains('hidden'))closeWatchPlayerV15()});

/* ===== V15.1: HLS online playback, clean part tabs, scoped comments ===== */
const WATCH_COMMENTS_KEY_V151='animeWatchCommentsV151';
let watchCommentScopeV151='episode';
function destroyWatchHlsV151(){try{watchStateV15.hls?.destroy()}catch{}watchStateV15.hls=null;}
const closeWatchPlayerV15Base=closeWatchPlayerV15;
closeWatchPlayerV15=function(){destroyWatchHlsV151();closeWatchPlayerV15Base();};
window.closeWatchPlayerV15=closeWatchPlayerV15;

normalizeManifestV15=function(raw){
  if(!raw||typeof raw!=='object')throw new Error('Manifest должен быть JSON-объектом');
  const seasons=Array.isArray(raw.seasons)?raw.seasons:[];
  return {...raw,seasons:seasons.map((s,si)=>({
    number:Number(s.number||s.season||si+1),title:s.title||`Сезон ${si+1}`,
    episodes:(s.episodes||[]).map((ep,ei)=>({
      number:Number(ep.number||ep.episode||ei+1),title:ep.title||'',
      streams:(ep.streams||ep.sources||[]).map((x,j)=>({url:x.url||x.src||'',type:x.type||'',dub:x.dub||x.audio||x.name||`Дорожка ${j+1}`,quality:x.quality||'auto',label:x.label||x.name||''})).filter(x=>x.url),
      subtitles:(ep.subtitles||ep.subs||[]).map((x,j)=>({url:x.url||x.src||'',id:x.id||x.lang||`sub${j+1}`,label:x.label||x.name||x.lang||`Субтитры ${j+1}`})).filter(x=>x.url)
    }))
  }))};
};

function watchPartCaptionV151(p,i){
  const eps=p?.episodes==null?'серии не объявлены':episodesText(Number(p.episodes),false);
  const fmt=humanFormat?.(p?.format||'TV')||p?.format||'TV';
  return `<strong>Часть ${i+1} · ${esc(p?.title||`Сезон ${i+1}`)}</strong><span>${esc(fmt)} · ${esc(eps)}${p?.year?` · ${esc(p.year)}`:''}</span>`;
}
function enhanceSeasonTabsV151(){
  const e=watchStateV15.entry;if(!e)return;
  const parts=watchPartsV15(e),cur=Math.min(watchStateV15.season,parts.length-1),box=$('#watchSeasonTabs'),caption=$('#watchPartCurrent');
  if(caption)caption.innerHTML=watchPartCaptionV151(parts[cur],cur);
  if(!box)return;
  if(parts.length<=1){box.innerHTML='';return;}
  box.innerHTML=parts.map((p,i)=>`<button class="${i===cur?'active':''}" onclick="watchSetSeasonV15(${i})" title="${esc(p.title||`Часть ${i+1}`)}"><span class="season-short">${i+1}</span><span class="season-year">${esc(p.year||'')}</span></button>`).join('');
}

function commentsStoreV151(){try{return JSON.parse(localStorage.getItem(WATCH_COMMENTS_KEY_V151)||'{}')||{}}catch{return {}}}
function saveCommentsStoreV151(x){try{localStorage.setItem(WATCH_COMMENTS_KEY_V151,JSON.stringify(x))}catch{}}
function commentBucketKeyV151(scope=watchCommentScopeV151){
  const base=watchEntryKeyV15(watchStateV15.entry),s=watchStateV15.season+1,e=watchStateV15.episode;
  if(scope==='title')return `${base}|title`;
  if(scope==='season')return `${base}|s:${s}`;
  return `${base}|s:${s}|e:${e}`;
}
function commentContextTextV151(){
  const parts=watchPartsV15(watchStateV15.entry),p=parts[watchStateV15.season];
  if(watchCommentScopeV151==='title')return `Все обсуждения по «${watchStateV15.entry?.title||'тайтлу'}»`;
  if(watchCommentScopeV151==='season')return `Обсуждение: ${p?.title||`часть ${watchStateV15.season+1}`}`;
  return `${p?.title||`Часть ${watchStateV15.season+1}`} · серия ${watchStateV15.episode}`;
}
function renderWatchCommentsV151(){
  const list=$('#watchCommentsList'),ctx=$('#watchCommentContext');if(!list||!watchStateV15.entry)return;
  if(ctx)ctx.textContent=commentContextTextV151();
  document.querySelectorAll('#watchCommentScope [data-scope]').forEach(b=>b.classList.toggle('active',b.dataset.scope===watchCommentScopeV151));
  const items=commentsStoreV151()[commentBucketKeyV151()]||[];
  if(!items.length){list.innerHTML='<div class="watch-comments-empty">Пока здесь тихо. После публикации сюда можно подключить общие комментарии пользователей.</div>';return;}
  list.innerHTML=[...items].reverse().map(c=>`<article class="watch-comment-card"><div class="watch-comment-avatar">${esc((c.author||'?').slice(0,1).toUpperCase())}</div><div class="watch-comment-main"><div><strong>${esc(c.author||'Гость')}</strong><small>${new Date(c.at||Date.now()).toLocaleString('ru-RU',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})}</small></div><p>${esc(c.text||'')}</p></div><button class="watch-comment-delete" type="button" onclick="deleteWatchCommentV151('${esc(c.id)}')" title="Удалить">✕</button></article>`).join('');
}
function addWatchCommentV151(){
  const input=$('#watchCommentText'),text=input?.value.trim();if(!text||!watchStateV15.entry)return;
  const all=commentsStoreV151(),k=commentBucketKeyV151(),arr=all[k]||[];
  arr.push({id:`c${Date.now()}${Math.random().toString(16).slice(2)}`,author:cleanNicknameV13?.(uiSettings?.nickname)||'Гость',text,at:Date.now()});all[k]=arr.slice(-250);saveCommentsStoreV151(all);input.value='';renderWatchCommentsV151();
}
function deleteWatchCommentV151(id){const all=commentsStoreV151(),k=commentBucketKeyV151();all[k]=(all[k]||[]).filter(x=>x.id!==id);saveCommentsStoreV151(all);renderWatchCommentsV151();}
window.deleteWatchCommentV151=deleteWatchCommentV151;

const renderWatchShellV15Base=renderWatchShellV15;
renderWatchShellV15=function(){renderWatchShellV15Base();enhanceSeasonTabsV151();renderWatchCommentsV151();};

function ensureEpisodeManifestV151(){
  const e=watchStateV15.entry;if(!e)return null;
  let m=watchStateV15.manifest||{title:e.title,seasons:[]};
  const sn=watchStateV15.season+1,en=watchStateV15.episode;
  let s=(m.seasons||[]).find(x=>Number(x.number)===sn);if(!s){s={number:sn,title:watchPartsV15(e)[watchStateV15.season]?.title||`Часть ${sn}`,episodes:[]};(m.seasons||(m.seasons=[])).push(s);}
  let ep=(s.episodes||[]).find(x=>Number(x.number)===en);if(!ep){ep={number:en,title:'',streams:[],subtitles:[]};(s.episodes||(s.episodes=[])).push(ep);}
  ep.streams||=[];ep.subtitles||=[];watchStateV15.manifest=m;return ep;
}
function addOnlineSourceV151(){
  const input=$('#watchOnlineUrl'),url=input?.value.trim();if(!url||!watchStateV15.entry)return;
  if(!/^https?:\/\//i.test(url)){setMessage('Нужна прямая http/https ссылка на видео или HLS .m3u8.','error');return;}
  const ep=ensureEpisodeManifestV151();const hls=/\.m3u8(?:$|[?#])/i.test(url);ep.streams=ep.streams.filter(x=>x.url!==url);ep.streams.unshift({url,type:hls?'hls':'video',dub:'Онлайн',quality:'auto',label:hls?'HLS':'Прямое видео'});saveWatchManifestV15(watchStateV15.entry,watchStateV15.manifest);input.value='';renderWatchShellV15();loadWatchEpisodeV15({autoplay:false});setMessage('Онлайн-источник сохранён для этой серии.','ok');
}

function isHlsSourceV151(x){return x?.type==='hls'||/\.m3u8(?:$|[?#])/i.test(String(x?.url||''));}
function populateHlsSelectorsV151(hls,pref){
  const dub=$('#watchDub'),qual=$('#watchQuality'),subs=$('#watchSubs');if(!hls)return;
  if(dub&&hls.audioTracks?.length){dub.innerHTML=hls.audioTracks.map((t,i)=>`<option value="hlsaudio:${i}">${esc(t.name||t.lang||`Аудио ${i+1}`)}</option>`).join('');let idx=Number(String(pref.dub||'').split(':')[1]);if(!Number.isFinite(idx)||!hls.audioTracks[idx])idx=Math.max(0,hls.audioTrack||0);dub.value=`hlsaudio:${idx}`;hls.audioTrack=idx;dub.disabled=false;}
  if(qual&&hls.levels?.length){const opts=['<option value="hlslevel:-1">Авто</option>',...hls.levels.map((l,i)=>`<option value="hlslevel:${i}">${esc(l.height?`${l.height}p`:l.name||`Уровень ${i+1}`)}</option>`)];qual.innerHTML=opts.join('');let idx=Number(String(pref.quality||'').split(':')[1]);if(!Number.isFinite(idx))idx=-1;qual.value=`hlslevel:${idx}`;hls.currentLevel=idx;qual.disabled=false;}
  if(subs){const external=currentSubsV15(),options=['<option value="off">Без субтитров</option>'];if(hls.subtitleTracks?.length)options.push(...hls.subtitleTracks.map((t,i)=>`<option value="hlssub:${i}">${esc(t.name||t.lang||`Субтитры ${i+1}`)}</option>`));options.push(...external.map(x=>`<option value="extsub:${esc(x.id)}">${esc(x.label)}</option>`));subs.innerHTML=options.join('');const want=String(pref.subs||'off');subs.value=[...subs.options].some(o=>o.value===want)?want:'off';if(subs.value.startsWith('hlssub:'))hls.subtitleTrack=Number(subs.value.split(':')[1]);else hls.subtitleTrack=-1;subs.disabled=options.length<=1;}
}
function applyHlsSelectionsV151(){const h=watchStateV15.hls;if(!h)return;const dv=$('#watchDub')?.value||'',qv=$('#watchQuality')?.value||'',sv=$('#watchSubs')?.value||'off';if(dv.startsWith('hlsaudio:'))h.audioTrack=Number(dv.split(':')[1]);if(qv.startsWith('hlslevel:'))h.currentLevel=Number(qv.split(':')[1]);h.subtitleTrack=sv.startsWith('hlssub:')?Number(sv.split(':')[1]):-1;}

loadWatchEpisodeV15=async function({autoplay=false,preserveTime=false}={}){
  const e=watchStateV15.entry;if(!e)return;destroyWatchHlsV151();cleanupWatchUrlsV15();renderWatchShellV15();
  const v=$('#watchVideo'),empty=$('#watchEmpty'),srcs=currentSourcesV15();const pref=watchPrefsV15();const dub=$('#watchDub')?.value||'',q=$('#watchQuality')?.value||'auto';
  let choices=srcs.filter(x=>(!dub||dub.startsWith('hlsaudio:')||x.dub===dub));let chosen=choices.find(x=>q.startsWith('hlslevel:')||x.quality===q)||choices[0]||srcs[0];
  if(!chosen){v.pause();v.removeAttribute('src');v.load();empty.classList.remove('hidden');$('#watchSourceNote').textContent='Для этой серии пока нет источника. Можно вставить HLS/MP4 URL справа.';renderWatchCommentsV151();return;}
  empty.classList.add('hidden');const old=preserveTime?Number(v.currentTime||0):0;let url=chosen.url;
  if(chosen.kind==='local'){url=URL.createObjectURL(chosen.file);watchStateV15.objectUrls.push(url)}
  v.innerHTML='';
  const finish=()=>{v.addEventListener('loadedmetadata',()=>{if(old>0)try{v.currentTime=old}catch{}else restoreWatchResumeV15();if(autoplay)v.play().catch(()=>{})},{once:true})};
  if(chosen.kind==='remote'&&isHlsSourceV151(chosen)&&window.Hls?.isSupported?.()){
    const h=new Hls({enableWorker:true,lowLatencyMode:false});watchStateV15.hls=h;h.attachMedia(v);h.on(Hls.Events.MEDIA_ATTACHED,()=>h.loadSource(url));
    h.on(Hls.Events.MANIFEST_PARSED,()=>{populateHlsSelectorsV151(h,pref);applyHlsSelectionsV151();$('#watchSourceNote').textContent=`Онлайн HLS · ${h.audioTracks?.length||1} аудио · ${h.subtitleTracks?.length||0} субтитров · адаптивное качество`;finish();});
    h.on(Hls.Events.ERROR,(_evt,data)=>{if(data?.fatal){$('#watchSourceNote').textContent='HLS не загрузился. Проверь ссылку и CORS источника.';console.warn('HLS fatal',data);}});
  }else{
    v.src=url;const subs=currentSubsV15(),subId=$('#watchSubs')?.value||'off';if(subId!=='off'){const raw=subId.startsWith('extsub:')?subId.slice(7):subId,sub=subs.find(x=>String(x.id)===String(raw));if(sub){const tr=document.createElement('track');tr.kind='subtitles';tr.label=sub.label;tr.srclang=sub.id||'sub';tr.src=await watchSubtitleUrlV15(sub);tr.default=true;v.appendChild(tr)}}v.load();$('#watchSourceNote').textContent=`${chosen.kind==='local'?'Локально':'Онлайн'} · ${chosen.dub||'Дорожка'} · ${chosen.quality||'auto'}`;finish();
  }
};

$('#watchAddOnline')?.addEventListener('click',addOnlineSourceV151);
$('#watchOnlineUrl')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();addOnlineSourceV151();}});
$('#watchCommentScope')?.addEventListener('click',e=>{const b=e.target.closest('[data-scope]');if(!b)return;watchCommentScopeV151=b.dataset.scope;renderWatchCommentsV151();});
$('#watchCommentSend')?.addEventListener('click',addWatchCommentV151);
$('#watchCommentText')?.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){e.preventDefault();addWatchCommentV151();}});
// Existing selector handlers call loadWatchEpisodeV15; these additional handlers make HLS track switches feel immediate.
$('#watchDub')?.addEventListener('change',()=>setTimeout(applyHlsSelectionsV151,0));
$('#watchQuality')?.addEventListener('change',()=>setTimeout(applyHlsSelectionsV151,0));
$('#watchSubs')?.addEventListener('change',()=>setTimeout(applyHlsSelectionsV151,0));
$('#watchClose')?.addEventListener('click',destroyWatchHlsV151);


/* ===== V16: fair XP profile, Stars, achievements, collection, cosmetics ===== */
const PROFILE_VERSION_V16=1;
const PROFILE_EPISODE_XP_V16=25, PROFILE_SEASON_XP_V16=150, PROFILE_TITLE_XP_V16=300;
let profileActiveTabV16='overview';
let watchTrackV16={last:null,seeking:false,lastSave:0};
const PROFILE_ACHIEVEMENTS_V16=[
  {id:'first_ep',icon:'▶',title:'Первая серия',desc:'Честно посмотреть 1 серию',target:1,metric:'episodes',xp:50,stars:20},
  {id:'five_ep',icon:'✦',title:'Разогрев',desc:'Честно посмотреть 5 серий',target:5,metric:'episodes',xp:100,stars:30},
  {id:'ten_ep',icon:'🔥',title:'Втянулся',desc:'Честно посмотреть 10 серий',target:10,metric:'episodes',xp:160,stars:45},
  {id:'first_title',icon:'🏁',title:'До титров',desc:'Полностью закрыть 1 тайтл',target:1,metric:'titles',xp:180,stars:60},
  {id:'critic',icon:'⭐',title:'Есть мнение',desc:'Оценить 5 реально начатых тайтлов',target:5,metric:'ratings',xp:120,stars:40},
  {id:'night',icon:'🌙',title:'Ночная смена',desc:'Закрыть 5 серий между 00:00 и 05:00',target:5,metric:'night',xp:180,stars:60},
  {id:'fifty_ep',icon:'📺',title:'Сезонный ветеран',desc:'Честно посмотреть 50 серий',target:50,metric:'episodes',xp:350,stars:120,ticket:1},
  {id:'century',icon:'💯',title:'Сотня',desc:'Честно посмотреть 100 серий',target:100,metric:'episodes',xp:650,stars:240,ticket:1}
];
const PROFILE_SHOP_V16=[
  {id:'frame-rose',name:'Rose Signal',desc:'Розовое неоновое кольцо профиля',price:300,type:'frame',className:'frame-rose'},
  {id:'frame-violet',name:'Violet Pulse',desc:'Фиолетовое свечение вокруг аватара',price:500,type:'frame',className:'frame-violet'},
  {id:'frame-gold',name:'Golden Hour',desc:'Тёплая золотая рамка',price:800,type:'frame',className:'frame-gold'},
  {id:'frame-cyber',name:'Cyber Split',desc:'Двойная cyan/purple рамка',price:1100,type:'frame',className:'frame-cyber'}
];
function ensureProfileV16(){
  latestData.profile_v16 ||= {version:PROFILE_VERSION_V16,level:1,xp:0,totalXp:0,stars:0,tickets:0,waifuTickets:0,episodeLedger:{},seasonRewards:{},titleRewards:{},ratingRewards:{},achievements:{},collection:[],activity:[],ownedCosmetics:[],equipped:{frame:'',avatarCharacterId:null},stats:{nightEpisodes:0}};
  const p=latestData.profile_v16;p.version=PROFILE_VERSION_V16;p.level=Math.max(1,Number(p.level)||1);p.xp=Math.max(0,Number(p.xp)||0);p.totalXp=Math.max(0,Number(p.totalXp)||0);p.stars=Math.max(0,Number(p.stars)||0);p.tickets=Math.max(0,Number(p.tickets)||0);p.waifuTickets=Math.max(0,Number(p.waifuTickets)||0);p.episodeLedger||={};p.seasonRewards||={};p.titleRewards||={};p.ratingRewards||={};p.achievements||={};p.collection||=[];p.activity||=[];p.ownedCosmetics||=[];p.equipped||={frame:'',avatarCharacterId:null};p.stats||={nightEpisodes:0};return p;
}
function profileNeedXpV16(level){const l=Math.max(1,Number(level)||1);return Math.round(100+(l-1)*72+Math.pow(l-1,1.28)*18)}
function profileNicknameV16(){return (typeof cleanNicknameV13==='function'?cleanNicknameV13(uiSettings?.nickname):String(uiSettings?.nickname||'Гость')).trim()||'Гость'}
function profileActivityV16(icon,title,detail=''){const p=ensureProfileV16();p.activity.unshift({id:`a${Date.now()}${Math.random().toString(36).slice(2,6)}`,icon,title,detail,at:Date.now()});p.activity=p.activity.slice(0,80)}
function profileToastV16(title,detail=''){const box=$('#rewardToastStack');if(!box)return;const el=document.createElement('div');el.className='reward-toast';el.innerHTML=`<b>${esc(title)}</b>${detail?`<span>${esc(detail)}</span>`:''}`;box.appendChild(el);setTimeout(()=>{el.style.opacity='0';el.style.transform='translateX(18px)';setTimeout(()=>el.remove(),260)},4200)}
function addStarsV16(n,reason='',silent=false){n=Math.max(0,Math.round(Number(n)||0));if(!n)return;const p=ensureProfileV16();p.stars+=n;if(reason)profileActivityV16('✦',`+${n} Stars`,reason);if(!silent)profileToastV16(`+${n} ✦ Stars`,reason)}
function addTicketV16(n=1,reason='',silent=false){n=Math.max(0,Math.round(Number(n)||0));if(!n)return;const p=ensureProfileV16();p.tickets+=n;if(reason)profileActivityV16('🎴',`+${n} Ticket`,reason);if(!silent)profileToastV16(`🎴 Ticket ×${n}`,reason)}
function addWaifuTicketV165(n=1,reason='',silent=false){n=Math.max(0,Math.round(Number(n)||0));if(!n)return;const p=ensureProfileV16();p.waifuTickets+=n;if(reason)profileActivityV16('💗',`+${n} Waifu Ticket`,reason);if(!silent)profileToastV16(`💗 Waifu Ticket ×${n}`,reason);saveData();renderProfileChromeV16()}
window.addWaifuTicketV165=addWaifuTicketV165;
function addXpV16(n,reason='',silent=false){n=Math.max(0,Math.round(Number(n)||0));if(!n)return;const p=ensureProfileV16();p.xp+=n;p.totalXp+=n;if(reason)profileActivityV16('XP',`+${n} XP`,reason);if(!silent)profileToastV16(`+${n} XP`,reason);let levels=0;while(p.xp>=profileNeedXpV16(p.level)){p.xp-=profileNeedXpV16(p.level);p.level++;levels++;const starReward=p.level%5===0?120:60;addStarsV16(starReward,`Уровень ${p.level}`,true);if(p.level%5===0)addTicketV16(1,`Уровень ${p.level}`,true);if(p.level%10===0)addWaifuTicketV165(1,`Уровень ${p.level}`,true);profileActivityV16('⬆',`Уровень ${p.level}`,`+${starReward} Stars${p.level%5===0?' · +1 Ticket':''}${p.level%10===0?' · +1 Waifu Ticket':''}`)}if(levels)profileToastV16(`LEVEL UP · ${p.level}`,p.level%10===0?'+120 ✦ · +1 🎴 · +1 💗':p.level%5===0?'+120 ✦ · +1 🎴':'+60 ✦');saveData();renderProfileChromeV16()}
function entryKeyV16(e){return typeof watchEntryKeyV15==='function'?watchEntryKeyV15(e):String(e?.anilist_id||e?.mal_id||normalize(e?.title||'anime'))}
function episodeKeyV16(e,s,eNo){return `${entryKeyV16(e)}:s${Number(s)+1}:e${Number(eNo)}`}
function ledgerEpisodeV16(e,s,eNo,create=true){const p=ensureProfileV16(),k=episodeKeyV16(e,s,eNo);if(!p.episodeLedger[k]&&create)p.episodeLedger[k]={entryKey:entryKeyV16(e),title:e?.title||'Аниме',season:Number(s)+1,episode:Number(eNo),duration:0,intervals:[],verified:false,xpAwarded:false,verifiedAt:null,lastAt:Date.now()};return p.episodeLedger[k]||null}
function mergeIntervalV16(intervals,a,b){a=Math.max(0,Number(a)||0);b=Math.max(0,Number(b)||0);if(!(b>a))return intervals||[];let arr=[...(intervals||[]),[Math.round(a*10)/10,Math.round(b*10)/10]].sort((x,y)=>x[0]-y[0]),out=[];for(const x of arr){if(!out.length||x[0]>out.at(-1)[1]+.75)out.push([...x]);else out.at(-1)[1]=Math.max(out.at(-1)[1],x[1])}return out.slice(-160)}
function watchedSecondsV16(rec){return (rec?.intervals||[]).reduce((n,x)=>n+Math.max(0,Number(x[1])-Number(x[0])),0)}
function coverageV16(rec){const d=Number(rec?.duration||0);return d>0?Math.min(1,watchedSecondsV16(rec)/d):0}
function currentEpisodeRecordV16(){return watchStateV15?.entry?ledgerEpisodeV16(watchStateV15.entry,watchStateV15.season,watchStateV15.episode):null}
function trackVideoV16(force=false){const v=$('#watchVideo');if(!v||!watchStateV15?.entry||!Number.isFinite(v.currentTime))return;const cur=Number(v.currentTime||0),rec=currentEpisodeRecordV16();if(v.duration&&Number.isFinite(v.duration))rec.duration=Math.max(rec.duration||0,Number(v.duration));rec.lastAt=Date.now();if(!document.hidden&&!watchTrackV16.seeking&&!v.paused&&watchTrackV16.last!=null){const delta=cur-watchTrackV16.last,maxJump=Math.max(6,Number(v.playbackRate||1)*4.2);if(delta>0&&delta<=maxJump)rec.intervals=mergeIntervalV16(rec.intervals,watchTrackV16.last,cur)}watchTrackV16.last=cur;const now=Date.now();if(force||now-watchTrackV16.lastSave>9000){watchTrackV16.lastSave=now;saveData()}}
function verifiedEpisodeCountV16(){return Object.values(ensureProfileV16().episodeLedger).filter(x=>x.verified).length}
function titleVerifiedCountV16(entry){const key=entryKeyV16(entry);return Object.values(ensureProfileV16().episodeLedger).filter(x=>x.entryKey===key&&x.verified).length}
function partEpisodesV16(entry,i){const parts=watchPartsV15(entry);return Math.max(0,Number(parts[i]?.episodes||0))}
function seasonCompleteV16(entry,s){const eps=partEpisodesV16(entry,s);if(!eps)return false;for(let n=1;n<=eps;n++)if(!ledgerEpisodeV16(entry,s,n,false)?.verified)return false;return true}
function titleCompleteVerifiedV16(entry){const parts=watchPartsV15(entry);if(!parts.length)return false;for(let s=0;s<parts.length;s++){if(!partEpisodesV16(entry,s)||!seasonCompleteV16(entry,s))return false}return true}
function contiguousVerifiedV16(entry){const parts=watchPartsV15(entry);let total=0;for(let s=0;s<parts.length;s++){const eps=partEpisodesV16(entry,s);if(!eps)break;for(let n=1;n<=eps;n++){if(!ledgerEpisodeV16(entry,s,n,false)?.verified)return total;total++}}return total}
function verifyEpisodeV16(){const e=watchStateV15?.entry,rec=currentEpisodeRecordV16();if(!e||!rec)return false;const cov=coverageV16(rec),watched=watchedSecondsV16(rec);if(rec.verified)return true;if(!rec.duration||rec.duration<90||cov<.82||watched<Math.min(rec.duration*.82,480))return false;rec.verified=true;rec.verifiedAt=Date.now();if(!rec.xpAwarded){rec.xpAwarded=true;addXpV16(PROFILE_EPISODE_XP_V16,`${e.title} · серия ${watchStateV15.episode}`);addStarsV16(3,`${e.title} · серия ${watchStateV15.episode}`,true)}const h=new Date(rec.verifiedAt).getHours();if(h<5)ensureProfileV16().stats.nightEpisodes=(Number(ensureProfileV16().stats.nightEpisodes)||0)+1;const contiguous=contiguousVerifiedV16(e);if(contiguous>Number(e.progress||0)){e.progress=contiguous;renderAll()}const seasonKey=`${entryKeyV16(e)}:s${watchStateV15.season+1}`,p=ensureProfileV16();if(seasonCompleteV16(e,watchStateV15.season)&&!p.seasonRewards[seasonKey]){p.seasonRewards[seasonKey]=Date.now();addXpV16(PROFILE_SEASON_XP_V16,`${e.title} · часть ${watchStateV15.season+1} завершена`);addStarsV16(30,`Завершён сезон ${watchStateV15.season+1}`)}const titleKey=entryKeyV16(e);if(titleCompleteVerifiedV16(e)&&!p.titleRewards[titleKey]){p.titleRewards[titleKey]=Date.now();addXpV16(PROFILE_TITLE_XP_V16,`${e.title} завершён полностью`);addStarsV16(120,`${e.title} · полный просмотр`);addTicketV16(1,`${e.title} · полный просмотр`)}profileActivityV16('▶','Серия подтверждена',`${e.title} · ${Math.round(cov*100)}% уникального просмотра`);evaluateAchievementsV16();saveData();renderProfileChromeV16();if(!$('#profileModal')?.classList.contains('hidden'))renderProfileV16();return true}
const markWatchProgressV15BeforeV16=markWatchProgressV15;
markWatchProgressV15=function(){trackVideoV16(true);return verifyEpisodeV16()};
window.markWatchProgressV15=markWatchProgressV15;
function profileRatingCountV16(){let n=0;for(const entries of Object.values(latestData.sections||{}))for(const e of entries||[]){if(Number(e.score)>0&&titleVerifiedCountV16(e)>0)n++}return n}
function rewardRatingsV16(){const p=ensureProfileV16();for(const entries of Object.values(latestData.sections||{}))for(const e of entries||[]){const k=entryKeyV16(e);if(Number(e.score)>0&&titleVerifiedCountV16(e)>0&&!p.ratingRewards[k]){p.ratingRewards[k]=Date.now();addXpV16(10,`Первая оценка · ${e.title}`,true);profileActivityV16('⭐','Оценка засчитана',`${e.title} · ${e.score}/10`)}}}
function achievementMetricV16(type){const p=ensureProfileV16();if(type==='episodes')return verifiedEpisodeCountV16();if(type==='titles')return Object.keys(p.titleRewards||{}).length;if(type==='ratings')return profileRatingCountV16();if(type==='night')return Number(p.stats?.nightEpisodes||0);return 0}
function evaluateAchievementsV16(){rewardRatingsV16();const p=ensureProfileV16();for(const a of PROFILE_ACHIEVEMENTS_V16){const value=achievementMetricV16(a.metric);if(value>=a.target&&!p.achievements[a.id]){p.achievements[a.id]={at:Date.now()};addXpV16(a.xp,`Достижение · ${a.title}`,true);if(a.stars)addStarsV16(a.stars,`Достижение · ${a.title}`,true);if(a.ticket)addTicketV16(a.ticket,`Достижение · ${a.title}`,true);profileActivityV16(a.icon,`Достижение: ${a.title}`,`+${a.xp} XP${a.stars?` · +${a.stars} ✦`:''}${a.ticket?' · +1 🎴':''}`);profileToastV16(`🏆 ${a.title}`,`+${a.xp} XP${a.stars?` · +${a.stars} ✦`:''}`)}}saveData()}
function renderProfileChromeV16(){const p=ensureProfileV16(),name=profileNicknameV16(),need=profileNeedXpV16(p.level),pct=Math.max(0,Math.min(100,p.xp/need*100));const c=p.collection.find(x=>String(x.characterId)===String(p.equipped.avatarCharacterId));$('#sidebarProfileName')&&($('#sidebarProfileName').textContent=name);$('#sidebarProfileLevel')&&($('#sidebarProfileLevel').textContent=`LVL ${p.level}`);$('#sidebarProfileXpText')&&($('#sidebarProfileXpText').textContent=`${p.xp} / ${need} XP`);$('#sidebarProfileStars')&&($('#sidebarProfileStars').textContent=p.stars);$('#sidebarProfileTickets')&&($('#sidebarProfileTickets').textContent=p.tickets);$('#sidebarProfileWaifuTickets')&&($('#sidebarProfileWaifuTickets').textContent=p.waifuTickets);const sideBar=$('#sidebarProfileXpBar');if(sideBar)sideBar.style.width=`${pct}%`;const av=$('#sidebarProfileAvatar');if(av){if(c?.image)av.innerHTML=`<img src="${esc(c.image)}" alt="">`;else av.textContent=name.slice(0,1).toUpperCase()}const ids={profileName:name,profileLevelBadge:`LVL ${p.level}`,profileLevelBig:p.level,profileXpText:`${p.xp} / ${need} XP`,profileStars:p.stars,profileTickets:p.tickets,profileWaifuTickets:p.waifuTickets,profileVerifiedEpisodes:verifiedEpisodeCountV16(),profileAchievementCount:Object.keys(p.achievements||{}).length};for(const [id,val] of Object.entries(ids)){const el=$('#'+id);if(el)el.textContent=val}const bar=$('#profileXpBar');if(bar)bar.style.width=`${pct}%`;const next=$('#profileNextReward');if(next){const nl=p.level+1;next.textContent=`Следующий уровень · +${nl%5===0?120:60} ✦${nl%5===0?' · +1 🎴':''}${nl%10===0?' · +1 💗':''}`;}const cr=$('#collectionRegularTicketCount');if(cr)cr.textContent=p.tickets;const cw=$('#collectionWaifuTicketCount');if(cw)cw.textContent=p.waifuTickets;const profileAv=$('#profileAvatar'),img=$('#profileAvatarImage'),fallback=$('#profileAvatarFallback');if(profileAv){profileAv.className='profile-avatar '+(p.equipped.frame||'');if(c?.image){img.src=c.image;img.classList.remove('hidden');fallback.classList.add('hidden')}else{img.classList.add('hidden');fallback.classList.remove('hidden');fallback.textContent=name.slice(0,1).toUpperCase()}}const badge=$('#profileEquippedBadge');if(badge)badge.textContent=p.equipped.frame?PROFILE_SHOP_V16.find(x=>x.className===p.equipped.frame)?.name||'рамка':'без рамки'}
function renderOverviewV16(){const p=ensureProfileV16(),entries=Object.values(latestData.sections||{}).flat(),seconds=Object.values(p.episodeLedger).reduce((n,r)=>n+watchedSecondsV16(r),0),hours=Math.floor(seconds/3600),titles=Object.keys(p.titleRewards).length;$('#profileOverviewStats').innerHTML=[['▶',verifiedEpisodeCountV16(),'подтверждено серий'],['⌛',hours,'часов учтено'],['🏁',titles,'тайтлов закрыто'],['⭐',profileRatingCountV16(),'оценок с просмотром']].map(x=>`<article><b>${x[0]} ${x[1]}</b><span>${x[2]}</span></article>`).join('')}
function renderAchievementsV16(){const p=ensureProfileV16(),box=$('#profileAchievements');box.innerHTML=PROFILE_ACHIEVEMENTS_V16.map(a=>{const val=achievementMetricV16(a.metric),pct=Math.min(100,val/a.target*100),un=!!p.achievements[a.id];return `<article class="achievement-card ${un?'unlocked':''}"><div class="achievement-icon">${a.icon}</div><div><h4>${esc(a.title)}</h4><p>${esc(a.desc)} · ${Math.min(val,a.target)}/${a.target}</p></div><div class="achievement-reward">+${a.xp} XP${a.stars?`<br>+${a.stars} ✦`:''}${a.ticket?'<br>+1 🎴':''}</div><div class="achievement-progress"><i style="width:${pct}%"></i></div>${un?'<span class="achievement-check">✓</span>':''}</article>`}).join('')}
function rarityClassV16(r){return `rarity-${String(r||'Common').toLowerCase()}`}
function renderCollectionV16(){const p=ensureProfileV16(),box=$('#profileCollection');if(!p.collection.length){box.innerHTML='<div class="profile-empty">Коллекция пока пустая. Character Tickets приходят за прогрессию, а Waifu Tickets — за особые награды и каждый 10-й уровень.</div>';return}box.innerHTML=[...p.collection].reverse().map(c=>`<article class="collection-card ${c.ticketType==='waifu'?'ticket-waifu':''}"><span class="collection-rarity ${rarityClassV16(c.rarity)}">${esc(String(c.rarity).toUpperCase())}</span>${c.ticketType==='waifu'?'<span class="collection-ticket-type">💗 WAIFU</span>':''}<img src="${esc(c.image||'')}" alt="${esc(c.name)}"><div class="collection-card-copy"><strong>${esc(c.name)}</strong><small>${esc(c.animeTitle||'')}</small><button type="button" onclick="equipCharacterAvatarV16(${Number(c.characterId)||0})">${String(p.equipped.avatarCharacterId)===String(c.characterId)?'✓ На аватаре':'На аватар'}</button></div></article>`).join('')}
function renderShopV16(){const p=ensureProfileV16();$('#profileShop').innerHTML=PROFILE_SHOP_V16.map(item=>{const owned=p.ownedCosmetics.includes(item.id),equipped=p.equipped.frame===item.className;return `<article class="shop-card"><div class="shop-preview"><i class="${item.className}"></i></div><h4>${esc(item.name)}</h4><p>${esc(item.desc)}</p><div class="shop-buy-row"><span class="shop-price">${owned?'Куплено':`✦ ${item.price}`}</span><button type="button" class="${owned?'secondary':''}" onclick="buyOrEquipCosmeticV16('${item.id}')">${equipped?'✓ Надето':owned?'Надеть':'Купить'}</button></div></article>`}).join('')}
function renderActivityV16(){const p=ensureProfileV16(),box=$('#profileActivity');$('#profileActivityCount').textContent=`${p.activity.length} событий`;box.innerHTML=p.activity.length?p.activity.map(a=>`<article class="profile-activity-item"><div class="profile-activity-icon">${esc(a.icon||'•')}</div><div><strong>${esc(a.title)}</strong><small>${esc(a.detail||'')}</small></div><time>${new Date(a.at).toLocaleString('ru-RU',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})}</time></article>`).join(''):'<div class="profile-empty">Награды и завершённые серии появятся здесь.</div>'}
function renderProfileV16(){evaluateAchievementsV16();renderProfileChromeV16();renderOverviewV16();renderAchievementsV16();renderCollectionV16();renderShopV16();renderActivityV16()}
function setProfileTabV16(tab){profileActiveTabV16=tab;document.querySelectorAll('#profileTabs [data-profile-tab]').forEach(b=>b.classList.toggle('active',b.dataset.profileTab===tab));document.querySelectorAll('.profile-tab-pane').forEach(x=>x.classList.toggle('active',x.id===`profileTab${tab[0].toUpperCase()+tab.slice(1)}`));if(tab==='collection')renderCollectionV16();if(tab==='shop')renderShopV16();if(tab==='activity')renderActivityV16()}
function openProfileV16(){renderProfileV16();setProfileTabV16(profileActiveTabV16);$('#profileModal').classList.remove('hidden');document.body.style.overflow='hidden'}
function closeProfileV16(){ $('#profileModal').classList.add('hidden');document.body.style.overflow=''}
window.openProfileV16=openProfileV16;
function buyOrEquipCosmeticV16(id){const p=ensureProfileV16(),item=PROFILE_SHOP_V16.find(x=>x.id===id);if(!item)return;if(!p.ownedCosmetics.includes(id)){if(p.stars<item.price){profileToastV16('Не хватает Stars',`Нужно ${item.price} ✦`);return}p.stars-=item.price;p.ownedCosmetics.push(id);profileActivityV16('🛍',`Куплено: ${item.name}`,`−${item.price} Stars`)}p.equipped.frame=p.equipped.frame===item.className?'':item.className;saveData();renderProfileV16()}window.buyOrEquipCosmeticV16=buyOrEquipCosmeticV16;
function equipCharacterAvatarV16(id){const p=ensureProfileV16();p.equipped.avatarCharacterId=String(p.equipped.avatarCharacterId)===String(id)?null:id;saveData();renderProfileV16()}window.equipCharacterAvatarV16=equipCharacterAvatarV16;
const CHARACTER_QUERY_V16=`query($id:Int!){Media(id:$id,type:ANIME){id title{english romaji} characters(page:1,perPage:18,sort:[ROLE,RELEVANCE]){edges{role node{id name{full} image{large}}}}}}`;
function rollRarityV16(){const r=Math.random()*100;return r<3?'Legendary':r<13?'Epic':r<40?'Rare':'Common'}
function duplicateStarsV16(r){return ({Common:35,Rare:90,Epic:220,Legendary:600})[r]||35}
async function openCharacterTicketV16(){const p=ensureProfileV16();if(p.tickets<1){profileToastV16('Нет Character Ticket','Их дают за полное аниме, уровни и достижения.');return}const candidates=[];for(const s of ['completed','watching'])for(const e of latestData.sections?.[s]||[])if(Number(e.anilist_id)>0)candidates.push(e);if(!candidates.length){profileToastV16('Нужен AniList ID','Обнови данные хотя бы одного аниме.');return}const entry=candidates[Math.floor(Math.random()*candidates.length)];let media;try{const res=await anilistFetch(CHARACTER_QUERY_V16,{id:Number(entry.anilist_id)});media=res?.data?.Media}catch(err){profileToastV16('Не удалось открыть Ticket','AniList не ответил. Ticket не потрачен.');return}const edges=media?.characters?.edges||[];if(!edges.length){profileToastV16('Нет персонажей','Ticket не потрачен.');return}const mains=edges.filter(x=>x.role==='MAIN'),pool=mains.length&&Math.random()<.58?mains:edges,edge=pool[Math.floor(Math.random()*pool.length)],node=edge?.node;if(!node?.id)return;p.tickets--;const rarity=rollRarityV16(),existing=p.collection.find(x=>String(x.characterId)===String(node.id));let reward='Добавлено в коллекцию';if(existing){const stars=duplicateStarsV16(rarity);addStarsV16(stars,`Повтор · ${node.name?.full||'персонаж'}`,true);reward=`Повтор → +${stars} ✦`}else p.collection.push({characterId:node.id,name:node.name?.full||'Персонаж',image:node.image?.large||'',animeId:media.id,animeTitle:pickTitle(media),rarity,at:Date.now()});profileActivityV16('🎴',`Ticket: ${node.name?.full||'Персонаж'}`,`${rarity} · ${reward}`);saveData();$('#characterReveal')?.classList.remove('waifu-reveal');$('#characterRevealRarity').textContent=rarity.toUpperCase();$('#characterRevealRarity').className=`character-reveal-rarity ${rarityClassV16(rarity)}`;$('#characterRevealImage').src=node.image?.large||'';$('#characterRevealName').textContent=node.name?.full||'Персонаж';$('#characterRevealAnime').textContent=pickTitle(media);$('#characterRevealReward').textContent=reward;$('#characterReveal').classList.remove('hidden');renderProfileV16()}

window.openCharacterTicketV16=openCharacterTicketV16;

/* V16.8.1: Waifu Ticket — stronger bias toward adult, glamorous, 'waifu-coded' heroines. */
let waifuCharacterPageCountV165=0;
const WAIFU_PAGEINFO_QUERY_V165=`query{Page(page:1,perPage:1){pageInfo{lastPage total}characters(sort:[FAVOURITES_DESC]){id}}}`;
const WAIFU_CHARACTER_PAGE_QUERY_V165=`query($page:Int!){Page(page:$page,perPage:50){characters(sort:[FAVOURITES_DESC]){id name{full} description image{large} favourites gender age media(type:ANIME,page:1,perPage:8,sort:[POPULARITY_DESC]){nodes{id isAdult format popularity averageScore genres title{english romaji}}}}}}`;
const WAIFU_LOCAL_MEDIA_QUERY_V182=`query($id:Int!){Media(id:$id,type:ANIME){id isAdult format popularity averageScore genres title{english romaji} characters(page:1,perPage:50,sort:[ROLE,RELEVANCE,FAVOURITES_DESC]){edges{role node{id name{full} description image{large} favourites gender age}}}}}`;

function explicitAdultAgeV165(age){const nums=(String(age||'').match(/\d+/g)||[]).map(Number).filter(Number.isFinite);if(!nums.length)return false;return Math.min(...nums)>=18}
function eligibleWaifuV165(c){if(!c?.id||!c?.image?.large)return false;if(String(c.gender||'').trim().toLowerCase()!=='female')return false;if(!explicitAdultAgeV165(c.age))return false;return (c.media?.nodes||[]).some(m=>m&&!m.isAdult)}
function waifuTraitsV183(c,mediaOverride=null){
  const desc=String(c?.description||'').toLowerCase();
  const media=mediaOverride||(c?.media?.nodes||[]).filter(Boolean).find(m=>!m.isAdult)||null;
  const genres=(media?.genres||[]).map(x=>String(x||'').toLowerCase());
  const title=String(media?.title?.english||media?.title?.romaji||'').toLowerCase();
  const traits=[];
  const tests={
    seductive:/seduct|allur|tempt|flirt|sensual|provocative/,
    glamorous:/glamour|gorgeous|stunning|beautif|attractive|elegan|model|idol/,
    curvy:/volupt|bust|curv|well[- ]?endowed|large breasts|big breasts/,
    mature:/mature|adult woman|older woman|mother|widow|teacher|doctor|office|executive|captain|queen|empress/,
    dangerous:/assassin|killer|dangerous|villain|warrior|fighter|mercenary|dominant|domineering/,
    cool:/cool|calm|confident|stoic|composed|mysterious/,
    playful:/playful|teas|cheerful|energetic|mischievous/,
    romantic:/romantic|lover|affection|devoted|caring/,
  };
  for(const [k,re] of Object.entries(tests))if(re.test(desc))traits.push(k);
  if(genres.includes('ecchi'))traits.push('ecchi');
  if(genres.includes('romance'))traits.push('romance');
  if(genres.includes('action'))traits.push('action');
  if(genres.includes('fantasy'))traits.push('fantasy');
  if(/loli|child|little girl|elementary|grade school|kindergarten/.test(desc+title))traits.push('minor-coded');
  return {traits:[...new Set(traits)],genres,title,animeId:media?.id||null,animeTitle:media?pickTitle(media):''};
}
function ensureWaifuTasteV183(){
  const p=ensureProfileV16();
  p.waifuTaste ||= {votes:{},updatedAt:0};
  p.waifuTaste.votes ||= {};
  return p.waifuTaste;
}
function voteWeightV183(v){return v==='love'?2.6:v==='ok'?0.45:v==='no'?-3.0:0}
function buildWaifuTasteV183(){
  const p=ensureProfileV16(),taste=ensureWaifuTasteV183();
  const anime={},genres={},traits={};
  for(const c of p.collection||[]){
    if(c.ticketType!=='waifu')continue;
    const v=taste.votes[String(c.characterId)]||c.waifuVote||'';
    const w=voteWeightV183(v);if(!w)continue;
    if(c.animeTitle)anime[String(c.animeTitle).toLowerCase()]=(anime[String(c.animeTitle).toLowerCase()]||0)+w;
    const meta=c.waifuMeta||{};
    for(const g of meta.genres||[])genres[g]=(genres[g]||0)+w;
    for(const t of meta.traits||[])traits[t]=(traits[t]||0)+w;
  }
  return {anime,genres,traits};
}
function tasteBonusV183(c,media){
  const prof=buildWaifuTasteV183(),meta=waifuTraitsV183(c,media),animeKey=String(meta.animeTitle||'').toLowerCase();
  let bonus=(prof.anime[animeKey]||0)*5;
  for(const g of meta.genres)bonus+=(prof.genres[g]||0)*1.8;
  for(const t of meta.traits)bonus+=(prof.traits[t]||0)*3.2;
  return {bonus:Math.max(-35,Math.min(38,bonus)),meta};
}
function setWaifuVoteV183(characterId,vote){
  if(!['love','ok','no',''].includes(vote))return;
  const p=ensureProfileV16(),taste=ensureWaifuTasteV183(),key=String(characterId),c=(p.collection||[]).find(x=>String(x.characterId)===key);
  if(!c||c.ticketType!=='waifu')return;
  if(taste.votes[key]===vote)vote='';
  if(vote)taste.votes[key]=vote;else delete taste.votes[key];
  c.waifuVote=vote;taste.updatedAt=Date.now();saveData();renderCollectionV16();
  profileToastV16(vote==='love'?'💘 Вайфу!':vote==='ok'?'🙂 Норм':vote==='no'?'🚫 Не моё':'Оценка снята',c.name||'');
}
window.setWaifuVoteV183=setWaifuVoteV183;
function waifuScoreV181(c){
  const desc=String(c?.description||'').toLowerCase();
  const media=(c?.media?.nodes||[]).filter(Boolean).find(m=>!m.isAdult)||null;
  const meta=waifuTraitsV183(c,media);
  const genres=meta.genres,title=meta.title;
  let score=0;
  const fav=Number(c?.favourites)||0, pop=Number(media?.popularity)||0, avg=Number(media?.averageScore)||0;
  score+=Math.min(32,Math.floor(fav/1150));
  score+=Math.min(14,Math.floor(pop/2800));
  score+=Math.min(9,Math.floor(Math.max(0,avg-65)/3));
  // Stronger adult-sexualized bias, but only after explicit 18+ eligibility passed.
  if(/seduct|allur|sensual|provocative|sexy|tempt|flirt/.test(desc))score+=26;
  if(/volupt|bust|curv|well[- ]?endowed|large breasts|big breasts/.test(desc))score+=24;
  if(/glamour|gorgeous|stunning|beautif|attractive|elegan/.test(desc))score+=14;
  if(/mature|adult woman|older woman|mother|widow|teacher|doctor|office|executive|captain|queen|empress|model/.test(desc))score+=10;
  if(genres.includes('ecchi'))score+=20;
  if(genres.includes('romance'))score+=5;
  if(genres.some(g=>['fantasy','action','drama','sci-fi'].includes(g)))score+=3;
  if(/loli|child|little girl|elementary|grade school|kindergarten/.test(desc+title))score-=100;
  const taste=tasteBonusV183(c,media);score+=taste.bonus;
  return {score,media,waifuMeta:meta,tasteBonus:taste.bonus};
}
async function waifuPageCountV165(){if(waifuCharacterPageCountV165>0)return waifuCharacterPageCountV165;const res=await anilistFetch(WAIFU_PAGEINFO_QUERY_V165,{});const total=Math.max(1,Number(res?.data?.Page?.pageInfo?.total)||1);waifuCharacterPageCountV165=Math.max(1,Math.ceil(total/50));return waifuCharacterPageCountV165}
function localWaifuEntriesV182(){
  const completed=(latestData.sections?.completed||[]).filter(e=>Number(e.anilist_id)>0);
  const watching=(latestData.sections?.watching||[]).filter(e=>Number(e.anilist_id)>0);
  return {completed,watching};
}
function localWaifuNodeEligibleV182(node){
  if(!node?.id||!node?.image?.large)return false;
  if(String(node.gender||'').trim().toLowerCase()!=='female')return false;
  return explicitAdultAgeV165(node.age);
}
async function pickLocalWaifuV182(){
  const {completed,watching}=localWaifuEntriesV182();
  if(!completed.length&&!watching.length)return null;
  for(let attempt=0;attempt<5;attempt++){
    const useCompleted=completed.length&&(watching.length===0||Math.random()<.82);
    const pool=useCompleted?completed:watching;
    const entry=pool[Math.floor(Math.random()*pool.length)];
    try{
      const res=await anilistFetch(WAIFU_LOCAL_MEDIA_QUERY_V182,{id:Number(entry.anilist_id)});
      const media=res?.data?.Media;
      if(!media||media.isAdult)continue;
      const ranked=(media.characters?.edges||[])
        .filter(x=>localWaifuNodeEligibleV182(x?.node))
        .map(x=>{const c=x.node;const faux={...c,media:{nodes:[media]}};const scored=waifuScoreV181(faux);let score=scored.score+(x.role==='MAIN'?18:4);return {c,media,score,waifuMeta:scored.waifuMeta}})
        .filter(x=>x.score>=16)
        .sort((a,b)=>b.score-a.score);
      if(ranked.length){
        const top=ranked.slice(0,Math.min(10,ranked.length));
        const chosen=top[Math.floor(Math.random()*top.length)];
        return {picked:chosen.c,pickedMedia:media,source:useCompleted?'completed':'watching',waifuMeta:chosen.waifuMeta};
      }
    }catch(e){}
  }
  return null;
}

function revealCharacterV165(node,media,rarity,reward,type='character'){const reveal=$('#characterReveal');if(!reveal)return;reveal.classList.toggle('waifu-reveal',type==='waifu');$('#characterRevealRarity').textContent=rarity.toUpperCase();$('#characterRevealRarity').className=`character-reveal-rarity ${rarityClassV16(rarity)}`;$('#characterRevealImage').src=node.image?.large||'';$('#characterRevealName').textContent=node.name?.full||'Персонаж';$('#characterRevealAnime').textContent=media?pickTitle(media):'';$('#characterRevealReward').textContent=reward;reveal.classList.remove('hidden')}
async function openWaifuTicketV165(){
  const p=ensureProfileV16();
  if(p.waifuTickets<1){profileToastV16('Нет Waifu Ticket','Их можно получать за особые награды; каждый 10-й уровень тоже даёт один.');return}
  let picked=null,pickedMedia=null,pickedMeta=null,sourceLabel='вся база';
  // 72%: знакомая героиня из твоих просмотренных/текущих аниме. Внутри этого пула completed весит сильнее watching.
  if(Math.random()<.72){
    const local=await pickLocalWaifuV182();
    if(local){picked=local.picked;pickedMedia=local.pickedMedia;pickedMeta=local.waifuMeta||waifuTraitsV183(picked,pickedMedia);sourceLabel=local.source==='completed'?'из просмотренного':'из текущего'}
  }
  // Остальные ~28% (или fallback, если в локальном списке нет подходящей взрослой героини): сюрприз из всей AniList.
  if(!picked){
    let lastPage=1;try{lastPage=await waifuPageCountV165()}catch(err){profileToastV16('AniList не ответил','Waifu Ticket не потрачен.');return}
    for(let attempt=0;attempt<8&&!picked;attempt++){
      const popularBias=Math.random()<.62;
      const maxPopular=Math.min(lastPage,80);
      const page=popularBias?1+Math.floor(Math.random()*maxPopular):1+Math.floor(Math.random()*lastPage);
      try{
        const res=await anilistFetch(WAIFU_CHARACTER_PAGE_QUERY_V165,{page});
        const ranked=(res?.data?.Page?.characters||[]).filter(eligibleWaifuV165).map(c=>({c,...waifuScoreV181(c)})).filter(x=>x.score>=24).sort((a,b)=>b.score-a.score);
        if(ranked.length){
          const top=ranked.slice(0,Math.min(12,ranked.length));
          const pickFrom=Math.random()<.78?top:ranked.slice(0,Math.min(20,ranked.length));
          const chosen=pickFrom[Math.floor(Math.random()*pickFrom.length)];
          picked=chosen.c;pickedMedia=chosen.media||(picked.media?.nodes||[]).find(m=>m&&!m.isAdult)||null;pickedMeta=chosen.waifuMeta||waifuTraitsV183(picked,pickedMedia);
        }
      }catch(err){if(attempt===7){profileToastV16('Не удалось открыть Waifu Ticket','AniList временно не отвечает. Ticket не потрачен.');return}}
    }
  }
  if(!picked){profileToastV16('Не нашлась подходящая waifu','Попробуй ещё раз — Ticket не потрачен.');return}
  p.waifuTickets--;
  const rarity=rollRarityV16(),existing=p.collection.find(x=>String(x.characterId)===String(picked.id));
  let reward='Добавлено в коллекцию';
  if(existing){if(!existing.waifuMeta)existing.waifuMeta=pickedMeta||waifuTraitsV183(picked,pickedMedia);const stars=duplicateStarsV16(rarity);addStarsV16(stars,`Waifu duplicate · ${picked.name?.full||'персонаж'}`,true);reward=`Повтор → +${stars} ✦`}
  else p.collection.push({characterId:picked.id,name:picked.name?.full||'Персонаж',image:picked.image?.large||'',animeId:pickedMedia?.id||null,animeTitle:pickedMedia?pickTitle(pickedMedia):'AniList',rarity,ticketType:'waifu',age:String(picked.age||''),waifuSource:sourceLabel,waifuMeta:pickedMeta||waifuTraitsV183(picked,pickedMedia),waifuVote:'',at:Date.now()});
  profileActivityV16('💗',`Waifu Ticket: ${picked.name?.full||'Персонаж'}`,`${rarity} · ${sourceLabel} · ${reward}`);
  saveData();renderProfileChromeV16();revealCharacterV165(picked,pickedMedia,rarity,`${sourceLabel} · ${reward}`,'waifu');renderProfileV16()
}
window.openWaifuTicketV165=openWaifuTicketV165;

function supporterInfoV16(){const m=$('#modal');$('#modalTitle').textContent='✨ Supporter / Premium — потом';$('#modalText').textContent='Просмотр, каталог, озвучки, сабы, комментарии и комнаты останутся бесплатными. Платными можно сделать только косметику: анимированные рамки, дополнительные темы, эффекты ника, расширенную статистику и значок поддержки.';$('#modalActions').innerHTML='<button onclick="document.querySelector(\'#modal\').classList.add(\'hidden\')">Окей</button>';m.classList.remove('hidden')}
// Player integrity tracking. Seeking forward does not create watched intervals; hidden tab time is ignored.
const watchVideoV16=$('#watchVideo');
watchVideoV16?.addEventListener('loadedmetadata',()=>{watchTrackV16.last=Number(watchVideoV16.currentTime||0);const r=currentEpisodeRecordV16();if(r&&watchVideoV16.duration)r.duration=Math.max(r.duration||0,Number(watchVideoV16.duration));saveData()});
watchVideoV16?.addEventListener('play',()=>{watchTrackV16.last=Number(watchVideoV16.currentTime||0)});
watchVideoV16?.addEventListener('pause',()=>trackVideoV16(true));
watchVideoV16?.addEventListener('seeking',()=>{trackVideoV16(true);watchTrackV16.seeking=true;watchTrackV16.last=null});
watchVideoV16?.addEventListener('seeked',()=>{watchTrackV16.seeking=false;watchTrackV16.last=Number(watchVideoV16.currentTime||0)});
watchVideoV16?.addEventListener('timeupdate',()=>{trackVideoV16(false);const r=currentEpisodeRecordV16();if(r&&!r.verified&&coverageV16(r)>=.82)verifyEpisodeV16()});
watchVideoV16?.addEventListener('ended',()=>{trackVideoV16(true);verifyEpisodeV16()});
document.addEventListener('visibilitychange',()=>{if(document.hidden)trackVideoV16(true);watchTrackV16.last=document.hidden?null:Number(watchVideoV16?.currentTime||0)});
// Reset interval cursor whenever another episode/season is chosen.
const watchSetEpisodeV15BeforeV16=watchSetEpisodeV15;watchSetEpisodeV15=function(n){trackVideoV16(true);watchTrackV16.last=null;return watchSetEpisodeV15BeforeV16(n)};window.watchSetEpisodeV15=watchSetEpisodeV15;
const watchSetSeasonV15BeforeV16=watchSetSeasonV15;watchSetSeasonV15=function(n){trackVideoV16(true);watchTrackV16.last=null;return watchSetSeasonV15BeforeV16(n)};window.watchSetSeasonV15=watchSetSeasonV15;
const closeWatchPlayerV15BeforeV16=closeWatchPlayerV15;closeWatchPlayerV15=function(){trackVideoV16(true);return closeWatchPlayerV15BeforeV16()};window.closeWatchPlayerV15=closeWatchPlayerV15;
// Existing score editors remain unchanged; we only scan after saves and never reward a rating without a verified episode.
document.addEventListener('click',e=>{if(e.target?.id==='detailSave'||e.target?.id==='editSave')setTimeout(()=>{rewardRatingsV16();evaluateAchievementsV16();renderProfileChromeV16();saveData()},80)});
$('#profileFutureBtn')?.removeEventListener('click',openProfileSoonV13);
$('#profileFutureBtn')?.addEventListener('click',openProfileV16);
$('#profileClose')?.addEventListener('click',closeProfileV16);
$('#profileModal')?.addEventListener('click',e=>{if(e.target===$('#profileModal'))closeProfileV16()});
$('#profileTabs')?.addEventListener('click',e=>{const b=e.target.closest('[data-profile-tab]');if(b)setProfileTabV16(b.dataset.profileTab)});
$('#profileOpenTicket')?.addEventListener('click',openCharacterTicketV16);$('#profileOpenWaifuTicket')?.addEventListener('click',openWaifuTicketV165);
$('#profileSupporterInfo')?.addEventListener('click',supporterInfoV16);
$('#characterRevealClose')?.addEventListener('click',()=>{$('#characterReveal').classList.add('hidden');$('#characterReveal').classList.remove('waifu-reveal')});
$('#characterReveal')?.addEventListener('click',e=>{if(e.target===$('#characterReveal'))$('#characterReveal').classList.add('hidden')});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!$('#characterReveal')?.classList.contains('hidden'))$('#characterReveal').classList.add('hidden');else if(!$('#profileModal')?.classList.contains('hidden'))closeProfileV16()}});
ensureProfileV16();evaluateAchievementsV16();renderProfileChromeV16();saveData();

/* ===== V16.2: profile showcase, favorites, compact list, deep customization ===== */
const PROFILE_PREFS_VERSION_V162=1;
let profileListFilterV162='all';
function ensureProfilePrefsV162(){
  const p=ensureProfileV16();
  p.favorites ||= [];
  p.profilePrefs ||= {};
  const x=p.profilePrefs;
  const d={version:PROFILE_PREFS_VERSION_V162,title:'',status:'',bio:'',accent:'#a678ff',accent2:'#ff6f91',radius:22,surface:'glass',backgroundMode:'gradient',backgroundPosition:'center',customBackground:'',customAvatar:'',backgroundDim:62,backgroundBlur:0,favoriteLimit:6,listLimit:12,favoriteStyle:'posters',showFavorites:true,showList:true,showStats:true,blockOrder:['favorites','stats','list']};
  for(const [k,v] of Object.entries(d))if(x[k]===undefined||x[k]===null)x[k]=Array.isArray(v)?[...v]:v;
  x.version=PROFILE_PREFS_VERSION_V162;
  x.radius=Math.max(14,Math.min(36,Number(x.radius)||22));x.backgroundDim=Math.max(20,Math.min(90,Number(x.backgroundDim)||62));x.backgroundBlur=Math.max(0,Math.min(20,Number(x.backgroundBlur)||0));x.favoriteLimit=Math.max(3,Math.min(12,Number(x.favoriteLimit)||6));x.listLimit=Math.max(6,Math.min(30,Number(x.listLimit)||12));
  if(!['glass','soft','solid'].includes(x.surface))x.surface='glass';if(!['gradient','favorite','custom','none'].includes(x.backgroundMode))x.backgroundMode='gradient';if(!['center','top','left','right'].includes(x.backgroundPosition))x.backgroundPosition='center';if(!['posters','cards','compact'].includes(x.favoriteStyle))x.favoriteStyle='posters';
  const allowed=['favorites','stats','list'],order=(Array.isArray(x.blockOrder)?x.blockOrder:[]).filter(v=>allowed.includes(v));for(const v of allowed)if(!order.includes(v))order.push(v);x.blockOrder=order;
  p.favorites=[...new Set((p.favorites||[]).map(String))].slice(0,12);
  return x;
}
function profileSectionsV162(){return ['watching','planned','movies','completed','paused']}
function profileAllEntriesV162(){const out=[];for(const section of profileSectionsV162())for(const [index,entry] of (latestData.sections?.[section]||[]).entries())out.push({section,index,entry,key:String(entryKeyV16(entry))});return out}
function findProfileEntryV162(key){return profileAllEntriesV162().find(x=>x.key===String(key))||null}
function profileSectionShortV162(s){return ({watching:'Сейчас',planned:'Посмотреть',movies:'Фильмы',completed:'Посмотрел',paused:'Отложено'})[s]||s}
function profileEpisodePctV162(e){const total=Number(e.episodes)||0,progress=Math.max(0,Number(e.progress)||0);return total?Math.min(100,progress/total*100):(progress?12:0)}
function profileCoverV162(e){return e?.cover||''}
function profileOpenEntryV162(section,index){closeProfileV16();setTimeout(()=>openDetails(section,index),90)}window.profileOpenEntryV162=profileOpenEntryV162;
function profileFavoriteEntryDataV162(){const p=ensureProfileV16();return (p.favorites||[]).map(k=>findProfileEntryV162(k)).filter(Boolean).slice(0,ensureProfilePrefsV162().favoriteLimit)}
function profileEnsureHeadExtrasV162(){
  const identity=$('.profile-identity>div:last-child');if(!identity)return;
  let title=$('#profileCustomTitleDisplay');if(!title){title=document.createElement('div');title.id='profileCustomTitleDisplay';title.className='profile-custom-title-display';identity.appendChild(title)}
  let bio=$('#profileBioLine');if(!bio){bio=document.createElement('p');bio.id='profileBioLine';bio.className='profile-bio-line';identity.appendChild(bio)}
  const statusLine=identity.querySelector('.profile-status-line');let st=$('#profileCustomStatusBadge');if(statusLine&&!st){st=document.createElement('span');st.id='profileCustomStatusBadge';statusLine.appendChild(st)}
}
function profileBackgroundValueV162(pref){
  if(pref.backgroundMode==='custom'&&pref.customBackground)return `url("${String(pref.customBackground).replaceAll('"','%22')}")`;
  if(pref.backgroundMode==='favorite'){const f=profileFavoriteEntryDataV162()[0]?.entry;if(f?.cover)return `url("${String(f.cover).replaceAll('"','%22')}")`}
  if(pref.backgroundMode==='none')return 'none';
  return `radial-gradient(circle at 9% 4%, color-mix(in srgb, ${pref.accent} 35%, transparent), transparent 38%), radial-gradient(circle at 95% 7%, color-mix(in srgb, ${pref.accent2} 24%, transparent), transparent 42%)`;
}
function applyProfileAppearanceV162(){
  const pref=ensureProfilePrefsV162(),shell=$('.profile-shell');if(!shell)return;profileEnsureHeadExtrasV162();
  shell.style.setProperty('--accent',pref.accent);shell.style.setProperty('--accent2',pref.accent2);shell.style.setProperty('--profile-radius',`${pref.radius}px`);shell.style.setProperty('--profile-bg-position',pref.backgroundPosition);shell.style.setProperty('--profile-bg-dim',String(pref.backgroundDim/100));shell.style.setProperty('--profile-bg-blur',`${pref.backgroundBlur}px`);shell.style.setProperty('--profile-bg-image',profileBackgroundValueV162(pref));
  shell.classList.toggle('profile-bg-none',pref.backgroundMode==='none');shell.classList.remove('profile-surface-glass','profile-surface-soft','profile-surface-solid');shell.classList.add(`profile-surface-${pref.surface}`);
  const t=$('#profileCustomTitleDisplay');if(t){t.textContent=pref.title||'';t.style.display=pref.title?'block':'none'}const b=$('#profileBioLine');if(b)b.textContent=pref.bio||'';const s=$('#profileCustomStatusBadge');if(s){s.textContent=pref.status||'';s.style.display=pref.status?'inline-flex':'none'}
  const p=ensureProfileV16();if(pref.customAvatar){const img=$('#profileAvatarImage'),fallback=$('#profileAvatarFallback'),side=$('#sidebarProfileAvatar');if(img){img.src=pref.customAvatar;img.classList.remove('hidden')}fallback?.classList.add('hidden');if(side)side.innerHTML=`<img src="${esc(pref.customAvatar)}" alt="">`}
}
const renderProfileChromeV16BaseV162=renderProfileChromeV16;
renderProfileChromeV16=function(){renderProfileChromeV16BaseV162();applyProfileAppearanceV162()};
function renderProfileFavoritesV162(){
  const p=ensureProfileV16(),pref=ensureProfilePrefsV162(),box=$('#profileFavorites'),block=$('#profileBlockFavorites');if(!box||!block)return;block.hidden=!pref.showFavorites;if(!pref.showFavorites)return;
  box.className=`profile-favorites-grid style-${pref.favoriteStyle}`;const rows=profileFavoriteEntryDataV162();
  if(!rows.length){box.innerHTML='<div class="profile-empty-favorites"><div><strong>Витрина пока пустая</strong><div>Выбери несколько любимых тайтлов — они будут самым заметным блоком профиля.</div></div><button type="button" onclick="openFavoritePickerV162()">★ Выбрать</button></div>';return}
  box.innerHTML=rows.map((x,i)=>{const e=x.entry,cover=profileCoverV162(e);return `<article class="profile-favorite-card" onclick="profileOpenEntryV162('${x.section}',${x.index})" role="button" tabindex="0">${cover?`<img class="fav-cover" src="${esc(cover)}" alt="">`:'<div class="fav-cover"></div>'}<div class="fav-copy"><strong>${esc(e.emoji||'')} ${esc(e.title)}</strong><small>${esc(profileSectionShortV162(x.section))}${Number(e.score)?` · ★ ${e.score}/10`:''}</small></div><div class="fav-actions"><button type="button" title="Левее" onclick="event.stopPropagation();moveFavoriteV162(${i},-1)">←</button><button type="button" title="Правее" onclick="event.stopPropagation();moveFavoriteV162(${i},1)">→</button><button type="button" title="Убрать" onclick="event.stopPropagation();removeFavoriteV162('${esc(x.key)}')">✕</button></div></article>`}).join('');
}
function renderProfileCompactListV162(){
  const pref=ensureProfilePrefsV162(),block=$('#profileBlockList'),box=$('#profileCompactList');if(!block||!box)return;block.hidden=!pref.showList;if(!pref.showList)return;
  const all=profileAllEntriesV162(),filtered=profileListFilterV162==='all'?all:all.filter(x=>x.section===profileListFilterV162),visible=filtered.slice(0,pref.listLimit);$('#profileListCount').textContent=`${filtered.length} тайтлов`;
  const filters=[['all','Все'],['watching','Сейчас'],['planned','Посмотреть'],['completed','Посмотрел'],['movies','Фильмы'],['paused','Отложено']];$('#profileListFilters').innerHTML=filters.map(([k,l])=>`<button type="button" class="${profileListFilterV162===k?'active':''}" onclick="setProfileListFilterV162('${k}')">${l}<span> ${k==='all'?all.length:all.filter(x=>x.section===k).length}</span></button>`).join('');
  box.innerHTML=visible.length?visible.map(x=>{const e=x.entry,pct=profileEpisodePctV162(e),cover=profileCoverV162(e),total=Number(e.episodes)||0,prog=Math.max(0,Number(e.progress)||0);return `<button type="button" class="profile-compact-card" onclick="profileOpenEntryV162('${x.section}',${x.index})">${cover?`<img src="${esc(cover)}" alt="">`:'<span></span>'}<span class="profile-compact-copy"><strong>${esc(e.emoji||'')} ${esc(e.title)}</strong><small>${esc(profileSectionShortV162(x.section))} · ${esc(e.episodes_text||'')} ${Number(e.score)?`· ★ ${e.score}/10`:''}</small><span class="profile-compact-progress"><i style="width:${pct}%"></i></span></span><span class="profile-compact-side"><b>${prog}${total?` / ${total}`:''}</b><span>${esc(e.descriptor||'')}</span></span></button>`}).join(''):'<div class="profile-empty">В этом разделе пока пусто.</div>';
  if(filtered.length>visible.length)box.insertAdjacentHTML('beforeend',`<div class="profile-list-more">Показаны первые ${visible.length} из ${filtered.length}. Количество можно увеличить во вкладке «Мой профиль».</div>`);
}
function setProfileListFilterV162(v){profileListFilterV162=v;renderProfileCompactListV162()}window.setProfileListFilterV162=setProfileListFilterV162;
function applyProfileBlockOrderV162(){const pref=ensureProfilePrefsV162(),host=$('#profileOverviewBlocks');if(!host)return;const ids={favorites:'#profileBlockFavorites',stats:'#profileBlockStats',list:'#profileBlockList'};for(const k of pref.blockOrder){const el=$(ids[k]);if(el)host.appendChild(el)}const stats=$('#profileBlockStats');if(stats)stats.hidden=!pref.showStats}
function renderProfileOrderV162(){const pref=ensureProfilePrefsV162(),box=$('#profileBlockOrder');if(!box)return;const meta={favorites:['★','Любимые аниме'],stats:['▥','Статистика'],list:['▤','Аниме-лист']};box.innerHTML=pref.blockOrder.map((k,i)=>`<div class="profile-order-item"><span>${meta[k][0]}</span><strong>${meta[k][1]}</strong><div class="profile-order-actions"><button type="button" ${i===0?'disabled':''} onclick="moveProfileBlockV162('${k}',-1)">↑</button><button type="button" ${i===pref.blockOrder.length-1?'disabled':''} onclick="moveProfileBlockV162('${k}',1)">↓</button></div></div>`).join('')}
function moveProfileBlockV162(k,d){const pref=ensureProfilePrefsV162(),i=pref.blockOrder.indexOf(k),j=i+d;if(i<0||j<0||j>=pref.blockOrder.length)return;[pref.blockOrder[i],pref.blockOrder[j]]=[pref.blockOrder[j],pref.blockOrder[i]];saveData();applyProfileBlockOrderV162();renderProfileOrderV162()}window.moveProfileBlockV162=moveProfileBlockV162;
function moveFavoriteV162(i,d){const p=ensureProfileV16(),j=i+d;if(i<0||j<0||i>=p.favorites.length||j>=p.favorites.length)return;[p.favorites[i],p.favorites[j]]=[p.favorites[j],p.favorites[i]];saveData();renderProfileFavoritesV162();applyProfileAppearanceV162()}window.moveFavoriteV162=moveFavoriteV162;
function removeFavoriteV162(key){const p=ensureProfileV16();p.favorites=(p.favorites||[]).filter(x=>String(x)!==String(key));saveData();renderProfileFavoritesV162();renderFavoritePickerV162();applyProfileAppearanceV162()}window.removeFavoriteV162=removeFavoriteV162;
function openFavoritePickerV162(){renderFavoritePickerV162();$('#profileFavoritePicker').classList.remove('hidden');setTimeout(()=>$('#profileFavoriteSearch')?.focus(),40)}window.openFavoritePickerV162=openFavoritePickerV162;
function closeFavoritePickerV162(){$('#profileFavoritePicker').classList.add('hidden')}
function renderFavoritePickerV162(){const p=ensureProfileV16(),pref=ensureProfilePrefsV162(),q=String($('#profileFavoriteSearch')?.value||'').trim().toLowerCase(),all=profileAllEntriesV162().filter(x=>!q||String(x.entry.title||'').toLowerCase().includes(q)||(x.entry.aliases||[]).some(a=>String(a).toLowerCase().includes(q)));$('#profileFavoritePickerHint').textContent=`${p.favorites.length} / ${pref.favoriteLimit} выбрано`;$('#profileFavoritePickerGrid').innerHTML=all.map(x=>{const selected=p.favorites.includes(x.key),cover=profileCoverV162(x.entry);return `<button type="button" class="favorite-pick-card ${selected?'selected':''}" onclick="toggleFavoriteV162('${esc(x.key)}')">${cover?`<img src="${esc(cover)}" alt="">`:'<span></span>'}<span><strong>${esc(x.entry.emoji||'')} ${esc(x.entry.title)}</strong><small>${esc(profileSectionShortV162(x.section))} · ${esc(x.entry.episodes_text||'')}</small></span><span class="favorite-pick-check">${selected?'★':'☆'}</span></button>`}).join('')||'<div class="profile-empty">Ничего не нашлось.</div>'}
function toggleFavoriteV162(key){const p=ensureProfileV16(),pref=ensureProfilePrefsV162(),at=p.favorites.indexOf(String(key));if(at>=0)p.favorites.splice(at,1);else{if(p.favorites.length>=pref.favoriteLimit){profileToastV16('Витрина заполнена',`Сейчас максимум ${pref.favoriteLimit}. Лимит можно увеличить во вкладке «Мой профиль».`);return}p.favorites.push(String(key))}saveData();renderFavoritePickerV162();renderProfileFavoritesV162();applyProfileAppearanceV162()}window.toggleFavoriteV162=toggleFavoriteV162;
function bindProfilePrefsControlsV162(){
  const pref=ensureProfilePrefsV162();const map={profileCustomTitle:['title','value'],profileCustomStatus:['status','value'],profileCustomBio:['bio','value'],profileAccentColor:['accent','value'],profileAccent2Color:['accent2','value'],profileRadius:['radius','number'],profileSurfaceStyle:['surface','value'],profileBackgroundMode:['backgroundMode','value'],profileBackgroundPosition:['backgroundPosition','value'],profileBackgroundDim:['backgroundDim','number'],profileBackgroundBlur:['backgroundBlur','number'],profileFavoriteLimit:['favoriteLimit','number'],profileListLimit:['listLimit','number'],profileFavoriteStyle:['favoriteStyle','value'],profileShowFavorites:['showFavorites','checked'],profileShowList:['showList','checked'],profileShowStats:['showStats','checked']};
  for(const [id,[key,type]] of Object.entries(map)){const el=$('#'+id);if(!el)continue;el[type==='checked'?'checked':'value']=pref[key];const evt=(el.type==='range'||el.type==='color'||el.tagName==='TEXTAREA'||el.tagName==='INPUT'&&el.type==='text')?'input':'change';el.addEventListener(evt,()=>{let v=type==='checked'?el.checked:type==='number'?Number(el.value):el.value;if(key==='favoriteLimit'){v=Math.max(3,Math.min(12,v));if(ensureProfileV16().favorites.length>v)ensureProfileV16().favorites=ensureProfileV16().favorites.slice(0,v)}pref[key]=v;saveData();updateProfilePrefLabelsV162();renderProfileExtrasV162();renderFavoritePickerV162()})}
  $('#profileChooseFavorites')?.addEventListener('click',openFavoritePickerV162);$('#profileFavoritePickerClose')?.addEventListener('click',closeFavoritePickerV162);$('#profileFavoritePicker')?.addEventListener('click',e=>{if(e.target===$('#profileFavoritePicker'))closeFavoritePickerV162()});$('#profileFavoriteSearch')?.addEventListener('input',renderFavoritePickerV162);
  $('#profileBackgroundUploadBtn')?.addEventListener('click',()=>$('#profileBackgroundFile')?.click());$('#profileAvatarUploadBtn')?.addEventListener('click',()=>$('#profileAvatarFile')?.click());$('#profileBackgroundClearBtn')?.addEventListener('click',()=>{pref.customBackground='';if(pref.backgroundMode==='custom')pref.backgroundMode='gradient';$('#profileBackgroundMode').value=pref.backgroundMode;saveData();renderProfileExtrasV162()});$('#profileAvatarClearBtn')?.addEventListener('click',()=>{pref.customAvatar='';saveData();renderProfileV16()});
  $('#profileBackgroundFile')?.addEventListener('change',async e=>{const f=e.target.files?.[0];if(!f)return;pref.customBackground=await compressProfileImageV162(f,1600,900,.8);pref.backgroundMode='custom';$('#profileBackgroundMode').value='custom';saveData();renderProfileExtrasV162();e.target.value=''});$('#profileAvatarFile')?.addEventListener('change',async e=>{const f=e.target.files?.[0];if(!f)return;pref.customAvatar=await compressProfileImageV162(f,512,512,.9,true);saveData();renderProfileV16();e.target.value=''});
  const nick=$('#profileCustomNickname');if(nick){nick.value=profileNicknameV16();nick.addEventListener('input',()=>{uiSettings.nickname=nick.value.trim()||'Гость';saveSettings();renderProfileChromeV16();saveData()})}
  updateProfilePrefLabelsV162();renderProfileOrderV162();
}
function updateProfilePrefLabelsV162(){const p=ensureProfilePrefsV162();const vals={profileRadiusValue:`${p.radius}px`,profileDimValue:`${p.backgroundDim}%`,profileBlurValue:`${p.backgroundBlur}px`,profileFavoriteLimitValue:p.favoriteLimit,profileListLimitValue:p.listLimit};for(const [id,v] of Object.entries(vals)){const e=$('#'+id);if(e)e.textContent=v}}
function compressProfileImageV162(file,maxW,maxH,q=.82,preserveAlpha=false){return new Promise((resolve,reject)=>{const img=new Image(),url=URL.createObjectURL(file);img.onload=()=>{try{const s=Math.min(1,maxW/img.naturalWidth,maxH/img.naturalHeight),w=Math.max(1,Math.round(img.naturalWidth*s)),h=Math.max(1,Math.round(img.naturalHeight*s)),c=document.createElement('canvas');c.width=w;c.height=h;const ctx=c.getContext('2d');if(!preserveAlpha){ctx.fillStyle='#11131a';ctx.fillRect(0,0,w,h)}ctx.drawImage(img,0,0,w,h);URL.revokeObjectURL(url);resolve(c.toDataURL('image/webp',q))}catch(err){URL.revokeObjectURL(url);reject(err)}};img.onerror=()=>{URL.revokeObjectURL(url);reject(new Error('image'))};img.src=url})}
function syncProfilePrefsControlsV162(){const p=ensureProfilePrefsV162(),vals={profileCustomNickname:profileNicknameV16(),profileCustomTitle:p.title,profileCustomStatus:p.status,profileCustomBio:p.bio,profileAccentColor:p.accent,profileAccent2Color:p.accent2,profileRadius:p.radius,profileSurfaceStyle:p.surface,profileBackgroundMode:p.backgroundMode,profileBackgroundPosition:p.backgroundPosition,profileBackgroundDim:p.backgroundDim,profileBackgroundBlur:p.backgroundBlur,profileFavoriteLimit:p.favoriteLimit,profileListLimit:p.listLimit,profileFavoriteStyle:p.favoriteStyle};for(const [id,v] of Object.entries(vals)){const e=$('#'+id);if(e&&document.activeElement!==e)e.value=v}const checks={profileShowFavorites:p.showFavorites,profileShowList:p.showList,profileShowStats:p.showStats};for(const [id,v] of Object.entries(checks)){const e=$('#'+id);if(e)e.checked=!!v}}
function renderProfileExtrasV162(){ensureProfilePrefsV162();syncProfilePrefsControlsV162();applyProfileAppearanceV162();renderProfileFavoritesV162();renderProfileCompactListV162();applyProfileBlockOrderV162();renderProfileOrderV162();updateProfilePrefLabelsV162()}
const renderProfileV16BaseV162=renderProfileV16;
renderProfileV16=function(){renderProfileV16BaseV162();renderProfileExtrasV162()};
// Favorite cards can also be opened with Enter.
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#profileFavoritePicker')?.classList.contains('hidden')){e.preventDefault();e.stopImmediatePropagation();closeFavoritePickerV162()}},true);
// Initialize profile personalization after the legacy V16 profile is ready.
ensureProfilePrefsV162();bindProfilePrefsControlsV162();renderProfileChromeV16();saveData();


/* ===== V16.3: profile polish, avatar fix, favorite picker fix, profile guestbook ===== */
const PROFILE_COMMENTS_VERSION_V163=1;
function ensureProfileV163(){
  const p=ensureProfileV16();
  p.profileComments ||= [];
  p.profileComments=p.profileComments.filter(x=>x&&x.text).slice(-120);
  const pref=ensureProfilePrefsV162();
  if(pref.showComments===undefined)pref.showComments=true;
  const allowed=['favorites','stats','list','comments'];
  let order=(Array.isArray(pref.blockOrder)?pref.blockOrder:[]).filter(x=>allowed.includes(x));
  for(const x of allowed)if(!order.includes(x))order.push(x);
  pref.blockOrder=order;
  return {p,pref};
}
function renderProfileAvatarV163(){
  const {p,pref}=ensureProfileV163(),name=profileNicknameV16();
  const char=p.collection.find(x=>String(x.characterId)===String(p.equipped.avatarCharacterId));
  const src=pref.customAvatar||char?.image||'';
  const root=$('#profileAvatar'),img=$('#profileAvatarImage'),fb=$('#profileAvatarFallback'),side=$('#sidebarProfileAvatar');
  if(root)root.className='profile-avatar '+(p.equipped.frame||'');
  if(img&&fb){
    if(src){img.src=src;img.style.display='block';img.classList.remove('hidden');fb.style.display='none';fb.classList.add('hidden')}
    else{img.removeAttribute('src');img.style.display='none';img.classList.add('hidden');fb.style.display='grid';fb.classList.remove('hidden');fb.textContent=name.slice(0,1).toUpperCase()}
  }
  if(side){side.innerHTML=src?`<img src="${esc(src)}" alt="">`:esc(name.slice(0,1).toUpperCase())}
}
const renderProfileChromeV16BaseV163=renderProfileChromeV16;
renderProfileChromeV16=function(){renderProfileChromeV16BaseV163();renderProfileAvatarV163();};

function profileCommentAvatarV163(author){return String(author||'?').trim().slice(0,1).toUpperCase()||'?'}
function renderProfileCommentsV163(){
  const {p,pref}=ensureProfileV163(),block=$('#profileBlockComments'),list=$('#profileCommentsList');if(!block||!list)return;
  block.hidden=!pref.showComments;if(!pref.showComments)return;
  const name=profileNicknameV16(),av=$('#profileCommentComposerAvatar');if(av)av.textContent=profileCommentAvatarV163(name);
  const count=$('#profileCommentsCount');if(count)count.textContent=`${p.profileComments.length} ${p.profileComments.length===1?'комментарий':'комментариев'}`;
  if(!p.profileComments.length){list.innerHTML='<div class="profile-comment-empty"><b>Пока тихо</b><span>Здесь будет гостевая профиля. Сейчас записи хранятся локально.</span></div>';return}
  list.innerHTML=[...p.profileComments].reverse().map(c=>`<article class="profile-comment-card"><div class="profile-comment-avatar">${esc(profileCommentAvatarV163(c.author))}</div><div class="profile-comment-copy"><div class="profile-comment-meta"><strong>${esc(c.author||'Гость')}</strong><time>${new Date(c.at||Date.now()).toLocaleString('ru-RU',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})}</time></div><p>${esc(c.text||'')}</p></div><button type="button" class="profile-comment-delete" onclick="deleteProfileCommentV163('${esc(c.id)}')" title="Удалить">✕</button></article>`).join('');
}
function addProfileCommentV163(){
  const input=$('#profileCommentInput'),text=String(input?.value||'').trim();if(!text)return;
  const p=ensureProfileV16();p.profileComments||=[];p.profileComments.push({id:`pc${Date.now()}${Math.random().toString(36).slice(2,6)}`,author:profileNicknameV16(),text:text.slice(0,400),at:Date.now()});p.profileComments=p.profileComments.slice(-120);if(input)input.value='';saveData();renderProfileCommentsV163();updateProfileCommentCharsV163();
}
function deleteProfileCommentV163(id){const p=ensureProfileV16();p.profileComments=(p.profileComments||[]).filter(x=>String(x.id)!==String(id));saveData();renderProfileCommentsV163()}
window.deleteProfileCommentV163=deleteProfileCommentV163;
function updateProfileCommentCharsV163(){const i=$('#profileCommentInput'),c=$('#profileCommentChars');if(c)c.textContent=`${String(i?.value||'').length} / 400`}

// Favorite picker: readable cards, selected first, stable 2-column layout.
renderFavoritePickerV162=function(){
  const p=ensureProfileV16(),pref=ensureProfilePrefsV162(),q=String($('#profileFavoriteSearch')?.value||'').trim().toLowerCase();
  let all=profileAllEntriesV162().filter(x=>!q||String(x.entry.title||'').toLowerCase().includes(q)||(x.entry.aliases||[]).some(a=>String(a).toLowerCase().includes(q)));
  all.sort((a,b)=>Number(p.favorites.includes(b.key))-Number(p.favorites.includes(a.key))||String(a.entry.title||'').localeCompare(String(b.entry.title||''),'ru'));
  const hint=$('#profileFavoritePickerHint');if(hint)hint.textContent=`${p.favorites.length} / ${pref.favoriteLimit} выбрано · нажми карточку, чтобы добавить или убрать`;
  const grid=$('#profileFavoritePickerGrid');if(!grid)return;
  grid.innerHTML=all.map(x=>{const selected=p.favorites.includes(x.key),cover=profileCoverV162(x.entry),score=Number(x.entry.score)||0;return `<button type="button" class="favorite-pick-card ${selected?'selected':''}" onclick="toggleFavoriteV162('${esc(x.key)}')">${cover?`<img src="${esc(cover)}" alt="">`:'<span class="favorite-pick-placeholder">🎌</span>'}<span class="favorite-pick-copy"><strong>${esc(x.entry.emoji||'')} ${esc(x.entry.title)}</strong><small>${esc(profileSectionShortV162(x.section))} · ${esc(x.entry.episodes_text||'')}${score?` · ★ ${score}/10`:''}</small></span><span class="favorite-pick-check">${selected?'★':'☆'}</span></button>`}).join('')||'<div class="profile-empty">Ничего не нашлось.</div>';
};

applyProfileBlockOrderV162=function(){
  const {pref}=ensureProfileV163(),host=$('#profileOverviewBlocks');if(!host)return;
  const ids={favorites:'#profileBlockFavorites',stats:'#profileBlockStats',list:'#profileBlockList',comments:'#profileBlockComments'};
  for(const k of pref.blockOrder){const el=$(ids[k]);if(el)host.appendChild(el)}
  const stats=$('#profileBlockStats');if(stats)stats.hidden=!pref.showStats;
  const comments=$('#profileBlockComments');if(comments)comments.hidden=!pref.showComments;
};
renderProfileOrderV162=function(){
  const {pref}=ensureProfileV163(),box=$('#profileBlockOrder');if(!box)return;
  const meta={favorites:['★','Любимые аниме'],stats:['▥','Статистика'],list:['▤','Аниме-лист'],comments:['💬','Комментарии профиля']};
  box.innerHTML=pref.blockOrder.map((k,i)=>`<div class="profile-order-item"><span>${meta[k][0]}</span><strong>${meta[k][1]}</strong><div class="profile-order-actions"><button type="button" ${i===0?'disabled':''} onclick="moveProfileBlockV162('${k}',-1)">↑</button><button type="button" ${i===pref.blockOrder.length-1?'disabled':''} onclick="moveProfileBlockV162('${k}',1)">↓</button></div></div>`).join('');
};

const renderProfileExtrasV162BaseV163=renderProfileExtrasV162;
renderProfileExtrasV162=function(){renderProfileExtrasV162BaseV163();ensureProfileV163();renderProfileAvatarV163();renderProfileCommentsV163();applyProfileBlockOrderV162();renderProfileOrderV162();};
const renderProfileV16BaseV163=renderProfileV16;
renderProfileV16=function(){renderProfileV16BaseV163();renderProfileAvatarV163();renderProfileCommentsV163();};

function bindProfileV163(){
  ensureProfileV163();
  const show=$('#profileShowComments');if(show){show.checked=!!ensureProfilePrefsV162().showComments;show.addEventListener('change',()=>{ensureProfilePrefsV162().showComments=show.checked;saveData();renderProfileExtrasV162()})}
  $('#profileCommentSend')?.addEventListener('click',addProfileCommentV163);
  $('#profileCommentInput')?.addEventListener('input',updateProfileCommentCharsV163);
  $('#profileCommentInput')?.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){e.preventDefault();addProfileCommentV163()}});
  $('#profileQuickEditBtn')?.addEventListener('click',()=>{setProfileTabV16('customize');setTimeout(()=>$('#profileCustomNickname')?.focus(),80)});
  updateProfileCommentCharsV163();renderProfileAvatarV163();renderProfileCommentsV163();renderProfileOrderV162();
}
setTimeout(bindProfileV163,0);


/* ===== V16.4: threaded comments, likes, owner admin tools, local quests ===== */
let profileReplyStateV164={rootId:null,replyTo:''};
let watchReplyStateV164={bucket:'',rootId:null,replyTo:''};
function normalizeCommentV164(c){
  if(!c||typeof c!=='object')c={};
  c.likes=Math.max(0,Number(c.likes)||0);c.likedByMe=!!c.likedByMe;c.replies=Array.isArray(c.replies)?c.replies:[];
  c.replies=c.replies.filter(r=>r&&r.text).map(r=>{r.likes=Math.max(0,Number(r.likes)||0);r.likedByMe=!!r.likedByMe;return r});
  return c;
}
function commentTimeV164(at){try{return new Date(at||Date.now()).toLocaleString('ru-RU',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})}catch{return ''}}
function replyBadgeV164(name){return name?`<span class="comment-replying-to">↪ ${esc(name)}</span>`:''}

function ensureProfileV164(){
  const {p,pref}=ensureProfileV163();
  p.profileComments=(p.profileComments||[]).map(normalizeCommentV164).slice(-120);
  p.quests ||= [];
  p.quests=p.quests.filter(q=>q&&q.title).slice(-100);
  return {p,pref};
}
function profileCommentTargetV164(rootId,replyId=''){
  const p=ensureProfileV164().p,root=p.profileComments.find(c=>String(c.id)===String(rootId));if(!root)return null;
  return replyId?(root.replies||[]).find(r=>String(r.id)===String(replyId))||null:root;
}
function toggleProfileCommentLikeV164(rootId,replyId=''){
  const t=profileCommentTargetV164(rootId,replyId);if(!t)return;t.likedByMe=!t.likedByMe;t.likes=Math.max(0,(Number(t.likes)||0)+(t.likedByMe?1:-1));saveData();renderProfileCommentsV163();
}
function startProfileReplyV164(rootId,replyId=''){
  const t=profileCommentTargetV164(rootId,replyId);profileReplyStateV164={rootId:String(rootId),replyTo:t?.author||''};renderProfileCommentsV163();setTimeout(()=>$('#profileReplyInputV164')?.focus(),20);
}
function cancelProfileReplyV164(){profileReplyStateV164={rootId:null,replyTo:''};renderProfileCommentsV163()}
function sendProfileReplyV164(rootId){
  const input=$('#profileReplyInputV164'),text=String(input?.value||'').trim();if(!text)return;const root=profileCommentTargetV164(rootId);if(!root)return;
  root.replies ||= [];root.replies.push({id:`pr${Date.now()}${Math.random().toString(36).slice(2,6)}`,author:profileNicknameV16(),text:text.slice(0,500),at:Date.now(),likes:0,likedByMe:false,replyTo:profileReplyStateV164.replyTo||''});root.replies=root.replies.slice(-80);profileReplyStateV164={rootId:null,replyTo:''};saveData();renderProfileCommentsV163();
}
function deleteProfileReplyV164(rootId,replyId){const root=profileCommentTargetV164(rootId);if(!root)return;root.replies=(root.replies||[]).filter(r=>String(r.id)!==String(replyId));saveData();renderProfileCommentsV163()}
Object.assign(window,{toggleProfileCommentLikeV164,startProfileReplyV164,cancelProfileReplyV164,sendProfileReplyV164,deleteProfileReplyV164});
function profileReplyHtmlV164(root,r){
  return `<div class="profile-comment-reply"><div class="profile-comment-avatar small">${esc(profileCommentAvatarV163(r.author))}</div><div class="profile-comment-copy"><div class="profile-comment-meta"><strong>${esc(r.author||'Гость')}</strong>${replyBadgeV164(r.replyTo)}<time>${commentTimeV164(r.at)}</time></div><p>${esc(r.text||'')}</p><div class="comment-actions"><button class="${r.likedByMe?'liked':''}" onclick="toggleProfileCommentLikeV164('${esc(root.id)}','${esc(r.id)}')">♥ <span>${Number(r.likes)||0}</span></button><button onclick="startProfileReplyV164('${esc(root.id)}','${esc(r.id)}')">↩ Ответить</button></div></div><button type="button" class="profile-comment-delete" onclick="deleteProfileReplyV164('${esc(root.id)}','${esc(r.id)}')">✕</button></div>`;
}
renderProfileCommentsV163=function(){
  const {p,pref}=ensureProfileV164(),block=$('#profileBlockComments'),list=$('#profileCommentsList');if(!block||!list)return;block.hidden=!pref.showComments;if(!pref.showComments)return;
  const name=profileNicknameV16(),av=$('#profileCommentComposerAvatar');if(av)av.textContent=profileCommentAvatarV163(name);
  const replies=p.profileComments.reduce((n,c)=>n+(c.replies?.length||0),0),count=$('#profileCommentsCount');if(count)count.textContent=`${p.profileComments.length} комментариев · ${replies} ответов`;
  if(!p.profileComments.length){list.innerHTML='<div class="profile-comment-empty"><b>Пока тихо</b><span>Оставь первую запись. Лайки и ветки ответов уже готовы под будущие аккаунты.</span></div>';return}
  list.innerHTML=[...p.profileComments].reverse().map(c=>{const replying=String(profileReplyStateV164.rootId)===String(c.id);return `<div class="profile-comment-thread"><article class="profile-comment-card"><div class="profile-comment-avatar">${esc(profileCommentAvatarV163(c.author))}</div><div class="profile-comment-copy"><div class="profile-comment-meta"><strong>${esc(c.author||'Гость')}</strong><time>${commentTimeV164(c.at)}</time></div><p>${esc(c.text||'')}</p><div class="comment-actions"><button class="${c.likedByMe?'liked':''}" onclick="toggleProfileCommentLikeV164('${esc(c.id)}')">♥ <span>${Number(c.likes)||0}</span></button><button onclick="startProfileReplyV164('${esc(c.id)}')">↩ Ответить</button><span>${c.replies?.length||0} ответов</span></div></div><button type="button" class="profile-comment-delete" onclick="deleteProfileCommentV163('${esc(c.id)}')">✕</button></article>${(c.replies||[]).map(r=>profileReplyHtmlV164(c,r)).join('')}${replying?`<div class="inline-reply-composer">${profileReplyStateV164.replyTo?`<small>Ответ для <b>${esc(profileReplyStateV164.replyTo)}</b></small>`:''}<textarea id="profileReplyInputV164" maxlength="500" rows="2" placeholder="Написать ответ…"></textarea><div><button class="ghost" onclick="cancelProfileReplyV164()">Отмена</button><button onclick="sendProfileReplyV164('${esc(c.id)}')">Ответить</button></div></div>`:''}</div>`}).join('');
}

function watchCommentRootV164(rootId){const all=commentsStoreV151(),arr=all[commentBucketKeyV151()]||[];return arr.find(c=>String(c.id)===String(rootId))||null}
function watchCommentTargetV164(rootId,replyId=''){const r=watchCommentRootV164(rootId);if(!r)return null;normalizeCommentV164(r);return replyId?(r.replies||[]).find(x=>String(x.id)===String(replyId))||null:r}
function saveWatchCurrentV164(mutator){const all=commentsStoreV151(),k=commentBucketKeyV151(),arr=all[k]||[];mutator(arr);all[k]=arr;saveCommentsStoreV151(all)}
function toggleWatchCommentLikeV164(rootId,replyId=''){saveWatchCurrentV164(()=>{const t=watchCommentTargetV164(rootId,replyId);if(!t)return;t.likedByMe=!t.likedByMe;t.likes=Math.max(0,(Number(t.likes)||0)+(t.likedByMe?1:-1))});renderWatchCommentsV151()}
function startWatchReplyV164(rootId,replyId=''){const t=watchCommentTargetV164(rootId,replyId);watchReplyStateV164={bucket:commentBucketKeyV151(),rootId:String(rootId),replyTo:t?.author||''};renderWatchCommentsV151();setTimeout(()=>$('#watchReplyInputV164')?.focus(),20)}
function cancelWatchReplyV164(){watchReplyStateV164={bucket:commentBucketKeyV151(),rootId:null,replyTo:''};renderWatchCommentsV151()}
function sendWatchReplyV164(rootId){const input=$('#watchReplyInputV164'),text=String(input?.value||'').trim();if(!text)return;saveWatchCurrentV164(()=>{const root=watchCommentRootV164(rootId);if(!root)return;normalizeCommentV164(root);root.replies.push({id:`wr${Date.now()}${Math.random().toString(36).slice(2,6)}`,author:profileNicknameV16(),text:text.slice(0,1200),at:Date.now(),likes:0,likedByMe:false,replyTo:watchReplyStateV164.replyTo||''});root.replies=root.replies.slice(-120)});watchReplyStateV164={bucket:commentBucketKeyV151(),rootId:null,replyTo:''};renderWatchCommentsV151()}
function deleteWatchReplyV164(rootId,replyId){saveWatchCurrentV164(()=>{const r=watchCommentRootV164(rootId);if(r){normalizeCommentV164(r);r.replies=r.replies.filter(x=>String(x.id)!==String(replyId))}});renderWatchCommentsV151()}
Object.assign(window,{toggleWatchCommentLikeV164,startWatchReplyV164,cancelWatchReplyV164,sendWatchReplyV164,deleteWatchReplyV164});
function watchReplyHtmlV164(root,r){return `<div class="watch-comment-reply"><div class="watch-comment-avatar small">${esc((r.author||'?').slice(0,1).toUpperCase())}</div><div class="watch-comment-main"><div><strong>${esc(r.author||'Гость')}</strong>${replyBadgeV164(r.replyTo)}<small>${commentTimeV164(r.at)}</small></div><p>${esc(r.text||'')}</p><div class="comment-actions"><button class="${r.likedByMe?'liked':''}" onclick="toggleWatchCommentLikeV164('${esc(root.id)}','${esc(r.id)}')">♥ <span>${Number(r.likes)||0}</span></button><button onclick="startWatchReplyV164('${esc(root.id)}','${esc(r.id)}')">↩ Ответить</button></div></div><button class="watch-comment-delete" onclick="deleteWatchReplyV164('${esc(root.id)}','${esc(r.id)}')">✕</button></div>`}
renderWatchCommentsV151=function(){
  const list=$('#watchCommentsList'),ctx=$('#watchCommentContext');if(!list||!watchStateV15.entry)return;const bucket=commentBucketKeyV151();if(watchReplyStateV164.bucket!==bucket)watchReplyStateV164={bucket,rootId:null,replyTo:''};if(ctx)ctx.textContent=commentContextTextV151();document.querySelectorAll('#watchCommentScope [data-scope]').forEach(b=>b.classList.toggle('active',b.dataset.scope===watchCommentScopeV151));
  const all=commentsStoreV151(),items=all[bucket]||[];items.forEach(normalizeCommentV164);if(!items.length){list.innerHTML='<div class="watch-comments-empty">Пока здесь тихо. Здесь будут лайки, ответы и обсуждение конкретной серии/сезона/тайтла.</div>';return}
  list.innerHTML=[...items].reverse().map(c=>{const replying=String(watchReplyStateV164.rootId)===String(c.id);return `<div class="watch-comment-thread"><article class="watch-comment-card"><div class="watch-comment-avatar">${esc((c.author||'?').slice(0,1).toUpperCase())}</div><div class="watch-comment-main"><div><strong>${esc(c.author||'Гость')}</strong><small>${commentTimeV164(c.at)}</small></div><p>${esc(c.text||'')}</p><div class="comment-actions"><button class="${c.likedByMe?'liked':''}" onclick="toggleWatchCommentLikeV164('${esc(c.id)}')">♥ <span>${Number(c.likes)||0}</span></button><button onclick="startWatchReplyV164('${esc(c.id)}')">↩ Ответить</button><span>${c.replies?.length||0} ответов</span></div></div><button class="watch-comment-delete" onclick="deleteWatchCommentV151('${esc(c.id)}')">✕</button></article>${(c.replies||[]).map(r=>watchReplyHtmlV164(c,r)).join('')}${replying?`<div class="inline-reply-composer watch-inline-reply">${watchReplyStateV164.replyTo?`<small>Ответ для <b>${esc(watchReplyStateV164.replyTo)}</b></small>`:''}<textarea id="watchReplyInputV164" maxlength="1200" rows="2" placeholder="Написать ответ…"></textarea><div><button class="ghost" onclick="cancelWatchReplyV164()">Отмена</button><button onclick="sendWatchReplyV164('${esc(c.id)}')">Ответить</button></div></div>`:''}</div>`}).join('');
}

/* Owner-only local admin. This is UI gating only; a public build must use server-side roles. */
function isLocalAdminV164(){return String(profileNicknameV16()).trim().toLowerCase()==='senite'}
function ensureQuestsV164(){const p=ensureProfileV164().p;p.quests ||= [];return p.quests}
function renderQuestsV164(){const box=$('#profileQuests'),cnt=$('#profileQuestCount');if(!box)return;const qs=ensureQuestsV164(),active=qs.filter(q=>q.status!=='completed'),done=qs.filter(q=>q.status==='completed');if(cnt)cnt.textContent=`${active.length} активных · ${done.length} выполнено`;if(!qs.length){box.innerHTML='<div class="profile-empty">Пока заданий нет. Через Admin Menu можно создать тестовое, а позже сюда подключатся ежедневные и сезонные задания.</div>';return}box.innerHTML=[...active,...done].map(q=>`<article class="profile-quest-card ${q.status==='completed'?'completed':''}"><div class="profile-quest-icon">${q.status==='completed'?'✓':'◆'}</div><div><strong>${esc(q.title)}</strong><p>${esc(q.desc||'')}</p><span>Награда: ${Number(q.xp)||0} XP${q.stars?` · ${q.stars} ✦`:''}${q.tickets?` · ${q.tickets} 🎴`:''}${q.waifuTickets?` · ${q.waifuTickets} 💗`:''}</span></div><b>${q.status==='completed'?'ВЫПОЛНЕНО':'АКТИВНО'}</b></article>`).join('')}
const setProfileTabV16BaseV164=setProfileTabV16;setProfileTabV16=function(tab){setProfileTabV16BaseV164(tab);if(tab==='quests')renderQuestsV164()};window.setProfileTabV16=setProfileTabV16;
function adminSyncButtonV164(){const b=$('#profileAdminBtn');if(b)b.classList.toggle('hidden',!isLocalAdminV164())}
function adminSummaryV164(){const box=$('#adminSummary'),p=ensureProfileV164().p;if(!box)return;box.innerHTML=[['LVL',p.level],['XP',`${p.xp}/${profileNeedXpV16(p.level)}`],['✦ Stars',p.stars],['🎴 Tickets',p.tickets],['💗 Waifu',p.waifuTickets],['🏆 Achievements',Object.keys(p.achievements||{}).length],['◆ Quests',ensureQuestsV164().filter(q=>q.status!=='completed').length]].map(x=>`<div><span>${x[0]}</span><b>${x[1]}</b></div>`).join('')}
function renderAdminQuestsV164(){const box=$('#adminQuestList');if(!box)return;const qs=ensureQuestsV164();box.innerHTML=qs.length?[...qs].reverse().map(q=>`<div class="admin-quest-item ${q.status==='completed'?'done':''}"><div><strong>${esc(q.title)}</strong><small>${esc(q.desc||'')} · ${q.xp||0} XP${q.stars?` · ${q.stars} ✦`:''}${q.tickets?` · ${q.tickets} 🎴`:''}${q.waifuTickets?` · ${q.waifuTickets} 💗`:''}</small></div><div>${q.status!=='completed'?`<button onclick="adminCompleteQuestV164('${esc(q.id)}')">✓ Выполнить</button>`:'<span>готово</span>'}<button class="ghost" onclick="adminDeleteQuestV164('${esc(q.id)}')">✕</button></div></div>`).join(''):'<div class="admin-empty">Заданий пока нет.</div>'}
function renderAdminV164(){if(!isLocalAdminV164())return;const p=ensureProfileV164().p;adminSummaryV164();renderAdminQuestsV164();const sel=$('#adminAchievementSelect');if(sel){sel.innerHTML=PROFILE_ACHIEVEMENTS_V16.map(a=>`<option value="${esc(a.id)}">${p.achievements[a.id]?'✓ ':''}${esc(a.title)}</option>`).join('')}const lv=$('#adminLevelValue');if(lv)lv.value=p.level}
function openAdminV164(){if(!isLocalAdminV164()){profileToastV16('Admin Menu недоступно','Эта локальная панель привязана к профилю SeNite.');return}renderAdminV164();$('#adminModal')?.classList.remove('hidden');document.body.style.overflow='hidden'}
function closeAdminV164(){$('#adminModal')?.classList.add('hidden');if($('#profileModal')?.classList.contains('hidden'))document.body.style.overflow=''}
function adminGiveV164(kind){const map={xp:['#adminXpAmount','XP'],stars:['#adminStarsAmount','Stars'],tickets:['#adminTicketsAmount','Tickets'],waifu:['#adminWaifuTicketsAmount','Waifu Tickets']},[id,label]=map[kind],n=Math.max(1,Math.round(Number($(id)?.value)||1));if(kind==='xp')addXpV16(n,'Admin grant');if(kind==='stars')addStarsV16(n,'Admin grant');if(kind==='tickets')addTicketV16(n,'Admin grant');if(kind==='waifu')addWaifuTicketV165(n,'Admin grant');profileActivityV16('◆',`ADMIN · +${n} ${label}`,'Локальная выдача владельца');saveData();renderAdminV164();renderProfileV16()}
function adminSetLevelV164(){const p=ensureProfileV164().p,n=Math.max(1,Math.min(999,Math.round(Number($('#adminLevelValue')?.value)||1)));p.level=n;p.xp=0;profileActivityV16('◆',`ADMIN · LVL ${n}`,'Уровень установлен вручную');saveData();renderAdminV164();renderProfileV16();profileToastV16(`LVL ${n}`,'Установлено через Admin Menu')}
function adminGrantAchievementV164(){const p=ensureProfileV164().p,id=$('#adminAchievementSelect')?.value,a=PROFILE_ACHIEVEMENTS_V16.find(x=>x.id===id);if(!a)return;if(p.achievements[id]){profileToastV16('Уже получено',a.title);return}p.achievements[id]={at:Date.now(),admin:true};if($('#adminAchievementRewards')?.checked){addXpV16(a.xp,`Admin achievement · ${a.title}`,true);if(a.stars)addStarsV16(a.stars,`Admin achievement · ${a.title}`,true);if(a.ticket)addTicketV16(a.ticket,`Admin achievement · ${a.title}`,true)}profileActivityV16('🏆',`ADMIN · ${a.title}`,$('#adminAchievementRewards')?.checked?'С наградой':'Без награды');saveData();renderAdminV164();renderProfileV16();profileToastV16(`🏆 ${a.title}`,'Выдано администратором')}
function adminUnlockCosmeticsV164(){const p=ensureProfileV164().p;for(const x of PROFILE_SHOP_V16)if(!p.ownedCosmetics.includes(x.id))p.ownedCosmetics.push(x.id);profileActivityV16('◇','ADMIN · Вся косметика открыта','Локальная выдача');saveData();renderAdminV164();renderProfileV16();profileToastV16('Косметика открыта','Все текущие рамки доступны')}
function adminCreateQuestV164(){const title=String($('#adminQuestTitle')?.value||'').trim();if(!title){profileToastV16('Нужно название задания');return}const q={id:`q${Date.now()}${Math.random().toString(36).slice(2,6)}`,title:title.slice(0,70),desc:String($('#adminQuestDesc')?.value||'').trim().slice(0,180),xp:Math.max(0,Math.round(Number($('#adminQuestXp')?.value)||0)),stars:Math.max(0,Math.round(Number($('#adminQuestStars')?.value)||0)),tickets:Math.max(0,Math.round(Number($('#adminQuestTickets')?.value)||0)),waifuTickets:Math.max(0,Math.round(Number($('#adminQuestWaifuTickets')?.value)||0)),status:'active',createdAt:Date.now()};ensureQuestsV164().push(q);profileActivityV16('◆',`Новое задание: ${q.title}`,'Создано через Admin Menu');saveData();$('#adminQuestTitle').value='';$('#adminQuestDesc').value='';renderAdminV164();renderQuestsV164();profileToastV16('Задание создано',q.title)}
function adminCompleteQuestV164(id){const q=ensureQuestsV164().find(x=>String(x.id)===String(id));if(!q||q.status==='completed')return;q.status='completed';q.completedAt=Date.now();if(q.xp)addXpV16(q.xp,`Задание · ${q.title}`,true);if(q.stars)addStarsV16(q.stars,`Задание · ${q.title}`,true);if(q.tickets)addTicketV16(q.tickets,`Задание · ${q.title}`,true);if(q.waifuTickets)addWaifuTicketV165(q.waifuTickets,`Задание · ${q.title}`,true);profileActivityV16('✓',`Задание выполнено: ${q.title}`,`+${q.xp||0} XP${q.stars?` · +${q.stars} ✦`:''}${q.tickets?` · +${q.tickets} 🎴`:''}${q.waifuTickets?` · +${q.waifuTickets} 💗`:''}`);saveData();renderAdminV164();renderQuestsV164();renderProfileV16();profileToastV16(`✓ ${q.title}`,'Награда выдана')}
function adminDeleteQuestV164(id){const p=ensureProfileV164().p;p.quests=(p.quests||[]).filter(q=>String(q.id)!==String(id));saveData();renderAdminV164();renderQuestsV164()}
Object.assign(window,{openAdminV164,closeAdminV164,adminCompleteQuestV164,adminDeleteQuestV164});
function bindAdminV164(){adminSyncButtonV164();$('#profileAdminBtn')?.addEventListener('click',openAdminV164);$('#adminClose')?.addEventListener('click',closeAdminV164);$('#adminModal')?.addEventListener('click',e=>{if(e.target===$('#adminModal'))closeAdminV164()});$('#adminGiveXp')?.addEventListener('click',()=>adminGiveV164('xp'));$('#adminGiveStars')?.addEventListener('click',()=>adminGiveV164('stars'));$('#adminGiveTickets')?.addEventListener('click',()=>adminGiveV164('tickets'));$('#adminGiveWaifuTickets')?.addEventListener('click',()=>adminGiveV164('waifu'));$('#adminSetLevel')?.addEventListener('click',adminSetLevelV164);$('#adminGrantAchievement')?.addEventListener('click',adminGrantAchievementV164);$('#adminUnlockCosmetics')?.addEventListener('click',adminUnlockCosmeticsV164);$('#adminCreateQuest')?.addEventListener('click',adminCreateQuestV164);$('#adminRefresh')?.addEventListener('click',renderAdminV164);document.addEventListener('keydown',e=>{if(e.ctrlKey&&e.shiftKey&&String(e.key).toLowerCase()==='a'&&isLocalAdminV164()){e.preventDefault();openAdminV164()}})}
const renderProfileV16BaseV164=renderProfileV16;renderProfileV16=function(){renderProfileV16BaseV164();renderProfileCommentsV163();renderQuestsV164();adminSyncButtonV164()};
setTimeout(()=>{ensureProfileV164();bindAdminV164();renderProfileCommentsV163();renderQuestsV164();adminSyncButtonV164();saveData()},0);

/* ===== V16.6: daily quests + collection showcase visibility ===== */
const PROFILE_DAILY_VERSION_V166=1;
let collectionFilterV166='all';
let dailyResetTimerV166=null;

function localDayKeyV166(d=new Date()){
  const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function shuffleV166(arr){arr=[...arr];for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]}return arr}
function dailyQuestBaseV166(metric,target){
  const map={
    watch:{icon:'▶',title:target>=15?'Аниме-марафон':'Ещё пару серий',desc:`Честно посмотри ${target} ${target===1?'серию':'серий'} сегодня`,xp:target>=15?210:90,stars:target>=15?50:22},
    comments:{icon:'💬',title:'В обсуждение',desc:`Напиши ${target} содержательных комментария сегодня`,xp:65,stars:18},
    shares:{icon:'↗',title:'Посоветуй другу',desc:'Поделись одним аниме через кнопку «Поделиться»',xp:45,stars:15},
    likes:{icon:'♥',title:'Поддержи обсуждение',desc:`Поставь ${target} лайка комментариям`,xp:40,stars:12}
  };
  const x=map[metric]||{icon:'◆',title:'Задание',desc:'Выполни условие',xp:50,stars:15};
  return {id:`daily_${metric}_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,metric,target,progress:0,status:'active',tickets:0,waifuTickets:0,...x};
}
function generateDailyV166(dayKey){
  const count=Math.random()<.55?5:4;
  const smallTarget=3+Math.floor(Math.random()*3); // 3-5
  const commentTarget=2+Math.floor(Math.random()*2); // 2-3
  const quests=[dailyQuestBaseV166('watch',smallTarget),dailyQuestBaseV166('watch',15),dailyQuestBaseV166('comments',commentTarget),dailyQuestBaseV166('shares',1)];
  if(count===5)quests.push(dailyQuestBaseV166('likes',3+Math.floor(Math.random()*3)));
  const regularSlots=shuffleV166(quests.map((_,i)=>i)).slice(0,3);
  regularSlots.forEach(i=>quests[i].tickets++);
  const waifuTotal=Math.random()<.5?1:2;
  shuffleV166(quests.map((_,i)=>i)).slice(0,waifuTotal).forEach(i=>quests[i].waifuTickets++);
  return {version:PROFILE_DAILY_VERSION_V166,date:dayKey,createdAt:Date.now(),counters:{watch:0,comments:0,shares:0,likes:0},quests,rewardTotals:{tickets:3,waifuTickets:waifuTotal}};
}
function ensureDailyV166(){
  const p=ensureProfileV16(),today=localDayKeyV166();
  if(!p.daily_v166||p.daily_v166.version!==PROFILE_DAILY_VERSION_V166||p.daily_v166.date!==today){
    p.daily_v166=generateDailyV166(today);saveData();
  }
  p.daily_v166.counters ||= {watch:0,comments:0,shares:0,likes:0};
  p.daily_v166.quests ||= [];
  return p.daily_v166;
}
function dailyProgressV166(q,d=ensureDailyV166()){return Math.min(Number(q.target)||0,Number(d.counters?.[q.metric])||0)}
function rewardTextV166(q){return `${q.xp||0} XP${q.stars?` · ${q.stars} ✦`:''}${q.tickets?` · ${q.tickets} 🎴`:''}${q.waifuTickets?` · ${q.waifuTickets} 💗`:''}`}
function completeDailyQuestV166(q,d){
  if(!q||q.status==='completed')return false;
  if(dailyProgressV166(q,d)<Number(q.target||0))return false;
  q.status='completed';q.completedAt=Date.now();q.progress=Number(q.target)||0;
  if(q.xp)addXpV16(q.xp,`Ежедневное · ${q.title}`,true);
  if(q.stars)addStarsV16(q.stars,`Ежедневное · ${q.title}`,true);
  if(q.tickets)addTicketV16(q.tickets,`Ежедневное · ${q.title}`,true);
  if(q.waifuTickets)addWaifuTicketV165(q.waifuTickets,`Ежедневное · ${q.title}`,true);
  profileActivityV16('☀',`Ежедневное выполнено: ${q.title}`,`+${rewardTextV166(q)}`);
  profileToastV16(`✓ ${q.title}`,rewardTextV166(q));
  return true;
}
function evaluateDailyV166(){const d=ensureDailyV166();let changed=false;for(const q of d.quests)if(completeDailyQuestV166(q,d))changed=true;if(changed){saveData();renderProfileChromeV16();}return changed}
function dailyRecordV166(metric,amount=1){const d=ensureDailyV166();if(!(metric in d.counters))d.counters[metric]=0;d.counters[metric]=Math.max(0,(Number(d.counters[metric])||0)+Math.max(0,Number(amount)||0));evaluateDailyV166();saveData();if(!$('#profileModal')?.classList.contains('hidden'))renderQuestsV164()}
window.dailyRecordV166=dailyRecordV166;

function dailyResetTextV166(){
  const now=new Date(),next=new Date(now);next.setHours(24,0,0,0);const ms=Math.max(0,next-now),h=Math.floor(ms/3600000),m=Math.floor(ms%3600000/60000);return `новые через ${h} ч ${m} мин`;
}
function updateDailyResetV166(){const el=$('#profileDailyReset');if(el)el.textContent=dailyResetTextV166();const p=ensureProfileV16(),before=p.daily_v166?.date||'';ensureDailyV166();if(before&&before!==p.daily_v166?.date)renderQuestsV164()}

function dailyQuestCardV166(q,d){const val=dailyProgressV166(q,d),pct=Math.min(100,(val/Math.max(1,q.target))*100),done=q.status==='completed';return `<article class="profile-quest-card daily-quest-card ${done?'completed':''}"><div class="profile-quest-icon">${esc(q.icon||'◆')}</div><div class="daily-quest-main"><div class="daily-quest-title"><strong>${esc(q.title)}</strong><b>${val}/${q.target}</b></div><p>${esc(q.desc||'')}</p><div class="daily-quest-track"><i style="width:${pct}%"></i></div><span>Награда: ${esc(rewardTextV166(q))}</span></div><b>${done?'ГОТОВО':'СЕГОДНЯ'}</b></article>`}
const renderQuestsV164BaseV166=renderQuestsV164;
renderQuestsV164=function(){
  const box=$('#profileQuests'),cnt=$('#profileQuestCount');if(!box)return;const d=ensureDailyV166();evaluateDailyV166();const active=d.quests.filter(q=>q.status!=='completed').length,done=d.quests.length-active;if(cnt)cnt.textContent=`${active} активных · ${done}/${d.quests.length} готово`;
  const custom=ensureQuestsV164().filter(q=>!q.daily_v166);
  box.innerHTML=`<div class="daily-quest-summary"><div><span>Сегодня</span><b>${d.quests.length} заданий</b></div><div><span>Награды дня</span><b>3 🎴 · ${d.rewardTotals?.waifuTickets||1} 💗</b></div><div><span>Прогресс</span><b>${done}/${d.quests.length}</b></div></div>${d.quests.map(q=>dailyQuestCardV166(q,d)).join('')}${custom.length?`<div class="quest-divider"><span>ДРУГИЕ ЗАДАНИЯ</span></div>${custom.map(q=>`<article class="profile-quest-card ${q.status==='completed'?'completed':''}"><div class="profile-quest-icon">${q.status==='completed'?'✓':'◆'}</div><div><strong>${esc(q.title)}</strong><p>${esc(q.desc||'')}</p><span>Награда: ${Number(q.xp)||0} XP${q.stars?` · ${q.stars} ✦`:''}${q.tickets?` · ${q.tickets} 🎴`:''}${q.waifuTickets?` · ${q.waifuTickets} 💗`:''}</span></div><b>${q.status==='completed'?'ВЫПОЛНЕНО':'АКТИВНО'}</b></article>`).join('')}`:''}`;
  updateDailyResetV166();
};

// Verified watch time is the only thing that advances watch dailies.
const verifyEpisodeV16BaseV166=verifyEpisodeV16;
verifyEpisodeV16=function(){const before=verifiedEpisodeCountV16(),out=verifyEpisodeV16BaseV166();const after=verifiedEpisodeCountV16();if(after>before)dailyRecordV166('watch',after-before);return out};
window.verifyEpisodeV16=verifyEpisodeV16;

// Daily comments: count only root comments with some actual text.
function bindDailyCommentCaptureV166(){
  document.addEventListener('click',e=>{
    const id=e.target?.id;if(id==='profileCommentSend'){const txt=String($('#profileCommentInput')?.value||'').trim();if(txt.length>=10)setTimeout(()=>dailyRecordV166('comments',1),0)}
    if(id==='watchCommentSend'){const txt=String($('#watchCommentText')?.value||'').trim();if(txt.length>=10)setTimeout(()=>dailyRecordV166('comments',1),0)}
  },true);
  document.addEventListener('keydown',e=>{if(!(e.ctrlKey||e.metaKey)||e.key!=='Enter')return;const id=e.target?.id;if(id==='profileCommentInput'||id==='watchCommentText'){const txt=String(e.target.value||'').trim();if(txt.length>=10)setTimeout(()=>dailyRecordV166('comments',1),0)}},true);
}

// Likes count only when changing from not-liked to liked.
const toggleProfileCommentLikeV164BaseV166=toggleProfileCommentLikeV164;
toggleProfileCommentLikeV164=function(rootId,replyId=''){const t=profileCommentTargetV164(rootId,replyId),was=!!t?.likedByMe;toggleProfileCommentLikeV164BaseV166(rootId,replyId);const now=!!profileCommentTargetV164(rootId,replyId)?.likedByMe;if(!was&&now)dailyRecordV166('likes',1)};window.toggleProfileCommentLikeV164=toggleProfileCommentLikeV164;
const toggleWatchCommentLikeV164BaseV166=toggleWatchCommentLikeV164;
toggleWatchCommentLikeV164=function(rootId,replyId=''){const t=watchCommentTargetV164(rootId,replyId),was=!!t?.likedByMe;toggleWatchCommentLikeV164BaseV166(rootId,replyId);const now=!!watchCommentTargetV164(rootId,replyId)?.likedByMe;if(!was&&now)dailyRecordV166('likes',1)};window.toggleWatchCommentLikeV164=toggleWatchCommentLikeV164;

async function shareOpenedAnimeV166(){
  if(!openedDetail)return;const e=latestData.sections?.[openedDetail.section]?.[openedDetail.index];if(!e)return;
  const text=`${e.title}${e.episodes_text?` — ${e.episodes_text}`:''}${e.descriptor?` · ${e.descriptor}`:''}`;
  try{
    if(navigator.share&&location.protocol!=='file:')await navigator.share({title:e.title,text});
    else{await copyText(text);profileToastV16('Скопировано для друга',e.title)}
    dailyRecordV166('shares',1);
  }catch(err){if(err?.name!=='AbortError')profileToastV16('Не удалось поделиться','Попробуй ещё раз.');}
}

// Collection visibility/showcase.
function normalizeCollectionV166(){const p=ensureProfileV16();for(const c of p.collection||[])if(c.showcase===undefined)c.showcase=false;return p}
function setCollectionFilterV166(filter){collectionFilterV166=['all','showcase','hidden'].includes(filter)?filter:'all';renderCollectionV16()}window.setCollectionFilterV166=setCollectionFilterV166;
function toggleCardShowcaseV166(characterId){const p=normalizeCollectionV166(),c=p.collection.find(x=>String(x.characterId)===String(characterId));if(!c)return;c.showcase=!c.showcase;saveData();renderCollectionV16();renderCardShowcaseV166();profileToastV16(c.showcase?'★ Добавлено в витрину':'Карточка скрыта',c.name||'Персонаж')}
window.toggleCardShowcaseV166=toggleCardShowcaseV166;
const renderCollectionV16BaseV166=renderCollectionV16;
renderCollectionV16=function(){
  const p=normalizeCollectionV166(),box=$('#profileCollection');if(!box)return;
  document.querySelectorAll('#profileCollectionFilters [data-card-filter]').forEach(b=>b.classList.toggle('active',b.dataset.cardFilter===collectionFilterV166));
  let cards=[...p.collection].reverse();if(collectionFilterV166==='showcase')cards=cards.filter(c=>c.showcase);if(collectionFilterV166==='hidden')cards=cards.filter(c=>!c.showcase);
  if(!p.collection.length){box.innerHTML='<div class="profile-empty">Коллекция пока пустая. Билеты и их количество находятся здесь, а не в общей статистике профиля.</div>';return}
  if(!cards.length){box.innerHTML='<div class="profile-empty">В этом фильтре карточек пока нет.</div>';return}
  box.innerHTML=cards.map(c=>{const vote=c.waifuVote||ensureWaifuTasteV183().votes[String(c.characterId)]||'';const rate=c.ticketType==='waifu'?`<div class="waifu-rate-v183"><button class="${vote==='love'?'active love':''}" onclick="setWaifuVoteV183(${Number(c.characterId)||0},'love')" title="Сильный сигнал вкуса">💘</button><button class="${vote==='ok'?'active ok':''}" onclick="setWaifuVoteV183(${Number(c.characterId)||0},'ok')" title="Немного нравится">🙂</button><button class="${vote==='no'?'active no':''}" onclick="setWaifuVoteV183(${Number(c.characterId)||0},'no')" title="Показывать похожих реже">🚫</button></div>`:'';return `<article class="collection-card ${c.ticketType==='waifu'?'ticket-waifu':''} ${c.showcase?'in-showcase':'not-showcase'}"><span class="collection-rarity ${rarityClassV16(c.rarity)}">${esc(String(c.rarity).toUpperCase())}</span>${c.ticketType==='waifu'?'<span class="collection-ticket-type">💗 WAIFU</span>':''}<img src="${esc(c.image||'')}" alt="${esc(c.name)}"><div class="collection-card-copy"><strong>${esc(c.name)}</strong><small>${esc(c.animeTitle||'')}</small>${rate}<div class="collection-card-actions"><button type="button" onclick="equipCharacterAvatarV16(${Number(c.characterId)||0})">${String(p.equipped.avatarCharacterId)===String(c.characterId)?'✓ Аватар':'На аватар'}</button><button type="button" class="${c.showcase?'showcase-on':''}" onclick="toggleCardShowcaseV166(${Number(c.characterId)||0})">${c.showcase?'★ В профиле':'☆ В витрину'}</button></div></div></article>`}).join('');
};
function renderCardShowcaseV166(){
  const p=normalizeCollectionV166(),wrap=$('#profileCardShowcaseWrap'),box=$('#profileCardShowcase');if(!wrap||!box)return;const cards=(p.collection||[]).filter(c=>c.showcase).slice(0,10);wrap.classList.toggle('hidden',!cards.length);if(!cards.length){box.innerHTML='';return}box.innerHTML=cards.map(c=>`<article class="profile-showcase-card ${c.ticketType==='waifu'?'waifu':''}"><img src="${esc(c.image||'')}" alt=""><span class="collection-rarity ${rarityClassV16(c.rarity)}">${esc(String(c.rarity).toUpperCase())}</span><div><strong>${esc(c.name||'')}</strong><small>${esc(c.animeTitle||'')}</small></div></article>`).join('')}

const renderProfileChromeV16BaseV166=renderProfileChromeV16;
renderProfileChromeV16=function(){renderProfileChromeV16BaseV166();const closed=$('#profileClosedTitles');if(closed)closed.textContent=Object.keys(ensureProfileV16().titleRewards||{}).length};
const renderProfileV16BaseV166=renderProfileV16;
renderProfileV16=function(){renderProfileV16BaseV166();renderCardShowcaseV166();renderQuestsV164();};

function bindV166(){
  ensureDailyV166();normalizeCollectionV166();bindDailyCommentCaptureV166();
  $('#detailShareAnime')?.addEventListener('click',shareOpenedAnimeV166);
  $('#profileCollectionFilters')?.addEventListener('click',e=>{const b=e.target.closest('[data-card-filter]');if(b)setCollectionFilterV166(b.dataset.cardFilter)});
  if(dailyResetTimerV166)clearInterval(dailyResetTimerV166);dailyResetTimerV166=setInterval(updateDailyResetV166,60000);
  renderProfileChromeV16();saveData();
}
setTimeout(bindV166,0);


/* ===== V16.7: admin test-profile reset ===== */
function adminCleanProgressSnapshotV167(){
  const p=ensureProfileV16();
  const verified=Object.values(p.episodeLedger||{}).filter(r=>r?.verified);
  let xp=verified.length*PROFILE_EPISODE_XP_V16;
  let stars=verified.length*3;
  const seasonRewards={},titleRewards={},ratingRewards={},achievements={};
  let tickets=0,waifuTickets=0;
  // Night stat is derived only from genuinely verified episodes.
  const nightEpisodes=verified.filter(r=>{const d=new Date(r.verifiedAt||0);return r.verifiedAt&&d.getHours()<5}).length;
  // Rebuild season/title completion rewards from the verified ledger and the real list.
  for(const row of profileAllEntriesV162()){
    const e=row.entry,key=entryKeyV16(e),parts=watchPartsV15(e);
    let allParts=parts.length>0;
    for(let s=0;s<parts.length;s++){
      const eps=Math.max(0,Number(parts[s]?.episodes||0));
      if(!eps){allParts=false;continue}
      let complete=true;
      for(let n=1;n<=eps;n++)if(!p.episodeLedger[`${key}:s${s+1}:e${n}`]?.verified){complete=false;break}
      if(complete){seasonRewards[`${key}:s${s+1}`]=Date.now();xp+=PROFILE_SEASON_XP_V16;stars+=30}else allParts=false;
    }
    if(allParts&&parts.length){titleRewards[key]=Date.now();xp+=PROFILE_TITLE_XP_V16;stars+=120;tickets+=1}
    if(Number(e.score)>0&&verified.some(r=>r.entryKey===key)){ratingRewards[key]=Date.now();xp+=10}
  }
  const metric=(type)=>{if(type==='episodes')return verified.length;if(type==='titles')return Object.keys(titleRewards).length;if(type==='ratings')return Object.keys(ratingRewards).length;if(type==='night')return nightEpisodes;return 0};
  for(const a of PROFILE_ACHIEVEMENTS_V16){
    if(metric(a.metric)>=a.target){achievements[a.id]={at:Date.now(),rebuilt:true};xp+=Number(a.xp)||0;stars+=Number(a.stars)||0;tickets+=Number(a.ticket)||0}
  }
  // Keep legitimately completed daily rewards for the current day.
  const daily=p.daily_v166;
  if(daily?.quests){for(const q of daily.quests){if(q.status==='completed'){xp+=Number(q.xp)||0;stars+=Number(q.stars)||0;tickets+=Number(q.tickets)||0;waifuTickets+=Number(q.waifuTickets)||0}}}
  // Derive level from clean XP and then add normal level-up rewards.
  let level=1,levelXp=xp;
  while(levelXp>=profileNeedXpV16(level)&&level<999){levelXp-=profileNeedXpV16(level);level++;stars+=level%5===0?120:60;if(level%5===0)tickets++;if(level%10===0)waifuTickets++}
  return {xp:levelXp,totalXp:xp,level,stars,tickets,waifuTickets,seasonRewards,titleRewards,ratingRewards,achievements,nightEpisodes};
}
function adminResetProfileV167(){
  if(!isLocalAdminV164())return;
  const modal=$('#modal');
  $('#modalTitle').textContent='Сбросить тестовый профиль?';
  $('#modalText').textContent='Будут удалены тестовые XP/Stars/Tickets, коллекция, админские задания, выданная админкой косметика и тестовая активность. Аниме-лист, настройки профиля, любимые, комментарии и честно просмотренные серии сохранятся; честная прогрессия будет пересчитана заново.';
  $('#modalActions').innerHTML='<button id="adminResetConfirmV167" class="danger">Да, сбросить</button><button id="adminResetCancelV167" class="secondary">Отмена</button>';
  modal.classList.remove('hidden');
  $('#adminResetCancelV167').onclick=()=>modal.classList.add('hidden');
  $('#adminResetConfirmV167').onclick=()=>{
    const p=ensureProfileV16();
    const keep={
      episodeLedger:p.episodeLedger||{},profilePrefs:p.profilePrefs||{},favorites:p.favorites||[],profileComments:p.profileComments||[],daily_v166:p.daily_v166||null
    };
    const clean=adminCleanProgressSnapshotV167();
    p.level=clean.level;p.xp=clean.xp;p.totalXp=clean.totalXp;p.stars=clean.stars;p.tickets=clean.tickets;p.waifuTickets=clean.waifuTickets;
    p.episodeLedger=keep.episodeLedger;p.seasonRewards=clean.seasonRewards;p.titleRewards=clean.titleRewards;p.ratingRewards=clean.ratingRewards;p.achievements=clean.achievements;
    p.collection=[];p.activity=[];p.ownedCosmetics=[];p.equipped={frame:'',avatarCharacterId:null};p.stats={nightEpisodes:clean.nightEpisodes};p.quests=[];
    p.profilePrefs=keep.profilePrefs;p.favorites=keep.favorites;p.profileComments=keep.profileComments;if(keep.daily_v166)p.daily_v166=keep.daily_v166;
    profileActivityV16('↺','Профиль очищен','Тестовые Admin-награды удалены; честная прогрессия пересчитана.');
    saveData();modal.classList.add('hidden');renderAdminV164();renderProfileV16();renderProfileChromeV16();profileToastV16('↺ Профиль очищен','Список и честный просмотр сохранены.');
  };
}
window.adminResetProfileV167=adminResetProfileV167;
setTimeout(()=>{$('#adminResetProfile')?.addEventListener('click',adminResetProfileV167)},0);


/* ===== V16.8: reliable admin reset + ticket shop + future Premium x2 Stars ===== */
const TICKET_SHOP_V168=[
  {id:'char1',icon:'🎴',name:'Character Ticket',desc:'1 обычный билет персонажа',price:420,tickets:1,waifu:0},
  {id:'char3',icon:'🎴',name:'Character Pack ×3',desc:'Три обычных билета дешевле комплектом',price:1100,tickets:3,waifu:0,best:true},
  {id:'waifu1',icon:'💗',name:'Waifu Ticket',desc:'1 билет из взрослого женского пула 18+',price:850,tickets:0,waifu:1},
  {id:'waifu2',icon:'💗',name:'Waifu Pack ×2',desc:'Два Waifu Ticket со скидкой',price:1550,tickets:0,waifu:2}
];
function profilePremiumV168(){const p=ensureProfileV16();if(typeof p.premiumActive!=='boolean')p.premiumActive=false;return !!p.premiumActive}
function isAdminStarReasonV168(reason){return /admin/i.test(String(reason||''))}
const addStarsV16BaseV168=addStarsV16;
addStarsV16=function(n,reason='',silent=false){
  n=Math.max(0,Math.round(Number(n)||0));if(!n)return;
  const mult=profilePremiumV168()&&!isAdminStarReasonV168(reason)?2:1;
  const final=n*mult;
  const p=ensureProfileV16();p.stars+=final;
  if(reason)profileActivityV16('✦',`+${final} Stars${mult===2?' · x2 Premium':''}`,reason);
  if(!silent)profileToastV16(`+${final} ✦ Stars${mult===2?' · x2':''}`,reason);
};
window.addStarsV16=addStarsV16;

function buyTicketPackV168(id){
  const p=ensureProfileV16(),item=TICKET_SHOP_V168.find(x=>x.id===id);if(!item)return;
  if(p.stars<item.price){profileToastV16('Не хватает Stars',`Нужно ${item.price} ✦ · у тебя ${p.stars} ✦`);return}
  p.stars-=item.price;
  if(item.tickets)addTicketV16(item.tickets,`Магазин · ${item.name}`,true);
  if(item.waifu)addWaifuTicketV165(item.waifu,`Магазин · ${item.name}`,true);
  profileActivityV16('🛒',`Куплено: ${item.name}`,`−${item.price} ✦`);
  saveData();renderProfileV16();profileToastV16(`${item.icon} ${item.name}`,`−${item.price} ✦`);
}
window.buyTicketPackV168=buyTicketPackV168;

const renderShopV16BaseV168=renderShopV16;
renderShopV16=function(){
  const p=ensureProfileV16(),box=$('#profileShop');if(!box)return;
  const premium=profilePremiumV168();
  const ticketHtml=`<section class="ticket-store-v168">
    <div class="ticket-store-head-v168"><div><span>БИЛЕТЫ ЗА STARS</span><h3>Фарми ✦ — открывай карточки</h3><p>Stars зарабатываются активностью. Просмотр не ограничен покупками.</p></div><div class="premium-star-chip-v168 ${premium?'active':''}">👑 Premium · x2 Stars ${premium?'ВКЛ':'позже'}</div></div>
    <div class="ticket-store-grid-v168">${TICKET_SHOP_V168.map(i=>`<article class="ticket-shop-card-v168 ${i.waifu?'waifu':''} ${i.best?'best':''}">${i.best?'<b class="ticket-best-v168">ВЫГОДНЕЕ</b>':''}<div class="ticket-shop-icon-v168">${i.icon}</div><div><h4>${esc(i.name)}</h4><p>${esc(i.desc)}</p></div><div class="ticket-shop-buy-v168"><strong>✦ ${i.price}</strong><button type="button" onclick="buyTicketPackV168('${i.id}')">Купить</button></div></article>`).join('')}</div>
  </section>`;
  // Render the existing cosmetics first into a temporary string using the same data model.
  const cosmetics=PROFILE_SHOP_V16.map(item=>{const owned=p.ownedCosmetics.includes(item.id),equipped=p.equipped.frame===item.className;return `<article class="shop-card"><div class="shop-preview"><i class="${item.className}"></i></div><h4>${esc(item.name)}</h4><p>${esc(item.desc)}</p><div class="shop-buy-row"><span class="shop-price">${owned?'Куплено':`✦ ${item.price}`}</span><button type="button" class="${owned?'secondary':''}" onclick="buyOrEquipCosmeticV16('${item.id}')">${equipped?'✓ Надето':owned?'Надеть':'Купить'}</button></div></article>`}).join('');
  box.innerHTML=`${ticketHtml}<div class="shop-section-title-v168"><span>КОСМЕТИКА</span><h3>Оформление профиля</h3></div><div class="cosmetic-grid-v168">${cosmetics}</div>`;
};

function adminDeepResetV168(){
  if(!isLocalAdminV164())return;
  const p=ensureProfileV16();
  const keep={episodeLedger:p.episodeLedger||{},profilePrefs:p.profilePrefs||{},favorites:p.favorites||[],profileComments:p.profileComments||[],daily_v166:p.daily_v166||null,premiumActive:false};
  const clean=adminCleanProgressSnapshotV167();
  p.level=clean.level;p.xp=clean.xp;p.totalXp=clean.totalXp;p.stars=clean.stars;p.tickets=clean.tickets;p.waifuTickets=clean.waifuTickets;
  p.episodeLedger=keep.episodeLedger;p.seasonRewards=clean.seasonRewards;p.titleRewards=clean.titleRewards;p.ratingRewards=clean.ratingRewards;p.achievements=clean.achievements;
  p.collection=[];p.activity=[];p.ownedCosmetics=[];p.equipped={frame:'',avatarCharacterId:null};p.stats={nightEpisodes:clean.nightEpisodes};p.quests=[];p.adminAudit=[];p.premiumActive=false;
  p.profilePrefs=keep.profilePrefs;p.favorites=keep.favorites;p.profileComments=keep.profileComments;if(keep.daily_v166)p.daily_v166=keep.daily_v166;
  profileActivityV16('↺','Тестовый профиль сброшен','Админские ресурсы/вещи очищены; честная прогрессия пересчитана.');
  saveData();renderAdminV164();renderProfileV16();renderProfileChromeV16();profileToastV16('↺ Reset готов','Админские тестовые вещи удалены.');
}
let adminResetArmedV168=false,adminResetTimerV168=null;
function adminResetProfileV168(){
  if(!isLocalAdminV164())return;
  const b=$('#adminResetProfile');if(!b)return;
  if(!adminResetArmedV168){
    adminResetArmedV168=true;b.textContent='⚠ Ещё раз: СБРОСИТЬ';b.classList.add('armed-v168');
    profileToastV16('Подтверди Reset','Нажми красную кнопку ещё раз в течение 6 секунд.');
    clearTimeout(adminResetTimerV168);adminResetTimerV168=setTimeout(()=>{adminResetArmedV168=false;b.textContent='↺ Сбросить тестовый профиль';b.classList.remove('armed-v168')},6000);return;
  }
  clearTimeout(adminResetTimerV168);adminResetArmedV168=false;b.textContent='↺ Сбросить тестовый профиль';b.classList.remove('armed-v168');adminDeepResetV168();
}
window.adminResetProfileV168=adminResetProfileV168;

function togglePremiumTestV168(){
  if(!isLocalAdminV164())return;const p=ensureProfileV16();p.premiumActive=!profilePremiumV168();
  profileActivityV16('👑',`ADMIN · Premium ${p.premiumActive?'ON':'OFF'}`,'Тест множителя Stars');saveData();renderAdminV164();renderProfileV16();profileToastV16(`Premium ${p.premiumActive?'ON':'OFF'}`,p.premiumActive?'Награды Stars теперь x2':'Обычный множитель Stars');
}
window.togglePremiumTestV168=togglePremiumTestV168;

const renderAdminV164BaseV168=renderAdminV164;
renderAdminV164=function(){
  renderAdminV164BaseV168();
  const p=ensureProfileV16();
  let btn=$('#adminPremiumToggleV168');
  if(!btn){const reset=$('#adminResetProfile');if(reset){btn=document.createElement('button');btn.id='adminPremiumToggleV168';btn.type='button';btn.className='secondary admin-premium-test-v168';btn.onclick=togglePremiumTestV168;reset.parentElement.insertBefore(btn,reset)}}
  if(btn)btn.textContent=`👑 Premium x2 Stars: ${profilePremiumV168()?'ON':'OFF'}`;
};

function bindV168(){
  const old=$('#adminResetProfile');if(old){const fresh=old.cloneNode(true);old.replaceWith(fresh);fresh.addEventListener('click',adminResetProfileV168)}
  renderProfileChromeV16();saveData();
}
setTimeout(bindV168,0);


/* ===== V17: provider-first watch player ===== */
const WATCH_PROVIDER_KEY_V17='animeWatchProviderV17';
function watchProviderV17(){try{return localStorage.getItem(WATCH_PROVIDER_KEY_V17)||'auto'}catch{return 'auto'}}
function setWatchProviderV17(v){v=['auto','direct','embed','oldexternal','kodik'].includes(v)?v:'auto';try{localStorage.setItem(WATCH_PROVIDER_KEY_V17,v)}catch{};syncWatchProviderUiV17();if(v==='oldexternal'){openOldExternalProviderV17();return}if(v==='kodik'){showKodikProviderInfoV17();return}loadWatchEpisodeV15({autoplay:false,preserveTime:true});}
window.setWatchProviderV17=setWatchProviderV17;
function syncWatchProviderUiV17(){const v=watchProviderV17();document.querySelectorAll('#watchProviderBar [data-provider]').forEach(b=>b.classList.toggle('active',b.dataset.provider===v));const label=$('#watchOnlineKindLabel'),input=$('#watchOnlineUrl'),help=$('#watchOnlineHelp'),state=$('#watchProviderState');if(v==='embed'){if(label)label.textContent='EMBED URL';if(input)input.placeholder='https://provider.example/embed/...';if(help)help.textContent='Вставляй только embed-URL, который сам провайдер разрешает встраивать в iframe.';}else{if(label)label.textContent='HLS / MP4';if(input)input.placeholder='https://.../master.m3u8';if(help)help.textContent='Для HLS/MP4 нужен разрешённый прямой URL. Качество/аудио/сабы из master.m3u8 подхватятся автоматически.';}if(state){const txt={auto:'Авто · лучший из уже подключённых',direct:'Direct · наш HLS/MP4 плеер',embed:'Embed · плеер провайдера внутри сайта',oldexternal:'OldExternal · внешний fallback',kodik:'Kodik · нужен собственный API-доступ'};state.textContent=txt[v]||txt.auto}}
function currentRemoteStreamsV17(){return (currentManifestEpisodeV15()?.streams||[]).map(x=>({...x,kind:'remote'}));}
function currentDirectSourcesV17(){const s=watchStateV15.season+1,e=watchStateV15.episode;const local=watchStateV15.localVideos.filter(x=>x.season===s&&x.episode===e).map(x=>({...x,kind:'local',type:'video'}));const remote=currentRemoteStreamsV17().filter(x=>String(x.type||'').toLowerCase()!=='embed');return [...local,...remote]}
function currentEmbedSourcesV17(){return currentRemoteStreamsV17().filter(x=>String(x.type||'').toLowerCase()==='embed')}
function bestProviderV17(){const mode=watchProviderV17();if(mode==='direct'||mode==='embed')return mode;if(mode==='auto'){if(currentDirectSourcesV17().length)return 'direct';if(currentEmbedSourcesV17().length)return 'embed';return 'direct'}return mode}
function hideWatchEmbedV17(){const f=$('#watchEmbed');if(f){f.classList.add('hidden');try{f.src='about:blank'}catch{}}}
function showWatchEmbedV17(src){const v=$('#watchVideo'),f=$('#watchEmbed'),empty=$('#watchEmpty');destroyWatchHlsV151();if(v){try{v.pause()}catch{}v.removeAttribute('src');v.load();v.classList.add('hidden')}if(empty)empty.classList.add('hidden');if(f){f.src=src;f.classList.remove('hidden')}const note=$('#watchSourceNote');if(note)note.textContent='Embed · управление качеством, озвучкой и субтитрами выполняет сам провайдер.';const st=$('#watchProviderState');if(st)st.textContent='Embed · подключено';}
async function openOldExternalProviderV17(){const e=watchStateV15.entry;if(!e)return;let part=watchPartsV15(e)[watchStateV15.season]||e;let url=part?.oldexternal_url||e?.oldexternal_url||'';try{if(!url&&typeof resolvePartOldExternalV9==='function')url=await resolvePartOldExternalV9(part)}catch{}if(url){window.open(url,'_blank','noopener,noreferrer');profileToastV16?.('OldExternal открыт отдельно','Автоматически разбирать их плеер мы не будем.');}else{try{await copyText(part?.title||e.title)}catch{}window.open('https://example.invalid/catalog','_blank','noopener,noreferrer');}setTimeout(()=>setWatchProviderV17('auto'),40)}
function showKodikProviderInfoV17(){const m=$('#modal');if(!m)return;$('#modalTitle').textContent='🔑 Kodik — слот провайдера';$('#modalText').textContent='Kodik-подключение подготовлено архитектурно, но для нормального API нужен собственный корректный токен. Я не вытаскиваю чужие/скрытые токены из сайтов. Когда будет токен или документированный доступ — подключим поиск серии и переводов сюда без переделки плеера.';$('#modalActions').innerHTML='<button id="kodikV17Ok">Понятно</button>';m.classList.remove('hidden');$('#kodikV17Ok')?.addEventListener('click',()=>{m.classList.add('hidden');setWatchProviderV17('auto')},{once:true})}
function addOnlineSourceV17(){const input=$('#watchOnlineUrl'),url=String(input?.value||'').trim();if(!url||!watchStateV15.entry)return;if(!/^https?:\/\//i.test(url)){setMessage('Нужна http/https ссылка.','error');return}let mode=watchProviderV17();if(mode==='auto')mode='direct';if(!['direct','embed'].includes(mode))mode='direct';const ep=ensureEpisodeManifestV151();ep.streams=ep.streams.filter(x=>x.url!==url);if(mode==='embed')ep.streams.unshift({url,type:'embed',provider:'custom-embed',dub:'Провайдер',quality:'provider',label:'Embed'});else{const hls=/\.m3u8(?:$|[?#])/i.test(url);ep.streams.unshift({url,type:hls?'hls':'video',provider:'direct',dub:'Онлайн',quality:'auto',label:hls?'HLS':'Прямое видео'});}saveWatchManifestV15(watchStateV15.entry,watchStateV15.manifest);input.value='';renderWatchShellV15();loadWatchEpisodeV15({autoplay:false});setMessage(mode==='embed'?'Embed-источник сохранён для серии.':'Direct-источник сохранён для серии.','ok')}
const loadWatchEpisodeV17Base=loadWatchEpisodeV15;
loadWatchEpisodeV15=async function(opts={}){const provider=bestProviderV17();const v=$('#watchVideo'),f=$('#watchEmbed');if(provider==='embed'){const src=currentEmbedSourcesV17()[0];if(src?.url){showWatchEmbedV17(src.url);renderWatchCommentsV151();return}hideWatchEmbedV17();if(v)v.classList.remove('hidden');const empty=$('#watchEmpty');if(empty)empty.classList.remove('hidden');const note=$('#watchSourceNote');if(note)note.textContent='Для этой серии ещё нет Embed-источника.';return}hideWatchEmbedV17();if(v)v.classList.remove('hidden');if(provider==='direct'||provider==='auto'){
    // Temporarily hide embed-only streams from the legacy direct loader.
    const ep=currentManifestEpisodeV15(),orig=ep?.streams;if(ep)ep.streams=(orig||[]).filter(x=>String(x.type||'').toLowerCase()!=='embed');
    try{await loadWatchEpisodeV17Base(opts)}finally{if(ep)ep.streams=orig}
    const st=$('#watchProviderState');if(st)st.textContent=currentDirectSourcesV17().length?'Direct · подключено':'Direct · источник не подключён';return}
  return loadWatchEpisodeV17Base(opts)};
window.loadWatchEpisodeV15=loadWatchEpisodeV15;
const renderWatchShellV17Base=renderWatchShellV15;
renderWatchShellV15=function(){renderWatchShellV17Base();syncWatchProviderUiV17();};
window.renderWatchShellV15=renderWatchShellV15;
const closeWatchPlayerV17Base=closeWatchPlayerV15;
closeWatchPlayerV15=function(){hideWatchEmbedV17();return closeWatchPlayerV17Base()};window.closeWatchPlayerV15=closeWatchPlayerV15;
$('#watchProviderBar')?.addEventListener('click',e=>{const b=e.target.closest('[data-provider]');if(!b)return;setWatchProviderV17(b.dataset.provider)});
// Capture these events before the older V15.1 direct-source handler.
$('#watchAddOnline')?.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();addOnlineSourceV17()},true);
$('#watchOnlineUrl')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();e.stopImmediatePropagation();addOnlineSourceV17()}},true);

/* ===== V17.1.1: strict AniLiberty matching (reject spin-offs / wrong seasons) ===== */
const ANILIBERTY_API_BASES_V171=['https://aniliberty.top/api/v1','https://api.anilibria.app/api/v1'];
const ANILIBERTY_CACHE_KEY_V171='animeWatchAniLibertyCacheV1714';
const ANILIBERTY_OLD_CACHE_KEYS_V1711=['animeWatchAniLibertyCacheV171','animeWatchAniLibertyCacheV1712','animeWatchAniLibertyCacheV1713'];
const ANILIBERTY_PURGE_MARK_V1711='animeWatchAniLibertyStrictMatchPurgedV1714';
let aniLibertyRequestSeqV171=0;
let aniLibertyLastErrorV171='';
const aniLibertyTargetMetaCacheV1711=new Map();
function aniLibertyCacheV171(){try{return JSON.parse(localStorage.getItem(ANILIBERTY_CACHE_KEY_V171)||'{}')||{}}catch{return {}}}
function saveAniLibertyCacheV171(x){try{localStorage.setItem(ANILIBERTY_CACHE_KEY_V171,JSON.stringify(x||{}))}catch{}}
function purgeWrongAniLibertyCacheV1711(){try{if(localStorage.getItem(ANILIBERTY_PURGE_MARK_V1711)==='1')return;for(const k of ANILIBERTY_OLD_CACHE_KEYS_V1711)localStorage.removeItem(k);localStorage.removeItem(ANILIBERTY_CACHE_KEY_V171);const all=manifestStoreV15();let changed=false;for(const m of Object.values(all||{})){for(const s of m?.seasons||[]){for(const ep of s?.episodes||[]){const before=(ep.streams||[]).length;ep.streams=(ep.streams||[]).filter(x=>String(x?.provider||'').toLowerCase()!=='aniliberty');if(before!==ep.streams.length)changed=true;if(ep.providerMeta?.aniliberty){delete ep.providerMeta.aniliberty;changed=true}}}}if(changed)localStorage.setItem(WATCH_MANIFEST_KEY_V15,JSON.stringify(all));localStorage.setItem(ANILIBERTY_PURGE_MARK_V1711,'1')}catch(err){console.warn('AniLiberty strict-match purge',err)}}
purgeWrongAniLibertyCacheV1711();
function aniLibertyPartV171(){const e=watchStateV15.entry,parts=watchPartsV15(e||{});return parts[Math.min(watchStateV15.season,Math.max(0,parts.length-1))]||e||{}}
function aniLibertyPartKeyV171(){const e=watchStateV15.entry,p=aniLibertyPartV171();return `${watchEntryKeyV15(e)}|strict:4|part:${watchStateV15.season+1}|${normalize(p?.title||'')}`}
function aniLibertyEpisodeKeyV171(){return `${aniLibertyPartKeyV171()}|ep:${watchStateV15.episode}`}
function aniLibertySetStateV171(text,kind=''){const el=$('#watchProviderState');if(el){el.textContent=text||'';el.dataset.kind=kind||''}}
function aniLibertyEmptyV171(title,text,show=true){const empty=$('#watchEmpty'),h=$('#watchEmptyTitle'),p=$('#watchEmptyText');if(h)h.textContent=title||'';if(p)p.textContent=text||'';if(empty&&show)empty.classList.remove('hidden')}
function aniLibertyUnwrapV171(data){if(Array.isArray(data))return data;if(Array.isArray(data?.data))return data.data;if(Array.isArray(data?.items))return data.items;if(Array.isArray(data?.releases))return data.releases;return data?.data&&typeof data.data==='object'?data.data:data}
async function aniLibertyFetchV171(path,{timeout=9000}={}){let lastErr=null;for(const base of ANILIBERTY_API_BASES_V171){const ctrl=new AbortController(),tm=setTimeout(()=>ctrl.abort(),timeout);try{const r=await fetch(`${base}${path}`,{method:'GET',headers:{Accept:'application/json'},credentials:'omit',cache:'no-store',signal:ctrl.signal});clearTimeout(tm);if(!r.ok)throw new Error(`HTTP ${r.status}`);const data=await r.json();return {data,base}}catch(err){clearTimeout(tm);lastErr=err}}throw lastErr||new Error('AniLiberty API unavailable')}
function aniTitleNormV171(s){return String(s||'').toLowerCase().normalize('NFKD').replace(/[’'`´]/g,'').replace(/[^a-zа-яё0-9]+/gi,' ').replace(/\s+/g,' ').trim()}
function aniTitleTokensV171(s){return new Set(aniTitleNormV171(s).split(' ').filter(x=>x.length>1))}
function aniTitleScoreV171(a,b){a=aniTitleNormV171(a);b=aniTitleNormV171(b);if(!a||!b)return 0;if(a===b)return 140;if(a.includes(b)||b.includes(a))return 94-Math.min(26,Math.abs(a.length-b.length));const A=aniTitleTokensV171(a),B=aniTitleTokensV171(b);let inter=0;for(const x of A)if(B.has(x))inter++;const union=new Set([...A,...B]).size||1;return Math.round(inter/union*86)}
function aniReleaseNamesV171(r){return [r?.name?.main,r?.name?.english,r?.name?.alternative,r?.title,r?.name].filter(x=>typeof x==='string'&&x.trim())}
function aniTargetBaseTitlesV171(){const e=watchStateV15.entry||{},p=aniLibertyPartV171()||{};return [p.title,p.name,p.english,p.romaji,e.title,e.title_english,e.title_romaji,...(Array.isArray(e.aliases)?e.aliases:[])].filter(Boolean).map(String)}
const ANILIBERTY_TARGET_META_QUERY_V1711=`query($idMal:Int){Media(idMal:$idMal,type:ANIME){id idMal title{english romaji native} synonyms format episodes duration seasonYear}}`;
async function aniLibertyTargetMetaV1711(){const p=aniLibertyPartV171()||{},key=String(p.mal_id||p.anilist_id||p.title||'');if(aniLibertyTargetMetaCacheV1711.has(key))return aniLibertyTargetMetaCacheV1711.get(key);let meta={title:{},synonyms:[],format:p.type||p.format||'',episodes:Number(p.episodes||0)||null,duration:Number(p.duration||0)||null,seasonYear:Number(p.year||0)||null};if(Number(p.mal_id)>0){try{const r=await anilistFetch(ANILIBERTY_TARGET_META_QUERY_V1711,{idMal:Number(p.mal_id)});if(r?.data?.Media)meta={...meta,...r.data.Media}}catch(err){console.warn('AniLiberty target AniList meta',err)}}aniLibertyTargetMetaCacheV1711.set(key,meta);return meta}
function aniTargetTitlesV171(meta={}){return [...new Set([...aniTargetBaseTitlesV171(),meta?.title?.english,meta?.title?.romaji,meta?.title?.native,...(Array.isArray(meta?.synonyms)?meta.synonyms:[])].filter(Boolean).map(String))]}
const ANILIBERTY_RU_ALIASES_V1713={16498:['Атака титанов','Вторжение гигантов'],25777:['Атака титанов 2','Атака титанов TV-2','Вторжение гигантов 2'],35760:['Атака титанов 3','Атака титанов TV-3','Атака титанов TV-3 часть 1'],38524:['Атака титанов 3 часть 2','Атака титанов TV-3 часть 2'],40028:['Атака титанов Финал','Атака титанов: Финал'],48583:['Атака титанов Финал 2','Атака титанов: Финал часть 2'],51535:['Атака титанов Финал Заключительная глава'],53889:['Атака титанов Финал Заключительная глава часть 2']};
function aniLibertyKnownRuAliasesV1713(){const p=aniLibertyPartV171()||{},id=Number(p.mal_id||0);return ANILIBERTY_RU_ALIASES_V1713[id]||[]}
function aniSeasonNumberV1711(s){const x=String(s||'');let m=x.match(/\bseason\s*(\d+)\b/i)||x.match(/\b(\d+)(?:st|nd|rd|th)\s+season\b/i)||x.match(/\bсезон\s*(\d+)\b/i);return m?Number(m[1]):null}
function aniHasUnwantedVariantV1711(candidate,targetTitles,fmt=''){const c=aniTitleNormV171(candidate),targets=targetTitles.map(aniTitleNormV171);const targetHas=rx=>targets.some(t=>rx.test(t));const bad=[/\bjunior high\b/,/\bchuugakkou\b/,/\bchugakkou\b/,/\bchibi\b/,/\bschool caste\b/,/\blost girls\b/,/\bno regrets\b/,/\bpicture drama\b/,/\brecap\b/,/\bchronicle\b/,/\bspin off\b/,/\bparody\b/,/\blive action\b/];for(const rx of bad)if(rx.test(c)&&!targetHas(rx))return true;const f=String(fmt||'').toUpperCase();if(f==='TV'&&/\b(ova|ona|special|movie|film)\b/.test(c)&&!targetHas(/\b(ova|ona|special|movie|film)\b/))return true;return false}
function aniReleaseScoreV171(r,meta={}){const p=aniLibertyPartV171()||{},targets=aniTargetTitlesV171(meta),names=aniReleaseNamesV171(r);if(!names.length)return -999;const fmt=String(meta?.format||p.type||p.format||watchStateV15.entry?.format||'').toUpperCase();if(names.some(n=>aniHasUnwantedVariantV1711(n,targets,fmt)))return -999;let titleScore=0;for(const a of targets)for(const b of names)titleScore=Math.max(titleScore,aniTitleScoreV171(a,b));if(titleScore<50)return -999;let score=titleScore;const targetSeason=Math.max(...targets.map(aniSeasonNumberV1711).filter(Number.isFinite),0)||null;const candidateSeasons=names.map(aniSeasonNumberV1711).filter(Number.isFinite);if(targetSeason&&candidateSeasons.length&&!candidateSeasons.includes(targetSeason))return -999;const yr=Number(meta?.seasonYear||p.year||watchStateV15.entry?.year||0),ry=Number(r?.year||0);if(yr&&ry){const d=Math.abs(yr-ry);if(d>1)return -999;score+=d===0?38:5}const eps=Number(meta?.episodes||p.episodes||0),reps=Number(r?.episodes_total||r?.episodesTotal||r?.episodes_count||0);if(eps&&reps){const d=Math.abs(eps-reps);if(d>Math.max(3,Math.ceil(eps*.25)))return -999;score+=d===0?30:d===1?14:d<=3?3:-8}const rf=String(r?.type?.value||r?.type||'').toUpperCase();if(fmt&&rf&&((fmt==='MOVIE')!==(rf==='MOVIE')))score-=18;return score}
function aniSearchQueriesV171(meta={}){
  const raw=[...aniLibertyKnownRuAliasesV1713(),...aniTargetTitlesV171(meta)],out=[];
  for(const x of raw){
    const s=String(x).trim();if(!s)continue;out.push(s);
    // AniLiberty often stores sequel names as "Title 2" instead of "Title Season 2".
    const sm=s.match(/^(.*?)(?:[:\-–—]?\s*)season\s*(\d+)(.*)$/i);
    if(sm){
      const base=sm[1].trim(),n=Number(sm[2]),tail=sm[3].trim();
      if(base&&n){
        out.push(`${base} ${n}${tail?` ${tail}`:''}`.trim());
        out.push(`${base} ${n}${tail?` ${tail}`:''}`.replace(/\s+/g,' ').trim());
        const ord=n%10===1&&n%100!==11?'st':n%10===2&&n%100!==12?'nd':n%10===3&&n%100!==13?'rd':'th';
        out.push(`${base} ${n}${ord} Season${tail?` ${tail}`:''}`.trim());
      }
    }
    // Japanese/romaji titles are also commonly indexed as "... 2".
    const jp=s.match(/^(.*?)(?:[:\-–—]?\s*)第?\s*(\d+)\s*(?:期|season)?$/i);
    if(jp&&jp[1].trim())out.push(`${jp[1].trim()} ${jp[2]}`);
    const stripped=s.replace(/[:\-–—]?\s*(the\s+)?final\s+season.*$/i,'').replace(/[:\-–—]?\s*season\s*\d+.*$/i,'').replace(/[:\-–—]?\s*part\s*\d+.*$/i,'').replace(/\s+/g,' ').trim();
    if(stripped&&stripped!==s)out.push(stripped);
  }
  // Prefer specific sequel aliases before the broad base-title fallback.
  const uniq=[...new Set(out.filter(Boolean))];
  uniq.sort((a,b)=>{const sa=/\b(?:season\s*\d+|\d+(?:st|nd|rd|th)\s+season|\d+)\b/i.test(a)?1:0;const sb=/\b(?:season\s*\d+|\d+(?:st|nd|rd|th)\s+season|\d+)\b/i.test(b)?1:0;return sb-sa||b.length-a.length});
  return uniq.slice(0,16)
}
function aniReleaseMedianMinutesV1711(release){const ds=(release?.episodes||[]).map(ep=>Number(ep?.duration||0)).filter(x=>x>0).map(x=>x>180?x/60:x).sort((a,b)=>a-b);if(!ds.length)return null;const m=Math.floor(ds.length/2);return ds.length%2?ds[m]:(ds[m-1]+ds[m])/2}
function aniReleaseDetailValidV1711(detail,meta={}){if(!detail?.id)return {ok:false,why:'пустой релиз'};const score=aniReleaseScoreV171(detail,meta);if(score<48)return {ok:false,why:'название/сезон не совпали'};const expected=Number(meta?.duration||0),actual=aniReleaseMedianMinutesV1711(detail);if(expected>=18&&actual){const diff=Math.abs(expected-actual);if(diff>5.5)return {ok:false,why:`длительность ${actual.toFixed(1)} мин вместо ~${expected} мин`}}const eps=Number(meta?.episodes||aniLibertyPartV171()?.episodes||0),actualEps=Array.isArray(detail?.episodes)?detail.episodes.filter(x=>Number.isInteger(Number(x?.ordinal))).length:0;if(eps&&actualEps&&Math.abs(eps-actualEps)>Math.max(2,Math.ceil(eps*.18)))return {ok:false,why:`серий ${actualEps} вместо ${eps}`};return {ok:true,score}}
async function aniLibertyReleaseDetailV171(idOrAlias){const {data}=await aniLibertyFetchV171(`/anime/releases/${encodeURIComponent(String(idOrAlias))}`);const x=aniLibertyUnwrapV171(data);return x?.release||x}
let aniLibertyDebugCandidatesV1713=[];
function aniLibertyCandidateSummaryV1713(r,score){const names=aniReleaseNamesV171(r),title=names[0]||`Release ${r?.id||''}`,year=Number(r?.year||0)||'',eps=Number(r?.episodes_total||r?.episodesTotal||r?.episodes_count||0)||'';return {id:r?.id,title,year,eps,score:Number(score)||0}}
function renderAniLibertyCandidatesV1713(){const empty=$('#watchEmpty');if(!empty||!aniLibertyDebugCandidatesV1713.length)return;let box=$('#watchAniCandidatesV1713');if(!box){box=document.createElement('div');box.id='watchAniCandidatesV1713';box.className='watch-ani-candidates-v1713';empty.appendChild(box)}box.innerHTML=`<b>Что реально нашёл AniLiberty</b><p>Если нужный релиз есть ниже — можно выбрать его вручную один раз.</p><div>${aniLibertyDebugCandidatesV1713.slice(0,10).map(x=>`<button type="button" onclick="useAniLibertyCandidateV1713('${String(x.id).replace(/'/g,'')}')"><span>${esc(x.title)}</span><small>${x.year||'год ?'}${x.eps?` · ${x.eps} эп.`:''} · score ${x.score}</small></button>`).join('')}</div>`}
async function useAniLibertyCandidateV1713(id){try{const detail=await aniLibertyReleaseDetailV171(id);const key=aniLibertyPartKeyV171(),cache=aniLibertyCacheV171();cache[key]={id:detail.id,alias:detail.alias||'',title:detail?.name?.english||detail?.name?.main||'',year:detail.year||null,score:999,manual:true,strict:true,at:Date.now()};saveAniLibertyCacheV171(cache);aniLibertySetStateV171('AniLiberty · выбран вручную','ok');await ensureAniLibertyEpisodeV171({force:false});await loadWatchEpisodeV15({autoplay:false,preserveTime:true})}catch(err){profileToastV16('Не удалось подключить релиз',String(err?.message||err||''))}}
window.useAniLibertyCandidateV1713=useAniLibertyCandidateV1713;
async function aniLibertyFindReleaseV171({force=false}={}){const key=aniLibertyPartKeyV171(),cache=aniLibertyCacheV171(),meta=await aniLibertyTargetMetaV1711();aniLibertyDebugCandidatesV1713=[];if(!force&&cache[key]?.id){try{const cached=await aniLibertyReleaseDetailV171(cache[key].id);if(cache[key].manual)return cached;const check=aniReleaseDetailValidV1711(cached,meta);if(check.ok)return cached;delete cache[key];saveAniLibertyCacheV171(cache)}catch{delete cache[key];saveAniLibertyCacheV171(cache)}}let candidates=[];for(const query of aniSearchQueriesV171(meta)){try{const {data}=await aniLibertyFetchV171(`/app/search/releases?query=${encodeURIComponent(query)}`);const arr=aniLibertyUnwrapV171(data);if(Array.isArray(arr))candidates.push(...arr)}catch{}if(candidates.length>=45)break}const byId=new Map();for(const r of candidates)if(r?.id!=null)byId.set(String(r.id),r);const scored=[...byId.values()].map(r=>({r,score:aniReleaseScoreV171(r,meta)})).sort((a,b)=>b.score-a.score);aniLibertyDebugCandidatesV1713=scored.map(x=>aniLibertyCandidateSummaryV1713(x.r,x.score));candidates=scored.filter(x=>x.score>=48);if(!candidates.length){setTimeout(renderAniLibertyCandidatesV1713,0);throw new Error('Точный релиз не найден')}let rejection='';for(const item of candidates.slice(0,10)){try{const detail=await aniLibertyReleaseDetailV171(item.r.id),check=aniReleaseDetailValidV1711(detail,meta);if(!check.ok){rejection=check.why;continue}cache[key]={id:detail.id,alias:detail.alias||'',title:detail?.name?.english||detail?.name?.main||'',year:detail.year||null,score:item.score,strict:true,at:Date.now()};saveAniLibertyCacheV171(cache);return detail}catch(err){rejection=String(err?.message||err||'')}}setTimeout(renderAniLibertyCandidatesV1713,0);throw new Error(`Нет уверенного совпадения${rejection?` · ${rejection}`:''}`)}
function aniHlsUrlV171(v){if(!v)return '';if(typeof v==='object')v=v.url||v.src||v.href||'';v=String(v||'').trim();if(!v)return '';if(v.startsWith('//'))return `https:${v}`;if(/^https?:\/\//i.test(v))return v;if(v.startsWith('/'))return `https://aniliberty.top${v}`;return v}
function aniLibertyEpisodeFromReleaseV171(release,number){const all=(Array.isArray(release?.episodes)?release.episodes:[]).filter(Boolean).slice().sort((a,b)=>(Number(a.ordinal??a.sort_order??0)-Number(b.ordinal??b.sort_order??0)));const target=Number(number)||1;let ep=all.find(x=>Math.abs(Number(x.ordinal)-target)<0.001);if(!ep){const integers=all.filter(x=>Number.isInteger(Number(x.ordinal)));ep=integers[target-1]||all[target-1]}return ep||null}
function aniLibertyStreamsFromEpisodeV171(ep){const rows=[['1080p',ep?.hls_1080],['720p',ep?.hls_720],['480p',ep?.hls_480]],out=[];for(const [quality,raw] of rows){const url=aniHlsUrlV171(raw);if(url)out.push({url,type:'hls',provider:'aniliberty',dub:'AniLiberty',quality,label:`AniLiberty · ${quality}`})}return out}
function currentAniLibertySourcesV171(){return currentRemoteStreamsV17().filter(x=>String(x.provider||'').toLowerCase()==='aniliberty')}
function currentLocalSourcesV171(){const s=watchStateV15.season+1,e=watchStateV15.episode;return (watchStateV15.localVideos||[]).filter(x=>x.season===s&&x.episode===e)}
async function ensureAniLibertyEpisodeV171({force=false}={}){const entry=watchStateV15.entry;if(!entry)return false;const snap=aniLibertyEpisodeKeyV171(),seq=++aniLibertyRequestSeqV171;if(!force&&currentAniLibertySourcesV171().length)return true;aniLibertyLastErrorV171='';aniLibertySetStateV171('AniLiberty · ищу релиз и серию…','loading');aniLibertyEmptyV171('Ищу серию…','Проверяю AniLiberty автоматически. Обычно это занимает пару секунд.',true);try{const release=await aniLibertyFindReleaseV171({force});if(seq!==aniLibertyRequestSeqV171||snap!==aniLibertyEpisodeKeyV171())return false;const epRemote=aniLibertyEpisodeFromReleaseV171(release,watchStateV15.episode);if(!epRemote)throw new Error(`Серия ${watchStateV15.episode} не найдена`);const streams=aniLibertyStreamsFromEpisodeV171(epRemote);if(!streams.length)throw new Error('Для серии нет HLS');const ep=ensureEpisodeManifestV151();ep.streams=(ep.streams||[]).filter(x=>String(x.provider||'').toLowerCase()!=='aniliberty');ep.streams.unshift(...streams);ep.title=ep.title||epRemote.name||epRemote.name_english||'';ep.providerMeta=ep.providerMeta||{};ep.providerMeta.aniliberty={releaseId:release.id,alias:release.alias||'',releaseTitle:release?.name?.english||release?.name?.main||'',episodeId:epRemote.id||'',ordinal:epRemote.ordinal??watchStateV15.episode,duration:Number(epRemote.duration)||0,opening:epRemote.opening||null,ending:epRemote.ending||null};ep.opening=epRemote.opening||ep.opening||null;ep.ending=epRemote.ending||ep.ending||null;if(epRemote.duration)ep.duration=Number(epRemote.duration)||ep.duration;saveWatchManifestV15(entry,watchStateV15.manifest);aniLibertySetStateV171(`AniLiberty · найдено · ${streams.map(x=>x.quality).join(' / ')}`,'ok');return true}catch(err){if(seq!==aniLibertyRequestSeqV171)return false;aniLibertyLastErrorV171=String(err?.message||err||'Неизвестная ошибка');aniLibertySetStateV171(`AniLiberty · ${aniLibertyLastErrorV171}`,'error');return false}}
function clearAniLibertyCurrentV171(){const key=aniLibertyPartKeyV171(),cache=aniLibertyCacheV171();delete cache[key];saveAniLibertyCacheV171(cache);const ep=currentManifestEpisodeV15();if(ep){ep.streams=(ep.streams||[]).filter(x=>String(x.provider||'').toLowerCase()!=='aniliberty');if(ep.providerMeta)delete ep.providerMeta.aniliberty;saveWatchManifestV15(watchStateV15.entry,watchStateV15.manifest)}}
window.ensureAniLibertyEpisodeV171=ensureAniLibertyEpisodeV171;

// V17.1 provider logic: AniLiberty is automatic; manual Direct/Embed remain fallback options.
currentDirectSourcesV17=function(){const s=watchStateV15.season+1,e=watchStateV15.episode;const local=(watchStateV15.localVideos||[]).filter(x=>x.season===s&&x.episode===e).map(x=>({...x,kind:'local',type:'video'}));const remote=currentRemoteStreamsV17().filter(x=>String(x.type||'').toLowerCase()!=='embed'&&String(x.provider||'').toLowerCase()!=='aniliberty');return [...local,...remote]};
bestProviderV17=function(){const mode=watchProviderV17();if(['aniliberty','direct','embed'].includes(mode))return mode;if(mode==='auto'){if(currentLocalSourcesV171().length)return 'direct';if(currentAniLibertySourcesV171().length)return 'aniliberty';if(currentDirectSourcesV17().length)return 'direct';if(currentEmbedSourcesV17().length)return 'embed';return 'aniliberty'}return mode};
syncWatchProviderUiV17=function(){const v=watchProviderV17();document.querySelectorAll('#watchProviderBar [data-provider]').forEach(b=>b.classList.toggle('active',b.dataset.provider===v));const label=$('#watchOnlineKindLabel'),input=$('#watchOnlineUrl'),help=$('#watchOnlineHelp'),state=$('#watchProviderState');if(v==='embed'){if(label)label.textContent='EMBED URL';if(input)input.placeholder='https://provider.example/embed/...';if(help)help.textContent='Ручной fallback: только embed-URL, который провайдер разрешает встраивать.'}else{if(label)label.textContent='HLS / MP4';if(input)input.placeholder='https://.../master.m3u8';if(help)help.textContent=v==='aniliberty'||v==='auto'?'Обычно ничего вводить не нужно — AniLiberty ищется автоматически.':'Ручной fallback для собственного прямого HLS/MP4.'}if(state&&!state.dataset.kind){const txt={auto:'Авто · AniLiberty → Direct → Embed',aniliberty:'AniLiberty · автоматический поиск',direct:'Direct · ручной/локальный HLS/MP4',embed:'Embed · внешний разрешённый плеер',oldexternal:'OldExternal · открыть отдельно',kodik:'Kodik · нужен API-доступ'};state.textContent=txt[v]||txt.auto}}
setWatchProviderV17=function(v){v=['auto','aniliberty','direct','embed','oldexternal','kodik'].includes(v)?v:'auto';try{localStorage.setItem(WATCH_PROVIDER_KEY_V17,v)}catch{};const st=$('#watchProviderState');if(st)delete st.dataset.kind;syncWatchProviderUiV17();if(v==='oldexternal'){openOldExternalProviderV17();return}if(v==='kodik'){showKodikProviderInfoV17();return}loadWatchEpisodeV15({autoplay:false,preserveTime:true})};window.setWatchProviderV17=setWatchProviderV17;

// Keep AniLiberty's three source qualities visible instead of replacing them with a single HLS internal level.
const populateHlsSelectorsV171Base=populateHlsSelectorsV151;
populateHlsSelectorsV151=function(hls,pref){const mode=bestProviderV17();if(mode!=='aniliberty')return populateHlsSelectorsV171Base(hls,pref);const qNow=$('#watchQuality')?.value||pref.quality||'',sNow=$('#watchSubs')?.value||pref.subs||'off';populateHlsSelectorsV171Base(hls,pref);const src=currentAniLibertySourcesV171(),dub=$('#watchDub'),qual=$('#watchQuality'),subs=$('#watchSubs');if(dub){dub.innerHTML='<option value="AniLiberty">AniLiberty</option>';dub.value='AniLiberty';dub.disabled=false}if(qual){const qs=[...new Set(src.map(x=>x.quality).filter(Boolean))];qual.innerHTML=qs.map(x=>`<option value="${esc(x)}">${esc(x)}</option>`).join('')||'<option value="auto">auto</option>';qual.value=qs.includes(qNow)?qNow:(qs.includes(pref.quality)?pref.quality:qs[0]||'auto');qual.disabled=!qs.length}if(subs&&hls.subtitleTracks?.length){const want=sNow;const opts=['<option value="off">Без субтитров</option>',...hls.subtitleTracks.map((t,i)=>`<option value="hlssub:${i}">${esc(t.name||t.lang||`Субтитры ${i+1}`)}</option>`)];subs.innerHTML=opts.join('');subs.value=[...subs.options].some(o=>o.value===want)?want:'off';subs.disabled=false}}

loadWatchEpisodeV15=async function(opts={}){const e=watchStateV15.entry;if(!e)return;const mode=watchProviderV17();let autoFound=true;if((mode==='auto'||mode==='aniliberty')&&!(mode==='auto'&&currentLocalSourcesV171().length)){autoFound=await ensureAniLibertyEpisodeV171({force:!!opts.forceAniLiberty})}let provider=bestProviderV17();const v=$('#watchVideo');if(!autoFound&&(mode==='aniliberty'||(mode==='auto'&&!currentDirectSourcesV17().length&&!currentEmbedSourcesV17().length&&!currentLocalSourcesV171().length))){hideWatchEmbedV17();if(v)v.classList.remove('hidden');destroyWatchHlsV151();try{v?.pause()}catch{}if(v){v.removeAttribute('src');v.load()}aniLibertyEmptyV171('Не нашёл серию автоматически',`AniLiberty: ${aniLibertyLastErrorV171||'источник недоступен'}. Нажми «Найти ещё раз» или выбери другой источник.`,true);const note=$('#watchSourceNote');if(note)note.textContent='Автоматический источник не найден. Ручной URL не обязателен — сначала попробуй повторный поиск.';return}if(provider==='embed'){const src=currentEmbedSourcesV17()[0];if(src?.url){showWatchEmbedV17(src.url);renderWatchCommentsV151();return}hideWatchEmbedV17();if(v)v.classList.remove('hidden');aniLibertyEmptyV171('Embed не подключён','Для этой серии нет разрешённого Embed-источника.',true);return}hideWatchEmbedV17();if(v)v.classList.remove('hidden');const ep=currentManifestEpisodeV15(),orig=ep?.streams;if(provider==='aniliberty'){const oldLocal=watchStateV15.localVideos;if(ep)ep.streams=(orig||[]).filter(x=>String(x.provider||'').toLowerCase()==='aniliberty');watchStateV15.localVideos=[];try{await loadWatchEpisodeV17Base(opts)}finally{watchStateV15.localVideos=oldLocal;if(ep)ep.streams=orig}aniLibertySetStateV171(`AniLiberty · ${currentAniLibertySourcesV171().length?'подключено':'нет потока'}`,currentAniLibertySourcesV171().length?'ok':'error');return}if(provider==='direct'||provider==='auto'){if(ep)ep.streams=(orig||[]).filter(x=>String(x.type||'').toLowerCase()!=='embed'&&String(x.provider||'').toLowerCase()!=='aniliberty');try{await loadWatchEpisodeV17Base(opts)}finally{if(ep)ep.streams=orig}aniLibertySetStateV171(currentDirectSourcesV17().length?'Direct · подключено':'Direct · источник не подключён',currentDirectSourcesV17().length?'ok':'');return}return loadWatchEpisodeV17Base(opts)};window.loadWatchEpisodeV15=loadWatchEpisodeV15;

async function retryAniLibertyV171(){if(!watchStateV15.entry)return;clearAniLibertyCurrentV171();try{localStorage.setItem(WATCH_PROVIDER_KEY_V17,'auto')}catch{}const st=$('#watchProviderState');if(st)delete st.dataset.kind;syncWatchProviderUiV17();await loadWatchEpisodeV15({autoplay:false,preserveTime:true,forceAniLiberty:true})}
$('#watchRetryAuto')?.addEventListener('click',retryAniLibertyV171);window.retryAniLibertyV171=retryAniLibertyV171;

// On a new player open, reset stale provider status text before automatic discovery starts.
const openWatchPlayerV171Base=openWatchPlayerV15;
openWatchPlayerV15=function(section,index,opts={}){const st=$('#watchProviderState');if(st){delete st.dataset.kind;st.textContent='Авто · готовлю поиск…'}return openWatchPlayerV171Base(section,index,opts)};window.openWatchPlayerV15=openWatchPlayerV15;

/* ===== V18: independent full player ===== */
const WATCH_PREF_DEFAULT_V18={
  autoNext:true,dub:'',quality:'',subs:'off',speed:1,volume:.85,muted:false,
  autoSkipOp:false,autoSkipEd:false,miniPlayer:true,rememberVolume:true,
  subSize:26,subBg:72,subPosition:'bottom',subColor:'#ffffff',subBgColor:'#000000',subShadow:true
};
const watchPrefsV15BaseV18=watchPrefsV15;
watchPrefsV15=function(){let old={};try{old=watchPrefsV15BaseV18()||{}}catch{}return {...WATCH_PREF_DEFAULT_V18,...old}};
function patchWatchPrefsV18(patch){const p={...watchPrefsV15(),...patch};saveWatchPrefsV15(p);return p}

// The project no longer exposes any external-site shortcut from the title page.
updateOldExternalButton=function(){const a=$('#detailWatchOldExternal'),b=$('#detailOldExternalFallback'),h=$('#detailWatchHint');if(a)a.classList.add('hidden');if(b)b.classList.add('hidden');if(h)h.textContent='';};
watchCurrentOnOldExternal=async function(){};
openOldExternalCatalogFallback=async function(){};
renderDetailPartsV9=function(entry){const sec=$('#detailPartsSection'),box=$('#detailParts'),status=$('#detailPartsStatus');if(!sec||!box)return;const parts=entry?.franchise_parts||[];if(parts.length<=1){sec.classList.add('hidden');box.innerHTML='';return}sec.classList.remove('hidden');if(status)status.textContent=`${parts.length} частей · выбери сезон для просмотра`;box.innerHTML=parts.map((p,i)=>`<article class="detail-part-card"><div class="detail-part-index">${String(i+1).padStart(2,'0')}</div>${p.cover?`<img src="${esc(p.cover)}" alt="">`:''}<div class="detail-part-main"><strong>${esc(p.title)}</strong>${partLabelV9(p,i)}</div><div class="detail-part-actions-v15"><button type="button" onclick="watchFranchisePartHereV15(${i})">▶ Смотреть</button></div></article>`).join('')};

// Provider selector contains only providers that are actually useful inside this project.
watchProviderV17=function(){let v='auto';try{v=localStorage.getItem(WATCH_PROVIDER_KEY_V17)||'auto'}catch{}if(!['auto','aniliberty','direct','embed'].includes(v)){v='auto';try{localStorage.setItem(WATCH_PROVIDER_KEY_V17,v)}catch{}}return v};
bestProviderV17=function(){const mode=watchProviderV17();if(['aniliberty','direct','embed'].includes(mode))return mode;if(currentLocalSourcesV171().length)return 'direct';if(currentAniLibertySourcesV171().length)return 'aniliberty';if(currentDirectSourcesV17().length)return 'direct';if(currentEmbedSourcesV17().length)return 'embed';return 'aniliberty'};
syncWatchProviderUiV17=function(){const v=watchProviderV17();document.querySelectorAll('#watchProviderBar [data-provider]').forEach(b=>b.classList.toggle('active',b.dataset.provider===v));const label=$('#watchOnlineKindLabel'),input=$('#watchOnlineUrl'),help=$('#watchOnlineHelp'),state=$('#watchProviderState');if(v==='embed'){if(label)label.textContent='EMBED URL';if(input)input.placeholder='https://provider.example/embed/...';if(help)help.textContent='Подключай только iframe/embed, который источник разрешает встраивать.'}else{if(label)label.textContent='HLS / MP4';if(input)input.placeholder='https://.../master.m3u8';if(help)help.textContent=v==='aniliberty'||v==='auto'?'Автопоиск работает сам. Здесь можно добавить собственный HLS/MP4 как резерв.':'Прямой HLS/MP4 источник для этой серии.'}if(state&&!state.dataset.kind){const txt={auto:'Авто · провайдер → Direct → Embed',aniliberty:'AniLiberty · автоматический источник',direct:'Direct · HLS/MP4',embed:'Embed · разрешённый iframe'};state.textContent=txt[v]||txt.auto}};
setWatchProviderV17=function(v){v=['auto','aniliberty','direct','embed'].includes(v)?v:'auto';try{localStorage.setItem(WATCH_PROVIDER_KEY_V17,v)}catch{}const st=$('#watchProviderState');if(st)delete st.dataset.kind;syncWatchProviderUiV17();loadWatchEpisodeV15({autoplay:false,preserveTime:true})};window.setWatchProviderV17=setWatchProviderV17;
try{if(!['auto','aniliberty','direct','embed'].includes(localStorage.getItem(WATCH_PROVIDER_KEY_V17)||'auto'))localStorage.setItem(WATCH_PROVIDER_KEY_V17,'auto')}catch{}

/* Player runtime preferences */
function hexToRgbV18(hex){const m=String(hex||'').match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);return m?`${parseInt(m[1],16)},${parseInt(m[2],16)},${parseInt(m[3],16)}`:'0,0,0'}
function applySubtitleStyleV18(){const p=watchPrefsV15(),o=$('#watchSubtitleOverlay');if(!o)return;o.style.fontSize=`${Math.max(16,Math.min(42,Number(p.subSize)||26))}px`;o.style.color=p.subColor||'#fff';o.dataset.position=p.subPosition||'bottom';o.style.textShadow=p.subShadow===false?'none':'0 2px 4px #000,0 0 10px #000';const span=o.querySelector('span');if(span)span.style.background=`rgba(${hexToRgbV18(p.subBgColor)},${Math.max(0,Math.min(100,Number(p.subBg)||0))/100})`;const s=$('#watchSubSizeValue'),b=$('#watchSubBgValue');if(s)s.textContent=`${Number(p.subSize)||26} px`;if(b)b.textContent=`${Number(p.subBg)||0}%`}
function syncWatchSettingsUiV18(){const p=watchPrefsV15(),map={watchSpeed:String(p.speed||1),watchSubPosition:p.subPosition||'bottom',watchSubColor:p.subColor||'#ffffff',watchSubBgColor:p.subBgColor||'#000000'};for(const [id,val] of Object.entries(map)){const e=$('#'+id);if(e)e.value=val}const checks={watchAutoSkipOp:p.autoSkipOp,watchAutoSkipEd:p.autoSkipEd,watchMiniPlayer:p.miniPlayer!==false,watchRememberVolume:p.rememberVolume!==false,watchSubShadow:p.subShadow!==false};for(const [id,val] of Object.entries(checks)){const e=$('#'+id);if(e)e.checked=!!val}const size=$('#watchSubSize'),bg=$('#watchSubBg');if(size)size.value=Number(p.subSize)||26;if(bg)bg.value=Number(p.subBg)||72;const v=$('#watchVideo');if(v){v.playbackRate=Number(p.speed)||1;if(p.rememberVolume!==false){v.volume=Math.max(0,Math.min(1,Number(p.volume??.85)));v.muted=!!p.muted}}applySubtitleStyleV18();updateCcButtonV18()}

/* Subtitle engine: SRT/VTT + HLS subtitle tracks, with our own styling overlay. */
let watchSubtitleStateV18={kind:'off',cues:[],fallbackNative:false,last:''};
function subtitleTimeV18(s){s=String(s||'').trim().replace(',','.');const a=s.split(':').map(Number);if(a.some(x=>!Number.isFinite(x)))return NaN;if(a.length===3)return a[0]*3600+a[1]*60+a[2];if(a.length===2)return a[0]*60+a[1];return Number(a[0])}
function parseSubtitleTextV18(text){const clean=String(text||'').replace(/^\uFEFF/,'').replace(/\r/g,'');const blocks=clean.split(/\n{2,}/),out=[];for(const block of blocks){const lines=block.split('\n').map(x=>x.trimEnd());const ti=lines.findIndex(x=>x.includes('-->'));if(ti<0)continue;const mm=lines[ti].match(/([^\s]+)\s*-->\s*([^\s]+)/);if(!mm)continue;const start=subtitleTimeV18(mm[1]),end=subtitleTimeV18(mm[2]);if(!Number.isFinite(start)||!Number.isFinite(end)||end<=start)continue;const body=lines.slice(ti+1).join('\n').replace(/<[^>]*>/g,'').trim();if(body)out.push({start,end,text:body})}return out.sort((a,b)=>a.start-b.start)}
async function subtitleTextForV18(sub){if(sub?.kind==='local'&&sub.file)return await sub.file.text();if(sub?.url){const r=await fetch(sub.url,{cache:'force-cache'});if(!r.ok)throw new Error(`HTTP ${r.status}`);return await r.text()}return ''}
function hideNativeTextTracksV18(){const v=$('#watchVideo');if(!v)return;for(const t of [...(v.textTracks||[])])try{t.mode='hidden'}catch{}}
function nativeSubtitleTextV18(){const v=$('#watchVideo');if(!v)return '';const arr=[];for(const t of [...(v.textTracks||[])]){for(const c of [...(t.activeCues||[])])if(c?.text)arr.push(c.text)}return arr.join('\n')}
async function activateSubtitleV18(){const sel=$('#watchSubs'),o=$('#watchSubtitleOverlay');if(!sel||!o)return;const id=String(sel.value||'off');watchSubtitleStateV18={kind:'off',cues:[],fallbackNative:false,last:''};if(id==='off'){o.classList.add('hidden');hideNativeTextTracksV18();updateCcButtonV18();return}if(id.startsWith('hlssub:')){const idx=Number(id.split(':')[1]);if(watchStateV15.hls){watchStateV15.hls.subtitleTrack=idx;watchSubtitleStateV18={kind:'hls',cues:[],fallbackNative:false,last:''};setTimeout(hideNativeTextTracksV18,250);o.classList.remove('hidden');updateCcButtonV18();return}}
  const raw=id.startsWith('extsub:')?id.slice(7):id,sub=currentSubsV15().find(x=>String(x.id)===String(raw));if(!sub){o.classList.add('hidden');updateCcButtonV18();return}try{const cues=parseSubtitleTextV18(await subtitleTextForV18(sub));if(!cues.length)throw new Error('Нет реплик');watchSubtitleStateV18={kind:'external',cues,fallbackNative:false,last:''};hideNativeTextTracksV18();o.classList.remove('hidden')}catch(err){watchSubtitleStateV18={kind:'native',cues:[],fallbackNative:true,last:''};o.classList.add('hidden');const v=$('#watchVideo');if(v&&!v.querySelector(`track[data-v18="${CSS.escape(raw)}"]`)){try{const tr=document.createElement('track');tr.kind='subtitles';tr.label=sub.label||'Субтитры';tr.srclang=sub.id||'sub';tr.src=await watchSubtitleUrlV15(sub);tr.dataset.v18=raw;tr.default=true;v.appendChild(tr);setTimeout(()=>{for(const t of [...v.textTracks])if(t.label===tr.label)try{t.mode='showing'}catch{}},250)}catch{}}}applySubtitleStyleV18();updateCcButtonV18()}
function updateSubtitleOverlayV18(){const o=$('#watchSubtitleOverlay'),v=$('#watchVideo');if(!o||!v||watchSubtitleStateV18.kind==='off'||watchSubtitleStateV18.fallbackNative)return;let text='';if(watchSubtitleStateV18.kind==='external'){const t=Number(v.currentTime||0);text=watchSubtitleStateV18.cues.filter(c=>t>=c.start&&t<c.end).map(c=>c.text).join('\n')}else if(watchSubtitleStateV18.kind==='hls')text=nativeSubtitleTextV18();if(text===watchSubtitleStateV18.last)return;watchSubtitleStateV18.last=text;o.innerHTML='';if(!text){o.classList.add('hidden');return}const span=document.createElement('span');span.textContent=text;o.appendChild(span);o.classList.remove('hidden');applySubtitleStyleV18()}
function mergeExternalSubtitleOptionsV18(){const s=$('#watchSubs');if(!s)return;const existing=new Set([...s.options].map(o=>o.value));for(const x of currentSubsV15()){const val=`extsub:${x.id}`;if(!existing.has(val)){const op=document.createElement('option');op.value=val;op.textContent=x.label||'Субтитры';s.appendChild(op)}}const pref=watchPrefsV15();if([...s.options].some(o=>o.value===pref.subs))s.value=pref.subs;s.disabled=s.options.length<=1}
const populateHlsSelectorsV151BaseV18=populateHlsSelectorsV151;
populateHlsSelectorsV151=function(hls,pref){populateHlsSelectorsV151BaseV18(hls,pref);mergeExternalSubtitleOptionsV18();setTimeout(activateSubtitleV18,80)};

function addSubtitleFileV18(file){if(!file||!watchStateV15.entry)return;const ext=(file.name.split('.').pop()||'').toLowerCase();if(!['srt','vtt'].includes(ext)){profileToastV16?.('Нужен SRT или VTT');return}const l=subLangFromFilenameV15(file.name),id=`user_${l.id}_${Date.now()}`;watchStateV15.localSubs.push({file,season:watchStateV15.season+1,episode:watchStateV15.episode,id,label:l.label,ext,kind:'local'});const p=patchWatchPrefsV18({subs:`extsub:${id}`});renderWatchShellV15();setTimeout(()=>{$('#watchSubs').value=`extsub:${id}`;activateSubtitleV18()},40);profileToastV16?.('Субтитры добавлены',file.name)}
function addSubtitleUrlV18(){const url=$('#watchSubtitleUrl')?.value.trim(),label=$('#watchSubtitleLabel')?.value.trim()||'Субтитры';if(!url||!/^https?:\/\//i.test(url)||!watchStateV15.entry){profileToastV16?.('Нужна http/https ссылка на SRT/VTT');return}const ep=ensureEpisodeManifestV151(),id=`urlsub_${Date.now()}`;ep.subtitles=(ep.subtitles||[]).filter(x=>x.url!==url);ep.subtitles.push({url,id,label});saveWatchManifestV15(watchStateV15.entry,watchStateV15.manifest);patchWatchPrefsV18({subs:`extsub:${id}`});$('#watchSubtitleUrl').value='';$('#watchSubtitleLabel').value='';renderWatchShellV15();setTimeout(()=>{$('#watchSubs').value=`extsub:${id}`;activateSubtitleV18()},50);profileToastV16?.('Субтитры подключены',label)}

/* OP / ED segments. Supports arrays and the common {start,stop}/{start,end} API shapes. */
function segmentSecondsV18(v){if(Number.isFinite(Number(v)))return Number(v);if(typeof v==='string'&&v.includes(':'))return subtitleTimeV18(v);return NaN}
function normalizeSegmentV18(raw){if(!raw)return null;let a,b;if(Array.isArray(raw)){a=raw[0];b=raw[1]}else if(typeof raw==='object'){a=raw.start??raw.begin??raw.from??raw[0];b=raw.stop??raw.end??raw.to??raw[1]}const start=segmentSecondsV18(a),end=segmentSecondsV18(b);return Number.isFinite(start)&&Number.isFinite(end)&&end>start?{start,end}:null}
function currentSegmentsV18(){const ep=currentManifestEpisodeV15()||{};return {op:normalizeSegmentV18(ep.opening||ep.providerMeta?.aniliberty?.opening),ed:normalizeSegmentV18(ep.ending||ep.providerMeta?.aniliberty?.ending)}}
let autoSkipStampV18={op:'',ed:''};
function episodeStampV18(type){return `${watchEntryKeyV15(watchStateV15.entry)}:${watchStateV15.season}:${watchStateV15.episode}:${type}`}
function skipSegmentV18(type){const v=$('#watchVideo'),seg=currentSegmentsV18()[type];if(!v||!seg)return false;try{v.currentTime=Math.min(v.duration||seg.end+.1,seg.end+.08);if(!v.paused)v.play().catch(()=>{});return true}catch{return false}}
function syncSegmentUiV18(){const segs=currentSegmentsV18(),op=$('#watchSkipOp'),ed=$('#watchSkipEd');if(op)op.classList.toggle('hidden',!segs.op);if(ed)ed.classList.toggle('hidden',!segs.ed);updateSegmentRuntimeV18()}
function updateSegmentRuntimeV18(){const v=$('#watchVideo'),chip=$('#watchSkipSegment');if(!v||!chip)return;const p=watchPrefsV15(),segs=currentSegmentsV18(),t=Number(v.currentTime||0);let type=null,seg=null;if(segs.op&&t>=segs.op.start&&t<segs.op.end){type='op';seg=segs.op}else if(segs.ed&&t>=segs.ed.start&&t<segs.ed.end){type='ed';seg=segs.ed}if(type&&((type==='op'&&p.autoSkipOp)||(type==='ed'&&p.autoSkipEd))){const key=episodeStampV18(type);if(autoSkipStampV18[type]!==key){autoSkipStampV18[type]=key;skipSegmentV18(type);return}}if(type){chip.textContent=type==='op'?'Пропустить опенинг →':'Пропустить эндинг →';chip.dataset.segment=type;chip.classList.remove('hidden')}else{chip.classList.add('hidden');delete chip.dataset.segment}}

/* Mini-player, quick controls and keyboard. */
let watchMiniSuppressedV18=false;
function updateMiniPlayerV18(){const modal=$('#watchModal'),anchor=$('#watchVideoAnchor'),wrap=$('#watchVideoWrap'),btn=$('#watchMiniClose');if(!modal||!anchor||!wrap)return;const p=watchPrefsV15();if(modal.classList.contains('hidden')||p.miniPlayer===false){wrap.classList.remove('is-mini');anchor.style.height='0px';btn?.classList.add('hidden');return}const r=anchor.getBoundingClientRect();if(r.top>90)watchMiniSuppressedV18=false;const mini=!watchMiniSuppressedV18&&r.top<-90;if(mini&&!wrap.classList.contains('is-mini'))anchor.style.height=`${wrap.getBoundingClientRect().height}px`;if(!mini)anchor.style.height='0px';wrap.classList.toggle('is-mini',mini);btn?.classList.toggle('hidden',!mini)}
function watchPrevEpisodeV18(){const e=watchStateV15.entry;if(!e)return false;const parts=watchPartsV15(e);if(watchStateV15.episode>1){watchStateV15.episode--;loadWatchEpisodeV15({autoplay:true});return true}if(watchStateV15.season>0){watchStateV15.season--;watchStateV15.episode=Math.max(1,Number(parts[watchStateV15.season]?.episodes)||1);loadWatchEpisodeV15({autoplay:true});return true}return false}
function watchPipV18(){const v=$('#watchVideo');if(!v||v.classList.contains('hidden'))return;if(document.pictureInPictureElement){document.exitPictureInPicture?.().catch(()=>{})}else v.requestPictureInPicture?.().catch(()=>profileToastV16?.('PiP недоступен в этом браузере'))}
function watchFullscreenV18(){const w=$('#watchVideoWrap');if(!w)return;if(document.fullscreenElement)document.exitFullscreen?.();else w.requestFullscreen?.().catch(()=>{})}
function updateCcButtonV18(){const b=$('#watchToggleSubs'),s=$('#watchSubs');if(!b)return;const on=s&&s.value!=='off'&&!s.disabled;b.classList.toggle('is-on',!!on);b.textContent=on?'CC ✓':'CC'}
function toggleSubsV18(){const s=$('#watchSubs');if(!s||s.disabled)return;const p=watchPrefsV15();if(s.value!=='off'){p.lastSubs=s.value;s.value='off';p.subs='off'}else{const target=p.lastSubs&&[...s.options].some(o=>o.value===p.lastSubs)?p.lastSubs:[...s.options].find(o=>o.value!=='off')?.value;if(!target)return;s.value=target;p.subs=target}saveWatchPrefsV15(p);s.dispatchEvent(new Event('change',{bubbles:true}));updateCcButtonV18()}
function isTypingV18(e){const t=e.target;return t&&(['INPUT','TEXTAREA','SELECT'].includes(t.tagName)||t.isContentEditable)}
function watchKeyboardV18(e){if($('#watchModal')?.classList.contains('hidden')||isTypingV18(e))return;const v=$('#watchVideo');if(!v||v.classList.contains('hidden'))return;const k=String(e.key||'').toLowerCase();if(k===' '||k==='k'){e.preventDefault();v.paused?v.play().catch(()=>{}):v.pause()}else if(k==='arrowleft'){e.preventDefault();v.currentTime=Math.max(0,v.currentTime-5)}else if(k==='arrowright'){e.preventDefault();v.currentTime=Math.min(v.duration||Infinity,v.currentTime+5)}else if(k==='j'){v.currentTime=Math.max(0,v.currentTime-10)}else if(k==='l'){v.currentTime=Math.min(v.duration||Infinity,v.currentTime+10)}else if(k==='m'){v.muted=!v.muted}else if(k==='f'){e.preventDefault();watchFullscreenV18()}else if(k==='p'){watchPipV18()}else if(k==='c'){toggleSubsV18()}else if(k==='o'){skipSegmentV18('op')}else if(k===']'){v.playbackRate=Math.min(2,Math.round((v.playbackRate+.25)*100)/100);patchWatchPrefsV18({speed:v.playbackRate});syncWatchSettingsUiV18()}else if(k==='['){v.playbackRate=Math.max(.5,Math.round((v.playbackRate-.25)*100)/100);patchWatchPrefsV18({speed:v.playbackRate});syncWatchSettingsUiV18()}}

/* Keep external subtitle choices visible even when the source has a single dub. */
function syncRuntimeAfterLoadV18(){syncWatchSettingsUiV18();mergeExternalSubtitleOptionsV18();syncSegmentUiV18();setTimeout(activateSubtitleV18,60);updateMiniPlayerV18();const p=watchPrefsV15(),v=$('#watchVideo');if(v){v.playbackRate=Number(p.speed)||1;if(p.rememberVolume!==false){v.volume=Math.max(0,Math.min(1,Number(p.volume??.85)));v.muted=!!p.muted}}}
const loadWatchEpisodeV15BaseV18=loadWatchEpisodeV15;
loadWatchEpisodeV15=async function(opts={}){watchSubtitleStateV18={kind:'off',cues:[],fallbackNative:false,last:''};const o=$('#watchSubtitleOverlay');if(o){o.innerHTML='';o.classList.add('hidden')}const r=await loadWatchEpisodeV15BaseV18(opts);setTimeout(syncRuntimeAfterLoadV18,80);setTimeout(syncRuntimeAfterLoadV18,700);return r};window.loadWatchEpisodeV15=loadWatchEpisodeV15;
const renderWatchShellV15BaseV18=renderWatchShellV15;
renderWatchShellV15=function(){renderWatchShellV15BaseV18();syncWatchSettingsUiV18();syncSegmentUiV18();mergeExternalSubtitleOptionsV18()};
const closeWatchPlayerV15BaseV18=closeWatchPlayerV15;
closeWatchPlayerV15=function(){const w=$('#watchVideoWrap');w?.classList.remove('is-mini');watchMiniSuppressedV18=false;return closeWatchPlayerV15BaseV18()};window.closeWatchPlayerV15=closeWatchPlayerV15;

/* UI bindings */
$('#watchSettingsBtn')?.addEventListener('click',()=>$('#watchSettingsDrawer')?.classList.toggle('hidden'));
$('#watchSettingsClose')?.addEventListener('click',()=>$('#watchSettingsDrawer')?.classList.add('hidden'));
$('#watchPrevEpisode')?.addEventListener('click',watchPrevEpisodeV18);
$('#watchNextEpisode')?.addEventListener('click',()=>watchNextEpisodeV15());
$('#watchSkipOp')?.addEventListener('click',()=>skipSegmentV18('op'));
$('#watchSkipEd')?.addEventListener('click',()=>skipSegmentV18('ed'));
$('#watchSkipSegment')?.addEventListener('click',e=>skipSegmentV18(e.currentTarget.dataset.segment||'op'));
$('#watchToggleSubs')?.addEventListener('click',toggleSubsV18);
$('#watchPip')?.addEventListener('click',watchPipV18);
$('#watchFullscreen')?.addEventListener('click',watchFullscreenV18);
$('#watchMiniClose')?.addEventListener('click',()=>{watchMiniSuppressedV18=true;$('#watchVideoWrap')?.classList.remove('is-mini');$('#watchMiniClose')?.classList.add('hidden')});
$('#watchImportSubtitle')?.addEventListener('click',()=>$('#watchSubtitleInput')?.click());
$('#watchSubtitleInput')?.addEventListener('change',e=>{const f=e.target.files?.[0];if(f)addSubtitleFileV18(f);e.target.value=''});
$('#watchAddSubtitleUrl')?.addEventListener('click',addSubtitleUrlV18);
$('#watchSubtitleUrl')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();addSubtitleUrlV18()}});
$('#watchSpeed')?.addEventListener('change',e=>{const n=Math.max(.5,Math.min(2,Number(e.target.value)||1));patchWatchPrefsV18({speed:n});const v=$('#watchVideo');if(v)v.playbackRate=n});
$('#watchAutoSkipOp')?.addEventListener('change',e=>patchWatchPrefsV18({autoSkipOp:e.target.checked}));
$('#watchAutoSkipEd')?.addEventListener('change',e=>patchWatchPrefsV18({autoSkipEd:e.target.checked}));
$('#watchMiniPlayer')?.addEventListener('change',e=>{patchWatchPrefsV18({miniPlayer:e.target.checked});updateMiniPlayerV18()});
$('#watchRememberVolume')?.addEventListener('change',e=>patchWatchPrefsV18({rememberVolume:e.target.checked}));
$('#watchSubSize')?.addEventListener('input',e=>{patchWatchPrefsV18({subSize:Number(e.target.value)});applySubtitleStyleV18()});
$('#watchSubBg')?.addEventListener('input',e=>{patchWatchPrefsV18({subBg:Number(e.target.value)});applySubtitleStyleV18()});
$('#watchSubPosition')?.addEventListener('change',e=>{patchWatchPrefsV18({subPosition:e.target.value});applySubtitleStyleV18()});
$('#watchSubColor')?.addEventListener('input',e=>{patchWatchPrefsV18({subColor:e.target.value});applySubtitleStyleV18()});
$('#watchSubBgColor')?.addEventListener('input',e=>{patchWatchPrefsV18({subBgColor:e.target.value});applySubtitleStyleV18()});
$('#watchSubShadow')?.addEventListener('change',e=>{patchWatchPrefsV18({subShadow:e.target.checked});applySubtitleStyleV18()});
$('#watchModal')?.addEventListener('scroll',updateMiniPlayerV18,{passive:true});
window.addEventListener('resize',updateMiniPlayerV18,{passive:true});
document.addEventListener('keydown',watchKeyboardV18);
$('#watchVideo')?.addEventListener('loadedmetadata',syncRuntimeAfterLoadV18);
$('#watchVideo')?.addEventListener('timeupdate',()=>{updateSubtitleOverlayV18();updateSegmentRuntimeV18()});
$('#watchVideo')?.addEventListener('volumechange',()=>{const p=watchPrefsV15(),v=$('#watchVideo');if(!v||p.rememberVolume===false)return;patchWatchPrefsV18({volume:v.volume,muted:v.muted})});
$('#watchSubs')?.addEventListener('change',()=>setTimeout(()=>{activateSubtitleV18();updateCcButtonV18()},100));

syncWatchSettingsUiV18();syncWatchProviderUiV17();

// V18 manifest extension: preserve OP/ED timing metadata for independent sources.
const normalizeManifestV15BaseV18=normalizeManifestV15;
normalizeManifestV15=function(raw){const out=normalizeManifestV15BaseV18(raw);for(let si=0;si<(out.seasons||[]).length;si++){const srcS=(raw?.seasons||[])[si]||{};for(let ei=0;ei<(out.seasons[si].episodes||[]).length;ei++){const dst=out.seasons[si].episodes[ei],src=(srcS.episodes||[])[ei]||{};dst.opening=src.opening||src.op||null;dst.ending=src.ending||src.ed||null;dst.duration=Number(src.duration)||0}}return out};

// V18 track switching is instant: HLS audio/quality and subtitles do not restart the episode.
$('#watchDub')?.addEventListener('change',e=>{const v=String(e.target.value||'');if(!v.startsWith('hlsaudio:'))return;e.stopImmediatePropagation();patchWatchPrefsV18({dub:v});applyHlsSelectionsV151();},true);
$('#watchQuality')?.addEventListener('change',e=>{const v=String(e.target.value||'');if(!v.startsWith('hlslevel:'))return;e.stopImmediatePropagation();patchWatchPrefsV18({quality:v});applyHlsSelectionsV151();},true);
$('#watchSubs')?.addEventListener('change',e=>{const v=String(e.target.value||'off');e.stopImmediatePropagation();patchWatchPrefsV18({subs:v,lastSubs:v==='off'?watchPrefsV15().lastSubs:v});applyHlsSelectionsV151();activateSubtitleV18();updateCcButtonV18();},true);

/* ===== V19: source resolver + Kodik adapter + SubDL automatic subtitles ===== */
const WATCH_PROVIDER_CONFIG_KEY_V19='animeWatchProviderConfigV19';
const WATCH_SUBDL_CACHE_KEY_V19='animeWatchSubDLCacheV19';
const WATCH_KODIK_BASES_V19=['https://kodikapi.com','https://kodik-api.com'];
const WATCH_SUBDL_API_V19='https://api.subdl.com/api/v1/subtitles';
let watchResolverV19={busy:false,active:'',kodikCandidates:[],lastKodikError:'',lastSubdlError:'',subdlBusy:false};
function providerConfigV19(){try{return {...{kodikToken:'',subdlKey:'',autoSubtitles:true,preferNative:true,subLangs:'RU,EN'},...(JSON.parse(localStorage.getItem(WATCH_PROVIDER_CONFIG_KEY_V19)||'{}')||{})}}catch{return {kodikToken:'',subdlKey:'',autoSubtitles:true,preferNative:true,subLangs:'RU,EN'}}}
function saveProviderConfigV19(p){try{localStorage.setItem(WATCH_PROVIDER_CONFIG_KEY_V19,JSON.stringify(p||{}))}catch{}}
function currentPartV19(){const e=watchStateV15.entry,parts=watchPartsV15(e||{});return parts[Math.min(watchStateV15.season,Math.max(0,parts.length-1))]||e||{}}
function resolverKeyV19(){const p=currentPartV19();return `${watchEntryKeyV15(watchStateV15.entry)}|p:${p?.mal_id||p?.anilist_id||normalize(p?.title||'')}|e:${watchStateV15.episode}`}
function setResolverStatusV19(title,detail='',kind=''){
  const box=$('#watchResolverStatus');if(box){box.dataset.kind=kind||'';box.innerHTML=`<div><strong>${esc(title||'Автопоиск')}</strong><span>${esc(kind==='ok'?'готов':kind==='loading'?'поиск…':kind==='error'?'ошибка':'')}</span></div><small>${esc(detail||'')}</small>`}
  const state=$('#watchProviderState');if(state){state.dataset.kind=kind||'';state.textContent=detail?`${title} · ${detail}`:title}
}
function syncProviderConfigUiV19(){const c=providerConfigV19();const a=$('#watchKodikToken'),b=$('#watchSubdlKey'),s=$('#watchAutoSubtitles'),n=$('#watchPreferNative');if(a)a.value=c.kodikToken||'';if(b)b.value=c.subdlKey||'';if(s)s.checked=c.autoSubtitles!==false;if(n)n.checked=c.preferNative!==false;const st=$('#watchSourceConfigStatus');if(st)st.innerHTML=`<span class="ok-dot">●</span> AniLiberty · без ключа &nbsp; ${c.kodikToken?'<span class="ok-dot">●</span> Kodik · настроен':'<span class="off-dot">●</span> Kodik · нет token'} &nbsp; ${c.subdlKey?'<span class="ok-dot">●</span> SubDL · настроен':'<span class="off-dot">●</span> SubDL · нет key'}`}
function saveProviderConfigFromUiV19(){const old=providerConfigV19(),next={...old,kodikToken:String($('#watchKodikToken')?.value||'').trim(),subdlKey:String($('#watchSubdlKey')?.value||'').trim(),autoSubtitles:!!$('#watchAutoSubtitles')?.checked,preferNative:!!$('#watchPreferNative')?.checked};saveProviderConfigV19(next);syncProviderConfigUiV19();profileToastV16?.('Источники сохранены','Автопоиск обновлён');if(watchStateV15.entry)loadWatchEpisodeV15({autoplay:false,preserveTime:true,forceResolver:true})}
function openSourcesV19(){syncProviderConfigUiV19();$('#watchSettingsDrawer')?.classList.remove('hidden');setTimeout(()=>$('#watchKodikToken')?.focus(),60)}
window.openSourcesV19=openSourcesV19;

/* Provider UI: public bar contains only actual automatic providers. Direct/Embed remain advanced fallbacks. */
watchProviderV17=function(){let v='auto';try{v=localStorage.getItem(WATCH_PROVIDER_KEY_V17)||'auto'}catch{}if(!['auto','aniliberty','kodik','direct','embed'].includes(v))v='auto';return v};
setWatchProviderV17=function(v){v=['auto','aniliberty','kodik','direct','embed'].includes(v)?v:'auto';try{localStorage.setItem(WATCH_PROVIDER_KEY_V17,v)}catch{};const st=$('#watchProviderState');if(st)delete st.dataset.kind;syncWatchProviderUiV17();if(v==='kodik'&&!providerConfigV19().kodikToken&&!backendBaseV20()){openSourcesV19();profileToastV16?.('Kodik ещё не настроен','Вставь свой API token один раз');return}loadWatchEpisodeV15({autoplay:false,preserveTime:true,forceResolver:true})};window.setWatchProviderV17=setWatchProviderV17;
syncWatchProviderUiV17=function(){const v=watchProviderV17();document.querySelectorAll('#watchProviderBar [data-provider]').forEach(b=>b.classList.toggle('active',b.dataset.provider===v));const state=$('#watchProviderState');if(state&&!state.dataset.kind){const txt={auto:'Авто · несколько источников',aniliberty:'AniLiberty · нативный HLS',kodik:'Kodik · озвучки / субтитровые релизы',direct:'Direct · дополнительный HLS/MP4',embed:'Embed · дополнительный iframe'};state.textContent=txt[v]||txt.auto}const label=$('#watchOnlineKindLabel'),help=$('#watchOnlineHelp');if(label)label.textContent='HLS / MP4';if(help)help.textContent='Расширенный fallback: свой HLS/MP4 или разрешённый embed. Для обычного просмотра ничего сюда вводить не нужно.'};

/* Kodik adapter. API access is user-owned; no hidden tokens are harvested. */
function currentKodikSourcesV19(){return currentRemoteStreamsV17().filter(x=>String(x.provider||'').toLowerCase()==='kodik')}
function clearKodikCurrentV19(){const ep=currentManifestEpisodeV15();if(!ep)return;ep.streams=(ep.streams||[]).filter(x=>String(x.provider||'').toLowerCase()!=='kodik');if(ep.providerMeta)delete ep.providerMeta.kodik;saveWatchManifestV15(watchStateV15.entry,watchStateV15.manifest);watchResolverV19.kodikCandidates=[]}
function absKodikLinkV19(link){let s=String(link||'').trim();if(!s)return '';if(s.startsWith('//'))return 'https:'+s;if(/^https?:\/\//i.test(s))return s;if(s.startsWith('/'))return 'https://kodik.info'+s;return s}
function firstLinkDeepV19(v,episode){if(!v)return '';if(typeof v==='string')return /^https?:|^\/\//i.test(v)?v:'';if(Array.isArray(v)){const exact=v.find(x=>Number(x?.episode??x?.number??x?.ordinal)===Number(episode));if(exact){const r=firstLinkDeepV19(exact,episode);if(r)return r}for(const x of v){const r=firstLinkDeepV19(x,episode);if(r)return r}return ''}if(typeof v==='object'){if(v.link)return String(v.link);if(v.url)return String(v.url);const direct=v[String(episode)]??v[Number(episode)];if(direct){const r=firstLinkDeepV19(direct,episode);if(r)return r}for(const k of ['episodes','episode_data','data','items'])if(v[k]){const r=firstLinkDeepV19(v[k],episode);if(r)return r}for(const x of Object.values(v)){const r=firstLinkDeepV19(x,episode);if(r)return r}}return ''}
function kodikEpisodeLinkV19(m,episode){const seasons=m?.seasons;if(seasons){const preferred=[];if(Array.isArray(seasons)){preferred.push(...seasons.filter(x=>Number(x?.season??x?.number)===1),...seasons)}else if(typeof seasons==='object'){preferred.push(seasons['1'],seasons[1],...Object.values(seasons))}for(const s of preferred.filter(Boolean)){const r=firstLinkDeepV19(s,episode);if(r)return absKodikLinkV19(r)}}return absKodikLinkV19(m?.link||'')}
function kodikCandidateScoreV19(m,part){let s=0;const mal=Number(part?.mal_id||0),sh=Number(m?.shikimori_id||0);if(mal&&sh===mal)s+=100;const y=Number(part?.year||0),my=Number(m?.year||m?.material_data?.year||0);if(y&&my){if(y===my)s+=20;else s-=Math.min(30,Math.abs(y-my)*8)}const nt=normalize(part?.title||''),names=[m?.title,m?.title_orig,m?.other_title,m?.material_data?.anime_title,m?.material_data?.title_en].filter(Boolean).map(normalize);if(names.some(x=>x===nt))s+=40;else if(names.some(x=>x.includes(nt)||nt.includes(x)))s+=20;if(String(m?.type||'').includes('anime-serial'))s+=10;return s}
async function fetchJsonTimeoutV19(url,opts={},ms=10000){const ctrl=new AbortController(),t=setTimeout(()=>ctrl.abort(),ms);try{const r=await fetch(url,{...opts,signal:ctrl.signal,cache:'no-store'});if(!r.ok)throw new Error(`HTTP ${r.status}`);return await r.json()}finally{clearTimeout(t)}}
async function kodikSearchRawV19(params){const backend=backendBaseV20();if(backend){const u=new URL(backend+'/kodik/search');for(const [k,v] of Object.entries(params||{}))if(v!==''&&v!=null)u.searchParams.set(k,String(v));return await fetchJsonTimeoutV19(u.toString(),{},14000)}const token=providerConfigV19().kodikToken;if(!token)throw new Error('нужен API token');let last=null;for(const base of WATCH_KODIK_BASES_V19){try{const u=new URL(base.replace(/\/$/,'')+'/search');u.searchParams.set('token',token);for(const [k,v] of Object.entries(params||{}))if(v!==''&&v!=null)u.searchParams.set(k,String(v));return await fetchJsonTimeoutV19(u.toString(),{},12000)}catch(e){last=e}}throw last||new Error('Kodik недоступен')}
async function ensureKodikEpisodeV19({force=false}={}){const c=providerConfigV19();if(!c.kodikToken){watchResolverV19.lastKodikError='нет API token';return false}const entry=watchStateV15.entry,part=currentPartV19(),epNo=Number(watchStateV15.episode)||1;if(!entry)return false;if(!force&&currentKodikSourcesV19().length){watchResolverV19.kodikCandidates=currentKodikSourcesV19();return true}setResolverStatusV19('Kodik','ищу озвучки…','loading');clearKodikCurrentV19();let rows=[];try{const mal=Number(part?.mal_id||0);if(mal){const d=await kodikSearchRawV19({shikimori_id:mal,types:'anime-serial',with_material_data:'true',with_seasons:'true',with_episodes:'true',with_episodes_data:'true',limit:100});rows=d?.results||[]}if(!rows.length){const d=await kodikSearchRawV19({title:part?.title||entry.title,types:'anime-serial',with_material_data:'true',with_seasons:'true',with_episodes:'true',with_episodes_data:'true',limit:100});rows=d?.results||[]}}
  catch(e){watchResolverV19.lastKodikError=String(e?.message||e);return false}
  const ranked=rows.map(m=>({m,score:kodikCandidateScoreV19(m,part)})).sort((a,b)=>b.score-a.score);const bestScore=ranked[0]?.score??-999;const accepted=ranked.filter(x=>x.score>=Math.max(25,bestScore-25));const streams=[];for(const {m} of accepted){const url=kodikEpisodeLinkV19(m,epNo);if(!url)continue;const tr=m.translation||{},kind=String(tr.type||'voice').toLowerCase(),name=String(tr.title||'Перевод').trim()||'Перевод';const label=kind==='subtitles'?`CC ${name}`:`🎙 ${name}`;streams.push({url,type:'embed',provider:'kodik',dub:`kodik:${m.id||streams.length}`,dubLabel:label,translation:name,translationType:kind,quality:m.quality||'в плеере',label,materialId:m.id||'',year:m.year||null})}
  const uniq=[];const seen=new Set();for(const x of streams){const k=`${x.url}|${x.translation}`;if(!seen.has(k)){seen.add(k);uniq.push(x)}}if(!uniq.length){watchResolverV19.lastKodikError='подходящих переводов нет';return false}const ep=ensureEpisodeManifestV151();ep.streams=(ep.streams||[]).filter(x=>String(x.provider||'').toLowerCase()!=='kodik');ep.streams.push(...uniq);ep.providerMeta=ep.providerMeta||{};ep.providerMeta.kodik={count:uniq.length,at:Date.now()};saveWatchManifestV15(entry,watchStateV15.manifest);watchResolverV19.kodikCandidates=uniq;watchResolverV19.lastKodikError='';return true}
function renderKodikSelectorsV19(){const src=currentKodikSourcesV19(),dub=$('#watchDub'),q=$('#watchQuality'),subs=$('#watchSubs'),p=watchPrefsV15();if(dub){dub.innerHTML=src.map((x,i)=>`<option value="${esc(x.dub||`kodik:${i}`)}">${esc(x.dubLabel||x.translation||`Перевод ${i+1}`)}</option>`).join('')||'<option>Нет переводов</option>';const want=String(p.dub||'');dub.value=[...dub.options].some(o=>o.value===want)?want:(src[0]?.dub||'');dub.disabled=!src.length}if(q){q.innerHTML='<option value="provider">в плеере</option>';q.value='provider';q.disabled=true}if(subs){const cur=src.find(x=>x.dub===dub?.value)||src[0];subs.innerHTML=cur?.translationType==='subtitles'?`<option value="provider">${esc(cur.translation||'Субтитры')} · встроены</option>`:'<option value="off">Субтитры — через другую дорожку или нативный источник</option>';subs.disabled=true}}
function chosenKodikSourceV19(){const src=currentKodikSourcesV19(),want=String($('#watchDub')?.value||watchPrefsV15().dub||'');return src.find(x=>x.dub===want)||src[0]||null}
function showKodikV19(){const src=chosenKodikSourceV19();if(!src)return false;showWatchEmbedV17(src.url);renderKodikSelectorsV19();const note=$('#watchSourceNote');if(note)note.textContent=`Kodik · ${src.dubLabel||src.translation||'перевод'} · управление качеством внутри видеоплеера`;setResolverStatusV19('Kodik',`${currentKodikSourcesV19().length} вариантов перевода`,'ok');return true}

/* SubDL adapter: independent subtitle layer for native HLS/video. */
function subdlCacheV19(){try{return JSON.parse(localStorage.getItem(WATCH_SUBDL_CACHE_KEY_V19)||'{}')||{}}catch{return {}}}
function saveSubdlCacheV19(x){try{localStorage.setItem(WATCH_SUBDL_CACHE_KEY_V19,JSON.stringify(x||{}))}catch{}}
function subdlKeyV19(){const p=currentPartV19();return `${p?.mal_id||normalize(p?.title||'')}|s:${watchStateV15.season+1}|e:${watchStateV15.episode}`}
function absSubdlUrlV19(u){u=String(u||'');if(!u)return '';if(/^https?:\/\//i.test(u))return u;return 'https://dl.subdl.com'+(u.startsWith('/')?u:'/'+u)}
function subtitleLangLabelV19(lang){const x=String(lang||'').toUpperCase();return x==='RU'?'Русские':x==='EN'?'English':x||'Субтитры'}
function installSubdlTracksV19(list){const ep=ensureEpisodeManifestV151();ep.subtitles=(ep.subtitles||[]).filter(x=>String(x.provider||'').toLowerCase()!=='subdl');ep.subtitles.push(...(list||[]));saveWatchManifestV15(watchStateV15.entry,watchStateV15.manifest);mergeExternalSubtitleOptionsV18();}
async function querySubdlV19(){const cfg=providerConfigV19(),backend=backendBaseV20();if(!backend&&!cfg.subdlKey)throw new Error('нет API key');const part=currentPartV19(),season=watchStateV15.season+1,episode=watchStateV15.episode,titles=[part?.title,watchStateV15.entry?.title].filter(Boolean);let last=null;for(const title of [...new Set(titles)]){try{const u=new URL(backend?backend+'/subdl/search':WATCH_SUBDL_API_V19);if(!backend)u.searchParams.set('api_key',cfg.subdlKey);u.searchParams.set('film_name',title);u.searchParams.set('type','tv');u.searchParams.set('season_number',String(season));u.searchParams.set('episode_number',String(episode));u.searchParams.set('languages',cfg.subLangs||'RU,EN');u.searchParams.set('subs_per_page','30');u.searchParams.set('unpack','1');u.searchParams.set('client','myanimelist_project');if(part?.year)u.searchParams.set('year',String(part.year));const data=await fetchJsonTimeoutV19(u.toString(),{},14000);if(!data?.status)throw new Error(data?.error||'SubDL search error');const out=[];for(const sub of data.subtitles||[]){const files=Array.isArray(sub.unpack_files)?sub.unpack_files:[];for(const f of files){const fe=Number(f.episode||sub.episode||0);if(fe&&fe!==Number(episode))continue;const url=absSubdlUrlV19(f.url);if(!url)continue;const lang=String(f.language||sub.language||'').toUpperCase();out.push({url,id:`subdl_${lang}_${f.file_n_id||Math.random().toString(36).slice(2)}`,label:`${subtitleLangLabelV19(lang)} · ${String(f.release_name||sub.release_name||'SubDL').slice(0,42)}`,provider:'subdl',lang,format:f.format||'srt'})}}if(out.length)return out}catch(e){last=e}}throw last||new Error('субтитры не найдены')}
async function ensureSubdlV19({force=false}={}){const cfg=providerConfigV19();if(cfg.autoSubtitles===false||(!cfg.subdlKey&&!backendBaseV20())||watchResolverV19.subdlBusy)return false;const key=subdlKeyV19(),cache=subdlCacheV19();if(!force&&cache[key]&&Date.now()-Number(cache[key].at||0)<1000*60*60*24*7){installSubdlTracksV19(cache[key].tracks||[]);return !!cache[key].tracks?.length}watchResolverV19.subdlBusy=true;try{const tracks=await querySubdlV19();cache[key]={at:Date.now(),tracks};saveSubdlCacheV19(cache);installSubdlTracksV19(tracks);watchResolverV19.lastSubdlError='';return !!tracks.length}catch(e){watchResolverV19.lastSubdlError=String(e?.message||e);cache[key]={at:Date.now(),tracks:[]};saveSubdlCacheV19(cache);return false}finally{watchResolverV19.subdlBusy=false}}

/* Resolver and playback. Auto chooses native HLS first when configured, then Kodik, then custom fallbacks. */
function customDirectSourcesV19(){return currentDirectSourcesV17().filter(x=>String(x.provider||'').toLowerCase()!=='kodik')}
function customEmbedSourcesV19(){return currentEmbedSourcesV17().filter(x=>String(x.provider||'').toLowerCase()!=='kodik')}
async function resolveProviderV19(opts={}){const mode=watchProviderV17(),cfg=providerConfigV19();if(mode==='direct')return customDirectSourcesV19().length?'direct':'none';if(mode==='embed')return customEmbedSourcesV19().length?'embed':'none';if(mode==='aniliberty'){const ok=await ensureAniLibertyEpisodeV171({force:!!opts.forceResolver||!!opts.forceAniLiberty});return ok?'aniliberty':'none'}if(mode==='kodik'){const ok=await ensureKodikEpisodeV19({force:!!opts.forceResolver});return ok?'kodik':'none'}if(currentLocalSourcesV171().length)return 'direct';if(cfg.preferNative!==false){if(await ensureAniLibertyEpisodeV171({force:!!opts.forceResolver||!!opts.forceAniLiberty}))return 'aniliberty';if((cfg.kodikToken||backendBaseV20())&&await ensureKodikEpisodeV19({force:!!opts.forceResolver}))return 'kodik'}else{if((cfg.kodikToken||backendBaseV20())&&await ensureKodikEpisodeV19({force:!!opts.forceResolver}))return 'kodik';if(await ensureAniLibertyEpisodeV171({force:!!opts.forceResolver||!!opts.forceAniLiberty}))return 'aniliberty'}if(customDirectSourcesV19().length)return 'direct';if(customEmbedSourcesV19().length)return 'embed';return 'none'}
function loadNativeProviderV19(provider,opts={}){hideWatchEmbedV17();const v=$('#watchVideo');if(v)v.classList.remove('hidden');const ep=currentManifestEpisodeV15(),orig=ep?.streams,oldLocal=watchStateV15.localVideos;let filtered=orig||[];if(provider==='aniliberty'){filtered=(orig||[]).filter(x=>String(x.provider||'').toLowerCase()==='aniliberty');watchStateV15.localVideos=[]}else filtered=(orig||[]).filter(x=>String(x.type||'').toLowerCase()!=='embed'&&String(x.provider||'').toLowerCase()!=='aniliberty'&&String(x.provider||'').toLowerCase()!=='kodik');if(ep)ep.streams=filtered;return Promise.resolve(loadWatchEpisodeV17Base(opts)).finally(()=>{watchStateV15.localVideos=oldLocal;if(ep)ep.streams=orig})}
const loadWatchEpisodeV18BeforeV19=loadWatchEpisodeV15;
loadWatchEpisodeV15=async function(opts={}){if(!watchStateV15.entry)return;watchSubtitleStateV18={kind:'off',cues:[],fallbackNative:false,last:''};const ov=$('#watchSubtitleOverlay');if(ov){ov.innerHTML='';ov.classList.add('hidden')}setResolverStatusV19('Автопоиск','проверяю источники…','loading');const provider=await resolveProviderV19(opts);watchResolverV19.active=provider;if(provider==='aniliberty'||provider==='direct'){await loadNativeProviderV19(provider,opts);setResolverStatusV19(provider==='aniliberty'?'AniLiberty':'Direct',provider==='aniliberty'?'нативный HLS подключён':'источник подключён','ok');setTimeout(syncRuntimeAfterLoadV18,80);setTimeout(syncRuntimeAfterLoadV18,650);ensureSubdlV19().then(ok=>{if(ok){mergeExternalSubtitleOptionsV18();const n=$('#watchSourceNote');if(n)n.textContent+=(n.textContent?' · ':'')+'SubDL сабы найдены'}});return}if(provider==='kodik'){hideWatchEmbedV17();renderWatchShellV15();showKodikV19();return}if(provider==='embed'){const s=customEmbedSourcesV19()[0];if(s?.url){showWatchEmbedV17(s.url);setResolverStatusV19('Embed','дополнительный источник','ok');return}}hideWatchEmbedV17();const v=$('#watchVideo');if(v){destroyWatchHlsV151();try{v.pause()}catch{}v.removeAttribute('src');v.load();v.classList.remove('hidden')}aniLibertyEmptyV171('Не нашёл серию автоматически',(providerConfigV19().kodikToken||backendBaseV20())?`AniLiberty: ${aniLibertyLastErrorV171||'нет релиза'} · Kodik: ${watchResolverV19.lastKodikError||'нет релиза'}`:`AniLiberty: ${aniLibertyLastErrorV171||'нет релиза'}. Для дополнительных озвучек можно один раз настроить Kodik token.`,true);setResolverStatusV19('Нет источника','для этой серии ничего подходящего не найдено','error');syncRuntimeAfterLoadV18()};window.loadWatchEpisodeV15=loadWatchEpisodeV15;

/* Shell/selectors awareness for Kodik + source status. */
const renderWatchShellBeforeV19=renderWatchShellV15;
renderWatchShellV15=function(){renderWatchShellBeforeV19();syncWatchProviderUiV17();syncProviderConfigUiV19();if(watchResolverV19.active==='kodik')setTimeout(renderKodikSelectorsV19,0)};window.renderWatchShellV15=renderWatchShellV15;
$('#watchDub')?.addEventListener('change',e=>{if(watchResolverV19.active!=='kodik')return;e.stopImmediatePropagation();patchWatchPrefsV18({dub:e.target.value});showKodikV19()},true);
$('#watchSourcesBtn')?.addEventListener('click',openSourcesV19);
$('#watchSaveSources')?.addEventListener('click',saveProviderConfigFromUiV19);
$('#watchTestSources')?.addEventListener('click',async()=>{saveProviderConfigFromUiV19();const cfg=providerConfigV19(),st=$('#watchSourceConfigStatus');if(st)st.textContent='Проверяю…';const bits=['AniLiberty ✓'];if(cfg.kodikToken){try{await kodikSearchRawV19({title:'Naruto',types:'anime-serial',limit:1});bits.push('Kodik ✓')}catch(e){bits.push(`Kodik ✕ ${String(e.message||e)}`)}}else bits.push('Kodik — token не задан');if(cfg.subdlKey){try{const u=`https://api.subdl.com/api/v1/me?api_key=${encodeURIComponent(cfg.subdlKey)}`;await fetchJsonTimeoutV19(u,{},10000);bits.push('SubDL ✓')}catch(e){bits.push(`SubDL ✕ ${String(e.message||e)}`)}}else bits.push('SubDL — key не задан');if(st)st.textContent=bits.join(' · ')})
$('#watchRetryAuto')?.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();loadWatchEpisodeV15({autoplay:false,preserveTime:true,forceResolver:true})},true);

/* Subtitle sync offset for real-world releases. */
const oldDefaultsV19={...WATCH_PREF_DEFAULT_V18};WATCH_PREF_DEFAULT_V18.subOffset=Number(WATCH_PREF_DEFAULT_V18.subOffset)||0;
const updateSubtitleOverlayBaseV19=updateSubtitleOverlayV18;
updateSubtitleOverlayV18=function(){const o=$('#watchSubtitleOverlay'),v=$('#watchVideo');if(!o||!v||watchSubtitleStateV18.kind==='off'||watchSubtitleStateV18.fallbackNative)return;if(watchSubtitleStateV18.kind!=='external')return updateSubtitleOverlayBaseV19();const t=Number(v.currentTime||0)+Number(watchPrefsV15().subOffset||0);const text=watchSubtitleStateV18.cues.filter(c=>t>=c.start&&t<c.end).map(c=>c.text).join('\n');if(text===watchSubtitleStateV18.last)return;watchSubtitleStateV18.last=text;o.innerHTML='';if(!text){o.classList.add('hidden');return}const span=document.createElement('span');span.textContent=text;o.appendChild(span);o.classList.remove('hidden');applySubtitleStyleV18()};
function syncSubOffsetV19(){const p=watchPrefsV15(),r=$('#watchSubOffset'),v=$('#watchSubOffsetValue');if(r)r.value=Number(p.subOffset||0);if(v)v.textContent=`${Number(p.subOffset||0)>0?'+':''}${Number(p.subOffset||0).toFixed(1)} с`}
const syncWatchSettingsBaseV19=syncWatchSettingsUiV18;syncWatchSettingsUiV18=function(){syncWatchSettingsBaseV19();syncProviderConfigUiV19();syncSubOffsetV19()};
$('#watchSubOffset')?.addEventListener('input',e=>{const n=Math.max(-5,Math.min(5,Number(e.target.value)||0));patchWatchPrefsV18({subOffset:n});syncSubOffsetV19();watchSubtitleStateV18.last='__refresh__'});

syncProviderConfigUiV19();syncWatchProviderUiV17();


/* ===== V20: project backend gateway (Cloudflare Worker) ===== */
const BACKEND_URL_KEY_V20='animeProjectBackendUrlV20';
let backendHealthCacheV20={at:0,data:null,error:''};
function cleanBackendUrlV20(v){return String(v||'').trim().replace(/\/+$/,'')}
function backendBaseV20(){try{return cleanBackendUrlV20(localStorage.getItem(BACKEND_URL_KEY_V20)||'')}catch{return ''}}
function setBackendBaseV20(v){const x=cleanBackendUrlV20(v);try{if(x)localStorage.setItem(BACKEND_URL_KEY_V20,x);else localStorage.removeItem(BACKEND_URL_KEY_V20)}catch{};backendHealthCacheV20={at:0,data:null,error:''};return x}
function backendJikanUrlV20(path){const b=backendBaseV20();return b?`${b}/jikan${String(path||'').startsWith('/')?'':'/'}${String(path||'')}`:`https://api.jikan.moe/v4${path}`}
function backendShikimoriUrlV20(path){const b=backendBaseV20();return b?`${b}/shikimori${String(path||'').startsWith('/')?'':'/'}${String(path||'')}`:`https://shikimori.one/api${path}`}
async function backendHealthV20({force=false}={}){const b=backendBaseV20();if(!b)throw new Error('Backend URL не задан');if(!force&&backendHealthCacheV20.data&&Date.now()-backendHealthCacheV20.at<60000)return backendHealthCacheV20.data;try{const r=await fetch(`${b}/health`,{headers:{Accept:'application/json'},cache:'no-store'});const j=await r.json().catch(()=>({}));if(!r.ok||!j?.ok)throw new Error(j?.error||`HTTP ${r.status}`);backendHealthCacheV20={at:Date.now(),data:j,error:''};return j}catch(e){backendHealthCacheV20={at:Date.now(),data:null,error:String(e?.message||e)};throw e}}
window.backendHealthV20=backendHealthV20;

const anilistFetchDirectV20=anilistFetch;
anilistFetch=async function(query,variables){const b=backendBaseV20();if(!b)return anilistFetchDirectV20(query,variables);const response=await fetch(`${b}/anilist`,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({query,variables}),cache:'no-store'});const payload=await response.json().catch(()=>({}));if(!response.ok||payload.errors||payload.error)throw new Error(payload?.errors?.[0]?.message||payload?.error||`Backend AniList ${response.status}`);return payload};

const jikanSearchAnimeDirectV20=jikanSearchAnime;
jikanSearchAnime=async function(q){const b=backendBaseV20();if(!b)return jikanSearchAnimeDirectV20(q);const res=await fetch(`${b}/jikan/anime?q=${encodeURIComponent(q)}&limit=5&sfw=true`,{headers:{Accept:'application/json'}});if(!res.ok)throw new Error(`Backend Jikan ${res.status}`);const j=await res.json();return j?.data||[]};
const jikanExtraFetchDirectV20=jikanExtraFetchV5;
jikanExtraFetchV5=async function(path){const b=backendBaseV20();if(!b)return jikanExtraFetchDirectV20(path);const res=await fetch(backendJikanUrlV20(path),{headers:{Accept:'application/json'}});if(!res.ok)throw new Error(`Backend Jikan ${res.status}`);return res.json()};
const jikanFetchV6DirectV20=jikanFetchV6;
jikanFetchV6=async function(path,opts={}){const b=backendBaseV20();if(!b)return jikanFetchV6DirectV20(path,opts);let last=null,tries=Math.max(1,Number(opts.tries)||3);for(let i=0;i<tries;i++){try{const r=await fetch(backendJikanUrlV20(path),{headers:{Accept:'application/json'},cache:'no-store'});if(r.ok)return r.json();last=new Error(`Backend Jikan ${r.status}`)}catch(e){last=e}if(i<tries-1)await sleepV6(350+i*400)}throw last||new Error('Backend Jikan недоступен')};

const shikimoriRussianDirectV20=shikimoriRussianByMal;
shikimoriRussianByMal=async function(malId){const b=backendBaseV20();if(!b)return shikimoriRussianDirectV20(malId);const res=await fetch(backendShikimoriUrlV20(`/animes/${encodeURIComponent(malId)}`),{headers:{Accept:'application/json'}});if(!res.ok)throw new Error(`Backend Shikimori ${res.status}`);const j=await res.json();return (j?.russian||j?.name||'').trim()||null};
const shikimoriInfoDirectV20=shikimoriInfoV5;
shikimoriInfoV5=async function(malId){const b=backendBaseV20();if(!b)return shikimoriInfoDirectV20(malId);const res=await fetch(backendShikimoriUrlV20(`/animes/${encodeURIComponent(malId)}`),{headers:{Accept:'application/json'}});if(!res.ok)throw new Error(`Backend Shikimori ${res.status}`);return res.json()};

const aniLibertyFetchDirectV20=aniLibertyFetchV171;
aniLibertyFetchV171=async function(path,{timeout=9000}={}){const b=backendBaseV20();if(!b)return aniLibertyFetchDirectV20(path,{timeout});const ctrl=new AbortController(),tm=setTimeout(()=>ctrl.abort(),timeout);try{const p=String(path||'');const r=await fetch(`${b}/aniliberty${p.startsWith('/')?'':'/'}${p}`,{headers:{Accept:'application/json'},cache:'no-store',signal:ctrl.signal});if(!r.ok)throw new Error(`Backend AniLiberty ${r.status}`);return {data:await r.json(),base:b+'/aniliberty'}}catch(e){console.warn('Backend AniLiberty failed, falling back direct',e);return aniLibertyFetchDirectV20(path,{timeout})}finally{clearTimeout(tm)}};

const syncProviderConfigUiBeforeV20=syncProviderConfigUiV19;
syncProviderConfigUiV19=function(){syncProviderConfigUiBeforeV20();const st=$('#watchSourceConfigStatus'),b=backendBaseV20();if(!st)return;if(b){const h=backendHealthCacheV20.data,s=h?.services||{};st.innerHTML=`<span class="ok-dot">●</span> Backend · ${esc(b.replace(/^https?:\/\//,''))} &nbsp; <span class="ok-dot">●</span> AniLiberty &nbsp; ${s.kodik?'<span class="ok-dot">●</span> Kodik · сервер':'<span class="off-dot">●</span> Kodik · ждёт token'} &nbsp; ${s.subdl?'<span class="ok-dot">●</span> SubDL · сервер':'<span class="off-dot">●</span> SubDL · ждёт key'}`;const a=$('#watchKodikToken'),k=$('#watchSubdlKey');if(a&&!a.value)a.placeholder='ключ хранится на backend';if(k&&!k.value)k.placeholder='ключ хранится на backend'}};

const ensureSubdlBeforeV20=ensureSubdlV19;
ensureSubdlV19=async function(opts={}){const cfg=providerConfigV19();if(!backendBaseV20()&&!cfg.subdlKey)return false;return ensureSubdlBeforeV20(opts)};

const ensureKodikBeforeV20=ensureKodikEpisodeV19;
ensureKodikEpisodeV19=async function(opts={}){const c=providerConfigV19();if(!backendBaseV20()&&!c.kodikToken){watchResolverV19.lastKodikError='нет API token';return false}if(backendBaseV20()&&!c.kodikToken){const fake={...c,kodikToken:'backend'};const raw=providerConfigV19;providerConfigV19=()=>fake;try{return await ensureKodikBeforeV20(opts)}finally{providerConfigV19=raw}}return ensureKodikBeforeV20(opts)};

function syncBackendSettingsV20(){const input=$('#settingBackendUrl'),status=$('#settingBackendStatus');if(input&&!input.matches(':focus'))input.value=backendBaseV20();if(status){const b=backendBaseV20(),h=backendHealthCacheV20.data;status.textContent=!b?'Не настроен':h?.ok?'✓ Сервер работает':'URL сохранён — нажми «Проверить»';status.dataset.kind=h?.ok?'ok':''}}
async function testBackendFromSettingsV20(){const input=$('#settingBackendUrl'),status=$('#settingBackendStatus');const b=setBackendBaseV20(input?.value||'');if(!b){if(status)status.textContent='Вставь URL Worker';return}if(status){status.textContent='Проверяю…';status.dataset.kind='loading'}try{const h=await backendHealthV20({force:true});if(status){const s=h.services||{};status.textContent=`✓ Работает · AniList/Jikan ✓ · SubDL ${s.subdl?'✓':'—'} · Kodik ${s.kodik?'✓':'—'}`;status.dataset.kind='ok'}syncProviderConfigUiV19();profileToastV16?.('Backend подключён','Каталог теперь может ходить через Worker');if(document.body.classList.contains('catalog-mode')){catalogStateV10.items=[];catalogStateV10.page=1;catalogLoadUniverseV12(true);catalogFetchPageV10()}}catch(e){if(status){status.textContent=`✕ ${String(e?.message||e)}`;status.dataset.kind='error'}}}
$('#settingBackendTest')?.addEventListener('click',testBackendFromSettingsV20);
$('#settingsSave')?.addEventListener('click',()=>{const input=$('#settingBackendUrl');if(input)setBackendBaseV20(input.value);syncBackendSettingsV20()});
$('#settingsBtn')?.addEventListener('click',()=>setTimeout(syncBackendSettingsV20,0));
$('#topSettingsBtn')?.addEventListener('click',()=>setTimeout(syncBackendSettingsV20,0));
$('#settingBackendUrl')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();testBackendFromSettingsV20()}});

$('#watchTestSources')?.addEventListener('click',async e=>{if(!backendBaseV20())return;e.preventDefault();e.stopImmediatePropagation();saveProviderConfigFromUiV19();const st=$('#watchSourceConfigStatus');if(st)st.textContent='Проверяю backend…';try{const h=await backendHealthV20({force:true}),s=h.services||{};const bits=['Backend ✓','AniList ✓','Jikan ✓',`AniLiberty ${s.aniliberty?'✓':'✕'}`,`SubDL ${s.subdl?'✓':'— key'}`,`Kodik ${s.kodik?'✓':'— token'}`];if(st)st.textContent=bits.join(' · ')}catch(err){if(st)st.textContent=`Backend ✕ ${String(err?.message||err)}`}},true);

syncBackendSettingsV20();
if(backendBaseV20())backendHealthV20().then(()=>syncProviderConfigUiV19()).catch(()=>{});

/* ===== V20.1 · PLAYER POLISH / CUSTOM CONTROLS ===== */
const WATCH_PLAYER_UI_KEY_V201='animeWatchPlayerUiV201';
let watchControlsHideTimerV201=null;
let watchSeekToastTimerV201=null;
let watchAutonextTimerV201=null;
let watchAutonextLeftV201=0;
let watchAutonextRestoreV201=null;
let watchDemoModeV201=false;
let watchProgressDraggingV201=false;

function fmtWatchTimeV201(sec){
  sec=Math.max(0,Number(sec)||0);const h=Math.floor(sec/3600),m=Math.floor((sec%3600)/60),s=Math.floor(sec%60);
  return h?`${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`:`${m}:${String(s).padStart(2,'0')}`;
}
function watchPlayerPrefsV201(){const p=watchPrefsV15();return {...p,autoHideControls:p.autoHideControls!==false,doubleSeek:p.doubleSeek!==false,showBuffer:p.showBuffer!==false}}
function patchWatchPlayerPrefsV201(x){patchWatchPrefsV18(x);syncWatchPlayerSettingsV201()}
function syncWatchPlayerSettingsV201(){
  const p=watchPlayerPrefsV201();
  const map={watchAutoHideControls:p.autoHideControls,watchDoubleSeek:p.doubleSeek,watchShowBuffer:p.showBuffer};
  Object.entries(map).forEach(([id,val])=>{const el=$('#'+id);if(el)el.checked=!!val});
  const buf=$('#watchBufferedBar');if(buf)buf.style.display=p.showBuffer?'block':'none';
}
function hasWatchMediaV201(){const v=$('#watchVideo');return !!(v&&!v.classList.contains('hidden')&&(v.currentSrc||v.getAttribute('src')||watchStateV15.hls))}
function updateWatchPlayerMetaV201(){
  const e=watchStateV15.entry;if(!e)return;
  const parts=watchPartsV15(e),part=parts[watchStateV15.season]||e;
  const label=$('#watchPlayerEpisodeLabel'),provider=$('#watchPlayerProviderLabel');
  if(label)label.textContent=`${part?.title||e.title||'Аниме'} · S${watchStateV15.season+1}E${watchStateV15.episode}`;
  if(provider){const active=watchResolverV19?.active||watchProviderV17?.()||'auto';provider.innerHTML=`<span class="watch-player-status-dot"></span>${esc(active==='aniliberty'?'AniLiberty':active==='kodik'?'Kodik':active==='direct'?'Direct':'Авто')}`}
}
function syncWatchChipsV201(){
  const dub=$('#watchDub'),subs=$('#watchSubs'),q=$('#watchQuality');
  const d=$('#watchTrackChip'),s=$('#watchCcChip'),qq=$('#watchQualityChip');
  if(d)d.textContent=dub?.selectedOptions?.[0]?.textContent?.trim()||'Дорожка';
  if(s)s.textContent=subs?.value&&subs.value!=='off'?(subs.selectedOptions?.[0]?.textContent?.trim()||'Вкл'):'Выкл';
  if(qq)qq.textContent=q?.selectedOptions?.[0]?.textContent?.trim()||'Auto';
  $('#watchCcInline')?.classList.toggle('is-on',!!(subs?.value&&subs.value!=='off'));
}
function updateWatchPlayerStateV201(){
  const v=$('#watchVideo'),w=$('#watchVideoWrap');if(!v||!w)return;
  const media=hasWatchMediaV201();w.classList.toggle('has-video',media);w.classList.toggle('is-playing',media&&!v.paused&&!v.ended);w.classList.toggle('player-error',!!v.error&&media);
  const btn=$('#watchPlayPause'),center=$('#watchCenterPlay');
  const playing=media&&!v.paused&&!v.ended;
  if(btn){btn.textContent=playing?'❚❚':'▶';btn.title=playing?'Пауза':'Воспроизвести'}
  if(center){center.querySelector('span').textContent=playing?'❚❚':'▶';center.setAttribute('aria-label',playing?'Пауза':'Воспроизвести')}
  updateVolumeV201();syncWatchChipsV201();updateWatchPlayerMetaV201();
}
function updateWatchTimelineV201(){
  const v=$('#watchVideo');if(!v)return;const d=Number(v.duration)||0,c=Number(v.currentTime)||0,ratio=d?Math.max(0,Math.min(1,c/d)):0;
  if(!watchProgressDraggingV201){const r=$('#watchProgress');if(r)r.value=String(Math.round(ratio*1000))}
  const played=$('#watchPlayedBar');if(played)played.style.width=`${ratio*100}%`;
  const time=$('#watchTime');if(time)time.textContent=`${fmtWatchTimeV201(c)} / ${fmtWatchTimeV201(d)}`;
  const buf=$('#watchBufferedBar');if(buf&&watchPlayerPrefsV201().showBuffer){let end=0;try{for(let i=0;i<v.buffered.length;i++){if(v.buffered.start(i)<=c+.5)end=Math.max(end,v.buffered.end(i));}}catch{}buf.style.width=`${d?Math.min(100,end/d*100):0}%`}
  updateSegmentMarkersV201();
}
function updateSegmentMarkersV201(){
  const v=$('#watchVideo'),d=Number(v?.duration)||Number(currentManifestEpisodeV15()?.duration)||0,segs=currentSegmentsV18?.()||{};
  for(const [type,id] of [['op','watchOpMarker'],['ed','watchEdMarker']]){const el=$('#'+id),seg=segs[type];if(!el)continue;if(!d||!seg){el.classList.add('hidden');continue}el.classList.remove('hidden');el.style.left=`${Math.max(0,Math.min(100,seg.start/d*100))}%`;el.style.width=`${Math.max(.25,Math.min(100,(seg.end-seg.start)/d*100))}%`}
}
function updateVolumeV201(){
  const v=$('#watchVideo'),range=$('#watchVolume'),btn=$('#watchVolumeBtn');if(!v)return;
  if(range&&!range.matches(':active'))range.value=String(v.muted?0:v.volume);
  if(btn)btn.textContent=v.muted||v.volume===0?'🔇':v.volume<.45?'🔉':'🔊';
}
function setWatchControlsVisibleV201(show=true,linger=true){
  const w=$('#watchVideoWrap');if(!w)return;clearTimeout(watchControlsHideTimerV201);w.classList.toggle('controls-visible',show);
  if(show&&linger&&watchPlayerPrefsV201().autoHideControls){const v=$('#watchVideo');if(v&&!v.paused){watchControlsHideTimerV201=setTimeout(()=>w.classList.remove('controls-visible'),2600)}}
}
function toggleWatchPlaybackV201(){const v=$('#watchVideo');if(!v||!hasWatchMediaV201())return;v.paused?v.play().catch(()=>{}):v.pause();setWatchControlsVisibleV201(true)}
function seekWatchV201(delta,side='right'){
  const v=$('#watchVideo');if(!v||!Number.isFinite(v.duration))return;v.currentTime=Math.max(0,Math.min(v.duration,v.currentTime+delta));
  const t=$('#watchSeekToast');if(t){t.textContent=`${delta>0?'+':''}${delta} сек`;t.className=`watch-seek-toast ${side}`;clearTimeout(watchSeekToastTimerV201);watchSeekToastTimerV201=setTimeout(()=>t.classList.add('hidden'),520)}
}
function watchProgressFromPointerV201(e){const shell=$('#watchProgressShell'),v=$('#watchVideo');if(!shell||!v?.duration)return 0;const r=shell.getBoundingClientRect(),x=Math.max(0,Math.min(r.width,e.clientX-r.left));return x/r.width*v.duration}
function showWatchProgressTipV201(e){const shell=$('#watchProgressShell'),tip=$('#watchProgressTip'),v=$('#watchVideo');if(!shell||!tip||!v?.duration)return;const r=shell.getBoundingClientRect(),px=Math.max(0,Math.min(r.width,e.clientX-r.left)),t=px/r.width*v.duration;tip.textContent=fmtWatchTimeV201(t);tip.style.left=`${px}px`;tip.classList.remove('hidden')}
function showWatchLoadingV201(show=true,label='Загрузка…'){const el=$('#watchLoading');if(!el)return;el.querySelector('span').textContent=label;el.classList.toggle('hidden',!show)}
function openSelectPickerV201(sel){if(!sel||sel.disabled)return;try{if(typeof sel.showPicker==='function')sel.showPicker();else{sel.focus();sel.click()}}catch{sel.focus()}}
function forceMiniPlayerV201(){const w=$('#watchVideoWrap');if(!w||!hasWatchMediaV201())return;watchMiniSuppressedV18=false;w.classList.add('is-mini','controls-visible');$('#watchMiniClose')?.classList.remove('hidden')}

function removeAutoNextOverlayV201(){clearInterval(watchAutonextTimerV201);watchAutonextTimerV201=null;$('#watchAutonextOverlayV201')?.remove()}
function showAutoNextOverlayV201(){
  removeAutoNextOverlayV201();if(!$('#watchAutoNext')?.checked)return;
  const e=watchStateV15.entry,parts=watchPartsV15(e||{}),part=parts[watchStateV15.season]||{},eps=Math.max(1,Number(part.episodes)||1);
  const hasNext=watchStateV15.episode<eps||watchStateV15.season<parts.length-1;if(!hasNext)return;
  const w=$('#watchVideoWrap');if(!w)return;watchAutonextLeftV201=8;
  const nextEp=watchStateV15.episode<eps?watchStateV15.episode+1:1;
  const nextPart=watchStateV15.episode<eps?part:(parts[watchStateV15.season+1]||{});
  const box=document.createElement('div');box.id='watchAutonextOverlayV201';box.className='watch-autonext-overlay';box.innerHTML=`<div class="watch-autonext-card"><div class="watch-autonext-ring" id="watchAutonextRingV201"><b>8</b></div><span>СЛЕДУЮЩАЯ СЕРИЯ</span><h3>${esc(nextPart?.title||e?.title||'Аниме')}</h3><p>Серия ${nextEp} запустится автоматически</p><div class="watch-autonext-actions"><button id="watchAutonextNowV201" type="button">▶ Смотреть сейчас</button><button id="watchAutonextCancelV201" class="secondary" type="button">Отмена</button></div></div>`;w.appendChild(box);
  $('#watchAutonextNowV201')?.addEventListener('click',()=>{removeAutoNextOverlayV201();watchNextEpisodeV15()});
  $('#watchAutonextCancelV201')?.addEventListener('click',removeAutoNextOverlayV201);
  watchAutonextTimerV201=setInterval(()=>{watchAutonextLeftV201--;const ring=$('#watchAutonextRingV201');if(ring){ring.querySelector('b').textContent=String(Math.max(0,watchAutonextLeftV201));ring.style.setProperty('--autonext-progress',`${Math.max(0,watchAutonextLeftV201/8*100)}%`)}if(watchAutonextLeftV201<=0){removeAutoNextOverlayV201();watchNextEpisodeV15()}},1000);
}

function installAutoNextInterceptorV201(){
  const v=$('#watchVideo');if(!v||v.dataset.v201Ended)return;v.dataset.v201Ended='1';
  v.addEventListener('ended',()=>{const a=$('#watchAutoNext');if(!a?.checked)return;watchAutonextRestoreV201=true;a.checked=false;queueMicrotask(()=>{if(watchAutonextRestoreV201){a.checked=true;watchAutonextRestoreV201=null;showAutoNextOverlayV201()}})},true);
}
function installWatchPlayerEventsV201(){
  const v=$('#watchVideo'),w=$('#watchVideoWrap'),progress=$('#watchProgress'),shell=$('#watchProgressShell');if(!v||!w||v.dataset.v201Ui)return;v.dataset.v201Ui='1';
  $('#watchPlayPause')?.addEventListener('click',toggleWatchPlaybackV201);$('#watchCenterPlay')?.addEventListener('click',toggleWatchPlaybackV201);
  $('#watchVolumeBtn')?.addEventListener('click',()=>{v.muted=!v.muted;updateVolumeV201()});$('#watchVolume')?.addEventListener('input',e=>{v.muted=false;v.volume=Math.max(0,Math.min(1,Number(e.target.value)||0));updateVolumeV201()});
  $('#watchTrackBtn')?.addEventListener('click',()=>openSelectPickerV201($('#watchDub')));$('#watchCcInline')?.addEventListener('click',()=>{toggleSubsV18();syncWatchChipsV201()});$('#watchQualityInline')?.addEventListener('click',()=>openSelectPickerV201($('#watchQuality')));$('#watchSettingsInline')?.addEventListener('click',()=>$('#watchSettingsBtn')?.click());$('#watchPipInline')?.addEventListener('click',watchPipV18);$('#watchFullscreenInline')?.addEventListener('click',watchFullscreenV18);$('#watchPlayerMini')?.addEventListener('click',forceMiniPlayerV201);
  progress?.addEventListener('input',e=>{watchProgressDraggingV201=true;if(v.duration){const t=Number(e.target.value)/1000*v.duration;const played=$('#watchPlayedBar');if(played)played.style.width=`${Number(e.target.value)/10}%`;const time=$('#watchTime');if(time)time.textContent=`${fmtWatchTimeV201(t)} / ${fmtWatchTimeV201(v.duration)}`}});
  progress?.addEventListener('change',e=>{if(v.duration)v.currentTime=Number(e.target.value)/1000*v.duration;watchProgressDraggingV201=false;updateWatchTimelineV201()});
  shell?.addEventListener('mousemove',showWatchProgressTipV201);shell?.addEventListener('mouseleave',()=>$('#watchProgressTip')?.classList.add('hidden'));
  w.addEventListener('mousemove',()=>setWatchControlsVisibleV201(true));w.addEventListener('mouseleave',()=>{if(!v.paused)setWatchControlsVisibleV201(false,false)});w.addEventListener('touchstart',()=>setWatchControlsVisibleV201(true),{passive:true});
  v.addEventListener('click',e=>{if(Date.now()-(v._watchLastClickV201||0)<260)return;v._watchLastClickV201=Date.now();setTimeout(()=>{if(Date.now()-(v._watchLastClickV201||0)>=250&&Date.now()>Number(v._watchSuppressClickV201Until||0))toggleWatchPlaybackV201()},270)});
  v.addEventListener('dblclick',e=>{v._watchLastClickV201=Date.now();v._watchSuppressClickV201Until=Date.now()+450;if(!watchPlayerPrefsV201().doubleSeek)return;const r=v.getBoundingClientRect(),pos=(e.clientX-r.left)/r.width;if(pos<.38)seekWatchV201(-10,'left');else if(pos>.62)seekWatchV201(10,'right');else watchFullscreenV18()});
  ['loadedmetadata','durationchange','timeupdate','progress'].forEach(ev=>v.addEventListener(ev,()=>{updateWatchTimelineV201();updateWatchPlayerStateV201()}));
  v.addEventListener('play',()=>{updateWatchPlayerStateV201();setWatchControlsVisibleV201(true)});v.addEventListener('pause',()=>{updateWatchPlayerStateV201();setWatchControlsVisibleV201(true,false)});
  ['waiting','stalled','loadstart'].forEach(ev=>v.addEventListener(ev,()=>{if(hasWatchMediaV201())showWatchLoadingV201(true,ev==='loadstart'?'Подключение…':'Буферизация…')}));
  ['playing','canplay','canplaythrough'].forEach(ev=>v.addEventListener(ev,()=>showWatchLoadingV201(false)));
  v.addEventListener('error',()=>{showWatchLoadingV201(false);updateWatchPlayerStateV201()});
  v.addEventListener('volumechange',updateVolumeV201);document.addEventListener('fullscreenchange',()=>setWatchControlsVisibleV201(true));
  ['watchDub','watchSubs','watchQuality'].forEach(id=>$('#'+id)?.addEventListener('change',()=>setTimeout(syncWatchChipsV201,0)));
  installAutoNextInterceptorV201();
}

function demoSubtitleCuesV201(lang='ru'){return lang==='en'?[{start:1,end:5,text:'[DEMO] Subtitle track is working.'},{start:6,end:10,text:'Switch tracks without restarting the episode.'}]:[{start:1,end:5,text:'[DEMO] Субтитры работают.'},{start:6,end:10,text:'Дорожки можно переключать без перезапуска серии.'}]}
function addDemoTracksV201(){
  const d=$('#watchDub'),s=$('#watchSubs'),q=$('#watchQuality');if(!d||!s)return;watchDemoModeV201=true;
  [['demo:original','🧪 Original · TEST'],['demo:dub','🧪 Dub · TEST']].forEach(([v,t])=>{if(![...d.options].some(o=>o.value===v)){const o=new Option(t,v);o.dataset.demo='1';d.add(o)}});
  [['demo:ru','🧪 Русские · TEST'],['demo:en','🧪 English · TEST']].forEach(([v,t])=>{if(![...s.options].some(o=>o.value===v)){const o=new Option(t,v);o.dataset.demo='1';s.add(o)}});
  if(q&&!['demo:4k'].some(v=>[...q.options].some(o=>o.value===v))){const o=new Option('🧪 4K UI · TEST','demo:4k');o.dataset.demo='1';q.add(o)}
  profileToastV16?.('Демо-дорожки добавлены','Они тестируют только интерфейс; реальное видео/аудио не меняются.');syncWatchChipsV201();
}
function clearDemoTracksV201(){watchDemoModeV201=false;for(const sel of [$('#watchDub'),$('#watchSubs'),$('#watchQuality')]){if(!sel)continue;[...sel.options].filter(o=>o.dataset.demo==='1').forEach(o=>o.remove())}watchSubtitleStateV18={kind:'off',cues:[],fallbackNative:false,last:''};$('#watchSubtitleOverlay')?.classList.add('hidden');syncWatchChipsV201();profileToastV16?.('Демо очищено','Вернулись реальные дорожки источника.')}
// Intercept demo options before legacy change handlers at target level.
document.addEventListener('change',e=>{const el=e.target;if(!['watchDub','watchSubs','watchQuality'].includes(el?.id)||!String(el.value||'').startsWith('demo:'))return;e.stopPropagation();e.stopImmediatePropagation();if(el.id==='watchSubs'){const lang=el.value.endsWith(':en')?'en':'ru';watchSubtitleStateV18={kind:'external',cues:demoSubtitleCuesV201(lang),fallbackNative:false,last:''};patchWatchPrefsV18({subs:el.value});updateSubtitleOverlayV18()}syncWatchChipsV201()},true);

$('#watchAutoHideControls')?.addEventListener('change',e=>patchWatchPlayerPrefsV201({autoHideControls:e.target.checked}));
$('#watchDoubleSeek')?.addEventListener('change',e=>patchWatchPlayerPrefsV201({doubleSeek:e.target.checked}));
$('#watchShowBuffer')?.addEventListener('change',e=>patchWatchPlayerPrefsV201({showBuffer:e.target.checked}));
$('#watchDemoTracks')?.addEventListener('click',addDemoTracksV201);$('#watchClearDemoTracks')?.addEventListener('click',clearDemoTracksV201);

const renderWatchShellV15BaseV201=renderWatchShellV15;
renderWatchShellV15=function(){renderWatchShellV15BaseV201();updateWatchPlayerMetaV201();syncWatchChipsV201();syncWatchPlayerSettingsV201();updateWatchTimelineV201();updateWatchPlayerStateV201();setWatchControlsVisibleV201(true,false)};
const loadWatchEpisodeV15BaseV201=loadWatchEpisodeV15;
loadWatchEpisodeV15=async function(opts={}){removeAutoNextOverlayV201();showWatchLoadingV201(true,'Ищу источник…');const r=await loadWatchEpisodeV15BaseV201(opts);setTimeout(()=>{installWatchPlayerEventsV201();updateWatchPlayerMetaV201();syncWatchChipsV201();syncWatchPlayerSettingsV201();updateWatchTimelineV201();updateWatchPlayerStateV201();showWatchLoadingV201(false);setWatchControlsVisibleV201(true)},100);return r};window.loadWatchEpisodeV15=loadWatchEpisodeV15;
const closeWatchPlayerV15BaseV201=closeWatchPlayerV15;
closeWatchPlayerV15=function(){removeAutoNextOverlayV201();clearTimeout(watchControlsHideTimerV201);clearTimeout(watchSeekToastTimerV201);return closeWatchPlayerV15BaseV201()};window.closeWatchPlayerV15=closeWatchPlayerV15;

installWatchPlayerEventsV201();syncWatchPlayerSettingsV201();updateWatchPlayerStateV201();

/* V20.1.1 · polished in-player menus + readable playback errors */
function ensurePlayerMenuV201(){let m=$('#watchPlayerMenuV201');if(m)return m;const w=$('#watchVideoWrap');if(!w)return null;m=document.createElement('div');m.id='watchPlayerMenuV201';m.className='watch-player-menu hidden';m.innerHTML='<div class="watch-player-menu-head"><span id="watchPlayerMenuTitleV201">МЕНЮ</span><button id="watchPlayerMenuCloseV201" type="button">✕</button></div><div id="watchPlayerMenuListV201" class="watch-player-menu-list"></div>';w.appendChild(m);m.querySelector('#watchPlayerMenuCloseV201')?.addEventListener('click',()=>m.classList.add('hidden'));return m}
function openPlayerSelectMenuV201(kind){
  const cfg={dub:{id:'watchDub',title:'ОЗВУЧКА'},subs:{id:'watchSubs',title:'СУБТИТРЫ'},quality:{id:'watchQuality',title:'КАЧЕСТВО'}}[kind];if(!cfg)return;const sel=$('#'+cfg.id),m=ensurePlayerMenuV201();if(!sel||!m)return;
  $('#watchPlayerMenuTitleV201').textContent=cfg.title;const list=$('#watchPlayerMenuListV201');
  const opts=[...sel.options].filter(o=>!o.disabled);if(!opts.length){list.innerHTML='<div class="watch-player-menu-empty">Нет доступных вариантов</div>'}else list.innerHTML=opts.map(o=>`<button type="button" data-value="${esc(o.value)}" class="${o.value===sel.value?'active':''}"><span>${esc(o.textContent.trim())}</span><span>${o.value===sel.value?'✓':''}</span></button>`).join('');
  list.querySelectorAll('button[data-value]').forEach(b=>b.addEventListener('click',()=>{sel.value=b.dataset.value;sel.dispatchEvent(new Event('change',{bubbles:true}));m.classList.add('hidden');syncWatchChipsV201()}));m.classList.remove('hidden');setWatchControlsVisibleV201(true,false)
}
function closePlayerMenuV201(){ensurePlayerMenuV201()?.classList.add('hidden')}
for(const [id,kind] of [['watchTrackBtn','dub'],['watchCcInline','subs'],['watchQualityInline','quality']]){$('#'+id)?.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();openPlayerSelectMenuV201(kind)},true)}

document.addEventListener('pointerdown',e=>{const m=$('#watchPlayerMenuV201');if(!m||m.classList.contains('hidden'))return;if(!m.contains(e.target)&&!e.target.closest?.('#watchTrackBtn,#watchCcInline,#watchQualityInline'))m.classList.add('hidden')},true);

function ensurePlaybackErrorV201(){let e=$('#watchPlaybackErrorV201');if(e)return e;const w=$('#watchVideoWrap');if(!w)return null;e=document.createElement('div');e.id='watchPlaybackErrorV201';e.className='watch-playback-error hidden';e.innerHTML='<div class="watch-playback-error-icon">⚠</div><h4>Не удалось воспроизвести видео</h4><p id="watchPlaybackErrorTextV201">Источник временно недоступен.</p><div class="watch-playback-error-actions"><button id="watchPlaybackRetryV201" type="button">↻ Повторить</button><button id="watchPlaybackSourcesV201" class="secondary" type="button">⚙ Источники</button></div>';w.appendChild(e);e.querySelector('#watchPlaybackRetryV201')?.addEventListener('click',()=>{hidePlaybackErrorV201();loadWatchEpisodeV15({autoplay:false,preserveTime:true,forceResolver:true})});e.querySelector('#watchPlaybackSourcesV201')?.addEventListener('click',()=>{hidePlaybackErrorV201();openSourcesV19?.()});return e}
function showPlaybackErrorV201(text='Источник временно недоступен.'){const e=ensurePlaybackErrorV201();if(!e)return;$('#watchPlaybackErrorTextV201').textContent=String(text||'Источник временно недоступен.');e.classList.remove('hidden');showWatchLoadingV201(false);setWatchControlsVisibleV201(true,false)}
function hidePlaybackErrorV201(){ensurePlaybackErrorV201()?.classList.add('hidden')}
$('#watchVideo')?.addEventListener('error',()=>{const v=$('#watchVideo');if(!hasWatchMediaV201()&&!v?.currentSrc)return;showPlaybackErrorV201(v?.error?.message||'Видеоисточник вернул ошибку. Можно повторить запрос или переключить источник.')},true);
function bindHlsErrorsV201(){const h=watchStateV15.hls;if(!h||h._v201Bound||!window.Hls)return;h._v201Bound=true;h.on(Hls.Events.ERROR,(_ev,data)=>{if(data?.fatal)showPlaybackErrorV201(`HLS: ${data.details||data.type||'фатальная ошибка потока'}`);else if(data?.details==='bufferStalledError')showWatchLoadingV201(true,'Буферизация…')})}
const loadWatchEpisodeV15BaseV2011=loadWatchEpisodeV15;
loadWatchEpisodeV15=async function(opts={}){hidePlaybackErrorV201();closePlayerMenuV201();const r=await loadWatchEpisodeV15BaseV2011(opts);setTimeout(bindHlsErrorsV201,120);setTimeout(bindHlsErrorsV201,850);return r};window.loadWatchEpisodeV15=loadWatchEpisodeV15;

/* ===== V20.2: stability pass — catalog/random/music/backend/provider polish ===== */
const V202_TAG='20.2';

/* Jikan objects now contain enough data to render a useful detail page even when AniList is unavailable. */
function parseJikanDurationV202(v){
  const s=String(v||'');
  const h=Number((s.match(/(\d+)\s*hr/i)||[])[1]||0),m=Number((s.match(/(\d+)\s*min/i)||[])[1]||0);
  const total=h*60+m;return total||null;
}
function fuzzyDateFromIsoV202(v){
  if(!v)return null;const d=new Date(v);if(Number.isNaN(d.getTime()))return null;
  return {year:d.getUTCFullYear(),month:d.getUTCMonth()+1,day:d.getUTCDate()};
}
const jikanMediaLikeBeforeV202=jikanMediaLike;
jikanMediaLike=function(j){
  const m=jikanMediaLikeBeforeV202(j);
  m.duration=parseJikanDurationV202(j?.duration)||m.duration||null;
  m.startDate=fuzzyDateFromIsoV202(j?.aired?.from);
  m.endDate=fuzzyDateFromIsoV202(j?.aired?.to);
  m.popularity=Number(j?.members||j?.popularity||0)||null;
  m.source=j?.source||m.source||null;
  m.studios={nodes:(j?.studios||[]).map(x=>({name:x.name})).filter(x=>x.name)};
  m.coverImage={
    extraLarge:j?.images?.webp?.large_image_url||j?.images?.jpg?.large_image_url||m.coverImage?.large||null,
    large:j?.images?.webp?.large_image_url||j?.images?.jpg?.large_image_url||m.coverImage?.large||null,
    medium:j?.images?.webp?.image_url||j?.images?.jpg?.image_url||m.coverImage?.medium||null
  };
  return m;
};

/* The catalog no longer depends on AniList when a project backend is configured.
   One Jikan request per page is substantially steadier than the old AniList -> Jikan double attempt. */
const catalogFetchPageBeforeV202=catalogFetchPageV10;
catalogFetchPageV10=async function({append=false}={}){
  if(catalogStateV10.loading)return;
  catalogStateV10.mode='catalog';const f=catalogStateV10.filters=catalogReadFormV10();catalogSaveFiltersV10();
  if(!append){catalogStateV10.page=1;catalogStateV10.items=[];}
  const pageNo=Math.max(1,Number(catalogStateV10.page||1));catalogSetLoadingV12(true);
  $('#catalogModeLabel').textContent='КАТАЛОГ';$('#catalogResultsTitle').textContent=f.search?`Поиск: ${f.search}`:(f.genre?`${f.genre} · аниме`:'Каталог аниме');
  let lastError=null;
  try{
    const r=await catalogJikanPageV11(f,pageNo),items=(r.items||[]).filter(m=>catalogClientFilterV11(m,f,{jikan:true}));
    const merged=append?catalogDedupV12([...catalogStateV10.items,...items]):catalogDedupV12(items);
    catalogRegisterItemsV10(merged);catalogStateV10.items=merged;catalogStateV10.hasNext=!!r.pagination?.has_next_page;catalogStateV10.page=pageNo;
    catalogStateV10.total=Number(r.pagination?.items?.total||catalogStateV10.total||catalogUniverseV12.total||0);catalogRenderGridV10();
    if(merged.length){
      const total=catalogStateV10.total;$('#catalogResultCount').innerHTML=`${merged.length} показано${total?` · ${fmtNumV12(total)} в источнике`:''}<span class="catalog-source-note">MyAnimeList · Jikan</span>`;
      $('#catalogSourceStatus').textContent='MyAnimeList · Jikan';catalogWriteCacheV12(f,merged,total,catalogStateV10.hasNext,catalogStateV10.page);catalogSetEmptyV11('Ничего не нашлось','Попробуй изменить фильтры.');
      return;
    }
    if(f.genre||f.length||f.firstSeason){
      // Client-only filters may empty one page. Walk a couple more pages without hammering the API.
      let extra=[],next=pageNo+1,has=!!r.pagination?.has_next_page;
      for(let i=0;i<2&&has&&!extra.length;i++,next++){
        await sleepV6(650);const rr=await catalogJikanPageV11(f,next);extra=(rr.items||[]).filter(m=>catalogClientFilterV11(m,f,{jikan:true}));has=!!rr.pagination?.has_next_page;catalogStateV10.page=next;
      }
      if(extra.length){catalogStateV10.items=catalogDedupV12(extra);catalogRegisterItemsV10(extra);catalogStateV10.hasNext=has;catalogRenderGridV10();$('#catalogResultCount').innerHTML=`${extra.length} показано<span class="catalog-source-note">MyAnimeList · Jikan</span>`;catalogWriteCacheV12(f,extra,catalogStateV10.total,has,catalogStateV10.page);return;}
    }
    catalogSetEmptyV11('По этим фильтрам пусто','Сбрось часть фильтров или попробуй другую подборку.');$('#catalogResultCount').textContent='0 в выдаче';
  }catch(e){
    lastError=e;console.warn('V20.2 Jikan catalog',e);
    // Direct AniList is still useful locally, so keep it as a secondary source rather than a hard dependency.
    try{
      const targeted=catalogNeedsTargetedV12(f),page=await catalogRawPageV12(f,pageNo,targeted),items=(page.media||[]).filter(m=>catalogFilterV12(m,f)),merged=append?catalogDedupV12([...catalogStateV10.items,...items]):catalogDedupV12(items);
      if(!merged.length)throw e;catalogStateV10.items=merged;catalogRegisterItemsV10(merged);catalogStateV10.hasNext=!!page.pageInfo?.hasNextPage;catalogStateV10.total=Number(page.pageInfo?.total||0);catalogRenderGridV10();$('#catalogResultCount').innerHTML=`${merged.length} показано<span class="catalog-source-note">AniList · резерв</span>`;$('#catalogSourceStatus').textContent='AniList · резерв';catalogWriteCacheV12(f,merged,catalogStateV10.total,catalogStateV10.hasNext,pageNo);return;
    }catch(second){lastError=second;}
    const c=catalogReadCacheV12(f);
    if(c){catalogStateV10.items=c.items;catalogStateV10.total=c.total||0;catalogStateV10.hasNext=!!c.hasNext;catalogStateV10.page=c.page||1;catalogRegisterItemsV10(c.items);catalogRenderGridV10();$('#catalogResultCount').innerHTML=`${c.items.length} из кэша<span class="catalog-source-note">офлайн-кэш</span>`;catalogSetEmptyV11('Нет свежего соединения','Показываю последнюю успешно загруженную выдачу.');}
    else{catalogStateV10.items=[];catalogStateV10.hasNext=false;catalogRenderGridV10();catalogSetEmptyV11('Каталог временно недоступен','Нажми «Повторить» через несколько секунд.',String(lastError?.message||lastError||''));$('#catalogResultCount').textContent='Ошибка загрузки';}
  }finally{catalogSetLoadingV12(false);catalogAutoLoadBusyV12=false;}
};
window.catalogFetchPageV10=catalogFetchPageV10;

/* Truly random, no OVA. Uses Jikan's dedicated random endpoint and falls back to already loaded catalog cards. */
async function catalogRandomV202(){
  if(catalogRandomBusyV101)return;catalogRandomBusyV101=true;
  const btn=$('#catalogRandomBtn'),top=$('#topRandomBtn'),old=btn?.textContent;if(btn){btn.disabled=true;btn.textContent='🎲 Ищу…';}if(top)top.classList.add('is-loading');
  try{
    let data=null;const b=backendBaseV20();
    for(let attempt=0;attempt<3;attempt++){
      try{
        if(b){const r=await fetch(`${b}/random/anime`,{headers:{Accept:'application/json'},cache:'no-store'});if(!r.ok)throw new Error(`Random ${r.status}`);data=await r.json();}
        else data=await jikanFetchV6('/random/anime',{tries:2});
        const j=data?.data;if(j&&String(j.type||'').toUpperCase()!=='OVA'&&!String(j.rating||'').toUpperCase().startsWith('RX')){const m=catalogJikanMediaV11(j);catalogRegisterItemsV10([m]);await openCatalogMediaV10(catalogMediaKeyV11(m));setMessage('','ok');return;}
      }catch(e){if(attempt===2)throw e;await sleepV6(800);}
    }
    throw new Error('Случайный тайтл не найден');
  }catch(e){
    console.warn('V20.2 random',e);const pool=[...(catalogStateV10.items||[]),...(catalogStateV10.recommendations||[]).map(x=>x.media||x)].filter(m=>m&&String(m.format||'').toUpperCase()!=='OVA'&&!m.isAdult);
    if(pool.length){const m=pool[Math.floor(Math.random()*pool.length)];catalogRegisterItemsV10([m]);await openCatalogMediaV10(catalogMediaKeyV11(m));setMessage('','ok');}
    else setMessage('Случайное временно недоступно — каталог ещё не успел загрузиться.','error');
  }finally{catalogRandomBusyV101=false;if(btn){btn.disabled=false;btn.textContent=old||'🎲 Случайное';}if(top)top.classList.remove('is-loading');}
}
catalogRandomV10=catalogRandomV202;window.catalogRandomV10=catalogRandomV202;
['catalogRandomBtn','topRandomBtn'].forEach(id=>{const el=document.getElementById(id);if(el&&!el.dataset.v202Random){el.dataset.v202Random='1';el.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();catalogRandomV10();},true);}});

/* AnimeThemes is now the primary OP/ED metadata source. It is designed specifically for this job and does not consume Jikan's tight request budget. */
async function animeThemesRequestV202(malId){
  if(!malId)throw new Error('MAL ID не найден');
  const q=new URLSearchParams();q.set('filter[has]','resources');q.set('filter[site]','MyAnimeList');q.set('filter[external_id]',String(malId));q.set('include','animethemes.animethemeentries.videos,animethemes.song.artists,animethemes.group');
  const b=backendBaseV20(),url=b?`${b}/animethemes/anime?${q}`:`https://api.animethemes.moe/anime?${q}`;
  const r=await fetch(url,{headers:{Accept:'application/json'}});if(!r.ok)throw new Error(`AnimeThemes ${r.status}`);return r.json();
}
function animeThemesPartV202(payload,c){
  const a=payload?.anime?.[0];if(!a)return null;const openings=[],endings=[];
  for(const t of a.animethemes||[]){
    const code=String(t?.type||t?.slug||t?.name||'').toUpperCase(),song=t?.song||{},title=String(song.title||t?.name||'').trim();if(!title)continue;
    const artists=(song.artists||[]).map(x=>x?.name).filter(Boolean).join(', '),prefix=t?.name&&String(t.name).toUpperCase()!==title.toUpperCase()?`${t.name}: `:'';
    const raw=`${prefix}\"${title}\"${artists?` by ${artists}`:''}`;
    if(/^ED/.test(code)||String(t?.name||'').toUpperCase().startsWith('ED'))endings.push(raw);else if(/^OP/.test(code)||String(t?.name||'').toUpperCase().startsWith('OP'))openings.push(raw);
  }
  return {mal_id:Number(c.mal_id),title:c.title||a.name||`MAL ${c.mal_id}`,year:c.year||a.year||null,type:c.type||a.media_format||'',openings:[...new Set(openings)],endings:[...new Set(endings)]};
}
async function collectAnimeThemesV202(entry,media,token){
  let malId=Number(entry.mal_id||media?.idMal||0);if(!malId){try{await resolveEntryV3(entry,{needDetail:true});malId=Number(entry.mal_id||0)}catch{}}
  const rawParts=(entry.franchise_parts||[]).filter(p=>Number(p?.mal_id));const candidates=rawParts.length?rawParts:[{mal_id:malId,title:entry.title,year:entry.year,type:entry.format}];
  const parts=[];for(let i=0;i<candidates.length&&i<18;i++){
    if(token!==detailExtrasTokenV6||!openedDetail)return [];
    const c=candidates[i],s=$('#detailThemesStatus');if(s)s.textContent=`AnimeThemes: ${i+1} / ${candidates.length}…`;
    try{const p=animeThemesPartV202(await animeThemesRequestV202(Number(c.mal_id)),c);if(p&&(p.openings.length||p.endings.length))parts.push(p);}catch(e){console.warn('AnimeThemes part',c.mal_id,e);}
  }
  if(parts.length&&malId)saveMusicCacheV8(malId,parts);return parts;
}
const loadFranchiseThemesBeforeV202=loadFranchiseThemesV6;
loadFranchiseThemesV6=async function(entry,media,token){
  if(uiSettings?.showThemes===false)return;renderThemesLoadingV6();
  try{
    const parts=await collectAnimeThemesV202(entry,media,token);if(token!==detailExtrasTokenV6||!openedDetail)return;
    if(parts.length){const malId=Number(entry.mal_id||media?.idMal||parts[0]?.mal_id||0);renderFranchiseThemesV6(entry,parts,malId);const ops=flattenFranchiseThemesV6(parts,'openings'),eds=flattenFranchiseThemesV6(parts,'endings'),s=$('#detailThemesStatus');if(s)s.innerHTML=`AnimeThemes · <b>${parts.length}</b> ${parts.length===1?'часть':'частей'} · <b>${ops.length}</b> OP · <b>${eds.length}</b> ED`;return;}
  }catch(e){console.warn('V20.2 AnimeThemes failed',e);}
  // Keep the older Jikan chain as a secondary fallback for rare entries missing from AnimeThemes.
  return loadFranchiseThemesBeforeV202(entry,media,token);
};

/* A configured backend without a KODIK_TOKEN is not an error. Do not hit /kodik/search until health says Kodik exists. */
const ensureKodikBeforeV202=ensureKodikEpisodeV19;
ensureKodikEpisodeV19=async function(opts={}){
  const c=providerConfigV19(),b=backendBaseV20();
  if(b&&!c.kodikToken){
    try{const h=await backendHealthV20();if(!h?.services?.kodik){watchResolverV19.lastKodikError='ещё не подключён';return false;}}catch{watchResolverV19.lastKodikError='backend недоступен';return false;}
  }
  return ensureKodikBeforeV202(opts);
};

/* Refresh backend health silently after reload, so provider decisions know which secrets are really configured. */
if(backendBaseV20())backendHealthV20().then(()=>{syncBackendSettingsV20();syncProviderConfigUiV19();}).catch(()=>{});

/* Make the backend status honest about individual services. */
const testBackendFromSettingsBeforeV202=testBackendFromSettingsV20;
testBackendFromSettingsV20=async function(){
  const input=$('#settingBackendUrl'),status=$('#settingBackendStatus');const b=setBackendBaseV20(input?.value||'');if(!b){if(status)status.textContent='Вставь URL Worker';return}
  if(status){status.textContent='Проверяю…';status.dataset.kind='loading'}
  try{const h=await backendHealthV20({force:true}),s=h.services||{};if(status){status.textContent=`✓ Backend · Jikan ✓ · AnimeThemes ${s.animethemes?'✓':'—'} · SubDL ${s.subdl?'✓':'—'} · Kodik ${s.kodik?'✓':'—'}`;status.dataset.kind='ok'}syncProviderConfigUiV19();if(document.body.classList.contains('catalog-mode')){catalogStateV10.items=[];catalogStateV10.page=1;catalogFetchPageV10();}}
  catch(e){if(status){status.textContent=`✕ ${String(e?.message||e)}`;status.dataset.kind='error'}}
};
// Replace the earlier click behavior in capture phase so a single click performs one health check.
$('#settingBackendTest')?.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();testBackendFromSettingsV20();},true);

console.info(`Anime list V${V202_TAG}: stability fixes loaded`);

/* V20.2b: on the public build, MAL/Jikan is the dependable metadata lane; avoid repeatedly hitting a blocked server-side AniList endpoint. */
const resolveEntryBeforeV202=resolveEntryV3;
resolveEntryV3=async function(entry,{needDetail=false}={}){
  if(backendBaseV20()){
    if(entry?.mal_id){
      try{
        const p=await jikanFetchV6(`/anime/${Number(entry.mal_id)}/full`,{tries:2}),j=p?.data;
        if(j){const m=jikanMediaLike(j);applyResolved(entry,m);saveData();return m;}
      }catch(e){console.warn('V20.2 MAL detail fallback',e);}
    }
    for(const phrase of entrySearchPhrases(entry).slice(0,3)){
      try{
        const list=await jikanSearchAnime(phrase);if(!list.length)continue;const media=list.map(jikanMediaLike);let best=null,bestScore=0;
        for(const m of media){const sc=scoreMediaMatchV3(m,entry);if(sc>bestScore){bestScore=sc;best=m;}}
        if(best&&bestScore>=48){applyResolved(entry,best);saveData();if(needDetail&&best.idMal){try{const p=await jikanFetchV6(`/anime/${Number(best.idMal)}/full`,{tries:2}),j=p?.data;if(j){const full=jikanMediaLike(j);applyResolved(entry,full);saveData();return full;}}catch{}}return best;}
      }catch(e){console.warn('V20.2 MAL search fallback',phrase,e);}
    }
  }
  return resolveEntryBeforeV202(entry,{needDetail});
};

/* ===== V20.3: remove Jikan from critical paths; Shikimori + direct AniList + robust AnimeThemes ===== */
const V203_TAG='20.3';

function shikiAbsV203(url){
  const s=String(url||'').trim();
  if(!s)return null;
  if(/^https?:\/\//i.test(s))return s;
  return `https://shikimori.one${s.startsWith('/')?'':'/'}${s}`;
}
function shikiFormatV203(kind){
  const k=String(kind||'').toLowerCase();
  if(k==='movie')return 'MOVIE'; if(k==='ova')return 'OVA'; if(k==='ona')return 'ONA';
  if(k==='special'||k==='tv_special')return 'SPECIAL'; if(k==='music'||k==='pv'||k==='cm')return 'MUSIC';
  return 'TV';
}
function shikiStatusV203(status){return ({ongoing:'RELEASING',released:'FINISHED',anons:'NOT_YET_RELEASED'})[String(status||'').toLowerCase()]||String(status||'').toUpperCase();}
function dateObjV203(v){
  if(v&&typeof v==='object'&&Number(v.year))return {year:Number(v.year)||null,month:Number(v.month)||null,day:Number(v.day)||null};
  const m=String(v||'').match(/(\d{4})-(\d{1,2})-(\d{1,2})/);return m?{year:+m[1],month:+m[2],day:+m[3]}:{year:null,month:null,day:null};
}
function cleanShikiDescV203(v){return String(v||'').replace(/\[(?:\/?(?:character|url|b|i|u|quote|spoiler|color|size|center|right|left)[^\]]*)\]/gi,'').replace(/<br\s*\/?\s*>/gi,'\n').replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,'&').replace(/\s+\n/g,'\n').replace(/\n\s+/g,'\n').replace(/[ \t]{2,}/g,' ').trim();}
function shikiMediaV203(j,{full=false}={}){
  const id=Number(j?.id||j?.malId||j?.mal_id||0), aired=dateObjV203(j?.airedOn||j?.aired_on), poster=j?.poster||{}, image=j?.image||{};
  const genres=(j?.genres||[]).map(g=>g?.name||g?.russian).filter(Boolean), studios=(j?.studios||[]).map(x=>({name:x?.name})).filter(x=>x.name);
  const score=Number(j?.score||0);
  const m={
    id:id?-(2000000+id):null,idMal:id||null,__shikimori:true,type:'ANIME',format:shikiFormatV203(j?.kind),status:shikiStatusV203(j?.status),episodes:Number(j?.episodes||0)||null,duration:Number(j?.duration||0)||null,seasonYear:Number(aired.year||String(j?.season||'').match(/\d{4}/)?.[0]||0)||null,
    averageScore:score?Math.round(score*10):null,popularity:Number(j?.popularity||0)||null,isAdult:String(j?.rating||'').toLowerCase()==='rx',
    title:{english:j?.english||j?.name||null,romaji:j?.name||j?.english||null,native:j?.japanese||null},synonyms:[j?.russian,...(j?.synonyms||[])].filter(Boolean),genres,
    description:cleanShikiDescV203(j?.descriptionHtml||j?.description_html||j?.description||''),
    coverImage:{extraLarge:shikiAbsV203(poster.originalUrl||poster.mainUrl||image.original),large:shikiAbsV203(poster.mainUrl||poster.originalUrl||image.original||image.preview),medium:shikiAbsV203(poster.miniUrl||image.preview||image.x96)},
    startDate:aired,endDate:dateObjV203(j?.releasedOn||j?.released_on),studios:{nodes:studios},source:null
  };
  return m;
}
async function shikiGetV203(path,{timeout=9000}={}){
  const ctrl=new AbortController(),tm=setTimeout(()=>ctrl.abort(),timeout),b=backendBaseV20();
  try{
    const url=b?`${b}/shikimori${String(path).startsWith('/')?'':'/'}${path}`:`https://shikimori.one/api${String(path).startsWith('/')?'':'/'}${path}`;
    const r=await fetch(url,{headers:{Accept:'application/json'},cache:'no-store',signal:ctrl.signal});
    if(!r.ok){let msg=`Shikimori ${r.status}`;try{const t=await r.text();if(t)msg+=` · ${t.slice(0,100)}`}catch{}throw new Error(msg)}
    return r.json();
  }finally{clearTimeout(tm)}
}
let shikiGenresCacheV203=null;
async function shikiGenreIdV203(name){
  if(!name)return null;
  if(!shikiGenresCacheV203){
    try{const rows=await shikiGetV203('/genres');shikiGenresCacheV203=new Map((rows||[]).filter(x=>String(x.kind||'').toLowerCase()==='anime').flatMap(x=>[[String(x.name||'').toLowerCase(),x.id],[String(x.russian||'').toLowerCase(),x.id]]));}catch{shikiGenresCacheV203=new Map();}
  }
  return shikiGenresCacheV203.get(String(name).toLowerCase())||null;
}
function shikiOrderV203(f){if(f.sort==='SCORE_DESC')return 'ranked';if(f.sort==='START_DATE_DESC')return 'aired_on';if(f.sort==='TRENDING_DESC')return 'popularity';return 'popularity';}
function shikiKindsV203(format){return ({TV:'tv,tv_13,tv_24,tv_48',MOVIE:'movie',OVA:'ova',ONA:'ona',SPECIAL:'special,tv_special',MUSIC:'music'})[format]||'';}
function shikiStatusFilterV203(status){return ({RELEASING:'ongoing',FINISHED:'released',NOT_YET_RELEASED:'anons'})[status]||'';}
async function catalogShikiPageV203(f,pageNo){
  const p=new URLSearchParams({page:String(Math.max(1,pageNo||1)),limit:'50',order:shikiOrderV203(f),censored:'true'});
  if(f.search)p.set('search',f.search);const kinds=shikiKindsV203(f.format);if(kinds)p.set('kind',kinds);const st=shikiStatusFilterV203(f.status);if(st)p.set('status',st);
  if(f.score)p.set('score',String(Math.max(1,Math.ceil(Number(f.score)/10))));
  if(f.yearFrom||f.yearTo){const a=Number(f.yearFrom||f.yearTo),z=Number(f.yearTo||f.yearFrom);if(a&&z)p.set('season',a===z?String(a):`${Math.min(a,z)}_${Math.max(a,z)}`);}
  if(f.genre){const gid=await shikiGenreIdV203(f.genre);if(gid)p.set('genre',String(gid));}
  const rows=await shikiGetV203(`/animes?${p.toString()}`),out=(Array.isArray(rows)?rows:[]).map(x=>shikiMediaV203(x));if(f.genre)out.forEach(m=>{if(!m.genres?.length)m.genres=[f.genre];});return out;
}

/* Catalog: direct AniList first (browser IP), Shikimori fallback. Jikan is no longer used here. */
catalogFetchPageV10=async function({append=false}={}){
  if(catalogStateV10.loading)return;
  catalogStateV10.mode='catalog';const f=catalogStateV10.filters=catalogReadFormV10();catalogSaveFiltersV10();if(!append){catalogStateV10.page=1;catalogStateV10.items=[];}
  const pageNo=Math.max(1,Number(catalogStateV10.page||1));catalogSetLoadingV12(true);catalogMarkPresetV10(null);$('#catalogModeLabel').textContent='КАТАЛОГ';$('#catalogResultsTitle').textContent=f.search?`Поиск: ${f.search}`:(f.genre?`${f.genre} · аниме`:'Каталог аниме');
  let items=[],source='',hasNext=false,total=0,lastErr=null;
  try{
    try{
      const payload=await anilistFetchDirectV20(CATALOG_SIMPLE_QUERY_V11,{page:pageNo,search:f.search||null,sort:catalogSortListV11(f)}),page=payload?.data?.Page||{};
      items=(page.media||[]).filter(m=>catalogClientFilterV11(m,f));hasNext=!!page.pageInfo?.hasNextPage;total=Number(page.pageInfo?.total||0);source='AniList · напрямую';
    }catch(e){lastErr=e;console.warn('V20.3 AniList direct catalog',e);}
    if(!items.length){
      const sh=await catalogShikiPageV203(f,pageNo);items=sh.filter(m=>catalogClientFilterV11(m,f,{jikan:true}));hasNext=sh.length>=50;total=0;source='Shikimori · резерв';
    }
    items=catalogDedupV12(items);const merged=append?catalogDedupV12([...(catalogStateV10.items||[]),...items]):items;catalogStateV10.items=merged;catalogStateV10.hasNext=hasNext;catalogStateV10.total=total;catalogStateV10.page=pageNo;catalogRegisterItemsV10(merged);catalogRenderGridV10();
    if(merged.length){$('#catalogResultCount').innerHTML=`${merged.length} показано${total?` · ~${fmtNumV12(total)} всего`:''}<span class="catalog-source-note">${esc(source)}</span>`;$('#catalogSourceStatus').textContent=source;catalogWriteCacheV12(f,merged,total,hasNext,pageNo);catalogSetEmptyV11('Ничего не нашлось','Попробуй изменить фильтры.');}
    else throw lastErr||new Error('Пустая выдача');
  }catch(e){
    console.warn('V20.3 catalog fallback failed',e);const c=catalogReadCacheV12(f);
    if(c){catalogStateV10.items=c.items;catalogStateV10.total=c.total||0;catalogStateV10.hasNext=!!c.hasNext;catalogStateV10.page=c.page||1;catalogRegisterItemsV10(c.items);catalogRenderGridV10();$('#catalogResultCount').innerHTML=`${c.items.length} из кэша<span class="catalog-source-note">офлайн-кэш</span>`;catalogSetEmptyV11('Нет свежего соединения','Показываю последнюю успешную выдачу.');}
    else{catalogStateV10.items=[];catalogStateV10.hasNext=false;catalogRenderGridV10();catalogSetEmptyV11('Каталог временно недоступен','AniList и Shikimori сейчас не ответили. Нажми «Повторить».',String(e?.message||e));$('#catalogResultCount').textContent='Ошибка загрузки';}
  }finally{catalogSetLoadingV12(false);catalogAutoLoadBusyV12=false;}
};
window.catalogFetchPageV10=catalogFetchPageV10;

/* Global random: Shikimori has a real random ordering; no Jikan, no OVA. */
async function catalogRandomV203(){
  if(catalogRandomBusyV101)return;catalogRandomBusyV101=true;const btn=$('#catalogRandomBtn'),top=$('#topRandomBtn'),old=btn?.textContent;if(btn){btn.disabled=true;btn.textContent='🎲 Ищу…';}if(top)top.classList.add('is-loading');
  try{
    let picked=null;
    try{const rows=await shikiGetV203('/animes?limit=25&order=random&censored=true');const pool=(rows||[]).map(x=>shikiMediaV203(x)).filter(m=>m.format!=='OVA'&&!m.isAdult);picked=pool[Math.floor(Math.random()*pool.length)]||null;}catch(e){console.warn('V20.3 random shiki',e);}
    if(!picked){const pool=[...(catalogStateV10.items||[]),...(catalogStateV10.recommendations||[]).map(x=>x.media||x)].filter(m=>m&&m.format!=='OVA'&&!m.isAdult);picked=pool[Math.floor(Math.random()*pool.length)]||null;}
    if(!picked)throw new Error('Нет доступного пула');catalogRegisterItemsV10([picked]);await openCatalogMediaV10(catalogMediaKeyV11(picked));setMessage('','ok');
  }catch(e){setMessage('Случайное временно недоступно. Попробуй ещё раз после загрузки каталога.','error');}
  finally{catalogRandomBusyV101=false;if(btn){btn.disabled=false;btn.textContent=old||'🎲 Случайное';}if(top)top.classList.remove('is-loading');}
}
catalogRandomV10=catalogRandomV203;window.catalogRandomV10=catalogRandomV203;

/* Shikimori preview/detail enrichment, so title pages don't become empty when AniList is degraded. */
const catalogResolveMediaBeforeV203=catalogResolveMediaV11;
catalogResolveMediaV11=async function(m){
  if(m?.__shikimori&&m.idMal){
    try{const p=await anilistFetchDirectV20(DETAIL_BY_MAL_QUERY,{idMal:Number(m.idMal)}),a=p?.data?.Media;if(a)return a;}catch{}
    try{return shikiMediaV203(await shikiGetV203(`/animes/${Number(m.idMal)}`),{full:true});}catch{return {...m,id:null};}
  }
  return catalogResolveMediaBeforeV203(m);
};

/* Resolver: direct AniList -> Shikimori. Jikan deliberately removed from the critical metadata path. */
resolveEntryV3=async function(entry,{needDetail=false}={}){
  if(entry?.anilist_id){try{const p=await anilistFetchDirectV20(DETAIL_BY_ID_QUERY,{id:Number(entry.anilist_id)}),m=p?.data?.Media;if(m){applyResolved(entry,m);saveData();return m;}}catch(e){console.warn('V20.3 direct AniList id',e);}}
  if(entry?.mal_id){try{const p=await anilistFetchDirectV20(DETAIL_BY_MAL_QUERY,{idMal:Number(entry.mal_id)}),m=p?.data?.Media;if(m){applyResolved(entry,m);saveData();return m;}}catch(e){console.warn('V20.3 direct AniList MAL',e);}}
  if(entry?.mal_id){
    try{const raw=await shikiGetV203(`/animes/${Number(entry.mal_id)}`),m=shikiMediaV203(raw,{full:true});applyResolved(entry,m);const ru=cleanShikiDescV203(raw?.descriptionHtml||raw?.description_html||raw?.description||'');if(ru){entry.description_ru=ru;entry.description_ru_source='Русское описание: Shikimori';}saveData();return m;}catch(e){console.warn('V20.3 Shikimori detail',e);}
  }
  for(const phrase of entrySearchPhrases(entry).slice(0,4)){
    try{const rows=await shikiGetV203(`/animes?limit=12&censored=true&search=${encodeURIComponent(phrase)}`),media=(rows||[]).map(x=>shikiMediaV203(x));let best=null,bestScore=0;for(const m of media){const sc=scoreMediaMatchV3(m,entry);if(sc>bestScore){bestScore=sc;best=m;}}if(best&&bestScore>=48){entry.mal_id ||= best.idMal;applyResolved(entry,best);saveData();try{const raw=await shikiGetV203(`/animes/${Number(best.idMal)}`),full=shikiMediaV203(raw,{full:true});applyResolved(entry,full);const ru=cleanShikiDescV203(raw?.descriptionHtml||raw?.description_html||raw?.description||'');if(ru){entry.description_ru=ru;entry.description_ru_source='Русское описание: Shikimori';}saveData();return full;}catch{return best;}}}catch(e){console.warn('V20.3 Shikimori search',phrase,e);}
  }
  return null;
};

/* AnimeThemes: try AniList ID and MAL ID, both direct and through backend. */
async function animeThemesUrlFetchV203(url){const r=await fetch(url,{headers:{Accept:'application/json'},cache:'no-store'});if(!r.ok)throw new Error(`AnimeThemes ${r.status}`);return r.json();}
async function animeThemesByExternalV203(site,id){
  if(!id)return null;const q=new URLSearchParams();q.set('filter[has]','resources');q.set('filter[site]',site);q.set('filter[external_id]',String(id));q.set('include','animethemes.animethemeentries.videos,animethemes.song.artists,animethemes.group');
  const urls=[];const b=backendBaseV20();if(b)urls.push(`${b}/animethemes/anime?${q.toString()}`);urls.push(`https://api.animethemes.moe/anime?${q.toString()}`);
  let last=null;for(const url of urls){try{const j=await animeThemesUrlFetchV203(url);if(j?.anime?.length)return j;last=new Error('пустой ответ');}catch(e){last=e;}}
  if(last)throw last;return null;
}
async function collectAnimeThemesV203(entry,media,token){
  const candidates=(entry.franchise_parts||[]).length?entry.franchise_parts:[{mal_id:entry.mal_id||media?.idMal,anilist_id:entry.anilist_id||media?.id,title:entry.title,year:entry.year,type:entry.format}];
  const parts=[];
  for(let i=0;i<candidates.length&&i<20;i++){
    if(token!==detailExtrasTokenV6||!openedDetail)return [];
    const c=candidates[i],status=$('#detailThemesStatus');if(status)status.textContent=`AnimeThemes: ${i+1} / ${candidates.length}…`;
    let payload=null;
    for(const [site,id] of [['AniList',Number(c.anilist_id||0)],['MyAnimeList',Number(c.mal_id||0)]]){if(!id)continue;try{payload=await animeThemesByExternalV203(site,id);if(payload?.anime?.length)break;}catch(e){console.warn('V20.3 AnimeThemes',site,id,e);}}
    if(payload){const p=animeThemesPartV202(payload,c);if(p&&(p.openings.length||p.endings.length))parts.push(p);}
  }
  const malId=Number(entry.mal_id||media?.idMal||parts[0]?.mal_id||0);if(parts.length&&malId)saveMusicCacheV8(malId,parts);return parts;
}
loadFranchiseThemesV6=async function(entry,media,token){
  if(uiSettings?.showThemes===false)return;renderThemesLoadingV6();
  try{const parts=await collectAnimeThemesV203(entry,media,token);if(token!==detailExtrasTokenV6||!openedDetail)return;if(parts.length){const malId=Number(entry.mal_id||media?.idMal||parts[0]?.mal_id||0);renderFranchiseThemesV6(entry,parts,malId);const ops=flattenFranchiseThemesV6(parts,'openings'),eds=flattenFranchiseThemesV6(parts,'endings'),s=$('#detailThemesStatus');if(s)s.innerHTML=`AnimeThemes · <b>${parts.length}</b> ${parts.length===1?'часть':'частей'} · <b>${ops.length}</b> OP · <b>${eds.length}</b> ED`;return;}}
  catch(e){console.warn('V20.3 AnimeThemes final',e);}
  const op=$('#detailOpenings'),ed=$('#detailEndings'),s=$('#detailThemesStatus');if(op)op.innerHTML='<div class="theme-empty">AnimeThemes не вернул опенинги для этого ID.</div>';if(ed)ed.innerHTML='<div class="theme-empty">AnimeThemes не вернул эндинги для этого ID.</div>';if(s)s.textContent='Музыка временно недоступна — Jikan больше не используется.';
};

/* Backend status no longer claims Jikan is healthy. */
testBackendFromSettingsV20=async function(){
  const input=$('#settingBackendUrl'),status=$('#settingBackendStatus');const b=setBackendBaseV20(input?.value||'');if(!b){if(status)status.textContent='Вставь URL Worker';return}if(status){status.textContent='Проверяю…';status.dataset.kind='loading'}
  try{const h=await backendHealthV20({force:true}),s=h.services||{};if(status){status.textContent=`✓ Backend · Shikimori ${s.shikimori?'✓':'—'} · AnimeThemes ${s.animethemes?'✓':'—'} · AniLiberty ${s.aniliberty?'✓':'—'} · SubDL ${s.subdl?'✓':'—'} · Kodik ${s.kodik?'✓':'—'}`;status.dataset.kind='ok'}syncProviderConfigUiV19();if(document.body.classList.contains('catalog-mode')){catalogStateV10.items=[];catalogStateV10.page=1;catalogFetchPageV10();}}
  catch(e){if(status){status.textContent=`✕ ${String(e?.message||e)}`;status.dataset.kind='error'}}
};
$('#settingBackendTest')?.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();testBackendFromSettingsV20();},true);

console.info(`Anime list V${V203_TAG}: Jikan removed from catalog/random/detail/music critical paths`);
/* Search bar: direct AniList, then Shikimori. No Jikan fallback. */
$('#searchForm')?.addEventListener('submit',async e=>{
  e.preventDefault();e.stopImmediatePropagation();const q=$('#searchInput').value.trim();if(q.length<2)return setMessage('Введи хотя бы 2 символа.','error');
  setMessage('Ищу…');$('#results').innerHTML='';
  try{
    let list=[];
    try{const payload=await anilistFetchDirectV20(SEARCH_QUERY,{search:q});list=payload?.data?.Page?.media||[];}catch(err){console.warn('V20.3 search AniList',err);}
    if(!list.length){const rows=await shikiGetV203(`/animes?limit=20&censored=true&search=${encodeURIComponent(q)}`);list=(rows||[]).map(x=>shikiMediaV203(x));}
    searchResults=await buildGroupedSearchResultsV9(list,q);if(!searchResults.length)return setMessage('Ничего не нашлось.','error');setMessage(`Нашлось: ${searchResults.length}`);renderResults();
  }catch(err){setMessage(`Поиск временно недоступен: ${String(err?.message||err)}`,'error');}
},true);

/* AnimeThemes hero uses the same robust provider logic as the detail page. */
fetchAnimeThemesHeroV14=async function(entry){
  const part=heroPartForEntryV14(entry),aid=Number(part?.anilist_id||entry?.anilist_id||0),mid=Number(part?.mal_id||entry?.mal_id||0),key=aid?`a${aid}`:`m${mid}`;
  if(!aid&&!mid)return null;if(animeThemesHeroCacheV14.has(key))return animeThemesHeroCacheV14.get(key);
  try{const stored=localStorage.getItem(V14_HERO_THEME_CACHE_KEY+key);if(stored){const o=JSON.parse(stored);if(o?.ts>Date.now()-7*86400000&&o?.data?.url){animeThemesHeroCacheV14.set(key,o.data);return o.data;}}}catch{}
  let data=null;for(const [site,id] of [['AniList',aid],['MyAnimeList',mid]]){if(!id)continue;try{data=await animeThemesByExternalV203(site,id);if(data?.anime?.length)break;}catch(e){console.warn('V20.3 hero theme',site,id,e);}}
  const picked=data?chooseAnimeThemesVideoV14(data):null;animeThemesHeroCacheV14.set(key,picked||null);if(picked)try{localStorage.setItem(V14_HERO_THEME_CACHE_KEY+key,JSON.stringify({ts:Date.now(),data:picked}));}catch{}return picked||null;
};
