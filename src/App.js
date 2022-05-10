import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Course from "./pages/Course/Course";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="course/:id" element={<Course />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<Register />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
