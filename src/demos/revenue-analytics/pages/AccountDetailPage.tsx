// Route-level page for viewing a single account in the revenue analytics demo.
import type { FC } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../components/layout/Layout";
import BackButton from "../../../components/BackButton";
import DemoDisclaimer from "../../../components/DemoDisclaimer";
import accounts from "../data/accounts.json";
import accountMetrics from "../data/account-metrics.json";
import MrrLineChart from "../components/MrrLineChart";

interface RouteParams {
  accountId: string;
}

export const AccountDetailsPage: FC = () => {
  const { accountId } = useParams<RouteParams>();
  const account = accounts.find((item) => item.id === accountId);
  const metrics = accountMetrics.find((item) => item.id === accountId);
  const [actionMessage, setActionMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "billing" | "activity">("overview");

  const statusLabel = account
    ? account.status === "churned"
      ? "Churned"
      : "Active"
    : "Unknown";

  const churnRisk = metrics?.churnRisk ?? "Unknown";

  const invoices =
    accountId === "acme-analytics"
      ? [
          { id: "inv-001", date: "2025-05-01", amount: 2200, status: "Paid" },
          { id: "inv-002", date: "2025-04-01", amount: 2150, status: "Paid" },
        ]
      : [
          { id: "inv-101", date: "2025-05-01", amount: account?.mrr ?? 0, status: "Paid" },
          { id: "inv-102", date: "2025-04-01", amount: account?.mrr ?? 0, status: "Paid" },
        ];

  const activity =
    accountId === "lighthouse-ops"
      ? [
          { id: "act-1", date: "2025-05-15", description: "Churn risk flagged as High." },
          { id: "act-2", date: "2025-04-30", description: "Plan downgraded to Basic." },
          { id: "act-3", date: "2025-04-01", description: "Invoice generated for April cycle." },
        ]
      : [
          { id: "act-1", date: "2025-05-10", description: "Invoice generated for May cycle." },
          { id: "act-2", date: "2025-04-10", description: "Invoice generated for April cycle." },
          { id: "act-3", date: "2025-03-25", description: "Plan updated via admin console." },
        ];

  return (
    <Layout>
      <section className="space-y-6 bg-slate-50 py-4">
        {/* Account Header */}
        <header className="space-y-3 rounded-2xl border border-slate-200 bg-white/80 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <BackButton fallbackPath="/projects" label="Back to projects" />
              <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                {account ? account.name : "Account not found"}
              </h1>
              {account && (
                <p className="mt-1 max-w-2xl text-sm text-slate-600 md:text-base">
                  Mocked account in the revenue analytics demo, showing plan, status, MRR, and a
                  simple trend view for illustration purposes only.
                </p>
              )}
            </div>
            {account && (
              <div className="flex flex-col items-end gap-2 text-xs">
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-semibold uppercase tracking-wide text-slate-700">
                  Plan: {account.plan}
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-semibold uppercase tracking-wide text-slate-700">
                  Status: {statusLabel}
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-semibold uppercase tracking-wide text-slate-700">
                  MRR: ${account.mrr.toLocaleString("en-US")}
                </span>
              </div>
            )}
          </div>
        </header>

        {/* Tabs */}
        <nav className="flex gap-4 border-b border-slate-200 text-xs font-medium text-slate-600">
          {[
            { id: "overview" as const, label: "Overview" },
            { id: "billing" as const, label: "Billing" },
            { id: "activity" as const, label: "Activity" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`border-b-2 px-1 pb-2 ${
                activeTab === tab.id
                  ? "border-[#2563EB] text-[#2563EB]"
                  : "border-transparent hover:border-slate-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Tab content */}
        {activeTab === "overview" && (
          <>
            {account ? (
              <section className="grid gap-4 md:grid-cols-3">
                <article className="rounded-2xl border border-slate-200 bg-white/80 p-4">
                  <h2 className="text-sm font-semibold text-slate-900">Account summary</h2>
                  <dl className="mt-2 space-y-1 text-sm text-slate-700">
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Plan</dt>
                      <dd className="font-medium text-slate-900">{account.plan}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Status</dt>
                      <dd className="font-medium text-slate-900">{statusLabel}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Current MRR</dt>
                      <dd className="font-medium text-slate-900">
                        ${account.mrr.toLocaleString("en-US")}
                      </dd>
                    </div>
                  </dl>
                </article>
                <article className="rounded-2xl border border-slate-200 bg-white/80 p-4">
                  <h2 className="text-sm font-semibold text-slate-900">Churn risk (mocked)</h2>
                  <p className="mt-2 text-sm text-slate-700">
                    This is a simplified, mocked churn risk indicator based on the sample trend
                    data, not a real model.
                  </p>
                  <p className="mt-3 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
                    Risk level: {churnRisk}
                  </p>
                </article>
              </section>
            ) : (
              <section className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm text-slate-700">
                <p>This account could not be found in the mocked dataset.</p>
              </section>
            )}

            {metrics && <MrrLineChart data={metrics.mrrSeries} />}
          </>
        )}

        {activeTab === "billing" && (
          <section className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm text-slate-700">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">Billing history (mocked)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm text-slate-700">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                    <th scope="col" className="px-3 py-2">
                      Invoice
                    </th>
                    <th scope="col" className="px-3 py-2">
                      Date
                    </th>
                    <th scope="col" className="px-3 py-2 text-right">
                      Amount
                    </th>
                    <th scope="col" className="px-3 py-2 text-right">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b border-slate-100">
                      <td className="px-3 py-2">{invoice.id}</td>
                      <td className="px-3 py-2">{invoice.date}</td>
                      <td className="px-3 py-2 text-right">
                        ${invoice.amount.toLocaleString("en-US")}
                      </td>
                      <td className="px-3 py-2 text-right text-xs uppercase tracking-wide text-slate-500">
                        {invoice.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeTab === "activity" && (
          <section className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm text-slate-700">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">Recent activity (mocked)</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              {activity.map((item) => (
                <li key={item.id} className="flex items-baseline gap-3">
                  <span className="text-xs font-medium text-slate-500">{item.date}</span>
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {account && (
          <section className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm text-slate-700">
            <h2 className="mb-2 text-sm font-semibold text-slate-900">Actions (demo only)</h2>
            <p className="mb-3 text-xs text-slate-500">
              These actions simulate common account workflows in an analytics tool. They do not
              change any real data.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                type="button"
                className="pressable inline-flex items-center justify-center rounded-full bg-[#2563EB] px-4 py-1.5 font-semibold text-white shadow-sm hover:bg-[#1d4ed8]"
                onClick={() =>
                  setActionMessage(`Plan upgrade initiated for “${account.name}” (demo only).`)
                }
              >
                Upgrade Plan
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-1.5 font-semibold text-slate-800 hover:bg-slate-50"
                onClick={() =>
                  setActionMessage(`Account “${account.name}” marked as at risk (demo only).`)
                }
              >
                Mark as At Risk
              </button>
            </div>
            {actionMessage && (
              <p className="mt-3 text-xs text-slate-600" role="status">
                {actionMessage}
              </p>
            )}
          </section>
        )}

        <DemoDisclaimer />
      </section>
    </Layout>
  );
};

export default AccountDetailsPage;

