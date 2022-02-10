import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import useForm from "../../../../useForm";

const TestGrader = ({ test }) => {
  const gradeTest = async () => {};

  const { formValue, handleChange, handleSubmit } = useForm(gradeTest);

  return (
    <div>
      {!test.inputNumber
        ? "Select a test to grade."
        : `Grading ${test.testName}`}
      <div>
        {!test.inputNumber
          ? null
          : test.inputNumber.map((el, i) => (
              <div key={i}>
                Convert {el} {test.inputUnit[i]} to {test.outputUnit[i]}{" "}
                <TextField
                  onChange={(event) => handleChange(event)}
                  size="small"
                  name={`question${i}`}                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default TestGrader;
