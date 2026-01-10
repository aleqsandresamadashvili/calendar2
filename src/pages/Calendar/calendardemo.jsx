import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function CalendarPage() {
  const [openIndividualModal, setOpenIndividualModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [startText, setStartText] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Initialize this state
  const [selectedDate, setSelectedDate] = useState("");

  // FullCalendar setup
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown visibility
  };

  const handleDateClick = (arg) => {
    const selectedDateStr = arg.dateStr;
    setStartText(
      `${arg.date.toLocaleString("default", {
        weekday: "long",
      })}, ${selectedDateStr}`
    );
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

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

          <button className="px-3 py-1.5 text-sm font-medium border border-gray-200 rounded-md hover:bg-gray-50">
            + ჯგუფური
          </button>
        </div>
      </header>
      ]{" "}
      <div className="h-12 flex items-center justify-between px-6 bg-white border-b border-gray-200">
        <div className="flex rounded-md border border-gray-200 overflow-hidden">
          {["დღე", "კვირა", "თვე"].map((item) => (
            <button
              key={item}
              className={`px-4 py-1.5 text-sm ${
                item === "Week"
                  ? "bg-gray-100 font-medium text-gray-900"
                  : "bg-white text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button className="text-sm text-gray-600">ფილტრი</button>
      </div>
      <div className="flex-1 p-6">
        <div className="h-full bg-white rounded-xl border border-gray-200 overflow-hidden">
          <FullCalendar
            plugins={[timeGridPlugin, interactionPlugin]}
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
            selectable={false}
            editable={false}
            expandRows={true}
            height="100%"
            contentHeight="100%"
            dayHeaderFormat={{
              weekday: "short",
              day: "numeric",
            }}
            titleFormat={{
              year: "numeric",
              month: "long",
              day: "numeric",
            }}
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
                შექმენით ინდივიდუალური გაკვეთილი
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
                  დაწყება *
                </label>
                <div className="relative">
                  {/* Input field */}
                  <input
                    type="text"
                    placeholder="სამშაბათი, 13:00"
                    value={startText}
                    onChange={(e) => setStartText(e.target.value)}
                    onClick={toggleDropdown} // Open dropdown on input click
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <button
                    type="button"
                    onClick={toggleDropdown} // Open dropdown on arrow click
                    className="absolute right-2 top-2.5 text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 6l4 4 4-4z" />
                    </svg>
                  </button>

                  {/* Dropdown for selecting dates */}
                  {isDropdownOpen && (
                    <div className="relative mt-2">
                      <FullCalendar
                        plugins={[dayGridPlugin]} // Make sure to use the dayGridPlugin here
                        initialView="dayGridMonth"
                        dateClick={handleDateClick} // Handle date selection from calendar
                        headerToolbar={{
                          left: "",
                          center: "title",
                          right: "prev,next", // Exclude "today" from the header
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  defaultValue="ხანგრძლივობა: 60 წუთი"
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
                      daysOfWeek: [parsed.dayIndex], // 🔥 EVERY WEEK
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
    </div>
  );
}
