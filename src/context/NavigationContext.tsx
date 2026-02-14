/**
 * Navigation context for active route/section highlighting.
 * Used by Header and scroll-aware components.
 */

import { createContext, useContext, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

type NavigationContextValue = {
  activePath: string;
};

const NavigationContext = createContext<NavigationContextValue>({ activePath: "/" });

export function NavigationProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  return (
    <NavigationContext.Provider value={{ activePath: location.pathname }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
