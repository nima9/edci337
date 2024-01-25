// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Nima's Blog";
export const SITE_DESCRIPTION =
  "Welcome to my blog! I write my journey in Interactive & Multimedia Learning.";
export const TWITTER_HANDLE = "@OhNoNima";
export const MY_NAME = "Nima Mohajeri";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
