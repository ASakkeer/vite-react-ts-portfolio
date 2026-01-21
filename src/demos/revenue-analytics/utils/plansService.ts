// Mock service layer simulating CRUD operations for subscription plans.
import rawPlans from "../data/plans.json";

export interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  maxUsers: number;
  status: "Active" | "Deprecated";
}

let plans: Plan[] = rawPlans;

const delay = (min = 300, max = 500) =>
  new Promise<void>((resolve) => setTimeout(resolve, Math.random() * (max - min) + min));

export async function fetchPlans(): Promise<Plan[]> {
  await delay();
  return [...plans];
}

export async function createPlan(input: Omit<Plan, "id">): Promise<Plan> {
  await delay();
  const id = input.name.toLowerCase().replace(/\s+/g, "-");
  const plan: Plan = { id, ...input };
  plans = [...plans, plan];
  return plan;
}

export async function updatePlan(id: string, input: Omit<Plan, "id">): Promise<Plan> {
  await delay();
  const existing = plans.find((plan) => plan.id === id);
  if (!existing) {
    throw new Error("Plan not found");
  }
  const updated: Plan = { id, ...input };
  plans = plans.map((plan) => (plan.id === id ? updated : plan));
  return updated;
}

export async function deletePlan(id: string): Promise<void> {
  await delay();
  plans = plans.filter((plan) => plan.id !== id);
}

