import { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function CalendarPage() {
  const calendarRef = useRef(null);

  const [openIndividualModal, setOpenIndividualModal] = useState(false);
  const [openGroupModal, setOpenGroupModal] = useState(false);

  const [events, setEvents] = useState([]);
  const [startText, setStartText] = useState("");
  const [currentView, setCurrentView] = useState("dayGridMonth");

  function parseWeekly(text) {
    const [dayName, time] = text.split(",").map((v) => v.trim());

    const daysMap = {
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
      Sunday: 0,
    };

    if (!daysMap.hasOwnProperty(dayName) || !time) return null;

    const [hour, minute] = time.split(":");
    const endHour = String(Number(hour) + 1).padStart(2, "0");

    return {
      dayIndex: daysMap[dayName],
      startTime: `${hour}:${minute}`,
      endTime: `${endHour}:${minute}`,
    };
  }

  const changeView = (view) => {
    const api = calendarRef.current?.getApi();
    if (!api) return;

    api.changeView(view);
    setCurrentView(view);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="h-14 flex items-center justify-between px-6 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="text-blue-600 font-bold text-xl">MEMORA</div>
          <span className="text-sm font-medium text-gray-900">
            რეპეტიტორის დაშბორდი
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md">
            + New
          </button>
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-600">
            A
          </div>
        </div>
      </header>
      {/*LOWER HEADER CODE */}
      <header className="h-14 flex items-center justify-between px-6 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="leading-tight">
            <div className="text-sm font-medium text-gray-900">
              ჯგუფური გაკვეთილების განრიგი
            </div>
            <div className="text-xs text-gray-500">
              მართეთ თქვენი გაკვეთილები და ხელმისაწვდომობა{" "}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpenIndividualModal(true)}
            className="px-3 py-1.5 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            + ინდივუდუალური
          </button>

          <button
            onClick={() => setOpenGroupModal(true)}
            className="px-3 py-1.5 text-sm font-medium border border-gray-200 rounded-md hover:bg-gray-50"
          >
            + ჯგუფური
          </button>
        </div>
      </header>{" "}
      <div className="h-12 flex items-center justify-between px-6 bg-white border-b">
        <div className="flex border rounded-md overflow-hidden">
          <button
            onClick={() => changeView("timeGridDay")}
            className={`px-4 py-1.5 text-sm ${
              currentView === "timeGridDay" ? "bg-gray-100 font-medium" : ""
            }`}
          >
            დღე
          </button>

          <button
            onClick={() => changeView("timeGridWeek")}
            className={`px-4 py-1.5 text-sm ${
              currentView === "timeGridWeek" ? "bg-gray-100 font-medium" : ""
            }`}
          >
            კვირა
          </button>

          <button
            onClick={() => changeView("dayGridMonth")}
            className={`px-4 py-1.5 text-sm ${
              currentView === "dayGridMonth" ? "bg-gray-100 font-medium" : ""
            }`}
          >
            თვე
          </button>
        </div>

        <button className="text-sm text-gray-600">ფილტრი</button>
      </div>
      <div className="flex-1 p-6">
        <div className="h-full bg-white rounded-xl border overflow-hidden">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            firstDay={1}
            events={events}
            headerToolbar={{
              left: "",
              center: "title",
              right: "prev,next",
            }}
            slotMinTime="08:00:00"
            slotMaxTime="24:00:00"
            allDaySlot={false}
            editable={false}
            selectable={false}
            height="100%"
            datesSet={(info) => setCurrentView(info.view.type)}
          />
        </div>
      </div>
      {openIndividualModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenIndividualModal(false)}
          />

          {/* MODAL */}
          <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium text-gray-900">
                შექმენით ყოველკვირეული ინდივიდუალური გაკვეთილი{" "}
              </h2>
              <button
                onClick={() => setOpenIndividualModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  კვირის დღე *
                </label>
                <input
                  type="text"
                  placeholder="სამშაბათი, 13:00"
                  value={startText}
                  onChange={(e) => setStartText(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="block text-xs font-bold mb-1">
                  დაჯავშნის ხელმისაწვდომობა
                </p>
                <p className="block text-xs font-medium text-gray-600 mb-1">
                  განსაზღვრეთ, როდის შეუძლიათ მშობლებს ამ გაკვეთილის დაჯავშნა
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  გაკვეთილის დაწყების თარიღი{" "}
                </label>
                <input
                  type="date"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <p className="block text-xs font-medium text-gray-600 mb-1">
                ამ თარიღიდან დაიწყება გაკვეთილების დაჯავშნის შესაძლებლობა
              </p>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  გაკვეთილის ბოლო თარიღი{" "}
                </label>
                <input
                  type="date"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  defaultValue="ხანგრძლივობა: 60 წუთი"
                  className="w-full rounded-md border border-blue-500 bg-blue-50 px-3 py-2 text-sm text-blue-700"
                />
              </div>
              <div>
                <input
                  type="text"
                  defaultValue="დაწყების დრო"
                  className="w-full rounded-md border border-blue-500 bg-blue-50 px-3 py-2 text-sm text-blue-700"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">
                  ფორმატი *
                </label>
                <div className="flex gap-4 text-sm">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="type" defaultChecked />
                    ონლაინ
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="type" />
                    მასწავლებელთან
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="type" />
                    მოსწავლესთან
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setOpenIndividualModal(false)}
                className="px-4 py-2 text-sm text-gray-600"
              >
                გაუქმება
              </button>
              <button
                onClick={() => {
                  const parsed = parseWeekly(startText);
                  if (!parsed) return;

                  setEvents((prev) => [
                    ...prev,
                    {
                      id: Date.now(),
                      title: "ინდივიდუალური გაკვეთილი",
                      daysOfWeek: [parsed.dayIndex],
                      startTime: parsed.startTime,
                      endTime: parsed.endTime,
                      className: "lesson-green",
                    },
                  ]);

                  setStartText("");
                  setOpenIndividualModal(false);
                }}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                გაკვეთილის დამატება
              </button>
            </div>
          </div>
        </div>
      )}
      {openGroupModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                შექმენით ყოველკვირეული ჯგუფური გაკვეთილი{" "}
              </h2>
              <button
                onClick={() => setOpenGroupModal(false)}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ✕
              </button>
            </div>

            {/* Title */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                სათაური
              </label>
              <input
                type="text"
                placeholder="ეროვულებისთვის ქართული ჯგუფი 1"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Categories */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">საგანი</p>
              <div className="grid grid-cols-3 gap-2 text-sm">
                {[
                  "ეკონომიკა",
                  "ინოვაცია",
                  "პოლიტიკა",
                  "ჯანდაცვა",
                  "განათლება",
                  "ბიზნესი",
                  "ტექნოლოგია",
                  "კულტურა",
                  "სოციალური",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Add custom tag */}
            <button className="text-sm text-blue-600">
              განმეუროებითი ყოველ კვირას
            </button>

            {/* Date & Time Section */}
            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">დღე 1</span>
                <button className="text-gray-400 hover:text-gray-600">✕</button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Date */}
                <div className="space-y-1">
                  <label className="text-sm text-gray-700">დღე</label>
                  <select className="w-full rounded-lg border border-gray-300 px-3 py-2">
                    <option>არჩევითი დღე</option>
                  </select>
                </div>

                {/* Time */}
                <div className="space-y-1">
                  <label className="text-sm text-gray-700">დრო</label>
                  <input
                    type="time"
                    value="11:30"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  />
                </div>
              </div>

              {/* Duration */}
              <div className="space-y-1">
                <label className="text-sm text-gray-700">
                  შეხვედრის ხანგრძლივობა
                </label>
                <select className="w-full rounded-lg border border-gray-300 px-3 py-2">
                  <option>არჩევითი ხანგრძლივობა</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
