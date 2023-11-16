import { Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import TodosLogic from "@/components/TodosLogic";
import About from "@/routes/About";
import Home from "@/routes/Home";
import Profile from "@/routes/Profile";
import Login from "@/routes/Login";
import NotMatch from "@/routes/NotMatch";
import Layout from "./Layout";
import SinglePage from "@/routes/singlePage";
import ProtectedRoute from "./ProtectedRoute";
const TodoApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path=":slug" element={<SinglePage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
};
export default TodoApp;
