/**
 * Design reminder — Editorial de casa aberta:
 * transparência discreta, acolhedora e objetiva, sem competir com a história da Fran.
 */
import { useEffect, useState } from "react";
import { COOKIE_CONSENT_STORAGE_KEY, readCookieConsent, saveCookieConsent } from "@/lib/cookieConsent";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(readCookieConsent() === null);
  }, []);

  const chooseConsent = (choice: "accepted" | "necessary") => {
    saveCookieConsent(choice);
    window.dispatchEvent(new CustomEvent("fran:cookie-consent", { detail: { choice, storageKey: COOKIE_CONSENT_STORAGE_KEY } }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside className="cookie-consent" role="region" aria-label="Preferências de cookies">
      <div className="cookie-consent-copy">
        <strong>Cookies com clareza.</strong>
        <p>Usamos recursos essenciais e, com seu aceite, uma medição resumida para melhorar a experiência. <a href="/privacidade">Saiba mais</a>.</p>
      </div>
      <div className="cookie-consent-actions">
        <button className="cookie-essential" type="button" onClick={() => chooseConsent("necessary")}>Somente essenciais</button>
        <button className="cookie-accept" type="button" onClick={() => chooseConsent("accepted")}>Aceitar</button>
      </div>
    </aside>
  );
}
