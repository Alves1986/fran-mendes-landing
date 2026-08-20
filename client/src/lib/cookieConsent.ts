export const COOKIE_CONSENT_STORAGE_KEY = "fran-cookie-consent";

export type CookieConsentChoice = "accepted" | "necessary";

export function readCookieConsent(): CookieConsentChoice | null {
  try {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    return stored === "accepted" || stored === "necessary" ? stored : null;
  } catch {
    return null;
  }
}

export function saveCookieConsent(choice: CookieConsentChoice) {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, choice);
  } catch {
    // A navegação continua funcional se o armazenamento local estiver indisponível.
  }
}

export function hasAnalyticsConsent() {
  return readCookieConsent() === "accepted";
}
