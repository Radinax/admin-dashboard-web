import Navbar from "../navbar/navbar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Navbar />
      {children}
    </div>
  );
}
