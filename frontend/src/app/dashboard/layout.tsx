import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <section className="flex flex-1 flex-col">
        <DashboardHeader />

        <main className="flex-1 p-8">
          {children}
        </main>
      </section>
    </main>
  );
}