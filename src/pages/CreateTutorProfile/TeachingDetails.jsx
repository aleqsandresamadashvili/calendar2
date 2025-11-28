import { useState } from "react";

export default function TeachingDetails({ onNext, onBack }) {
  const allSubjects = [
    "Mathematics",
    "English",
    "Physics",
    "Biology",
    "IELTS",
    "Georgian",
  ];

  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleSelect = (subject) => {
    if (selectedSubjects.some((s) => s.name === subject)) {
      setSelectedSubjects(selectedSubjects.filter((s) => s.name !== subject));
    } else {
      if (selectedSubjects.length === 5) return;
      setSelectedSubjects([
        ...selectedSubjects,
        { name: subject, price: 20, teachingType: "" },
      ]);
    }
  };

  const updatePrice = (subjectName, newPrice) => {
    setSelectedSubjects((prev) =>
      prev.map((s) => (s.name === subjectName ? { ...s, price: newPrice } : s))
    );
  };

  const updateTeachingType = (subjectName, type) => {
    setSelectedSubjects((prev) =>
      prev.map((s) =>
        s.name === subjectName ? { ...s, teachingType: type } : s
      )
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#FAF6FF] flex flex-col items-center p-6">
      <div className="bg-white w-full max-w-xl mt-10 p-8 rounded-2xl shadow-sm">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
          📘
        </div>

        <h2 className="text-center text-lg font-semibold mt-3">
          Teaching Details
        </h2>
        <p className="text-center text-sm text-gray-600">
          Tell us what and how you teach
        </p>

        <div className="mt-6">
          <p className="text-sm font-medium">
            Add Subjects <span className="text-red-500">*</span>
          </p>

          <div className="mt-3 bg-[#F3F7FF] p-4 rounded-xl flex flex-wrap gap-3">
            {allSubjects.map((subject) => (
              <button
                key={subject}
                onClick={() => handleSelect(subject)}
                className={`px-4 py-1.5 rounded-full border transition ${
                  selectedSubjects.some((s) => s.name === subject)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                }`}
              >
                {subject}
              </button>
            ))}
          </div>

          <div className="text-right text-xs text-gray-500 mt-1">
            {selectedSubjects.length} / 5 selected
          </div>
        </div>

        <div className="mt-6">
          {selectedSubjects.map((subject) => (
            <div
              key={subject.name}
              className="bg-gray-50 border p-5 rounded-xl mb-4 shadow-sm"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                    {subject.name[0]}
                  </div>
                  <p className="font-medium">{subject.name}</p>
                </div>

                <button
                  onClick={() =>
                    setSelectedSubjects(
                      selectedSubjects.filter((s) => s.name !== subject.name)
                    )
                  }
                  className="text-gray-400 hover:text-red-500 text-xl"
                >
                  ✕
                </button>
              </div>

              <p className="mt-3 text-sm font-medium">
                Price Per Hour <span className="text-red-500">*</span>
              </p>

              <input
                type="range"
                min="20"
                max="300"
                value={subject.price}
                onChange={(e) =>
                  updatePrice(subject.name, parseInt(e.target.value))
                }
                className="w-full mt-2"
              />

              <div className="text-sm text-gray-600">{subject.price} ₾</div>

              <p className="mt-4 text-sm font-medium">
                Teaching Type <span className="text-red-500">*</span>
              </p>

              <div className="flex gap-3 mt-2">
                {["Online Lessons", "In-Person", "Both"].map((type) => (
                  <button
                    key={type}
                    onClick={() => updateTeachingType(subject.name, type)}
                    className={`flex-1 py-2 rounded-lg border ${
                      subject.teachingType === type
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={onBack}
            className="px-5 py-2 border border-gray-300 rounded-lg bg-white text-gray-700"
          >
            ← Back
          </button>

          <button
            onClick={() => {
              if (selectedSubjects.length === 0) return;
              onNext();
            }}
            className="px-10 py-2 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-500"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
