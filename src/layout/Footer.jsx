import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Header() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#0B1220] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-3xl font-bold text-blue-400">M</span>
            </div>
            <h2 className="text-xl font-semibold">Memora</h2>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Connecting Passionate Tutors
            <br />
            With Eager Learners Worldwide.
          </p>

          {/* Social icons */}
          <div className="flex gap-4">
            <a href="#" className="text-blue-500 text-2xl hover:opacity-80">
              <i className="fab fa-facebook">INSTAGRAM</i>
            </a>
            <a href="#" className="text-pink-500 text-2xl hover:opacity-80">
              <i className="fab fa-instagram">FACEBOOK</i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">For Students</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Find Tutors</li>
            <li className="hover:text-white cursor-pointer">Browse Subjects</li>
            <li className="hover:text-white cursor-pointer">How It Works</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">For Tutors</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Become A Tutor</li>
            <li className="hover:text-white cursor-pointer">Tutor Resources</li>
            <li className="hover:text-white cursor-pointer">Success Stories</li>
            <li className="hover:text-white cursor-pointer">Support</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms Of Service
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
