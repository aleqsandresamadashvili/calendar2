import React from "react";

export default function Verification() {
  return (
    <div className="max-w-xl w-full bg-white shadow-md rounded-xl p-8 mx-auto">
      {/* Icon + Title */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full mb-3">
          🎓
        </div>
        <h2 className="text-xl font-semibold text-gray-800">ვერიფიკაცია</h2>
        <p className="text-gray-500 text-sm mt-1">
          გააზიარე შენი კვალიფიკაციები და მიღწევები{" "}
        </p>
      </div>

      {/* Degree name */}
      <div className="mb-4">
        <label className="block text-sm text-gray-700 mb-1">
          უნივერსიტეტის სახელი *
        </label>
        <input
          type="text"
          placeholder="მაგ.: თბილისის სახელმწიფო უნივერსიტეტი"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* University name */}
      <div className="mb-4">
        <label className="block text-sm text-gray-700 mb-1">ფაკულტეტი *</label>
        <input
          type="text"
          placeholder="მაგ.: მათემატიკისა და კომპიუტერული მეცნიერების ფაკულტეტი"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Graduation year */}
      <div className="mb-4">
        <label className="block text-sm text-gray-700 mb-1">
          საბოლოო წელი *
        </label>
        <input
          type="text"
          placeholder="მაგ.: 2020"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-center mb-5">
        <input type="checkbox" id="studying" className="mr-2" />
        <label htmlFor="studying" className="text-gray-700 text-sm">
          მეორე უნივერსიტეტი დასრულებული მაქვს
        </label>
      </div>

      {/* Upload file */}
      <div className="flex gap-4">
        <p>ატვირთე დიპლომი</p>
        <p>(სურვილისამებრ)</p>
      </div>
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center mb-6">
        <div className="text-3xl mb-2">📁</div>
        <p className="text-gray-600 text-sm">დააჭირე დიპლომის ასატვირთად</p>
        <p className="text-gray-400 text-xs">PDF, PNG, JPG მაქსიმუმ 10MB</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button className="px-6 py-2 rounded-lg bg-gray-200">← უკან</button>
        <button className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
          გაგრძელება
        </button>
      </div>
    </div>
  );
}
