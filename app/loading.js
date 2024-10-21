'use client'

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-24 w-24 border-8 border-t-8 border-orange-500 border-t-transparent"></div>
      <h2 className="mt-4 text-2xl text-gray-800 font-semibold">در حال بارگذاری...</h2>
    </div>
  );
};

export default Loading;