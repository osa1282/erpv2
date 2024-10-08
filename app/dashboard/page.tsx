import { Topbar } from '@/components/topbar';
import { Sidebar } from '@/components/sidebar';
import { DashboardContent } from '@/components/dashboard-content';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}