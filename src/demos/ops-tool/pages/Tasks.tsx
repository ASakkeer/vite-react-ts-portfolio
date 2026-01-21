// Tasks listing page section with filters and table layout.
import type { FC } from "react";
import type { Task } from "../utils/tasksService";
import StatusBadge from "../components/StatusBadge";
import EmptyState from "../components/EmptyState";

interface TasksProps {
  tasks: Task[];
  selectedStatus: "All" | Task["status"];
  onStatusFilterChange: (status: "All" | Task["status"]) => void;
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
}

export const Tasks: FC<TasksProps> = ({
  tasks,
  selectedStatus,
  onStatusFilterChange,
  onEdit,
  onDelete,
}) => {
  const filteredTasks =
    selectedStatus === "All" ? tasks : tasks.filter((task) => task.status === selectedStatus);

  return (
    <section className="space-y-3">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h2 className="text-sm font-semibold text-slate-900">Tasks</h2>
        <div className="flex flex-wrap gap-2 text-xs">
          {["All", "Open", "In Progress", "Done"].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() =>
                onStatusFilterChange(value as "All" | Task["status"])
              }
              className={`rounded-full border px-3 py-1 font-medium ${
                selectedStatus === value
                  ? "border-[#2563EB] bg-[#2563EB]/10 text-[#2563EB]"
                  : "border-slate-300 bg-white text-slate-700"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      {filteredTasks.length === 0 ? (
        <EmptyState
          title="No tasks match the selected status."
          description="Try switching to a different status or create a new task."
        />
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white/80">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                <th scope="col" className="px-3 py-2">
                  Title
                </th>
                <th scope="col" className="px-3 py-2">
                  Status
                </th>
                <th scope="col" className="px-3 py-2">
                  Priority
                </th>
                <th scope="col" className="px-3 py-2 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <tr key={task.id} className="border-b border-slate-100">
                  <td className="px-3 py-2 align-top">
                    <p className="text-sm font-semibold text-slate-900">
                      {task.title}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-600 line-clamp-2">
                      {task.description}
                    </p>
                  </td>
                  <td className="px-3 py-2 align-top">
                    <StatusBadge status={task.status} />
                  </td>
                  <td className="px-3 py-2 align-top text-xs text-slate-700">
                    {task.priority}
                  </td>
                  <td className="px-3 py-2 align-top text-right text-xs">
                    <button
                      type="button"
                      onClick={() => onEdit(task)}
                      className="mr-3 font-medium text-[#2563EB] underline-offset-2 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete(task)}
                      className="font-medium text-red-600 underline-offset-2 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Tasks;

