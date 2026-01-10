import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BecomeTutor from "./pages/CreateTutorProfile/BecomeTutor";
import SignupTutor from "./pages/SignupTutor";
import SignupStudent from "./pages/SignupStudent";
import Login from "./pages/Login";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import TutorCalendar from "./pages/Calendar/TutorCalendar";
import TutorPage from "./pages/TutorPage/TutorPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* ROUTES With Header and  Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup-student" element={<SignupStudent />} />
          <Route path="/signup-tutor" element={<SignupTutor />} />
          <Route path="/become-tutor" element={<BecomeTutor />} />
          <Route path="/tutor-calendar" element={<TutorCalendar />} />
          <Route path="/tutor-page" element={<TutorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
