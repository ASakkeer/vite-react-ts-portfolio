import { LeverSwitch } from "@/components/ui/lever-switch";
import { usePlayMode } from "@/portfolio/play/PlayModeContext";
import "@/portfolio/styles/bored-toggle.css";

export function BoredToggle() {
  const { boredOn, setBoredOn, fireEnabled, openPanel } = usePlayMode();

  return (
    <div className="fixed bottom-5 right-5 z-[130] flex flex-col items-end gap-2">
      {boredOn && fireEnabled && (
        <button
          type="button"
          data-no-burn=""
          onClick={openPanel}
          className="font-mono text-xs uppercase tracking-[0.22em] text-[#FF494A] hover:text-white transition-colors px-2 py-1"
        >
          Modes
        </button>
      )}
      <div
        data-no-burn=""
        data-bored-toggle=""
        className={["bored-panel", boredOn ? "is-on" : ""].filter(Boolean).join(" ")}
      >
        <span className="bored-panel__label">Bored ?</span>
        <div className="bored-panel__lever">
          <LeverSwitch
            checked={boredOn}
            onCheckedChange={setBoredOn}
            aria-label="Bored mode"
          />
        </div>
      </div>
    </div>
  );
}
