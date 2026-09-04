import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type PlayModeId = "fire";

type PlayModeContextValue = {
  /** Bottom-right BORED? toggle */
  boredOn: boolean;
  setBoredOn: (on: boolean) => void;
  /** Play Anything panel open (opened when toggle turns on) */
  panelOpen: boolean;
  openPanel: () => void;
  closePanel: () => void;
  /** Active play mode — null means normal portfolio (previous cursor only) */
  activeMode: PlayModeId | null;
  setActiveMode: (mode: PlayModeId | null) => void;
  /** Fire cursor + button burn flag */
  fireEnabled: boolean;
};

const PlayModeContext = createContext<PlayModeContextValue | null>(null);

export function PlayModeProvider({ children }: { children: ReactNode }) {
  const [boredOn, setBoredOnState] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeMode, setActiveModeState] = useState<PlayModeId | null>(null);

  const setBoredOn = useCallback((on: boolean) => {
    setBoredOnState(on);
    if (on) {
      setPanelOpen(true);
    } else {
      setPanelOpen(false);
      setActiveModeState(null);
    }
  }, []);

  const openPanel = useCallback(() => setPanelOpen(true), []);

  const closePanel = useCallback(() => {
    setPanelOpen(false);
    // Dismiss without picking a mode → turn Bored off
    setActiveModeState((mode) => {
      if (mode === null) {
        setBoredOnState(false);
      }
      return mode;
    });
  }, []);

  const setActiveMode = useCallback((mode: PlayModeId | null) => {
    setActiveModeState(mode);
    if (mode) setPanelOpen(false);
  }, []);

  const value = useMemo<PlayModeContextValue>(
    () => ({
      boredOn,
      setBoredOn,
      panelOpen,
      openPanel,
      closePanel,
      activeMode,
      setActiveMode,
      fireEnabled: activeMode === "fire",
    }),
    [boredOn, setBoredOn, panelOpen, openPanel, closePanel, activeMode, setActiveMode]
  );

  return <PlayModeContext.Provider value={value}>{children}</PlayModeContext.Provider>;
}

export function usePlayMode() {
  const ctx = useContext(PlayModeContext);
  if (!ctx) {
    throw new Error("usePlayMode must be used within PlayModeProvider");
  }
  return ctx;
}
