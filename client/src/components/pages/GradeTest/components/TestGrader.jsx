import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import useForm from "../../../../useForm";
import axios from "axios";
import Button from "@mui/material/Button";

const TestGrader = ({ test }) => {
  
    const userOutput = [];

    const gradeTest = async () => {
    await axios
    .put(`http://localhost:5000/api/tests/gradeTest/${test._id}`, {
      inputNumber: test.inputNumbers,
      inputUnit: test.inputUnit,
      outputUnit: test.outputUnit,
      outputNumber: !test.outputNumber ? null : test.outputNumber.map((el, i) => formValue[`question${i}`])
    })
    .then((res) => {
      console.log(res);
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};

  const { formValue, handleChange, handleSubmit, setFormValue } = useForm(gradeTest);
  useEffect(() => {
    setFormValue('');
  }, [test]);

  return (
    <div>
      {!test.inputNumber
        ? <h2>{"Select a test to grade."}</h2>
        : <h2>{`Grading ${test.testName}`}</h2>}
      <div>
        {!test.inputNumber
          ? null
          : test.inputNumber.map((el, i) => (
              <div key={i}>
                Convert {el} <b>{test.inputUnit[i]}</b> to <b>{test.outputUnit[i]}</b>
                <TextField
                  onChange={(event) => handleChange(event)}
                  size="small"
                  name={`question${i}`}
                  value={!formValue[`question${i}`] ? "" : formValue[`question${i}`]}/>
                {test.correct[i] === null ? "invalid" : null}  check true/false - backend route
              </div>
            ))}
      </div>
      {!test.inputNumber ? null : <Button variant="contained" onClick={(event)=>handleSubmit(event)}>Grade Test</Button>}
    </div>
  );
};

export default TestGrader;
