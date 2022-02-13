import React, { useState, useEffect } from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";
import CreateStudent from "./components/pages/CreateStudent/CreateStudent";
import CreateTest from "./components/pages/CreateTest/CreateTest";
import GradeTest from "./components/pages/GradeTest/GradeTest";
import ResponsiveAppBar from "./ResponsiveAppBar.jsx";
import "./App.css";

const App = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="app-padding">
        <Routes>
          <Route path={`/`} element={<GradeTest />}></Route>
          <Route path="createtest" element={<CreateTest />}></Route>
          <Route path="createstudent" element={<CreateStudent />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
