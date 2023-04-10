import React, { useEffect } from "react";
import Dashboard from "./pages/dashboard/dashboard";
import "./App.css";
import "antd/dist/reset.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Lottery from "./components/lottery";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/option1");
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="option1" element={<Lottery />} />
        <Route path="option2" element={<Lottery />} />
        <Route path="*" element={<div>404 NOT FOUND</div>} />
      </Route>
    </Routes>
  );
}

export default App;
