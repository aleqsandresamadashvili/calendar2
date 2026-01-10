import React, { useState } from "react";
import Footer from "../../layout/Footer";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "როგორ გავხდე მომხმარებელი?",
      answer: "გთხოვთ, შეავსოთ რეგისტრაციის ფორმა და დარეგისტრირდით.",
    },
    {
      question: "როგორ დავამატო მონაცემები?",
      answer: "დაამატეთ მონაცემები თქვენს პროფილში სერვისის პანელიდან.",
    },
    {
      question: "როგორ ვნახო ჩემი ანგარიში?",
      answer: "თქვენ შეგიძლიათ ნახოთ ანგარიში თქვენი პროფილის გვერდზე.",
    },
    {
      question: "მეტის დამატება შესაძლებელია?",
      answer:
        "თქვენ შეგიძლიათ დაამატოთ ახალი კატეგორიები და ინფორმაციის პანელი.",
    },
  ];
  return (
    <div className="w-full min-h-screen bg-white">
      {/* HEADER */}
      <header className="w-full h-16 flex items-center justify-between px-6 border-b">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold">
            M
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl mx-6">
          <div className="relative">
            <input
              type="text"
              placeholder="მოძებნე სერვისი"
              className="w-full h-10 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center gap-6">
          <button className="text-sm text-gray-700 hover:text-blue-600">
            Something
          </button>
          <button className="text-sm text-gray-700 hover:text-blue-600">
            Something
          </button>
          <button className="px-4 py-2 rounded-full bg-blue-700 text-white text-sm">
            Sign In
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="w-full bg-[#0B3568] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              ყველაფერი ის, რაც გჭირდება.
            </h1>
            <p className="text-sm text-blue-100 mb-8 leading-relaxed max-w-md">
              მიიღე მარტივი პლატფორმა, სადაც შეგიძლია მართო შენი ფინანსები,
              დაგეგმო ხარჯები და აკონტროლო შემოსავლები ერთ სივრცეში.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-lg bg-green-300 text-blue-900 font-medium">
                დაიწყე გამოყენება →
              </button>
              <button className="px-6 py-3 rounded-lg border border-green-300 text-green-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <div className="w-72 h-72 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <span className="text-blue-200">Illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-center text-xl font-semibold mb-2">
          რატომ უნდა გამოიყენო ჩვენი პლატფორმა?
        </h2>
        <p className="text-center text-gray-500 text-sm mb-10">
          ყველაფერი ერთ სივრცეში — მარტივად და სწრაფად
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature
            icon="⏱️"
            title="მარტივი მართვა"
            text="აკონტროლე დრო და პროცესები მარტივად"
          />
          <Feature
            icon="📊"
            title="დეტალური ანალიზი"
            text="ნახე სტატისტიკა და შედეგები რეალურ დროში"
          />
          <Feature
            icon="💻"
            title="ონლაინ პლატფორმა"
            text="გამოიყენე ნებისმიერ მოწყობილობაზე"
          />
          <Feature
            icon="👥"
            title="გუნდური მუშაობა"
            text="იმუშავე გუნდთან ერთად ეფექტურად"
          />
          <Feature
            icon="📅"
            title="დაგეგმვა"
            text="დაგეგმე აქტივობები წინასწარ"
          />
          <Feature
            icon="✅"
            title="უსაფრთხოება"
            text="შენი მონაცემები დაცულია"
          />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold mb-2">დანიშნე შეხვედრა</h2>
          <p className="text-sm text-gray-500">
            აირჩიე მარტივი გზა სერვისის დასაწყებად
          </p>
        </div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          <TopCard
            bg="bg-green-50"
            icon="➡️"
            title="დარეგისტრირდი"
            text="შექმენი Account 2 წუთში"
          />
          <TopCard
            bg="bg-blue-50"
            icon="👤"
            title="პროფილის შექმნა"
            text="დაამატე საჭირო ინფორმაცია"
          />
          <TopCard
            bg="bg-purple-50"
            icon="🌀"
            title="დაგეგმვის ალგორითმი"
            text="სისტემის ავტომატიზაცია"
          />
          <TopCard
            bg="bg-orange-50"
            icon="💳"
            title="დანიშნე შეხვედრა"
            text="აირჩიე დრო და დაიწყე მომსახურება"
          />
        </div>

        {/* INFO BOX */}
        <div className="bg-gray-50 rounded-2xl border p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <h3 className="font-semibold mb-4">
              ტექნოლოგიაზე დაფუძნებული პროფესიონალური ინსტრუმენტები
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              ჩვენი პლატფორმა გეხმარება დაგეგმო სამუშაო პროცესი, გააკონტროლო
              შეხვედრები და გააუმჯობესო პროდუქტიულობა.
            </p>

            <div className="space-y-4">
              <InfoItem
                icon="📅"
                title="ინტელექტუალური კალენდარი"
                text="მართე შეხვედრები ერთ სივრცეში"
              />
              <InfoItem
                icon="👥"
                title="მომხმარებელთა მართვა"
                text="დაგეგმილი მონაცემების კონტროლი"
              />
              <InfoItem
                icon="📊"
                title="შედეგების სტატისტიკა"
                text="ანალიტიკა რეალურ დროში"
              />
              <InfoItem
                icon="💬"
                title="მხარდაჭერა"
                text="მომხმარებელთა დახმარება 24/7"
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-white rounded-xl shadow flex items-center justify-center">
              <span className="text-gray-400">Illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-[#FFF8F2] rounded-2xl border p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          {/* LEFT */}
          <div>
            <div className="w-10 h-10 mb-4 rounded-lg bg-blue-100 flex items-center justify-center">
              📊
            </div>

            <h3 className="text-lg font-semibold mb-3">
              სერვისის გამოყენების ღირებულება
            </h3>

            <p className="text-sm text-gray-600 mb-6 max-w-md">
              დაგეგმილი სერვისები მორგებულია სხვადასხვა საჭიროებაზე და გთავაზობთ
              გამჭვირვალე ფასებს.
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✔</span>
                მინიმუმ 15% ეკონომია ყოველთვიურად
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✔</span>
                მოქნილი და გამჭვირვალე პირობები
              </li>
            </ul>
          </div>

          {/* RIGHT PRICES */}
          <div className="flex flex-col gap-4">
            <PriceBox
              bg="bg-green-100"
              title="საბაზისო ტარიფი"
              price="$35–75"
            />
            <PriceBox bg="bg-sky-100" title="პრემიუმი" price="$500+ / თვეში" />
            <PriceBox
              bg="bg-orange-100"
              title="კორპორატიული"
              price="$5,000+ / წლიურად"
            />
          </div>
        </div>

        {/* TESTIMONIALS */}
        <h3 className="text-center font-semibold mb-10">
          ნახე, რას ამბობენ მომხმარებლები
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Testimonial
            name="მარიამი"
            role="ბიზნესის მენეჯერი"
            color="bg-sky-200"
          />
          <Testimonial
            name="მარიამი"
            role="ბიზნესის მენეჯერი"
            color="bg-sky-200"
          />
          <Testimonial
            name="ალექსანდრე"
            role="სტარტაპის დამფუძნებელი"
            color="bg-indigo-300"
          />
        </div>

        <div className="flex justify-end mt-6">
          <button className="text-sm text-blue-700 flex items-center gap-2 hover:underline">
            ყველა მიმოხილვა →
          </button>
        </div>
      </section>

      <section className="bg-[#FAF6E6] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section (FAQs) */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              ხშირად დასმული კითხვები
            </h2>
            <p className="text-sm text-gray-600 mb-8">
              თუ გაქვთ შეკითხვები, აქ შეგიძლიათ იპოვოთ პასუხები ხშირად დასმულ
              კითხვებზე.
            </p>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    className="w-full text-left text-lg font-medium text-blue-800 hover:text-blue-600 focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    {faq.question}
                  </button>
                  {activeIndex === index && (
                    <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-end w-full">
              <button className="flex items-center bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-800">
                <span className="text-lg mr-2">💬</span>
                დახმარება
              </button>
            </div>
          </div>

          {/* Right Section (Illustration) */}
          <div className="flex justify-center md:justify-end">
            <div className="w-80 h-80 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <span className="text-blue-200">Illustration</span>
            </div>
          </div>
        </div>

        {/* Chat Button */}
      </section>
      <Footer />
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-md transition">
      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  );
}

function TopCard({ bg, icon, title, text }) {
  return (
    <div
      className={`${bg} border rounded-xl p-6 text-center hover:shadow-md transition`}
    >
      <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-lg bg-white">
        {icon}
      </div>
      <h4 className="font-semibold text-sm mb-1">{title}</h4>
      <p className="text-xs text-gray-500">{text}</p>
    </div>
  );
}

function InfoItem({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4 bg-white rounded-xl border p-4">
      <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold">{title}</h4>
        <p className="text-xs text-gray-500">{text}</p>
      </div>
    </div>
  );
}

function PriceBox({ bg, title, price }) {
  return (
    <div
      className={`${bg} rounded-xl p-4 border flex items-center justify-between`}
    >
      <span className="text-sm font-medium">{title}</span>
      <span className="text-sm font-semibold">{price}</span>
    </div>
  );
}

function Testimonial({ name, role, color }) {
  return (
    <div className="border rounded-xl p-6">
      <div className="text-3xl text-blue-700 mb-4">“</div>

      <p className="text-sm text-gray-600 mb-6">
        პლატფორმამ საგრძნობლად გაამარტივა ჩემი სამუშაო. პროცესები უფრო სწრაფი და
        ორგანიზებულია.
      </p>

      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${color}`} />
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
