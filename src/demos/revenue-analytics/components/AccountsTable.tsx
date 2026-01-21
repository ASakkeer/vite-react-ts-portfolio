// Revenue by account table with simple client-side sorting and pagination.
import { useState } from "react";
import type { FC } from "react";
import accounts from "../data/accounts.json";

interface AccountsTableProps {
  pageSize?: number;
}

type SortKey = "name" | "plan" | "mrr";

export const AccountsTable: FC<AccountsTableProps> = ({ pageSize = 5 }) => {
  const [page, setPage] = useState(0);
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const sorted = [...accounts].sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];
    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    }
    const aStr = String(aValue);
    const bStr = String(bValue);
    return sortDirection === "asc" ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
  });

  const totalPages = Math.ceil(sorted.length / pageSize);
  const start = page * pageSize;
  const pageItems = sorted.slice(start, start + pageSize);

  const handleSort = (key: SortKey) => {
    setPage(0);
    setSortKey(key);
    setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white/80 p-4">
      <header className="mb-3 flex items-baseline justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Revenue by account</h3>
          <p className="text-xs text-slate-600">
            High-level view of MRR by customer and plan, based on mocked data.
          </p>
        </div>
      </header>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-slate-700">
          <thead>
            <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
              <th
                scope="col"
                className="cursor-pointer px-3 py-2"
                onClick={() => handleSort("name")}
              >
                Account
              </th>
              <th
                scope="col"
                className="cursor-pointer px-3 py-2"
                onClick={() => handleSort("plan")}
              >
                Plan
              </th>
              <th
                scope="col"
                className="cursor-pointer px-3 py-2 text-right"
                onClick={() => handleSort("mrr")}
              >
                MRR
              </th>
              <th scope="col" className="px-3 py-2 text-right">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((account) => (
              <tr key={account.id} className="border-b border-slate-100">
                <td className="px-3 py-2">{account.name}</td>
                <td className="px-3 py-2">{account.plan}</td>
                <td className="px-3 py-2 text-right">
                  ${account.mrr.toLocaleString("en-US")}
                </td>
                <td className="px-3 py-2 text-right text-xs uppercase tracking-wide text-slate-500">
                  {account.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-slate-600">
        <p>
          Page {page + 1} of {totalPages}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(0, current - 1))}
            disabled={page === 0}
            className="rounded-full border border-slate-300 px-3 py-1 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(totalPages - 1, current + 1))}
            disabled={page >= totalPages - 1}
            className="rounded-full border border-slate-300 px-3 py-1 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccountsTable;

