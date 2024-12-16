import React from "react";

export default function StepInput({
  title,
  description,
  allowDocumentUpload,
  value,
  placeholder,
  onInputChange,
}) {
  return (
    <div className="mb-6 p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-base text-gray-600 mb-4">{description}</p>

      {allowDocumentUpload ? (
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100">
            <span className="text-gray-600">📄</span>
            <span className="text-gray-700">Dokument hochladen</span>
          </button>
          <span className="text-sm text-gray-500">oder</span>
          <textarea
            value={value}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder={placeholder}
            className="w-full max-w-md h-24 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ) : (
        <textarea
          value={value}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-24 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
    </div>
  );
}
