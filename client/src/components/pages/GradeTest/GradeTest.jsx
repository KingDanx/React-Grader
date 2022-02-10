import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import useForm from "../../../useForm";
import TestPicker from "./components/TestPicker";

const GradeTest = () => {
  const [test, setTest] = useState({});
  const [allTests, setAllTests] = useState([]);

  const getATest = async (test) => {
    await axios
      .get(`http://localhost:5000/api/tests/${test}`)
      .then((res) => {
        setTest(res.data);
      })
      .catch((error) => {
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

  const getAllTest = async () => {
    await axios
      .get(`http://localhost:5000/api/tests/all`)
      .then((res) => {
        setAllTests(res.data);
      })
      .catch((error) => {
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

  useEffect(() => {
    getAllTest();
  }, []);

  const { formValue, handleChange, handleSubmit } = useForm();

  return (
    <div>
      Grade Test
      <div>
        <TestPicker allTests={allTests} getATest={getATest}/>
        
              {/* {el.inputNumber.map((li, i) => (
                <div key={i}>
                  Convert {li} {el.inputUnit[i]} to {el.outputUnit[i]}{" "}
                  <TextField
                    name={`studentInput${index}${i}`}
                    onChange={(event) => handleChange(event)}
                  />
                </div>
              ))} */}
      </div>
    </div>
  );
};

export default GradeTest;
