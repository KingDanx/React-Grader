import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import useForm from "../../../../useForm";

const TestGrader = ({ test }) => {
  const gradeTest = async () => {};

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
                Convert {el} {test.inputUnit[i]} to {test.outputUnit[i]}{" "}
                <TextField
                  onChange={(event) => handleChange(event)}
                  size="small"
                  name={`question${i}`}
                  value={!formValue[`question${i}`] ? "" : formValue[`question${i}`]}/>
              </div>
            ))}
      </div>
    </div>
  );
};

export default TestGrader;
