import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionMapper from "./components/QuestionMapper";
import "./styles/CreateTest.css"

const CreateTask = () => {
    const [mapArray, setMapArray] = useState([null])

  const newTest = () => {};

  //an array full of empty values, map that array and put in the fields
  //if press button increase size of array

  

  //need arrays for each schema type attach for form values

  return (
    <div className="create-test-container"> 
      <QuestionMapper mapArray={mapArray} newTest={newTest}/>
    </div>
  );
};

export default CreateTask;
