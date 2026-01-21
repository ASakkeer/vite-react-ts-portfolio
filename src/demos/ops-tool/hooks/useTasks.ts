// Hook for loading and mutating ops tasks via the mock service layer.
import { useEffect, useState } from "react";
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
  type Task,
  type TaskStatus,
  type TaskPriority,
} from "../utils/tasksService";

export interface TaskFormState {
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
}

export const emptyTaskForm: TaskFormState = {
  title: "",
  description: "",
  status: "Open",
  priority: "Medium",
};

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load tasks.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const create = async (input: TaskFormState) => {
    setSaving(true);
    setError(null);
    try {
      const created = await createTask(input);
      setTasks((current) => [created, ...current]);
      return created;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create task.");
      throw err;
    } finally {
      setSaving(false);
    }
  };

  const update = async (id: string, input: TaskFormState) => {
    setSaving(true);
    setError(null);
    try {
      const updated = await updateTask(id, input);
      setTasks((current) => current.map((task) => (task.id === id ? updated : task)));
      return updated;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update task.");
      throw err;
    } finally {
      setSaving(false);
    }
  };

  const remove = async (id: string) => {
    setSaving(true);
    setError(null);
    try {
      await deleteTask(id);
      setTasks((current) => current.filter((task) => task.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete task.");
      throw err;
    } finally {
      setSaving(false);
    }
  };

  return {
    tasks,
    loading,
    saving,
    error,
    create,
    update,
    remove,
  };
};

