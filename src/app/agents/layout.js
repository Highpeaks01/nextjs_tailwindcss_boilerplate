export default function AgentsLayout({ children }) {
    return (
      <div className="flex h-screen w-full">
        {/* Accessory Sidebar (Specific to Dashboard) */}
        <aside className="w-48 border-l bg-theme shadow-md p-4">
          <h2 className="text-lg font-semibold">Agents Sidebar</h2>
          <ul>
            <li><a href="/dashboard/reports" className="block p-2">Reports</a></li>
            <li><a href="/dashboard/stats" className="block p-2">Statistics</a></li>
          </ul>
        </aside>
  
        {/* Page Content */}
        <div className="flex-grow p-6">{children}</div>
      </div>
    );
  }
  