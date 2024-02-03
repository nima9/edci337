// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Nima's Blog";
export const SITE_DESCRIPTION =
  "Welcome to my blog! I write my journey in Interactive & Multimedia Learning. I am a computer science student at UVIC and I like to play volleyball!\n I am looking forward in learning about how to share information/teach in a more interactive way that is conducive to people's online learning.";
export const TWITTER_HANDLE = "@OhNoNima";
export const MY_NAME = "Nima Mohajeri";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
