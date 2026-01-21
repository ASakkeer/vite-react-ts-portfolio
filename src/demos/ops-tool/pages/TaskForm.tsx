// Task form component for creating and editing ops tasks.
import type { FC, FormEvent } from "react";
import type { TaskFormState } from "../hooks/useTasks";
import type { TaskStatus, TaskPriority } from "../utils/tasksService";

interface TaskFormProps {
  mode: "create" | "edit";
  form: TaskFormState;
  saving: boolean;
  error?: string | null;
  onChange: (next: TaskFormState) => void;
  onSubmit: (event: FormEvent) => void;
  onCancelEdit?: () => void;
}

export const TaskForm: FC<TaskFormProps> = ({
  mode,
  form,
  saving,
  error,
  onChange,
  onSubmit,
  onCancelEdit,
}) => {
  const setField = <K extends keyof TaskFormState>(key: K, value: TaskFormState[K]) => {
    onChange({ ...form, [key]: value });
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white/80 p-4">
      <header className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            {mode === "create" ? "Create task" : "Edit task"}
          </h2>
          <p className="text-xs text-slate-600">
            Capture a concise title, description, status, and priority for each ops task.
          </p>
        </div>
        {mode === "edit" && onCancelEdit && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="text-xs font-medium text-[#2563EB] underline-offset-2 hover:underline"
          >
            Cancel edit
          </button>
        )}
      </header>
      <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2" noValidate>
        <div className="space-y-1 md:col-span-2">
          <label htmlFor="task-title" className="text-xs font-medium text-slate-800">
            Title
          </label>
          <input
            id="task-title"
            type="text"
            value={form.title}
            onChange={(event) => setField("title", event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
          />
        </div>
        <div className="space-y-1 md:col-span-2">
          <label htmlFor="task-description" className="text-xs font-medium text-slate-800">
            Description
          </label>
          <textarea
            id="task-description"
            rows={3}
            value={form.description}
            onChange={(event) => setField("description", event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="task-status" className="text-xs font-medium text-slate-800">
            Status
          </label>
          <select
            id="task-status"
            value={form.status}
            onChange={(event) => setField("status", event.target.value as TaskStatus)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor="task-priority" className="text-xs font-medium text-slate-800">
            Priority
          </label>
          <select
            id="task-priority"
            value={form.priority}
            onChange={(event) => setField("priority", event.target.value as TaskPriority)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="md:col-span-2 flex items-center justify-between pt-1 text-xs">
          <div className="text-xs text-red-600">{error}</div>
          <button
            type="submit"
            disabled={saving}
            className="pressable inline-flex items-center justify-center rounded-full bg-[#2563EB] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#1d4ed8] disabled:opacity-60"
          >
            {saving ? "Saving..." : mode === "create" ? "Create task" : "Save changes"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default TaskForm;

