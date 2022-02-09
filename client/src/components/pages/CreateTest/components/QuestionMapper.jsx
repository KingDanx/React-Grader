import React, { useState, useEffect } from "react";
import useForm from "../../../../useForm";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import "../styles/QuestionMapper.css";

const QuestionMapper = ({ mapArray, newTest, validForm, setValidForm }) => {
  const [state, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  //an array full of empty values, map that array and put in the fields
  //if press button increase size of array

  //need arrays for each schema type attach for form values
  const addQuestion = () => {
    mapArray.push(null);
    forceUpdate();
  };

  const { formValue, handleChange, handleSubmit } = useForm(newTest);

  return (
    <div>
      Create Test
      <div>
        {mapArray.map((el, index) => {
          return (
            <div key={index}>
              <div>
                <TextField
                  sx={{ m: 1, maxWidth: 120 }}
                  id="test-input"
                  label="Number"
                  name={`inputNumber${index}`}
                  type="text"
                  onChange={(event) => handleChange(event)}
                  error={isNaN(formValue[`inputNumber${index}`]) ? true : false}
                  helperText={
                    isNaN(formValue[`inputNumber${index}`])
                      ? "Input a Number"
                      : null
                  }
                />
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel htmlFor="grouped-native-select">
                    Input Unit
                  </InputLabel>
                  <Select
                    native
                    defaultValue=""
                    id={`unit-select${index}`}
                    label="Units"
                    name={`inputUnit${index}`}
                    onChange={(event) => handleChange(event)}
                  >
                    <option aria-label="None" value="" />
                    <optgroup label="Temperature">
                      <option value={"kelvin"}>Kelvin</option>
                      <option value={"celsius"}>Celsius</option>
                      <option value={"fahrenheit"}>Fahrenheit</option>
                      <option value={"rankine"}>Rankine</option>
                    </optgroup>
                    <optgroup label="Volume">
                      <option value={"liters"}>Liters</option>
                      <option value={"tablespoons"}>Tablespoons</option>
                      <option value={"cubicInches"}>Cubic-Inches</option>
                      <option value={"cubicFeet"}>Cubic-Feet</option>
                      <option value={"cups"}>Cups</option>
                      <option value={"gallons"}>Gallons</option>
                    </optgroup>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel htmlFor="grouped-native-select">
                    Output Unit
                  </InputLabel>
                  <Select
                    native
                    defaultValue=""
                    id="unit-select"
                    label="Units"
                    name={`outputUnit${index}`}
                    onChange={(event) => handleChange(event)}
                  >
                    <option aria-label="None" value="" />
                    {formValue[`inputUnit${index}`] === `kelvin` ||
                    formValue[`inputUnit${index}`] === `celsius` ||
                    formValue[`inputUnit${index}`] === `fahrenheit` ||
                    formValue[`inputUnit${index}`] === `rankine` ? (
                      <optgroup label="Temperature">
                        <option value={"kelvin"}>Kelvin</option>
                        <option value={"celsius"}>Celsius</option>
                        <option value={"fahrenheit"}>Fahrenheit</option>
                        <option value={""}>Rankine</option>
                      </optgroup>
                    ) : null}
                    {formValue[`inputUnit${index}`] === `liters` ||
                    formValue[`inputUnit${index}`] === `tablespoons` ||
                    formValue[`inputUnit${index}`] === `cubicInches` ||
                    formValue[`inputUnit${index}`] === `cubicFeet` ||
                    formValue[`inputUnit${index}`] === `cups` ||
                    formValue[`inputUnit${index}`] === `gallons` ? (
                      <optgroup label="Volume">
                        <option value={"liters"}>Liters</option>
                        <option value={"tablespoons"}>Tablespoons</option>
                        <option value={"cubicInches"}>Cubic-Inches</option>
                        <option value={"cubicFeet"}>Cubic-Feet</option>
                        <option value={"cups"}>Cups</option>
                        <option value={"gallons"}>Gallons</option>
                      </optgroup>
                    ) : null}
                  </Select>
                </FormControl>
              </div>
            </div>
          );
        })}
      </div>
      <div className="create-test-buttons">
        <Button variant="outlined" onClick={() => addQuestion()}>
          Add Question
        </Button>
        <Button
          sx={{ marginLeft: "12px" }}
          variant="contained"
          disabled={
            mapArray.some(
              (so, i) =>
                formValue[`inputUnit${i}`] === "" || !formValue[`inputUnit${i}`]
            ) === true
              ? true
              : mapArray.some(
                  (so, i) =>
                    formValue[`outputUnit${i}`] === "" ||
                    !formValue[`outputUnit${i}`]
                ) === true
              ? true
              : mapArray.some(
                  (so, i) =>
                    (formValue[`inputNumber${i}`] === "" ||
                    !formValue[`inputNumber${i}`]) || isNaN(formValue[`inputNumber${i}`])
                ) === true
              ? true
              : false
          }
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default QuestionMapper;
