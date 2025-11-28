import React, { useState, useRef } from "react";

export default function TutorExperience({ onBack, onNext }) {
  const [portfolioFiles, setPortfolioFiles] = useState([]);
  const [diplomaFile, setDiplomaFile] = useState(null);
  const [certificateFiles, setCertificateFiles] = useState([]);

  const portfolioInputRef = useRef(null);
  const diplomaInputRef = useRef(null);
  const certificateInputRef = useRef(null);

  const handleFiles = (event, setter) => {
    setter(event.target.files ? Array.from(event.target.files) : []);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow p-8">
        <h2 className="text-xl font-semibold text-center mb-4">
          Education & Experience
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Share your qualifications and achievements
        </p>

        {/* Portfolio Upload */}
        <div className="mb-8">
          <label className="block font-medium mb-1">
            Professional Portfolio / Work Examples
            <span className="text-gray-400"> (Optional)</span>
          </label>
          <p className="text-sm text-gray-500 mb-3">
            Upload examples of your teaching materials, student success stories,
            or achievements.
          </p>

          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition"
            onClick={() => portfolioInputRef.current.click()}
          >
            <p className="text-gray-600">
              Click to upload your portfolio files
            </p>
            <p className="text-xs text-gray-400 mt-1">
              PDF, PNG, JPG – Multiple files allowed
            </p>
            {portfolioFiles.length > 0 && (
              <ul className="mt-2 text-left text-sm text-gray-700">
                {portfolioFiles.map((file, idx) => (
                  <li key={idx}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>

          <input
            type="file"
            ref={portfolioInputRef}
            className="hidden"
            multiple
            onChange={(e) => handleFiles(e, setPortfolioFiles)}
          />
        </div>

        {/* Diploma Upload */}
        <div className="mb-8">
          <label className="block font-medium mb-2">
            Upload Diploma <span className="text-gray-400">(Optional)</span>
          </label>

          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition"
            onClick={() => diplomaInputRef.current.click()}
          >
            <p className="text-gray-600">Click to upload diploma</p>
            <p className="text-xs text-gray-400 mt-1">
              PDF, PNG, JPG – Up to 10MB
            </p>
            {diplomaFile && (
              <p className="mt-2 text-gray-700">{diplomaFile.name}</p>
            )}
          </div>

          <input
            type="file"
            ref={diplomaInputRef}
            className="hidden"
            onChange={(e) => handleFiles(e, setDiplomaFile)}
          />
        </div>

        {/* Certificates Upload */}
        <div className="mb-8">
          <label className="block font-medium mb-2">
            Professional Certificates{" "}
            <span className="text-gray-400">(Optional)</span>
          </label>

          <p className="text-sm text-gray-500 mb-3">
            Upload certifications like TEFL, IELTS examiner, or other relevant
            qualifications.
          </p>

          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition"
            onClick={() => certificateInputRef.current.click()}
          >
            <p className="text-gray-600">Click to upload your certificates</p>
            <p className="text-xs text-gray-400 mt-1">
              PDF, PNG, JPG – Multiple files allowed
            </p>
            {certificateFiles.length > 0 && (
              <ul className="mt-2 text-left text-sm text-gray-700">
                {certificateFiles.map((file, idx) => (
                  <li key={idx}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>

          <input
            type="file"
            ref={certificateInputRef}
            className="hidden"
            multiple
            onChange={(e) => handleFiles(e, setCertificateFiles)}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={onBack}
            className="px-6 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            ← Back
          </button>

          <button
            onClick={onNext}
            className="px-6 py-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:opacity-90"
          >
            Finish Registration →
          </button>
        </div>
      </div>
    </div>
  );
}
