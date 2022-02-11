import React, { useState, useEffect } from "react";
import axios from "axios";
import TestPicker from "./components/TestPicker";
import TestGrader from "./components/TestGrader";

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

  return (
    <div>
      Grade Test
      <div>
        <TestPicker allTests={allTests} getATest={getATest}/>
        <TestGrader test={test}/>
      </div>
    </div>
  );
};

export default GradeTest;
