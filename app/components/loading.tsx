export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="container mx-auto px-4 min-h-screen">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full pt-10">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4 py-4 bg-gray-200 w-1/3 h-10 animate-pulse"></h3>
            <div className="flex flex-wrap -mx-2">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-4 mr-3"
                >
                  <div className="shadow-md p-10 h-full flex flex-col bg-[#ebe8de] rounded-lg">
                    <h4 className="text-lg font-bold mb-2 bg-gray-300 w-3/4 h-6 animate-pulse"></h4>
                    <p className="mb-4 flex-grow bg-gray-200 w-full h-16 animate-pulse"></p>
                    <div className="w-full h-48 bg-gray-300 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
