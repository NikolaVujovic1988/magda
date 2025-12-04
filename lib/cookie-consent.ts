export type CookieConsent = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_KEY = "magda-cookie-consent";
const CONSENT_DATE_KEY = "magda-cookie-consent-date";

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function setStoredConsent(consent: CookieConsent): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString());

    // Dispatch custom event for other components to listen
    window.dispatchEvent(new CustomEvent("cookieConsentChanged", { detail: consent }));
  } catch (error) {
    console.error("Failed to store consent:", error);
  }
}

export function hasMarketingConsent(): boolean {
  const consent = getStoredConsent();
  return consent?.marketing === true;
}

export function hasAnalyticsConsent(): boolean {
  const consent = getStoredConsent();
  return consent?.analytics === true;
}

export function clearConsent(): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(CONSENT_KEY);
    localStorage.removeItem(CONSENT_DATE_KEY);
  } catch (error) {
    console.error("Failed to clear consent:", error);
  }
}
