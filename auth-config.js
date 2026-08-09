/* Senime V24.8 · PUBLIC browser configuration.
   The Supabase publishable key and Turnstile sitekey are public by design.
   NEVER put Supabase service_role, Turnstile secret, Kodik token or SubDL API key here. */
window.ANIME_AUTH_CONFIG = {
  supabaseUrl: "https://gyjhhgnukyxlsjfkfjmw.supabase.co",
  supabaseAnonKey: "sb_publishable_5Iw4LAOAYigz5p82ctvugg_bBKEiEdd",

  /* Public URL of your existing Cloudflare Worker. Not a secret.
     Paste it here before the public domain launch, e.g.
     backendUrl: "https://senime-api.<account>.workers.dev" */
  backendUrl: "",

  /* DEVELOPMENT / TESTING ONLY.
     Cloudflare's official always-pass visible TEST sitekey.
     Before public launch replace it with your real Turnstile sitekey and
     change turnstileMode to "production". */
  turnstileSiteKey: "1x00000000000000000000AA",
  turnstileMode: "test",

  securityVersion: "24.8"
};
