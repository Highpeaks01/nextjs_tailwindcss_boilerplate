export default function CallsLayout({ children }) {
    return (
      <div className="flex h-screen w-full">
        {/* Page Content */}
        <div className="flex-grow p-6">
          {children}
        </div>
      </div>
    );
  }
  