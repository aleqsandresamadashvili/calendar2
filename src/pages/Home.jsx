import React from "react";
import Button from "../components/Button";

export default function TutorLandingPage() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 shadow-sm bg-white px-10">
        <div className="text-2xl font-bold text-blue-600">M</div>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="cursor-pointer">Find Tutors</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Reviews</li>
        </ul>

        <div className="flex items-center space-x-4">
          <Button title="Sign in" />
          <Button
            className="bg-primaryColor text-white px-4 py-2 rounded-lg font-medium"
            title="Get Started"
          />
        </div>
      </nav>

      <div className="w-full bg-blue-50 py-16 px-6 flex flex-col md:flex-row items-center justify-between pb-[200px]">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Find Qualified Private Tutors In Georgia, Online Or In Person.
          </h1>
          <p className="text-gray-600 text-lg">
            Search By Subject, Budget, And Availability. Book In Seconds.
          </p>
          <Button
            className="bg-primaryColor text-white px-6 py-3 rounded-lg font-medium w-fit"
            title="Find Your Tutor →
"
          />
        </div>

        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/your-image-path.png"
            alt="Tutor"
            className="rounded-xl shadow-md w-80 md:w-96"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="w-full flex flex-wrap justify-center text-center py-10 gap-10 bg-white">
        <div>
          <p className="text-3xl font-bold text-primaryColor">300+</p>
          <p className="text-gray-600">Verified Tutors</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-primaryColor">40+</p>
          <p className="text-gray-600">Subjects</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-primaryColor">10,000+</p>
          <p className="text-gray-600">Lessons Completed</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-primaryColor">
            4.9/5 ⭐⭐⭐⭐⭐
          </p>
          <p className="text-gray-600">Average Rating</p>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="w-full px-6 py-12 bg-blue-50 mt-[150px]">
        <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Mathematics",
            "English",
            "Georgian",
            "History",
            "Exam Prep",
            "Physics",
            "Chemistry",
            "SAT/IELTS",
            "Primary School Tutors",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-secondaryColor text-gray-800 rounded-lg py-4 px-4 text-center font-medium hover:bg-blue-200 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Memora */}
      <div className="w-full bg-blue-50 py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Choose Memora?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're Committed To Creating The Best Learning Experience For Both
            Students And Tutors.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-primaryColor text-4xl mb-3">⚙️</div>
            <h3 className="text-xl font-semibold mb-2">Verified Tutors</h3>
            <p className="text-gray-600">
              All Tutors Go Through Our Rigorous Verification Process To Ensure
              Quality Education.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-primaryColor text-4xl mb-3">💳</div>
            <h3 className="text-xl font-semibold mb-2">
              Safe Payments & Refund Protection
            </h3>
            <p className="text-gray-600">
              Your Payments Are Protected And Only Released Once The Lesson Is
              Completed.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-primaryColor text-4xl mb-3">⭐</div>
            <h3 className="text-xl font-semibold mb-2">
              Reviews From Real Parents
            </h3>
            <p className="text-gray-600">
              Every Rating And Review Comes From Verified Families Who Booked
              Lessons Through Memora.
            </p>
          </div>
        </div>

        {/* Featured Tutors */}
        <h3 className="text-2xl font-bold mb-6">Featured Tutors</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center"
            >
              <img
                src="/mnt/data/Screenshot 2025-11-20 215240.png"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                alt="Tutor"
              />

              <h4 className="text-lg font-semibold">John Doe.</h4>
              <p className="text-gray-600 text-sm">English Teacher</p>

              <p className="text-gray-900 font-semibold mt-3">$35/hr</p>

              <Button
                className="mt-4 border border-primaryColor text-primaryColor px-4 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition"
                title="Full Profile"
              />

              <p className="text-yellow-500 text-xl mt-3">★★★★☆</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-[#F5F8FF]">
        {/* ===================== HEADER ===================== */}
        <div className="text-center pt-10">
          <h2 className="text-xl font-semibold">How Memora Works</h2>
          <p className="text-gray-600 mt-2">
            Getting Started Is Simple. Whether You're Looking To Learn Or Teach,
            We've Made The Process Seamless.
          </p>
        </div>

        {/* ===================== 3 STEPS ===================== */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-8 px-6">
          {/* ITEM */}
          <div className="bg-white p-6 rounded-xl shadow-sm w-full max-w-sm text-center">
            <img src="/icons/search.png" className="mx-auto w-10 mb-3" alt="" />
            <h3 className="font-semibold">Search For A Tutor</h3>
            <p className="text-sm text-gray-600 mt-2">
              Filter By Subject, Price, Location, And Availability.
            </p>
          </div>

          {/* ITEM */}
          <div className="bg-white p-6 rounded-xl shadow-sm w-full max-w-sm text-center">
            <img
              src="/icons/calendar.png"
              className="mx-auto w-10 mb-3"
              alt=""
            />
            <h3 className="font-semibold">Book A Lesson</h3>
            <p className="text-sm text-gray-600 mt-2">
              Choose A Preferred Time From The Tutor's Calendar.
            </p>
          </div>

          {/* ITEM */}
          <div className="bg-white p-6 rounded-xl shadow-sm w-full max-w-sm text-center">
            <img
              src="/icons/progress.png"
              className="mx-auto w-10 mb-3"
              alt=""
            />
            <h3 className="font-semibold">Learn & Track Progress</h3>
            <p className="text-sm text-gray-600 mt-2">
              Online Or In-Person. Safe Payments. Verified Tutors.
            </p>
          </div>
        </div>

        {/* ===================== TESTIMONIAL SECTION ===================== */}
        <div className="mt-20 text-center">
          <h2 className="text-xl font-semibold">Words Of Praise From Others</h2>
          <p className="text-gray-600">About Our Presence.</p>
        </div>

        {/* Testimonials */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-6 justify-items-center">
          {/* CARD */}
          <div className="bg-white p-6 rounded-xl shadow-sm max-w-md">
            <p className="text-gray-700 text-sm">
              We found an amazing math tutor in just a few minutes. My
              daughter’s confidence has improved greatly. She actually looks
              forward to lessons now.
            </p>
            <div className="mt-4">
              <p className="font-semibold">Nino D.</p>
              <p className="text-xs text-gray-500">Parent of a 7th Grader</p>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white p-6 rounded-xl shadow-sm max-w-md">
            <p className="text-gray-700 text-sm">
              Booking a tutor was incredibly easy. Within a day, we had a
              verified English tutor who helped our son improve his grades after
              only a few sessions.
            </p>
            <div className="mt-4">
              <p className="font-semibold">Giorgi Bambiara</p>
              <p className="text-xs text-gray-500">Parent of a 10th Grader</p>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white p-6 rounded-xl shadow-sm max-w-md">
            <p className="text-gray-700 text-sm">
              We found an amazing math tutor and the entire process was smooth
              and professional. Highly recommended!
            </p>
            <div className="mt-4">
              <p className="font-semibold">Nino D.</p>
              <p className="text-xs text-gray-500">Parent of a 7th Grader</p>
            </div>
          </div>
        </div>

        {/* ===================== CTA SECTION ===================== */}
        <div className="bg-primaryColor text-white text-center mt-20 py-16 px-6">
          <h2 className="text-xl font-semibold">
            Ready To Start Your Learning Journey?
          </h2>
          <p className="text-sm mt-2">
            Join Thousands Of Students And Tutors Who Are Already Part Of The
            Memora Community.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <Button
              className="bg-white text-primaryColor px-6 py-2 rounded-lg font-medium shadow"
              title="Find Your Tutor"
            />
            <Button
              className="bg-transparent border border-white px-6 py-2 rounded-lg font-medium"
              title="Become A Tutor"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
