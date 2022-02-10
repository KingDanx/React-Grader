import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import ListSubheader from "@mui/material/ListSubheader";
import axios from "axios";

const GradeTest = () => {
  const [test, setTest] = useState({});
  const [allTests, setAllTests] = useState([]);

  const getATest = () => {};

  const getAllTest = async () => {
    await axios
      .get(`http://localhost:5000/api/tests/all`
      )
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
        {allTests.map((el, i) => <div key={i}>{el.testName}</div>)}
      </div>
    </div>
  );
};

export default GradeTest;
