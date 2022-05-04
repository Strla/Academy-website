import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Course from "./pages/Course/Course";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="course/:id" element={<Course />} />
      </Routes>
    </>
  );
}

export default App;
