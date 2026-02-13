import React, { createContext, useContext, useMemo, useCallback } from "react";

type RoutingContextValue = {
  /** Base URL pour les ancres ('' en standalone, '/landing' dans Angular) */
  baseUrl: string;
  /** URL de connexion ('#connexion' en standalone, '/authentication/login' dans Angular) */
  loginUrl: string;
  /** Construit l'URL d'une ancre (ex: /landing#demo ou #demo) */
  buildAnchor: (hash: string) => string;
  /** Scroll fluide vers une section (gère Shadow DOM) */
  scrollToSection: (sectionId: string) => void;
  /** True si on est intégré (Angular) */
  isEmbedded: boolean;
};

const RoutingContext = createContext<RoutingContextValue | null>(null);

function getRoutingConfig(): Pick<RoutingContextValue, "baseUrl" | "loginUrl" | "isEmbedded"> {
  if (typeof window === "undefined") {
    return { baseUrl: "", loginUrl: "#connexion", isEmbedded: false };
  }
  const pathname = window.location.pathname;
  const isEmbedded = pathname.startsWith("/landing") || pathname === "/landing";
  return {
    baseUrl: isEmbedded ? "/landing" : "",
    loginUrl: isEmbedded ? "/authentication/login" : "#connexion",
    isEmbedded,
  };
}

export function RoutingProvider({ children }: { children: React.ReactNode }) {
  const config = useMemo(() => getRoutingConfig(), []);

  const buildAnchor = useCallback(
    (hash: string) => {
      const cleanHash = hash.startsWith("#") ? hash.slice(1) : hash;
      return config.baseUrl ? `${config.baseUrl}#${cleanHash}` : `#${cleanHash}`;
    },
    [config.baseUrl]
  );

  const scrollToSection = useCallback((sectionId: string) => {
    const id = sectionId.startsWith("#") ? sectionId.slice(1) : sectionId;
    const root: Document | ShadowRoot =
      document.querySelector("react-landing")?.shadowRoot ?? document;
    const el = root.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const value = useMemo<RoutingContextValue>(
    () => ({
      ...config,
      buildAnchor,
      scrollToSection,
    }),
    [config.baseUrl, config.loginUrl, config.isEmbedded, buildAnchor, scrollToSection]
  );

  return <RoutingContext.Provider value={value}>{children}</RoutingContext.Provider>;
}

export function useRouting() {
  const ctx = useContext(RoutingContext);
  if (!ctx) {
    throw new Error("useRouting must be used within RoutingProvider");
  }
  return ctx;
}
