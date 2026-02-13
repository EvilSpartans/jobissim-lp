import React, { createContext, useContext } from "react";

/** Contexte pour le conteneur des portails (dropdowns) — rend dans la div .react-landing pour que les styles s'appliquent */
const PortalContainerContext = createContext<HTMLElement | null>(null);

type PortalContainerProviderProps = {
  children: React.ReactNode;
  /** Conteneur cible (ex: la div racine .react-landing) pour que le dropdown ait les styles */
  container?: HTMLElement | null;
};

export function PortalContainerProvider({ children, container = null }: PortalContainerProviderProps) {
  return (
    <PortalContainerContext.Provider value={container ?? null}>
      {children}
    </PortalContainerContext.Provider>
  );
}

export function usePortalContainer(): HTMLElement | null {
  return useContext(PortalContainerContext);
}
