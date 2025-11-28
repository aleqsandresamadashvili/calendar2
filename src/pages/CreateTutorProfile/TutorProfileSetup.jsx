import React, { useRef, useState } from "react";

export default function TutorProfileSetup({ setStep }) {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [introVideo, setIntroVideo] = useState(null);
  const [aboutText, setAboutText] = useState("");

  const photoInputRef = useRef();
  const videoInputRef = useRef();

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePhoto(e.target.files[0].name);
    }
  };

  const handleVideoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setIntroVideo(e.target.files[0].name);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Card Container */}
      <div className="bg-white w-full max-w-2xl rounded-xl shadow p-8">
        <h2 className="text-xl font-semibold text-center mb-6">
          Profile Setup
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Create your tutor account
        </p>

        {/* Profile Photo */}
        <div className="mb-8">
          <label className="block mb-2 font-medium">
            Profile Photo <span className="text-red-500">*</span>
          </label>

          <input
            type="file"
            accept="image/*"
            ref={photoInputRef}
            onChange={handlePhotoChange}
            className="hidden"
          />

          <div
            onClick={() => photoInputRef.current.click()}
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition"
          >
            <p className="text-gray-500">
              {profilePhoto
                ? `Selected: ${profilePhoto}`
                : "Click to upload your profile photo"}
            </p>
            <p className="text-xs text-gray-400 mt-1">JPG, PNG up to 10MB</p>
            <p className="mt-3 text-xs text-gray-400">
              Recommended: Square photo, smiling, professional background
            </p>
          </div>
        </div>

        {/* Introduction Video */}
        <div className="mb-8">
          <label className="block mb-2 font-medium">
            Introduction Video <span className="text-gray-400">(Optional)</span>
          </label>

          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4 text-sm text-blue-700">
            <p className="font-semibold mb-2">🎥 Video Guidelines</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Keep it between 30–60 seconds</li>
              <li>Introduce yourself and your teaching experience</li>
              <li>Explain what makes you a great tutor</li>
              <li>Ensure good lighting and clear audio</li>
              <li>Tutors with videos get 3× more student inquiries!</li>
            </ul>
          </div>

          <input
            type="file"
            accept="video/*"
            ref={videoInputRef}
            onChange={handleVideoChange}
            className="hidden"
          />

          <div
            onClick={() => videoInputRef.current.click()}
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition"
          >
            <p className="text-gray-500">
              {introVideo
                ? `Selected: ${introVideo}`
                : "Click to upload your introduction video"}
            </p>
            <p className="text-xs text-gray-400 mt-1">MP4, MOV up to 50MB</p>
          </div>
        </div>

        {/* About You */}
        <div className="mb-8">
          <label className="block mb-2 font-medium">About You</label>
          <textarea
            rows="4"
            maxLength="500"
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
            className="w-full border rounded-md p-3 text-sm outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Example: I’m a passionate mathematics tutor with 5 years of experience..."
          ></textarea>
          <p className="text-right text-gray-400 text-xs mt-1">
            {aboutText.length}/500 characters
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setStep && setStep(3)}
            className="px-6 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            ← Back
          </button>
          <button
            onClick={() => setStep && setStep(5)}
            className="px-6 py-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:opacity-90"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
