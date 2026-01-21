// Status badge component used across ops tool screens.
import type { FC } from "react";
import type { TaskStatus } from "../utils/tasksService";

interface StatusBadgeProps {
  status: TaskStatus;
}

export const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
  const config =
    status === "Open"
      ? { bg: "bg-sky-50", text: "text-sky-700", label: "Open" }
      : status === "In Progress"
        ? { bg: "bg-amber-50", text: "text-amber-700", label: "In Progress" }
        : { bg: "bg-emerald-50", text: "text-emerald-700", label: "Done" };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${config.bg} ${config.text}`}
    >
      {config.label}
    </span>
  );
};

export default StatusBadge;

