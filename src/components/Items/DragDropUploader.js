"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

const DragDropUploader = ({ setKnowledge }) => {
  const [files, setFiles] = useState([]);
  const maxFiles = 2;

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length + files.length > maxFiles) {
      alert(`You can only upload up to ${maxFiles} files.`);
      return;
    }

    const newFiles = acceptedFiles.map((file) => ({
      id: file.name,
      title: file.name,
      description: "Uploaded document",
      file,
    }));

    setFiles((prev) => [...prev, ...newFiles]);
    setKnowledge((prev) => [...prev, ...newFiles]); // Update parent state
  };

  const removeFile = (fileId) => {
    setFiles(files.filter((file) => file.id !== fileId));
    setKnowledge((prev) => prev.filter((file) => file.id !== fileId));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"], "application/msword": [".doc", ".docx"] },
    maxFiles,
  });

  return (
    <div className="border p-4 rounded-lg text-center">
      <div {...getRootProps()} className="cursor-pointer border-dashed border-2 p-6">
        <input {...getInputProps()} />
        <p>Drag & drop PDFs or Docs here, or click to select</p>
      </div>
      <div className="mt-4">
        {files.map((file) => (
          <div key={file.id} className="flex justify-between items-center p-2 border-b">
            <span>{file.title}</span>
            <button onClick={() => removeFile(file.id)} className="text-red-500">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragDropUploader;
