import React, { useState, useEffect } from "react";
import QuestionMapper from "./components/QuestionMapper";
import "./styles/CreateTest.css"

const CreateTask = () => {
    const [mapArray, setMapArray] = useState([null])

  return (
    <div className="create-test-container"> 
      <QuestionMapper mapArray={mapArray}/>
    </div>
  );
};

export default CreateTask;
