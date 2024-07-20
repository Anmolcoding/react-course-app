import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseListings from "./pages/CourseListings";
import EditcourseDetail from "./pages/EditcourseDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/CourseListings" element={<CourseListings />} />
        <Route path="/" element={<CourseListings />} />
        <Route path="/EditcourseDetail" element={<EditcourseDetail />} />
        <Route path="/EditcourseDetail/:id" element={<EditcourseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
