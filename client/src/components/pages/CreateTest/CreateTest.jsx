import React, { useState, useEffect } from "react";
import axios from "axios";
import useForm from "../../../useForm";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const CreateTask = () => {
  const [inputNumber, setInputNumber] = React.useState("");
  const [error, setError] = useState(false);

  const newTest = () => {};

  //an array full of empty values, map that array and put in the fields
  //if press button increase size of array

  let mapArray = [null, null, null];

  //need arrays for each schema type attach for form values

  const { formValue, handleChange, handleSubmit, setFormValue, handleCheck } =
    useForm(newTest);

  const handleNumberSelect = (event) => {
    setInputNumber(event.target.value);
  };

  return (
    <div>
      Crate Test
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
                    id="unit-select"
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
              </div>
              <div>
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
                <TextField
                  sx={{ m: 1, maxWidth: 120 }}
                  id="test-input"
                  label="Number"
                  name={`outputNumber${index}`}
                  type="text"
                  onChange={(event) => handleChange(event)}
                  error={
                    isNaN(formValue[`outputNumber${index}`]) ? true : false
                  }
                  helperText={
                    isNaN(formValue[`outputNumber${index}`])
                      ? "Input a Number"
                      : null
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreateTask;
