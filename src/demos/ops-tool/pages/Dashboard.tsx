// Route-level dashboard page for the SaaS Ops Tool demo.
import type { FC, FormEvent } from "react";
import { useState } from "react";
import Layout from "../../../components/layout/Layout";
import BackButton from "../../../components/BackButton";
import DemoDisclaimer from "../../../components/DemoDisclaimer";
import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";
import Tasks from "./Tasks";
import TaskForm from "./TaskForm";
import { useTasks, emptyTaskForm, type TaskFormState } from "../hooks/useTasks";
import type { Task } from "../utils/tasksService";

export const OpsToolDashboardPage: FC = () => {
  const { tasks, loading, saving, error, create, update, remove } = useTasks();
  const [statusFilter, setStatusFilter] = useState<"All" | Task["status"]>("All");
  const [formMode, setFormMode] = useState<"create" | "edit">("create");
  const [formState, setFormState] = useState<TaskFormState>(emptyTaskForm);
  const [editingId, setEditingId] = useState<string | null>(null);

  const total = tasks.length;
  const open = tasks.filter((task) => task.status === "Open").length;
  const inProgress = tasks.filter((task) => task.status === "In Progress").length;
  const done = tasks.filter((task) => task.status === "Done").length;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!formState.title.trim()) {
      return;
    }
    if (formMode === "create") {
      await create({ ...formState, title: formState.title.trim() });
      setFormState(emptyTaskForm);
    } else if (formMode === "edit" && editingId) {
      await update(editingId, { ...formState, title: formState.title.trim() });
    }
    setFormMode("create");
    setEditingId(null);
  };

  const handleEdit = (task: Task) => {
    setFormMode("edit");
    setEditingId(task.id);
    setFormState({
      title: task.title,
      description: task.description,
      status: task.status,
      priority: task.priority,
    });
  };

  const handleDelete = async (task: Task) => {
    const confirmed = window.confirm(
      `Delete task “${task.title}”? This will remove it from the demo list.`,
    );
    if (!confirmed) return;
    await remove(task.id);
  };

  const handleCancelEdit = () => {
    setFormMode("create");
    setEditingId(null);
    setFormState(emptyTaskForm);
  };

  return (
    <Layout>
      <section className="space-y-6 bg-slate-50 py-4">
        <div className="space-y-2">
          <BackButton fallbackPath="/projects" label="Back to projects" />
        </div>
        <PageHeader
          title="SaaS Ops Tool (Preview)"
          description="Internal operations dashboard for tracking day-to-day tasks across onboarding, billing, and cleanup. All data and workflows are simulated client-side. This is a preview demo showcasing workflow patterns and reusable components. Not a full production system."
          badge={
            <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
              Preview · Internal Tooling
            </span>
          }
        />

        <section className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Total tasks
            </p>
            <p className="mt-2 text-xl font-semibold text-slate-900">{total}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Open
            </p>
            <p className="mt-2 text-xl font-semibold text-slate-900">{open}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              In Progress
            </p>
            <p className="mt-2 text-xl font-semibold text-slate-900">{inProgress}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Completed
            </p>
            <p className="mt-2 text-xl font-semibold text-slate-900">{done}</p>
          </div>
        </section>

        {loading ? (
          <p className="text-xs text-slate-600">Loading tasks…</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <Tasks
              tasks={tasks}
              selectedStatus={statusFilter}
              onStatusFilterChange={setStatusFilter}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
            <TaskForm
              mode={formMode}
              form={formState}
              saving={saving}
              error={error}
              onChange={setFormState}
              onSubmit={handleSubmit}
              onCancelEdit={handleCancelEdit}
            />
          </div>
        )}

        <DemoDisclaimer />
      </section>
    </Layout>
  );
};

export default OpsToolDashboardPage;

