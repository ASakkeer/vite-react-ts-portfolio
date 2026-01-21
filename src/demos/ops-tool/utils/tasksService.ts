// Mock service layer simulating CRUD operations for ops tasks.
import rawTasks from "../data/tasks.json";

export type TaskStatus = "Open" | "In Progress" | "Done";
export type TaskPriority = "Low" | "Medium" | "High";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
}

let tasks: Task[] = rawTasks;

const delay = (min = 300, max = 500) =>
  new Promise<void>((resolve) => setTimeout(resolve, Math.random() * (max - min) + min));

export async function fetchTasks(): Promise<Task[]> {
  await delay();
  return [...tasks];
}

export async function createTask(input: Omit<Task, "id">): Promise<Task> {
  await delay();
  const id = `task-${Date.now()}`;
  const task: Task = { id, ...input };
  tasks = [task, ...tasks];
  return task;
}

export async function updateTask(id: string, input: Omit<Task, "id">): Promise<Task> {
  await delay();
  const existing = tasks.find((task) => task.id === id);
  if (!existing) {
    throw new Error("Task not found");
  }
  const updated: Task = { id, ...input };
  tasks = tasks.map((task) => (task.id === id ? updated : task));
  return updated;
}

export async function deleteTask(id: string): Promise<void> {
  await delay();
  tasks = tasks.filter((task) => task.id !== id);
}

