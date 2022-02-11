import React, { useState, useEffect } from "react";
import axios from "axios";
import useForm from "../../../../useForm";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import "../styles/QuestionMapper.css";

const QuestionMapper = ({ mapArray, validForm, setValidForm }) => {
  const [inputNumbers, setInputNumbers] = useState([]);
  const [outputNumbers, setOutputNumbers] = useState([]);
  const [inputUnit, setInputUnit] = useState([]);
  const [outputUnit, setOutputUnit] = useState([]);
  const [correct, setCorrect] = useState([]);
  const [state, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const addQuestion = (inNum, inType, outType) => {
    inputNumbers.push(inNum);
    inputUnit.push(inType);
    outputUnit.push(outType);
    correct.push(null);
    outputNumbers.push(null);
    mapArray.push(null);
    forceUpdate();
  };

  const finishForm = (event, inNum, inType, outType) => {
    inputNumbers.push(inNum);
    inputUnit.push(inType);
    outputUnit.push(outType);
    correct.push(null);
    outputNumbers.push(null);
    
    handleSubmit(event);
    alert(`${formValue.testName} has been created!`);
    window.location.reload();
  };

  const newTest = async () => {
    await axios
      .post(`http://localhost:5000/api/tests/createTest`, {
        testName: formValue.testName,
        inputNumber: inputNumbers,
        outputNumber: outputNumbers,
        inputUnit: inputUnit,
        correct: correct,
        outputUnit: outputUnit,
        studentGrade: 0,
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

  const { formValue, handleChange, handleSubmit } = useForm(newTest);

  return (
    <div>
      Create Test
      <div>
        <TextField
          id="test-name"
          label="Test Name"
          variant="standard"
          name={"testName"}
          onChange={(event) => handleChange(event)}
          sx={{ marginBottom: "18px" }}
        />
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
                      <option value={"cubic inches"}>Cubic Inches</option>
                      <option value={"cubic feet"}>Cubic Feet</option>
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
                        <option value={"rankine"}>Rankine</option>
                      </optgroup>
                    ) : null}
                    {formValue[`inputUnit${index}`] === `liters` ||
                    formValue[`inputUnit${index}`] === `tablespoons` ||
                    formValue[`inputUnit${index}`] === `cubic inches` ||
                    formValue[`inputUnit${index}`] === `cubic feet` ||
                    formValue[`inputUnit${index}`] === `cups` ||
                    formValue[`inputUnit${index}`] === `gallons` ? (
                      <optgroup label="Volume">
                        <option value={"liters"}>Liters</option>
                        <option value={"tablespoons"}>Tablespoons</option>
                        <option value={"cubic inches"}>Cubic Inches</option>
                        <option value={"cubic feet"}>Cubic Feet</option>
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
        <Button
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
                    formValue[`inputNumber${i}`] === "" ||
                    !formValue[`inputNumber${i}`] ||
                    isNaN(formValue[`inputNumber${i}`])
                ) === true
              ? true
              : !formValue.testName
              ? true
              : false
          }
          variant="outlined"
          onClick={() =>
            addQuestion(
              formValue[`inputNumber${mapArray.length - 1}`],
              formValue[`inputUnit${mapArray.length - 1}`],
              formValue[`outputUnit${mapArray.length - 1}`]
            )
          }
        >
          Add Question
        </Button>
        <Button
          onClick={(event) =>
            finishForm(event,
              formValue[`inputNumber${mapArray.length - 1}`],
              formValue[`inputUnit${mapArray.length - 1}`],
              formValue[`outputUnit${mapArray.length - 1}`]
             )
          }
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
                    formValue[`inputNumber${i}`] === "" ||
                    !formValue[`inputNumber${i}`] ||
                    isNaN(formValue[`inputNumber${i}`])
                ) === true
              ? true
              : !formValue.testName
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
