// import React from 'react'

function Header() {
  return (
    <div className="bg-white col-span-full p-5 flex justify-between px-10">
      <h1 className="text-gray-600 flex flex-col text-center">
        <span className="uppercase text-base font-semibold ">
          Green land capital
        </span>
        <span className="text-sm text-gray-500 leading-3">soul of soil</span>
      </h1>
      <button className="text-blue-600 text-base border-2 rounded-full px-10 border-blue-500">
        Save as Draft
      </button>
    </div>
  );
}

export default Header;

