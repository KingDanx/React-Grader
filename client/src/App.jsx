import React, { useState, useEffect } from 'react';
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";
import CreateStudent from "./components/pages/CreateStudent/CreateStudent";
import CreateTest from "./components/pages/CreateTest/CreateTest";
import GradeTest from "./components/pages/GradeTest/GradeTest";
import ResponsiveAppBar from './ResponsiveAppBar.jsx';
import "./App.css";

const App = () => {
  return (
    <div>
      <ResponsiveAppBar/>
      <Routes>
        <Route
          path="/"
          element={
            <GradeTest/>
          }
        ></Route>
        <Route
          path="createTest"
          element={
            <CreateTest/>
          }
        ></Route>
        <Route
          path="createStudent"
          element={
            <CreateStudent
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
