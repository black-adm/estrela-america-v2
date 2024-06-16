export function ProductCardSkeleton() {
  return (
    <div className="w-screen">
      <section className="bg-white max-w-4xl">
        <div className="container px-6 mx-auto animate-pulse">
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            <div className="w-full">
              <div className="w-52 h-64 bg-gray-300 rounded-lg" />
              <h1 className="w-32 h-4 mt-4 bg-gray-200 rounded-lg" />
              <p className="w-24 h-4 mt-2 bg-gray-200 rounded-lg" />
            </div>
            <div className="w-full">
              <div className="w-52 h-64 bg-gray-300 rounded-lg" />
              <h1 className="w-32 h-4 mt-4 bg-gray-200 rounded-lg" />
              <p className="w-24 h-4 mt-2 bg-gray-200 rounded-lg" />
            </div>
            <div className="w-full">
              <div className="w-52 h-64 bg-gray-300 rounded-lg" />
              <h1 className="w-32 h-4 mt-4 bg-gray-200 rounded-lg" />
              <p className="w-24 h-4 mt-2 bg-gray-200 rounded-lg" />
            </div>
            <div className="w-full">
              <div className="w-52 h-64 bg-gray-300 rounded-lg" />
              <h1 className="w-32 h-4 mt-4 bg-gray-200 rounded-lg" />
              <p className="w-24 h-4 mt-2 bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
