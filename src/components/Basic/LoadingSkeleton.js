export default function LoadingSkeleton() {
    return (
      <div className="p-4 space-y-4">
        <div className="h-6 w-3/4 bg-gray-200 animate-pulse rounded" />
        <div className="h-4 w-5/6 bg-gray-200 animate-pulse rounded" />
        <div className="h-4 w-2/3 bg-gray-200 animate-pulse rounded" />
        <div className="h-32 w-full bg-gray-200 animate-pulse rounded-lg" />
      </div>
    );
  }
  