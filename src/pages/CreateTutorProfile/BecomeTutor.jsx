import React, { useState } from "react";
import PlatformRules from "./PlatformRules";
import TutorProfileSetup from "./TutorProfileSetup";
import TeachingDetails from "./TeachingDetails";
import TutorExperience from "./TutorExperience";
import RegistrationComplete from "./RegistrationCompleted";

export default function BecomeTutor() {
  const [step, setStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const [showSmsBox, setShowSmsBox] = useState(false);

  const steps = [
    { id: 1, label: "Basic Info" },
    { id: 2, label: "Teaching Details" },
    { id: 3, label: "Rules" },
    { id: 4, label: "Profile Setup" },
    { id: 5, label: "Experience" },
  ];

  if (isCompleted) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#FAF5FF] px-6 py-10">
        <RegistrationComplete />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#FAF5FF] flex flex-col items-center px-6 py-10">
      <h2 className="text-xl font-semibold text-blue-600">Become A Tutor</h2>
      <p className="text-gray-600 mt-1">
        Join our community of passionate educators.
      </p>

      <div className="flex items-center gap-6 mt-8">
        {steps.map((s, index) => (
          <div key={index} className="flex items-center flex-col">
            <button
              onClick={() => setStep(s.id)}
              className={`w-10 h-10 flex items-center justify-center rounded-full border  
                ${
                  step === s.id
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-300"
                }`}
            >
              {s.id}
            </button>
            <p className="text-xs text-gray-600 mt-1">{s.label}</p>
            {index < steps.length - 1 && (
              <div className="w-10 h-[2px] bg-gray-300 mt-1"></div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 w-full max-w-2xl">
        {step === 1 && (
          <div className="bg-white p-10 rounded-xl shadow-md border">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl">
                👤
              </div>
              <h3 className="text-lg font-semibold mt-4">Basic Information</h3>
              <p className="text-gray-600 text-sm">
                Let’s start with your personal details
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <label className="font-medium text-sm">Full Name*</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2 mt-1"
                />
              </div>

              <div>
                <label className="font-medium text-sm">Phone Number*</label>
                <div className="flex gap-2 mt-1">
                  <input
                    type="text"
                    className="w-full border rounded-lg px-4 py-2"
                  />
                  <button
                    className="bg-purple-300 text-gray-800 px-3 rounded-lg"
                    onClick={() => setShowSmsBox(true)} // ⭐ SHOW SMS BOX
                  >
                    Send SMS
                  </button>
                </div>
              </div>

              {showSmsBox && (
                <div className="p-4 bg-blue-50 rounded-xl">
                  <label className="font-medium text-sm">
                    Enter SMS Code *
                  </label>
                  <div className="flex items-center gap-3 mt-1">
                    <input
                      type="text"
                      placeholder="Enter 4 digit code"
                      className="flex-1 p-3 border rounded-lg"
                    />
                    <button className="px-4 py-2 rounded-lg bg-blue-400 text-white">
                      Verify
                    </button>
                  </div>
                </div>
              )}

              <div>
                <label className="font-medium text-sm">Date of Birth*</label>
                <input
                  type="date"
                  className="w-full border rounded-lg px-4 py-2 mt-1"
                />
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-500 text-white py-3 rounded-lg font-medium"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <TeachingDetails
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}

        {step === 3 && <PlatformRules setStep={setStep} />}
        {step === 4 && <TutorProfileSetup setStep={setStep} />}
        {step === 5 && (
          <TutorExperience
            onBack={() => setStep(4)}
            onNext={() => setIsCompleted(true)}
          />
        )}
      </div>
    </div>
  );
}
