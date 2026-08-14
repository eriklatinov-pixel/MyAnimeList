/* Senime V24.8 · PUBLIC browser configuration.
   The Supabase publishable key and Turnstile sitekey are public by design.
   NEVER put Supabase service_role, Turnstile secret, Kodik token or SubDL API key here. */
window.ANIME_AUTH_CONFIG = {
  supabaseUrl: "https://gyjhhgnukyxlsjfkfjmw.supabase.co",
  supabaseAnonKey: "sb_publishable_5Iw4LAOAYigz5p82ctvugg_bBKEiEdd",
  siteUrl: "https://senime.fun",

  /* Public URL of your existing Cloudflare Worker. Not a secret.
     Paste it here before the public domain launch, e.g.
     backendUrl: "https://senime-api.<account>.workers.dev" */
  backendUrl: "https://rmyanimelist-api.eriklatinov.workers.dev",

  /* Production Cloudflare Turnstile sitekey for senime.fun.
     This sitekey is public by design; the matching secret stays only in Supabase. */
  turnstileSiteKey: "0x4AAAAAAENQ2GQR2QLqBJY7",
  turnstileMode: "production",

  securityVersion: "25.9.21"
};
