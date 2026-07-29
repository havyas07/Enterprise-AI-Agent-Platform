import Link from "next/link";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "AI Agents",
    href: "/dashboard/agents",
  },
  {
    name: "Knowledge Base",
    href: "/dashboard/knowledge",
  },
  {
    name: "Workflows",
    href: "/dashboard/workflows",
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-64 border-r border-slate-700 bg-slate-900 p-6">
      <h2 className="mb-8 text-2xl font-bold text-white">
        EAAP
      </h2>

      <nav>
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}