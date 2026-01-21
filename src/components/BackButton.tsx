// Reusable back button that prefers browser history and falls back to a parent route.
import type { FC } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  fallbackPath?: string;
  label?: string;
}

export const BackButton: FC<BackButtonProps> = ({
  fallbackPath = "/projects",
  label = "Back",
}) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    const state = window.history.state as { idx?: number } | null;
    const canGoBack = typeof state?.idx === "number" && state.idx > 0;

    if (canGoBack) {
      navigate(-1);
    } else {
      navigate(fallbackPath);
    }
  }, [fallbackPath, navigate]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
      aria-label={label}
    >
      <span aria-hidden="true">←</span>
      <span>{label}</span>
    </button>
  );
};

export default BackButton;

