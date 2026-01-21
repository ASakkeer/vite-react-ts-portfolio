// Route-level page for managing subscription plans in the revenue analytics demo.
import type { FC, FormEvent } from "react";
import { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import type { Plan } from "../utils/plansService";
import { fetchPlans, createPlan, updatePlan, deletePlan } from "../utils/plansService";

type FormMode = "create" | "edit";

interface PlanFormState {
  name: string;
  monthlyPrice: string;
  maxUsers: string;
  status: "Active" | "Deprecated";
}

const emptyForm: PlanFormState = {
  name: "",
  monthlyPrice: "",
  maxUsers: "",
  status: "Active",
};

export const PlansManagementPage: FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<PlanFormState>(emptyForm);
  const [mode, setMode] = useState<FormMode>("create");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchPlans();
        setPlans(data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const startCreate = () => {
    setMode("create");
    setEditingId(null);
    setForm(emptyForm);
    setError(null);
    setSuccess(null);
  };

  const startEdit = (plan: Plan) => {
    setMode("edit");
    setEditingId(plan.id);
    setForm({
      name: plan.name,
      monthlyPrice: String(plan.monthlyPrice),
      maxUsers: String(plan.maxUsers),
      status: plan.status,
    });
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!form.name.trim()) {
      setError("Name is required.");
      return;
    }
    const monthlyPrice = Number(form.monthlyPrice);
    const maxUsers = Number(form.maxUsers);
    if (Number.isNaN(monthlyPrice) || monthlyPrice <= 0) {
      setError("Monthly price must be a positive number.");
      return;
    }
    if (Number.isNaN(maxUsers) || maxUsers <= 0) {
      setError("Max users must be a positive number.");
      return;
    }

    setSaving(true);
    try {
      if (mode === "create") {
        const created = await createPlan({
          name: form.name.trim(),
          monthlyPrice,
          maxUsers,
          status: form.status,
        });
        setPlans((current) => [...current, created]);
        setForm(emptyForm);
        setSuccess("Plan added.");
      } else if (mode === "edit" && editingId) {
        const updated = await updatePlan(editingId, {
          name: form.name.trim(),
          monthlyPrice,
          maxUsers,
          status: form.status,
        });
        setPlans((current) => current.map((plan) => (plan.id === updated.id ? updated : plan)));
        setSuccess("Plan updated.");
      }
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (plan: Plan) => {
    const confirmed = window.confirm(
      `Delete plan “${plan.name}”? This will remove it from the demo list.`,
    );
    if (!confirmed) return;
    setSaving(true);
    setSuccess(null);
    try {
      await deletePlan(plan.id);
      setPlans((current) => current.filter((item) => item.id !== plan.id));
      setSuccess("Plan deleted.");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Layout>
      <section className="space-y-6 bg-slate-50 py-4">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Manage Subscription Plans
          </h1>
          <p className="max-w-2xl text-sm text-slate-600 md:text-base">
            Lightweight admin experience for managing mocked subscription plans as part of the
            Revenue Analytics dashboard demo. All operations are simulated client-side.
          </p>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white/80 p-4">
          <header className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                {mode === "create" ? "Add Plan" : "Edit Plan"}
              </h2>
              <p className="text-xs text-slate-600">
                Define plan name, pricing, and limits. Changes affect only this demo session.
              </p>
            </div>
            {mode === "edit" && (
              <button
                type="button"
                onClick={startCreate}
                className="text-xs font-medium text-[#2563EB] underline-offset-2 hover:underline"
              >
                Cancel edit
              </button>
            )}
          </header>
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 md:grid-cols-4 md:items-end"
            noValidate
          >
            <div className="space-y-1">
              <label htmlFor="plan-name" className="text-xs font-medium text-slate-800">
                Name
              </label>
              <input
                id="plan-name"
                type="text"
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="plan-price" className="text-xs font-medium text-slate-800">
                Monthly price (USD)
              </label>
              <input
                id="plan-price"
                type="number"
                min={1}
                value={form.monthlyPrice}
                onChange={(event) =>
                  setForm((current) => ({ ...current, monthlyPrice: event.target.value }))
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="plan-max-users" className="text-xs font-medium text-slate-800">
                Max users
              </label>
              <input
                id="plan-max-users"
                type="number"
                min={1}
                value={form.maxUsers}
                onChange={(event) =>
                  setForm((current) => ({ ...current, maxUsers: event.target.value }))
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="plan-status" className="text-xs font-medium text-slate-800">
                Status
              </label>
              <select
                id="plan-status"
                value={form.status}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    status: event.target.value as Plan["status"],
                  }))
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
              >
                <option value="Active">Active</option>
                <option value="Deprecated">Deprecated</option>
              </select>
            </div>
            <div className="md:col-span-4 flex items-center justify-between pt-1 text-xs">
              <div className="space-y-1">
                {error && <div className="text-xs text-red-600">{error}</div>}
                {success && !error && (
                  <div className="text-xs text-emerald-600">{success}</div>
                )}
              </div>
              <button
                type="submit"
                disabled={saving}
                className="pressable inline-flex items-center justify-center rounded-full bg-[#2563EB] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#1d4ed8] disabled:opacity-60"
              >
                {saving ? "Saving..." : mode === "create" ? "Add Plan" : "Save changes"}
              </button>
            </div>
          </form>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white/80 p-4">
          <header className="mb-3 flex items-baseline justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Plans</h2>
              <p className="text-xs text-slate-600">
                Current subscription plans available in the mocked environment.
              </p>
            </div>
          </header>
          {loading ? (
            <p className="text-xs text-slate-600">Loading plans…</p>
          ) : plans.length === 0 ? (
            <p className="text-xs text-slate-600">No plans defined yet. Add a plan to get started.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm text-slate-700">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                    <th scope="col" className="px-3 py-2">
                      Plan Name
                    </th>
                    <th scope="col" className="px-3 py-2">
                      Monthly Price
                    </th>
                    <th scope="col" className="px-3 py-2">
                      Max Users
                    </th>
                    <th scope="col" className="px-3 py-2">
                      Status (Active / Deprecated)
                    </th>
                    <th scope="col" className="px-3 py-2 text-right">
                      Actions (Edit, Delete)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {plans.map((plan) => (
                    <tr key={plan.id} className="border-b border-slate-100">
                      <td className="px-3 py-2">{plan.name}</td>
                      <td className="px-3 py-2">${plan.monthlyPrice.toLocaleString("en-US")}</td>
                      <td className="px-3 py-2">{plan.maxUsers.toLocaleString("en-US")}</td>
                      <td className="px-3 py-2 text-xs uppercase tracking-wide text-slate-500">
                        {plan.status}
                      </td>
                      <td className="px-3 py-2 text-right text-xs">
                        <button
                          type="button"
                          onClick={() => startEdit(plan)}
                          className="mr-3 font-medium text-[#2563EB] underline-offset-2 hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(plan)}
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
      </section>
    </Layout>
  );
};

export default PlansManagementPage;

