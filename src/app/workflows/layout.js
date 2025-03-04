import Link from "next/link";

export default function WorkFlowsLayout({ children }) {
  return (
    <div className="flex h-screen w-full">
      {/* Accessory Sidebar (Specific to Dashboard) */}
      <aside className="w-48 border-l bg-theme shadow-md p-4">
        <h2 className="text-lg font-semibold">Workflows</h2>
        <ul>
          <li><Link href="/" className="block p-2">Go Back</Link></li>
          <li><Link href="/dashboard/reports" className="block p-2">Reports</Link></li>
          <li><Link href="/dashboard/stats" className="block p-2">Statistics</Link></li>
        </ul>
      </aside>

      {/* Page Content */}
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
}