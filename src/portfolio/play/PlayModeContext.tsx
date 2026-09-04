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
  boredOn: boolean;
  setBoredOn: (on: boolean) => void;
  panelOpen: boolean;
  openPanel: () => void;
  closePanel: () => void;
  /** How-to demo after selecting a mode */
  demoOpen: boolean;
  closeDemo: () => void;
  activeMode: PlayModeId | null;
  setActiveMode: (mode: PlayModeId | null) => void;
  fireEnabled: boolean;
};

const PlayModeContext = createContext<PlayModeContextValue | null>(null);

export function PlayModeProvider({ children }: { children: ReactNode }) {
  const [boredOn, setBoredOnState] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [activeMode, setActiveModeState] = useState<PlayModeId | null>(null);

  const setBoredOn = useCallback((on: boolean) => {
    setBoredOnState(on);
    if (on) {
      setPanelOpen(true);
      setDemoOpen(false);
    } else {
      setPanelOpen(false);
      setDemoOpen(false);
      setActiveModeState(null);
    }
  }, []);

  const openPanel = useCallback(() => {
    setDemoOpen(false);
    setPanelOpen(true);
  }, []);

  const closePanel = useCallback(() => {
    setPanelOpen(false);
    setActiveModeState((mode) => {
      if (mode === null) {
        setBoredOnState(false);
      }
      return mode;
    });
  }, []);

  const closeDemo = useCallback(() => {
    setDemoOpen(false);
  }, []);

  const setActiveMode = useCallback((mode: PlayModeId | null) => {
    setActiveModeState(mode);
    if (mode) {
      setPanelOpen(false);
      setDemoOpen(true);
    } else {
      setDemoOpen(false);
    }
  }, []);

  const value = useMemo<PlayModeContextValue>(
    () => ({
      boredOn,
      setBoredOn,
      panelOpen,
      openPanel,
      closePanel,
      demoOpen,
      closeDemo,
      activeMode,
      setActiveMode,
      fireEnabled: activeMode === "fire",
    }),
    [
      boredOn,
      setBoredOn,
      panelOpen,
      openPanel,
      closePanel,
      demoOpen,
      closeDemo,
      activeMode,
      setActiveMode,
    ]
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
