import React, { useState, useEffect } from "react";
import axios from "axios";
import useForm from "../../../useForm";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import QuestionMapper from "./components/QuestionMapper";
import "./styles/CreateTest.css"

const CreateTask = () => {
  const [state, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [mapArray, setMapArray] = useState([null])

  const newTest = () => {};

  //an array full of empty values, map that array and put in the fields
  //if press button increase size of array

  

  const addQuestion = () => {
    mapArray.push(null);
    forceUpdate();
  }

  //need arrays for each schema type attach for form values

  return (
    <div className="create-test-container"> 
      <QuestionMapper mapArray={mapArray} newTest={newTest} />
      <div className="create-test-buttons">
        <Button variant="outlined" onClick={()=>addQuestion()}>Add Question</Button>
        <Button sx={{ marginLeft: "12px" }} variant="contained">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CreateTask;
