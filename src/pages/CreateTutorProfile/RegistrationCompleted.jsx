import React from "react";

const RegistrationComplete = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg w-96">
      {/* Status Indicator */}
      <div className="flex items-center mb-6">
        <div className="text-green-500 text-3xl">
          <i className="fas fa-check-circle"></i>
        </div>
        <div className="ml-2 text-xl font-semibold">Registration Complete!</div>
      </div>

      <div className="text-center mb-6">
        <p className="text-lg">
          Congratulations! Your tutor profile has been successfully created.
        </p>
      </div>

      {/* What happens next */}
      <div className="w-full bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="font-semibold mb-2">What happens next?</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-start space-x-2">
            <div className="flex items-center justify-center bg-blue-500 text-white rounded-full w-8 h-8">
              <span className="font-bold">1</span>
            </div>
            <div>
              <h3 className="font-medium">Verification Process</h3>
              <p>
                Our team will review your profile and documents within 24-48
                hours.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="flex items-center justify-center bg-blue-500 text-white rounded-full w-8 h-8">
              <span className="font-bold">2</span>
            </div>
            <div>
              <h3 className="font-medium">Profile Activation</h3>
              <p>
                Once approved, your profile will be visible to students on the
                platform.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="flex items-center justify-center bg-blue-500 text-white rounded-full w-8 h-8">
              <span className="font-bold">3</span>
            </div>
            <div>
              <h3 className="font-medium">Start Teaching</h3>
              <p>
                Begin receiving lesson requests and start your teaching journey!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Email */}
      <div className="bg-yellow-100 p-4 rounded-lg mb-6 text-center">
        <p>
          We've sent a confirmation email with next steps and important
          information.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
          Go to Dashboard
        </button>
        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg">
          View My Profile
        </button>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>5,000+ Active Tutors</p>
        <p>50,000+ Happy Students</p>
        <p>4.8 ⭐ Avg Rating</p>
      </div>
    </div>
  );
};

export default RegistrationComplete;
