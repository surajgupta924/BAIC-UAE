/** Omni Auto Nigeria site constants */
export const COMPANY_NAME = "Omni Auto Limited";
export const SITE_NAME = "Omni Auto Limited";
export const BRAND_MARK = "OMNI AUTO";
export const SUPPORT_PHONE_DISPLAY = "+234 9113455555";
export const SUPPORT_PHONE_TEL = "+2349113455555";
export const SUPPORT_EMAIL = "info@omniauto.com.ng";
export const SUPPORT_WEBSITE = "www.omniauto.com.ng";
export const SUPPORT_WEBSITE_URL = "https://www.omniauto.com.ng";
export const SUPPORT_ADDRESS_LINE1 = "122–132 Oshodi-Apapa Expressway";
export const SUPPORT_ADDRESS_LINE2 = "Isolo, Lagos State, Nigeria";
export const SUPPORT_LOCATION = `${SUPPORT_ADDRESS_LINE1}, ${SUPPORT_ADDRESS_LINE2}`;
export const SUPPORT_MAPS_QUERY =
  "122-132 Oshodi-Apapa Expressway, Isolo, Lagos State, Nigeria";
export const SUPPORT_MAPS_EMBED =
  "https://www.google.com/maps?q=122-132+Oshodi-Apapa+Expressway,+Isolo,+Lagos,+Nigeria&output=embed";
export const LOGO_SRC = "/images/brand/omni-auto-logo.png?v=20260730n";
export const FOOTER_LOGO_SRC =
  "/images/brand/omni-auto-logo-footer.png?v=20260731a";

/** Models offered for Omni Auto Nigeria (exclude UAE-only / out-of-scope). */
export const ACTIVE_MODEL_NAMES = [
  "X55",
  "X7",
  "BJ30",
  "BJ30e Smart Hybrid",
  "BJ40 PRO",
  "BJ60",
  "Arcfox T1",
  "Arcfox T5",
] as const;

/** Map 360 catalog labels → Nigeria active model names. */
export const CAR360_MODEL_ALIASES: Record<string, string> = {
  "X55 II": "X55",
  X55: "X55",
  X7: "X7",
  "ALL NEW X7": "X7",
  BJ30: "BJ30",
  "BJ30e Smart Hybrid": "BJ30e Smart Hybrid",
  "BJ40 C": "BJ40 PRO",
  "BJ40 PRO": "BJ40 PRO",
  "BJ40 Pro": "BJ40 PRO",
  "BJ40 PLUS": "BJ40 PRO",
  BJ60: "BJ60",
  "Arcfox T1": "Arcfox T1",
  T1: "Arcfox T1",
  "Arcfox T5": "Arcfox T5",
  T5: "Arcfox T5",
};

/** Guide EMI starting prices (NGN) for homepage slider badges. */
export const SLIDER_EMI_NGN: Record<string, { amount: string; label?: string }> =
  {
    "BJ40 PRO": { amount: "730,000" },
    "BJ40 Plus": { amount: "939,000" },
    BJ30: { amount: "457,000" },
  };

export const NAIRA_SYMBOL_SRC = "/images/brand/naira-symbol.png?v=20260801a";
