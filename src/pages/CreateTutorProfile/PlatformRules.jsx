import React from "react";

export default function PlatformRules({ setStep }) {
  return (
    <div className="bg-white p-10 rounded-xl shadow-md border border-gray-200">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl">
          🛡️
        </div>

        <h3 className="text-lg font-semibold mt-4">პლატფორმის წესები</h3>
        <p className="text-gray-600 text-sm">
          გთხოვთ, გაეცნოთ ჩვენს წესებს და დაეთანხმოთ მათ
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <div className="border rounded-xl p-6 bg-[#F4F8FF]">
          <p className="font-semibold mb-4">
            📘 მნიშვნელოვანი პლატფორმის წესები
          </p>

          <div className="max-h-72 overflow-y-auto pr-2 space-y-4 hide-scrollbar">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-sm text-blue-600">
                პლატფორმის საკომისიო
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                პლატფორმა იტვირთავს 10% საკომისიოს ყველა შემოსავლიდან, რომელიც
                გამომუშავდება პლატფორმის მეშვეობით. ეს ეხმარება ჩვენს სერვისების
                შენარჩუნებასა და გაუმჯობესებაში.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <h4 className="font-semibold text-sm text-red-600 flex items-center gap-2">
                ⚠️ აკრძალულია
              </h4>

              <p className="text-s mt-2">
                სტუდენტების პლატფორმის მიღმა წაყვანა მკაცრად აკრძალულია და
                გამოიწვევს:{" "}
              </p>
              <ul className="text-sm text-gray-700 list-disc pl-5 mt-2">
                <li>ანგარიშის მუდმივ შეჩერებას</li>
                <li>პლატფორმის ყველა სარგებლის დაკარგვას</li>
                <li>შესაძლო სამართლებრივ ღონისძიებებს</li>
              </ul>

              <p className="text-xs text-gray-500 mt-2">
                ყველა გაკვეთილი და გადახდა უნდა განხორციელდეს ჩვენი უსაფრთხო
                პლატფორმის მეშვეობით.{" "}
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-700 text-sm">
                Lesson Cancellation Rules
              </h4>
              <ul className="text-sm text-gray-700 list-disc pl-5 mt-2">
                <li>Cancel at least 24 hours in advance for no penalty</li>
                <li>
                  Cancellations within 24 hours may result in partial payment to
                  the student
                </li>
                <li>
                  Repeated last-minute cancellations may affect your rating
                </li>
                <li>
                  Emergency cancellations should be reported immediately to
                  support
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-700 text-sm">
                Safety Guidelines
              </h4>
              <ul className="text-sm text-gray-700 list-disc pl-5 mt-2">
                <li>Always maintain professional boundaries with students</li>
                <li>Report any inappropriate behavior immediately</li>
                <li>Keep all communication within the platform</li>
                <li>Follow child safety protocols at all times</li>
                <li>Ensure a safe learning environment</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 text-sm">
                Background Verification
              </h4>
              <p className="text-sm text-gray-700 mt-1">
                As this is a children's platform, we take safety seriously. All
                tutors undergo:
              </p>
              <ul className="text-sm text-gray-700 list-disc pl-5 mt-2">
                <li>Identity verification</li>
                <li>Educational credential checks</li>
                <li>Background screening (when applicable)</li>
                <li>Ongoing performance monitoring</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 text-sm">
                Professional Conduct
              </h4>
              <ul className="text-sm text-gray-700 list-disc pl-5 mt-2">
                <li>Be punctual for all lessons</li>
                <li>Prepare lesson materials in advance</li>
                <li>Provide constructive feedback to students</li>
                <li>Maintain high teaching standarts</li>
                <li>Respond to messages withing 24 hours</li>
              </ul>
            </div>
          </div>
        </div>

        <label className="flex items-start gap-3 text-sm bg-gray-50 p-4 rounded-lg border cursor-pointer">
          <input type="checkbox" className="mt-1" />
          <span>
            მე წავიკითხე და ვეთანხმები პლატფორმის ყველა წესსა და მითითებას.
            ვაცნობიერებ, რომ დარღვევის შემთხვევაში ჩემი ანგარიში შესაძლოა
            შეჩერდეს ან გაუქმდეს.
          </span>
        </label>

        <div className="border rounded-xl p-6 bg-[#F4F8FF]">
          <p className="font-semibold mb-2">
            🪪 პირადობის დოკუმენტი უსაფრთხოების ვერიფიკაციისთვის
          </p>
          <p>
            ეს არის ბავშვებისთვის განკუთვნილი პლატფორმა — უსაფრთხოება ჩვენი
            მთავარი პრიორიტეტია.
          </p>
          <p className="text-sm font-bold mb-4">
            გთხოვთ, ატვირთოთ თქვენი პირადობის დოკუმენტი *{" "}
          </p>

          <label className="w-full border-2 border-dashed border-gray-300 rounded-lg p-10 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-100">
            <span>ატვირთეთ თქვენი პირადობა</span>
            <span className="text-xs mt-1">PNG, JPG მაქსიმუმ 10MB</span>
            <input type="file" className="hidden" />
          </label>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => setStep(2)}
            className="px-6 py-2 rounded-lg bg-gray-200"
          >
            ← Back
          </button>

          <button
            onClick={() => setStep(4)}
            className="px-6 py-2 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-500"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
