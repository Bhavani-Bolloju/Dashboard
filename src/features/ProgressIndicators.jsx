// import React from 'react'

function ProgressIndicators() {
  const btnClass = "flex items-center gap-2 p-2 px-4 border rounded-full";

  const complete = `${btnClass} bg-green-100 border-green-300 `;
  const current = `${btnClass} bg-blue-200`;
  const incomplete = `${btnClass} bg-white border-gray-500`;

  return (
    <div className="flex items-center flex-wrap gap-3 border-b pb-5 mb-10">
      <button className={complete}>
        <span className="w-5 h-5 rounded-full bg-green-500 border block  relative after:after-element-tick after:content-['\2713'] after:text-white after:top-0 after:left-0 after:text-xs after:font-bold"></span>
        <span className="text-green-600 text-sm">Land images</span>
      </button>
      <button className={complete}>
        <span className="w-5 h-5 rounded-full bg-green-500 border block  relative after:after-element-tick"></span>
        <span className="text-green-600 text-sm">
          Landscape view of farmland
        </span>
      </button>
      <button className="flex items-center gap-2 p-2 px-4 bg-green-100 rounded-full border-2 border-green-300">
        <span className="w-5 h-5 rounded-full bg-green-500 border block  relative after:after-element-tick"></span>
        <span className="text-green-600 text-sm">shape of the land</span>
      </button>
      <button className="flex items-center gap-2 p-2 px-4 bg-green-100 rounded-full border-2 border-green-300">
        <span className="w-5 h-5 rounded-full bg-green-500 border block  relative after:after-element-tick "></span>
        <span className="text-green-600 text-sm">
          water and electricity facility
        </span>
      </button>
      <button className="flex items-center gap-2 p-2 px-4 bg-green-100 rounded-full border-2 border-green-300">
        <span className="w-5 h-5 rounded-full bg-green-500 border block  relative after:after-element-tick "></span>

        <span className="text-green-600 text-sm">master plan</span>
      </button>
      <button className={current}>
        <span className="w-4 h-4 rounded-full bg-indigo-500 border block after:after-element relative"></span>
        <span className="text-blue-500 text-sm">survey report</span>
      </button>
      <button className={incomplete}>
        <span className="w-4 h-4 rounded-full relative block after:after-incomplete"></span>
        <span className="text-sm">East boundaries</span>
      </button>
      <button className={incomplete}>
        <span className="w-4 h-4 rounded-full relative block after:after-incomplete"></span>
        <span className="text-sm">West boundaries</span>
      </button>
      <button className={incomplete}>
        <span className="w-4 h-4 rounded-full relative block after:after-incomplete"></span>
        <span className="text-sm">North boundaries</span>
      </button>
      <button className={incomplete}>
        <span className="w-4 h-4 rounded-full relative block after:after-incomplete"></span>
        <span className="text-sm">South boundaries</span>
      </button>
    </div>
  );
}

export default ProgressIndicators;

