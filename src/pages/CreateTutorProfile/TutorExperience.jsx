import React, { useState } from "react";

const MediaProfileSetupForm = () => {
  const [formData, setFormData] = useState({
    profilePhoto: null,
    introductionVideo: null,
  });

  const handleFileChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* image here */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col items-center">
          <h3 className="text-xl font-medium">პროფილის შექმნა</h3>
          <p className="text-sm text-gray-500">მედია</p>
        </div>

        {/* Profile Photo Upload */}
        <div className="mb-4">
          <label
            htmlFor="profilePhoto"
            className="block text-lg font-medium text-gray-700"
          >
            პროფილის ფოტო * <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-dashed border-gray-300 p-4 rounded-md text-center">
            <p className="text-sm text-gray-500 mb-2">
              ატვირთე პროფესიონალური და მეგობრული ფოტო — ეს იქნება პირველი, რაც
              მოსწავლებმა დაგინახონ!
            </p>
            <input
              type="file"
              id="profilePhoto"
              onChange={(e) => handleFileChange(e, "profilePhoto")}
              className="block w-full text-sm text-gray-500 border rounded-md p-2"
              accept="image/png, image/jpeg"
            />
            <div className="text-sm text-gray-400 mt-2">
              <p>დააჭირე აქ პროფილის ფოტოს ასატვირთად</p>
              <p>PNG, JPG მაქსიმუმ 10MB</p>
              <p>
                რეკომენდაცია: კვადრატული ფოტო, მომღიმარი, პროფესიონალური ფონი
              </p>
            </div>
          </div>
        </div>

        {/* Introduction Video Upload */}
        <div className="mb-4">
          <label
            htmlFor="introductionVideo"
            className="block text-lg font-medium text-gray-700"
          >
            სასწავლო ვიდეო <p>(სურვილისამებრ)</p>{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="text-sm text-gray-400 mt-2">
            <p>ვიდეოს მოთხოვნები</p>
            <ul className="list-disc pl-6 text-gray-500">
              <li>ვიდეოს ხანგრძლივობა: 30–90 წამი</li>
              <li>წარადგინე შენი თავი და შენი საგაკვეთილო გამოცდილება</li>
              <li>აუხსენი მოსწავლეებს, რა ხდის შენს გაკვეთილებს უნიკალურად</li>
              <li>გამოაჩინე შენი პიროვნება და სწავლების სტილი</li>
              <li>უზრუნველყავი კარგი განათება და სუფთა ხმა</li>
            </ul>
            <p className="mt-2">
              💡 ვიდეოიანი ტუტორები 3-ჯერ მეტ მოთხოვნას იღებენ!
            </p>
          </div>
          <div className="border-2 border-dashed border-gray-300 p-4 rounded-md text-center">
            <input
              type="file"
              id="introductionVideo"
              onChange={(e) => handleFileChange(e, "introductionVideo")}
              className="block w-full text-sm text-gray-500 border rounded-md p-2"
              accept="video/mp4, video/mov"
            />
            <p>დააჭირე შესავალი ვიდეოს ასატვირთად ან გადასაღებლად</p>
            <p>MP4, MOV მაქსიმუმ 50MB</p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-md"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default MediaProfileSetupForm;
