import Link from "next/link";

export default function WorkFlowsLayout({ children }) {
    return (
      <div className="flex h-screen w-full"> 
        {/* Page Content */}
        <div className="flex-grow">
          {children}
        </div>
      </div>
    );
  }