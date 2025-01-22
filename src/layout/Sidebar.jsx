// import React from 'react'

function Sidebar() {
  return (
    <div className="bg-white ml-5 rounded-md p-5 flex flex-col items-center">
      <button className="flex gap-2 items-center self-start text-gray-600">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </span>
        <span>Dashboard</span>
      </button>
      <div className="flex flex-col text-center mt-5 border-t-2 w-full pt-10 gap-1">
        <span className="text-sm font-thin">Farmland ID:</span>
        <span className="text-2xl">GLCSOS 01</span>
      </div>
      <div className="w-28 h-28 bg-gray-200 mt-32"></div>
      <div className="mt-16 flex flex-col gap-2">
        <button className="flex items-center gap-4 p-3 px-5 bg-gray-200 rounded-full">
          <span className="w-4 h-4 rounded-full bg-blue-500 border block after:after-element relative after:rounded-full after:top-0 after:left-0 after:scale-150 after:border after:border-blue-500"></span>
          <span className="text-blue-500 text-sm">Land & boundaries</span>
        </button>
        <span className="w-[2px] h-8 bg-gray-400 block self-center"></span>
        <button className="flex items-center gap-4 p-3 px-5 bg-gray-200 rounded-full border border-gray-500 w-full">
          <span className="w-4 h-4 rounded-full bg-gray-400 border block after:after-element relative after:rounded-full after:top-0 after:left-0 after:scale-150 after:border after:border-gray-400"></span>
          <span className="text-gray-500 text-sm capitalize">valuation</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

