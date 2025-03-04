export default function CallLayout({ children }) {

    return (
      <div className="flex w-full">
        {/* Page Content */}
        <div className="flex-grow p-6">{children}</div>
      </div>
    );
  }
  