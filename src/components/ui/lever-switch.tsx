import { cn } from "@/lib/utils";
import "@/components/ui/lever-switch.css";

export type LeverSwitchProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  id?: string;
  disabled?: boolean;
  "aria-label"?: string;
};

/**
 * Skeuomorphic lever toggle (Nicolas Jesenberger / @sanbronliong design).
 * Controlled via `checked` + `onCheckedChange` for app integration.
 * Entire control surface is clickable (not just the knob).
 */
export function LeverSwitch({
  checked,
  defaultChecked,
  onCheckedChange,
  className,
  id,
  disabled,
  "aria-label": ariaLabel = "Toggle",
}: LeverSwitchProps) {
  const isControlled = checked !== undefined;

  return (
    <label
      className={cn("lever-switch toggle-container", className)}
      data-no-burn=""
      data-lever-switch=""
    >
      <input
        id={id}
        className="toggle-input"
        type="checkbox"
        checked={isControlled ? checked : undefined}
        defaultChecked={!isControlled ? defaultChecked : undefined}
        disabled={disabled}
        aria-label={ariaLabel}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
      />
      <div className="toggle-handle-wrapper" aria-hidden>
        <div className="toggle-handle">
          <div className="toggle-handle-knob" />
          <div className="toggle-handle-bar-wrapper">
            <div className="toggle-handle-bar" />
          </div>
        </div>
      </div>
      <div className="toggle-base" aria-hidden>
        <div className="toggle-base-inside" />
      </div>
    </label>
  );
}

/** Alias matching the upstream component export name */
export const Component = LeverSwitch;
