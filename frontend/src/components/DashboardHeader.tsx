export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between border-b border-slate-700 bg-slate-950 px-8 py-5">
      <h1 className="text-2xl font-bold text-white">
        Enterprise AI Agent Platform
      </h1>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none focus:border-blue-500"
        />

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
          H
        </div>
      </div>
    </header>
  );
}