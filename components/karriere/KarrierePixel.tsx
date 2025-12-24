"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { hasMarketingConsent } from "@/lib/cookie-consent";

export default function KarrierePixel() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Check initial consent
    const checkConsent = () => {
      if (hasMarketingConsent()) {
        setShouldLoad(true);
      }
    };

    checkConsent();

    // Listen for consent changes
    const handleConsentChange = (event: CustomEvent) => {
      if (event.detail?.marketing === true) {
        setShouldLoad(true);
        // Initialize pixel if consent is granted after page load
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("init", "553561797798473"); // TODO: Ersetzen Sie diese ID mit Ihrer Karriere-Pixel-ID
          window.fbq("track", "PageView");
        }
      }
    };

    window.addEventListener("cookieConsentChanged", handleConsentChange as EventListener);

    return () => {
      window.removeEventListener("cookieConsentChanged", handleConsentChange as EventListener);
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      <Script
        id="karriere-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '553561797798473');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=553561797798473&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}
