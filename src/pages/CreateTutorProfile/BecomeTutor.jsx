import React, { useState } from "react";
import PlatformRules from "./PlatformRules";
import TutorProfileSetup from "./TutorProfileSetup";
import TeachingDetails from "./TeachingDetails";
import TutorExperience from "./TutorExperience";
import RegistrationComplete from "./RegistrationCompleted";
import Verification from "./Verification";
import Button from "../../components/Button";

export default function BecomeTutor() {
  const [step, setStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showSmsBox, setShowSmsBox] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [smsLoading, setSmsLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);

  const steps = [
    { id: 1, label: "საბაზისო ინფორმაცია", sub: "პირადი დეტალები" },
    { id: 2, label: "სასწავლო დეტალები", sub: "საგნები" },
    { id: 3, label: "პლატფორმის წესები", sub: "Terms & agreements" },
    { id: 4, label: "ვერიფიკაცია", sub: "დოკუმენტები" },
    { id: 5, label: "პროფილის შექმნა", sub: "ფოტო & ვიდეო" },
    { id: 6, label: "პროფილის შექმნა", sub: "მედია" },
  ];

  const sendOtp = async () => {
    if (!phone) {
      setErrorMsg("Enter phone first");
      return;
    }

    setErrorMsg("");
    setSmsLoading(true);

    try {
      const token = localStorage.getItem("access_token");

      const res = await fetch(
        "http://memora-alb-877723400.eu-central-1.elb.amazonaws.com/api/v1/teachers/me/phone/otp:send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ phoneNumber: phone }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data?.message || "Failed to send SMS");
        setSmsLoading(false);
        return;
      }

      setShowSmsBox(true);
    } catch (err) {
      setErrorMsg("Network error");
    }

    setSmsLoading(false);
  };

  const verifyOtp = async () => {
    if (!otpCode) {
      setErrorMsg("Enter code");
      return;
    }

    setErrorMsg("");
    setVerifyLoading(true);

    try {
      const token = localStorage.getItem("access_token");

      const res = await fetch(
        "http://memora-alb-877723400.eu-central-1.elb.amazonaws.com/api/v1/teachers/me/phone/otp:verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            phoneNumber: phone,
            code: otpCode,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data?.message || "Invalid code");
        setVerifyLoading(false);
        return;
      }

      setIsPhoneVerified(true);
      setShowSmsBox(false);
    } catch (err) {
      setErrorMsg("Network error");
    }

    setVerifyLoading(false);
  };

  const handleSubmitStep1 = async () => {
    setErrorMsg("");

    const names = fullName.trim().split(" ");
    const firstName = names[0] || "";
    const lastName = names.slice(1).join(" ") || "";

    if (!firstName || !lastName || !phone || !dob) {
      setErrorMsg("Please fill all fields");
      return;
    }

    if (!isPhoneVerified) {
      setErrorMsg("Verify your phone number first");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("access_token");

      const res = await fetch(
        "http://memora-alb-877723400.eu-central-1.elb.amazonaws.com/api/v1/teachers/me/step1",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phoneNumber: phone,
            dateOfBirth: dob,
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        setErrorMsg(err?.message || "Something went wrong");
        setLoading(false);
        return;
      }

      const data = await res.json();
      localStorage.setItem("teacherId", data.teacherId);
      setStep(2);
    } catch (err) {
      setErrorMsg("Network error. Try again.");
    }

    setLoading(false);
  };
  const renderStepButtons = () => (
    <div className="hidden sm:flex items-center gap-6 mt-8">
      {steps.map((s, index) => (
        <div key={index} className="flex items-center flex-col">
          <button
            onClick={() => setStep(s.id)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border  
              ${
                step === s.id
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-300"
              }`}
          >
            {s.id}
          </button>
          <p className="text-xs text-gray-600 mt-1">{s.label}</p>
          <p className="text-[11px] text-gray-500 mt-5 text-center">{s.sub}</p>
        </div>
      ))}
    </div>
  );

  const renderProgressLine = () => (
    <div className="flex flex-col items-center sm:hidden w-full max-w-xl mt-6">
      {/* Progress bar */}
      <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        {Array.from({ length: steps.length }).map((_, index) => (
          <div
            key={index}
            className={`flex-1 h-full transition-all duration-300 ${
              index < step ? "bg-blue-600" : "bg-gray-300"
            }`}
            style={{ marginRight: index < steps.length - 1 ? "2px" : "0" }}
          />
        ))}
      </div>
      {/* Page counter */}
      <p className="text-xs text-gray-600 mt-2">
        {step}/{steps.length}
      </p>
    </div>
  );

  if (isCompleted) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#FAF5FF] px-6 py-10">
        <RegistrationComplete />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#FAF5FF] flex flex-col items-center px-6 py-10">
      <h2 className="text-lg sm:text-xl text-center font-semibold text-blue-600">
        გახდი კერძო მასწავლებელი
      </h2>
      <p className="text-gray-600 mt-1 sm:text-base text-center">
        შემოუერთდი ჩვენი განათლების საზოგადოებას.
      </p>

      {renderStepButtons()}
      {renderProgressLine()}

      <div className="flex items-center gap-6 mt-8">
        {/* {steps.map((s, index) => (
          <div key={index} className="flex items-center flex-col">
            <button
              onClick={() => setStep(s.id)}
              className={`w-10 h-10 flex items-center justify-center rounded-full border  
                ${
                  step === s.id
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-300"
                }`}
            >
              {s.id}
            </button>
            <p className="text-xs text-gray-600 mt-1">{s.label}</p>
            <p className="text-[11px] text-gray-500 mt-5 text-center">
              {s.sub}
            </p>
          </div>
        ))} */}
      </div>

      <div className="mt-10 w-full max-w-2xl">
        {step === 1 && (
          <div className="bg-white p-10 rounded-xl shadow-md border">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl">
                👤
              </div>
              <h3 className="text-lg font-semibold mt-4">
                საბაზისო ინფორმაცია
              </h3>
              <p className="text-gray-600 text-sm">
                დავიწყოთ შენი პირადი მონაცემებით
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {/* FULL NAME */}
              <div>
                <label className="font-medium text-sm">სრული სახელი **</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 mt-1"
                />
              </div>

              {/* PHONE NUMBER */}
              <div>
                <label className="font-medium text-sm">ტელეფონის ნომერი*</label>
                <div className="flex gap-2 mt-1">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                  <Button
                    title="SMS-ის გაგზავნა"
                    className="bg-purple-300 text-gray-800 px-3 rounded-lg"
                    onClick={sendOtp}
                    disabled={smsLoading}
                  />
                </div>

                {isPhoneVerified && (
                  <p className="text-green-600 text-sm mt-1">
                    ✔ Phone verified
                  </p>
                )}
              </div>

              {/* OTP BOX */}
              {showSmsBox && (
                <div className="p-4 bg-blue-50 rounded-xl">
                  <label className="font-medium text-sm">
                    Enter SMS Code *
                  </label>
                  <div className="flex items-center gap-3 mt-1">
                    <input
                      type="text"
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      placeholder="Enter 4 digit code"
                      className="flex-1 p-3 border rounded-lg"
                    />
                    <Button
                      title="Verify"
                      className="px-4 py-2 rounded-lg bg-blue-400 text-white"
                      onClick={verifyOtp}
                      disabled={verifyLoading}
                    />
                  </div>
                </div>
              )}

              {/* DATE OF BIRTH */}
              <div>
                <label className="font-medium text-sm">დაბადების თარიღი*</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 mt-1"
                />
              </div>

              {/* ERROR */}
              {errorMsg && (
                <p className="text-red-500 text-sm mt-2">{errorMsg}</p>
              )}
              <Button
                title="გაგრძელება"
                onClick={handleSubmitStep1}
                disabled={loading}
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-500 text-white py-3 rounded-lg font-medium disabled:opacity-70"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <TeachingDetails
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}
        {step === 3 && <PlatformRules setStep={setStep} />}
        {step === 4 && <Verification setStep={setStep} />}
        {step === 5 && <TutorProfileSetup setStep={setStep} />}
        {step === 6 && (
          <TutorExperience
            onBack={() => setStep(4)}
            onNext={() => setIsCompleted(true)}
          />
        )}
      </div>
    </div>
  );
}
