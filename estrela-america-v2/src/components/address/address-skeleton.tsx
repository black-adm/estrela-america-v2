export function AddressSkeleton() {
  return (
    <div className="w-full">
      <div className="max-w-sm rounded overflow-hidden animate-pulse">
        <div className="px-6 py-4">
          <div className="h-6 bg-gray-200 mb-2" />
          <div className="h-4 bg-gray-200 w-2/3" />
        </div>
        <div className="px-6 pt-2 pb-2">
          <div className="h-4 bg-gray-200 w-1/4 mb-2" />
          <div className="h-4 bg-gray-200 w-1/2" />
        </div>
      </div>
    </div>
  )
}
