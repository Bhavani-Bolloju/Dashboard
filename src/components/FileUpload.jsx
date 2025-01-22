import { useDropzone } from "react-dropzone";

const FileUpload = function ({ onUpload }) {
  const onDrop = (acceptedFiles) => {
    onUpload(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "pdf/*",
    onDrop,
    multiple: false
  });

  return (
    <>
      <div
        {...getRootProps()}
        className="border-2 border-dashed bg-indigo-100 border-indigo-500 flex items-center justify-center h-36 rounded-md"
      >
        <input {...getInputProps()} />
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="h-14  w-auto text-indigo-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
            />
          </svg>
          <p className="underline text-indigo-300 text-sm capitalize">
            choose file
          </p>
        </p>
      </div>
      <div className="flex w-full justify-between font-thin mt-2 text-sm text-gray-400">
        <span>Format: PDF</span>
        <span>Maximum size: 10 MB</span>
      </div>
    </>
  );
};

export default FileUpload;

