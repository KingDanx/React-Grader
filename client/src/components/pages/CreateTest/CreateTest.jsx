import React, { useState, useEffect } from "react";
import axios from "axios";
import useForm from "../../../useForm";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import QuestionMapper from "./components/QuestionMapper";
import "./styles/CreateTest.css"

const CreateTask = () => {
  const [inputNumber, setInputNumber] = React.useState("");
  const [error, setError] = useState(false);

  const newTest = () => {};

  //an array full of empty values, map that array and put in the fields
  //if press button increase size of array

  let mapArray = [null];

  //need arrays for each schema type attach for form values

  const { formValue, handleChange, handleSubmit, setFormValue, handleCheck } =
    useForm(newTest);

  const handleNumberSelect = (event) => {
    setInputNumber(event.target.value);
  };

  return (
    <div className="create-test-container"> 
      <QuestionMapper mapArray={mapArray} newTest={newTest} />
      <div className="create-test-buttons">
        <Button variant="outlined">Add Question</Button>
        <Button sx={{ marginLeft: "12px" }} variant="contained">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CreateTask;
