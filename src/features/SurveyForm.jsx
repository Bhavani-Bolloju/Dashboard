// import React from "react";

import FileUpload from "../components/FileUpload";

function SurveyForm() {
  return (
    <form>
      <div className="mb-10">
        <p className="font-semibold capitalize mb-3">
          select survey report type
        </p>
        <div className="flex items-center gap-2 mb-2">
          <input type="radio" id="private" name="survey" />
          <label className="capitalize font-medium" for="private">
            private survey report
          </label>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <input type="radio" id="gov" name="survey" checked />
          <label className="capitalize font-medium" for="gov">
            government survey report
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input type="radio" id="both" name="survey" />
          <label className="capitalize font-medium" for="both">
            both survey report
          </label>
        </div>
      </div>
      <div className="grid grid-cols-form-layout gap-x-10">
        <p className="font-semibold capitalize mb-3 col-span-full">
          private survey report
        </p>
        <div>
          <p className="font-medium capitalize mb-3">upload file:</p>
          <FileUpload />
        </div>
        <div>
          <p className="font-medium capitalize mb-3">comments:</p>
          <textarea
            className="border bg-indigo-100 border-indigo-500 flex items-center justify-center h-36 rounded-md w-full outline-none p-5 placeholder:capitalize placeholder:font-medium resize-none"
            placeholder="Add your comments"
          ></textarea>
        </div>
        <p className="font-semibold capitalize mb-3 col-span-full mt-8">
          government survey report
        </p>
        <div>
          <p className="font-medium capitalize mb-3">upload file:</p>
          <FileUpload />
        </div>
        <div>
          <p className="font-medium capitalize mb-3">comments:</p>
          <textarea
            className="border bg-indigo-100 border-indigo-500 flex items-center justify-center h-36 rounded-md w-full outline-none p-5 placeholder:capitalize placeholder:font-medium resize-none"
            placeholder="Add your comments"
          ></textarea>
        </div>

        <div className="flex gap-3 col-span-full justify-end w-full mt-5">
          <button className="px-8 p-1 capitalize rounded-full border  border-gray-500 text-gray-500">
            edit
          </button>
          <button className="px-8 p-1 capitalize text-white bg-indigo-400 rounded-full">
            save
          </button>
        </div>
      </div>
    </form>
  );
}

export default SurveyForm;

