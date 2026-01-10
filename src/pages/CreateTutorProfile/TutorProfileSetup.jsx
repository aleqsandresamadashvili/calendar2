import React, { useState } from "react";

const ProfileSetupForm = () => {
  const [formData, setFormData] = useState({
    headline: "",
    mainDescription: "",
    skills: [],
    skillInput: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddSkill = () => {
    if (formData.skillInput && !formData.skills.includes(formData.skillInput)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, formData.skillInput],
        skillInput: "",
      });
    }
  };

  const handleRemoveSkill = (skill) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="w-full max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* image here  */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col items-center">
          <h3 className="text-xl font-medium">პროფილის შექმნა</h3>
          <p className="text-sm text-gray-500">დეტალები</p>
        </div>

        {/* Headline */}
        <div className="mb-4">
          <label
            htmlFor="headline"
            className="block text-lg font-medium text-gray-700"
          >
            სათაური *{" "}
          </label>
          <p>(მოკლე აღწერა)</p>
          <input
            type="text"
            id="headline"
            name="headline"
            value={formData.headline}
            onChange={handleInputChange}
            className="mt-2 w-full text-sm border rounded-md p-2"
            placeholder="მაგ.: გამოცდილებით მქონე მათემატიკის ტუტორი, რომელიც მუშაობს სკოლასა და უნივერსიტეტთან."
            required
          />
        </div>

        {/* Main Description */}
        <div className="mb-4">
          <label
            htmlFor="mainDescription"
            className="block text-lg font-medium text-gray-700"
          >
            მთავარი აღწერა *
          </label>
          <p>
            მოსწავლეებს მოუყევი შენი საგაკვეთილო გამოცდილების, მეთოდების და იმ
            მიზეზების შესახებ, რაც შენს სწავლებას უნიკალურად აქცევს.
          </p>
          <textarea
            id="mainDescription"
            name="mainDescription"
            value={formData.mainDescription}
            onChange={handleInputChange}
            className="mt-2 w-full text-sm border rounded-md p-2"
            placeholder="მაგ.: მე ვარ მათემატიკის ტუტორი 5-წლიანი გამოცდილებით, რომელიც ეხმარება სტუდენტებს უკეთ გაიაზრონ რთული თემები. ჩემი სწავლების სტილი ეფუძნება რეალურ მაგალითებს, ინტერაქციასა და მარტივ ახსნებს..."
            rows="4"
            maxLength="600"
            required
          ></textarea>
          <div className="text-sm text-gray-500">
            {formData.mainDescription.length} / 600 characters
          </div>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <label
            htmlFor="skills"
            className="block text-lg font-medium text-gray-700"
          >
            უნარები *
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="skills"
              name="skillInput"
              value={formData.skillInput}
              onChange={handleInputChange}
              className="mt-2 w-full text-sm border rounded-md p-2"
              placeholder="მაგ.: ალგებრა, კალკულუსი, SAT"
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="ml-2 bg-purple-600 text-white px-4 py-2 rounded-md"
            >
              + დამატება
            </button>
          </div>
          <div className="mt-2">
            <ul className="flex flex-wrap gap-2">
              {formData.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="ml-2 text-red-500"
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-between">
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

export default ProfileSetupForm;
