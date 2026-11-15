import { cache } from "react";
import { localize, type Locale } from "./i18n";
import { getContent } from "./pages";

// Per-request locale for server components, so pages don't have to pass `lang` through every component.
// Each localized page calls setLang() first; legal pages never do and stay English.
const store = cache(() => ({ lang: "en" as Locale }));

export const setLang = (lang: Locale) => {
  store().lang = lang;
};
export const getLang = () => store().lang;

/** Content for the current request's language. */
export const t = () => getContent(getLang());

/** Localized URL for a site path in the current request's language. */
export const href = (path: string) => localize(getLang(), path);
