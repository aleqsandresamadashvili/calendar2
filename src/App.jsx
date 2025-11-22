import { useState, useEffect } from "react";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Route,
  ScrollRestoration,
  useNavigate,
} from "react-router-dom";

function App() {
  return <Home />;
}

export default App;
