import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Header() {
  const navigate = useNavigate();

  return (
    <nav className="w-full flex justify-between items-center py-4 shadow-sm bg-white px-10">
      {/* Logo */}
      <div
        className="text-2xl font-bold text-blue-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        M
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li className="cursor-pointer">Find Tutors</li>
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Reviews</li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        {/* Sign in */}
        <Button title="Sign in" onClick={() => navigate("/login")} />

        <Button
          className="bg-primaryColor text-white px-4 py-2 rounded-lg font-medium"
          title="Signup Tutor"
          onClick={() => navigate("/signup-tutor")}
        />

        {/* Get Started */}
        <Button
          className="bg-primaryColor text-white px-4 py-2 rounded-lg font-medium"
          title="Get Started"
          onClick={() => navigate("/signup-student")}
        />

        <Button
          className="bg-primaryColor text-white px-4 py-2 rounded-lg font-medium"
          title="CALENDAR"
          onClick={() => navigate("/tutor-calendar")}
        />
        <Button
          className="bg-primaryColor text-white px-4 py-2 rounded-lg font-medium"
          title="TUTOR PAGE"
          onClick={() => navigate("/tutor-page")}
        />
      </div>
    </nav>
  );
}
